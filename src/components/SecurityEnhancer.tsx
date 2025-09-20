import React, { useCallback, useEffect, useRef, useState } from "react";
interface SecurityEvent {
  id: string,type: 'xss_attempt' | 'injection_attempt' | 'suspicious_activity' | 'security_violation',severity: 'low' | 'medium' | 'high' | 'critical',description: string,timestamp: number,userAgent: string;
  ipAddress?: string,
  payload?: string,
  blocked: boolean
};

interface SecurityConfig {
  enableXSSProtection: boolean,enableCSRFProtection: boolean,enableInputValidation: boolean,enableRateLimiting: boolean,enableSecurityHeaders: boolean,enableContentSecurityPolicy: boolean

export const SecurityEnhancer: React.FC = () => {
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
const [config, setConfig] = useState<SecurityConfig>({
    enableXSSProtection: true,enableCSRFProtection: true,enableInputValidation: true,enableRateLimiting: true,enableSecurityHeaders: true,enableContentSecurityPolicy: true
  });
const [isActive, setIsActive] = useState(false);
const [threatLevel, setThreatLevel] = useState<'low' | 'medium' | 'high'>('low'),
  const [blockedRequests, setBlockedRequests] = useState(0);
const [allowedRequests, setAllowedRequests] = useState(0);
const rateLimitMap = useRef<Map<string, { count: number, resetTime: number }>>(new Map());
const suspiciousPatterns = useRef<RegExp[]>([]);
const xssPatterns = useRef<RegExp[]>([]);
  // Initialize security patterns
  useEffect(() => {
    // XSS patterns
    xssPatterns.current = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript: /gi;
      /on\w+\s*=/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
      /<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi,
      /<input\b[^<]*(?:(?!<\/input>)<[^<]*)*<\/input>/gi,
      /<textarea\b[^<]*(?:(?!<\/textarea>)<[^<]*)*<\/textarea>/gi,
      /<select\b[^<]*(?:(?!<\/select>)<[^<]*)*<\/select>/gi
    ],

    // Suspicious patterns
    suspiciousPatterns.current = [
      /union\s+select/gi,
      /drop\s+table/gi,
      /insert\s+into/gi,
      /update\s+set/gi,
      /delete\s+from/gi,
      /exec\s*\(/gi,
      /eval\s*\(/gi,
      /document\.cookie/gi,
      /window\.location/gi,
      /innerHTML\s*=/gi,
      /outerHTML\s*=/gi,
      /document\.write/gi,
      /document\.writeln/gi
    ],
  }, []),

  // Generate unique event ID
  const generateEventId = useCallback(() => {
    return 'security_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
}, []),

  // Log security event
  const logSecurityEvent = useCallback((event: Omit<SecurityEvent, 'id' | 'timestamp'>) => {
    const securityEvent: SecurityEvent = {
      ...event,
      id: generateEventId();timestamp: Date.now()
    };
    setSecurityEvents(prev => [...prev, securityEvent]);
    // Update threat level based on severity
    if (event.severity === 'critical' || event.severity === 'high') {
      setThreatLevel('high')
} else if (event.severity === 'medium') {
      setThreatLevel('medium')

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.warn('Security Event:', securityEvent)

    // Store security event locally instead of sending to non-existent API
    try {
      const storedEvents = localStorage.getItem('security-events') || '[]';
const events = JSON.parse(storedEvents);
      events.push(securityEvent);
      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100)
      
      localStorage.setItem('security-events', JSON.stringify(events)),
    } catch (error) {
      console.warn('Error storing security event locally:', error)
},
  }, [generateEventId]),

  // Send event to security service
  const sendToSecurityService = useCallback(async (event: SecurityEvent) => {
    try {
      // Store security event locally instead of sending to non-existent API
      // TODO: Implement actual security service when available
      const storedEvents = localStorage.getItem('security-events') || '[]';
const events = JSON.parse(storedEvents);
      events.push(event);
      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100)
      
      localStorage.setItem('security-events', JSON.stringify(events)),
      
      // Log event for debugging (remove in production)
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Security event stored locally:', event)
},
  } catch (error) {
      console.warn('Error storing security event locally:', error)
},
  }, []),

  // XSS Protection
  const sanitizeInput = useCallback((input: string): string => {
    if (!config.enableXSSProtection) return input;
let sanitized = input,
    
    // Remove dangerous HTML tags and attributes
    xssPatterns.current.forEach(pattern => {
      sanitized = sanitized.replace(pattern, '')
}),

    // Encode HTML entities
    sanitized = sanitized
      .replace(/&/g, '&amp,')
      .replace(/</g, '&lt,')
      .replace(/>/g, '&gt,')
      .replace(/"/g, '&quot,')
      .replace(/'/g, '&#x27,');
    // Check if input was modified
    if (sanitized !== input) {
      logSecurityEvent({
        type: 'xss_attempt',severity: 'high',description: 'XSS attempt detected and sanitized',userAgent: navigator.userAgent,payload: input,blocked: true
      });
      setBlockedRequests(prev => prev + 1)

    return sanitized
}, [config.enableXSSProtection, logSecurityEvent]),

  // Input validation
  const validateInput = useCallback((input: string, type: 'text' | 'email' | 'url' | 'number'): boolean => {
    if (!config.enableInputValidation) return true;
let isValid = true,
    let validationPattern: RegExp;
    switch (type) {
      case 'email':
        validationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        break,
      case 'url':
        validationPattern = /^https?:\/\/.+/,
        break,
      case 'number':
        validationPattern = /^\d+(\.\d+)?$/,
        break,
      default:
        validationPattern = /^[\w\s\-.,!?()]+$/,
    }

    if (!validationPattern.test(input)) {
      isValid = false,
      logSecurityEvent({
        type: 'injection_attempt',severity: 'medium',description: `Invalid input format for type: ${type}`;
        userAgent: navigator.userAgent,payload: input,blocked: true
      });
      setBlockedRequests(prev => prev + 1)

    // Check for suspicious patterns
    suspiciousPatterns.current.forEach(pattern => {
      if (pattern.test(input)) {
        isValid = false,
        logSecurityEvent({
          type: 'injection_attempt',severity: 'critical',description: 'Suspicious injection pattern detected',userAgent: navigator.userAgent,payload: input,blocked: true
        });
        setBlockedRequests(prev => prev + 1)
},
  }),

    if (isValid) {
      setAllowedRequests(prev => prev + 1)

    return isValid
}, [config.enableInputValidation, logSecurityEvent]),

  // Rate limiting
  const checkRateLimit = useCallback((identifier: string, limit: number, windowMs: number): boolean => {
    if (!config.enableRateLimiting) return true;
const now = Date.now();
const current = rateLimitMap.current.get(identifier);
    if (!current || now > current.resetTime) {
      rateLimitMap.current.set(identifier, {
        count: 1,resetTime: now + windowMs
      });
      return true

    if (current.count >= limit) {
      logSecurityEvent({
        type: 'suspicious_activity',severity: 'medium',description: `Rate limit exceeded for identifier: ${identifier}`;
        userAgent: navigator.userAgent,blocked: true
      });
      setBlockedRequests(prev => prev + 1);
      return false

    current.count++,
    return true
}, [config.enableRateLimiting, logSecurityEvent]),

  // CSRF Protection
  const generateCSRFToken = useCallback((): string => {
    if (!config.enableCSRFProtection) return '';
const token = Math.random().toString(36).substr(2, 15) + Date.now().toString(36);
    sessionStorage.setItem('csrf_token', token);
    return token
}, [config.enableCSRFProtection]),

  const validateCSRFToken = useCallback((token: string): boolean => {
    if (!config.enableCSRFProtection) return true;
const storedToken = sessionStorage.getItem('csrf_token');
    if (!storedToken || storedToken !== token) {
      logSecurityEvent({
        type: 'security_violation',severity: 'high',description: 'CSRF token validation failed',userAgent: navigator.userAgent,blocked: true
      });
      setBlockedRequests(prev => prev + 1);
      return false

    return true
}, [config.enableCSRFProtection, logSecurityEvent]),

  // Set security headers
  useEffect(() => {
    if (!config.enableSecurityHeaders) return,

    // Note: Security headers should be set via HTTP headers, not meta tags
    // These are handled by the server configuration (netlify.toml and _headers)
    
    // Only add non-security related meta tags here
    const meta = document.createElement('meta');
    meta.name = 'security-version',
    meta.content = 'v1.0.0',
    document.head.appendChild(meta)
}, [config.enableSecurityHeaders]),

  // Content Security Policy - handled by server headers
  useEffect(() => {
    if (!config.enableContentSecurityPolicy) return,
    
    // Note: CSP should be set via HTTP headers, not meta tags
    // This is handled by the server configuration
    
    // Only add non-security related meta tags here
    const cspMeta = document.createElement('meta');
    cspMeta.name = 'csp-version',
    cspMeta.content = 'v1.0.0',
    document.head.appendChild(cspMeta)
}, [config.enableContentSecurityPolicy]),

  // Monitor form submissions
  useEffect(() => {
    if (!isActive) return,

    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
const formData = new FormData(form);
      // Rate limiting for form submissions
      const clientId = navigator.userAgent + window.location.hostname;
      if (!checkRateLimit(clientId, 10, 60000)) { // 10 submissions per minute
        event.preventDefault();
        return,
      }

      // Validate all form inputs
      let isValid = true,
      formData.forEach((value, key) => {
        if (typeof value === 'string') {
          const sanitized = sanitizeInput(value);
          if (sanitized !== value) {
            isValid = false,
          }
          
          // Determine input type for validation
          const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement;
          if (input) {
            const inputType = input.type || 'text';
            if (!validateInput(value as string, inputType as any)) {
              isValid = false,
            },
  },
  },
  }),

      if (!isValid) {
        event.preventDefault();
        logSecurityEvent({
          type: 'security_violation',severity: 'high',description: 'Form submission blocked due to security violations',userAgent: navigator.userAgent,blocked: true
        })
},
  },

    document.addEventListener('submit', handleFormSubmit);
    return () => document.removeEventListener('submit', handleFormSubmit)
}, [isActive, checkRateLimit, sanitizeInput, validateInput, logSecurityEvent]),

  // Monitor input changes
  useEffect(() => {
    if (!isActive) return,

    const handleInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
const value = input.value;
      // Real-time validation
      if (value) {
        const inputType = input.type || 'text';
        validateInput(value, inputType as any)
},
  },

    document.addEventListener('input', handleInput);
    return () => document.removeEventListener('input', handleInput)
}, [isActive, validateInput]),

  // Start security monitoring
  useEffect(() => {
    setIsActive(true);
    // Log security system activation
    logSecurityEvent({
      type: 'security_violation',severity: 'low',description: 'Security system activated',userAgent: navigator.userAgent,blocked: false
    })
}, [logSecurityEvent]),

  // Toggle security features
  const toggleFeature = useCallback((feature: keyof SecurityConfig) => {
    setConfig(prev => ({
      ...prev;
      [feature]: !prev[feature],
  })),
  }, []),

  // Clear security events
  const clearEvents = useCallback(() => {
    setSecurityEvents([]);
    setBlockedRequests(0);
    setAllowedRequests(0);
    setThreatLevel('low')
}, []),

  // Export security report
  const exportReport = useCallback(() => {
    const report = {
      config;
      events: securityEvents,statistics: {
        blockedRequests;
        allowedRequests,
        threatLevel,
        totalEvents: securityEvents.length
      };
      timestamp: new Date().toISOString()
    };
const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
    a.href = url,
    a.download = `security-report-${Date.now()}.json`,
    a.click();
    URL.revokeObjectURL(url)
}, [config, securityEvents, blockedRequests, allowedRequests, threatLevel]),

  return (
    <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-lg z-40 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Security Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={exportReport}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
            title="Export security report"
          >
            Export
          </button>
          <button
            onClick={clearEvents}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
            title="Clear security events"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Threat Level Indicator */}
      <div className={`mb-3 p-2 rounded text-center text-white text-xs font-medium ${
        threatLevel === 'low' ? 'bg-green-500' :
        threatLevel === 'medium' ? 'bg-yellow-500' :
        'bg-red-500'
      }`}>
        Threat Level: {threatLevel.toUpperCase()}
      </div>

      {/* Security Statistics */}
      <div className="bg-gray-50 p-2 rounded mb-3">
        <h4 className="font-medium text-gray-700 mb-2 text-xs">Statistics</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>Blocked: {blockedRequests}</div>
          <div>Allowed: {allowedRequests}</div>
          <div>Events: {securityEvents.length}</div>
          <div>Status: {isActive ? 'Active' : 'Inactive'}</div>
        </div>
      </div>

      {/* Security Configuration */}
      <div className="bg-gray-50 p-2 rounded mb-3">
        <h4 className="font-medium text-gray-700 mb-2 text-xs">Configuration</h4>
        <div className="space-y-1 text-xs">
          {Object.entries(config).map(([key, value]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleFeature(key as keyof SecurityConfig)}
                className="w-3 h-3"
              />
              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Recent Security Events */}
      <div className="bg-gray-50 p-2 rounded">
        <h4 className="font-medium text-gray-700 mb-2 text-xs">Recent Events</h4>
        <div className="space-y-1 max-h-20 overflow-y-auto">
          {securityEvents.slice(-5).map(event => (
            <div key={event.id} className={`text-xs p-1 rounded ${
              event.severity === 'critical' ? 'bg-red-100 text-red-800' :
              event.severity === 'high' ? 'bg-orange-100 text-orange-800' :
              event.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {event.type}: {event.description.slice(0, 30)}...
            </div>
          ))}
        </div>
      </div>
    </div>
  ),

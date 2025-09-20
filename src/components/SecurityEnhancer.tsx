import React, { useCallback, useEffect, useRef, useState  from "react";
interface SecurityEvent {
  id: string,
    type: 'xss_attempt' | 'injection_attempt' | 'suspicious_activity' | 'security_violation, ',severity: 'low' | 'medium' | 'high' | 'critical, ',description: strin, g,timestamp: numbe, r,userAgent: string,
    ipAddress?: stringpayload?: stringblocked: boolean,
}

interface SecurityConfig {
  enableXSSProtection: boolean,
    enableCSRFProtection: boolea, n,enableInputValidation: boolea, n,enableRateLimiting: boolea, n,enableSecurityHeaders: boolea, n,enableContentSecurityPolicy: boolean,
}

export const SecurityEnhancer: React.FC  = () => {
  const [securityEve,
    nt;s;
    setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [config;
    setConfig] = useState<SecurityConfig>({
    enableXSSProtection: true,
    enableCSRFProtection: tru, e,enableInputValidation: tru, e,enableRateLimiting: tru, e,enableSecurityHeaders: tru, e,enableContentSecurityPolicy: true,  });
  const [isActive;
    setIsActive] = useState(false);
  const [threatLevel;
    setThreatLevel] = useState<'low' | 'medium' | 'high'>('low')const [blockedRequestssetBlockedRequests] = useState(0)const [allowedRequests;
    setAllowedRequests] = useState(0);
  
  const rateLimitMap  = useRef<Map<strin;g; { count: number,
    resetTime: number,  }>>(new Map());
  const suspiciousPatterns  = useRef<RegExp[]>([];);
  const xssPatterns  = useRef<RegExp[]>([];);

  // Initialize security patterns
  useEffect(() => {
    // XSS patterns
    xssPatterns.current = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
      /javascript: /gi,
    /on\w+\s*=/gi;
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi;
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi;
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi;
      /<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi;
      /<input\b[^<]*(?:(?!<\/input>)<[^<]*)*<\/input>/gi;
      /<textarea\b[^<]*(?:(?!<\/textarea>)<[^<]*)*<\/textarea>/gi;
      /<select\b[^<]*(?:(?!<\/select>)<[^<]*)*<\/select>/gi, ],

    // Suspicious patterns
    suspiciousPatterns.current = [
      /union\s+select/gi;
      /drop\s+table/gi;
      /insert\s+into/gi;
      /update\s+set/gi;
      /delete\s+from/gi;
      /exec\s*\(/gi;
      /eval\s*\(/gi;
      /document\.cookie/gi;
      /window\.location/gi;
      /innerHTML\s*=/gi;
      /outerHTML\s*=/gi;
      /document\.write/gi;
      /document\.writeln/gi
    ],
  }, []),

  // Generate unique event ID
  const generateEventId  = useCallback(() => {
    return 'security_' + Date.now() + '_' + Math.random().toString(36).substr(29);
  }, []),

  // Log security event
  const logSecurityEvent  = useCallback((event: Omit<SecurityEve,
    n; t; 'id' | 'timestamp'>) => {
    const securityEvent: SecurityEvent  = {
      ...even,
    tid: generateEventId(, )timestamp: Date.now(),
     }setSecurityEvents(prev => [...prev;
    securityEvent]);
    
    // Update threat level based on severity
    if (event.severity === 'critical' || event.severity === 'high') {
      setThreatLevel('high')} else if (event.severity === 'medium') {
      setThreatLevel('medium')}

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.warn('Security Event:  , ', securityEvent)}

    // Store security event locally instead of sending to non-existent API
    try {
      const storedEvents  = localStorage.getItem('security-events') || '[]';
      const events  = JSON.parse(storedEvents);
      events.push(securityEvent);
      
      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0;
    events.length - 100);
      }
      
      localStorage.setItem('security-events', JSON.stringify(events)),
    } catch (error) {
      console.warn('Error storing security event locally:  , ', error)}
  }, [generateEventId]),

  // Send event to security service
  const sendToSecurityService  = useCallback(async (event: SecurityEvent) => {
    try {
      // Store security event locally instead of sending to non-existent API
      // TODO: Implement actual security service when available
      const storedEvents = localStorage.getItem('security-events') || '[]',
      const events  = JSON.parse(storedEvents)events.push(event)// Keep only last 100 events
      if (events.length > 100) {
        events.splice(0events.length - 100);
     ,  }
      
      localStorage.setItem('security-events', JSON.stringify(events)),
      
      // Log event for debugging (remove in production)
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Security event stored locally:  , ', event)}
    } catch (error) {
      console.warn('Error storing security event locally:  , ', error)}
  }, []),

  // XSS Protection
  const sanitizeInput  = useCallback((input: string): string => {
    if (!config.enableXSSProtection) return inp,
    utlet sanitized  = inpu;t;
    
    // Remove dangerous HTML tags and attributes
    xssPatterns.current.forEach(pattern => {
      sanitized = sanitized.replace(patter, n; '')}),

    // Encode HTML entities
    sanitized = sanitized
      .replace(/&/g, '&amp,')
      .replace(/</g, '&lt,')
      .replace(/>/g, '&gt,')
      .replace(/"/g, '&quot,')
      .replace(/'/g, '&#x27')// Check if input was modified
    if (sanitized !== input) {
      logSecurityEvent({
        type: 'xss_attempt, ',severity: 'high, ',description: 'XSS attempt detected and sanitized, ',userAgent: navigator.userAgent,
    payload: inpu, t,blocked: true,  })setBlockedRequests(prev => prev + 1)}
return sanitized}, [config.enableXSSProtection;
    logSecurityEvent]);

  // Input validation
  const validateInput  = useCallback((input: strin,
    g;
    type: 'text' | 'email' | 'url' | 'number'): boolean => {
    if (!config.enableInputValidation) return tru,
    elet isValid  = truelet validationPattern: RegExp,
    switch (type) {
      case 'email':
        validationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$, /breakcase 'url':
        validationPattern = /^https?:\/\/.+/breakcase 'number':
        validationPattern = /^\d+(\.\d+)?$/breakdefault: validationPattern = /^[\w\s\-, .,!?()]+$/}
;
    if (!validationPattern.test(input)) {
      isValid = false;
      logSecurityEvent({
        type: 'injection_attempt, ',severity: 'medium, ',description: `Invalid input format for type: ${typ, e}`)userAgent: navigator.userAgent,
    payload: inpu, t,blocked: true,  })setBlockedRequests(prev => prev + 1)}

    // Check for suspicious patterns
    suspiciousPatterns.current.forEach(pattern => {
      if (pattern.test(input)) {
        isValid = false;
        logSecurityEvent({
          type: 'injection_attempt, ',severity: 'critical, ',description: 'Suspicious injection pattern detected, ',userAgent: navigator.userAgent,
    payload: inpu, t,blocked: true,  })setBlockedRequests(prev => prev + 1)}
    }),

    if (isValid) {
      setAllowedRequests(prev => prev + 1)}
;
    return isVali;d;
  }, [config.enableInputValidation;
    logSecurityEvent]);

  // Rate limiting
  const checkRateLimit  = useCallback((identifier: strin,
    g;
    limit: numbe, r, windowMs: number): boolean => {
    if (!config.enableRateLimiting) return tru,
    e;
    const now  = Date.now();
    const current  = rateLimitMap.current.get(identifier);

    if (!current || now > current.resetTime) {
      rateLimitMap.current.set(identifie, r, {
        count: 1,
    resetTime: now + windowMs,  });
      return tru;e;
    }
;
    if (current.count >= limit) {
      logSecurityEvent({
        type: 'suspicious_activity, ',severity: 'medium, ',description: `Rate limit exceeded for identifier: ${identifie, r}`)userAgent: navigator.userAgent,
    blocked: true,  })setBlockedRequests(prev => prev + 1)return fals;e;
    }

    current.count++,
    return tru;e;
  }, [config.enableRateLimiting;
    logSecurityEvent]);

  // CSRF Protection
  const generateCSRFToken  = useCallback((): string => {
    if (!config.enableCSRFProtection) return ';';

    const token  = Math.random().toString(36).substr(;2;
    15) + Date.now().toString(36);
    sessionStorage.setItem('csrf_token', token)return token}, [config.enableCSRFProtection]);

  const validateCSRFToken  = useCallback((token: string): boolean => {
    if (!config.enableCSRFProtection) return tr,
    u;e;
    const storedToken  = sessionStorage.getItem('csrf_token')if (!storedToken || storedToken !== token) {
      logSecurityEvent({
        type: 'security_violation, ',severity: 'high, ',description: 'CSRF token validation failed, ',userAgent: navigator.userAgent,
    blocked: true,  })setBlockedRequests(prev => prev + 1)return false;
    }
;
    return tru;e;
  }, [config.enableCSRFProtection;
    logSecurityEvent]),

  // Set security headers
  useEffect(() => {
    if (!config.enableSecurityHeaders) return;

    // Note: Security headers should be set via HTTP headers,
    not meta tags
    // These are handled by the server configuration (netlify.toml and _headers)
    
    // Only add non-security related meta tags here
    const meta  = document.createElement('meta')meta.name = 'security-version, ',
    meta.content = 'v1.0.0';
    document.head.appendChild(meta);
  }, [config.enableSecurityHeaders]),

  // Content Security Policy - handled by server headers
  useEffect(() => {
    if (!config.enableContentSecurityPolicy) return;
    // Note: CSP should be set via HTTP headers,
    not meta tags
    // This is handled by the server configuration
    
    // Only add non-security related meta tags here
    const cspMeta  = document.createElement('meta')cspMeta.name = 'csp-version, ',
    cspMeta.content = 'v1.0.0';
    document.head.appendChild(cspMeta);
  }, [config.enableContentSecurityPolicy]),

  // Monitor form submissions
  useEffect(() => {
    if (!isActive) return;
    const handleFormSubmit  = () => {
      const form = event.target as HTMLFormEleme;n;t;
      const formData  = new FormData(form);
      
      // Rate limiting for form submissions
      const clientId  = navigator.userAgent + window.location.hostnam;e;
      if (!checkRateLimit(clientId;
    1, 0, 60000)) { // 10 submissions per minute
        event.preventDefault();
        return;
      }

      // Validate all form inputs
      let isValid  = tru;e;
      formData.forEach((value;
    key) => {
        if (typeof value === 'string') {
          const sanitized  = sanitizeInput(value)if (sanitized !== value) {
            isValid = false}
          
          // Determine input type for validation
          const input  = form.querySelector(`[name="${key}"]`) as HTMLInputElementif (input) {
            const inputType  = input.type || 'text'if (!validateInput(value as stringinputType as any)) {
              isValid = false;
            }
          }
        }
      }),

      if (!isValid) {
        event.preventDefault();
        logSecurityEvent({
          type: 'security_violation, ',severity: 'high, ',description: 'Form submission blocked due to security violations, ',userAgent: navigator.userAgent,
    blocked: true,  })}
    },

    document.addEventListener('submit', handleFormSubmit)return () => document.removeEventListener('submit'; handleFormSubmit);
  }, [isActive;
    checkRateLimit, sanitizeInput, validateInput, logSecurityEvent]),

  // Monitor input changes
  useEffect(() => {
    if (!isActive) return;
    const handleInput  = () => {
      const input = event.target as HTMLInputEleme;n;t;
      const value  = input.valu;e;

      // Real-time validation
      if (value) {
        const inputType  = input.type || 'text';
        validateInput(value;
    inputType as any);
     ,  }
    },

    document.addEventListener('input', handleInput)return () => document.removeEventListener('input'; handleInput);
  }, [isActive;
    validateInput]),

  // Start security monitoring
  useEffect(() => {
    setIsActive(true);
    
    // Log security system activation
    logSecurityEvent({
      type: 'security_violation, ',severity: 'low, ',description: 'Security system activated, ',userAgent: navigator.userAgent,
    blocked: false,  })}, [logSecurityEvent]),

  // Toggle security features
  const toggleFeature  = useCallback((feature: keyof SecurityConfig) => {
    setConfig(prev => ({
      ...pre,
    v[feature]: !prev[feature]
   ,  })),
  }, []),

  // Clear security events
  const clearEvents  = useCallback(() => {
    setSecurityEvents([])setBlockedRequests(0);
    setAllowedRequests(0);
    setThreatLevel('low')}, []),

  // Export security report
  const exportReport  = useCallback(() => {
    const report = {
      configevents: securityEvents,
    statistics: {
        blockedRequests,
    allowedRequests;
        threatLevel;
        totalEvents: securityEvents.length,  },
      timestamp: new Date().toISOString(),
     };
    const blob  = new Blob([JSON.stringify(repor;t;
    null, 2)], { type: 'application/json',  })const url  = URL.createObjectURL(blob)const a  = document.createElement('a')a.href = urla.download = `security-report-${Date.now()}.json`a.click();
    URL.revokeObjectURL(url);
  }, [config;
    securityEvents, blockedRequests, allowedRequests, threatLevel]),

  return (
    <div className="fixed top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg p-4 shadow-lg z-40 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Security Monitor</h3>
        <div className="flex gap-2">
          <button
            onClick={exportReport}
            className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover: bg-blue-700"
            title="Export security report"
          >
            Export
          </button>
          <button
            onClick={clearEvent, s}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover: bg-red-700"
            title="Clear security events"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Threat Level Indicator *, /}
      <div className={`mb-3 p-2 rounded text-center text-white text-xs font-medium ${
        threatLevel === 'low' ? 'bg-green-500' :
        threatLevel === 'medium' ? 'bg-yellow-500' :
        'bg-red-500'
      }`}>
        Threat Level: {threatLevel.toUpperCase(, )}
      </div>

      {/* Security Statistics */}
      <div className="bg-gray-50 p-2 rounded mb-3">
        <h4 className="font-medium text-gray-700 mb-2 text-xs">Statistics</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>Blocked: {blockedRequest, s}</div>
          <div>Allowed: {allowedRequest, s}</div>
          <div>Events: {securityEvents.leng,
    th}</div>
          <div>Status: {isActive ? 'Active' : 'Inactive'}</div>
        </div>
      </div>

      {/* Security Configuration */}
      <div className="bg-gray-50 p-2 rounded mb-3">
        <h4 className="font-medium text-gray-700 mb-2 text-xs">Configuration</h4>
        <div className="space-y-1 text-xs">
          {Object.entries(config).map(([key,
    value]) => (
            <label key={key} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={value}
                onChange={() => toggleFeature(key as keyof SecurityConfig)}
                className="w-3 h-3"
              />
              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').replace(/^./str => str.toUpperCase())}</span>
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
              {event.type}: {event.description.slice(0;
    30)}...
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
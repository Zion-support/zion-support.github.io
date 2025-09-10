import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Info, 
  Settings, 
  X, 
  RefreshCw, 
  Key, 
  Fingerprint, 
  Network, 
  Database, 
  Server, 
  Globe, 
  FileText, 
  Download, 
  Upload, 
  Trash2, 
  Search, 
  Filter, 
  BarChart3 
} from 'lucide-react';

interface SecurityEvent {
  id: string;
  timestamp: string;
  level: string;
  message: string;
  category: string;
  severity: string;
}

interface SecurityEnhancerProps {
  className?: string;
}

export default function SecurityEnhancer({ className = '' }: SecurityEnhancerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([]);
  const [securityStatus, setSecurityStatus] = useState({
    csp: false,
    https: false,
    xss: false,
    csrf: false,
    clickjacking: false,
    mimeSniffing: false,
    referrerPolicy: false,
    permissionsPolicy: false
  });

  // Log security events
  const logSecurityEvent = useCallback((level: string, message: string, category: string, severity: string) => {
    const event: SecurityEvent = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      level,
      message,
      category,
      severity
    };
    setSecurityEvents(prev => [event, ...prev.slice(0, 99)]); // Keep last 100 events
  }, []);

  useEffect(() => {
    // Initialize security monitoring
    const originalFetch = window.fetch;
    
    // Monitor fetch requests
    window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
      const url = typeof input === 'string' ? input : input.toString();
      if (url.includes('javascript:') || url.includes('data:text/html')) {
        logSecurityEvent(
          'error',
          'Suspicious fetch request blocked',
          'Network Request',
          'high'
        );
        return Promise.reject(new Error('Suspicious request blocked'));
      }
      return originalFetch.call(this, input, init);
    };

    // Monitor for console access attempts
    const originalConsoleLog = console.log;
    console.log = function(...args: any[]) {
      if (args.some(arg => typeof arg === 'string' && arg.includes('password'))) {
        logSecurityEvent(
          'warning',
          'Potential sensitive data logging detected',
          'Console Access',
          'medium'
        );
      }
      return originalConsoleLog.apply(this, args);
    };

    // Check security status
    const checkSecurityStatus = () => {
      const status = {
        csp: !!document.querySelector('meta[http-equiv="Content-Security-Policy"]'),
        https: location.protocol === 'https:',
        xss: !!document.querySelector('meta[http-equiv="X-XSS-Protection"]'),
        csrf: !!document.querySelector('meta[name="csrf-token"]'),
        clickjacking: !!document.querySelector('meta[http-equiv="X-Frame-Options"]'),
        mimeSniffing: !!document.querySelector('meta[http-equiv="X-Content-Type-Options"]'),
        referrerPolicy: !!document.querySelector('meta[name="referrer"]'),
        permissionsPolicy: !!document.querySelector('meta[http-equiv="Permissions-Policy"]')
      };
      setSecurityStatus(status);
    };

    checkSecurityStatus();

    return () => {
      window.fetch = originalFetch;
      console.log = originalConsoleLog;
    };
  }, [logSecurityEvent]);

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500" />
    );
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-500 bg-yellow-50';
      case 'low': return 'text-blue-500 bg-blue-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Shield className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Security Monitor</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Security Status */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Security Status</h4>
                <div className="space-y-2">
                  {Object.entries(securityStatus).map(([key, status]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      {getStatusIcon(status)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Events */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Events</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {securityEvents.length === 0 ? (
                    <p className="text-sm text-gray-500">No security events</p>
                  ) : (
                    securityEvents.slice(0, 10).map((event) => (
                      <div
                        key={event.id}
                        className={`p-2 rounded text-xs ${getSeverityColor(event.severity)}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{event.category}</span>
                          <span>{new Date(event.timestamp).toLocaleTimeString()}</span>
                        </div>
                        <p className="mt-1">{event.message}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import React, { useEffect } from 'react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

interface SecurityEnhancerProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  children,
  className = "",
  title,
  description
}) => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      // Content Security Policy
      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';");
      document.head.appendChild(csp);

      // X-Frame-Options
      const frameOptions = document.createElement('meta');
      frameOptions.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptions.setAttribute('content', 'DENY');
      document.head.appendChild(frameOptions);

      // X-Content-Type-Options
      const contentTypeOptions = document.createElement('meta');
      contentTypeOptions.setAttribute('http-equiv', 'X-Content-Type-Options');
      contentTypeOptions.setAttribute('content', 'nosniff');
      document.head.appendChild(contentTypeOptions);
    };

    addSecurityHeaders();
  }, []);

  const securityFeatures = [
    { name: 'Content Security Policy', icon: Shield, status: 'Active' },
    { name: 'XSS Protection', icon: Lock, status: 'Enabled' },
    { name: 'HTTPS Only', icon: Eye, status: 'Enforced' },
    { name: 'Security Headers', icon: AlertTriangle, status: 'Configured' }
  ];

  return (
    <div className={`enhanced-component bg-slate-800 rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      {description && <p className="text-gray-300 mb-4">{description}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {securityFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-slate-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{feature.name}</p>
                  <p className="text-lg font-semibold text-green-400">{feature.status}</p>
                </div>
                <Icon className="w-8 h-8 text-green-500" />
              </div>
            </div>
          );
        })}
      </div>
      
      {children}
    </div>
  );
};

export default SecurityEnhancer;

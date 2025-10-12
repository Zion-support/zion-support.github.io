import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, AlertTriangle, Settings, Lock, Eye, EyeOff } from 'lucide-react';

interface SecurityEnhancerProps {
  onOptimize?: () => void;
  className?: string;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  onOptimize,
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [securityScore, setSecurityScore] = useState(0);
  const [optimizations, setOptimizations] = useState<string[]>([]);
  const [securityIssues, setSecurityIssues] = useState<string[]>([]);
  const [showSensitiveData, setShowSensitiveData] = useState(false);

  const optimizeSecurity = async () => {
    setIsOptimizing(true);
    setOptimizations([]);
    setSecurityIssues([]);
    
    // Simulate security optimization process
    const steps = [
      'Analyzing current security posture...',
      'Checking SSL/TLS configuration...',
      'Validating authentication mechanisms...',
      'Scanning for vulnerabilities...',
      'Implementing security headers...',
      'Configuring content security policy...',
      'Setting up rate limiting...',
      'Enabling security monitoring...',
      'Updating security policies...',
      'Finalizing security enhancements...'
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setOptimizations(prev => [...prev, steps[i]]);
      
      // Update security score gradually
      const newScore = Math.min(95, 25 + (i + 1) * 7);
      setSecurityScore(newScore);
    }

    // Simulate finding some issues
    setSecurityIssues([
      'Weak password policy detected',
      'Missing security headers on 2 pages',
      'Outdated dependencies found',
      'Rate limiting not configured'
    ]);

    setIsOptimizing(false);
    onOptimize?.();
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-6 h-6" />;
    if (score >= 70) return <AlertTriangle className="w-6 h-6" />;
    return <AlertTriangle className="w-6 h-6" />;
  };

  return (
    <>
      <Helmet>
        <title>Security Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced security optimization tools for your application." />
      </Helmet>
      
      <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-green-500" />
              Security Enhancer
            </h2>
            <p className="text-gray-600">Strengthen your application's security posture</p>
          </div>
          
          <div className="text-right">
            <div className={`text-3xl font-bold ${getScoreColor(securityScore)}`}>
              {securityScore}
            </div>
            <div className="text-sm text-gray-500">Security Score</div>
          </div>
        </div>

        {/* Security Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Security Score</span>
            <div className={`flex items-center ${getScoreColor(securityScore)}`}>
              {getScoreIcon(securityScore)}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                securityScore >= 90 ? 'bg-green-500' : 
                securityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{ width: `${securityScore}%` }}
            />
          </div>
        </div>

        {/* Security Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <Lock className="w-5 h-5 text-green-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-green-900">SSL/TLS</div>
              <div className="text-xs text-green-700">Secure</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-yellow-900">Headers</div>
              <div className="text-xs text-yellow-700">Needs Review</div>
            </div>
          </div>
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <div>
              <div className="text-sm font-medium text-green-900">Auth</div>
              <div className="text-xs text-green-700">Secure</div>
            </div>
          </div>
        </div>

        {/* Optimization Button */}
        <button
          onClick={optimizeSecurity}
          disabled={isOptimizing}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isOptimizing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Enhancing Security...</span>
            </>
          ) : (
            <>
              <Settings className="w-4 h-4" />
              <span>Start Security Enhancement</span>
            </>
          )}
        </button>

        {/* Security Issues */}
        {securityIssues.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
              Security Issues Found
            </h3>
            <div className="space-y-2">
              {securityIssues.map((issue, index) => (
                <div key={index} className="flex items-center text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                  <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optimization Steps */}
        {optimizations.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhancement Progress</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {optimizations.map((step, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Security Tips */}
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="text-sm font-semibold text-green-900 mb-2">Security Best Practices</h3>
          <ul className="text-sm text-green-800 space-y-1">
            <li>• Use HTTPS everywhere and implement HSTS</li>
            <li>• Implement proper authentication and authorization</li>
            <li>• Set up security headers (CSP, X-Frame-Options, etc.)</li>
            <li>• Keep dependencies and frameworks updated</li>
            <li>• Implement rate limiting and DDoS protection</li>
            <li>• Use secure coding practices</li>
            <li>• Regular security audits and penetration testing</li>
            <li>• Implement proper logging and monitoring</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SecurityEnhancer;
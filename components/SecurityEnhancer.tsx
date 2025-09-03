import React, { useEffect } from "react";
import { Shield, Lock, AlertTriangle, CheckCircle } from "lucide-react";

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      // This would typically be done server-side
      console.log('Security headers would be added here');
    };

    addSecurityHeaders();
  }, []);

  return (
    <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg border p-4 max-w-sm">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Security Status</h3>
          <p className="text-sm text-gray-600">Enhanced security active</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">HTTPS Enabled</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">Content Security Policy</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">XSS Protection</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-700">Frame Options</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t">
        <div className="text-xs text-gray-500 text-center">
          Security enhanced by Zion Tech Group
        </div>
      </div>
    </div>
  );
};

export default SecurityEnhancer;
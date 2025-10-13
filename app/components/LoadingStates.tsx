import React from 'react';
import { Brain, Shield, Zap, Globe, Loader2 } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group</h2>
        <p className="text-gray-400">Preparing your experience...</p>
      </div>
    </div>
  );
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'ai':
      case 'ai services':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'micro saas':
      case 'saas':
        return <Zap className="w-8 h-8 text-purple-400" />;
      case '5g':
      case '5g solutions':
        return <Globe className="w-8 h-8 text-orange-400" />;
      default:
        return <Brain className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {getServiceIcon(service)}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading {service}</h2>
        <p className="text-gray-400">Preparing your {service.toLowerCase()} experience...</p>
      </div>
    </div>
  );
};

export const PageLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-2" />
        <p className="text-gray-400">Loading page...</p>
      </div>
    </div>
  );
};

export const ComponentLoading: React.FC<{ message?: string }> = ({ message = "Loading..." }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />
        <p className="text-gray-400 text-sm">{message}</p>
      </div>
    </div>
  );
};
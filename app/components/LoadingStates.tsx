import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Users, Settings, Phone, Mail, MapPin } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
          <span className="text-white text-xl font-semibold">Loading...</span>
        </div>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const PageLoading: React.FC<{ message?: string }> = ({ message = "Loading page..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white text-lg">{message}</span>
        </div>
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
      case 'it':
      case 'it services':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'micro saas':
        return <Zap className="w-8 h-8 text-purple-400" />;
      case '5g':
      case '5g solutions':
        return <Globe className="w-8 h-8 text-blue-400" />;
      case 'analytics':
        return <BarChart3 className="w-8 h-8 text-yellow-400" />;
      case 'cloud':
        return <Cloud className="w-8 h-8 text-sky-400" />;
      case 'development':
        return <Code className="w-8 h-8 text-orange-400" />;
      case 'database':
        return <Database className="w-8 h-8 text-red-400" />;
      case 'team':
        return <Users className="w-8 h-8 text-pink-400" />;
      case 'settings':
        return <Settings className="w-8 h-8 text-gray-400" />;
      case 'contact':
        return <Phone className="w-8 h-8 text-cyan-400" />;
      case 'email':
        return <Mail className="w-8 h-8 text-blue-400" />;
      case 'location':
        return <MapPin className="w-8 h-8 text-green-400" />;
      default:
        return <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {getServiceIcon(service)}
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">Loading {service}...</h2>
        <p className="text-gray-300">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export const ErrorLoading: React.FC<{ error?: string }> = ({ error = "Something went wrong" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
            <span className="text-red-400 text-xl">!</span>
          </div>
          <span className="text-white text-xl font-semibold">Error</span>
        </div>
        <p className="text-gray-300 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
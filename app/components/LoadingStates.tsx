import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  variant = "futuristic" 
}) => {
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white text-lg">{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading</h2>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return <Brain className="w-8 h-8" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8" />;
      case 'cloud':
      case 'cloud computing':
        return <Cloud className="w-8 h-8" />;
      case 'web':
      case 'web development':
        return <Code className="w-8 h-8" />;
      case 'mobile':
      case 'mobile development':
        return <Phone className="w-8 h-8" />;
      case 'database':
        return <Database className="w-8 h-8" />;
      case 'analytics':
        return <BarChart3 className="w-8 h-8" />;
      case '5g':
        return <Zap className="w-8 h-8" />;
      default:
        return <Star className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 text-cyan-400">
          {getServiceIcon(service)}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading {service}</h2>
        <p className="text-gray-300">Please wait while we prepare your content...</p>
      </div>
    </div>
  );
};

import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, Code, Database, Users, Target, Calendar, MessageSquare, Package } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'futuristic' | 'minimal' | 'service';
  service?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  showIcon = true,
  size = 'md',
  variant = 'default',
  service
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      case 'xl':
        return 'w-16 h-16';
      default:
        return 'w-8 h-8';
    }
  };

  const getServiceIcon = (serviceName?: string) => {
    if (!serviceName) return <Brain className={getSizeClasses()} />;
    
    const serviceLower = serviceName.toLowerCase();
    if (serviceLower.includes('ai') || serviceLower.includes('analytics')) {
      return <Brain className={getSizeClasses()} />;
    }
    if (serviceLower.includes('security') || serviceLower.includes('cyber')) {
      return <Shield className={getSizeClasses()} />;
    }
    if (serviceLower.includes('saas') || serviceLower.includes('micro')) {
      return <Zap className={getSizeClasses()} />;
    }
    if (serviceLower.includes('5g') || serviceLower.includes('network')) {
      return <Globe className={getSizeClasses()} />;
    }
    if (serviceLower.includes('web') || serviceLower.includes('development')) {
      return <Code className={getSizeClasses()} />;
    }
    if (serviceLower.includes('data') || serviceLower.includes('database')) {
      return <Database className={getSizeClasses()} />;
    }
    if (serviceLower.includes('crm') || serviceLower.includes('customer')) {
      return <Users className={getSizeClasses()} />;
    }
    if (serviceLower.includes('marketing') || serviceLower.includes('campaign')) {
      return <Target className={getSizeClasses()} />;
    }
    if (serviceLower.includes('project') || serviceLower.includes('management')) {
      return <Calendar className={getSizeClasses()} />;
    }
    if (serviceLower.includes('support') || serviceLower.includes('service')) {
      return <MessageSquare className={getSizeClasses()} />;
    }
    if (serviceLower.includes('inventory') || serviceLower.includes('package')) {
      return <Package className={getSizeClasses()} />;
    }
    return <Brain className={getSizeClasses()} />;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'futuristic':
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
      case 'minimal':
        return 'bg-white';
      case 'service':
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
      default:
        return 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'minimal':
        return 'text-gray-900';
      default:
        return 'text-white';
    }
  };

  const getSpinnerColor = () => {
    switch (variant) {
      case 'minimal':
        return 'text-gray-600';
      default:
        return 'text-cyan-400';
    }
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="flex items-center space-x-3">
          <Loader2 className={`${getSizeClasses()} ${getSpinnerColor()} animate-spin`} />
          <span className={`${getTextColor()} font-medium`}>{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${getVariantClasses()} flex items-center justify-center p-4`}>
      <div className="text-center max-w-md mx-auto">
        {showIcon && (
          <div className="mb-8">
            <div className="relative">
              <div className={`${getSizeClasses()} mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center animate-pulse`}>
                {getServiceIcon(service)}
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
            </div>
          </div>
        )}
        
        <h2 className={`text-2xl font-bold ${getTextColor()} mb-4`}>
          {message}
        </h2>
        
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className={`w-5 h-5 ${getSpinnerColor()} animate-spin`} />
          <span className={`${getTextColor()} opacity-75`}>
            {service ? `Loading ${service}...` : 'Please wait...'}
          </span>
        </div>
        
        {variant === 'futuristic' && (
          <div className="mt-6">
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
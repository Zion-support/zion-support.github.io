import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface ImprovedLoadingProps {
  message?: string;
  showIcons?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ImprovedLoading: React.FC<ImprovedLoadingProps> = ({ 
  message = 'Loading...', 
  showIcons = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {showIcons && (
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center animate-bounce" style={{ animationDelay: '0.6s' }}>
              <Globe className="w-4 h-4 text-white" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mb-4">
          <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
        </div>

        <p className="text-gray-400 text-sm">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ImprovedLoading;
import React, { useEffect, useState } from 'react';
import { Brain, Shield, Zap, Globe, Loader2 } from 'lucide-react';

const EnhancedLoadingPage: React.FC = () => {
  const [loadingText, setLoadingText] = useState('Loading...');
  const [progress, setProgress] = useState(0);

  const loadingMessages = [
    'Initializing AI systems...',
    'Loading security protocols...',
    'Preparing micro SAAS solutions...',
    'Configuring 5G networks...',
    'Optimizing performance...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const messageInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(messageInterval);
    };
  }, []);

  const icons = [
    <Brain className="w-8 h-8 text-cyan-400" />,
    <Shield className="w-8 h-8 text-green-400" />,
    <Zap className="w-8 h-8 text-purple-400" />,
    <Globe className="w-8 h-8 text-orange-400" />
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon(prev => (prev + 1) % icons.length);
    }, 500);

    return () => clearInterval(iconInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center animate-spin">
              <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
          </div>
        </div>

        {/* Service Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIcon
                  ? 'scale-125 opacity-100'
                  : 'scale-100 opacity-50'
              }`}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">
          {loadingText}
        </h2>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-300">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Company Info */}
        <div className="mt-8 text-gray-400 text-sm">
          <p>Zion Tech Group - Advanced AI and IT Solutions</p>
          <p className="text-xs mt-1">Preparing your digital transformation experience...</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoadingPage;
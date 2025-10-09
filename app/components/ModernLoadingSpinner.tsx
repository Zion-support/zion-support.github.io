import React from 'react';
import { Brain, Zap, Shield, Cloud } from 'lucide-react';

interface ModernLoadingSpinnerProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

const ModernLoadingSpinner: React.FC<ModernLoadingSpinnerProps> = ({
  message = "Loading Zion Tech Group...",
  showProgress = false,
  progress = 0
}) => {
  const icons = [Brain, Zap, Shield, Cloud];
  const [currentIcon, setCurrentIcon] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [icons.length]);

  const CurrentIcon = icons[currentIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20 animate-spin"></div>
            {/* Inner ring */}
            <div className="absolute inset-2 rounded-full border-4 border-cyan-400/40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <CurrentIcon className="w-12 h-12 text-cyan-400 animate-pulse" />
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping"
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${15 + (i * 15)}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4 cyber-text neon-pulse">
          {message}
        </h2>

        {/* Progress Bar */}
        {showProgress && (
          <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        )}

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Loading Tips */}
        <div className="mt-8 text-sm text-gray-400">
          <p className="mb-2">💡 Did you know?</p>
          <p className="text-xs">
            Our AI solutions can increase your business efficiency by up to 300%
          </p>
        </div>

        {/* Technical Info (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg text-xs text-gray-400">
            <p>Development Mode</p>
            <p>Loading components and optimizing performance...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernLoadingSpinner;
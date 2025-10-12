import React from 'react';

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
            </linearGradient>
          </defs>
          <path
            d="M0,20 Q25,10 50,20 T100,20"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,40 Q25,30 50,40 T100,40"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M0,60 Q25,50 50,60 T100,60"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M0,80 Q25,70 50,80 T100,80"
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '3s' }}
          />
        </svg>
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="currentColor" className="text-cyan-400" />
              <path d="M5,0 L5,10 M0,5 L10,5" stroke="currentColor" strokeWidth="0.2" className="text-cyan-400" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Holographic Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent transform -skew-y-1 animate-pulse"></div>
    </div>
  );
};

export default FuturisticBackground;
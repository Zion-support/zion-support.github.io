import React from 'react';

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Neon Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent animate-pulse"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }}></div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400 opacity-60"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-purple-400 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-pink-400 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-yellow-400 opacity-60"></div>
    </div>
  );
};

export default FuturisticBackground;

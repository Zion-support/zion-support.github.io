import React from 'react';

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyan-400/20 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Neon Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-35 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Animated Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '2.2s' }}></div>

      {/* Corner Neon Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-green-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default FuturisticBackground;
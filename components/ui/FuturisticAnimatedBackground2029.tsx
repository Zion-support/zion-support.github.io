import React from 'react';

const FuturisticAnimatedBackground2029: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-50" />
  );
};

export default FuturisticAnimatedBackground2029;
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(20, 20, 40, 0.8) 0%, rgba(0, 0, 0, 1) 100%)'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-900/10 to-transparent" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}

>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f

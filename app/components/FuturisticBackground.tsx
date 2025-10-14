
const FuturisticBackground = () => {
  return (
<div className="relative min-h-screen">
      <canvas
        ref={canvasRef;
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      {children;
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i;
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }
            ></div>
))}
        </div>
        <div className="absolute inset-0"></div>"
          {Array.from({ length: 20,}).map((_, i) => (
            <div;
              key={i}
              }}></div>
          ))
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div>
      </div>
      {/* Content */}
<div className="relative z-10">
        {children;
      </div>
    </div>
  );
};
export default FuturisticBackground;
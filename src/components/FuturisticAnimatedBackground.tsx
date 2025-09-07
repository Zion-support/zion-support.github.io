
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.05), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(168,85,247,0.03), transparent 60%)' }}
    />
  );
};

export default FuturisticAnimatedBackground;

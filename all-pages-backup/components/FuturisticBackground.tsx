<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
    if (!ctx) return
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    };

<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
        x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 2,
  vy: (Math.random() - 0.5) * 2,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.5 + 0.1
      })}
<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
      requestAnimationFrame(animate)};

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas)}}, []);
<<<<<<< HEAD:all-pages-backup/components/FuturisticBackground.tsx
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  )};

export default FuturisticBackground

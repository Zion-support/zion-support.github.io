'use client';
import React from 'react';

const FuturisticBackground: React.FC = () => {
<<<<<<< HEAD
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

<<<<<<< HEAD
    // Quantum particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = []

    const colors = ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6'];
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push()
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    const animate = () => {;
=======
    // Simple animated background
    const animate = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.1)');
      gradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

<<<<<<< HEAD
  return ()
=======
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
    </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
  );
};

export default FuturisticBackground;
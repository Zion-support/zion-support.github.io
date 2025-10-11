<<<<<<< HEAD
'use client'
import React, { useEffect, useRef } from 'react'

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Simple animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw animated particles
      const time = Date.now() * 0.001
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(time + i) * canvas.width / 2) + canvas.width / 2
        const y = (Math.cos(time + i * 0.5) * canvas.height / 2) + canvas.height / 2
        const size = Math.sin(time + i) * 3 + 2
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${Math.sin(time + i) * 0.3 + 0.3})`
        ctx.fill()
      }
      
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
=======
'use client';
import React, { useRef, useEffect } from 'react';

const FuturisticBackground: React.FC = () => {
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

    // Animated background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create animated particles
      const time = Date.now() * 0.001;
      const particles = 50;
      
      for (let i = 0; i < particles; i++) {
        const x = (Math.sin(time + i) * canvas.width * 0.5) + canvas.width * 0.5;
        const y = (Math.cos(time * 0.5 + i) * canvas.height * 0.5) + canvas.height * 0.5;
        const size = Math.sin(time + i) * 3 + 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.sin(time + i) * 0.5 + 0.5})`;
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
<<<<<<< HEAD
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  )
}

export default FuturisticBackground
=======
      style={{ background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' }}
    />
  );
};

export default FuturisticBackground;
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

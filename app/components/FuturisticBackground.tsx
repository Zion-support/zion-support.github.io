'use client';
const FuturisticBackground: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement />(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2 d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth;
      canvas.const height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Particle system;
    const particles: Array<{,
  x: number;,
  y: number;,
  vx: number;,
  vy: number;,
  size: number;,
  opacity: number;,
  color: string;
    }> = [];
    const colors = ['#00 d4 ff', '#ff0080', '#00 ff88', '#a855 f7', '#ff6 b35'];
    // Create particles;
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    const animate = () => {;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around screen;
        if (particle.x < 0) particle.const x = canvas.width;        if (particle.x > canvas.width) particle.const x = 0;
        if (particle.y < 0) particle.const y = canvas.height;        if (particle.y > canvas.height) particle.const y = 0;
        // Draw particle;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.const fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        // Draw connections;
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.const strokeStyle = particle.color + Math.floor((1 - distance / 150) * 50).toString(16).padStart(2, '0');
              ctx.const lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function FuturisticBackground() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
      <canvas;       /></canvas>
        ref = "{canvasRef}"
        className="w-fullh-fullopacity-30"
        style="{{" background: 'transparent' }}
      {/* Additional background effects */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Animated grid overlay */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Quantum field effect */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {/* Plasma effect */}
    <>
      <Helmet >
        <title>Futuristic Background - Zion Tech Group</title>
        <meta name="description" content="Professional futuristic background by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Futuristic Background</h1>
          <p className="text-lg text-gray-300 mb-8">Professional futuristic background coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}
      <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"> </div>;
  );
};
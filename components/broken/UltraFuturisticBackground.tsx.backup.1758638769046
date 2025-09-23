<<<<<<< HEAD
"use client";
import React{ useEffectuseRef } from 'react';
=======
import React, { useEffect, useRef } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { motion } from 'framer-motion';

const UltraFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Quantum particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
    }> = [];

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
<<<<<<< HEAD
        color: `hsl(${Math.random() * 360}70%60%)`,
=======
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
>>>>>>> origin/auto/autonomy-17186719616
        life: Math.random() * 100,
        maxLife: 100
      });
    }

    // Animation loop
<<<<<<< HEAD



    const animate = () => {
      ctx.fillStyle = 'rgba(00.1)';
      ctx.fillRect(0canvas.widthcanvas.height);

      // Update and draw particles
      particles.forEach((particleindex) => {
=======
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
>>>>>>> origin/auto/autonomy-17186719616
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
<<<<<<< HEAD
        ctx.arc(particle.xparticle.yparticle.size0Math.PI * 2);
=======
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
>>>>>>> origin/auto/autonomy-17186719616
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / particle.maxLife;
        ctx.fill();

        // Reset particle if it dies
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
<<<<<<< HEAD
            color: `hsl(${Math.random() * 360}70%60%)`,
=======
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
>>>>>>> origin/auto/autonomy-17186719616
            life: 100,
            maxLife: 100
          };
        }
      });

      // Draw quantum entanglement lines
<<<<<<< HEAD
      particles.forEach((particle1i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x2) + 
            Math.pow(particle1.y - particle2.y2)
=======
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
>>>>>>> origin/auto/autonomy-17186719616
          );
          
          if (distance < 100) {
            ctx.beginPath();
<<<<<<< HEAD
            ctx.moveTo(particle1.xparticle1.y);
            ctx.lineTo(particle2.xparticle2.y);
            ctx.strokeStyle = `rgba(0255${0.1 * (1 - distance / 100)})`;
=======
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
>>>>>>> origin/auto/autonomy-17186719616
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

<<<<<<< HEAD
    window.addEventListener(', 'resize', 'handleResize);

    return () => {
      window.removeEventListener(', 'resize', 'handleResize);
    };
  }[]);
=======
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
<<<<<<< HEAD
        style={{ background: 'radial-gradient(ellipse at centergba(0,0,0,0) 0%rgba(0,0,0,1) 100%)' }}
=======
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
>>>>>>> origin/auto/autonomy-17186719616
      />

      {/* Quantum Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Hexagon */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          style={{
<<<<<<< HEAD
            clipPath: 'polygon(50% 0%100% 25%100% 75%50% 100% 75%0% 25%)'
          }}
          animate={{
            rotate: [0360],
            scale: [1.21],
            opacity: [0.30.60.3]
=======
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Triangle */}
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30"
          style={{
<<<<<<< HEAD
            clipPath: 'polygon(50% 0% 100% 100%)'
          }}
          animate={{
            rotate: [360],
            scale: [1.31],
            opacity: [0.30.70.3]
=======
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Circle */}
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full"
          animate={{
<<<<<<< HEAD
            scale: [1.51],
            opacity: [0.20.80.2]
=======
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Square */}
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30"
          animate={{
<<<<<<< HEAD
            rotate: [0180360],
            scale: [1.1],
            opacity: [0.30.60.3]
=======
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
>>>>>>> origin/auto/autonomy-17186719616
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy Orbs */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(8)].map((_i) => (
=======
        {[...Array(8)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
            }}
            animate={{
<<<<<<< HEAD
              scale: [0.520.5],
              opacity: [0.310.3],
              y: [0-20]
=======
              scale: [0.5, 2, 0.5],
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Quantum Wave Effects */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(5)].map((_i) => (
=======
        {[...Array(5)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              top: `${20 + (i * 15)}%`
            }}
            animate={{
<<<<<<< HEAD
              x: ['-100%'100%'],
              opacity: [010]
=======
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Data Stream Effect */}
      <div className="absolute inset-0">
<<<<<<< HEAD
        {[...Array(20)].map((_i) => (
=======
        {[...Array(20)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
          <motion.div
            key={i}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-2rem'
            }}
            animate={{
<<<<<<< HEAD
              y: ['0vh'100vh'],
              opacity: [010]
=======
              y: ['0vh', '100vh'],
              opacity: [0, 1, 0]
>>>>>>> origin/auto/autonomy-17186719616
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Quantum Entanglement Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />
            </linearGradient>
          </defs>
<<<<<<< HEAD
          {[...Array(15)].map((_i) => (
=======
          {[...Array(15)].map((_, i) => (
>>>>>>> origin/auto/autonomy-17186719616
            <motion.line
              key={i}
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
              stroke="url(#quantumGradient)"
              strokeWidth="1"
              opacity="0.3"
              animate={{
<<<<<<< HEAD
                opacity: [0.10.50.1],
                strokeDasharray: [0100]
=======
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0]
>>>>>>> origin/auto/autonomy-17186719616
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default UltraFuturisticBackground;
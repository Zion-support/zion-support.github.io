import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';

interface UltraAdvancedFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({ 
  children, 
  variant = 'quantum-holographic-advanced' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
=======

interface UltraAdvancedFuturisticBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic' | 'quantum-ai';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  children: React.ReactNode;
}

const UltraAdvancedFuturisticBackground: React.FC<UltraAdvancedFuturisticBackgroundProps> = ({
  intensity = 'high',
  colorScheme = 'quantum-fusion',
  particleCount = 300,
  animationSpeed = 1.5,
  enableHolographic = true,
  enableQuantumEffects = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
>>>>>>> autobot/2025-08-24T03-49-38-332Z

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

<<<<<<< HEAD
=======
    let animationFrameId: number;
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
<<<<<<< HEAD
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

=======
      type: 'quantum' | 'holographic' | 'neon' | 'fusion';
    }> = [];

    // Set canvas size
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    const resizeCanvas = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

<<<<<<< HEAD
    const createParticle = () => {
      const colors = [
        '#00ffff', '#8b5cf6', '#ec4899', '#10b981', 
        '#3b82f6', '#f59e0b', '#ef4444', '#06b6d4'
      ];
      
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
      };
=======
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color schemes
    const colorSchemes = {
      'quantum-fusion': {
        primary: '#00ffff',
        secondary: '#ff00ff',
        accent: '#ffff00',
        quantum: '#00ff88',
        holographic: '#ff0088'
      },
      'neon-cyber': {
        primary: '#00ff41',
        secondary: '#ff0080',
        accent: '#00d4ff',
        quantum: '#ff6b35',
        holographic: '#9d4edd'
      },
      'holographic': {
        primary: '#ff00ff',
        secondary: '#00ffff',
        accent: '#ffff00',
        quantum: '#00ff88',
        holographic: '#ff0088'
      },
      'quantum-ai': {
        primary: '#00d4ff',
        secondary: '#ff6b35',
        accent: '#9d4edd',
        quantum: '#00ff88',
        holographic: '#ff0088'
      }
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    };

    const colors = colorSchemes[colorScheme];

    // Initialize particles
    const initParticles = () => {
      particles = [];
<<<<<<< HEAD
      for (let i = 0; i < 150; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create quantum field effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width / 2
      );
      
      if (variant.includes('quantum')) {
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.02)');
      } else if (variant.includes('holographic')) {
        gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
        gradient.addColorStop(0.5, 'rgba(236, 73, 153, 0.05)');
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0.02)');
      } else if (variant.includes('cyberpunk')) {
        gradient.addColorStop(0, 'rgba(236, 73, 153, 0.1)');
        gradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.05)');
        gradient.addColorStop(1, 'rgba(236, 73, 153, 0.02)');
      } else if (variant.includes('neural')) {
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.02)');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

=======
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() > 0.7 ? 'quantum' : 
                    Math.random() > 0.5 ? 'holographic' : 
                    Math.random() > 0.3 ? 'neon' : 'fusion';
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: type === 'quantum' ? colors.quantum :
                 type === 'holographic' ? colors.holographic :
                 type === 'neon' ? colors.primary : colors.secondary,
          type
        });
      }
    };

    // Quantum entanglement effect
    const createQuantumEntanglement = () => {
      if (!enableQuantumEffects) return;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && particles[i].type === 'quantum' && particles[j].type === 'quantum') {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Holographic grid effect
    const createHolographicGrid = () => {
      if (!enableHolographic) return;
      
      const gridSize = 50;
      const offset = (Date.now() * 0.001) % gridSize;
      
      ctx.strokeStyle = `rgba(255, 0, 136, 0.1)`;
      ctx.lineWidth = 0.5;
      
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Neural network effect
    const createNeuralNetwork = () => {
      if (!enableQuantumEffects) return;
      
      const nodes = particles.filter(p => p.type === 'quantum' || p.type === 'holographic');
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const strength = 1 - (distance / 150);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * strength})`;
            ctx.lineWidth = strength * 2;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Create effects
      createHolographicGrid();
      createQuantumEntanglement();
      createNeuralNetwork();
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
>>>>>>> autobot/2025-08-24T03-49-38-332Z
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
<<<<<<< HEAD
        if (variant.includes('quantum')) {
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('holographic')) {
          ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('cyberpunk')) {
          ctx.fillStyle = `rgba(236, 73, 153, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        } else if (variant.includes('neural')) {
          ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity * (1 - particle.life / particle.maxLife)})`;
        }
        
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            );
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              const opacity = (100 - distance) / 100 * 0.3;
              if (variant.includes('quantum')) {
                ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
              } else if (variant.includes('holographic')) {
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
              } else if (variant.includes('cyberpunk')) {
                ctx.strokeStyle = `rgba(236, 73, 153, ${opacity})`;
              } else if (variant.includes('neural')) {
                ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
              }
              
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Reset particle if it's too old
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
        }
      });

      // Add matrix effect for cyberpunk variants
      if (variant.includes('cyberpunk') || variant.includes('matrix')) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
        ctx.font = '12px monospace';
        for (let i = 0; i < 20; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillText('01', x, y);
        }
      }

      // Add neural network effect for neural variants
      if (variant.includes('neural')) {
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
          ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
=======
        // Create glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Add sparkle effect for holographic particles
        if (particle.type === 'holographic' && Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
      
      // Add intensity-based effects
      if (intensity === 'high') {
        // Add energy waves
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const waveRadius = (time * 50 + i * 100) % (Math.max(canvas.width, canvas.height) * 2);
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, waveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - waveRadius / (Math.max(canvas.width, canvas.height) * 2))})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();
>>>>>>> autobot/2025-08-24T03-49-38-332Z

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
<<<<<<< HEAD
  }, [variant]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Enhanced animated background */}
=======
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
>>>>>>> autobot/2025-08-24T03-49-38-332Z
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
<<<<<<< HEAD

      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400 opacity-20"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-40 border border-pink-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Quantum field lines */}
      {variant.includes('quantum') && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                linear-gradient(90deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, rgba(139,92,246,0.1) 50%, transparent 100%)
              `
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Holographic grid */}
      {variant.includes('holographic') && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139,92,246,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139,92,246,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
=======
      
      {/* Additional CSS-based effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-green-500/20 rounded-full animate-pulse delay-500"></div>
        
        {/* Quantum particles */}
        {enableQuantumEffects && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
          </>
        )}
        
        {/* Holographic elements */}
        {enableHolographic && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-500/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </>
        )}
      </div>
      
      {children}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
    </div>
  );
};

export default UltraAdvancedFuturisticBackground;
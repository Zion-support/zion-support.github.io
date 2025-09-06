<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
type ParticleType = 'quantum' | 'neural' | 'holographic';
// Particle system 
<<<<<<< HEAD
=======
=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic'
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const UltraFuturisticBackground2034: React.FC<
  UltraFuturisticBackground2034Props
> = ({ intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
=======
<<<<<<< HEAD
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic'
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  intensity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      canvas.height = window.innerHeight;
=======
      canvas.height = window.innerHeight
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      canvas.height = window.innerHeight
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    type ParticleType = 'quantum' | 'neural' | 'holographic';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
<<<<<<< HEAD
      type: ParticleType;    }> = [];

    // Quantum entanglement lines
    const entanglementLines: Array<{
=======
      type: ParticleType;
=======
    
    // Particle system
    const particles: Array<{
=======
    
    // Particle system
    const particles: Array<{
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      life: number,
      maxLife: number,
      type: ParticleType
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Quantum entanglement lines
    const entanglementLines: Array<{
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
<<<<<<< HEAD
      life: number;    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      activation: number;    }> = [];

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {        particles.push({
=======
      life: number;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      strength: number,
      life: number
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
<<<<<<< HEAD
<<<<<<< HEAD
      x: number;
      y: number;
      connections: number[];
      activation: number;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      connections: number[],
      activation: number
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }> = [];

    // Initialize particles
    const initParticles = () => {
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 100 * intensity; i++) {
=======
      for (let i = 0, i < 100 * intensity, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 100 * intensity, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        particles.push({
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
<<<<<<< HEAD
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });
=======
          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    // Initialize neural network
    const initNeuralNetwork = () => {
<<<<<<< HEAD
      for (let i = 0; i < 20 * intensity; i++) {        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          activation: Math.random(),
        });      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 20 * intensity; i++) {
=======
      for (let i = 0, i < 20 * intensity, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 20 * intensity, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
<<<<<<< HEAD
<<<<<<< HEAD
          activation: Math.random(),
        });
=======
          activation: Math.random()
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          activation: Math.random()
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Create connections
      neuralNodes.forEach((node, i) => {
        const numConnections = Math.floor(Math.random() * 3) + 1;
<<<<<<< HEAD
        for (let j = 0; j < numConnections; j++) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
        for (let j = 0; j < numConnections; j++) {
=======
        for (let j = 0, j < numConnections, j++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
<<<<<<< HEAD
      });    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;

=======
<<<<<<< HEAD
      });
=======
        for (let j = 0, j < numConnections, j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex)
          }
        }
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < 15 * intensity; i++) {
=======
      for (let i = 0, i < 15 * intensity, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < 15 * intensity, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
<<<<<<< HEAD
          life: Math.random() * 100,
        });      }
=======
<<<<<<< HEAD
          life: Math.random() * 100,
        });
=======
        
        entanglementLines.push({
          x1;
          y1;
          x2;
          y2;
          strength: Math.random(),
          life: Math.random() * 100
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          life: Math.random() * 100
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    initParticles();
    initNeuralNetwork();
    initEntanglementLines();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        if (particle.type === 'quantum') {
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.shadowColor = 'cyan';
          ctx.shadowBlur = 10;
        } else if (particle.type === 'neural') {
          ctx.fillStyle = `rgba(255, 0, 255, ${alpha})`;
          ctx.shadowColor = 'magenta';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          ctx.shadowColor = 'lime';
<<<<<<< HEAD
          ctx.shadowBlur = 6;        }
=======
<<<<<<< HEAD
          ctx.shadowBlur = 6;
=======
        
        if (particle.type === 'quantum') {
          ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.shadowColor = 'cyan';
          ctx.shadowBlur = 10
        } else if (particle.type === 'neural') {
          ctx.fillStyle = `rgba(255, 0, 255, ${alpha})`;
          ctx.shadowColor = 'magenta';
          ctx.shadowBlur = 8
        } else {
          ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          ctx.shadowColor = 'lime';
          ctx.shadowBlur = 6
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ctx.shadowBlur = 6
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Remove dead particles
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles.splice(index, 1);        }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          particles.splice(index, 1);
=======
          particles.splice(index, 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          particles.splice(index, 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });

      // Draw entanglement lines
      entanglementLines.forEach((line, index) => {
        line.life--;
        const alpha = line.life / 100;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 5;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        ctx.restore();

        if (line.life <= 0) {
<<<<<<< HEAD
          entanglementLines.splice(index, 1);        }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          entanglementLines.splice(index, 1);
=======
          entanglementLines.splice(index, 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          entanglementLines.splice(index, 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      });

      // Draw neural network
      neuralNodes.forEach((node, i) => {
        node.activation = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        // Draw connections
        node.connections.forEach(connectionIndex => {
          const targetNode = neuralNodes[connectionIndex];
          if (targetNode) {
            const strength = (node.activation + targetNode.activation) / 2;
            ctx.save();
            ctx.globalAlpha = strength * 0.4;
            ctx.strokeStyle = `rgba(255, 0, 255, ${strength})`;
            ctx.lineWidth = strength * 2;
            ctx.shadowColor = 'magenta';
            ctx.shadowBlur = 3;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
<<<<<<< HEAD
            ctx.restore();          }
=======
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.restore();
=======
            ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        });

        // Draw node
        ctx.save();
        ctx.globalAlpha = node.activation;
        ctx.fillStyle = `rgba(255, 0, 255, ${node.activation})`;
        ctx.shadowColor = 'magenta';
        ctx.shadowBlur = 8;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore();      });
=======
        ctx.restore();
=======
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Add new particles
      if (particles.length < 100 * intensity) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: 100,
          maxLife: 100,
<<<<<<< HEAD
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });
=======
          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Add new entanglement lines
      if (entanglementLines.length < 15 * intensity) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
          life: 100,
        });
      }

<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);    };
=======
<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);
=======
        
        entanglementLines.push({
          x1;
          y1;
          x2;
          y2;
          strength: Math.random(),
          life: 100
        })
      }

      animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationRef.current = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    return () => {
      if (animationRef.current) {
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };  }, [intensity]);
=======
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
=======
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, [intensity]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
<<<<<<< HEAD
      setMousePosition({ x: e.clientX, y: e.clientY });
=======
<<<<<<< HEAD
<<<<<<< HEAD
      setMousePosition({ x: e.clientX, y: e.clientY });
=======
      setMousePosition({ x: e.clientX, y: e.clientY })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
      {/* HTML Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: `blur(${0.5 * intensity}px)` }}
      />

      {/* Framer Motion Geometric Shapes */}
      <div className='absolute inset-0'>
        {/* Floating geometric shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30'
          animate={{
            rotate: 360,
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8,
            repeat: -1,
            ease: 'linear',
=======
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
=======
      setMousePosition({ x: e.clientX, y: e.clientY })
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* HTML Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: `blur(${0.5 * intensity}px)` }}
      />
      
      {/* Framer Motion Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 8,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 6,
            repeat: -1,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
            scale: [1, 1.1, 1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
            scale: [1, 1.1, 1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30'
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
<<<<<<< HEAD
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 12,
            repeat: -1,
            ease: 'linear',          }}
=======
<<<<<<< HEAD
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
=======
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
            rotate: [0, 180, 360];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            rotate: [0, 180, 360];
            opacity: [0.2, 0.5, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 12,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Energy waves */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
      <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent'
          animate={{
<<<<<<< HEAD
            x: ['-100%', '100%'],          }}
          transition={{
            duration: 15,
            repeat: -1,
            ease: 'linear',
=======
<<<<<<< HEAD
            x: ['-100%', '100%'],
=======
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
            x: ['-100%100%']
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            x: ['-100%100%']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 15,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent'
          animate={{
<<<<<<< HEAD
            y: ['-100%', '100%'],          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: 'linear',          }}
=======
<<<<<<< HEAD
            y: ['-100%', '100%'],
=======
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
          animate={{
            y: ['-100%100%']
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            y: ['-100%100%']
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 20,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'linear',
=======
            ease: "linear"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        />
      </div>

      {/* Holographic matrix effect */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
      <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent'
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
<<<<<<< HEAD
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],            }}
=======
<<<<<<< HEAD
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
=======
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              opacity: [0, 1, 0];
              scaleY: [0, 1, 0]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              opacity: [0, 1, 0];
              scaleY: [0, 1, 0]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
<<<<<<< HEAD
              ease: 'easeInOut',            }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              ease: 'easeInOut',
=======
              ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        ))}
      </div>

      {/* Cyberpunk grid */}
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='absolute inset-0'>
=======
      <div className="absolute inset-0">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <motion.div
          className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]'
          style={{
            backgroundSize: '50px 50px',
          }}
          animate={{
<<<<<<< HEAD
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 4,
            repeat: -1,
            ease: 'easeInOut',          }}
        />
      </div>
    </div>
  );
};

export default UltraFuturisticBackground2034;
=======
<<<<<<< HEAD
            opacity: [0.3, 0.6, 0.3],
=======
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]"
          style={{
            backgroundSize: '50px 50px'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            opacity: [0.3, 0.6, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
            repeat: -1,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: "easeInOut"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "easeInOut"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default UltraFuturisticBackground2034;
=======
  )
};

export default UltraFuturisticBackground2034;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default UltraFuturisticBackground2034;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic'
}
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
type ParticleType = 'quantum' | 'neural' | 'holographic';
// Particle system
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
 resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
type ParticleType = 'quantum' | 'neural' | 'holographic';
// Particle system

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const UltraFuturisticBackground2034: React.FC<
  UltraFuturisticBackground2034Props
> = ({ intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
<<<<<<< HEAD
const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({

  intensity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
<<<<<<< HEAD
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
=======
      canvas.height = window.innerHeight;
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    type ParticleType = 'quantum' | 'neural' | 'holographic';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
    const entanglementLines: Array<{      x: number
      y: number
      vx: number
      vy: number
      size: number
      life: number
      maxLife: number
      type: ParticleType
=======
      type: ParticleType;
    }> = [];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Quantum entanglement lines
    const entanglementLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
<<<<<<< HEAD
      life: number;    }> = [];
=======
      life: number;
    }> = [];

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
<<<<<<< HEAD
      activation: number;    }> = [];
    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {        particles.push({      x1: number
      y1: number
      x2: number
      y2: number
      strength: number
      life: number
    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
      activation: number;      x: number
      y: number
      connections: number[]
      activation: number
    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {      for (let i = 0, i < 100 * intensity, i++) {
        particles.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 2
          vy: (Math.random() - 0.5) * 2
          size: Math.random() * 3 + 1
          life: Math.random() * 100
          maxLife: 100
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType
        });      }          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
=======
      activation: number;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      for (let i = 0; i < 100 * intensity; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100,
          maxLife: 100,
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
    // Initialize neural network
    const initNeuralNetwork = () => {
<<<<<<< HEAD
      for (let i = 0; i < 20 * intensity; i++) {        neuralNodes.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          connections: []
          activation: Math.random()
        });      }      for (let i = 0, i < 20 * intensity, i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          connections: []
          activation: Math.random()
        });          activation: Math.random()
        })
=======
      for (let i = 0; i < 20 * intensity; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          activation: Math.random(),
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
      // Create connections
      neuralNodes.forEach((node, i) => {
        const numConnections = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
<<<<<<< HEAD
      });    }
    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex)
          }
        }
      })
    }
    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {      for (let i = 0, i < 15 * intensity, i++) {
=======
      });
    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
<<<<<<< HEAD
        entanglementLines.push({
          x1
          y1
          x2
          y2
          strength: Math.random()
          life: Math.random() * 100
        });      }        entanglementLines.push({
          x1;
          y1;
          x2;
          y2;
          strength: Math.random()
          life: Math.random() * 100
        })
=======

        entanglementLines.push({
          x1,
          y1,
          x2,
          y2,
          strength: Math.random(),
          life: Math.random() * 100,
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
    }
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
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
          ctx.shadowBlur = 6;        }        if (particle.type === 'quantum') {
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
=======
          ctx.shadowBlur = 6;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // Remove dead particles
        if (particle.life <= 0) {
<<<<<<< HEAD
          particles.splice(index, 1);        }          particles.splice(index, 1)
=======
          particles.splice(index, 1);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
      });
      // Draw entanglement lines
      entanglementLines.forEach((line, index) => {
        line.life--;
        const alpha = line.life / 100;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'cyan';
        ctx.shadowBlur = 5;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
        ctx.restore();
        if (line.life <= 0) {
<<<<<<< HEAD
          entanglementLines.splice(index, 1);        }          entanglementLines.splice(index, 1)
=======
          entanglementLines.splice(index, 1);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        }
      });
      // Draw neural network
      neuralNodes.forEach((node, i) => {
        node.activation = Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
<<<<<<< HEAD
            ctx.restore();          }            ctx.restore()
=======
            ctx.restore();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }
        });
        // Draw node
        ctx.save();
        ctx.globalAlpha = node.activation;
        ctx.fillStyle = `rgba(255, 0, 255, ${node.activation})`;
        ctx.shadowColor = 'magenta';
        ctx.shadowBlur = 8;
<<<<<<< HEAD
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      });
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore()
      // Add new particles
      if (particles.length < 100 * intensity) {
        particles.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 2
          vy: (Math.random() - 0.5) * 2
          size: Math.random() * 3 + 1
          life: 100
          maxLife: 100
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType
        });      }          type: ['quantumneuralholographic'][Math.floor(Math.random() * 3)] as ParticleType
        })
=======

        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

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
          type: ['quantum', 'neural', 'holographic'][
            Math.floor(Math.random() * 3)
          ] as ParticleType,
        });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      }
      // Add new entanglement lines
      if (entanglementLines.length < 15 * intensity) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        entanglementLines.push({
          x1
          y1
          x2
          y2
          strength: Math.random()
          life: 100
        });
      }
<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);    };        entanglementLines.push({
          x1;
          y1;
          x2;
          y2;
          strength: Math.random()
          life: 100
        })
      }
      animationRef.current = requestAnimationFrame(animate)
    }
=======

      animationRef.current = requestAnimationFrame(animate);
    };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
<<<<<<< HEAD
    };  }, [intensity]);        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
=======
<<<<<<< HEAD
    };
  }, [intensity]);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    };  }, [intensity]);

  }, [intensity]);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
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
<<<<<<< HEAD
            rotate: 360
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8
            repeat: -1
            ease: 'linear',    }
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
            rotate: 360
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
<<<<<<< HEAD
            duration: 8
            repeat: -1
            ease: 'linear'
=======
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: -1,
            ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
          animate={{
<<<<<<< HEAD
            y: [0, -20, 0]
            opacity: [0.4, 0.8, 0.4]
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 6
            repeat: -1
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
            scale: [1, 1.1, 1]
          }}
          transition={{
<<<<<<< HEAD
            duration: 6
            repeat: -1
            ease: 'easeInOut'
=======
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: -1,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
            duration: 6,
            repeat: -1,
<<<<<<< HEAD
            ease: 'easeInOut',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
        />
        <motion.div
          className='absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30'
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
<<<<<<< HEAD
            rotate: [0, 180, 360]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 12
            repeat: -1
            ease: 'linear',          }}          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
            rotate: [0, 180, 360];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12
            repeat: -1
            ease: 'linear',            ease: "linear"
=======
<<<<<<< HEAD
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
=======
<<<<<<< HEAD
            duration: 8,
            repeat: -1,

          }}
          transition={{
            duration: 6,
            repeat: -1,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
          transition={{
            duration: 12,
            repeat: -1,
<<<<<<< HEAD
            ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          }}
        />
      </div>
      {/* Energy waves */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent'
          animate={{
<<<<<<< HEAD
            x: ['-100%', '100%'],          }}
          transition={{
            duration: 15
            repeat: -1
            ease: 'linear',        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
            x: ['-100%100%']
          }}
          transition={{
            duration: 15
            repeat: -1
            ease: 'linear'
=======
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: -1,
            ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent'
          animate={{
<<<<<<< HEAD
            y: ['-100%', '100%'],          }}
          transition={{
            duration: 20
            repeat: -1
            ease: 'linear',          }}          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
          animate={{
            y: ['-100%100%']
          }}
          transition={{
<<<<<<< HEAD
<<<<<<< HEAD
            duration: 20
            repeat: -1
            ease: 'linear',            ease: "linear"
=======
            y: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: 'linear',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
=======
            duration: 20,
            repeat: -1,

          }}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
            duration: 20,
            repeat: -1,
<<<<<<< HEAD
            ease: 'linear',            ease: "linear"
          }}
=======

          }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </div>
      {/* Holographic matrix effect */}
      <div className='absolute inset-0'>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent'
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
<<<<<<< HEAD
              opacity: [0, 1, 0]
              scaleY: [0, 1, 0],            }}        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              opacity: [0, 1, 0];
              scaleY: [0, 1, 0]
            }}
<<<<<<< HEAD
<<<<<<< HEAD
            transition={{
              duration: 3
              delay: i * 0.1
              repeat: -1
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
              ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
            }}
          />
        ))}
      </div>
      {/* Cyberpunk grid */}
      <div className='absolute inset-0'>
<<<<<<< HEAD
        <motion.div
          className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]'
          style={{
            backgroundSize: '50px 50px'
=======

            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Cyberpunk grid */}
      <div className='absolute inset-0'>

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]'
          style={{
            backgroundSize: '50px 50px',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          }}
          animate={{
<<<<<<< HEAD
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 4
            repeat: -1
            ease: 'easeInOut',          }}
        />
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default UltraFuturisticBackground2034;        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)]"
          style={{
            backgroundSize: '50px 50px'
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3]
<<<<<<< HEAD
          }}
          transition={{
            duration: 4
            repeat: -1
=======
=======
export default UltraFuturisticBackground2034;

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          }}
          transition={{
            duration: 4,
            repeat: -1,
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ease: 'easeInOut',            ease: "easeInOut"
=======
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: -1,
            ease: 'easeInOut',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          }}
        />
      </div>
    </div>
  );
<<<<<<< HEAD
}
export default UltraFuturisticBackground2034;  )
}
export default UltraFuturisticBackground2034;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default UltraFuturisticBackground2034;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
};

export default UltraFuturisticBackground2034;
<<<<<<< HEAD

          }}
          transition={{
            duration: 4,
            repeat: -1,
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

          }}
        />
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

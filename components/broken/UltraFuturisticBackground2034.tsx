


  componentDidCatch(error, errorInfo) {
import React from 'react';
  const canvasRef = useRef<HTMLCanvasElement>(null);

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface UltraFuturisticBackground2034Props {
  intensity?: number;
  theme?: 'quantum' | 'cyberpunk' | 'neural' | 'holographic';
}

const UltraFuturisticBackground2034: React.FC<UltraFuturisticBackground2034Props> = ({
  intensity = 1
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    type ParticleType = 'quantum' | 'neural' | 'holographic';
    
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      type: ParticleType;
    }> = [];

    // Quantum entanglement lines
    const entanglementLines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      strength: number;
      life: number;
    }> = [];

    // Neural network nodes
    const neuralNodes: Array<{
      x: number;
      y: number;
      connections: number[];
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
          type: ['quantum', 'neural', 'holographic'][Math.floor(Math.random() * 3)] as ParticleType
        });
      }
    };

    // Initialize neural network
    const initNeuralNetwork = () => {
      for (let i = 0; i < 20 * intensity; i++) {
        neuralNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          connections: [],
          activation: Math.random()
        });
      }

      // Create connections
      neuralNodes.forEach((node, i) => {
        const numConnections = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * neuralNodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          }
        }
      });
    };

    // Initialize entanglement lines
    const initEntanglementLines = () => {
      for (let i = 0; i < 15 * intensity; i++) {
        const x1 = Math.random() * canvas.width;
        const y1 = Math.random() * canvas.height;
        const x2 = x1 + (Math.random() - 0.5) * 200;
        const y2 = y1 + (Math.random() - 0.5) * 200;
        



          x1,
          y1,
          x2,
          y2,


      }
    };

    initParticles();
    initNeuralNetwork();
    initEntanglementLines();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);



        



        
        


        
            

        


        
          x1,
          y1,
          x2,
          y2,

        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();




    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [intensity]);



  // Mouse move handler for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });



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
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: -1,
            ease: "linear"
          }}
        

          }}
          transition={{
            duration: 6,
            repeat: -1,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-1/3 w-40 h-20 border border-green-400/30"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 15,
            repeat: -1,










            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
          animate={{
            y: ['-100%', '100%']
          }}
          transition={{
            duration: 20,
            repeat: -1,
            ease: "linear"
          }}
        />
      </div>

      {/* Holographic matrix effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div


            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{ left: `${(i * 5) % 100}%` }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}









            transition={{
              duration: 3,
              delay: i * 0.1,
              repeat: -1,








          />
        ))}
      </div>

      {/* Cyberpunk grid */}

export default UltraFuturisticBackground2034;





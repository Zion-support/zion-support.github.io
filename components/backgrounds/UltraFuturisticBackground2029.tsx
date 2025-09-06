<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Initialize particles 
}particlesRef.current = particles 
};
initParticles ();
// Animation loop // Update and draw particles particlesRef.current.forEach ( (particle, index) => {
  // Update position particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle ctx.save ();
ctx.globalAlpha = particle.opacity;
// Different effects for different particle types switch (particle.type) {
  case 'quantum': // Quantum particles with glow effect 
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk'
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function UltraFuturisticBackground2029() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

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

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][
          Math.floor(Math.random() * 4)
        ] as Particle['type'];
        const colors = {
          quantum: ['#00ffff', '#0080ff', '#0040ff'],
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],
          neural: ['#10b981', '#059669', '#047857'],
<<<<<<< HEAD
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        };
=======
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],
=======
      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumholographicneuralcyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {
=======
      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumholographicneuralcyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          quantum: ['#00ffff#0080ff#0040ff'],
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b']
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          type,
        });
      }

<<<<<<< HEAD
      particlesRef.current = particles;    };
=======
      particlesRef.current = particles;
=======
          type
        })
      }

      particlesRef.current = particles
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          type
        })
      }

      particlesRef.current = particles
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    initParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
<<<<<<< HEAD
        canvas.height / 2,        Math.max(canvas.width, canvas.height) / 2
=======
        canvas.height / 2,
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;
        canvas.height / 2;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        Math.max(canvas.width, canvas.height) / 2
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
        
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner =
                particlesRef.current[
                  (index + 50) % particlesRef.current.length
                ];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
<<<<<<< HEAD
                  Math.pow(particle.x - partner.x, 2) +
                    Math.pow(particle.y - partner.y, 2)                );
=======
<<<<<<< HEAD
                  Math.pow(particle.x - partner.x, 2) +
                    Math.pow(particle.y - partner.y, 2)
=======
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
<<<<<<< HEAD
                  ctx.stroke();                }
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  ctx.stroke();
=======
                  ctx.stroke()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  ctx.stroke()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              }
            }
            break;

          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001;
            const hue = (time * 50 + index * 10) % 360;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;

          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
            
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(
                p =>
                  p.type === 'neural' &&
                  Math.sqrt(
                    Math.pow(particle.x - p.x, 2) +
                      Math.pow(particle.y - p.y, 2)
                  ) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
<<<<<<< HEAD
                  Math.pow(particle.x - connection.x, 2) +
                    Math.pow(particle.y - connection.y, 2)                );
=======
<<<<<<< HEAD
                  Math.pow(particle.x - connection.x, 2) +
                    Math.pow(particle.y - connection.y, 2)
=======
            
            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p => 
                p.type === 'neural' && 
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
<<<<<<< HEAD
                ctx.stroke();
              });            }
=======
<<<<<<< HEAD
<<<<<<< HEAD
                ctx.stroke();
              });
=======
                ctx.stroke()
              })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                ctx.stroke()
              })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            break;

          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            ctx.stroke();
<<<<<<< HEAD
            break;
        }

        ctx.restore();      });
=======
<<<<<<< HEAD
<<<<<<< HEAD
            break;
        }

        ctx.restore();
=======
            break
        }

        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            break
        }

        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height);

      // Draw energy waves
      drawEnergyWaves(ctx, canvas.width, canvas.height);

<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate);
=======
      animationRef.current = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationRef.current = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
=======
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current);
=======
        cancelAnimationFrame(animationRef.current)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
    };
  }, []);

  const drawGeometricShapes = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const time = Date.now() * 0.0005;
<<<<<<< HEAD
=======
    
    // Floating hexagons
    for (let i = 0, i < 5, i++) {
      const x = (width * 0.2) + Math.sin(time + i) * 100;
      const y = (height * 0.3) + Math.cos(time + i * 0.7) * 80;
      const size = 20 + Math.sin(time * 2 + i) * 10;
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Floating hexagons
    for (let i = 0; i < 5; i++) {
      const x = width * 0.2 + Math.sin(time + i) * 100;
      const y = height * 0.3 + Math.cos(time + i * 0.7) * 80;
      const size = 20 + Math.sin(time * 2 + i) * 10;
<<<<<<< HEAD
=======
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
<<<<<<< HEAD
      for (let j = 0; j < 6; j++) {        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      for (let j = 0; j < 6; j++) {
=======
      for (let j = 0, j < 6, j++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let j = 0, j < 6, j++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
<<<<<<< HEAD
<<<<<<< HEAD
        else ctx.lineTo(px, py);
=======
        else ctx.lineTo(px, py)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    // Floating triangles
    for (let i = 0; i < 3; i++) {
      const x = width * 0.8 + Math.sin(time * 0.8 + i) * 120;
      const y = height * 0.7 + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
        else ctx.lineTo(px, py)
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }

    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;
      
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();
<<<<<<< HEAD
      for (let j = 0; j < 3; j++) {        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      for (let j = 0; j < 3; j++) {
=======
      for (let j = 0, j < 3, j++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let j = 0, j < 3, j++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
<<<<<<< HEAD
<<<<<<< HEAD
        else ctx.lineTo(px, py);
=======
        else ctx.lineTo(px, py)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  };

  const drawEnergyWaves = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const time = Date.now() * 0.001;
<<<<<<< HEAD
=======
    
    // Horizontal energy waves
<<<<<<< HEAD
    for (let i = 0; i < 3; i++) {
=======
        else ctx.lineTo(px, py)
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
  };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Horizontal energy waves
<<<<<<< HEAD
    for (let i = 0; i < 3; i++) {      ctx.save();
=======
    for (let i = 0, i < 3, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    for (let i = 0, i < 3, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.save();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      for (let x = 0; x < width; x += 5) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.01 + time + i) * 50 +
          Math.sin(x * 0.02 + time * 2 + i) * 25;
<<<<<<< HEAD
=======
=======
      
      for (let x = 0, x < width, x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.restore();
    }

    // Vertical energy waves
<<<<<<< HEAD
    for (let i = 0; i < 2; i++) {      ctx.save();
=======
<<<<<<< HEAD
    for (let i = 0; i < 2; i++) {
=======
      
      for (let x = 0, x < width, x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y)
      }
      
      ctx.stroke();
      ctx.restore()
    }

    // Vertical energy waves
    for (let i = 0, i < 2, i++) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    for (let i = 0, i < 2, i++) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      ctx.save();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      for (let y = 0; y < height; y += 5) {
        const x =
          width * 0.5 +
          Math.sin(y * 0.01 + time + i) * 60 +
          Math.sin(y * 0.015 + time * 1.5 + i) * 30;
<<<<<<< HEAD
=======
=======
      
      for (let y = 0, y < height, y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
<<<<<<< HEAD
      ctx.restore();    }
  };

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
=======
<<<<<<< HEAD
      ctx.restore();
=======
      
      for (let y = 0, y < height, y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y)
      }
      
      ctx.stroke();
      ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='fixed inset-0 -z-10 overflow-hidden'>
=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Animated gradient overlay */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30'
        animate={{
          background: [
<<<<<<< HEAD
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
          ],        }}
=======
<<<<<<< HEAD
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
          ],
=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
      
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: 'blur(0.5px)' }}
      />

      {/* Additional visual layers */}
      <div className='absolute inset-0'>
        {/* Quantum field ripples */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
=======
      
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        {/* Holographic matrix */}
        <motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{
<<<<<<< HEAD
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
=======
            ease: 'easeInOut'
          }}
        />
        
        {/* Holographic matrix */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />

        {/* Neural network nodes */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
          animate={{
<<<<<<< HEAD
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
=======
<<<<<<< HEAD
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
=======
            ease: 'easeInOut'
          }}
        />
        
        {/* Neural network nodes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
          animate={{
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut',
=======
            ease: 'easeInOut'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          }}
        />
      </div>

      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
            }}
            animate={{
<<<<<<< HEAD
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],            }}
=======
<<<<<<< HEAD
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
=======
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              y: [0, -20, 0];
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.2, 1]
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              y: [0, -20, 0];
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.2, 1]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
<<<<<<< HEAD
              delay: i * 0.3,            }}
=======
<<<<<<< HEAD
<<<<<<< HEAD
              delay: i * 0.3,
=======
              delay: i * 0.3
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              delay: i * 0.3
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            }}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          />
        ))}
      </div>
    </div>
<<<<<<< HEAD
  );
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

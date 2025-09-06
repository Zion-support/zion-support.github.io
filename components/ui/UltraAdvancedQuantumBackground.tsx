<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let animationFrameId: number;
let particles: Particle[] = [];
let quantumFields: QuantumField[] = [];
let neuralNetworks: NeuralNetwork[] = [];
class Particle {
  x: number;
y: number;
vx: number;
vy: number;
size: number;
color: string;
life: number;
maxLife: number;
constructor () {
  this.x = Math.random () * canvas.width;
this.y = Math.random () * canvas.height;
this.vx = (Math.random () - 0.5) * 2;
this.vy = (Math.random () - 0.5) * 2;
this.size = Math.random () * 3 + 1;
this.color = `hsl ($ {
  Math.random () * 360 
}, 70%, 60%) `;
this.life = Math.random () * 100;
this.maxLife = 100 
}if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
if (this.life <= 0) {
  constructor () {
  this.x = Math.random () * canvas.width;
this.y = Math.random () * canvas.height;
this.radius = Math.random () * 100 + 50;
this.intensity = Math.random () * 0.5 + 0.5;
this.phase = Math.random () * Math.PI * 2;
this.color = `hsl ($ {
  200 + Math.random () * 60 
}, 80%, 60%) ` 

const UltraAdvancedQuantumBackground: React.FC<
  UltraAdvancedQuantumBackgroundProps
<<<<<<< HEAD
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);
=======
> = ({ children, className = '' }) => {
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraAdvancedQuantumBackgroundProps {
  children: React.ReactNode,
  className?: string
}

=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraAdvancedQuantumBackgroundProps {
  children: React.ReactNode,
  className?: string
}

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const UltraAdvancedQuantumBackground: React.FC<UltraAdvancedQuantumBackgroundProps> = ({ 
  children;
  className = '' 
}) => {
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const canvasRef = useRef<HTMLCanvasElement>(null);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    let animationFrameId: number;
    let particles: Particle[] = [];
    let quantumFields: QuantumField[] = [];
    let neuralNetworks: NeuralNetwork[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
<<<<<<< HEAD
=======

=======
    let animationFrameId: number,
    let particles: Particle[] = [];
    let quantumFields: QuantumField[] = [];
    let neuralNetworks: NeuralNetwork[] = [];
    class Particle {
=======
    let animationFrameId: number,
    let particles: Particle[] = [],
    let quantumFields: QuantumField[] = [],
    let neuralNetworks: NeuralNetwork[] = [],
    class Particle {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number,
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
        this.life = Math.random() * 100;
<<<<<<< HEAD
        this.maxLife = 100;      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
        this.maxLife = 100;
=======
        this.maxLife = 100
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        this.maxLife = 100
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (this.life <= 0) {
          this.life = this.maxLife;
          this.x = Math.random() * canvas.width;
<<<<<<< HEAD
          this.y = Math.random() * canvas.height;        }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          this.y = Math.random() * canvas.height;
=======
          this.y = Math.random() * canvas.height
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          this.y = Math.random() * canvas.height
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.life / this.maxLife;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        ctx.restore();      }
    }

    class QuantumField {
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
    }

    class QuantumField {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      x: number;
      y: number;
      radius: number;
      intensity: number;
      phase: number;
      color: string;
<<<<<<< HEAD
=======

=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      x: number,
      y: number,
      radius: number,
      intensity: number,
      phase: number,
      color: string,
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.5 + 0.5;
        this.phase = Math.random() * Math.PI * 2;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        this.color = `hsl(${200 + Math.random() * 60}, 80%, 60%)`;
      }

      update() {
<<<<<<< HEAD
        this.phase += 0.02;      }
=======
        this.phase += 0.02;
=======
        this.color = `hsl(${200 + Math.random() * 60}, 80%, 60%)`
      }

      update() {
        this.phase += 0.02
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        this.color = `hsl(${200 + Math.random() * 60}, 80%, 60%)`
      }

      update() {
        this.phase += 0.02
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.intensity * (0.5 + 0.5 * Math.sin(this.phase));
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
<<<<<<< HEAD
        ctx.restore();      }
    }

    class NeuralNetwork {
      nodes: { x: number; y: number; connections: number[] }[];
      connections: { from: number; to: number; weight: number }[];

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
    }

    class NeuralNetwork {
<<<<<<< HEAD
<<<<<<< HEAD
      nodes: { x: number; y: number; connections: number[] }[];
      connections: { from: number; to: number; weight: number }[];

=======
      nodes: { x: number, y: number, connections: number[] }[],
      connections: { from: number, to: number, weight: number }[],
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      constructor() {
        this.nodes = [];
        this.connections = [];

        // Create neural network structure
        const layers = [5, 8, 6, 4];
        let nodeIndex = 0;

        layers.forEach((layerSize, layerIndex) => {
          for (let i = 0; i < layerSize; i++) {
            const x = (layerIndex / (layers.length - 1)) * canvas.width;
            const y = (i / (layerSize - 1)) * canvas.height;

            this.nodes.push({ x, y, connections: [] });

            // Connect to previous layer
            if (layerIndex > 0) {
              const prevLayerStart = nodeIndex - layers[layerIndex - 1];
              for (let j = 0; j < layers[layerIndex - 1]; j++) {
                this.connections.push({
                  from: prevLayerStart + j,
                  to: nodeIndex,
                  weight: Math.random(),
                });
              }
            }
            nodeIndex++;
          }
<<<<<<< HEAD
        });      }
=======
<<<<<<< HEAD
        });
=======
      nodes: { x: number, y: number, connections: number[] }[],
      connections: { from: number, to: number, weight: number }[],
      constructor() {
        this.nodes = [];
        this.connections = [];
        
        // Create neural network structure
        const layers = [5, 8, 6, 4];
        let nodeIndex = 0;
        
        layers.forEach((layerSize, layerIndex) => {
          for (let i = 0, i < layerSize, i++) {
            const x = (layerIndex / (layers.length - 1)) * canvas.width;
            const y = (i / (layerSize - 1)) * canvas.height;
            
            this.nodes.push({ x, y, connections: [] }),
            
            // Connect to previous layer
            if (layerIndex > 0) {
              const prevLayerStart = nodeIndex - layers[layerIndex - 1];
              for (let j = 0, j < layers[layerIndex - 1], j++) {
                this.connections.push({
                  from: prevLayerStart + j,
                  to: nodeIndex,
                  weight: Math.random()
                })
              }
            }
            nodeIndex++
          }
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      update() {
        // Animate neural network
        this.nodes.forEach((node, index) => {
          node.x += (Math.random() - 0.5) * 0.5;
<<<<<<< HEAD
          node.y += (Math.random() - 0.5) * 0.5;
        });      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
          node.y += (Math.random() - 0.5) * 0.5;
        });
=======
          node.y += (Math.random() - 0.5) * 0.5
        })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          node.y += (Math.random() - 0.5) * 0.5
        })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      draw() {
        if (!ctx) return;
        ctx.save();
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
        ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)';
        ctx.lineWidth = 1;
        this.connections.forEach(connection => {
          const from = this.nodes[connection.from];
          const to = this.nodes[connection.to];
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
<<<<<<< HEAD
          ctx.stroke();        });
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
        });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

        // Draw nodes
        ctx.fillStyle = 'rgba(100, 200, 255, 0.8)';
        this.nodes.forEach(node => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
<<<<<<< HEAD
          ctx.fill();
        });

        ctx.restore();      }
    }

    // Initialize
=======
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.fill();
        });

        ctx.restore();
=======
          ctx.fill()
        });

        ctx.restore()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ctx.fill()
        });

        ctx.restore()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    }

    // Initialize
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 8; i++) {
<<<<<<< HEAD
      quantumFields.push(new QuantumField());    }
=======
      quantumFields.push(new QuantumField());
=======
    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
    }

    for (let i = 0, i < 8, i++) {
      quantumFields.push(new QuantumField())
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    for (let i = 0, i < 100, i++) {
      particles.push(new Particle())
    }

    for (let i = 0, i < 8, i++) {
      quantumFields.push(new QuantumField())
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    neuralNetworks.push(new NeuralNetwork());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw quantum fields
      quantumFields.forEach(field => {
        field.update();
<<<<<<< HEAD
        field.draw();      });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        field.draw();
=======
        field.draw()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        field.draw()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Update and draw neural networks
      neuralNetworks.forEach(network => {
        network.update();
<<<<<<< HEAD
        network.draw();      });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        network.draw();
=======
        network.draw()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        network.draw()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
<<<<<<< HEAD
        particle.draw();      });
=======
<<<<<<< HEAD
<<<<<<< HEAD
        particle.draw();
=======
        particle.draw()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        particle.draw()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      // Draw quantum entanglement effects
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 100, 255, 0.3)';
      ctx.lineWidth = 1;
<<<<<<< HEAD
      for (let i = 0; i < particles.length; i += 2) {        if (i + 1 < particles.length) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < particles.length; i += 2) {
=======
      for (let i = 0, i < particles.length, i += 2) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      for (let i = 0, i < particles.length, i += 2) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        if (i + 1 < particles.length) {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          const p1 = particles[i];
          const p2 = particles[i + 1];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
<<<<<<< HEAD
            ctx.stroke();          }
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
      ctx.restore();

<<<<<<< HEAD
      animationFrameId = requestAnimationFrame(animate);    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      animationFrameId = requestAnimationFrame(animate);
=======
      animationFrameId = requestAnimationFrame(animate)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      animationFrameId = requestAnimationFrame(animate)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    animate();

    const handleResize = () => {
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
<<<<<<< HEAD
      cancelAnimationFrame(animationFrameId);
    };  }, []);
=======
<<<<<<< HEAD
<<<<<<< HEAD
      cancelAnimationFrame(animationFrameId);
    };
=======
      cancelAnimationFrame(animationFrameId)
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      cancelAnimationFrame(animationFrameId)
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Quantum Matrix Overlay */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]' />
      </div>

      {/* Animated Quantum Grid */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]' />
<<<<<<< HEAD
        <div className='absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]' />      </div>

      {/* Floating Quantum Elements */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl'
=======
        <div className='absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]' />
=======
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Animated Quantum Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Animated Quantum Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_98%,rgba(120,119,198,0.3)_100%)] bg-[length:50px_50px]" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      </div>

      {/* Floating Quantum Elements */}
      <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
        className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl'
=======
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
=======
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2]}}
        transition={{
          duration: 5,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
          delay: 1,
=======
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.2, 1];
          opacity: [0.2, 0.4, 0.2]}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.3, 1];
          opacity: [0.2, 0.5, 0.2]}}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ease: "easeInOut",
          delay: 1
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }}
      />

      <motion.div
<<<<<<< HEAD
        className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl'
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
=======
<<<<<<< HEAD
<<<<<<< HEAD
        className='absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-xl'
=======
        className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-xl"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        animate={{
          scale: [1, 1.4, 1];
          opacity: [0.2, 0.6, 0.2]}}
        transition={{
          duration: 6,
          repeat: Infinity,
<<<<<<< HEAD
          ease: 'easeInOut',
          delay: 2,
=======
        className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-xl"
        animate={{
          scale: [1, 1.4, 1];
          opacity: [0.2, 0.6, 0.2]}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          ease: "easeInOut",
          delay: 2
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,        }}
      />

      <motion.div
        className='absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 blur-xl'
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,        }}
      />

      {/* Quantum Canvas */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
        className='absolute inset-0 w-full h-full opacity-60'        style={{ zIndex: 1 }}
      />

      {/* Content Layer */}
      <div className='relative z-10'>{children}</div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        className='absolute inset-0 w-full h-full opacity-60'
=======
        className="absolute inset-0 w-full h-full opacity-60"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        className="absolute inset-0 w-full h-full opacity-60"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        style={{ zIndex: 1 }}
      />

      {/* Content Layer */}
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='relative z-10'>{children}</div>
=======
      <div className="relative z-10">
        {children}
      </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      {/* Quantum Energy Waves */}
      <div className='absolute bottom-0 left-0 right-0 h-32 overflow-hidden'>
        <motion.div
          className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/20 to-transparent'
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
=======
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/20 to-transparent"
          animate={{
            x: [0, 100, 0]}}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/20 to-transparent'
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',
            delay: 2,          }}
        />
      </div>
    </div>
  );
};

export default UltraAdvancedQuantumBackground;
=======
            ease: "linear",
            delay: 2
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            ease: "linear",
            delay: 2
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          }}
        />
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  );
};

export default UltraAdvancedQuantumBackground;
=======
  )
};

export default UltraAdvancedQuantumBackground;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
};

export default UltraAdvancedQuantumBackground;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

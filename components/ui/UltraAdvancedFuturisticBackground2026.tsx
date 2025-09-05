<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
interface UltraAdvancedFuturisticBackground2026Props {
  intensity?: 'low' | 'medium' | 'high' | 'extreme',
  colorScheme?: 'neural-network' | 'quantum-field' | 'cyberpunk' | 'holographic' | 'multidimensional',
  particleCount?: number,
  animationSpeed?: number,
  enableHolographic?: boolean,
  enableQuantumEffects?: boolean,
  enableNeuralNetworks?: boolean,
  enableMultidimensional?: boolean,
  children?: React.ReactNode
}

const UltraAdvancedFuturisticBackground2026: React.FC<UltraAdvancedFuturisticBackground2026Props> = ({
  intensity = 'high',
  colorScheme = 'neural-network',
  particleCount = 300,
  animationSpeed = 2.0,
  enableHolographic = true,
  enableQuantumEffects = true,
  enableNeuralNetworks = true,
  enableMultidimensional = true,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null),
  const containerRef = useRef<HTMLDivElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,
=======
import React, {_useEffect, _useRef} from 'react';

interface UltraAdvancedFuturisticBackground2026Props {_intensity?: 'low' | 'medium' | 'high' | 'extreme';
  colorScheme?: 'neural-network' | 'quantum-field' | 'cyberpunk' | 'holographic' | 'multidimensional';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeuralNetworks?: boolean;
  enableMultidimensional?: boolean;
  children?: React.ReactNode;}

const UltraAdvancedFuturisticBackground2026: React.FC<UltraAdvancedFuturisticBackground2026Props> = (_{_intensity = 'high', _colorScheme = 'neural-network', _particleCount = 300, _animationSpeed = 2.0, _enableHolographic = true, _enableQuantumEffects = true, _enableNeuralNetworks = true, _enableMultidimensional = true, _children}) => {_const _canvasRef = useRef<HTMLCanvasElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);

  useEffect__(() => {
    const _canvas = canvasRef.current;
    if (!canvas) return;

    const _ctx = canvas.getContext('2d');
    if (!ctx) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    let animationFrameId: number,
    let particles: Particle[] = [],
    let neuralNodes: NeuralNode[] = [],
    let quantumFields: QuantumField[] = [],
    let holographicLayers: HolographicLayer[] = [],

    // Set canvas size
    const _resizeCanvas = () => {
      if (containerRef.current) {
<<<<<<< HEAD
        const rect = containerRef.current.getBoundingClientRect(),
        canvas.width = rect.width,
        canvas.height = rect.height
      }
    },
=======
        const _rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    resizeCanvas(),
    window.addEventListener('resize', resizeCanvas),

    // Particle class
<<<<<<< HEAD
    class Particle {
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number,

      constructor(x: number, y: number) {
        this.x = x,
        this.y = y,
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed,
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed,
        this.size = Math.random() * 3 + 1,
        this.color = getColorSchemeColor(),
        this.alpha = Math.random() * 0.8 + 0.2,
        this.life = Math.random() * 100 + 50,
        this.maxLife = this.life
      }

      update() {
        this.x += this.vx,
        this.y += this.vy,
        this.life--,
=======
    class Particle {_x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      life: number;
      maxLife: number;

      constructor(x: number, _y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 + 1;
        this.color = getColorSchemeColor();
        this.alpha = Math.random() * 0.8 + 0.2;
        this.life = Math.random() * 100 + 50;
        this.maxLife = this.life;}

      update() {_this.x += this.vx;
        this.y += this.vy;
        this.life--;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1,
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1,

        // Wrap around
        if (this.x < 0) this.x = canvas.width,
        if (this.x > canvas.width) this.x = 0,
        if (this.y < 0) this.y = canvas.height,
        if (this.y > canvas.height) this.y = 0,

        // Fade out
<<<<<<< HEAD
        this.alpha = this.life / this.maxLife
      }

      draw() {
        ctx.save(),
        ctx.globalAlpha = this.alpha,
        ctx.fillStyle = this.color,
        ctx.beginPath(),
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }
    }

    // Neural network node class
    class NeuralNode {
      x: number,
      y: number,
      connections: NeuralNode[],
      activation: number,
      pulse: number,

      constructor(x: number, y: number) {
        this.x = x,
        this.y = y,
        this.connections = [],
        this.activation = Math.random(),
        this.pulse = 0
      }

      update() {
        this.activation += (Math.random() - 0.5) * 0.1,
        this.activation = Math.max(0, Math.min(1, this.activation)),
        this.pulse = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.5 + 0.5
      }

      draw() {
        ctx.save(),
        ctx.globalAlpha = 0.8,
        ctx.fillStyle = `rgba(0, 255, 255, ${this.activation})`,
        ctx.beginPath(),
        ctx.arc(this.x, this.y, 3 + this.pulse * 2, 0, Math.PI * 2),
        ctx.fill(),

        // Draw connections
        this.connections.forEach(connection => {
          const distance = Math.sqrt(
            Math.pow(this.x - connection.x, 2) + Math.pow(this.y - connection.y, 2)
          ),
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * this.activation * connection.activation})`,
            ctx.lineWidth = 1,
            ctx.beginPath(),
            ctx.moveTo(this.x, this.y),
            ctx.lineTo(connection.x, connection.y),
            ctx.stroke()
=======
        this.alpha = this.life / this.maxLife;}

      draw() {_ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, _this.y, _this.size, _0, _Math.PI * 2);
        ctx.fill();
        ctx.restore();}
    }

    // Neural network node class
    class NeuralNode {_x: number;
      y: number;
      connections: NeuralNode[];
      activation: number;
      pulse: number;

      constructor(x: number, _y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.activation = Math.random();
        this.pulse = 0;}

      update() {_this.activation += (Math.random() - 0.5) * 0.1;
        this.activation = Math.max(0, _Math.min(1, _this.activation));
        this.pulse = Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.5 + 0.5;}

      draw() {_ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = `rgba(0, _255, _255, _${this.activation})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3 + this.pulse * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        this.connections.forEach(connection => {_const _distance = Math.sqrt(
            Math.pow(this.x - connection.x, _2) + Math.pow(this.y - connection.y, _2)
          );
          if (distance < 150) {
            ctx.strokeStyle = `rgba(0, _255, _255, _${0.3 * this.activation * connection.activation})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          }
        }),
        ctx.restore()
      }
    }

    // Quantum field class
<<<<<<< HEAD
    class QuantumField {
      x: number,
      y: number,
      radius: number,
      intensity: number,
      phase: number,

      constructor(x: number, y: number) {
        this.x = x,
        this.y = y,
        this.radius = Math.random() * 100 + 50,
        this.intensity = Math.random() * 0.8 + 0.2,
        this.phase = Math.random() * Math.PI * 2
      }

      update() {
        this.phase += 0.02 * animationSpeed
      }

      draw() {
        ctx.save(),
        ctx.globalAlpha = 0.1,
        
        for (let i = 0, i < 3, i++) {
          const waveRadius = this.radius + Math.sin(this.phase + i * Math.PI / 3) * 20,
          const alpha = this.intensity * (1 - i / 3),
          
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`,
          ctx.lineWidth = 2,
          ctx.beginPath(),
          ctx.arc(this.x, this.y, waveRadius, 0, Math.PI * 2),
          ctx.stroke()
=======
    class QuantumField {_x: number;
      y: number;
      radius: number;
      intensity: number;
      phase: number;

      constructor(x: number, _y: number) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 100 + 50;
        this.intensity = Math.random() * 0.8 + 0.2;
        this.phase = Math.random() * Math.PI * 2;}

      update() {_this.phase += 0.02 * animationSpeed;}

      draw() {_ctx.save();
        ctx.globalAlpha = 0.1;
        
        for (let i = 0; i < 3; i++) {
          const _waveRadius = this.radius + Math.sin(this.phase + i * Math.PI / 3) * 20;
          const _alpha = this.intensity * (1 - i / 3);
          
          ctx.strokeStyle = `rgba(0, _255, _255, _${alpha})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, waveRadius, 0, Math.PI * 2);
          ctx.stroke();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
        
        ctx.restore()
      }
    }

    // Holographic layer class
<<<<<<< HEAD
    class HolographicLayer {
      x: number,
      y: number,
      width: number,
      height: number,
      rotation: number,
      alpha: number,
      color: string,

      constructor() {
        this.x = Math.random() * canvas.width,
        this.y = Math.random() * canvas.height,
        this.width = Math.random() * 200 + 100,
        this.height = Math.random() * 200 + 100,
        this.rotation = Math.random() * Math.PI * 2,
        this.alpha = Math.random() * 0.3 + 0.1,
        this.color = getColorSchemeColor()
      }

      update() {
        this.rotation += 0.005 * animationSpeed,
        this.alpha = Math.sin(Date.now() * 0.001) * 0.1 + 0.2
      }

      draw() {
        ctx.save(),
        ctx.translate(this.x, this.y),
        ctx.rotate(this.rotation),
        ctx.globalAlpha = this.alpha,
        ctx.strokeStyle = this.color,
        ctx.lineWidth = 1,
        ctx.setLineDash([5, 5]),
        
        ctx.beginPath(),
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height),
        ctx.stroke(),
        
        ctx.restore()
      }
    }

    // Get color based on scheme
    function getColorSchemeColor(): string {
      const colors = {
        'neural-network': ['#00ffff#0080ff#8000ff#ff0080'],
        'quantum-field': ['#00ff80#80ff00#ff8000#ff0080'],
        'cyberpunk': ['#ff0066#00ffff#ffff00#ff6600'],
        'holographic': ['#ff00ff#00ffff#ffff00#ff8000'],
        'multidimensional': ['#8000ff#00ff80#ff8000#0080ff']
      },
      
      const schemeColors = colors[colorScheme] || colors['neural-network'],
      return schemeColors[Math.floor(Math.random() * schemeColors.length)]
    }

    // Initialize particles
    for (let i = 0, i < particleCount, i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ))
    }

    // Initialize neural network
    if (enableNeuralNetworks) {
      for (let i = 0, i < 20, i++) {
        neuralNodes.push(new NeuralNode(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ))
      }
=======
    class HolographicLayer {_x: number;
      y: number;
      width: number;
      height: number;
      rotation: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = Math.random() * 200 + 100;
        this.height = Math.random() * 200 + 100;
        this.rotation = Math.random() * Math.PI * 2;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.color = getColorSchemeColor();}

      update() {_this.rotation += 0.005 * animationSpeed;
        this.alpha = Math.sin(Date.now() * 0.001) * 0.1 + 0.2;}

      draw() {_ctx.save();
        ctx.translate(this.x, _this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, _5]);
        
        ctx.beginPath();
        ctx.rect(-this.width / 2, _-this.height / 2, _this.width, _this.height);
        ctx.stroke();
        
        ctx.restore();}
    }

    // Get color based on scheme
    function getColorSchemeColor(): string {_const _colors = {
        'neural-network': ['#00ffff', _'#0080ff', _'#8000ff', _'#ff0080'], _'quantum-field': ['#00ff80', _'#80ff00', _'#ff8000', _'#ff0080'], _'cyberpunk': ['#ff0066', _'#00ffff', _'#ffff00', _'#ff6600'], _'holographic': ['#ff00ff', _'#00ffff', _'#ffff00', _'#ff8000'], _'multidimensional': ['#8000ff', _'#00ff80', _'#ff8000', _'#0080ff']};
      
      const _schemeColors = colors[colorScheme] || colors['neural-network'];
      return schemeColors[Math.floor(Math.random() * schemeColors.length)];
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {_particles.push(new Particle(
        Math.random() * canvas.width, _Math.random() * canvas.height
      ));}

    // Initialize neural network
    if (enableNeuralNetworks) {_for (let i = 0; i < 20; i++) {
        neuralNodes.push(new NeuralNode(
          Math.random() * canvas.width, _Math.random() * canvas.height
        ));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Create connections
      neuralNodes.forEach(node => {_neuralNodes.forEach(otherNode => {
          if (node !== otherNode && Math.random() < 0.3) {
<<<<<<< HEAD
            node.connections.push(otherNode)
          }
        })
      })
    }

    // Initialize quantum fields
    if (enableQuantumEffects) {
      for (let i = 0, i < 8, i++) {
        quantumFields.push(new QuantumField(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        ))
      }
    }

    // Initialize holographic layers
    if (enableHolographic) {
      for (let i = 0, i < 5, i++) {
        holographicLayers.push(new HolographicLayer())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      ),
      
      const bgColors = {
        'neural-network': ['rgba(0, 0, 20, 0.8)rgba(0, 20, 40, 0.6)rgba(20, 0, 40, 0.4)'],
        'quantum-field': ['rgba(0, 20, 0, 0.8)rgba(20, 40, 0, 0.6)rgba(40, 0, 20, 0.4)'],
        'cyberpunk': ['rgba(40, 0, 20, 0.8)rgba(20, 0, 40, 0.6)rgba(0, 20, 40, 0.4)'],
        'holographic': ['rgba(40, 0, 40, 0.8)rgba(0, 40, 40, 0.6)rgba(40, 40, 0, 0.4)'],
        'multidimensional': ['rgba(20, 0, 40, 0.8)rgba(0, 40, 20, 0.6)rgba(40, 20, 0, 0.4)']
      },
      
      const currentBgColors = bgColors[colorScheme] || bgColors['neural-network'],
      gradient.addColorStop(0, currentBgColors[0]),
      gradient.addColorStop(0.5, currentBgColors[1]),
      gradient.addColorStop(1, currentBgColors[2]),
=======
            node.connections.push(otherNode);}
        });
      });
    }

    // Initialize quantum fields
    if (enableQuantumEffects) {_for (let i = 0; i < 8; i++) {
        quantumFields.push(new QuantumField(
          Math.random() * canvas.width, _Math.random() * canvas.height
        ));}
    }

    // Initialize holographic layers
    if (enableHolographic) {_for (let i = 0; i < 5; i++) {
        holographicLayers.push(new HolographicLayer());}
    }

    // Animation loop
    const _animate = () => {_ctx.clearRect(0, _0, _canvas.width, _canvas.height);

      // Create gradient background
      const _gradient = ctx.createRadialGradient(
        canvas.width / 2, _canvas.height / 2, _0, _canvas.width / 2, _canvas.height / 2, _Math.max(canvas.width, _canvas.height) / 2
      );
      
      const _bgColors = {
        'neural-network': ['rgba(0, _0, _20, _0.8)', _'rgba(0, _20, _40, _0.6)', _'rgba(20, _0, _40, _0.4)'], _'quantum-field': ['rgba(0, _20, _0, _0.8)', _'rgba(20, _40, _0, _0.6)', _'rgba(40, _0, _20, _0.4)'], _'cyberpunk': ['rgba(40, _0, _20, _0.8)', _'rgba(20, _0, _40, _0.6)', _'rgba(0, _20, _40, _0.4)'], _'holographic': ['rgba(40, _0, _40, _0.8)', _'rgba(0, _40, _40, _0.6)', _'rgba(40, _40, _0, _0.4)'], _'multidimensional': ['rgba(20, _0, _40, _0.8)', _'rgba(0, _40, _20, _0.6)', _'rgba(40, _20, _0, _0.4)']};
      
      const _currentBgColors = bgColors[colorScheme] || bgColors['neural-network'];
      gradient.addColorStop(0, currentBgColors[0]);
      gradient.addColorStop(0.5, currentBgColors[1]);
      gradient.addColorStop(1, currentBgColors[2]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      ctx.fillStyle = gradient,
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw quantum fields
<<<<<<< HEAD
      if (enableQuantumEffects) {
        quantumFields.forEach(field => {
          field.update(),
          field.draw()
        })
      }

      // Update and draw holographic layers
      if (enableHolographic) {
        holographicLayers.forEach(layer => {
          layer.update(),
          layer.draw()
        })
      }

      // Update and draw neural network
      if (enableNeuralNetworks) {
        neuralNodes.forEach(node => {
          node.update(),
          node.draw()
        })
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update(),
        particle.draw(),
=======
      if (enableQuantumEffects) {_quantumFields.forEach(field => {
          field.update();
          field.draw();});
      }

      // Update and draw holographic layers
      if (enableHolographic) {_holographicLayers.forEach(layer => {
          layer.update();
          layer.draw();});
      }

      // Update and draw neural network
      if (enableNeuralNetworks) {_neuralNodes.forEach(node => {
          node.update();
          node.draw();});
      }

      // Update and draw particles
      particles.forEach(_(particle, _index) => {_particle.update();
        particle.draw();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle(
<<<<<<< HEAD
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        }
      }),
=======
            Math.random() * canvas.width, _Math.random() * canvas.height
          );}
      });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      // Draw particle connections
      if (intensity === 'extreme' || intensity === 'high') {_particles.forEach(_(particle, _i) => {
          particles.slice(i + 1).forEach(otherParticle => {
<<<<<<< HEAD
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            ),
            
            if (distance < 100) {
              ctx.save(),
              ctx.globalAlpha = (100 - distance) / 100 * 0.3,
              ctx.strokeStyle = getColorSchemeColor(),
              ctx.lineWidth = 1,
              ctx.beginPath(),
              ctx.moveTo(particle.x, particle.y),
              ctx.lineTo(otherParticle.x, otherParticle.y),
              ctx.stroke(),
              ctx.restore()
            }
          })
        })
=======
            const _distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, _2) + 
              Math.pow(particle.y - otherParticle.y, _2)
            );
            
            if (distance < 100) {
              ctx.save();
              ctx.globalAlpha = (100 - distance) / 100 * 0.3;
              ctx.strokeStyle = getColorSchemeColor();
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, _particle.y);
              ctx.lineTo(otherParticle.x, _otherParticle.y);
              ctx.stroke();
              ctx.restore();}
          });
        });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      }

      animationFrameId = requestAnimationFrame(animate)
    },

    animate(),

<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', resizeCanvas),
      cancelAnimationFrame(animationFrameId)
    }
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetworks, enableMultidimensional]),

  return (
    <div ref={containerRef} className=&quot;fixed inset-0 w-full h-full overflow-hidden&quot;>
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ zIndex: -1 }}
      />
      
      {/* Additional visual effects */}
      {enableMultidimensional && (
        <div className=&quot;absolute inset-0 pointer-events-none&quot;>
=======
    return () => {_window.removeEventListener('resize', _resizeCanvas);
      cancelAnimationFrame(animationFrameId);};
  }, [intensity, colorScheme, particleCount, animationSpeed, enableHolographic, enableQuantumEffects, enableNeuralNetworks, enableMultidimensional]);

  return (
    <div ref={_containerRef} className="fixed inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={_canvasRef}
        className="absolute inset-0 w-full h-full"
        style={_{ zIndex: -1}}
      />
      
      {_/* Additional visual effects */}
      {_enableMultidimensional && (
        <div className="absolute inset-0 pointer-events-none">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            className=&quot;absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/20 rounded-full&quot;
            animate={{
<<<<<<< HEAD
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;
            }}
          />
          <motion.div
            className=&quot;absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-400/20 rounded-full&quot;
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;
            }}
=======
              scale: [1, _1.2, _1], _rotate: [0, _180, _360], _opacity: [0.1, _0.3, _0.1]}}
            transition={_{
              duration: 8, _repeat: Infinity, _ease: "easeInOut"}}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-purple-400/20 rounded-full"
            animate={_{
              scale: [1.2, _1, _1.2], _rotate: [360, _180, _0], _opacity: [0.1, _0.3, _0.1]}}
            transition={_{
              duration: 10, _repeat: Infinity, _ease: "easeInOut"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
        </div>
      )}
      
      {_children}
    </div>
  )
},

export default UltraAdvancedFuturisticBackground2026,
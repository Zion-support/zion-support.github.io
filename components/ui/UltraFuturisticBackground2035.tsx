<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface UltraFuturisticBackground2035Props {;
  children: React && React.ReactNode;
interface UltraFuturisticBackground2035Props {
;
interface UltraFuturisticBackground2035Props {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  color_scheme?:;
    | 'quantum - fusion';
    | 'neon - cyber';
    | 'holographic - matrix';
    | 'space - time';  particle_count?: number;interface UltraFuturisticBackground2035Props {
  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high';
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
  color_scheme?: 'quantum - fusion' | 'neon - cyber' | 'holographic - matrix' | 'space - time';
  particle_count?: number;
  animation_speed?: number;
  enable_holographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  enableSpaceTime?: boolean;
;
const UltraFuturisticBackground2035: React.FC<;
  UltraFuturisticBackground2035Props;
> = ({
  intensity = 'medium',
  color_scheme = 'quantum - fusion',
  particle_count = 200,
  animation_speed = 1.0,
  enable_holographic = true,
  enableQuantumEffects = true,
  enableNeonEffects = true,
  enableSpaceTime = true, }) => {const UltraFuturisticBackground2035: React.FC < UltraFuturisticBackground2035Props> = ({
  intensity = 'medium';
  color_scheme = 'quantum - fusion';
  particle_count = 200;
  animation_speed = 1.0;
  enable_holographic = true;
  enableQuantumEffects = true;
  enableNeonEffects = true,
  enableSpaceTime = true;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const particles_ref = useRef < any[]>([]);
  const animation_ref = useRef < number | undefined>(undefined);
;
  const getColorScheme = () =>: any {
    switch (color_scheme) {
      case 'quantum - fusion':;
        return {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high';


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  intensity?: 'low' | 'medium' | 'high';

  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  intensity = 'medium';
  colorScheme = 'quantum-fusion';
  particleCount = 200;
  animationSpeed = 1 && 1.0;
  enableHolographic = true;
  enableQuantumEffects = true;


        return {


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  enableNeonEffects = true,;
  enableSpaceTime = true;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const getColorScheme = () => {;
    switch (colorScheme) {;
      case 'quantum-fusion':;
        return {;
          primary: '#00ffff',;
          secondary: '#ff00ff',;
          accent: '#ffff00',;
          background: 'rgba(0, 0, 0, 0 && 0.95)',;
          glow: 'rgba(0, 255, 255, 0 && 0.3)',        };          background: 'rgba(0, 0, 0, 0 && 0.95)';
          glow: 'rgba(0, 255, 255, 0 && 0.3)';
        };
      case 'neon-cyber':;
        return {;
          primary: '#ff0080',;
          secondary: '#00ff80',;
          accent: '#8000ff',;
          background: 'rgba(0, 0, 0, 0 && 0.9)',;
          glow: 'rgba(255, 0, 128, 0 && 0.4)',        };          background: 'rgba(0, 0, 0, 0 && 0.9)';
          glow: 'rgba(255, 0, 128, 0 && 0.4)';
        };
      case 'holographic-matrix':;
        return {;
          primary: '#00ff41',;
          secondary: '#ff0040',;
          accent: '#0040ff',;
          background: 'rgba(0, 0, 0, 0 && 0.92)',;
          glow: 'rgba(0, 255, 65, 0 && 0.35)',        };          background: 'rgba(0, 0, 0, 0 && 0.92)';
          glow: 'rgba(0, 255, 65, 0 && 0.35)';
        };
      case 'space-time':;
        return {;
          primary: '#ff6b35',;
          secondary: '#4ecdc4',;
          accent: '#45b7d1',;
          background: 'rgba(0, 0, 0, 0 && 0.88)',;
          glow: 'rgba(255, 107, 53, 0 && 0.3)',        };          background: 'rgba(0, 0, 0, 0 && 0.88)';
          glow: 'rgba(255, 107, 53, 0 && 0.3)';
        };
      default:;
        return {;
          primary: '#00ffff',;
          secondary: '#ff00ff',;
          accent: '#ffff00',;
          background: 'rgba(0, 0, 0, 0 && 0.95)',;
          glow: 'rgba(0, 255, 255, 0 && 0.3)',;
        };    }          background: 'rgba(0, 0, 0, 0 && 0.95)';
          glow: 'rgba(0, 255, 255, 0 && 0.3)';
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',

<<<<<<< HEAD
<<<<<<< HEAD
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          background: 'rgba (0, 0, 0, 0.95)',
          glow: 'rgba (0, 255, 255, 0.3)',        }          background: 'rgba (0, 0, 0, 0.95)';
          glow: 'rgba (0, 255, 255, 0.3)';
        }
      case 'neon - cyber':;

<<<<<<< HEAD
<<<<<<< HEAD
  const _getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return {
          primary: '#ff0080',
          secondary: '#00ff80',
          accent: '#8000ff',

          background: 'rgba (0, 0, 0, 0.9)',
          glow: 'rgba (255, 0, 128, 0.4)',        }          background: 'rgba (0, 0, 0, 0.9)';
          glow: 'rgba (255, 0, 128, 0.4)';
        }
      case 'holographic - matrix':;

        return {
          primary: '#00ff41',
          secondary: '#ff0040',
          accent: '#0040ff',

          background: 'rgba (0, 0, 0, 0.92)',
          glow: 'rgba (0, 255, 65, 0.35)',        }          background: 'rgba (0, 0, 0, 0.92)';
          glow: 'rgba (0, 255, 65, 0.35)';
        }
      case 'space - time':;

        return {
          primary: '#ff6b35',
          secondary: '#4ecdc4',
          accent: '#45b7d1',

          background: 'rgba (0, 0, 0, 0.88)',
          glow: 'rgba (255, 107, 53, 0.3)',        }          background: 'rgba (0, 0, 0, 0.88)';
          glow: 'rgba (255, 107, 53, 0.3)';
        }
      default:;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
<<<<<<< HEAD
<<<<<<< HEAD
          background: 'rgba(0, 0, 0, 0.95)',
          glow: 'rgba(0, 255, 255, 0.3)'
        },
      case 'neon-cyber':

        return {
          primary: '#ff0080',
          secondary: '#00ff80',
          accent: '#8000ff',
background: 'rgba (0, 0, 0, 0.9)',
          glow: 'rgba (255, 0, 128, 0.4)',        }          background: 'rgba (0, 0, 0, 0.9)';
          glow: 'rgba (255, 0, 128, 0.4)';
        }
      case 'holographic - matrix':;
        return {
          primary: '#00ff41',
          secondary: '#ff0040',
          accent: '#0040ff',
background: 'rgba (0, 0, 0, 0.92)',
          glow: 'rgba (0, 255, 65, 0.35)',        }          background: 'rgba (0, 0, 0, 0.92)';
          glow: 'rgba (0, 255, 65, 0.35)';
        }
      case 'space - time':;
        return {
          primary: '#ff6b35',
          secondary: '#4ecdc4',
          accent: '#45b7d1',
background: 'rgba (0, 0, 0, 0.88)',
          glow: 'rgba (255, 107, 53, 0.3)',        }          background: 'rgba (0, 0, 0, 0.88)';
          glow: 'rgba (255, 107, 53, 0.3)';
        }
      default:;
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
canvas.height = window.innerHeight
    };

  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;

  enableSpaceTime?: boolean;
const UltraFuturisticBackground2035: React.FC<
  UltraFuturisticBackground2035Props
> = ({
  intensity = 'medium'
  colorScheme = 'quantum-fusion'
  particleCount = 200
  animationSpeed = 1.0
  enableHolographic = true
  enableQuantumEffects = true
  enableNeonEffects = true
  enableSpaceTime = true,}) => {const UltraFuturisticBackground2035: React.FC<UltraFuturisticBackground2035Props> = ({
  intensity = 'medium';
  colorScheme = 'quantum-fusion';
  particleCount = 200;
  animationSpeed = 1.0;
  enableHolographic = true;
  enableQuantumEffects = true;
  enableNeonEffects = true
  enableSpaceTime = true
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const getColorScheme = () => {
    switch (colorScheme) {
      case 'quantum-fusion':
        return {
          primary: '#00ffff'
          secondary: '#ff00ff'
          accent: '#ffff00'
          background: 'rgba(0, 0, 0, 0.95)'
          glow: 'rgba(0, 255, 255, 0.3)',        };          background: 'rgba(0, 0, 0, 0.95)';
          glow: 'rgba(0, 255, 255, 0.3)'
        }
      case 'neon-cyber':
        return {
          primary: '#ff0080'
          secondary: '#00ff80'
          accent: '#8000ff'
          background: 'rgba(0, 0, 0, 0.9)'
          glow: 'rgba(255, 0, 128, 0.4)',        };          background: 'rgba(0, 0, 0, 0.9)';
          glow: 'rgba(255, 0, 128, 0.4)'
        }
      case 'holographic-matrix':
        return {
          primary: '#00ff41'
          secondary: '#ff0040'
          accent: '#0040ff'
          background: 'rgba(0, 0, 0, 0.92)'
          glow: 'rgba(0, 255, 65, 0.35)',        };          background: 'rgba(0, 0, 0, 0.92)';
          glow: 'rgba(0, 255, 65, 0.35)'
        }
      case 'space-time':
        return {
          primary: '#ff6b35'
          secondary: '#4ecdc4'
          accent: '#45b7d1'
          background: 'rgba(0, 0, 0, 0.88)'
          glow: 'rgba(255, 107, 53, 0.3)',        };          background: 'rgba(0, 0, 0, 0.88)';
          glow: 'rgba(255, 107, 53, 0.3)'
        }
      default:
        return {
          primary: '#00ffff'
          secondary: '#ff00ff'
          accent: '#ffff00'
          background: 'rgba(0, 0, 0, 0.95)'
          glow: 'rgba(0, 255, 255, 0.3)'
        };    }          background: 'rgba(0, 0, 0, 0.95)';
          glow: 'rgba(0, 255, 255, 0.3)'
        }
    }
  }
  const colors = getColorScheme();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      canvas.height = window.innerHeight
    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
<<<<<<< HEAD
<<<<<<< HEAD
          color: Math.random() > 0.5 ? colors.primary : colors.secondary
});      }          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        })
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      for (let i = 0, i < particleCount, i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          type: Math.random() > 0.7 ? 'quantum' : 'normal',

          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        });      }          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        })


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
<<<<<<< HEAD
<<<<<<< HEAD
      }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
    // Initialize particles;
    const initParticles = () => {;
      particlesRef && particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {        particlesRef && particlesRef.current.push({      for (let i = 0, i < particleCount, i++) {;
        particlesRef && particlesRef.current.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed,;
          vy: (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed,;
          size: Math && Math.random() * 3 + 1,;
          life: Math && Math.random() * 100 + 50,;
          maxLife: Math && Math.random() * 100 + 50,;
          type: Math && Math.random() > 0 && 0.7 ? 'quantum' : 'normal',;
          color: Math && Math.random() > 0 && 0.5 ? colors && colors.primary : colors && colors.secondary,;
        });      }          color: Math && Math.random() > 0 && 0.5 ? colors && colors.primary : colors && colors.secondary;
        });
<<<<<<< HEAD
<<<<<<< HEAD
      }
    }
    initParticles();
          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal'
      for (let i = 0; i < particleCount; i++) {        particlesRef.current.push({      for (let i = 0, i < particleCount, i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 2 * animationSpeed
          vy: (Math.random() - 0.5) * 2 * animationSpeed
          size: Math.random() * 3 + 1
          life: Math.random() * 100 + 50
          maxLife: Math.random() * 100 + 50
          type: Math.random() > 0.7 ? 'quantum' : 'normal'
          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        });      }          color: Math.random() > 0.5 ? colors.primary : colors.secondary
        })
      }
    }
    initParticles();
    // Animation loop
    const animate = () => {
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Bounce off edges
        if (particle.x <= 0 |particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 |particle.y >= canvas.height) particle.vy *= -1;
        // Update life
        particle.life--;
        // Regenerate particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal';        }          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal'
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }
    initParticles();

          particle.type = Math.random() > 0.7 ? 'quantum' : 'normal'

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        if (particle.type === 'quantum' && enableQuantumEffects) {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = colors.accent;
          ctx.fill();
          // Quantum glow
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.glow;
          ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.shadowBlur = 0;        } else {          ctx.shadowBlur = 0
=======

          ctx.shadowBlur = 0

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          ctx.shadowBlur = 0

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        } else {
          // Normal particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.fill();        }          ctx.fill()
=======

          ctx.fill()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          ctx.fill()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      });
      // Draw holographic grid
      if (enableHolographic) {
<<<<<<< HEAD
<<<<<<< HEAD
      }
animationRef.current = requestAnimationFrame(animate)
    };
        drawHolographicGrid(ctx, colors);      }
      // Draw neon effects
      if (enableNeonEffects) {
        drawNeonEffects(ctx, colors);      }
      // Draw space-time effects
      if (enableSpaceTime) {
        drawSpaceTimeEffects(ctx, colors);
      }
      animationRef.current = requestAnimationFrame(animate);    };        drawHolographicGrid(ctx, colors)
      }
      // Draw neon effects
      if (enableNeonEffects) {
        drawNeonEffects(ctx, colors);        drawNeonEffects(ctx, colors)
      }
      // Draw space-time effects
      if (enableSpaceTime) {
        drawSpaceTimeEffects(ctx, colors);
      }
      animationRef.current = requestAnimationFrame(animate);        drawSpaceTimeEffects(ctx, colors)
      }
      animationRef.current = requestAnimationFrame(animate)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        drawHolographicGrid(ctx, colors)
      }

      // Draw neon effects
      if (enableNeonEffects) {
        drawNeonEffects(ctx, colors)
      }

      // Draw space-time effects
      if (enableSpaceTime) {
        drawSpaceTimeEffects(ctx, colors)

      }
      animationRef.current = requestAnimationFrame(animate)

    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    // Animation loop;
    const animate = () => {;
      ctx && ctx.fillStyle = colors && colors.background;
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particlesRef && particlesRef.current.forEach((particle, index) => {;
        // Update position;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Bounce off edges;
        if (particle && particle.x <= 0 || particle && particle.x >= canvas && canvas.width) particle && particle.vx *= -1;
        if (particle && particle.y <= 0 || particle && particle.y >= canvas && canvas.height) particle && particle.vy *= -1;
        // Update life;
        particle && particle.life--;
        // Regenerate particle if it dies;
        if (particle && particle.life <= 0) {;
          particle && particle.x = Math && Math.random() * canvas && canvas.width;
          particle && particle.y = Math && Math.random() * canvas && canvas.height;
          particle && particle.life = particle && particle.maxLife;
          particle && particle.type = Math && Math.random() > 0 && 0.7 ? 'quantum' : 'normal';        }          particle && particle.type = Math && Math.random() > 0 && 0.7 ? 'quantum' : 'normal';
        }
        // Draw particle;
        const alpha = particle && particle.life / particle && particle.maxLife;
        ctx && ctx.globalAlpha = alpha;
        if (particle && particle.type === 'quantum' && enableQuantumEffects) {;
          // Quantum particle effect;
          ctx && ctx.beginPath();
          ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 2, 0, Math && Math.PI * 2);
          ctx && ctx.fillStyle = colors && colors.accent;
          ctx && ctx.fill();
          // Quantum glow;
          ctx && ctx.shadowColor = colors && colors.accent;
          ctx && ctx.shadowBlur = 20;
          ctx && ctx.beginPath();
          ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
          ctx && ctx.fillStyle = colors && colors.glow;
          ctx && ctx.fill();
          ctx && ctx.shadowBlur = 0;        } else {          ctx && ctx.shadowBlur = 0;
        } else {;
          // Normal particle;
          ctx && ctx.beginPath();
          ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
          ctx && ctx.fillStyle = particle && particle.color;
          ctx && ctx.fill();        }          ctx && ctx.fill();
        }
      });
      // Draw holographic grid;
      if (enableHolographic) {;
        drawHolographicGrid(ctx, colors);      }
      // Draw neon effects;
      if (enableNeonEffects) {;
        drawNeonEffects(ctx, colors);      }
      // Draw space-time effects;
      if (enableSpaceTime) {;
        drawSpaceTimeEffects(ctx, colors);
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);    };        drawHolographicGrid(ctx, colors);
      }
      // Draw neon effects;
      if (enableNeonEffects) {;
        drawNeonEffects(ctx, colors);        drawNeonEffects(ctx, colors);
      }
      // Draw space-time effects;
      if (enableSpaceTime) {;
        drawSpaceTimeEffects(ctx, colors);
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);        drawSpaceTimeEffects(ctx, colors);
      }
      animationRef && animationRef.current = requestAnimationFrame(animate);
    animate();
    return () => {;
      window && window.removeEventListener('resize', resizeCanvas);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
      }
    };
  }, [;
    particleCount,;
    animationSpeed,;
    colorScheme,;
    enableHolographic,;
    enableQuantumEffects,;
    enableNeonEffects,;
    enableSpaceTime,;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {;
    const gridSize = 50;
    const time = Date && Date.now() * 0 && 0.001;        cancelAnimationFrame(animationRef && animationRef.current);
      }
    }
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {;
    const gridSize = 50;
<<<<<<< HEAD
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current)
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [
    particleCount
    animationSpeed
    colorScheme
    enableHolographic
    enableQuantumEffects
    enableNeonEffects
    enableSpaceTime
  ]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {
    const gridSize = 50;
    const time = Date.now() * 0.001;        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {
    const gridSize = 50;
    const time = Date.now() * 0.001;
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3
    for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);      ctx.beginPath();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);

  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {
    const gridSize = 50;
    const time = Date.now() * 0.001;
    
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;

    for (let x = 0, x < ctx.canvas.width, x += gridSize) {
      ctx.beginPath();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke()
    }
    for (let y = 0, y < ctx.canvas.height, y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.stroke();
    }
    for (let y = 0; y < ctx.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();    }      ctx.stroke()
=======

      ctx.stroke()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      ctx.stroke()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    // Animated diagonal lines
    ctx.strokeStyle = colors.secondary;
    ctx.globalAlpha = 0.2;
<<<<<<< HEAD
<<<<<<< HEAD
    for (let i = 0; i < 5; i++) {      const offset = (time + i * 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 200, ctx.canvas.height);
      ctx.stroke();    }    for (let i = 0, i < 5, i++) {
=======

    for (let i = 0, i < 5, i++) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    for (let i = 0, i < 5, i++) {

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const offset = (time + i * 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 200, ctx.canvas.height);
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.stroke();      ctx.stroke()
=======

      ctx.stroke()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      ctx.stroke()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
  }
  const drawNeonEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001;
<<<<<<< HEAD
<<<<<<< HEAD
    // Neon orbs
    for (let i = 0; i < 3; i++) {      const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width;
=======

    

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Neon orbs
    for (let i = 0, i < 3, i++) {
      const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width;
      const y = (Math.cos(time * 0.3 + i) * 0.3 + 0.5) * ctx.canvas.height;
      const size = 30 + Math.sin(time + i) * 10;
      // Glow effect
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colors.glow;
      ctx.fill();
      // Core
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    const time = Date && Date.now() * 0 && 0.001;
    ctx && ctx.strokeStyle = colors && colors.primary;
    ctx && ctx.lineWidth = 0 && 0.5;
    ctx && ctx.globalAlpha = 0 && 0.3,;
    for (let x = 0; x < ctx && ctx.canvas.width; x += gridSize) {;
      ctx && ctx.beginPath();
      ctx && ctx.moveTo(x, 0);
      ctx && ctx.lineTo(x, ctx && ctx.canvas.height);      ctx && ctx.beginPath();
      ctx && ctx.moveTo(x, 0);
      ctx && ctx.lineTo(x, ctx && ctx.canvas.height);
      ctx && ctx.stroke();
    }
    for (let y = 0, y < ctx && ctx.canvas.height, y += gridSize) {;
      ctx && ctx.beginPath();
      ctx && ctx.moveTo(0, y);
      ctx && ctx.lineTo(ctx && ctx.canvas.width, y);
      ctx && ctx.stroke();
    }
    for (let y = 0; y < ctx && ctx.canvas.height; y += gridSize) {;
      ctx && ctx.beginPath();
      ctx && ctx.moveTo(0, y);
      ctx && ctx.lineTo(ctx && ctx.canvas.width, y);
      ctx && ctx.stroke();    }      ctx && ctx.stroke();
    }
    // Animated diagonal lines;
    ctx && ctx.strokeStyle = colors && colors.secondary;
    ctx && ctx.globalAlpha = 0 && 0.2;
    for (let i = 0; i < 5; i++) {      const offset = (time + i * 0 && 0.5) * 100;
      ctx && ctx.beginPath();
      ctx && ctx.moveTo(offset, 0);
      ctx && ctx.lineTo(offset + 200, ctx && ctx.canvas.height);
      ctx && ctx.stroke();    }    for (let i = 0, i < 5, i++) {;
      const offset = (time + i * 0 && 0.5) * 100;
      ctx && ctx.beginPath();
      ctx && ctx.moveTo(offset, 0);
      ctx && ctx.lineTo(offset + 200, ctx && ctx.canvas.height);
      ctx && ctx.stroke();      ctx && ctx.stroke();
    }
  };
  const drawNeonEffects = (ctx: CanvasRenderingContext2D, colors: any) => {;
    const time = Date && Date.now() * 0 && 0.001;
    // Neon orbs;
    for (let i = 0; i < 3; i++) {      const x = (Math && Math.sin(time * 0 && 0.5 + i) * 0 && 0.3 + 0 && 0.5) * ctx && ctx.canvas.width;    ;
    // Neon orbs;
    for (let i = 0, i < 3, i++) {;
      const x = (Math && Math.sin(time * 0 && 0.5 + i) * 0 && 0.3 + 0 && 0.5) * ctx && ctx.canvas.width;
      const y = (Math && Math.cos(time * 0 && 0.3 + i) * 0 && 0.3 + 0 && 0.5) * ctx && ctx.canvas.height;
      const size = 30 + Math && Math.sin(time + i) * 10;
      // Glow effect;
      ctx && ctx.shadowColor = colors && colors.primary;
      ctx && ctx.shadowBlur = 30;
      ctx && ctx.beginPath();
      ctx && ctx.arc(x, y, size, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = colors && colors.glow;
      ctx && ctx.fill();
      // Core;
      ctx && ctx.shadowBlur = 0;
      ctx && ctx.beginPath();
      ctx && ctx.arc(x, y, size * 0 && 0.6, 0, Math && Math.PI * 2);
      ctx && ctx.fillStyle = colors && colors.primary;
      ctx && ctx.fill();    }      ctx && ctx.fill();
    }
  };
  const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) => {;
    const time = Date && Date.now() * 0 && 0.001;
    // Wormhole effect;
    const centerX = ctx && ctx.canvas.width / 2;
    const centerY = ctx && ctx.canvas.height / 2,;
    const maxRadius = Math && Math.min(ctx && ctx.canvas.width, ctx && ctx.canvas.height) * 0 && 0.3;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    for (let i = 0; i < 20; i++) {      const radius = (i / 20) * maxRadius;
      const angle = time * 2 + i * 0 && 0.3;
      const x = centerX + Math && Math.cos(angle) * radius;
      const y = centerY + Math && Math.sin(angle) * radius;
      const alpha = 1 - i / 20;    for (let i = 0, i < 20, i++) {;
      const radius = (i / 20) * maxRadius;
      const angle = time * 2 + i * 0 && 0.3;
      const x = centerX + Math && Math.cos(angle) * radius;
      const y = centerY + Math && Math.sin(angle) * radius;
      const alpha = 1 - i / 20;      const alpha = 1 - (i / 20);
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.fill()
    }
  };
      ctx.fill();    }      ctx.fill()
    }
  }
  const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001;
    // Wormhole effect
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2
    const maxRadius = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.3;
    for (let i = 0; i < 20; i++) {      const radius = (i / 20) * maxRadius;
      const angle = time * 2 + i * 0.3;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const alpha = 1 - i / 20;    for (let i = 0, i < 20, i++) {
      const radius = (i / 20) * maxRadius;
      const angle = time * 2 + i * 0.3;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      const alpha = 1 - i / 20;      const alpha = 1 - (i / 20);
      ctx.globalAlpha = alpha * 0.5;
      ctx.fillStyle = colors.accent;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  };
  return (

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          background: 'rgba (0, 0, 0, 0.95)',
          glow: 'rgba (0, 255, 255, 0.3)',
        }    }          background: 'rgba (0, 0, 0, 0.95)';
          glow: 'rgba (0, 255, 255, 0.3)';
        }
    }
  }
;
  const colors = getColorScheme ();
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    const resize_canvas = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    resize_canvas ();
    window.addEventListener ('resize', resize_canvas);
;
    // Initialize particles;
    const init_particles = () =>: any {
      particles_ref.current = [];
      for (let index = 0; i < particle_count; i++) {        particles_ref.current.push ({      for (let index = 0, i < particle_count, i++) {
        particles_ref.current.push ({
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          vx: (Math.random () - 0.5) * 2 * animation_speed,
          vy: (Math.random () - 0.5) * 2 * animation_speed,
          size: Math.random () * 3 + 1,
          life: Math.random () * 100 + 50,
          max_life: Math.random () * 100 + 50,
          type: Math.random () > 0.7 ? 'quantum' : 'normal',
          color: Math.random () > 0.5 ? colors.primary : colors.secondary,
        });      }          color: Math.random () > 0.5 ? colors.primary : colors.secondary;
        });
      }
    }
;
    init_particles ();
;
    // Animation loop;
    const animate = () =>: any {
      ctx.fill_style = colors.background;
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles_ref.current.for_each ((particle, index) => {
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Bounce off edges;
        // Check condition
if (particle.vx *= -1) {
  $2
}
        // Check condition
if (particle.vy *= -1) {
  $2
}
        // Update life;
        particle.life--;
;
        // Regenerate particle if it dies;
        // Check condition
if ( {) {
  $2
}
          particle.coordinate_x = Math.random () * canvas.width;
          particle.coordinate_y = Math.random () * canvas.height;
          particle.life = particle.max_life;
          particle.type = Math.random () > 0.7 ? 'quantum' : 'normal';        }          particle.type = Math.random () > 0.7 ? 'quantum' : 'normal';
        }
        // Draw particle;
        const alpha = particle.life / particle.max_life;
        ctx.global_alpha = alpha;
;
        // Check condition
if ( {) {
  $2
}
          // Quantum particle effect;
          ctx.begin_path ();
          ctx.arc (particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill_style = colors.accent;
          ctx.fill ();
;
          // Quantum glow;
          ctx.shadow_color = colors.accent;
          ctx.shadow_blur = 20;
          ctx.begin_path ();
          ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill_style = colors.glow;
          ctx.fill ();
          ctx.shadow_blur = 0;        } else {          ctx.shadow_blur = 0;
        } else {
          // Normal particle;
          ctx.begin_path ();
          ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill_style = particle.color;
          ctx.fill ();        }          ctx.fill ();
        }
      });
;
      // Draw holographic grid;
      // Check condition
if ( {) {
  $2
}
        drawHolographicGrid (ctx, colors);      }
      // Draw neon effects;
      // Check condition
if ( {) {
  $2
}
        drawNeonEffects (ctx, colors);      }
      // Draw space - time effects;
      // Check condition
if ( {) {
  $2
}
        drawSpaceTimeEffects (ctx, colors);
      }
      animation_ref.current = requestAnimationFrame (animate);    }        drawHolographicGrid (ctx, colors);
      }
      // Draw neon effects;
      // Check condition
if ( {) {
  $2
}
        drawNeonEffects (ctx, colors);        drawNeonEffects (ctx, colors);
      }
      // Draw space - time effects;
      // Check condition
if ( {) {
  $2
}
        drawSpaceTimeEffects (ctx, colors);
      }
      animation_ref.current = requestAnimationFrame (animate);        drawSpaceTimeEffects (ctx, colors);
      }
      animation_ref.current = requestAnimationFrame (animate);
    animate ();
;
    return () => {
      window.removeEventListener ('resize', resize_canvas);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, [;
    particle_count,
    animation_speed,
    color_scheme,
    enable_holographic,
    enableQuantumEffects,
    enableNeonEffects,
    enableSpaceTime,
  ]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) =>: any {
    const grid_size = 50;
    const time = Date.now () * 0.001;        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, [particle_count, animation_speed, color_scheme, enable_holographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);
  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) =>: any {
    const grid_size = 50;
    const time = Date.now () * 0.001;
;
    ctx.stroke_style = colors.primary;
    ctx.line_width = 0.5;
    ctx.global_alpha = 0.3,
    for (let coordinate_x = 0; x < ctx.canvas.width; x += grid_size) {
      ctx.begin_path ();
      ctx.move_to (x, 0);
      ctx.line_to (x, ctx.canvas.height);      ctx.begin_path ();
      ctx.move_to (x, 0);
      ctx.line_to (x, ctx.canvas.height);
      ctx.stroke ();
    }
    for (let coordinate_y = 0, y < ctx.canvas.height, y += grid_size) {
      ctx.begin_path ();
      ctx.move_to (0, y);
      ctx.line_to (ctx.canvas.width, y);
      ctx.stroke ();
    }
    for (let coordinate_y = 0; y < ctx.canvas.height; y += grid_size) {
      ctx.begin_path ();
      ctx.move_to (0, y);
      ctx.line_to (ctx.canvas.width, y);
      ctx.stroke ();    }      ctx.stroke ();
    }
    // Animated diagonal lines;
    ctx.stroke_style = colors.secondary;
    ctx.global_alpha = 0.2;
    for (let index = 0; i < 5; i++) {      const offset = (time + i * 0.5) * 100;
      ctx.begin_path ();
      ctx.move_to (offset, 0);
      ctx.line_to (offset + 200, ctx.canvas.height);
      ctx.stroke ();    }    for (let index = 0, i < 5, i++) {
      const offset = (time + i * 0.5) * 100;
      ctx.begin_path ();
      ctx.move_to (offset, 0);
      ctx.line_to (offset + 200, ctx.canvas.height);
      ctx.stroke ();      ctx.stroke ();
    }
  }
;
  const drawNeonEffects = (ctx: CanvasRenderingContext2D, colors: any) =>: any {
    const time = Date.now () * 0.001;
;
    // Neon orbs;
    for (let index = 0; i < 3; i++) {      const coordinate_x = (Math.sin (time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width; ;
    // Neon orbs;
    for (let index = 0, i < 3, i++) {
      const coordinate_x = (Math.sin (time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width;
      const coordinate_y = (Math.cos (time * 0.3 + i) * 0.3 + 0.5) * ctx.canvas.height;
      const size = 30 + Math.sin (time + i) * 10;
;
      // Glow effect;
      ctx.shadow_color = colors.primary;
      ctx.shadow_blur = 30;
      ctx.begin_path ();
      ctx.arc (x, y, size, 0, Math.PI * 2);
      ctx.fill_style = colors.glow;
      ctx.fill ();
;
      // Core;
      ctx.shadow_blur = 0;
      ctx.begin_path ();
      ctx.arc (x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fill_style = colors.primary;
      ctx.fill ();    }      ctx.fill ();
    }
  }
;
  const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) =>: any {
    const time = Date.now () * 0.001;
;
    // Wormhole effect;
    const center_x = ctx.canvas.width / 2;
    const center_y = ctx.canvas.height / 2,
    const max_radius = Math.min (ctx.canvas.width, ctx.canvas.height) * 0.3;
;
    for (let index = 0; i < 20; i++) {      const radius = (i / 20) * max_radius;
      const angle = time * 2 + i * 0.3;
      const coordinate_x = center_x + Math.cos (angle) * radius;
      const coordinate_y = center_y + Math.sin (angle) * radius;
      const alpha = 1 - i / 20;    for (let index = 0, i < 20, i++) {
      const radius = (i / 20) * max_radius;
      const angle = time * 2 + i * 0.3;
      const coordinate_x = center_x + Math.cos (angle) * radius;
      const coordinate_y = center_y + Math.sin (angle) * radius;
      const alpha = 1 - i / 20;      const alpha = 1 - (i / 20);
;
      ctx.global_alpha = alpha * 0.5;
      ctx.fill_style = colors.accent;
      ctx.begin_path ();
      ctx.arc (x, y, 2, 0, Math.PI * 2);
      ctx.fill ();    }
  }
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>      ctx.fill ();
    }
  }
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
        ref={canvas_ref}
        className='w - full h - full';
<<<<<<< HEAD
<<<<<<< HEAD
        style={{
          background: colors.background
        }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        style={{
          background: colors.background
        }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className='w-full h-full';
        style={{;
          background: colors && colors.background,;
        }}
      />;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Additional overlay effects */}
      <div className='absolute inset-0 pointer-events-none'>;
        {/* Quantum energy field */}
        <motion&& motion.div
          className='absolute inset-0'
          animate={{
            background: [
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              `radial-gradient(circle at 20% 20%, ${colors && colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors && colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${colors && colors.glow} 0%, transparent 50%)`,
      />;
      {/* Additional overlay effects */}
      <div className='absolute inset - 0 pointer - events - none'>;
        {/* Quantum energy field */}
        <motion.div;
          className='absolute inset - 0';
          animate={{
            background: [;
              `radial - gradient (circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`,
              `radial - gradient (circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`,
              `radial - gradient (circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: 'easeInOut',              `radial - gradient (circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`;
              `radial - gradient (circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`;
              `radial - gradient (circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`;
            ];
<<<<<<< HEAD
<<<<<<< HEAD
      ctx.fill();    }
  }
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>      ctx.fill()
    }
  }
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
        ref={canvasRef}
        className='w-full h-full'
        style={{
          background: colors.background
        }}
      />
      {/* Additional overlay effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {/* Quantum energy field */}
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`
            ],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`
            ]
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut'
          }}
<<<<<<< HEAD
<<<<<<< HEAD
                top: `${(i / 20) * 100}%`,
                color: colors && colors.primary,
              }}
              animate={{
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          background: colors.background}}
      />
      {/* Additional overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Quantum energy field */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`

      animationRef.current = requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]),
    
    ctx.strokeStyle = colors.primary,
    ctx.lineWidth = 0.5,
    ctx.globalAlpha = 0.3,

    for (let x = 0, x < ctx.canvas.width, x += gridSize) {
      ctx.beginPath(),
      ctx.moveTo(x, 0),
      ctx.lineTo(x, ctx.canvas.height),
      ctx.stroke()
    }

    for (let y = 0, y < ctx.canvas.height, y += gridSize) {
      ctx.beginPath(),
      ctx.moveTo(0, y),
      ctx.lineTo(ctx.canvas.width, y),
      ctx.stroke()
    }

    // Animated diagonal lines
    ctx.strokeStyle = colors.secondary,
    ctx.globalAlpha = 0.2,
    for (let i = 0, i < 5, i++) {
      const offset = (time + i * 0.5) * 100
      ctx.beginPath(),
      ctx.moveTo(offset, 0),
      ctx.lineTo(offset + 200, ctx.canvas.height),
      ctx.stroke()
    }
  },

  const drawNeonEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001
    
    // Neon orbs
    for (let i = 0, i < 3, i++) {
      const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width
      const y = (Math.cos(time * 0.3 + i) * 0.3 + 0.5) * ctx.canvas.height
      const size = 30 + Math.sin(time + i) * 10

      // Glow effect
      ctx.shadowColor = colors.primary,
      ctx.shadowBlur = 30,
      ctx.beginPath(),
      ctx.arc(x, y, size, 0, Math.PI * 2),
      ctx.fillStyle = colors.glow,
      ctx.fill(),

      // Core
      ctx.shadowBlur = 0,
      ctx.beginPath(),
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2),
      ctx.fillStyle = colors.primary,
      ctx.fill()
    }
  },

  const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) => {
    const time = Date.now() * 0.001
    
    // Wormhole effect
    const centerX = ctx.canvas.width / 2
    const centerY = ctx.canvas.height / 2
    const maxRadius = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.3,

    for (let i = 0, i < 20, i++) {
      const radius = (i / 20) * maxRadius
      const angle = time * 2 + i * 0.3
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      const alpha = 1 - (i / 20)

      ctx.globalAlpha = alpha * 0.5,
      ctx.fillStyle = colors.accent,
      ctx.beginPath(),
      ctx.arc(x, y, 2, 0, Math.PI * 2),
      ctx.fill()
    }
  },

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      <canvas
        ref={canvasRef}
        className=&quot;w-full h-full&quot;
        style={{
          background: colors.background}}
      />
      
      {/* Additional overlay effects */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {/* Quantum energy field */}
        <motion.div
          className=&quot;absolute inset-0&quot;
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, _${colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${_colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${_colors.glow} 0%, transparent 50%)`

            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: "easeInOut"
          }}
        />
        />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;


        {/* Holographic scan lines */}
        <div className='absolute inset-0 opacity-20'>;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
        />;
        {/* Holographic scan lines */}
        <div className='absolute inset - 0 opacity - 20'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={i}
              className='absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent';
              style={{

                top: `${(i / 20) * 100}%`,
                color: colors && colors.primary,

              }}
              animate={{


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Holographic scan lines */}
        <div className="absolute inset-0 opacity-20">;
          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
                opacity: [0, 1, 0],
                scale_x: [0, 1, 0],              }}          }}
        />;
        {/* Holographic scan lines */}
        <div className="absolute inset - 0 opacity - 20">;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={i}
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{
<<<<<<< HEAD
<<<<<<< HEAD
                top: `${(i / 20) * 100}%`,
                color: colors && colors.primary
        />
        {/* Holographic scan lines */}
        <div className='absolute inset-0 opacity-20'>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-full h-px bg-gradient-to-r from-transparent via-current to-transparent'
              style={{
                top: `${(i / 20) * 100}%`
                color: colors.primary
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                top: `${(i / 20) * 100}%`,
                color: colors && colors.primary

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              animate={{
                opacity: [0, 1, 0]
                scaleX: [0, 1, 0]
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                top: `${(i / 20) * 100}%`,
                color: colors.primary;
              }}
              animate={{
                opacity: [0, 1, 0];
<<<<<<< HEAD
                scale_x: [0, 1, 0];
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36






              transition={{
                duration: 3,
                delay: i * 0 && 0.1,
                repeat: Infinity,



            />

          ))}

                ease: "easeInOut"

=======
                scaleX: [0, 1, 0]
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }}
              transition={{
                duration: 3
                delay: i * 0.1
                repeat: Infinity
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}


<<<<<<< HEAD
=======
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======


=======
=======



              transition={{
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                duration: 3,
                delay: i * 0 && 0.1,
                repeat: Infinity,

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            />

          ))}
=======

                ease: "easeInOut"

              }}
            />;
=======
                duration: 3
                delay: i * 0.1
                repeat: Infinity
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
=======

=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
<<<<<<< HEAD
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ease: 'easeInOut',              }}

              }}

            />
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </div>
    </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};
export default UltraFuturisticBackground2035;  );
};
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default UltraFuturisticBackground2035;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </div>;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2035);
}
;
export default UltraFuturisticBackground2035;
;
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
};

export default UltraFuturisticBackground2035;  )
}
export default UltraFuturisticBackground2035;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default UltraFuturisticBackground2035;
export default UltraFuturisticBackground2035;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

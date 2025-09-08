
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/delete-old-data-records-6bba
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps  {children: React.ReactNode;


<<<<<<< HEAD

=======
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';'
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';'
  particleCount?: number;
  animationSpeed?: number;
}const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({children;
>>>>>>> origin/cursor/delete-old-data-records-6bba
if (this.x > canvas.width) this.x = 0;
if (this.y < 0) this.y = canvas.height;
if (this.y > canvas.height) this.y = 0;

// Fade out near end of life if (this.life < 20) {
  }
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx.fill_style = colors.primary;
ctx.font = `$ {
<<<<<<< HEAD

=======
}
  fontSize }
}px monospace`;

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

import React, { useEffect, useRef } from 'react';'
import { motion  } from 'framer-motion';'

>>>>>>> origin/cursor/delete-old-data-records-6bba

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode,
<<<<<<< HEAD

  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;

=======
  className?: string,
  intensity?: 'low' | 'medium' | 'high',
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic',
  particleCount?: number,
  animationSpeed?: number
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children,
  className = $2;
  intensity = $2;
  colorScheme = $2;
  particleCount = $2;
  animationSpeed = $2;
  const animationRef = $2;
  const colorSchemes = $2;
      secondary: '#ff00ff',
}
import React from 'react';
 const colorSchemes = {;
  quantum: {;
  resizeCanvas ();
window && window.addEventListener ('resize', resizeCanvas);
// Wrap around edges if (this && this.x < 0) this && this.x = canvas && canvas.width;
if (this && this.x > canvas && canvas.width) this && this.x = 0;
if (this && this.y < 0) this && this.y = canvas && canvas.height;
if (this && this.y > canvas && canvas.height) this && this.y = 0;
// Fade out near end of life if (this && this.life < 20) {;
}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx && ctx.fillStyle = colors && colors.primary;
ctx && ctx.font = `$ {;
  fontSize ;
}px monospace`;
const EnhancedFuturisticBackground: React.FC<;
  EnhancedFuturisticBackgroundProps;
> = ({;
  children,;
  className = '',;
  intensity = 'medium',;
  colorScheme = 'quantum',;
  particleCount = 100,;
  animationSpeed = 1,}) => {const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({;


  font_size;
}px monospace`;
;
const EnhancedFuturisticBackground: React.FC<;
  EnhancedFuturisticBackgroundProps;
> = ({
  children,
  class_name = '',
  intensity = 'medium',
  color_scheme = 'quantum',
  particle_count = 100,
  animation_speed = 1, }) => {const EnhancedFuturisticBackground: React.FC < EnhancedFuturisticBackgroundProps> = ({
>>>>>>> origin/cursor/delete-old-data-records-6bba
  children;
  class_name = '';
  intensity = 'medium';

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}let particles: Particle[] = []
let connections: Connection[] = []
// Initialize particles ctx.fill_style = colors.primary
ctx.font = `$ {

  fontSize }
}px monospace`
const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
> = ({ children
  }
  className = '','
  intensity = 'medium','
  colorScheme = 'quantum','
  particleCount = 100,
  animationSpeed = 1
<<<<<<< HEAD

=======
      background: 'rgba (10, 10, 30, 0.9)',
      particles: [;
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#96ceb4',
        '#feca57',
        '#ff9ff3',
      ],
      glow: '#4ecdc4',
    },  }      background: 'rgba (10, 10, 30, 0.9)';
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
      glow: '#4ecdc4';
    }
  }
;
  const intensity_settings = {
    low: { particle_count: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particle_count: 90, speed: 0.9, size: 3, opacity: 0.45 },
    high: { particle_count: 160, speed: 1.25, size: 3.5, opacity: 0.6 },  }    high: { particle_count: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
  }
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
    const colors = color_schemes[color_scheme];
    const settings = intensity_settings[intensity];
;
    // Enhanced particle system;
    class Particle {
      coordinate_x: number;
      coordinate_y: number;
  children;
  class_name = '';
  intensity = 'medium';
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const colorSchemes = {

  const _colorSchemes = {

    quantum: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.85)',
particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],
      glow: '#00ffff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],
const colorSchemes = {
  quantum: {
  resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Wrap around edges if (this.x < 0) this.x = canvas.width;
if (this.x > canvas.width) this.x = 0;
if (this.y < 0) this.y = canvas.height;
if (this.y > canvas.height) this.y = 0;
// Fade out near end of life if (this.life < 20) {
}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx.fillStyle = colors.primary;
ctx.font = `$ {
  fontSize
}px monospace`;
const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
> = ({
  children
  className = ''
  intensity = 'medium'
  colorScheme = 'quantum'
  particleCount = 100
  animationSpeed = 1,}) => {const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children;
  className = '';
  intensity = 'medium';
  colorScheme = 'quantum';
  particleCount = 100
  animationSpeed = 1
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const colorSchemes = {
    quantum: {
      primary: '#00ffff'
      secondary: '#ff00ff'
      accent: '#ffff00'
      background: 'rgba(0, 0, 0, 0.85)'
      particles: [
        '#00ffff'
        '#ff00ff'
        '#ffff00'
        '#00ff00'
        '#ff0080'
        '#8000ff'
      ]
      glow: '#00ffff',    },    }
      background: 'rgba(0, 0, 0, 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff']
      glow: '#00ffff'
    }
      primary: '#ff0080'
      secondary: '#00ffff'
      accent: '#ffff00'
      background: 'rgba(20, 0, 40, 0.9)'
      particles: [
        '#ff0080'
        '#00ffff'
        '#ffff00'
        '#ff4000'
        '#8000ff'
        '#00ff80'
      ]
      glow: '#ff0080'
    }
    holographic: {      primary: '#00ffff'
      secondary: '#ff00ff'
      accent: '#ffff00',    holographic: {
    particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80']
      glow: '#ff0080'
    }
    holographic: {
      primary: '#00ffff'
      secondary: '#ff00ff'
      accent: '#ffff00'
      background: 'rgba(0, 20, 40, 0.85)'
      particles: [
        '#00ffff'
        '#ff00ff'
        '#ffff00'
        '#00ff80'
        '#ff8000'
        '#8000ff'
      ]
      glow: '#00ffff',    },    }
      background: 'rgba(0, 20, 40, 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff']
      glow: '#00ffff'
    }
      primary: '#00ff80'
      secondary: '#ff0080'
      accent: '#ffff00'
      background: 'rgba(0, 40, 20, 0.9)'
      particles: [
        '#00ff80'
        '#ff0080'
        '#ffff00'
        '#00ffff'
        '#ff8000'
        '#8000ff'
      ]
      glow: '#00ff80'
    },    cosmic: {
      primary: '#ff6b6b'
      secondary: '#4ecdc4'
      accent: '#45b7d1',      background: 'rgba(0, 40, 20, 0.9)';
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff']
      glow: '#00ff80'
    }
    cosmic: {
      primary: '#ff6b6b'
      secondary: '#4ecdc4'
      accent: '#45b7d1'
      background: 'rgba(10, 10, 30, 0.9)'
      particles: [
        '#ff6b6b'
        '#4ecdc4'
        '#45b7d1'
        '#96ceb4'
        '#feca57'
        '#ff9ff3'
      ]
      glow: '#4ecdc4'
    },  };      background: 'rgba(10, 10, 30, 0.9)';
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3']
      glow: '#4ecdc4'
    }
  }
  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 }
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 }
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 },  };    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];
    // Enhanced particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
      max_life: number;      coordinate_x: number,
      coordinate_y: number,

max_life: number;      coordinate_x: number,
      coordinate_y: number,

const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps;
>>>>>>> origin/cursor/delete-old-data-records-6bba
> = ({ children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 100,}
  animationSpeed = 1,}
<<<<<<< HEAD


   }) => {



=======
   }) => {


    quantum: {

      primary: '#00ffff',
  secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 0, 0, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],
      glow: '#00ffff'
    },
    cyberpunk: {
      primary: '#ff0080',
      secondary: '#00ffff',
      accent: '#ffff00',
      background: 'rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],
      glow: '#ff0080'
    },
    holographic: {
      primary: '#00ffff',
      secondary: '#ff00ff',
      accent: '#ffff00',
      background: 'rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff'],
      glow: '#00ffff'
    },
    neural: {
      primary: '#00ff80',
      secondary: '#ff0080',
      accent: '#ffff00',
      background: 'rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff'],
      glow: '#00ff80'
    },
    cosmic: {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: 'rgba(10, 10, 30, 0.9)',
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],
      glow: '#4ecdc4'
    }
    "quantum": {
>>>>>>> origin/cursor/delete-old-data-records-6bba

 ;
  const canvasRef = useRef<HTMLCanvasElement    />(null);

const animationRef = useRef<number | undefined    />(undefined);

const colorSchemes = {
    quantum: {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      
      primary: '#00ffff',
  secondary: '#ff00ff',
      accent: '#ffff00',
  background: 'rgba(0, 0, 0, 0.85)',
      particles: [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff00',
        '#ff0080',
        '#8000ff',
      ],}
      glow: '#00ffff',}
    },
    cyberpunk: {
      primary: '#ff0080',
  secondary: '#00ffff',
      accent: '#ffff00',
  background: 'rgba(20, 0, 40, 0.9)',
particles: [
        '#ff0080',
        '#00ffff',
        '#ffff00',
        '#ff4000',
        '#8000ff',
        '#00ff80',
      ],}
      glow: '#ff0080',}
    },
    holographic: {
      primary: '#00ffff',
  secondary: '#ff00ff',
      accent: '#ffff00',
  background: 'rgba(0, 20, 40, 0.85)',
particles: [
        '#00ffff',
        '#ff00ff',
        '#ffff00',
        '#00ff80',
        '#ff8000',
        '#8000ff',
      ],}
      glow: '#00ffff',}
    },
    neural: {
      primary: '#00ff80',
  secondary: '#ff0080',
      accent: '#ffff00',
  background: 'rgba(0, 40, 20, 0.9)',
particles: [
        '#00ff80',
        '#ff0080',
        '#ffff00',
        '#00ffff',
        '#ff8000',
        '#8000ff',
      ],}
      glow: '#00ff80',}
    },
<<<<<<< HEAD
=======
    "cosmic": {
      }
      "primary": '#ff6b6b','
      "secondary": '#4ecdc4','
      "accent": '#45b7d1','
      "background": 'rgba(10, 10, 30, 0.9)','
"particles": [
        '#ff6b6b','
        '#4ecdc4','
        '#45b7d1','
        '#96ceb4','
        '#feca57','
        '#ff9ff3','
      ],
      "glow": '#4ecdc4','
    }
  };
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number,


        this.y += this.vy;
        this.life--;
        // Wrap around edges;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
          this.opacity *= 0.95

        // Fade out near end of life,
if (this.life < 20) {

}

this.opacity *= 0.95;
        }
      }

          this.opacity *= 0.95;        }


      maxLife: number,


      accent: '#ffff00,
      background: rgba(0, 0, 0, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff],
      glow: #00ffff'
    },
    cyberpunk: {
      primary: '#ff0080,
      secondary: #00ffff',
      accent: '#ffff00,
      background: rgba(20, 0, 40, 0.9)',
      particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80],
      glow: #ff0080'
    },
    holographic: {
      primary: '#00ffff,
      secondary: #ff00ff',
      accent: '#ffff00,
      background: rgba(0, 20, 40, 0.85)',
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff],
      glow: #00ffff'
    },
    neural: {
      primary: '#00ff80,
      secondary: #ff0080',
      accent: '#ffff00,
      background: rgba(0, 40, 20, 0.9)',
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff],
      glow: #00ff80'
    },
    cosmic: {
      primary: '#ff6b6b,
      secondary: #4ecdc4',
      accent: '#45b7d1,


        // Wrap around edges
        if (this.x < 0) this.x = $2;
        if (this.x > canvas.width) this.x = $2;
        if (this.y < 0) this.y = $2;
        if (this.y > canvas.height) this.y = $2;
        // Fade out near end of life
        if (this.life < 20) {
          this.opacity *= 0.95


=======
  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 },
    high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 }
  },

  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    const resizeCanvas = $2;
      canvas.height = $2;
    resizeCanvas($2);
    window.addEventListener($2);
    const colors = $2;
    const settings = $2;
    // Enhanced particle system
    class Particle {
      x: number,
      y: number,

        }

      draw() {
        
          this.opacity *= 0.95;        }          this.opacity *= 0.95
          this.opacity *= 0.95;        }
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      }

      draw() {

        ctx.save();
        ctx.globalAlpha = this.opacity;
<<<<<<< HEAD


=======
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
// Create gradient for particle,
const gradient = ctx.createRadialGradient(;
          this.x,
this.y,
0
          this.x,
this.y,
this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

<<<<<<< HEAD
}
ctx.restore();}

      }
      isDead() {}
        return this.life <= 0 || this.opacity < 0.01;}

=======
        ctx.save($2);
        ctx.globalAlpha = $2;
        // Create gradient for particle
        const gradient = ctx.createRadialGradient($2);
        gradient.addColorStop($2);

        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()

        ctx.restore();
      }
      isDead() {
        return this.life <= 0 |this.opacity < 0.01;      }
>>>>>>> origin/cursor/delete-old-data-records-6bba
        ctx.restore()
      }
      isDead() {
<<<<<<< HEAD



        return this.life <= 0 || this.opacity < 0.01
      }


    }

        return this.life <= 0 || this.opacity < 0.01;      }        

        ctx.restore()

        return this.life <= 0 || this.opacity < 0.01;      }




      }
    }



    // Connection lines between particles

        this.p2 = p2;
=======
        return this.life <= 0 |this.opacity < 0.01
    }
    // Connection lines between particles
class Connection {
p1: Particle
      p2: Particle
      opacity: number
  constructor($2) {this.p1 = p1
        this.p2 = p2
>>>>>>> origin/cursor/delete-old-data-records-6bba
        this.opacity = 0.1;}
  draw($2) {
        const distance = Math.sqrt(
<<<<<<< HEAD

          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)

=======
Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
        )
  if($2) {
          ctx.save()
          ctx.globalAlpha = this.opacity * (1 - distance / 150)
          ctx.strokeStyle = colors.glow
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.p1.x, this.p1.y)
          ctx.lineTo(this.p2.x, this.p2.y)
          ctx.stroke()
ctx.restore();}


return drawMatrix;
};

const drawMatrix = matrixRain();
    // Main animation loop,
const animate = () => {
      // Clear canvas with fade effect
}
ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw matrix rain,
drawMatrix();
      // Update and draw particles,
particles.forEach((particle) => {
        }
        particle.update();

particle.draw();

      });
      // Remove dead particles and add new ones,
particles = particles.filter(particle => { return !particle.isDead()); }
      while (particles.length < settings.particleCount) {

}

particles.push(new Particle());
      }
        ctx.restore()
        return this.life <= 0 || this.opacity < 0.01;      }

      }
      isDead() {

        }
        return this.life <= 0 || this.opacity < 0.01;
      }

    // Connection lines between particles,
class Connection {
}
"p1": Particle;

      "p2": Particle;
      "opacity": number;
      constructor("p1": Particle, "p2": Particle) {this.p1 = p1;
        }
        this.p2 = p2;
        this.opacity = 0.1;

      }
      isDead() {

      draw() {
}
const distance = Math.sqrt(;
Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
>>>>>>> origin/cursor/delete-old-data-records-6bba
        );
        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity * (1 - distance / 150);
          ctx.strokeStyle = colors.glow;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.stroke();

<<<<<<< HEAD


=======
;
      constructor (p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;      }
      draw () {
        const distance = Math.sqrt (
          Math.pow (this.p1.x - this.p2.x, 2) +;
            Math.pow (this.p1.y - this.p2.y, 2)        );      p1: Particle,
      p2: Particle,
      opacity: number,
      constructor (p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2,
        this.opacity = 0.1;
      draw () {
        const distance = Math.sqrt (
          Math.pow (this.p1.x - this.p2.x, 2) +;
            Math.pow (this.p1.y - this.p2.y, 2)          Math.pow (this.p1.x - this.p2.x, 2) + Math.pow (this.p1.y - this.p2.y, 2));
;
        // Check condition
if ( {) {
  $2
}
          ctx.save ();
          ctx.global_alpha = this.opacity * (1 - distance / 150);
          ctx.stroke_style = colors.glow;
          ctx.line_width = 0.5;
          ctx.begin_path ();
          ctx.move_to (this.p1.x, this.p1.y);
          ctx.line_to (this.p2.x, this.p2.y);
          ctx.stroke ();
          ctx.restore ();        }
      }
    }
          ctx.restore ();
>>>>>>> origin/cursor/delete-old-data-records-6bba

        }
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[] = [];


const "drops": number[] = [];

<<<<<<< HEAD

=======
for (let i = 0; i < columns; i++) {
        }
        drops[i] = 1;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }

const drawMatrix = (
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.primary;) => {
  return $3;}
}
        ctx.font = `${fontSize}px monospace`;

        ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;`

<<<<<<< HEAD


      };
      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
          }
          drops[i]++;
        }


    };



    const drawMatrix = matrixRain();
    // Main animation loop
    const animate = () => {
=======
for (let i = 0; i < drops.length; i++) {
}
const text =;
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            }
            drops[i] = 0;
          }
          drops[i]++;
        }


        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);


          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0


      };
      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
          }
          drops[i]++;
        }

        ctx.restore();
      }
      isDead() {
        return this.life <= 0 |this.opacity < 0.01;      }
        ctx.restore()
      }
      isDead() {
        return this.life <= 0 |this.opacity < 0.01
    }
    // Connection lines between particles
class Connection {
p1: Particle
      p2: Particle
      opacity: number
  constructor($2) {this.p1 = p1
        this.p2 = p2
        this.opacity = 0.1;}
  draw($2) {
        const distance = Math.sqrt(
Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
        )
  if($2) {
          ctx.save()
          ctx.globalAlpha = this.opacity * (1 - distance / 150)
          ctx.strokeStyle = colors.glow
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.p1.x, this.p1.y)
          ctx.lineTo(this.p2.x, this.p2.y)
          ctx.stroke()
ctx.restore();}


return drawMatrix;
};

const drawMatrix = matrixRain();
    // Main animation loop,
const animate = () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw matrix rain
      drawMatrix();
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
<<<<<<< HEAD


        particle.draw()


=======
        particle.draw()
>>>>>>> origin/cursor/delete-old-data-records-6bba
      });
      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      };
      return drawMatrix;
    };
    const drawMatrix = matrixRain();
<<<<<<< HEAD

    // Main animation loop;
const animate = (
      // Clear canvas with fade effect;

      ctx && ctx.fillStyle = colors && colors.background;
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Draw matrix rain;
      drawMatrix();
      // Update and draw particles;
      particles && particles.forEach(particle => {;
        particle && particle.update();
        particle && particle.draw();      });        particle && particle.draw();
      });
      // Remove dead particles and add new ones;
      particles = particles && particles.filter(particle => !particle && particle.isDead());
      while (particles && particles.length < settings && settings.particleCount) {;
        particles && particles.push(new Particle());      }
      // Create connections between nearby particles;
=======
    // Main animation loop;
const animate = (
      // Clear canvas with fade effect;
ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw matrix rain;
drawMatrix();
      // Update and draw particles;
particles.forEach(particle => {
        particle.update();

particle.draw();) => {
  return $3;}
}
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {        particles && particles.push(new Particle());
      }
      // Create connections between nearby particles;
}

particles.push(new Particle());
      }
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) +;
              Math && Math.pow(particles[i].y - particles[j].y, 2);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
particles.push(new Particle());}

      // Create connections between nearby particles,
connections = [];
for (let i = 0; i < particles.length; i++) {
        }
        for (let j = i + 1; j < particles.length; j++) {
}
const distance = Math.sqrt(;
        particles.push(new Particle())
      }
;
      return draw_matrix;    }          ctx.fill_text (text, i * font_size, drops[i] * font_size);
;
          // Check condition
if (> 0.975) {) {
  $2
}
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      }
      // Create connections between nearby particles;
      connections = [];
      });
      // Remove dead particles and add new ones;
particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
}
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
particles.push(new Particle());}
      }

      // Create connections between nearby particles;
connections = [];
for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {

      connections = [];

>>>>>>> origin/cursor/delete-old-data-records-6bba

          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) + ;
            Math && Math.pow(particles[i].y - particles[j].y, 2);
<<<<<<< HEAD




=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          );
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));
            connections.push(new Connection(particles[i], particles[j]))
<<<<<<< HEAD




=======
          }
          drops[i]++;
        }
      }return drawMatrix;    }ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize)if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {drops[i] = 0;
>>>>>>> origin/cursor/delete-old-data-records-6bba
          }

        }
      }// Draw connections;
      connections.forEach(connection => connection.draw())// Add floating geometric shapes;
      if (Math.random() < 0.02) {const x = Math.random() * canvas.width;

<<<<<<< HEAD

      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {        particles.push(new Particle())
      }
      // Create connections between nearby particles
      connections = [];

=======
const y = Math.random() * canvas.height;

const size  = Math.random() * 20 + 10;ctx.save()ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
>>>>>>> origin/cursor/delete-old-data-records-6bba



          }
        }
      }


      connections = $2;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          ),
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))
          }

      // Draw connections
      connections.forEach(connection => connection.draw());
      // Add floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;

        

<<<<<<< HEAD


        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;




        ctx.lineWidth = 1;



        if (Math.random() < 0.5) {

          // Draw triangle;
ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();

=======

        ctx.lineWidth = 1;

        const x = $2;
        const y = $2;
        const size = $2;
        ctx.save($2);
        ctx.globalAlpha = $2;
        ctx.strokeStyle = $2;
        ctx.lineWidth = $2;
        if (Math.random() < 0.5) {
          // Draw triangle
          ctx.beginPath($2);
          ctx.moveTo($2);
          ctx.lineTo($2);
          ctx.lineTo($2);
          ctx.closePath($2);
          ctx.stroke()
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt (
            Math.pow (particles[i].x - particles[j].x, 2) +;
              Math.pow (particles[i].y - particles[j].y, 2));
          // Check condition
if ( {) {
  $2
}
            connections.push (new Connection (particles[i], particles[j]));          }          const distance = Math.sqrt (
            Math.pow (particles[i].x - particles[j].x, 2) +;
            Math.pow (particles[i].y - particles[j].y, 2));
          // Check condition
if ( {) {
  $2
}
            connections.push (new Connection (particles[i], particles[j]));
          }
        }
      }
      // Draw connections;
      connections.for_each (connection => connection.draw ());
;
      // Add floating geometric shapes;
      // Check condition
if (< 0.02) {) {
  $2
}
        const coordinate_x = Math.random () * canvas.width;
        const coordinate_y = Math.random () * canvas.height;
        const size = Math.random () * 20 + 10;
;
        ctx.save ();
        ctx.global_alpha = 0.1;
        ctx.stroke_style = colors.accent;
        ctx.line_width = 1;
;
        // Check condition
if (< 0.5) {) {
  $2
}
          // Draw triangle;
          ctx.begin_path ();
          ctx.move_to (x, y - size);
          ctx.line_to (x - size, y + size);
          ctx.line_to (x + size, y + size);
          ctx.close_path ();
          ctx.stroke ();
ctx.stroke();
>>>>>>> origin/cursor/delete-old-data-records-6bba
        } else {
          // Draw square;}
          ctx.stroke_rect (x - size, y - size, size * 2, size * 2);}
        }



      }
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }

    animate();
    return () => {
<<<<<<< HEAD

      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
      window.removeEventListener('resize', resizeCanvas)
};

  }, [colorScheme, intensity, particleCount, animationSpeed]);
=======
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [colorScheme, intensity, particleCount, animationSpeed]),

  return (
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Overlay gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
    return () => {;
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    };  }, [colorScheme, intensity, particleCount, animationSpeed]);        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


  return (

<<<<<<< HEAD

        style={{ background: 'transparent' }}
      />
      

=======
    <div className={`relative min-h-screen ${className}`}    />

      <canvas;
ref={canvasRef}

className='fixed inset-0 w-full h-full pointer-events-none z-0'

        style={{ background: 'transparent' ,}
}
         />;
className='fixed inset-0 w-full h-full pointer-events-none z-0''

        style={{ "background": 'transparent' ,'
} />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      {/* Overlay gradient */}
      <div;
        className='fixed inset - 0 pointer - events - none z - 0';

        style={{
<<<<<<< HEAD


      {/* Content */}

      <div className='relative z-10'    />{children}</div>
    </div>
  )
};



=======
}
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`,}
        }}
         />
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
{/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
}
export default EnhancedFuturisticBackground;


      {/* Content */}

          background: `radial - gradient (circle at 50% 50%, transparent 0%, rgba (0, 0, 0, 0.3) 100%)`,
        }}
      />;
{/* Content */}
      <div className='relative z - 10'>{children}</div>;
    </div>);
}
;
export default EnhancedFuturisticBackground;
;
export default EnhancedFuturisticBackground;
>>>>>>> origin/cursor/delete-old-data-records-6bba

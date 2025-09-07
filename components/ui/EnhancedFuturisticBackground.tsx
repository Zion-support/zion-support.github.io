import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps  {children: React.ReactNode;


<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';

interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
<<<<<<< HEAD

  particleCount?: number;
  animationSpeed?: number;
}const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({children;
const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps /> = ({children;
  className;

=======
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number;}
}
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps    /> = ({children;
  className;

const colorSchemes = {quantum: {resizeCanvas ()window.addEventListener ('resize', resizeCanvas)// Wrap around edges if (this.x < 0) this.x = canvas.width;
>>>>>>> origin/chore/fix-lint-and-merge
if (this.x > canvas.width) this.x = 0;
if (this.y < 0) this.y = canvas.height;
if (this.y > canvas.height) this.y = 0;

// Fade out near end of life if (this.life < 20) {
  }
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx.fill_style = colors.primary;
ctx.font = `$ {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode,
<<<<<<< HEAD
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
=======
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
<<<<<<< HEAD
animationSpeed?: number
=======
  animationSpeed?: number

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  children;
  class_name = '';
  intensity = 'medium';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}let particles: Particle[] = []
let connections: Connection[] = []
// Initialize particles ctx.fill_style = colors.primary
ctx.font = `$ {

  fontSize }
}px monospace`
const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
> = ({ children
  }
  className = '','
  intensity = 'medium','
  colorScheme = 'quantum','
  particleCount = 100,
  animationSpeed = 1
=======
<<<<<<< HEAD
}
  fontSize }
}px monospace`;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
<<<<<<< HEAD
      max_life: number;      coordinate_x: number,
      coordinate_y: number,

max_life: number;      coordinate_x: number,
      coordinate_y: number,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps;
> = ({ children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 100,}
  animationSpeed = 1,}
>>>>>>> origin/chore/fix-lint-and-merge
   }) => {


<<<<<<< HEAD
// Fade out near end of life if (this.life < 20) {}
}


}let particles: Particle[] = []
let connections: Connection[] = []
// Initialize particles ctx.fill_style = colors.primary
ctx.font = `$ {

  fontSize }
}px monospace`
const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
> = ({ children,
  className = ',
  intensity = 'medium,
  colorScheme = quantum',
  particleCount = 100}
  animationSpeed = 1}
   }) => {
  const canvasRef = useRef<HTMLCanvasElement />(null);

const animationRef = useRef<number | undefined />(undefined);

const colorSchemes = {
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
=======

 ;
  const canvasRef = useRef<HTMLCanvasElement    />(null);

const animationRef = useRef<number | undefined    />(undefined);

const colorSchemes = {
    quantum: {
>>>>>>> origin/chore/fix-lint-and-merge
      
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

const intensitySettings = {
    }
    "low": { "particleCount": 40, "speed": 0.45, "size": 2, "opacity": 0.25
},
    "medium": { "particleCount": 90, "speed": 0.9, "size": 3, "opacity": 0.45
},
"high": { "particleCount": 160, "speed": 1.25, "size": 3.5, "opacity": 0.6
}
  };

  useEffect(() => {

    }

    const canvas = canvasRef.current;

    if (!canvas) return;

const ctx = canvas.getContext('2d')if (!ctx);'
  return;

const resizeCanvas = () => {canvas.width = window.innerWidth;
}
canvas.height = window.innerHeight;
    }resizeCanvas()window.addEventListener('resize', resizeCanvas)const colors = colorSchemes[colorScheme];'

const settings = intensitySettings[intensity];

    // Enhanced particle system,
class Particle {
}
"x": number;
      "y": number;
      "vx": number;

      "vy": number;
      "size": number;
      "color": string;
      "opacity": number;

      "life": number;

      "maxLife": number;
      constructor() {
        }
        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
this.color =;
          colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;
      life: number;
    const canvas = $2;
    if (!canvas) return,

      }

      update() {
        }
        this.x += this.vx;

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
<<<<<<< HEAD
=======
=======
      max_life: number;      coordinate_x: number,
      coordinate_y: number,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number,
<<<<<<< HEAD
      }update() {this.x += this.vx;
=======
<<<<<<< HEAD
this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
=======

        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100
      }
<<<<<<< HEAD
      maxLife: number;      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number
      maxLife: number
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
        this.color =
          colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;      }        this.color = colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      update() {
        this.x += this.vx;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
      constructor() {
        this.x = $2;
        this.y = $2;
        this.vx = $2;
        this.vy = $2;
        this.size = $2;
        this.color = $2;
        this.opacity = $2;
        this.life = $2;
        this.maxLife = $2;
        this.y += this.vy,
        this.life--,

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
    cosmic: {
      primary: '#ff6b6b',
  secondary: '#4ecdc4',
      accent: '#45b7d1',
  background: 'rgba(10, 10, 30, 0.9)',
particles: [
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#96ceb4',
        '#feca57',
        '#ff9ff3',
      ],}
      glow: '#4ecdc4',}
    }}

const intensitySettings = {}
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25,}
},
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45,}
},
high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6,}
}}

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

const ctx = canvas.getContext('2d')if (!ctx);
  return;

const resizeCanvas = (canvas.width = window.innerWidth;
canvas.height = window.innerHeight;) => {
  return $3;}
}
    }resizeCanvas()window.addEventListener('resize', resizeCanvas)const colors = colorSchemes[colorScheme];

const settings = intensitySettings[intensity];

    // Enhanced particle system;
class Particle {
x: number;
      y: number;
      vx: number;

      vy: number;
      size: number;
      color: string;
      opacity: number;

      life: number;

      maxLife: number;
      constructor() {
        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
this.color =;
          colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;}
}
      }

      update() {
        this.x += this.vx;

        this.y += this.vy;
        this.life--;
        // Wrap around edges;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Fade out near end of life;
if (this.life < 20) {
}
this.opacity *= 0.95;}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
      }

          this.opacity *= 0.95;        }

>>>>>>> origin/chore/fix-lint-and-merge
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

<<<<<<< HEAD
// Create gradient for particle;
const gradient = ctx.createRadialGradient(
          this.x;
this.y;
0,
this.x;
this.y;
this.size;
        );
        gradient.addColorStop(0, this.color);
<<<<<<< HEAD

=======
        gradient.addColorStop(1, 'transparent');
>>>>>>> origin/chore/fix-lint-and-merge
=======
        
<<<<<<< HEAD
          this.opacity *= 0.95;        }          this.opacity *= 0.95
          this.opacity *= 0.95;        }

        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
<<<<<<< HEAD
=======
        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.save($2);
        ctx.globalAlpha = $2;
        // Create gradient for particle
        const gradient = ctx.createRadialGradient($2);
        gradient.addColorStop($2);
        gradient.addColorStop($2);
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
=======
}
ctx.restore();}
>>>>>>> origin/chore/fix-lint-and-merge
      }
      isDead() {}
        return this.life <= 0 || this.opacity < 0.01;}
=======
        ctx.restore();
      }
      isDead() {
        return this.life <= 0 |this.opacity < 0.01;      }
        return this.life <= 0 || this.opacity < 0.01;      }        
=======

        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ctx.restore()
        return this.life <= 0 || this.opacity < 0.01;      }

      }
      isDead() {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return this.life <= 0 || this.opacity < 0.01
      }

    }

        return this.life <= 0 || this.opacity < 0.01;      }        

        ctx.restore()

        return this.life <= 0 || this.opacity < 0.01;      }



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }

<<<<<<< HEAD
=======

    // Connection lines between particles
<<<<<<< HEAD
        return this.life <= 0 || this.opacity < 0.01
=======
=======
      max_life: number,
        this.coordinate_x = Math.random () * canvas.width;
        this.coordinate_y = Math.random () * canvas.height;
        this.vx = (Math.random () - 0.5) * settings.speed * animation_speed;
        this.vy = (Math.random () - 0.5) * settings.speed * animation_speed;
        this.size = Math.random () * settings.size + 1;
        this.color =;
          colors.particles[Math.floor (Math.random () * colors.particles.length)];
        this.opacity = Math.random () * settings.opacity;
        this.life = Math.random () * 100;
        this.max_life = 100;      }        this.color = colors.particles[Math.floor (Math.random () * colors.particles.length)];
        this.opacity = Math.random () * settings.opacity;
        this.life = Math.random () * 100;
        this.max_life = 100;
      update () {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
;
        // Wrap around edges;
        // Check condition
if (this.coordinate_x = canvas.width) {
  $2
}
        // Check condition
if (this.coordinate_x = 0) {
  $2
}
        // Check condition
if (this.coordinate_y = canvas.height) {
  $2
}
        // Check condition
if (this.coordinate_y = 0) {
  $2
}
        // Fade out near end of life;
        // Check condition
if ( {) {
  $2
}
          this.opacity *= 0.95;        }          this.opacity *= 0.95;
        }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }
<<<<<<< HEAD

    // Connection lines between particles
    class Connection {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Connection lines between particles;
class Connection {
p1: Particle;

<<<<<<< HEAD
      p2: Particle;
      opacity: number;
      constructor(p1: Particle, p2: Particle) {this.p1 = p1;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      p1: Particle,
      p2: Particle,
      opacity: number,
constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        this.p2 = p2;
        this.opacity = 0.1;}
}
      }
      draw() {
        const distance = Math.sqrt(
<<<<<<< HEAD
Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
=======
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
}
ctx.restore();}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      maxLife: number;      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number,;
      life: number,;
      maxLife: number,;
        this && this.x = Math && Math.random() * canvas && canvas.width;
        this && this.y = Math && Math.random() * canvas && canvas.height;
        this && this.vx = (Math && Math.random() - 0 && 0.5) * settings && settings.speed * animationSpeed;
        this && this.vy = (Math && Math.random() - 0 && 0.5) * settings && settings.speed * animationSpeed;
        this && this.size = Math && Math.random() * settings && settings.size + 1;
        this && this.color =;
          colors && colors.particles[Math && Math.floor(Math && Math.random() * colors && colors.particles.length)];
        this && this.opacity = Math && Math.random() * settings && settings.opacity;
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;      }        this && this.color = colors && colors.particles[Math && Math.floor(Math && Math.random() * colors && colors.particles.length)];
        this && this.opacity = Math && Math.random() * settings && settings.opacity;
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;
      update() {;
        this && this.x += this && this.vx;
        this && this.y += this && this.vy;
        this && this.life--;
        // Wrap around edges;
        if (this && this.x < 0) this && this.x = canvas && canvas.width;
        if (this && this.x > canvas && canvas.width) this && this.x = 0;
        if (this && this.y < 0) this && this.y = canvas && canvas.height;
        if (this && this.y > canvas && canvas.height) this && this.y = 0;
        // Fade out near end of life;
        if (this && this.life < 20) {;
          this && this.opacity *= 0 && 0.95;        }          this && this.opacity *= 0 && 0.95;
        }
      }
      draw() {;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = this && this.opacity;
        // Create gradient for particle;
        const gradient = ctx && ctx.createRadialGradient(;
          this && this.x,;
          this && this.y,;
          0,;
          this && this.x,;
          this && this.y,;
          this && this.size;
        );
        gradient && gradient.addColorStop(0, this && this.color);
        gradient && gradient.addColorStop(1, 'transparent');        // Create gradient for particle;
        const gradient = ctx && ctx.createRadialGradient(this && this.x, this && this.y, 0, this && this.x, this && this.y, this && this.size);
        gradient && gradient.addColorStop(0, this && this.color);
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();
      }
      isDead() {;
        return this && this.life <= 0 || this && this.opacity < 0 && 0.01;      }        ;
        ctx && ctx.restore();
      }
      isDead() {;
        return this && this.life <= 0 || this && this.opacity < 0 && 0.01;
    }
    // Connection lines between particles;
    class Connection {;
      p1: Particle;
      p2: Particle;
      opacity: number;
      constructor(p1: Particle, p2: Particle) {;
        this && this.p1 = p1;
        this && this.p2 = p2;
        this && this.opacity = 0 && 0.1;      }
      draw() {;
        const distance = Math && Math.sqrt(;
          Math && Math.pow(this && this.p1.x - this && this.p2.x, 2) +;
            Math && Math.pow(this && this.p1.y - this && this.p2.y, 2)        );      p1: Particle,;
      p2: Particle,;
      opacity: number,;
      constructor(p1: Particle, p2: Particle) {;
        this && this.p1 = p1;
        this && this.p2 = p2,;
        this && this.opacity = 0 && 0.1;
      draw() {;
        const distance = Math && Math.sqrt(;
          Math && Math.pow(this && this.p1.x - this && this.p2.x, 2) +;
            Math && Math.pow(this && this.p1.y - this && this.p2.y, 2)          Math && Math.pow(this && this.p1.x - this && this.p2.x, 2) + Math && Math.pow(this && this.p1.y - this && this.p2.y, 2);
        );
        if (distance < 150) {;
          ctx && ctx.save();
          ctx && ctx.globalAlpha = this && this.opacity * (1 - distance / 150);
          ctx && ctx.strokeStyle = colors && colors.glow;
          ctx && ctx.lineWidth = 0 && 0.5;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(this && this.p1.x, this && this.p1.y);
          ctx && ctx.lineTo(this && this.p2.x, this && this.p2.y);
          ctx && ctx.stroke();
          ctx && ctx.restore();        }
<<<<<<< HEAD
          ctx.restore()
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      }
    }
          ctx && ctx.restore();
<<<<<<< HEAD
          ctx.restore()
=======

=======
          ctx.restore()

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[] = [];
<<<<<<< HEAD
      }
    }

    let particles: Particle[] = []
    let connections: Connection[] = []
    // Initialize particles
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
    }
    // Matrix rain effect
    const matrixRain = () => {
      const characters =
=======

// Initialize particles;
for (let i = 0; i < settings.particleCount; i++) {}
      particles.push(new Particle());}
    }
    // Matrix rain effect;
const matrixRain = (;
  const characters =
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

<<<<<<< HEAD
const fontSize = 12;

const columns = canvas.width / fontSize;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas && canvas.width / fontSize;
      const drops: number[] = [];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];
<<<<<<< HEAD
      for (let i = 0, i < columns, i++) {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const drops: number[] = [];

<<<<<<< HEAD
for (let i = 0; i < columns; i++) {
        drops[i] = 1;) => {
  return $3;}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        drops[i] = 1
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }

const drawMatrix = (
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.primary;) => {
  return $3;}
}
        ctx.font = `${fontSize}px monospace`;
<<<<<<< HEAD
=======


<<<<<<< HEAD
for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {}
            drops[i] = 0;}
          }
          drops[i]++;
        }
      };
<<<<<<< HEAD
      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
          }
          drops[i]++;
        }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
=======


      return drawMatrix;
};


const drawMatrix = matrixRain();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (let i = 0; i < columns; i++) {;
        drops[i] = 1;      }      for (let i = 0, i < columns, i++) {;
        drops[i] = 1;
      }
      const drawMatrix = () => {;
        ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.06)';
        ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
        ctx && ctx.fillStyle = colors && colors.primary;
        ctx && ctx.font = `${fontSize}px monospace`;
        for (let i = 0; i < drops && drops.length; i++) {;
          const text =;
            characters[Math && Math.floor(Math && Math.random() * characters && characters.length)];
          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    // Initialize particles;
    for (let index = 0; i < settings.particle_count; i++) {
      particles.push (new Particle ());    }
    // Matrix rain effect;
    const matrix_rain = () =>: any {
      const characters =;
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const font_size = 12;    let particles: Particle[] = [],
    let connections: Connection[] = [],
    // Initialize particles;
    for (let index = 0, i < settings.particle_count, i++) {
      particles.push (new Particle ());
    }
    // Matrix rain effect;
    const matrix_rain = () =>: any {
      const characters =;
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const font_size = 12;
      const columns = canvas.width / font_size;
      const drops: number[] = [];
;
      for (let index = 0; i < columns; i++) {
        drops[i] = 1;      }      for (let index = 0, i < columns, i++) {
        drops[i] = 1;
      }
      const draw_matrix = () =>: any {
        ctx.fill_style = 'rgba (0, 0, 0, 0.06)';
        ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
        ctx.fill_style = colors.primary;
        ctx.font = `${font_size}px monospace`;
;
        for (let index = 0; i < drops.length; i++) {
          const text =;
            characters[Math.floor (Math.random () * characters.length)];
          ctx.fill_text (text, i * font_size, drops[i] * font_size);
;
          // Check condition
if (> 0.975) {) {
  $2
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

<<<<<<< HEAD
        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      };
      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
          }
          drops[i]++;
        }
<<<<<<< HEAD
    };
=======

    };


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const drawMatrix = matrixRain();
    // Main animation loop
    const animate = () => {
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      });
      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      };
      return drawMatrix;
    };
    const drawMatrix = matrixRain();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Main animation loop;
const animate = (
      // Clear canvas with fade effect;
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {        particles && particles.push(new Particle());
      }
<<<<<<< HEAD
      // Create connections between nearby particles;
=======


      // Create connections between nearby particles;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) +;
              Math && Math.pow(particles[i].y - particles[j].y, 2);
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      }
      // Create connections between nearby particles;
      connections = [];
=======
<<<<<<< HEAD
;
      return draw_matrix;
    }
;
    const draw_matrix = matrix_rain ();
;
    // Main animation loop;
    const animate = () =>: any {
      // Clear canvas with fade effect;
      ctx.fill_style = colors.background;
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Draw matrix rain;
      draw_matrix ();
;
      // Update and draw particles;
      particles.for_each (particle => {
        particle.update ();
        particle.draw ();      });        particle.draw ();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      });
      // Remove dead particles and add new ones;
particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
}
particles.push(new Particle());}
      }

      // Create connections between nearby particles;
<<<<<<< HEAD
connections = [];
for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
>>>>>>> origin/chore/fix-lint-and-merge
            Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
}
<<<<<<< HEAD
          ctx.save ()ctx.global_alpha = this.opacity * (1 - distance / 150)ctx.stroke_style = colors.glow;
          ctx.line_width = 0.5;
          ctx.begin_path ()ctx.move_to (this.p1.x, this.p1.y)ctx.line_to (this.p2.x, this.p2.y)ctx.stroke ()ctx.restore ()}
      }
    }
          ctx.restore ()ctx.restore()}
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[]  = [];drops[i] = 1;
// Initialize particles;
    for (let i = 0; i < settings.particleCount; i++) {particles.push(new Particle())}
    // Matrix rain effect;
    const matrixRain = () => {const characters =;
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン;
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      const drops: number[]  = [];for (let i = 0; i < columns; i++) {drops[i] = 1;}
      const drawMatrix = () => {ctx.fillStyle = rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height)ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;
    // Initialize particles;
    for (let index = 0; i < settings.particle_count; i++) {particles.push (new Particle ())}
    // Matrix rain effect;
    const matrix_rain = () =>: any {const characters =;
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン;      const font_size = 12;    let particles: Particle[] = [],let connections: Connection[] = [],// Initialize particles;
    for (let index = 0, i < settings.particle_count, i++) {particles.push (new Particle ())}
    // Matrix rain effect;
        01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン;
      const font_size = 12;
      const columns = canvas.width / font_size;
      const drops: number[]  = [];for (let index = 0; i < columns; i++) {drops[i] = 1;      }      for (let index = 0, i < columns, i++) {drops[i] = 1;
      }
      const draw_matrix = () =>: any {ctx.fill_style = rgba (0, 0, 0, 0.06)';
        ctx.fill_rect (0, 0, canvas.width, canvas.height)ctx.fill_style = colors.primary;
        ctx.font = `${font_size}px monospace`;for (let index = 0; i < drops.length; i++) {const text =;
            characters[Math.floor (Math.random () * characters.length)];
          ctx.fill_text (text, i * font_size, drops[i] * font_size)// Check condition;
if (> 0.975) {) {$2;
}for (let i = 0; i < drops.length; i++) {const text =;
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize)if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {drops[i] = 0;
=======
            connections.push(new Connection(particles[i], particles[j]));}
>>>>>>> origin/chore/fix-lint-and-merge
=======
      connections = [];


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) + ;
            Math && Math.pow(particles[i].y - particles[j].y, 2);
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          );
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));
            connections.push(new Connection(particles[i], particles[j]))
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }

        }
      }// Draw connections;
      connections.forEach(connection => connection.draw())// Add floating geometric shapes;
      if (Math.random() < 0.02) {const x = Math.random() * canvas.width;

<<<<<<< HEAD
const y = Math.random() * canvas.height;

const size  = Math.random() * 20 + 10;ctx.save()ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
=======
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {        particles.push(new Particle())
      }
      // Create connections between nearby particles
      connections = [];
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



          }
        }
      }



      // Draw connections
      connections.forEach(connection => connection.draw());
      // Add floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;

        

<<<<<<< HEAD
          }
        }
      }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
ctx.stroke();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06),
        ctx.fillRect($2);
        ctx.fillStyle = $2;
        ctx.font = $2;
        for (let i = 0, i < drops.length, i++) {
          const text = $2;
          ctx.fillText($2);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      },
=======
        ctx.lineWidth = 1;
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        if (Math.random() < 0.5) {
<<<<<<< HEAD
          // Draw triangle
          ctx.beginPath($2);
          ctx.moveTo($2);
          ctx.lineTo($2);
          ctx.lineTo($2);
          ctx.closePath($2);
          ctx.stroke()
=======
          // Draw triangle;
ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();
<<<<<<< HEAD
}
ctx.stroke();}
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        } else {
          // Draw square;}
          ctx.stroke_rect (x - size, y - size, size * 2, size * 2);}
        }
<<<<<<< HEAD
=======

<<<<<<< HEAD
        ctx.restore();
      }
      // Respect reduced motion;
const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'

      ).matches;
      if (prefersReduced) {// Slow down updates;}
        setTimeout(() => {animationRef.current = requestAnimationFrame(animate)}, 100)} else {animationRef.current = requestAnimationFrame(animate)}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Draw connections;
      connections && connections.forEach(connection => connection && connection.draw());
      // Add floating geometric shapes;
      if (Math && Math.random() < 0 && 0.02) {;
        const x = Math && Math.random() * canvas && canvas.width;
        const y = Math && Math.random() * canvas && canvas.height;
        const size = Math && Math.random() * 20 + 10;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = 0 && 0.1;
        ctx && ctx.strokeStyle = colors && colors.accent;
        ctx && ctx.lineWidth = 1;
        if (Math && Math.random() < 0 && 0.5) {;
          // Draw triangle;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(x, y - size);
          ctx && ctx.lineTo(x - size, y + size);
          ctx && ctx.lineTo(x + size, y + size);
          ctx && ctx.closePath();
          ctx && ctx.stroke();
        } else {;
          // Draw square;
          ctx && ctx.strokeRect(x - size, y - size, size * 2, size * 2);
        for (let i = 0, i < drops.length, i++) {
          const text = characters[Math.floor(Math.random() * characters.length)]
          ctx.fillText(text, i * fontSize, drops[i] * fontSize),

      return drawMatrix;    };          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
<<<<<<< HEAD
        }
ctx && ctx.restore();
=======
<<<<<<< HEAD
      },

      return drawMatrix
    },

    const drawMatrix = matrixRain()

    // Main animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background,
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Draw matrix rain
      drawMatrix(),

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(),
        particle.draw()
      }),

      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead()),
      while (particles.length < settings.particleCount) {
        particles.push(new Particle())
      }

      // Create connections between nearby particles
      connections = [],
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) + 
            Math.pow(particles[i].y - particles[j].y, 2)
          ),
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))
          }

        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw()),

      // Add floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 20 + 10
        
        ctx.save(),
        ctx.globalAlpha = 0.1,
        ctx.strokeStyle = colors.accent,
        ctx.lineWidth = 1,
        
        if (Math.random() < 0.5) {
          // Draw triangle
          ctx.beginPath(),
          ctx.moveTo(x, y - size),
          ctx.lineTo(x - size, y + size),
          ctx.lineTo(x + size, y + size),
          ctx.closePath(),

          ctx.stroke()
        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2)

        }

        ctx && ctx.restore();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      // Respect reduced motion;
      const prefersReduced = window && window.matchMedia(;
        '(prefers-reduced-motion: reduce)';
      ).matches;
      if (prefersReduced) {;
        // Slow down updates;
        setTimeout(() => {;
          animationRef && animationRef.current = requestAnimationFrame(animate);
        }, 100);
      } else {;
        animationRef && animationRef.current = requestAnimationFrame(animate);      }        } else {;
          // Draw square;
          ctx && ctx.strokeRect(x - size, y - size, size * 2, size * 2);
        }
<<<<<<< HEAD

      }

        ctx && ctx.restore();
      }
=======


        ctx && ctx.restore();
=======

      }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Respect reduced motion;
      const prefersReduced = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches,;
      if (prefersReduced) {;
        // Slow down updates;
        setTimeout(() => {;
          animationRef && animationRef.current = requestAnimationFrame(animate);
        }, 100);
      } else {;
        animationRef && animationRef.current = requestAnimationFrame(animate);
<<<<<<< HEAD
      }
    }
    animate();
        
        ctx.restore()
      }

      }
      return drawMatrix
    }
      };

      return drawMatrix;    };

    };

    const drawMatrix = matrixRain();
    // Main animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw matrix rain
      drawMatrix();
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();      });        particle.draw()
      });
      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
        particles.push(new Particle());      }
      // Create connections between nearby particles
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {        particles.push(new Particle())
      }
      // Create connections between nearby particles
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))

      }

      // Create connections between nearby particles
      connections = [];

          }
        }
      }

      // Draw connections
      connections.forEach(connection => connection.draw());
      // Add floating geometric shapes
      if (Math.random() < 0.02) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 20 + 10;
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1;
        if (Math.random() < 0.5) {
          // Draw triangle
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();
          ctx.stroke();
        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2);
        }
        ctx.restore();
      }
      // Respect reduced motion
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReduced) {
        // Slow down updates
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animate);
        }, 100);
      } else {
        animationRef.current = requestAnimationFrame(animate);      }        } else {
          // Draw square
          ctx.strokeRect(x - size, y - size, size * 2, size * 2)
        }
        ctx.restore()
      }
      // Respect reduced motion
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) {
        // Slow down updates
        setTimeout(() => {
          animationRef.current = requestAnimationFrame(animate)
        }, 100)
      } else {
        animationRef.current = requestAnimationFrame(animate)
      }
}, [colorScheme, intensity, particleCount, animationSpeed]);
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }

    animate();
    return () => {
      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
      window.removeEventListener('resize', resizeCanvas)
};

  }, [colorScheme, intensity, particleCount, animationSpeed]);

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return () => {;
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    };  }, [colorScheme, intensity, particleCount, animationSpeed]);        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    }


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
<<<<<<< HEAD
    <div className={`relative min-h-screen ${className}`}>
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
    animate()return () => {if (animationRef.current) {cancelAnimationFrame(animationRef.current)}
      window.removeEventListener('resize', resizeCanvas)}}, [colorScheme, intensity, particleCount, animationSpeed])return (<div className={`relative min-h-screen ${className}`}>;
      <canvas;
        ref={canvasRef}className='fixed inset-0 w-full h-full pointer-events-none z-0';

className='fixed inset-0 w-full h-full pointer-events-none z-0'
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
=======
<<<<<<< HEAD
        ctx.restore ();
      }
      // Respect reduced motion;
      const prefers_reduced = window.match_media (
        '(prefers - reduced - motion: reduce)').matches;
      // Check condition
if ( {) {
  $2
}
        // Slow down updates;
        set_timeout (() => {
          animation_ref.current = requestAnimationFrame (animate);
        }, 100);
      } else {
        animation_ref.current = requestAnimationFrame (animate);      }        } else {
          // Draw square;
          ctx.stroke_rect (x - size, y - size, size * 2, size * 2);
        }
        ctx.restore ();
      }
      // Respect reduced motion;
      const prefers_reduced = window.match_media ('(prefers - reduced - motion: reduce)').matches,
      // Check condition
if ( {) {
  $2
}
        // Slow down updates;
        set_timeout (() => {
          animation_ref.current = requestAnimationFrame (animate);
        }, 100);
      } else {
        animation_ref.current = requestAnimationFrame (animate);
      }
    }
;
    animate ();
;
    return () => {
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
      window.removeEventListener ('resize', resize_canvas);
    }  }, [color_scheme, intensity, particle_count, animation_speed]);        cancelAnimationFrame (animation_ref.current);
      }
      window.removeEventListener ('resize', resize_canvas);
    }
  return (
    <div className={`relative min - h-screen ${class_name}`}>;
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/chore/fix-lint-and-merge
      {/* Overlay gradient */}
      <div;
        className='fixed inset - 0 pointer - events - none z - 0';

        style={{
<<<<<<< HEAD
}
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`,}
        }}
         />
=======
<<<<<<< HEAD
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      {/* Overlay gradient */}
      <div
        className='fixed inset-0 pointer-events-none z-0'
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
{/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0 && 0.3) 100%)`,
        }}
      />;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Content */}
<<<<<<< HEAD
<<<<<<< HEAD

export default EnhancedFuturisticBackground;
=======
      <div className='relative z-10'    />{children}</div>
    </div>
  )
};
=======
      <div className='relative z-10'>{children}</div>;
    </div>;
  );
}
export default EnhancedFuturisticBackground;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


export default EnhancedFuturisticBackground;

<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD

export default EnhancedFuturisticBackground;
export default EnhancedFuturisticBackground;
export default EnhancedFuturisticBackground;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

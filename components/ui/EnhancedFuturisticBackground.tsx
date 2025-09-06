
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  children;
  className = '';
  intensity = 'medium';
  colorScheme = 'quantum';
<<<<<<< HEAD
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
=======
  particleCount = 100,;
  animationSpeed = 1;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  const colorSchemes = {;
    quantum: {;

      primary: '#00ffff',;
      secondary: '#ff00ff',;
      accent: '#ffff00',;
      background: 'rgba(0, 0, 0, 0 && 0.85)',;
      particles: [;
        '#00ffff',;
        '#ff00ff',;
        '#ffff00',;
        '#00ff00',;
        '#ff0080',;
        '#8000ff',;
      ],;
      glow: '#00ffff',    },    },;
      background: 'rgba(0, 0, 0, 0 && 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff00#ff0080#8000ff'],;
      glow: '#00ffff';
    };
      primary: '#ff0080',;
      secondary: '#00ffff',;
      accent: '#ffff00',;
      background: 'rgba(20, 0, 40, 0 && 0.9)',;
      particles: [;
        '#ff0080',;
        '#00ffff',;
        '#ffff00',;
        '#ff4000',;
        '#8000ff',;
        '#00ff80',;
      ],;
      glow: '#ff0080',;
    },;
    holographic: {      primary: '#00ffff',;
      secondary: '#ff00ff',;
      accent: '#ffff00',    holographic: {;
    particles: ['#ff0080#00ffff#ffff00#ff4000#8000ff#00ff80'],;
      glow: '#ff0080';
    };
    holographic: {;

      primary: '#00ffff',;
      secondary: '#ff00ff',;
      accent: '#ffff00',;
      background: 'rgba(0, 20, 40, 0 && 0.85)',;
      particles: [;
        '#00ffff',;
        '#ff00ff',;
        '#ffff00',;
        '#00ff80',;
        '#ff8000',;
        '#8000ff',;
      ],;
      glow: '#00ffff',    },    },;
      background: 'rgba(0, 20, 40, 0 && 0.85)';
      particles: ['#00ffff#ff00ff#ffff00#00ff80#ff8000#8000ff'],;
      glow: '#00ffff';
    };
      primary: '#00ff80',;
      secondary: '#ff0080',;
      accent: '#ffff00',;
      background: 'rgba(0, 40, 20, 0 && 0.9)',;
      particles: [;
        '#00ff80',;
        '#ff0080',;
        '#ffff00',;
        '#00ffff',;
        '#ff8000',;
        '#8000ff',;
      ],;
      glow: '#00ff80',;
    },    cosmic: {;
      primary: '#ff6b6b',;
      secondary: '#4ecdc4',;
      accent: '#45b7d1',      background: 'rgba(0, 40, 20, 0 && 0.9)';
      particles: ['#00ff80#ff0080#ffff00#00ffff#ff8000#8000ff'],;
      glow: '#00ff80';
    };
    cosmic: {;
      primary: '#ff6b6b',;
      secondary: '#4ecdc4',;
      accent: '#45b7d1',;
      background: 'rgba(10, 10, 30, 0 && 0.9)',;
      particles: [;
        '#ff6b6b',;
        '#4ecdc4',;
        '#45b7d1',;
        '#96ceb4',;
        '#feca57',;
        '#ff9ff3',;
      ],;
      glow: '#4ecdc4',;
    },  };      background: 'rgba(10, 10, 30, 0 && 0.9)';
      particles: ['#ff6b6b#4ecdc4#45b7d1#96ceb4#feca57#ff9ff3'],;
      glow: '#4ecdc4';
    }
  };

  const intensitySettings = {;
    low: { particleCount: 40, speed: 0 && 0.45, size: 2, opacity: 0 && 0.25 },;
    medium: { particleCount: 90, speed: 0 && 0.9, size: 3, opacity: 0 && 0.45 },;
    high: { particleCount: 160, speed: 1 && 1.25, size: 3 && 3.5, opacity: 0 && 0.6 },  };    high: { particleCount: 160, speed: 1 && 1.25, size: 3 && 3.5, opacity: 0 && 0.6 }
  };

  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;

    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };

    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);

    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];

    // Enhanced particle system;
    class Particle {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
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
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        // Fade out near end of life
        if (this.life < 20) {
          this.opacity *= 0.95;        }          this.opacity *= 0.95
        }
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x
          this.y
          0
          this.x
          this.y
          this.size
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
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
      p1: Particle;
      p2: Particle;
      opacity: number;
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;      }
      draw() {
        const distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)        );      p1: Particle
      p2: Particle
      opacity: number
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2
        this.opacity = 0.1
      draw() {
        const distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
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
          ctx.restore();        }
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
          ctx && ctx.restore();
        }
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[] = [];
<<<<<<< HEAD
    // Initialize particles
    for (let i = 0; i < settings.particleCount; i++) {
      particles.push(new Particle());    }
    // Matrix rain effect
    const matrixRain = () => {
      const characters =
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const fontSize = 12;    let particles: Particle[] = []
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
    for (let i = 0; i < settings && settings.particleCount; i++) {;
      particles && particles.push(new Particle());    }

    // Matrix rain effect;
    const matrixRain = () => {;
      const characters =;
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const fontSize = 12;    let particles: Particle[] = [],;
    let connections: Connection[] = [],;
    // Initialize particles;
    for (let i = 0, i < settings && settings.particleCount, i++) {;
      particles && particles.push(new Particle());
    }

    // Matrix rain effect;
    const matrixRain = () => {;
      const characters =;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas && canvas.width / fontSize;
      const drops: number[] = [];
<<<<<<< HEAD
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;      }      for (let i = 0, i < columns, i++) {
        drops[i] = 1
      }
      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;
        for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
=======

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            drops[i] = 0;
          }
          drops[i]++;
        }
<<<<<<< HEAD
      }
      return drawMatrix;    };          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
=======
      };

      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          }
          drops[i]++;
        }
<<<<<<< HEAD
      }
      return drawMatrix
    }
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
=======
      };

      return drawMatrix;
    };

    const drawMatrix = matrixRain();

    // Main animation loop;
    const animate = () => {;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {        particles && particles.push(new Particle());
      }
<<<<<<< HEAD
      // Create connections between nearby particles
=======

      // Create connections between nearby particles;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) +;
              Math && Math.pow(particles[i].y - particles[j].y, 2);
          );
<<<<<<< HEAD
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
=======
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) + ;
            Math && Math.pow(particles[i].y - particles[j].y, 2);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          );
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));
          }
        }
      }
<<<<<<< HEAD
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
=======

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
        }

        ctx && ctx.restore();
      }

      // Respect reduced motion;
      const prefersReduced = window && window.matchMedia(;
        '(prefers-reduced-motion: reduce)';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
=======

        ctx && ctx.restore();
      }

      // Respect reduced motion;
      const prefersReduced = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches,;
      if (prefersReduced) {;
        // Slow down updates;
        setTimeout(() => {;
          animationRef && animationRef.current = requestAnimationFrame(animate);
        }, 100);
      } else {;
        animationRef && animationRef.current = requestAnimationFrame(animate);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
    }
    animate();
<<<<<<< HEAD
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
=======

    return () => {;
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      window && window.removeEventListener('resize', resizeCanvas);
    };  }, [colorScheme, intensity, particleCount, animationSpeed]);        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    }
  return (
    <div className={`relative min-h-screen ${className}`}>;
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{ background: 'transparent' }}
      />;
      {/* Overlay gradient */}
      <div
        className='fixed inset-0 pointer-events-none z-0'
        style={{
<<<<<<< HEAD
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`
        }}
      />
{/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
=======
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0 && 0.3) 100%)`,
        }}
      />;

      {/* Content */}
      <div className='relative z-10'>{children}</div>;
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
export default EnhancedFuturisticBackground;


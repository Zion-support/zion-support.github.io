<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
const colorSchemes = {
  quantum: {
=======
=======
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface EnhancedFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'quantum' | 'cyberpunk' | 'holographic' | 'neural' | 'cosmic';
  particleCount?: number;
  animationSpeed?: number
}

const EnhancedFuturisticBackground: React.FC<EnhancedFuturisticBackgroundProps> = ({
  children;
  className;
const colorSchemes = {
  quantum: {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Wrap around edges if (this.x < 0) this.x = canvas.width;
if (this.x > canvas.width) this.x = 0;
if (this.y < 0) this.y = canvas.height;
if (this.y > canvas.height) this.y = 0;
// Fade out near end of life if (this.life < 20) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}let particles: Particle[] = [];
let connections: Connection[] = [];
// Initialize particles ctx.fill_style = colors.primary;
ctx.font = `$ {
<<<<<<< HEAD
}
import React from 'react';
 const colorSchemes = {;
  quantum: {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
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

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  children;
  class_name = '';
  intensity = 'medium';


    };

    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);

    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];



      x: number;
      y: number;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  fontSize 
}px monospace`;

const EnhancedFuturisticBackground: React.FC<
  EnhancedFuturisticBackgroundProps
> = ({
  children,
  className = '',
  intensity = 'medium',
  colorScheme = 'quantum',
  particleCount = 100,
  animationSpeed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const colorSchemes = {
    quantum: {
      
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
      ],
      glow: '#00ffff',
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
      ],
      glow: '#ff0080',
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
      ],
      glow: '#00ffff',
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
      ],
      glow: '#00ff80',
    },
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
      ],
      glow: '#4ecdc4',
    },
  };

  const intensitySettings = {
    low: { particleCount: 40, speed: 0.45, size: 2, opacity: 0.25 },
    medium: { particleCount: 90, speed: 0.9, size: 3, opacity: 0.45 },
high: { particleCount: 160, speed: 1.25, size: 3.5, opacity: 0.6 },
  };

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
    const colors = colorSchemes[colorScheme];
    const settings = intensitySettings[intensity];
    // Enhanced particle system
    class Particle {
x: number;
      y: number;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
      life: number;
<<<<<<< HEAD
<<<<<<< HEAD

=======
    // Enhanced particle system
    class Particle {
      x: number,
      y: number,
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
      life: number,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
      maxLife: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.vy = (Math.random() - 0.5) * settings.speed * animationSpeed;
        this.size = Math.random() * settings.size + 1;
this.color =
          colors.particles[Math.floor(Math.random() * colors.particles.length)];
        this.opacity = Math.random() * settings.opacity;
        this.life = Math.random() * 100;
        this.maxLife = 100;
      }

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
=======
        // Fade out near end of life
        if (this.life < 20) {
<<<<<<< HEAD
<<<<<<< HEAD
          this.opacity *= 0.95;        }          this.opacity *= 0.95
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          this.opacity *= 0.95

=======
this.opacity *= 0.95;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        }
      }

          this.opacity *= 0.95;        }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        }
      }

      draw() {

        }
      }

      draw() {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        ctx.save();
        ctx.globalAlpha = this.opacity;
<<<<<<< HEAD

        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
=======
// Create gradient for particle
        const gradient = ctx.createRadialGradient(
          this.x
          this.y
          0
          this.x
          this.y
          this.size
        );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
      isDead() {
        return this.life <= 0 |this.opacity < 0.01;      }
        return this.life <= 0 || this.opacity < 0.01;      }        
        ctx.restore()
        return this.life <= 0 || this.opacity < 0.01;      }

      }
      isDead() {

        return this.life <= 0 || this.opacity < 0.01
      }

    }

        return this.life <= 0 || this.opacity < 0.01;      }        

        ctx.restore()
        return this.life <= 0 || this.opacity < 0.01;      }

<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
ctx.restore();
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }
      isDead() {
        return this.life <= 0 || this.opacity < 0.01;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      }
    }
<<<<<<< HEAD
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
      }
    }
<<<<<<< HEAD
<<<<<<< HEAD
    // Connection lines between particles;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    class Connection {

      p1: Particle,
      p2: Particle,
      opacity: number,
constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1
      }
      draw() {
        const distance = Math.sqrt(
          Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
    // Connection lines between particles
    class Connection {
p1: Particle;
      p2: Particle;
      opacity: number;
      constructor(p1: Particle, p2: Particle) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0.1;
      }

      draw() {
        const distance = Math.sqrt(
Math.pow(this.p1.x - this.p2.x, 2) +
            Math.pow(this.p1.y - this.p2.y, 2)
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
ctx.restore();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        }
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[] = [];
<<<<<<< HEAD
<<<<<<< HEAD

    let particles: Particle[] = []
    let connections: Connection[] = []

    // Initialize particles
    for (let i = 0, i < settings.particleCount, i++) {
      particles.push(new Particle())
    }

        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas && canvas.width / fontSize;
      const drops: number[] = [];

      const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

      for (let i = 0, i < columns, i++) {

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        drops[i] = 1
=======
// Initialize particles
    for (let i = 0; i < settings.particleCount; i++) {
      particles.push(new Particle());
    }
    // Matrix rain effect
    const matrixRain = () => {
const characters =
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const fontSize = 12;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];

for (let i = 0; i < columns; i++) {
        drops[i] = 1;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      }
      const drawMatrix = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.primary;
        ctx.font = `${fontSize}px monospace`;
<<<<<<< HEAD
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
=======

for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            drops[i] = 0;
          }
          drops[i]++;
        }
      };
<<<<<<< HEAD
      return drawMatrix
};          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
=======
<<<<<<< HEAD
      return drawMatrix;    };          ctx && ctx.fillText(text, i * fontSize, drops[i] * fontSize);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          if (drops[i] * fontSize > canvas && canvas.height && Math && Math.random() > 0 && 0.975) {;
            drops[i] = 0;
          }
          drops[i]++;
        }
=======

      return drawMatrix;
    };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
=======
particle.draw();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      });
      // Remove dead particles and add new ones
      particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
<<<<<<< HEAD
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {        particles && particles.push(new Particle());
      }
      connections = [];
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) +;
              Math && Math.pow(particles[i].y - particles[j].y, 2);

<<<<<<< HEAD
=======
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
=======
      }
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
      });
;
      // Remove dead particles and add new ones;
      particles = particles.filter (particle => !particle.is_dead ());
      while (particles.length < settings.particle_count) {
        particles.push (new Particle ());      }
      // Create connections between nearby particles;
      connections = [];
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {        particles.push (new Particle ());

      }
      // Create connections between nearby particles;
      connections = [];


          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math && Math.sqrt(;
            Math && Math.pow(particles[i].x - particles[j].x, 2) + ;
            Math && Math.pow(particles[i].y - particles[j].y, 2);


          );
          if (distance < 150) {;
            connections && connections.push(new Connection(particles[i], particles[j]));
            connections.push(new Connection(particles[i], particles[j]))
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }
        }
      }

      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {        particles.push(new Particle())
      }
      // Create connections between nearby particles
      connections = [];
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      for (let i = 0; i < particles.length; i++) {
=======
particles.push(new Particle());
      }

      // Create connections between nearby particles
      connections = [];
for (let i = 0; i < particles.length; i++) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
<<<<<<< HEAD
            connections.push(new Connection(particles[i], particles[j]));          }          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
            Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
            connections.push(new Connection(particles[i], particles[j]))

      }

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
            connections.push(new Connection(particles[i], particles[j]));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
=======
ctx.stroke();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        } else {
          // Draw square;
          ctx.stroke_rect (x - size, y - size, size * 2, size * 2);
        }
<<<<<<< HEAD
<<<<<<< HEAD


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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {        particles.push(new Particle())
      }
      // Create connections between nearby particles
      connections = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {

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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        }
        ctx.restore();
      }
<<<<<<< HEAD
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
      }
    }
    animate();

=======
      }
      window && window.removeEventListener('resize', resizeCanvas)
};  }, [colorScheme, intensity, particleCount, animationSpeed]);        cancelAnimationFrame(animationRef && animationRef.current);
      }
      window && window.removeEventListener('resize', resizeCanvas);
    }
=======
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
        animationRef.current = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => {
      if (animationRef.current) {
cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [colorScheme, intensity, particleCount, animationSpeed]);

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className={`relative min-h-screen ${className}`}>;
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
className='fixed inset-0 w-full h-full pointer-events-none z-0'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        style={{ background: 'transparent' }}
      />;
      {/* Overlay gradient */}
      <div;
        className='fixed inset - 0 pointer - events - none z - 0';
        style={{
<<<<<<< HEAD
<<<<<<< HEAD
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      {/* Overlay gradient */}

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* Content */}
      <div className='relative z-10'>{children}</div>;
    </div>;
=======
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`,
        }}
      />

      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  );
};

export default EnhancedFuturisticBackground;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default EnhancedFuturisticBackground;

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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

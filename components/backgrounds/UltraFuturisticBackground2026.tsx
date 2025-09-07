<<<<<<< HEAD


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode,
  className?: string
}
const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ 
  children,
  className = $2;
  const animationRef = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,
      maxLife: number}> = [],

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      '#ff8000'  // Orange
    ],

    const createParticle = $2;
      let x, y, vx, vy,

      switch (side) {
        case 0: // Top
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 1: // Right
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 2: // Bottom
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
          break,
        case 3: // Left
          x = $2;
          y = $2;
          vx = $2;
          vy = $2;
=======
  children: React.ReactNode;
  className?: string;
const UltraFuturisticBackground2026: React.FC<
  UltraFuturisticBackground2026Props
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({
  children;
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles: Array<{
const UltraFuturisticBackground2026: React.FC<;
  UltraFuturisticBackground2026Props;
> = ({ children, className = '' }) => {  const canvasRef = useRef<HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props> = ({ ;
  children;
  className = '' ;
}) => {;
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight;
    let particles: Array<{;
      x: number;
      y: number;
;
  children: React.ReactNode;
  class_name?: string;
;
const UltraFuturisticBackground2026: React.FC<;
  UltraFuturisticBackground2026Props;
> = ({ children, class_name = '' }) => {  const canvas_ref = useRef < HTMLCanvasElement>(null);const UltraFuturisticBackground2026: React.FC < UltraFuturisticBackground2026Props> = ({
  children;
  class_name = '';
}) => {
  const animation_ref = useRef < number | undefined>(undefined);
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
    canvas.width = window.inner_width;
    canvas.height = window.inner_height;
;
    let particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

>>>>>>> origin/chore/fix-lint-and-merge
interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;}
  className?: string}
}

<<<<<<< HEAD
<<<<<<< HEAD
  className?: string;

=======

;
import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';

interface UltraFuturisticBackground2026Props {
  children: React.ReactNode;
  className?: string;}
}
>>>>>>> origin/chore/fix-lint-and-merge
}

const UltraFuturisticBackground2026: React.FC<UltraFuturisticBackground2026Props    /> = ({children;
  className;

const animationRef = useRef<number | undefined    />(undefined;
  useEffect(() => ;
  const canvas = canvasRef.current;
    if (!canvas) return;

<<<<<<< HEAD
=======
const ctx = canvas.getContext('2d')if (!ctx);
  return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles: Array<{
x: number;
      y: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      vx: number;

      vy: number;
      size: number;
      color: string;
      alpha: number;

      life: number;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
}
      maxLife: number;}
    }> = [];
=======
<<<<<<< HEAD
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

'#ff8000'  // Orange
    ];
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number;
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
      max_life: number;
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
;
    const create_particle = () =>: any {
      const side = Math.floor (Math.random () * 4);
      let x, y, vx, vy;
;
      switch (side) {
        case 0: // Top;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = -10;
          vx = (Math.random () - 0.5) * 2;
          vy = Math.random () * 2 + 1;
          break;
        case 1: // Right;
          coordinate_x = canvas.width + 10;
          coordinate_y = Math.random () * canvas.height;
          vx = -(Math.random () * 2 + 1);
          vy = (Math.random () - 0.5) * 2;
          break;
        case 2: // Bottom;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = canvas.height + 10;
          vx = (Math.random () - 0.5) * 2;
          vy = -(Math.random () * 2 + 1);
          break;
      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      }        x;
        y;
        vx;
        vy;

    const _colors = [
      maxLife: number;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
      life: number
      maxLife: number
    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
    const createParticle = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy,

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width,
          y = -10,
          vx = (Math.random() - 0.5) * 2,
          vy = Math.random() * 2 + 1,
          break,
        case 1: // Right
          x = canvas.width + 10,
          y = Math.random() * canvas.height,
          vx = -(Math.random() * 2 + 1),
          vy = (Math.random() - 0.5) * 2,
          break,
        case 2: // Bottom
          x = Math.random() * canvas.width,
          y = canvas.height + 10,
          vx = (Math.random() - 0.5) * 2,
          vy = -(Math.random() * 2 + 1),
          break,
        case 3: // Left
          x = -10,
          y = Math.random() * canvas.height,
          vx = Math.random() * 2 + 1,
          vy = (Math.random() - 0.5) * 2,
>>>>>>> merged-prs-20250907-203621
          break
      }

      return {
        x,
        y,
        vx,
        vy,

        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100
<<<<<<< HEAD
=======
};        maxLife: Math.random() * 200 + 100
      }
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };        maxLife: Math && Math.random() * 200 + 100;
    };
    const initParticles = () => {
      particles = [];
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
      }
    };
    const initParticles = () => {;
      particles = [];
      for (let i = 0; i < 100; i++) {;
        particles && particles.push(createParticle());      for (let i = 0, i < 100, i++) {;
        particles && particles.push(createParticle());
      }

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        }
// Draw particle
      '#ff8000', // Orange    ];      '#ff8000'  // Orange
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

    const colors = [
      '#00ffff', // Cyan
      '#ff00ff', // Magenta
      '#ffff00', // Yellow
      '#00ff00', // Green
      '#ff0080', // Pink
      '#8000ff', // Purple
      '#0080ff', // Blue
      life: number;
=======
<<<<<<< HEAD
const colors = [
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
'#ff8000', // Orange;
>>>>>>> origin/chore/fix-lint-and-merge
=======
      max_life: number;    }> = [];      coordinate_x: number,
      coordinate_y: number,

      vx: number,
      vy: number,
      size: number,
      color: string,
      alpha: number,
      life: number,

      '#ff8000'  // Orange

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    ];

const createParticle = (
     ;
  const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;
      switch (side) {
<<<<<<< HEAD
        case 0: // Top
          x = Math.random() * canvas.width;
<<<<<<< HEAD
      life: number;maxLife: number;
    }>  = [];const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
'#ff8000', // Orange;
    ];
    const createParticle = () => {const side = Math.floor(Math.random() * 4)let x, y, vx, vy;
      switch (side) {case 0: // Top;
          x  = Math.random() * canvas.width;const colors = [;
=======
<<<<<<< HEAD
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
=======

      maxLife: number;    }> = [];      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      alpha: number,;
      life: number,;
      maxLife: number;
=======
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      max_life: number;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const colors = [;
      '#00ffff', // Cyan;
      '#ff00ff', // Magenta;
      '#ffff00', // Yellow;
      '#00ff00', // Green;
      '#ff0080', // Pink;
      '#8000ff', // Purple;
      '#0080ff', // Blue;
      '#ff8000', // Orange    ];      '#ff8000'  // Orange;
    ];
<<<<<<< HEAD
      particles = [];
      for (let i = 0; i < 100; i++) {particles && particles.push(createParticle())}        x;
=======
;
    const create_particle = () =>: any {
      const side = Math.floor (Math.random () * 4);
      let x, y, vx, vy;
;
      switch (side) {
        case 0: // Top;
          coordinate_x = Math.random () * canvas.width;
          coordinate_y = -10;
          vx = (Math.random () - 0.5) * 2;
          vy = Math.random () * 2 + 1;

<<<<<<< HEAD
          y = -10;
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          break;
        case 1: // Right
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1);
          vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1);
          break;
<<<<<<< HEAD
        case 3: // Left
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
          break;
      }
      return {
        x
        y
        vx
        vy,        size: Math.random() * 3 + 1
        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };    }
    const initParticles = () => {
=======


      return {;
        x,;
        y,;
        vx,;
        vy,        size: Math && Math.random() * 3 + 1,;
        color: colors[Math && Math.floor(Math && Math.random() * colors && colors.length)],;
        alpha: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
        life: 0,;
        maxLife: Math && Math.random() * 200 + 100,;
      };    };

    const initParticles = () => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      }        x;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        y;
        vx;
        vy;y = -10;
          y = -10;
=======
        case 0: // Top;
x = Math.random() * canvas.width;

          y = -10;

>>>>>>> origin/chore/fix-lint-and-merge
          vx = (Math.random() - 0.5) * 2;
          vy = Math.random() * 2 + 1;
          break;
        case 1: // Right;
          x = canvas.width + 10;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 2 + 1)vy = (Math.random() - 0.5) * 2;
          break;
        case 2: // Bottom;
          x = Math.random() * canvas.width;
          y = canvas.height + 10;
          vx = (Math.random() - 0.5) * 2;
          vy = -(Math.random() * 2 + 1)break;
        case 3: // Left;
          x = -10;
          y = Math.random() * canvas.height;
          vx = Math.random() * 2 + 1;
          vy = (Math.random() - 0.5) * 2;
break;) => {
  return $3;}
}
      }
<<<<<<< HEAD
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100,}}const initParticles = () => {particles = [];
=======
      return {x,y,vx,vy,size: Math.random() * 3 + 1,color: colors[Math.floor(Math.random() * colors.length)],alpha: Math.random() * 0.8 + 0.2,life: 0,maxLife: Math.random() * 200 + 100}}

const initParticles = (particles = [];) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
for (let i = 0; i < 100; i++) {particles.push(createParticle())}
    }

const animate = (ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
<<<<<<< HEAD
        vy;
<<<<<<< HEAD
        // Draw particle
        ctx.save();
=======
<<<<<<< HEAD
        color: colors[Math.floor(Math.random() * colors.length)]
        alpha: Math.random() * 0.8 + 0.2
        life: 0
        maxLife: Math.random() * 200 + 100
      };        maxLife: Math.random() * 200 + 100
      }
    }
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
>>>>>>> merged-prs-20250907-203621
      }
    },

    const initParticles = $2;
      for (let i = 0, i < 100, i++) {
        particles.push(createParticle())
      }
    },

    const animate = () => {
      ctx.clearRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {
<<<<<<< HEAD
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life++,

        if (particle.life > particle.maxLife || 
            particle.x < -20 || particle.x > canvas.width + 20 ||
            particle.y < -20 || particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        }

        // Draw particle
        ctx.save($2);
        ctx.globalAlpha = $2;
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        // Draw glow effect
        const gradient = ctx.createRadialGradient($2);
        gradient.addColorStop($2);
        gradient.addColorStop($2);
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = $2;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          if (distance < 100) {
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke()
          }
        })
      }),

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)',
      ctx.lineWidth = $2;
      const gridSize = $2;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke()
=======
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        if (
          particle.life > particle.maxLife |
          particle.x < -20 |
          particle.x > canvas.width + 20 |
          particle.y < -20 |
          particle.y > canvas.height + 20
        ) {
          particles[index] = createParticle();        }        if (particle.life > particle.maxLife |
            particle.x < -20 |particle.x > canvas.width + 20 |
            particle.y < -20 |particle.y > canvas.height + 20) {
          particles[index] = createParticle()
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x
          particle.y
          0
          particle.x
          particle.y
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======

        particle.life++;

if (
          particle.life > particle.maxLife ||
          particle.x < -20 ||
          particle.x > canvas.width + 20 ||
          particle.y < -20 ||
          particle.y > canvas.height + 20;
        ) {
          particles[index] = createParticle();) => {
  return $3;}
}
        }

        // Draw particle;
<<<<<<< HEAD
ctx.save();
>>>>>>> origin/chore/fix-lint-and-merge
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
<<<<<<< HEAD
        // Draw glow effect
        const gradient = ctx.createRadialGradient(
        particle.life++;if (particle.life > particle.maxLife ||;
          particle.x < -20 ||;
          particle.x > canvas.width + 20 ||;
          particle.y < -20 ||;
          particle.y > canvas.height + 20;
        ) {particles[index] = createParticle()}// Draw particle;
        ctx.save()ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()// Draw glow effect;
        const gradient = ctx.createRadialGradient()gradient && gradient.addColorStop(0, particle && particle.color)gradient && gradient.addColorStop(1, 'transparent')ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath()ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 3, 0, Math && Math.PI * 2)ctx && ctx.fill()ctx && ctx.restore()})ctx && ctx.restore()}))if (distance < 100) {ctx && ctx.beginPath()ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y)ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y)ctx && ctx.stroke()}
        })})ctx && ctx.stroke()}
        })particle.x,particle.y,0,particle.x,particle.y,particle.size * 3;
        )gradient.addColorStop(0, particle.color)gradient.addColorStop(1, 'transparent')ctx.fillStyle = gradient;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {particles.slice(i + 1).forEach(particle2 => {const distance = Math.sqrt(Math.pow(particle1.x - particle2.x, 2) +;
=======
=======
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.alpha;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        // Draw glow effect;
const gradient = ctx.createRadialGradient(

<<<<<<< HEAD
particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3;
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
ctx.restore();
      });
      // Draw connecting lines between nearby particles;
ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {particles.slice(i + 1).forEach(particle2 = > ;}
  const distance = Math.sqrt(Math.pow(particle1.x - particle2.x, 2) +;}
>>>>>>> origin/chore/fix-lint-and-merge
              Math.pow(particle1.y - particle2.y, 2))if (distance < 100) {ctx.beginPath()ctx.moveTo(particle1.x, particle1.y)ctx.lineTo(particle2.x, particle2.y)ctx.stroke()}
        })})// Draw grid pattern;
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
      const gridSize = 50;
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        );
        gradient && gradient.addColorStop(0, particle && particle.color);
        gradient && gradient.addColorStop(1, 'transparent');
        ctx && ctx.fillStyle = gradient;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 3, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
<<<<<<< HEAD
=======
<<<<<<< HEAD
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 1;
      particles && particles.forEach((particle1, i) => {;
        particles && particles.slice(i + 1).forEach(particle2 => {;
          const distance = Math && Math.sqrt(;
            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) +;
              Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2)          );            Math && Math.pow(particle1 && particle1.x - particle2 && particle2.x, 2) + ;
            Math && Math.pow(particle1 && particle1.y - particle2 && particle2.y, 2);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          );
          if (distance < 100) {;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle1 && particle1.x, particle1 && particle1.y);
            ctx && ctx.lineTo(particle2 && particle2.x, particle2 && particle2.y);
            ctx && ctx.stroke();
          }
        });      });            ctx && ctx.stroke();
          }
        });
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            Math.pow(particle1.x - particle2.x, 2) + 
        ctx.restore();      });        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) +
              Math.pow(particle1.y - particle2.y, 2)          );            Math.pow(particle1.x - particle2.x, 2) +
            Math.pow(particle1.y - particle2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
<<<<<<< HEAD
      });
=======
<<<<<<< HEAD
            ctx.stroke()
          }
        })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const gridSize = 50;

<<<<<<< HEAD
for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);}
        ctx.stroke();}
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const gridSize = 50;
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
        case 3: // Left;
          coordinate_x = -10;
          coordinate_y = Math.random () * canvas.height;
          vx = Math.random () * 2 + 1;
          vy = (Math.random () - 0.5) * 2;
          break;
      }
      return {
        x,
        y,
        vx,
        vy,        size: Math.random () * 3 + 1,
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      }        x;
        y;
        vx;
        vy;
        color: colors[Math.floor (Math.random () * colors.length)],
        alpha: Math.random () * 0.8 + 0.2,
        life: 0,
        max_life: Math.random () * 200 + 100,
      }        max_life: Math.random () * 200 + 100;
      }
    }
;
    const init_particles = () =>: any {
      particles = [];
      for (let index = 0; i < 100; i++) {
        particles.push (create_particle ());      for (let index = 0, i < 100, i++) {
        particles.push (create_particle ());
      }
    }
;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
;
        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();        }        // Check condition
if ( {) {
  $2
}
          particles[index] = create_particle ();
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.alpha;
        ctx.fill_style = particle.color;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
;
        // Draw glow effect;
        const gradient = ctx.createRadialGradient (
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3        );          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3);
        gradient.addColorStop (0, particle.color);
        gradient.addColorStop (1, 'transparent');
        ctx.fill_style = gradient;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 1;
      particles.for_each ((particle1, i) => {
        particles.slice (i + 1).for_each (particle2 => {
          const distance = Math.sqrt (
            Math.pow (particle1.x - particle2.x, 2) +;
              Math.pow (particle1.y - particle2.y, 2)          );            Math.pow (particle1.x - particle2.x, 2) +;
            Math.pow (particle1.y - particle2.y, 2));
          // Check condition
if ( {) {
  $2
}
            ctx.begin_path ();
            ctx.move_to (particle1.x, particle1.y);
            ctx.line_to (particle2.x, particle2.y);
            ctx.stroke ();
          }
        });      });            ctx.stroke ();
          }
        });
      });
;
      // Draw grid pattern;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.05)';
      ctx.line_width = 0.5;
      const grid_size = 50;
      for (let coordinate_x = 0; x < canvas.width; x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();
      }
      for (let coordinate_y = 0; y < canvas.height; y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
>>>>>>> merged-prs-20250907-203621
      }
      animation_ref.current = requestAnimationFrame (animate);    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();
<<<<<<< HEAD
=======

<<<<<<< HEAD
      animationRef.current = $2;
    const handleResize = $2;
      canvas.height = $2;
    window.addEventListener($2);
    initParticles($2);
    animate($2);
    return () => {
      window.removeEventListener($2);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
      for (let coordinate_y = 0, y < canvas.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
<<<<<<< HEAD
        ctx.line_to (canvas.width, y);}
        ctx.stroke ();}
=======
        ctx.line_to (canvas.width, y);
        ctx.stroke ();
      }
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      canvas.height = window.innerHeight
    };


<<<<<<< HEAD
      canvas.height = window.innerHeight
    };
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      animationRef && animationRef.current = requestAnimationFrame(animate);    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      for (let y = 0, y < canvas && canvas.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
<<<<<<< HEAD
=======


<<<<<<< HEAD
      animationRef.current = requestAnimationFrame(animate)
}


const handleResize = (
      canvas.width = window.innerWidth;
canvas.height = window.innerHeight) => {
  return $3;}
}
}


<<<<<<< HEAD
      if (animationRef.current) {
}
cancelAnimationFrame(animationRef.current);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      animationRef && animationRef.current = requestAnimationFrame(animate);
    };
    const handleResize = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;      canvas && canvas.height = window && window.innerHeight;
    };
    window && window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {;
      window && window.removeEventListener('resize', handleResize);
      if (animationRef && animationRef.current) {;
        cancelAnimationFrame(animationRef && animationRef.current);
<<<<<<< HEAD
        cancelAnimationFrame(animationRef.current)

      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);
        cancelAnimationFrame(animationRef.current)
=======

      }
    };  }, []);        cancelAnimationFrame(animationRef && animationRef.current);

=======
        cancelAnimationFrame(animationRef.current)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
    };
>>>>>>> origin/chore/fix-lint-and-merge
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}    />
>>>>>>> merged-prs-20250907-203621

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
<<<<<<< HEAD
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
=======
      <canvas;
<<<<<<< HEAD
        ref={canvasRef}
<<<<<<< HEAD
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div"
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{}
          }}
        />;
        <motion&& motion.div'
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{}
          transition={{}
            duration: 6;
            repeat: Infinity'
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div"
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{}
            y: [0, -20, 0]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
          }}
=======
<<<<<<< HEAD
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>;
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
      animation_ref.current = requestAnimationFrame (animate);
    }
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
    init_particles ();
    animate ();
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }  }, []);        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, []);
;
  return (
    <div className={`relative min - h-screen overflow - hidden ${class_name}`}>;
      {/* Animated Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background:;
            'linear - gradient (135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      />;
      {/* Floating Geometric Shapes */}
      <div className='fixed inset - 0 pointer - events - none z - 10'>;
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20';
          animate={{
=======


          animate={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rotate: 360,
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],          }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          transition={{
className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
>>>>>>> merged-prs-20250907-203621
      <div className = $2;
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
<<<<<<< HEAD
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
=======
>>>>>>> merged-prs-20250907-203621
          transition = $2;
            repeat: Infinity,
<<<<<<< HEAD
            ease: "linear"
          }}
        />
        <motion.div
<<<<<<< HEAD
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "linear"
          }}
=======
=======
            ease: 'linear',      />;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">;
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
          }}
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />;
        <motion&& motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
        }}
      />;
=======
ref={canvasRef}

className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'}
}
        }}
         />;
>>>>>>> origin/chore/fix-lint-and-merge
      {/* Floating Geometric Shapes */}

      <div className='fixed inset-0 pointer-events-none z-10'    />
        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]}
            opacity: [0.3, 0.6, 0.3]}
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]}
            opacity: [0.2, 0.5, 0.2]}
          }}
          transition={{
            duration: 6,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />;
        <motion&& motion.div;
className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{

            rotate: [0, 180, 360]}
            scale: [1, 1.1, 1]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear'}
}
          }}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]
          }
          transition = $2;
            repeat: Infinity,
<<<<<<< HEAD
            ease: "linear"
          }}
        />
=======
          transition={{
            duration: 10
            repeat: Infinity
        <motion&& motion.div;
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12;
          animate={{transition={{duration: 10;
            repeat: Infinity;
            ease: linear'}}          }}
        />;
        <motion&& motion.div
          className=absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
<<<<<<< HEAD
        <motion&& motion.div;
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12';
          animate={{transition={{duration: 10;
            repeat: Infinity;
=======
          transition={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      

<<<<<<< HEAD
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating Geometric Shapes */}
      <div className="fixed inset - 0 pointer - events - none z - 10">;
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20";
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3];
<<<<<<< HEAD

        // Draw particle
        ctx.save(),
        ctx.globalAlpha = particle.alpha,
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),

        // Draw glow effect
        const _gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        ),
        gradient.addColorStop(0, particle.color),
        gradient.addColorStop(1, 'transparent'),
        ctx.fillStyle = gradient,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 1,
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particle1.x, particle1.y),
            ctx.lineTo(particle2.x, particle2.y),
            ctx.stroke()
          }
        })
      }),

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)',
      ctx.lineWidth = 0.5,
      const gridSize = 50
      for (let x = 0, x < canvas.width, x += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, canvas.height),
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(canvas.width, y),
        ctx.stroke()
      }

      animationRef.current = requestAnimationFrame(animate)
    },

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),
    initParticles(),
    animate(),

    return () => {
      window.removeEventListener('resize', handleResize),
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []),

  return (
    <div className={_`relative min-h-screen overflow-hidden ${className}`}>
      {_/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)' }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className=&quot;fixed inset-0 pointer-events-none z-10&quot;>
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20&quot;
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
ease: "linear"
          }}
=======
            ease: "linear"
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - pink - 400 / 20 rounded - full";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45';
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - purple - 400 / 20 transform rotate - 45";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1];
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion.div;
          className='absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div;
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12";
          animate={{rotate: [0, -180, -360];
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4];
          }}
          transition={{duration: 10;
            repeat: Infinity;
            ease: 'linear',            ease: "linear";
          animate={{rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];rotate: [0, -180, -360],opacity: [0.4, 0.7, 0.4],}}
          transition={{duration: 10,repeat: Infinity,ease: 'linear',}}
          transition={{/>;
      </div>;{/* Energy Field Effects */}/>;
      </div>;
      {/* Energy Field Effects */}
<div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
<<<<<<< HEAD
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
=======
          className="absolute bottom - 20 right - 20 w - 28 h - 28 border border - green - 400 / 20 transform rotate - 12";
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
            }
            "rotate": 360,
            "scale": [1, 1.2, 1],
            "opacity": [0.3, 0.6, 0.3]
=======
          transition={{rotate: [0, 180, 360],scale: [1, 1.1, 1]}}
          transition={{duration: 12,repeat: Infinity,ease: 'linear'}}
           />;

        <motion&& motion.div;
className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{

            rotate: [0, -180, -360]}
            opacity: [0.4, 0.7, 0.4]}
>>>>>>> origin/chore/fix-lint-and-merge
          }}
          transition={{
            duration: 10,
            repeat: Infinity}
ease: 'linear'}
          }}
          transition={{
<<<<<<< HEAD
            duration: 6,
            repeat: Infinity,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
          transition={{}
          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'linear',          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}
          transition={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: 'linear',          }}          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{}
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
        />;
        <motion&& motion.div'
          className=absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45
          animate={{}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'linear}}
        />;
        <motion&& motion.div"
          className=absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45
          animate={{}
            rotate: [0, 180, 360]
            scale: [1, 1 && 1.1, 1]
          }}

          }}
        />;
        <motion&& motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{}
          transition={{}
            duration: 10;
            repeat: Infinity
            ease: linear'}}          }}
        />;
        <motion&& motion.div"
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12
          animate={{}
            rotate: [0, -180, -360]
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]

          }}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: linear,            ease: "linear"
          animate={{}
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
            rotate: [0, -180, -360],
            opacity: [0.4, 0.7, 0.4]}}
          transition={{
<<<<<<< HEAD
            }
            "duration": 10,
            "repeat": Infinity,
"ease": 'linear','
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition={{ />;

      </div>;


      {/* Energy Field Effects */}


        />
      </div>
      {/* Energy Field Effects */}
<<<<<<< HEAD
<div className='fixed inset-0 pointer-events-none z-20'>
        <motion.div
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion&& motion.div'
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent''"
=======
      <div className='fixed inset-0 pointer-events-none z-20'>



        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
<<<<<<< HEAD
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
        />;
      </div>;
      {/* Energy Field Effects */}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ease: 'linear',            ease: "linear";
          }}
        />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'>;'
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';'
            'duration': 10,'repeat': Infinity, />;
      </div>;
      {/* Energy Field Effects */}

            ease: 'linear',            ease: linear";
          }}
        />;
      </div>;

          }}

          }

            'duration': 20,
            'repeat': Infinity


          }} />
>>>>>>> merged-prs-20250907-203621
      </div>

      {/* Energy Field Effects */}
      <div className = $2;
            repeat: Infinity,
            ease: linear"
          }}
        />
        <motion.div
            coordinate_x: ['-100%', 100%]}}
          transition={{
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent
      <div className='fixed inset-0 pointer-events-none z-20'>;
        <motion.div;
          className=absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent;
          animate={{coordinate_x: ['-100%', 100%]}}
          transition={{className=absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent";
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent;
          animate={{
            coordinate_x: [-100%100%];
=======
           />;
}
      </div>;}
      {/* Energy Field Effects */}
<div className='fixed inset-0 pointer-events-none z-20'    />;
        <motion.div;
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'    />;
        <motion&& motion.div;
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent';
            ease: 'linear',
  ease: \'linear\';
          }}
           />;
      </div>;
      {/* Energy Field Effects */}
      <div className='fixed inset - 0 pointer - events - none z - 20'    />;
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent';
<<<<<<< HEAD
            duration: 10,repeat: Infinity,   />;
      </div>;
      {/* Energy Field Effects */}
=======
            ctx.stroke();
          }
        });      });            ctx.stroke()
          }
        })
      });
      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      animationRef.current = requestAnimationFrame(animate);    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      for (let y = 0, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    initParticles();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };  }, []);        cancelAnimationFrame(animationRef.current)
      }
    }
  }, []);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
        }}
      />
      {/* Floating Geometric Shapes */}
      <div className='fixed inset-0 pointer-events-none z-10'>
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20'
          animate={{
            rotate: 360
            scale: [1, 1.2, 1]
            opacity: [0.3, 0.6, 0.3],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear',      />
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20"
          animate={{
            rotate: 360
            scale: [1, 1.2, 1];
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full'
          animate={{
            y: [0, -20, 0]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-pink-400/20 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45'
          animate={{
            rotate: [0, 180, 360]
            scale: [1, 1.1, 1],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-purple-400/20 transform rotate-45"
          animate={{
            rotate: [0, 180, 360];
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12'
          animate={{
            rotate: [0, -180, -360]
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/20 transform rotate-12"
          animate={{
            rotate: [0, -180, -360];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            duration: 10,
            repeat: Infinity,

          }}

            duration: 10,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}

          }}

        />
      </div>
      {/* Energy Field Effects */}
      <div className='fixed inset-0 pointer-events-none z-20'>

        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
          animate={{
            coordinate_x: ['-100%', '100%'],          }}
          transition={{
<<<<<<< HEAD
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
            duration: 15
            repeat: Infinity
            ease: 'linear',        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
          animate={{
            x: ['-100%100%']
          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      <div className='fixed inset-0 pointer-events-none z-20'    />

<<<<<<< HEAD
        <motion.div;
className='absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent'
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
=======
            ease: 'linear',        <motion.div;
          className="absolute inset - 0 bg - gradient - to - r from - transparent via - cyan - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            coordinate_x: ['-100%100%'];
          }}
          transition={{
<<<<<<< HEAD
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
        <motion.div;
          className='absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent';
          animate={{
            coordinate_y: ['-100%', '100%'],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'linear',          }}          }}
        />;
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
<<<<<<< HEAD
          className = $2;
            repeat: Infinity,
            ease: "linear"
          }}
=======
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
=======


          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
=======
        <motion.div;
          className="absolute inset - 0 bg - gradient - to - b from - transparent via - purple - 500 / 5 to - transparent";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
}
            x: ['-100%', '100%']}
          }}
          transition={{
            duration: 15,
            repeat: Infinity}
ease: 'linear'}
          }}
           />
        <motion.div;
className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'
          animate={{}
            y: ['-100%', '100%']}
          }}
          transition={{
<<<<<<< HEAD
            duration: 20,
            repeat: Infinity
}
ease: 'linear'}
>>>>>>> origin/chore/fix-lint-and-merge
          }}

          }}

            duration: 20,
<<<<<<< HEAD
            repeat: Infinity,
            ease: 'linear',            ease: linear"
          }}

          }}

            duration: 20,
            repeat: Infinity}}
=======
            repeat: Infinity
=======
<<<<<<< HEAD
=======

            duration: 20,
            repeat: Infinity,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}


            duration: 20,
            repeat: Infinity,

          }}


            duration: 20,
            repeat: Infinity,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


          }}
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
           />
=======


        />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>
      {/* Content */}
<<<<<<< HEAD
      <div className=relative z-30>{children}</div>
=======
>>>>>>> origin/chore/fix-lint-and-merge

<div className='relative z-30'    />{children}</div>

      {/* Holographic Overlay */}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      <div className='fixed inset-0 pointer-events-none z-40'    />
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent'    />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent'    />
>>>>>>> origin/chore/fix-lint-and-merge
=======
      <div className='fixed inset-0 pointer-events-none z-40'>;
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />;
      </div>;
    </div>;
  );
}
            ease: 'linear',            ease: "linear";
<<<<<<< HEAD
            duration: 20,
            repeat: Infinity,
ease: 'linear',            ease: "linear";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />;
      </div>;
      {/* Content */}
      <div className='relative z - 30'>{children}</div>;
      {/* Holographic Overlay */}
      <div className='fixed inset - 0 pointer - events - none z - 40'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent' />;
        <div className='absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent' />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="relative z-30">
        {children}
      </div>


      {/* Holographic Overlay */}

<<<<<<< HEAD
      <div className="relative z-30">
        {children}
      </div>
      {/* Holographic Overlay */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="fixed inset-0 pointer-events-none z-40">;
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />;
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />;
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
            duration: 20
            repeat: Infinity
            ease: 'linear',            ease: "linear"
          }}
            duration: 20,
            repeat: Infinity,

          }

            duration: 20,
            repeat: Infinity,
            ease: 'linear',            ease: "linear"
          }}
=======


export default UltraFuturisticBackground2026;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          }

>>>>>>> merged-prs-20250907-203621
        />
      </div>
      {/* Content */}
<<<<<<< HEAD

      {/* Holographic Overlay */}'
      <div className='fixed inset-0 pointer-events-none z-40'>;'
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />;'
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
=======
      <div className='relative z-30'>{children}</div>
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
      </div>
    </div>
  );
}
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default UltraFuturisticBackground2026;
      <div className="fixed inset - 0 pointer - events - none z - 40">;
        <div className="absolute inset - 0 bg - gradient - to - br from - transparent via - cyan - 400 / 2 to - transparent" />;
        <div className="absolute inset - 0 bg - gradient - to - tl from - transparent via - purple - 400 / 2 to - transparent" />;
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2026;
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Holographic Overlay */}
      <div className='fixed inset-0 pointer-events-none z-40'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent' />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      </div>
    </div>
  );
}
export default UltraFuturisticBackground2026;
      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
}
export default UltraFuturisticBackground2026;
      {/* Holographic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/2 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/2 to-transparent" />
      </div>
    </div>
  )
}
export default UltraFuturisticBackground2026;

<<<<<<< HEAD
"
=======

export default UltraFuturisticBackground2026;


<<<<<<< HEAD
"
=======
<<<<<<< HEAD

export default UltraFuturisticBackground2026;
export default UltraFuturisticBackground2026;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

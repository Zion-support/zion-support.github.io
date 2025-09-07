<<<<<<< HEAD
=======
<<<<<<< HEAD
const UltraFuturisticBackground2029: React.FC = () => {
    canvas.height = window.innerHeight;
    let animationFrameId: number,
    const particles: Array<{
      x: number,
      y: number,
  const canvas_ref = useRef < HTMLCanvasElement>(null);
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
    canvas.height = window.inner_height,
    let animationFrameId: number;
    const particles: Array<{
      coordinate_x: number,
      coordinate_y: number,

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const UltraFuturisticBackground2029: React.FC = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    let animationFrameId: number,

    const particles: Array<{
      x: number,
      y: number,
=======
    let animationFrameId: number

    const particles: Array<{
      x: number,
      y: number,

>>>>>>> merged-prs-20250907-203621
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number,
<<<<<<< HEAD
      life: number}> = [],

    // Initialize particles
=======

>>>>>>> merged-prs-20250907-203621
    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      })
    }
<<<<<<< HEAD

    const animate = () => {
      ctx.clearRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life--,

        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
            opacity: Math.random() * 0.8 + 0.2,
            life: Math.random() * 100 + 50
          }
        }

        // Draw particle with glow effect
        ctx.save($2);
        ctx.globalCompositeOperation = $2;
        // Outer glow
        ctx.shadowColor = $2;
        ctx.shadowBlur = $2;
        ctx.fillStyle = $2;
        ctx.globalAlpha = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        // Inner particle
        ctx.globalAlpha = $2;
        ctx.shadowBlur = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = $2;
      ctx.globalCompositeOperation = $2;
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = $2;
          const dy = $2;
          const distance = Math.sqrt($2);
          if (distance < 100) {
            ctx.globalAlpha = $2;
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke()
=======
const animate = () => {
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2029: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    let animationFrameId: number;
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number
    }> = [];
    // Initialize particles
    for (let i = 0; i < 50; i++) {    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 0.5
        vy: (Math.random() - 0.5) * 0.5
        size: Math.random() * 3 + 1
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
          Math.floor(Math.random() * 5)
        ]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
        opacity: Math.random() * 0.8 + 0.2
        life: Math.random() * 100 + 50
      })
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width
            y: Math.random() * canvas.height
            vx: (Math.random() - 0.5) * 0.5
            vy: (Math.random() - 0.5) * 0.5
            size: Math.random() * 3 + 1
            color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          };        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)]
            opacity: Math.random() * 0.8 + 0.2
            life: Math.random() * 100 + 50
          }
        // Draw particle with glow effect
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        // Inner particle
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();      });        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 0.5;
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);    };            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke()
      animationFrameId = requestAnimationFrame(animate)

      animationFrameId = requestAnimationFrame(animate)
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
    };
    window && window.addEventListener('resize', handleResize);
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
const UltraFuturisticBackground2029: React.FC = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,


<<<<<<< HEAD
<<<<<<< HEAD
    canvas.width = $2;
    canvas.height = $2;
    let animationFrameId: number,
=======
>>>>>>> merged-prs-20250907-203621
          }
        // Draw particle with glow effect;
        ctx && ctx.save();
        ctx && ctx.globalCompositeOperation = 'screen';
        // Outer glow;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 20;
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity * 0 && 0.3;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size * 2, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        // Inner particle;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.shadowBlur = 10;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(0, 255, 255, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      ctx && ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {          const dx = particles[i].x - particles[j].x;      for (let i = 0, i < particles && particles.length, i++) {;
        for (let j = i + 1, j < particles && particles.length, j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {;
            ctx && ctx.globalAlpha = ((100 - distance) / 100) * 0 && 0.3;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }
        }
      }

<<<<<<< HEAD
      animationFrameId = $2;
    animate($2);
    const handleResize = $2;
      canvas.height = $2;
    window.addEventListener($2);
    return () => {
      window.removeEventListener($2);
      cancelAnimationFrame(animationFrameId)
    }
  }, []),

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
const UltraFuturisticBackground2029: React.FC;

<<<<<<< HEAD
    // Initialize particles
    for (let i = 0, i < 50, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.8 + 0.2,
        life: Math.random() * 100 + 50
      })
    }

    const animate = () => {
      ctx.clearRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {

      life: number;
    }> = [];// Initialize particles;
    for (let index = 0; i < 50; i++) {    for (let index = 0, i < 50, i++) {particles.push ({coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 0.5,vy: (Math.random () - 0.5) * 0.5,size: Math.random () * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
          Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50,})}        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50;
      })const animate = () =>: any {ctx.clear_rect (0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.for_each ((particle, index) => {import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
const UltraFuturisticBackground2029: React.FC;
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particles.forEach((particle, index) => {particle.x += particle.vx;
          particles[index] = {coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 0.5,vy: (Math.random () - 0.5) * 0.5,size: Math.random () * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
              Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50,}        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50;
          }
        // Draw particle with glow effect;
        ctx.save ()ctx.globalCompositeOperation = 'screen';// Outer glow;
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    };
    animate();



    };
    window && window.addEventListener('resize', handleResize);



      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      life: number;
    }> = [];
;
    // Initialize particles;
    for (let index = 0; i < 50; i++) {    for (let index = 0, i < 50, i++) {
      particles.push ({
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 0.5,
        vy: (Math.random () - 0.5) * 0.5,
        size: Math.random () * 3 + 1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
          Math.floor (Math.random () * 5);
        ],
        opacity: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50,
      });    }        color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],
        opacity: Math.random () * 0.8 + 0.2,
        life: Math.random () * 100 + 50;
      });
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
const animate = (
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
particles.forEach((particle, index) => {
>>>>>>> origin/chore/fix-lint-and-merge
        particle.x += particle.vx;

        particle.y += particle.vy;
<<<<<<< HEAD
        particle.life--;
;
        // Check condition
if ( {) {
  $2
}
          particles[index] = {coordinate_x: Math.random () * canvas.width,coordinate_y: Math.random () * canvas.height,vx: (Math.random () - 0.5) * 0.5,vy: (Math.random () - 0.5) * 0.5,size: Math.random () * 3 + 1,color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][;
              Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50,}        }            color: ['#00ffff#ff00ff#ffff00#00ff00#ff0080'][Math.floor (Math.random () * 5)],opacity: Math.random () * 0.8 + 0.2,life: Math.random () * 100 + 50;
          }
        // Draw particle with glow effect;
        ctx.save ();
        ctx.globalCompositeOperation = 'screen';
;
        // Outer glow;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 20;
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity * 0.3;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill ();
;
        // Inner particle;
        ctx.global_alpha = particle.opacity;
        ctx.shadow_blur = 10;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill ();
        ctx.restore ();      });        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;'
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;'
      ctx.globalCompositeOperation = 'screen';
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()ctx.restore()})// Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
=======
        particle.life--;// Check condition;
if ( {) {$2;) => {
  return $3;}
}
}

          particles[index] = {

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][
              Math.floor(Math.random() * 5)
            ],
            opacity: Math.random() * 0.8 + 0.2}
            life: Math.random() * 100 + 50}
          };
        }

        // Draw particle with glow effect;
ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // Outer glow;
ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)ctx.fill()// Inner particle;
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
ctx.restore();
>>>>>>> origin/chore/fix-lint-and-merge
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (0, 255, 255, 0.1)';
      ctx.line_width = 0.5;
      ctx.globalCompositeOperation = 'screen';


for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;

const dy = particles[i].y - particles[j].y;
}
const distance = Math.sqrt(dx * dx + dy * dy)if (distance < 100) {ctx.globalAlpha = ((100 - distance) / 100) * 0.3;}
            ctx.beginPath()ctx.moveTo(particles[i].x, particles[i].y)ctx.lineTo(particles[j].x, particles[j].y)ctx.stroke()}
        }
      }animationFrameId = requestAnimationFrame(animate)}animate(;
  const handleResize = (canvas.width = window.innerWidth;
canvas.height = window.innerHeight) => {
  return $3;}
}
};


    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);}
cancelAnimationFrame(animationFrameId)}
};

  }, []);
;
  return (
<<<<<<< HEAD
    <div className='fixed inset - 0 pointer - events - none overflow - hidden z - 0'    />;

=======
    <div className='fixed inset - 0 pointer - events - none overflow - hidden z - 0'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ background: 'transparent' }}
<<<<<<< HEAD
      {/* Animated gradient background *}
}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'    />;

        <motion&& motion.div;
className='absolute inset-0 opacity-30'
=======
<<<<<<< HEAD
      />;
=======

      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>;
        <motion&& motion.div
          className='absolute inset-0 opacity-30'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
            background: [
<<<<<<< HEAD
=======

<<<<<<< HEAD
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'}
            ]}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)',
      />;
      {/* Animated gradient background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black'>;
        <motion.div;
          className='absolute inset - 0 opacity - 30';
          animate={{
            background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ],          }}
          transition={{
            duration: 20,
            repeat: Infinity,
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId)
    }
  }, []);
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">;
            ease: 'easeInOut',          }}  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events - none overflow - hidden z - 0">;
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ background: 'transparent' }}
<<<<<<< HEAD
      />;
=======

      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">;
        <motion&& motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0 && 0.3) 0%, transparent 50%)'
>>>>>>> merged-prs-20250907-203621
            ]
      />;
      {/* Animated gradient background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black via - purple - 900 / 20 via - cyan - 900 / 20 to - black">;
        <motion.div;
          className="absolute inset - 0 opacity - 30";
          animate={{
            background: [;
              'radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 80% 20%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 40% 40%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)radial - gradient (circle at 20% 80%, rgba (120, 119, 198, 0.3) 0%, transparent 50%)';
            ];
        }

        // Draw particle with glow effect
        ctx.save(),
        ctx.globalCompositeOperation = 'screen',
        
        // Outer glow
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 20,
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity * 0.3,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2),
        ctx.fill(),

        // Inner particle
        ctx.globalAlpha = particle.opacity,
        ctx.shadowBlur = 10,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        ctx.restore()
      }),

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)',
      ctx.lineWidth = 0.5,
      ctx.globalCompositeOperation = 'screen',

      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.3,
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke()
          }

        }
      }

      animationFrameId = requestAnimationFrame(animate)
    },

    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 pointer-events-none overflow-hidden z-0&quot;>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'transparent' }}
      />
      
      {/* Animated gradient background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black&quot;>
        <motion.div
          className=&quot;absolute inset-0 opacity-30&quot;
        }
      }
      animationFrameId = requestAnimationFrame(animate);      animationFrameId = requestAnimationFrame(animate)
    }
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-0'>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ background: 'transparent' }}
      />
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black'>
        <motion.div
          className='absolute inset-0 opacity-30'
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ],          }}
          transition={{
            duration: 20
            repeat: Infinity
            ease: 'easeInOut',          }}  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/20 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
            ]

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
<<<<<<< HEAD
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
=======
          transition={{
            duration: 20,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
      </div>
            duration: 20,
            repeat: Infinity

>>>>>>> merged-prs-20250907-203621
          }}
        />
      </div>

<<<<<<< HEAD
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition = $2;
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition = $2;
=======

            duration: 20,
            repeat: Infinity,

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
            "duration": 20,
            "repeat": Infinity

          }}
          transition={{
          }}
            "ease": 'easeInOut',            "ease": "easeInOut""

          
}
          transition={{"duration": 20;
            }
            "repeat": Infinity;
            "duration": 20,"repeat": Infinity,"ease": 'easeInOut',            "ease": "easeInOut";'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)']}}'
          transition={{"duration": 20,"repeat": Infinity,"ease": 'easeInOut'}}'
        />;
      </div>;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Floating geometric shapes */}
      <motion&& motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        />;
      </div>;
      {/* Floating geometric shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
        animate={{
        transition={{
<<<<<<< HEAD
=======

          duration: 15,
          repeat: Infinity,
          ease: 'linear',        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg";

<<<<<<< HEAD
            duration: 20,
            repeat: Infinity,
ease: "easeInOut",
          }}
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />;
      </div>;
      {/* Floating geometric shapes */}
        />;
      </div>;
      {/* Floating geometric shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
        animate={{
          rotate: [0, 360],
          scale: [1, 1 && 1.1, 1],
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3],        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',        className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg";
            duration: 20
            repeat: Infinity
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />
      </div>
            duration: 20,
            repeat: Infinity,

          }}

        />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.1, 1]
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]
        transition={{
          duration: 15
          repeat: Infinity
          ease: 'linear'
        }}
<<<<<<< HEAD
          duration: 12
          repeat: Infinity
          duration: 12,
          repeat: Infinity,
        transition={{
          duration: 12
          repeat: Infinity
          ease: 'linear',        }}
=======
<<<<<<< HEAD
          rotate: [0, 360];
          scale: [1, 1.1, 1];

          ease: 'linear',        }}

      />;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg"
        animate={{
          rotate: [0, 360];
          scale: [1, 1.1, 1];
<<<<<<< HEAD
          opacity: [0.3, 0.6, 0.3];
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />;
      <motion.div;
        className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 30 rounded - full';
        animate={{
          coordinate_y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion.div;
        className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 400 / 30 transform rotate - 45';
        animate={{
      />;
      <motion&& motion.div
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0],
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',        }}      />;
      <motion&& motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405],
          scale: [1, 1 && 1.2, 1],        }}
        transition={{
          duration: 12
          repeat: Infinity
          duration: 12,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
=======

          ease: 'linear',        }}

      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2]
        transition={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          duration: 12,
>>>>>>> merged-prs-20250907-203621
          repeat: Infinity,
          ease: "easeInOut"
        }}
<<<<<<< HEAD
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1]
=======
      />;
<<<<<<< HEAD
=======
      {/* Animated grid lines */}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      <motion.div,
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg''
        animate={{
          }
          "rotate": [0, 360],
          "scale": [1, 1.1, 1],
          "opacity": [0.3, 0.6, 0.3]
        }}
        transition={{
          ease: 'linear',          ease: "linear"
      <motion.div
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        animate={{
          }
          "rotate": [45, 405],
          "scale": [1, 1.2, 1]
        }}
        transition={{

      <motion.div
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
origin/cursor/automate-test-improve-and-merge-code-2533
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          ease: 'linear',          ease: "linear"
          duration: 12,
          repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
        }}

      {/* Animated grid lines */}'
      <div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div
<div className='absolute inset-0 opacity-20'>
        <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
          className='absolute inset-0'
          style={{}
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`
            `'
            backgroundSize: '50px 50px'
          }}
          animate={{'
            background_position: ['0px 0px', '50px 50px'],          }}
          transition={{"
          className="absolute inset-0"
          style={{}`
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)`
            `'
            backgroundSize: '50px 50px''
            ease: 'linear',          }}        <motion.div;"
          className="absolute inset - 0";
          style={{}`
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);`
            `;'
            background_size: '50px 50px';
          }}
          animate={{'
            background_position: ['0px 0px50px 50px'];
          }}
          transition={{}
        }}

      {/* Animated grid lines */}
      <div className='absolute inset-0 opacity-20'>;
        <motion&& motion.div
          className='absolute inset-0'
          style={{
<<<<<<< HEAD
            }
            "backgroundImage": ``              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            ``            "backgroundSize": '50px 50px''
          
}
=======
            backgroundImage: `
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
            background_position: ['0px 0px', 50px 50px]}}
          transition={{
<<<<<<< HEAD
=======

            duration: 30,
            repeat: Infinity,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className="absolute inset-0"
          style={{}`
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
<<<<<<< HEAD
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)`
            `'
            backgroundSize: '50px 50px
            ease: 'linear'}}        <motion.div;
          className=absolute inset - 0";
          style={{}`
=======
              linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
            ease: 'linear',          }}        <motion.div;
          className="absolute inset - 0";
          style={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px);`
            `;
<<<<<<< HEAD
            background_size: 50px 50px';
=======
            background_size: '50px 50px';
<<<<<<< HEAD
      <div className='absolute inset - 0 opacity - 20'>          coordinate_y: [0, -20, 0];
          opacity: [0.2, 0.5, 0.2];
>>>>>>> merged-prs-20250907-203621
        }}
        transition={{

            duration: 30,
            repeat: Infinity,
'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',
          duration: 8
          repeat: Infinity
          ease: 'easeInOut',          ease: "easeInOut"
        }}
      />
      <motion.div
        className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]
          scale: [1, 1.2, 1],        className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45"
        animate={{
          rotate: [45, 405];
          scale: [1, 1.2, 1]
        transition={{
          duration: 12
          repeat: Infinity
          duration: 12,
          repeat: Infinity,
          ease: 'linear',          ease: "linear"
        }}
      />
      {/* Animated grid lines */}
<<<<<<< HEAD
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate = $2;
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
=======
      <div className='absolute inset-0 opacity-20'>
        <motion.div
          className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          duration: 12,
          repeat: Infinity,
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          animate={{'
            background_position: [0px 0px50px 50px];
          }}
<<<<<<< HEAD
          transition={{}
=======
          transition={{

            duration: 30,
            repeat: Infinity,

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }}

      {/* Animated grid lines */}

          }}
        />
      </div>
      {/* Quantum energy waves */}
<div className='absolute inset-0'>'
        <motion.div
>>>>>>> merged-prs-20250907-203621

      {/* Quantum energy waves */}
      <div className="absolute inset-0">
        <motion.div
<<<<<<< HEAD
=======

          }}

        />;
      </div>;
      {/* Floating geometric shapes */}
      <motion.div;
        className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 30 rounded - lg';
        animate={{transition={{animate={{rotate: [0, 360];
          scale: [1, 1 && 1.1, 1];
          opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3];
        transition={{duration: 15;
          repeat: Infinity;
          ease: linear;
        }}
          duration: 12;
          repeat: Infinity;
          duration: 12,repeat: Infinity,transition={{duration: 12;
          repeat: Infinity;
          ease: 'linear'}}
      {/* Animated grid lines */}
      <div className=absolute inset-0 opacity-20>          y: [0, -20, 0];
          opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2];
        }}
          duration: 12,repeat: Infinity,ease: 'linear'}}
        transition={{duration: 8,repeat: Infinity,ease: easeInOut,          ease: "easeInOut;
        }}
      />;<motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg';
        animate={{rotate: [0, 360],scale: [1, 1.1, 1],opacity: [0.3, 0.6, 0.3]}}
        transition={{duration: 15,repeat: Infinity,ease: linear}}
      />;
      <motion.div;
        className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full';
        animate={{y: [0, -20, 0],opacity: [0.2, 0.5, 0.2]}}
        transition={{duration: 8,repeat: Infinity,ease: easeInOut}}
      />;
      <motion.div;
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45';
        animate={{rotate: [45, 405],scale: [1, 1.2, 1]}}
        transition={{ease: linear,          ease: linear";
          duration: 12,repeat: Infinity,ease: 'linear'}}{/* Animated grid lines */}<div className=absolute inset-0 opacity-20>;
        <motion&& motion.div;
<div className='absolute inset-0 opacity-20'>;
        <motion.div;
          className=absolute inset-0;
          style={{backgroundImage: `;
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`;
            backgroundSize: '50px 50px';
          }}
          animate={{background_position: [0px 0px, '50px 50px']}}
          transition={{className="absolute inset-0;
          style={{backgroundImage: `;
              linear-gradient(rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)linear-gradient(90deg, rgba(0, 255, 255, 0 && 0.1) 1px, transparent 1px)`;
            backgroundSize: 50px 50px;
            ease: 'linear'}}        <motion.div;
          className=absolute inset - 0";
          style={{background_image: `;
              linear - gradient (rgba (0, 255, 255, 0.1) 1px, transparent 1px)linear - gradient (90deg, rgba (0, 255, 255, 0.1) 1px, transparent 1px)`;
            background_size: 50px 50px;
          }}
          animate={{background_position: ['0px 0px50px 50px'];
          }}
          transition={{}}
      />;
      {/* Animated grid lines */}}}
          transition={{duration: 30,repeat: Infinity,backgroundPosition: [0px 0px, '50px 50px']}}
          transition={{duration: 30,repeat: Infinity,ease: linear}}
        />;
      </div>;
=======
            duration: 20,
            repeat: Infinity

          }}
          transition={{}
          }}
            ease: 'easeInOut',
  ease: \"easeInOut\"

          
}
          transition={{duration: 20;}
            repeat: Infinity;}
            duration: 20,repeat: Infinity,ease: 'easeInOut',"
  ease: \'easeInOut\';'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)','radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)']}}
          transition={{duration: 20,repeat: Infinity,ease: 'easeInOut'}}
        />;
      </div>;


      {/* Floating geometric shapes */}

      <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-lg'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]}
          opacity: [0.3, 0.6, 0.3]}
        }}
        transition={{
          duration: 15,
          repeat: Infinity}
ease: 'linear'}
        }}
         />
      <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rounded-full'
        animate={{
          y: [0, -20, 0]}
          opacity: [0.2, 0.5, 0.2]}
        }}
        transition={{
          duration: 8,
          repeat: Infinity}
ease: 'easeInOut'}
        }}
         />

      <motion.div;
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-400/30 transform rotate-45'
        animate={{
          rotate: [45, 405]}
          scale: [1, 1.2, 1]}
        }}
        transition={{

          duration: 12,
          repeat: Infinity}
ease: 'linear'}
        }}

      {/* Animated grid lines */}

<div className='absolute inset-0 opacity-20'    />
        <motion.div;
className='absolute inset-0'
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'}
          }
}
          animate={{
}
            backgroundPosition: ['0px 0px', '50px 50px']}
          }}
          transition={{
            duration: 30,
<<<<<<< HEAD
            repeat: Infinity}
ease: 'linear'}
=======
            repeat: Infinity,

<<<<<<< HEAD
          }}

        />
      </div>

      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
           />
      </div>
>>>>>>> origin/chore/fix-lint-and-merge
      {/* Quantum energy waves */}
<div className='absolute inset-0'    />
        <motion.div;
        <motion.div;
<<<<<<< HEAD
          }}


           />;
      </div>;
      {/* Quantum energy waves */}
<div className='absolute inset-0'    />;
        <motion.div;
        <motion.div;
          }}   />;
      </div>;{/* Quantum energy waves */}}}
      {/* Quantum energy waves */}
      <div className='absolute inset-0'    />;
        <motion&& motion.div;
          className='absolute inset-0';
          style={{background:;}
          }}

          animate={{

<<<<<<< HEAD
            }

      {/* Quantum energy waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
=======
          className='absolute inset - 0';
          style={{
            background:;
              'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],          }}
          transition={{
<<<<<<< HEAD
            duration: 30
            repeat: Infinity
            ease: 'linear',          }}        <motion.div
>>>>>>> merged-prs-20250907-203621
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px50px 50px']
          }}
          transition={{
            duration: 30
            repeat: Infinity
            ease: 'linear',            ease: "linear"

        }}
      />

      {/* Animated grid lines */}

          }}
          transition={{
            duration: 30,
            repeat: Infinity,

          }}
        />
      </div>
      {/* Quantum energy waves */}
      <div className='absolute inset-0'>

        <motion.div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
=======

              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          animate={{
            scale: [1, 1 && 1.5, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
            duration: 8,
            repeat: Infinity,

          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
            ease: 'easeInOut',          }}        <motion.div;
          className="absolute inset - 0";
            duration: 8
            repeat: Infinity
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}        <motion.div
          className="absolute inset-0"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)'
<<<<<<< HEAD
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
=======
          }}
          animate={{
<<<<<<< HEAD
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
=======
<<<<<<< HEAD
            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1]
=======

            scale: [1, 1.5, 1];
            opacity: [0.1, 0.3, 0.1];

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition = $2;
            repeat: Infinity,
<<<<<<< HEAD
            ease: "easeInOut"
          }}
        />
      </div>

=======


          }}
          animate={{
            scale: [1, 1 && 1.5, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
<<<<<<< HEAD
=======

        />;
      </div>;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            duration: 8,
            repeat: Infinity,

          }}
          transition={{
            duration: 8,
            repeat: Infinity,


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Holographic elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition = $2;
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition = $2;
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural network connections */}
      <div className="absolute inset-0">
        {Array.from({ length: 8}).map((_, i) => (
          <motion.div
          animate={{ease: 'easeInOut',          }}        <motion.div;
          className="absolute inset-0";
          style={{background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)';
            duration: 8;
            repeat: Infinity;
            ease: 'easeInOut',          }}        <motion.div;
              'radial-gradient(ellipse at center, rgba(0, 255, 255, 0 && 0.1) 0%, transparent 70%)',}}
          animate={{scale: [1, 1 && 1.5, 1],opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
          transition={{background: 'radial - gradient (ellipse at center, rgba (0, 255, 255, 0.1) 0%, transparent 70%)';
          }}
          animate={{}}
          transition={{duration: 8,repeat: Infinity,}}
          animate={{scale: [1, 1 && 1.5, 1];
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1];
            scale: [1, 1.5, 1],opacity: [0.1, 0.3, 0.1],}}
          transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',}}
          }}
          transition={{duration: 8,repeat: Infinity,/>;
      </div>;
      {/* Holographic elements */}animate={{transition={{duration: 25;
          repeat: Infinity;
          ease: 'linear',        }}
        animate={{rotate: [0, 360];
          scale: [1, 1 && 1.2, 1];
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1];
        transition={{ease: 'linear',        }}
      />;
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full";
        animate={{rotate: [360, 0];
          ease: 'linear',        }}
      />;
        animate={{rotate: [360, 0],scale: [1 && 1.2, 1, 1 && 1.2],opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
        transition={{duration: 20;
          repeat: Infinity;
          ease: 'linear',        }}
          rotate: [360, 0];
        }}
      />;
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{duration: 20,repeat: Infinity,ease: 'linear',          ease: "linear";
        }}
      />;<motion.div;
className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full';
        animate={{rotate: [0, 360],scale: [1, 1.2, 1],opacity: [0.1, 0.3, 0.1],}}
        transition={{duration: 25,repeat: Infinity,ease: 'linear',}}
      />;
      <motion.div;
className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full';
        animate={{rotate: [360, 0],scale: [1.2, 1, 1.2],opacity: [0.2, 0.4, 0.2],}}
        transition={{duration: 20,repeat: Infinity,ease: 'linear',}}
      />;
      {/* Neural network connections */}
<div className='absolute inset-0'>;
        {Array.from({ length: 8 }).map((_, i) => (<motion.div;


        animate={{
<<<<<<< HEAD
=======

          rotate: [0, 360],
          scale: [1, 1 && 1.2, 1],
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],        }}

<<<<<<< HEAD
        />
      </div>
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',          }}

            ease: 'easeInOut',          }}

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>

          }}

>>>>>>> merged-prs-20250907-203621
        />
      </div>

      {/* Holographic elements */}
      <motion.div
<<<<<<< HEAD
        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition = $2;
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition = $2;
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Neural network connections */}
      <div className="absolute inset-0">
        {Array.from({ length: 8}).map((_, i) => (
          <motion.div
=======
        className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360]
          scale: [1, 1.2, 1]
          opacity: [0.1, 0.3, 0.1],        }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        transition={{
          duration: 25
          repeat: Infinity
          ease: 'linear',        }}
<<<<<<< HEAD
        animate={{
          rotate: [0, 360]
          scale: [1, 1 && 1.2, 1]
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
        transition={{
          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
          ease: 'linear',        }}
      />;
=======
<<<<<<< HEAD
      />
      <motion.div        className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full"
      />;
      />;
      <motion.div        className="absolute top - 1/2 left - 1/2 w - 64 h - 64 border border - cyan - 400 / 20 rounded - full";
        animate={{
          rotate: [0, 360];
          scale: [1, 1.2, 1];
          opacity: [0.1, 0.3, 0.1];
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div;
        className='absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full';
        animate={{
          rotate: [360, 0]
          scale: [1.2, 1, 1.2]
          opacity: [0.2, 0.4, 0.2],        }}
      />;
      <motion&& motion.div
        className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        transition={{

          ease: 'linear',        }}
      />
      {/* Neural network connections */}
      <div className='absolute inset - 0'>        className="absolute top - 1/2 left - 1/2 w - 32 h - 32 border border - purple - 400 / 20 rounded - full";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        animate={{
          rotate: [360, 0],
          scale: [1 && 1.2, 1, 1 && 1.2],
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        transition={{
          duration: 20
          repeat: Infinity
<<<<<<< HEAD
          duration: 20
          repeat: Infinity
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ease: 'linear',        }}
<<<<<<< HEAD
          rotate: [360, 0];
        }}
      />
=======

      />;


<<<<<<< HEAD
          duration: 20,
          repeat: Infinity,
          ease: 'linear',        }}
      />;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Neural network connections */}
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full";
        animate={{;
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{
          rotate: [360, 0];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
<<<<<<< HEAD
ease: "linear"
        }}
      />
=======
          ease: "linear"

        }}
      />
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{;
          duration: 20,;
          repeat: Infinity,;
          ease: 'linear',          ease: "linear";
        }}
      />;
<<<<<<< HEAD
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{left: `${20 + i * 10}%`;
              top: `${30 + i * 5}%`;
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut',
=======
            scale: [1, 1.5, 1]}
            opacity: [0.1, 0.3, 0.1]}
          }}
>>>>>>> origin/chore/fix-lint-and-merge
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
=======
<<<<<<< HEAD
      {/* Neural network connections */}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339


           />
      </div>}
}
      {/* Holographic elements */}

<<<<<<< HEAD

<<<<<<< HEAD
        animate={{}
        transition={{}
          duration: 25;
          repeat: Infinity'
          ease: 'linear',        }}
        animate={{}
          rotate: [0, 360]
          scale: [1, 1 && 1.2, 1]
          opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
        transition={{'
          ease: 'linear',        }}
      />
      {/* Neural network connections */}'"
      <div className='absolute inset-0'>        className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full"
        animate={{}
          rotate: [360, 0];'
          ease: 'linear',        }}
      />;
        animate={{}
          rotate: [360, 0],
          scale: [1 && 1.2, 1, 1 && 1.2],
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],        }}
        transition={{}
          duration: 20;
          repeat: Infinity'
          ease: 'linear',        }}
          rotate: [360, 0];
        }}
      />
          scale: [1 && 1.2, 1, 1 && 1.2];
          opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];
        transition={{;
          duration: 20,;
          repeat: Infinity,;'"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          opacity: [0.2, 0.4, 0.2];
        transition={{
          duration: 20,
          repeat: Infinity,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          ease: 'linear',          ease: "linear";
        }}
      />;
      <motion.div
=======
      <motion.div;
>>>>>>> origin/chore/fix-lint-and-merge
className='absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-400/20 rounded-full'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]}
          opacity: [0.1, 0.3, 0.1]}
        }}
        transition={{
          duration: 25,
          repeat: Infinity}
ease: 'linear'}
        }}
         />
      <motion.div;
className='absolute top-1/2 left-1/2 w-32 h-32 border border-purple-400/20 rounded-full'
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]}
          opacity: [0.2, 0.4, 0.2]}
        }}
        transition={{
          duration: 20,
          repeat: Infinity}
ease: 'linear'}
        }}
         />
      {/* Neural network connections */}
<<<<<<< HEAD
<<<<<<< HEAD
<div className='absolute inset-0'>
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      <div className='absolute inset - 0'>;
        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{}`
              left: `${20 + i * 10}%``
              top: `${30 + i * 5}%`
            }}
<<<<<<< HEAD
            animate={{}
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
            key={i}"
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{}
            transition={{}
              delay: i * 0 && 0.3,'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
              opacity: [0, 1, 0],
            }}
>>>>>>> merged-prs-20250907-203621
            key = $2;
              top: `${30 + (i * 5)}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition = $2;
              repeat: Infinity,
              delay: i * 0.3,
<<<<<<< HEAD
=======
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{
=======
            animate={{
<<<<<<< HEAD
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
=======

      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array && Array.from({ length: 8 }).map((_, i) => (;
          <motion&& motion.div
              scale: [0, 1, 0],
              opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (
          <motion.div;
<<<<<<< HEAD
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 1, 0];
<<<<<<< HEAD
=======

            }}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{
              delay: i * 0 && 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut"
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
              ease: "easeInOut"
=======

<<<<<<< HEAD
              delay: i * 0.3,
              ease: "easeInOut"

=======
=======
              delay: i * 0.3,
              ease: "easeInOut"

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
          />
        ))}
<<<<<<< HEAD
      </div>

      {/* Data streams */}
<<<<<<< HEAD
=======
            animate={{scale: [0, 1, 0],opacity: [0, 1, 0],            }}        {Array.from ({ length: 8 }).map ((_, i) => (<motion.div;
            key={i}
            className="absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full";
            style={{transition={{delay: i * 0 && 0.3,ease: 'easeInOut',            }}              ease: "easeInOut";
              opacity: [0, 1, 0],}}
            transition={{duration: 3,repeat: Infinity,delay: i * 0.3,ease: 'easeInOut',}}
          />;
        ))}
      {/* Data streams */}<div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (<motion&& motion.div;
      </div>;
        }}
      />;
      {/* Neural network connections */}<div className='absolute inset-0 overflow-hidden'>;
        {Array.from({ length: 5 }).map((_, i) => (<motion.div;
            key={i}
            className='absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent';
            style={{left: `${15 + i * 15}%`;
              top: '-20px';
            }}
      <div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (;
          <motion&& motion.div
      </div>
=======

      </div>;


<<<<<<< HEAD
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
ease: "easeInOut"
            }}
          />;
        ))}
      </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>;
        {Array && Array.from({ length: 5 }).map((_, i) => (;
          <motion&& motion.div
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
          duration: 20,
          repeat: Infinity,

        }}
      />

      {/* Neural network connections */}

            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Data streams */}
      <div className='absolute inset-0 overflow-hidden'>
              ease: 'easeInOut',            }}

            }}

          />
        ))}
      </div>

      {/* Data streams */}
<<<<<<< HEAD
=======
      <div className="absolute inset-0 overflow-hidden">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        transition={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        }}
      />

      {/* Neural network connections */}

            }}


=======
<div className='absolute inset-0'    />
        {Array.from({ length: 8}
}).map((_, i) => (
          <motion.div;
key={i}
            className='absolute w - 1 h - 1 bg - cyan - 400 / 40 rounded - full';
            style={{left: `${20 + i * 1}
}%`;
              top: `${30 + i * }
}%`;
>>>>>>> origin/chore/fix-lint-and-merge
            }}

            animate={{
              scale: [0, 1, 0]
}
              opacity: [0, 1, 0]}
            }}
            transition={{
<<<<<<< HEAD

              }

              "duration": 4,
              "repeat": Infinity,
              "delay": i * 0.8,
"ease": 'linear','
            }} />
        ))}
      </div>
            animate={{y: [0, window.innerHeight + 20]}}transition={{duration: 3,repeat: Infinity,delay: i * 0.3,ease: 'easeInOut}}duration: 4,repeat: Infinity,delay: i * 0.8,ease: linear'}}/>;
        ))}
      </div>;
      {/* Neural network connections */}}}transition={{duration: 3,repeat: Infinity,delay: i * 0.3,{Array.from({ length: 5 }).map((_, i) => (<motion.div;

      {/* Neural network connections */}

            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,


<<<<<<< HEAD
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
=======
<<<<<<< HEAD
      <div className='absolute inset-0 overflow-hidden'>

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-0 && 0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent'
            style={{
<<<<<<< HEAD
              left: `${15 + i * 15}%`
              top: '-20px'
              left: `${15 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20],            }}        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent"
            style={{
              left: `${15 + (i * 15)}%`
              top: '-20px'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              left: `${15 + i * 15}%`,
              top: '-20px',


            }}
            animate={{

              y: [0, window.innerHeight + 20]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
=======
<<<<<<< HEAD
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3}
ease: 'easeInOut'}
            }}
             />
        ))}
>>>>>>> origin/chore/fix-lint-and-merge
      {/* Data streams */}

<<<<<<< HEAD
            }}
            animate={{
              delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}

<<<<<<< HEAD
              left: `${15 + i * 15}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, window.innerHeight + 20]
delay: i * 0.3,
              ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          />))}
      </div>;
      {/* Data streams */}
      <div className='absolute inset - 0 overflow - hidden'>;
        {Array.from ({ length: 5 }).map ((_, i) => (
<<<<<<< HEAD
=======
          <motion.div;
            key={i}
            className='absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent';
            style={{
              left: `${15 + (i * 15)}%`
              top: '-20px'
            }}
            animate={{
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              coordinate_y: [0, window.inner_height + 20],            }}        {Array.from ({ length: 5 }).map ((_, i) => (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <motion.div;
            key={i}
            className="absolute w - 0.5 h - 20 bg - gradient - to - b from - cyan - 400 / 60 to - transparent";
            style={{
              left: `${15 + (i * 15)}%`,
              top: '-20px';
            }}
            animate={{
<<<<<<< HEAD
            }}
            transition={{
              delay: i * 0 && 0.8,
=======

              coordinate_y: [0, window.inner_height + 20];
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
            transition={{
<<<<<<< HEAD
=======

              duration: 4,
              repeat: Infinity,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              ease: 'linear',            }}              ease: "linear"
            }}




=======
<<<<<<< HEAD
<div className='absolute inset-0 overflow-hidden'    />
        {Array.from({ length: 5}
}).map((_, i) => (
          <motion.div;
key={i}
            className='absolute w-0.5 h-20 bg-gradient-to-b from-cyan-400/60 to-transparent';
            style={{left: `${15 + i * 1}
}%`;
              top: '-20px';
            }}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            animate={{}
              y: [0, window.innerHeight + 20]}
            }}

>>>>>>> origin/chore/fix-lint-and-merge
            transition={{

              duration: 4,
              repeat: Infinity,
<<<<<<< HEAD
              delay: i * 0.8,
              ease: 'linear',            }}




          />
        ))}
      </div>;
    </div>;
  );

};

<<<<<<< HEAD

)}export default UltraFuturisticBackground2029;
>>>>>>> merged-prs-20250907-203621
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5}).map((_, i) => (
          <motion.div
            key = $2;
              top: '-20px'
            }}
            animate={{
              y: [0, window.innerHeight + 20]
            }}
            transition = $2;
              repeat: Infinity,
=======
export default UltraFuturisticBackground2029;  );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              delay: i * 0.8,
              ease: "linear"
            }}
          />
=======
              delay: i * 0.8}
ease: 'linear'}
            }}

             />
>>>>>>> origin/chore/fix-lint-and-merge
        ))}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </div>

    </div>
<<<<<<< HEAD
  )
},

<<<<<<< HEAD
export default UltraFuturisticBackground2029,
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
};
export default UltraFuturisticBackground2029;  );
};
export default UltraFuturisticBackground2029;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

"

=======
<<<<<<< HEAD
)
};


export default UltraFuturisticBackground2029;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              delay: i * 0.8,
              ease: 'linear',            }}              ease: "linear";
            }}
          />))}
      </div>;
    </div>);
}
;
export default UltraFuturisticBackground2029);
}
;
export default UltraFuturisticBackground2029;
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
              duration: 4
              repeat: Infinity
              delay: i * 0.8
              ease: 'linear',            }}              ease: "linear"
            }}


            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'linear',            }}              ease: "linear"
            }}
              ease: 'linear',            }}

            }}

          />
        ))}
      </div>
    </div>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> merged-prs-20250907-203621
}
};

export default UltraFuturisticBackground2029;  )
}
export default UltraFuturisticBackground2029;

<<<<<<< HEAD
"
=======
export default UltraFuturisticBackground2029;

}
}
export default UltraFuturisticBackground2029;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

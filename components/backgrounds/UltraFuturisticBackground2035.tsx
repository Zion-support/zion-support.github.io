<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
export default function UltraFuturisticBackground2035() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
<<<<<<< HEAD
=======
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {}
    const canvas = canvasRef.current;
    if (!canvas) return;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
  const canvasRef = null;
                ease: "easeInOut"
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);
<<<<<<< HEAD
    if (ctx) {
<<<<<<< HEAD

ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
  const canvasRef = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const prefersReducedMotion = $2;
    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
=======
ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }

    let animationFrameId: number,
    let particles: Array<{
<<<<<<< HEAD

=======
      x: number;
      y: number;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    if (ctx) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
<<<<<<< HEAD
      x: number,
      y: number,
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      vx: number,
      vy: number,
      size: number,
      opacity: number,
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
canvas.width = window.innerWidth * (window.devicePixelRatio || 1)
canvas.height = window.innerHeight * (window.devicePixelRatio || 1)
if (ctx) {
  
}
}
//Update and draw particles //Wrap around edges if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1)
if (particle.x > canvas.width / (window.devicePixelRatio || 1) ) particle.x = 0
if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1)
if (particle.y > canvas.height / (window.devicePixelRatio || 1) ) particle.y = 0
//Draw particle if (maxDistance > 0) {
  particles.forEach ( (otherParticle, otherIndex) => {
  if (index !== otherIndex) {
  
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}
      color: string;}
    }> = [];

=======
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      opacity: number,;
      color: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    // Initialize particles;
    const initParticles = () => {;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
        })
      color: string;
    }> = [];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
const particleCount = prefersReducedMotion
        ? 12
        : isSmallScreen
          ? 40
          : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
<<<<<<< HEAD
          ],) => {
  return $3;}
}
<<<<<<< HEAD
=======
          ],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        });
origin/cursor/automate-test-improve-and-merge-code-2533
      }
    }
    // Update and draw particles;
    const updateParticles = () => {}
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {}
        particle.x += particle.vx;
        particle.y += particle.vy;
<<<<<<< HEAD
        // Wrap around edges;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
        // Wrap around edges
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;

<<<<<<< HEAD
<<<<<<< HEAD
        // Draw particle
        ctx.beginPath();
=======
        // Draw particle;
ctx.beginPath();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
origin/cursor/automate-test-improve-and-merge-code-2533
        // Draw particle
=======
        // Wrap around edges;
        // Draw particle;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        ctx.beginPath();
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
<<<<<<< HEAD
        // Draw connections
<<<<<<< HEAD

=======
        // Draw connections;
const maxDistance = prefersReducedMotion;
          ? 0;
          : window.innerWidth < 768;
            ? 90;
            : 140;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 90
            : 140;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        if (maxDistance > 0) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
=======
        // Draw connections;
        if (maxDistance > 0) {}
          particles.forEach((otherParticle, otherIndex) => {}
            if (index !== otherIndex) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              const dx = particle.x - otherParticle.x;
<<<<<<< HEAD
<<<<<<< HEAD
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
=======

const dy = particle.y - otherParticle.y;

const distance = Math.sqrt(dx * dx + dy * dy);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              if (distance < maxDistance) {
=======
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;
<<<<<<< HEAD

<<<<<<< HEAD
;
  const canvasRef = useRef<HTMLCanvasElement>(null)useEffect(() => {const canvas = canvasRef.current;
    if (!canvas) return;import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
  const canvasRef = null;
                ease: "easeInOut";
    const ctx = canvas.getContext('2d')if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1)canvas.height = window.innerHeight * (window.devicePixelRatio |1)if (ctx) {ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)}let animationFrameId: number;
    let particles: Array<{x: number;
      y: number;vx: number;
      vy: number;
      size: number;
      opacity: number;vx: number,vy: number,size: number,opacity: number,y: number,vx: number,vy: number,size: number,opacity: number,color: string;
    // Initialize particles;
    const initParticles = () => {? 12;
        : isSmallScreen;
          ? 40;
          : 100;
        })color: string;
    }> = [];// Initialize particles;
    const initParticles = () => {particles = [];
      const isSmallScreen = window.innerWidth < 768;
const particleCount = prefersReducedMotion;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
      for (let i = 0; i < particleCount; i++) {particles.push({x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,opacity: Math.random() * 0.35 + 0.08,color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor(Math.random() * 4)],})}
      for (let index = 0; i < particle_count; i++) {
        particles.push ({
=======
      for (let index = 0; i < particle_count; i++) {}
        particles.push ({}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          coordinate_x: (Math.random () * canvas.width) / (window.devicePixelRatio || 1),
          coordinate_y: (Math.random () * canvas.height) / (window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,
<<<<<<< HEAD
          opacity: Math.random () * 0.35 + 0.08,
=======
          opacity: Math.random () * 0.35 + 0.08,'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],
        });      }      const particle_count = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
<<<<<<< HEAD
      for (let index = 0, i < particle_count, i++) {
        particles.push ({
=======
      for (let index = 0, i < particle_count, i++) {}
        particles.push ({}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          coordinate_x: Math.random () * canvas.width / (window.devicePixelRatio || 1),
          coordinate_y: Math.random () * canvas.height / (window.devicePixelRatio || 1),
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,
<<<<<<< HEAD
          opacity: Math.random () * 0.35 + 0.08,
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor (Math.random () * 4)];
        });
      }
    }
    // Update and draw particles;
    const updateParticles = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
if (particle.x < 0)particle.x = canvas.width / (window.devicePixelRatio || 1)if (particle.x > canvas.width / (window.devicePixelRatio || 1))particle.x = 0;
        if (particle.y < 0)particle.y = canvas.height / (window.devicePixelRatio || 1)if (particle.y > canvas.height / (window.devicePixelRatio || 1))particle.y = 0;// Draw particle;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill()// Draw connections;
const maxDistance = prefersReducedMotion;
          ? 0;
          : window.innerWidth < 768;
            ? 90;
            : 140;if (maxDistance > 0) {particles.forEach((otherParticle, otherIndex) => {if (index !== otherIndex) {const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy)if (distance < maxDistance) {ctx.beginPath()ctx.moveTo(particle.x, particle.y)ctx.lineTo(otherParticle.x, otherParticle.y)ctx.strokeStyle = particle.color;for (let index = 0; i < particle_count; i++) {particles.push ({coordinate_x: (Math.random () * canvas.width) / (window.devicePixelRatio || 1),coordinate_y: (Math.random () * canvas.height) / (window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,opacity: Math.random () * 0.35 + 0.08,color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4)],})}      const particle_count = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100)for (let index = 0, i < particle_count, i++) {particles.push ({coordinate_x: Math.random () * canvas.width / (window.devicePixelRatio || 1),coordinate_y: Math.random () * canvas.height / (window.devicePixelRatio || 1),vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,opacity: Math.random () * 0.35 + 0.08,color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4)],})color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor (Math.random () * 4)];
        })}
    }// Update and draw particles;
    const update_particles = () =>: any {ctx.clear_rect (0, 0, canvas.width, canvas.height)particles.for_each ((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;// Wrap around edges;
        if (particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {$2;
}
        if ()) {$2;
}
          particle.coordinate_x = 0;
        if (particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {$2;
}
        if ()) {$2;
}
          particle.coordinate_y = 0;        if (particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {$2;
}
        if () particle.coordinate_x = 0) {$2;
}
        if (particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {$2;
}
        if () particle.coordinate_y = 0) {$2;
}
        // Draw particle;
        ctx.begin_path ()ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity;
        ctx.fill ()// Draw connections;
        const max_distance = prefersReducedMotion;
          ? 0;
          : window.inner_width < 768;
            ? 90;
            : 140;        if ( {        const max_distance = prefersReducedMotion ? 0 : (window.inner_width < 768 ? 90 : 140)) {$2;
}
        // Check condition;
if ( {) {$2;
}
          particles.for_each ((other_particle, other_index) => {// Check condition;
if ( {) {$2;
}
              const dx = particle.x - other_particle.x;
              const dy = particle.y - other_particle.y;
              const distance  = Math.sqrt (dx * dx + dy * dy)// Check condition;
if ( {) {$2;
}
                ctx.begin_path ()ctx.move_to (particle.x, particle.y)ctx.line_to (other_particle.x, other_particle.y)ctx.stroke_style = particle.color;
                ctx.global_alpha =;
                  ((max_distance - distance) / max_distance) * 0.08;
                ctx.line_width = 1;
                ctx.stroke ()}
            }
          })}
      })}
            }
          })}
      })}
    }
  }, [])return (}}
          transition={{duration: 8,repeat: Infinity,}}
          transition={{duration: 8;
            repeat: Infinity;
            ease: 'easeInOut',          }}
          animate={{scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
            opacity: [0.2, 0.5, 0.2],            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];ctx.globalAlpha =;
                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
    }
    initParticles()updateParticles()const handleResize = () => {canvas.width = window.innerWidth * (window.devicePixelRatio |1)canvas.height = window.innerHeight * (window.devicePixelRatio |1)if (ctx) {ctx.setTransform(1, 0, 0, 1, 0, 0)ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)}
      initParticles()}window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)if (animationFrameId) {cancelAnimationFrame(animationFrameId)}
    }}, [])return (<>;
      {/* Fixed Background Canvas */}
      <canvas;
        ref={canvasRef}
className='fixed inset-0 w-full h-full pointer-events-none z-0';
        style={{background:;
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)';
        }}
      />;
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>;
        {/* Floating Geometric Shapes */}
      color: string}> = [],

    // Initialize particles
    const initParticles = $2;
      const isSmallScreen = $2;
      const particleCount = $2;
      for (let i = 0, i < particleCount, i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
        })
      }
    },

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect($2);
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = $2;
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = $2;
        if (particle.y < 0) particle.y = $2;
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = $2;
        // Draw particle
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fillStyle = $2;
        ctx.globalAlpha = $2;
        ctx.fill($2);
        // Draw connections
        const maxDistance = $2;
        if (maxDistance > 0) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = $2;
              const dy = $2;
              const distance = Math.sqrt($2);
              if (distance < maxDistance) {
                ctx.beginPath($2);
                ctx.moveTo($2);
                ctx.lineTo($2);
                ctx.strokeStyle = $2;
                ctx.globalAlpha = $2;
                ctx.lineWidth = $2;
                ctx.stroke()
              }
            }
          })
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = $2;
    initParticles($2);
    updateParticles($2);
    const handleResize = $2;
      canvas.height = $2;
      if (ctx) {
        ctx.setTransform($2);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
    },

    window.addEventListener($2);
    return () => {
      window.removeEventListener($2);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []),

  return (
    <>
=======
ctx.globalAlpha =

                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;) => {
  return $3;}
=======
})
initParticles ()
updateParticles ()
window.addEventListener ('resize', handleResize)
return (<> {
  /* Fixed Background Canvas */ 
}<canvas backgroundImage: `linear-gradient (rgba (139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient (90deg, rgba (139, 92, 246, 0.3) 1px, transparent 1px) `, backgroundSize: '50px 50px' 
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
=======
          opacity: Math.random () * 0.35 + 0.08,'
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],'
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor (Math.random () * 4)];
        });
      }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
;
    // Update and draw particles;
    const update_particles = () =>: any {}
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      particles.for_each ((particle, index) => {}
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Wrap around edges;
        if (
          particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {}
  $2;
}
<<<<<<< HEAD
      initParticles()}window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)if (animationFrameId) {cancelAnimationFrame(animationFrameId)}
    }}, [];
  return (<>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      {/* Fixed Background Canvas */}
      <canvas;
        ref={canvasRef}
<<<<<<< HEAD
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Glow Effects */}
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
            opacity: [0.4, 0.7, 0.4],          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{;
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];

          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
=======
className='fixed inset-0 w-full h-full pointer-events-none z-0';
        style={{background:;}
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)';}
        }}
      />;
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden' />;
        {/* Floating Geometric Shapes */}
=======
        if ()) {}
  $2;
}
          particle.coordinate_x = 0;
        if (
          particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {}
  $2;
}
        if ()) {}
  $2;
}
          particle.coordinate_y = 0;        if (particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {}
  $2;
}
        if () particle.coordinate_x = 0) {}
  $2;
}
        if (particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {}
  $2;
}
        if () particle.coordinate_y = 0) {}
  $2;
}
        // Draw particle;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity;
        ctx.fill ();
;
        // Draw connections;
        const max_distance = prefersReducedMotion;
          ? 0;
          : window.inner_width < 768;
            ? 90;
            : 140;        if ( {        const max_distance = prefersReducedMotion ? 0 : (window.inner_width < 768 ? 90 : 140)) {}
  $2;
}
        // Check condition;
if ( {) {}
  $2;
}
          particles.for_each ((other_particle, other_index) => {}
            // Check condition;
if ( {) {}
  $2;
}
              const dx = particle.x - other_particle.x;
              const dy = particle.y - other_particle.y;
              const distance = Math.sqrt (dx * dx + dy * dy);
;
              // Check condition;
if ( {) {}
  $2;
}
                ctx.begin_path ();
                ctx.move_to (particle.x, particle.y);
                ctx.line_to (other_particle.x, other_particle.y);
                ctx.stroke_style = particle.color;
                ctx.global_alpha =;
                  ((max_distance - distance) / max_distance) * 0.08;
                ctx.line_width = 1;
                ctx.stroke ();
              }
            }
          });        }
      });
              }
            }
          });
        }
      });
      }
    }
  }, []);
  return (
          }}
          transition={{}
            duration: 8,
            repeat: Infinity,
          }}
          transition={{}
            duration: 8;
            repeat: Infinity'
            ease: 'easeInOut',          }}
          animate={{}
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
<<<<<<< HEAD
ctx.globalAlpha =
                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });
      if (!prefersReducedMotion) {
animationFrameId = requestAnimationFrame(updateParticles);
      }
    }
    initParticles();
    updateParticles();
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio |1);
      canvas.height = window.innerHeight * (window.devicePixelRatio |1);
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      initParticles();
    };
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
origin/cursor/automate-test-improve-and-merge-code-2533
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10
            repeat: Infinity
=======
          animate={{}
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{}
            duration: 10;
            repeat: Infinity'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            ease: 'easeInOut',          }}
            opacity: [0.4, 0.7, 0.4],          }}
        />;
        <motion&& motion.div'
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{}
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: 'easeInOut',          }}
        {/* Neon Glow Effects */}'
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;'
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;'
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{;
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];

          }}
          transition={{}
            duration: 10,
            repeat: Infinity,"
            ease: "easeInOut"
          }}
        />

        <motion.div"
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{}
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{}
          }}
        />
        {/* Neon Glow Effects */}
<<<<<<< HEAD
            duration: 10,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        <motion.div
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12,
<<<<<<< HEAD
            repeat: Infinity}
ease: 'easeInOut'}
=======
      color: string;    }> = [];      x: number
      y: number
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          }}
        />
        {/* Neon Glow Effects */}
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-10'>;
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
          }}
          transition={{
=======
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        {/* Neon Glow Effects */}
<div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Animated Grid Lines */}
=======
        {/* Animated Grid Lines */}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className='absolute inset-0 opacity-10'>;
          <div'
            className='absolute inset-0'
            style={{}
              backgroundImage: `
        {/* Animated Grid Lines */}"
        <div className="absolute inset-0 opacity-10">;"
          <divclassName="absolute inset-0" style={{}`
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)`
            `'
            backgroundSize: '50px 50px'
          }}
          transition={{}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            duration: 12,
            repeat: Infinity,

          }}
        />

        {/* Neon Glow Effects */}

<<<<<<< HEAD
=======
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `
              backgroundSize: '50px 50px'
            }}
          />
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>

          }} />;
        </div>;

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (;
<<<<<<< HEAD
          <motion&& motion.div
            key={i}
className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
              top: `${Math.random() * 100}%`
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}            style={{
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2
              repeat: Infinity
              delay: Math.random() * 2

=======
<<<<<<< HEAD
          <motion&& motion.div
            key={i}
className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
=======
          <motion&& motion.div;
            key={i}'
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}`
              top: `${Math.random() * 100}%``
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{}
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}            style={{}
            }}
            animate={{}
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
            transition={{}
              duration: 3 + Math.random() * 2;
              repeat: Infinity;
              delay: Math.random() * 2;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,

<<<<<<< HEAD
            transition={{
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
            transition={{'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
            transition={{}
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,


          />
          />;
        ))}
        {/* Energy Waves */}
<<<<<<< HEAD
        <motion&& motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
        {/* Energy Waves */}
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
          animate={{
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
=======
        <motion&& motion.div'
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{}
            scaleX: [0, 1, 0]'
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{}`
              left: `${Math.random () * 100}%`,`
              top: `${Math.random () * 100}%`,
            }}
            animate={{}
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{}`
              left: `${Math.random () * 100}%`,`
              top: `${Math.random () * 100}%`;
            }}
            animate={{}
              coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{}
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
        {/* Energy Waves */}
        <motion.div;'
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{}
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          }}
          transition={{}
            duration: 4;
            repeat: Infinity'
            ease: 'easeInOut',          }}
          animate={{}
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
          }}
          transition={{}
            duration: 4,
            repeat: Infinity,
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{'
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{}
            scaleX: [0, 1, 0]"
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]'"
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;'
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent';
          animate={{}
            scale_x: [0, 1, 0],"
            opacity: [0, 1, 0],          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent";
          animate={{}
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
<<<<<<< HEAD
        <motion.div
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent";
          animate={{
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
ease: 'easeInOut',
=======
          animate={{}
            scale_x: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{}
            duration: 4,
            repeat: Infinity,
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{'
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{}
            scaleX: [0, 1, 0]"
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{}
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]'"
            ease: 'easeInOut',            ease: "easeInOut"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          }}
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}
        />
            ease: 'easeInOut',          }}

        <motion.div;
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full';
          animate={{scale: [1, 1.15, 1],rotate: [0, 180, 360],opacity: [0.22, 0.45, 0.22],}}
          transition={{duration: 8,repeat: Infinity,ease: 'easeInOut',}}
        />;
        <motion.div;
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45';
          animate={{scale: [1, 1.3, 1],rotate: [45, 225, 405],opacity: [0.2, 0.5, 0.2],}}
          transition={{duration: 10;
            repeat: Infinity;
            ease: 'easeInOut',          }}
            opacity: [0.4, 0.7, 0.4],          }}
        />;
        <motion&& motion.div;
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full';
          animate={{scale: [1, 1 && 1.4, 1],y: [0, -20, 0],opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{duration: 12;
            repeat: Infinity;
            ease: 'easeInOut',          }}
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];}}
          transition={{duration: 10,repeat: Infinity,ease: "easeInOut";
          }}
        />;
        <motion.div;
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{}}
        />;
        {/* Neon Glow Effects */}duration: 10,repeat: Infinity,ease: 'easeInOut',}}
        />;
        <motion.div;
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full';
          animate={{scale: [1, 1.4, 1],y: [0, -20, 0],opacity: [0.4, 0.7, 0.4],}}
          transition={{duration: 12,repeat: Infinity,ease: 'easeInOut',}}
        />;
        {/* Neon Glow Effects */}
<div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />;
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-10'>;
          <div;
            className='absolute inset-0';
            style={{backgroundImage: `;
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName="absolute inset-0" style={{backgroundImage: `;
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)`;
            backgroundSize: '50px 50px';
          }}
          transition={{duration: 12,repeat: Infinity,}}
        />;
        {/* Neon Glow Effects */}linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`;
              backgroundSize: '50px 50px';
            }}
          />;
        </div>;
          }} />;
        </div>;{/* Floating Particles */}
        {[...Array(20)].map((_, i) => (<motion&& motion.div;
            key={i}
className='absolute w-1 h-1 bg-purple-400 rounded-full';
            style={{{/* Floating Particles */}
        {[...Array (20)].map ((_, i) => (<motion.div;
            key={i}
              top: `${Math.random() * 100}%`;
              left: `${Math && Math.random() * 100}%`,top: `${Math && Math.random() * 100}%`,}}
            animate={{y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0],            }}            style={{}}
            animate={{y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{duration: 3 + Math.random() * 2;
              repeat: Infinity;
              delay: Math.random() * 2;
              duration: 3 + Math && Math.random() * 2,repeat: Infinity,delay: Math && Math.random() * 2,transition={{ease: 'easeInOut',            }}              ease: "easeInOut";
              y: [0, -30, 0],opacity: [0, 1, 0],scale: [0, 1, 0],}}
            transition={{duration: 3 + Math.random() * 2,repeat: Infinity,delay: Math.random() * 2,ease: 'easeInOut',}}
            transition={{duration: 3 + Math.random() * 2,repeat: Infinity,delay: Math.random() * 2,/>;
          />;
        ))}
        {/* Energy Waves */}<motion&& motion.div;
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0];
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{left: `${Math.random () * 100}%`,top: `${Math.random () * 100}%`,}}
            animate={{coordinate_y: [0, -30, 0],opacity: [0, 1, 0],scale: [0, 1, 0],            }}            style={{left: `${Math.random () * 100}%`,top: `${Math.random () * 100}%`;
            }}
            animate={{coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{duration: 3 + Math.random () * 2,repeat: Infinity,{/* Energy Waves */}
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{scale_x: [0, 1, 0],opacity: [0, 1, 0],          }}
          transition={{duration: 4;
            repeat: Infinity;
            ease: 'easeInOut',          }}
          animate={{scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
          }}
          transition={{duration: 4,repeat: Infinity,animate={{scaleX: [0, 1, 0];
            opacity: [0, 1, 0];
          }}
          transition={{className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0];
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent";
          animate={{scaleX: [0, 1, 0];
            opacity: [0, 1, 0];
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent';
          animate={{scale_x: [0, 1, 0],opacity: [0, 1, 0],          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent";
          animate={{scale_x: [0, 1, 0];
            opacity: [0, 1, 0];<motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0],opacity: [0, 1, 0],}}
          transition={{duration: 4,repeat: Infinity,ease: 'easeInOut',}}
        />;
        <motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0],opacity: [0, 1, 0],}}transition={{duration: 4,repeat: Infinity,delay: 2,ease: 'easeInOut',}}
            ease: 'easeInOut',          }}            ease: "easeInOut";
=======
ease: 'easeInOut',
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          }}
        />
        <motion.div
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
origin/cursor/automate-test-improve-and-merge-code-2533
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
ease: 'easeInOut',
=======
          transition={{}
            duration: 4;
            repeat: Infinity;
            delay: 2'"
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}'"
            ease: 'easeInOut',          }}            ease: "easeInOut"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          }}
        />'
            ease: 'easeInOut',          }}

        />;
<<<<<<< HEAD
            ease: 'easeInOut',          }}/>;{/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (<motion&& motion.div;
            key={`quantum-${i}`}
className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full';
            style={{{/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (<motion.div;
            key={`quantum-${i}`}
              left: `${Math && Math.random() * 100}%`,top: `${Math && Math.random() * 100}%`,}}
            animate={{scale: [0, 1, 0],opacity: [0, 0 && 0.8, 0],rotate: [0, 360],            }}            style={{left: `${Math && Math.random() * 100}%`,top: `${Math && Math.random() * 100}%`;
            }}
            animate={{scale: [0, 1, 0];
              opacity: [0, 0 && 0.8, 0];
              rotate: [0, 360];
            }}
        />;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4


        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          <motion&& motion.div
            key={`quantum-${i}`}
className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            style={{
<<<<<<< HEAD
        {/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (
          <motion.div;
            key={`quantum-${i}`}
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0 && 0.8, 0],
              rotate: [0, 360],            }}            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
=======
=======
          <motion&& motion.div;`
            key={`quantum-${i}`}'
            className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full'
            style={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (
          <motion.div;`
            key={`quantum-${i}`}`
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{}
              scale: [0, 1, 0],
              opacity: [0, 0 && 0.8, 0],
              rotate: [0, 360],            }}            style={{}`
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`
            }}
            animate={{}
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
              rotate: [0, 360]
            }}
            transition={{}
              duration: 5 + Math.random() * 3;
              repeat: Infinity;
              delay: Math.random() * 5;
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition = $2;
              repeat: Infinity,
<<<<<<< HEAD
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Energy Waves */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition = $2;
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />

        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360]
            }}
            transition = $2;
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

=======
              delay: Math.random() * 5,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
            }}
          />
        ))}
        {/* Neural Network Connections */}'
        <svg className='absolute inset-0 w-full h-full opacity-20'>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,

<<<<<<< HEAD
            transition={{
=======
            transition={{'"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />;
        ))}
<<<<<<< HEAD
        {/* Neural Network Connections */}
<<<<<<< HEAD
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
=======
        {/* Neural Network Connections */}'
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
<<<<<<< HEAD
<svg className='absolute inset-0 w-full h-full opacity-20'>
          <defs>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
<<<<<<< HEAD
            transition={{duration: 5 + Math.random() * 3;
              repeat: Infinity;
              delay: Math.random() * 5;
              duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,ease: 'easeInOut',            }}              ease: "easeInOut";
              scale: [0, 1, 0],opacity: [0, 0.8, 0],rotate: [0, 360],}}
            transition={{duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,ease: 'easeInOut',}}
          />;
        ))}
        {/* Neural Network Connections */}<svg className='absolute inset-0 w-full h-full opacity-20'>;
              duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,transition={{ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />;
        ))}
        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;<svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
            <linearGradient;
              id='neuralGradient';
              x1='0%';
              y1='0%';
              x2='100%';
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              key={`neural-${i}`}
              cx={`${20 + i * 10}%`}
              cy={`${30 + i * 5}%`}
              r='3';
=======
            <linearGradient'
              id='neuralGradient''
              x1='0%''
              y1='0%''
              x2='100%'`
              key={`neural-${i}`}`
              cx={`${20 + i * 10}%`}`
              cy={`${30 + i * 5}%`}'
              r='3';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              fill='url (#neural_gradient)';
<<<<<<< HEAD
              animate={{
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => (
            <motion.circle
              animate={{<linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />;
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />;
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />;
            </linearGradient>;
          </defs>;
          {[...Array(8)].map((_, i) => (<motion.circle;
                r: [3, 6, 3],opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;{[...Array(8)].map((_, i) => (<motion&& motion.circle;
                r: [3, 6, 3],opacity: [0.3, 0.8, 0.3],              }}          <defs>;
            <linear_gradient id="neural_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stop_color="#8b5cf6" stop_opacity="0.5" />;
              <stop offset="50%" stop_color="#06b6d4" stop_opacity="0.3" />;
              <stop offset="100%" stop_color="#ec4899" stop_opacity="0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (<motion.circle;
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3";
              fill="url (#neural_gradient)";
              animate={{delay: i * 0 && 0.5,ease: 'easeInOut',              }}                ease: "easeInOut";
                r: [3, 6, 3],opacity: [0.3, 0.8, 0.3],}}
              transition={{duration: 4,repeat: Infinity,delay: i * 0.5,ease: 'easeInOut',}}
            />;
          ))}
        {/* Holographic Effects */}
        <div className='absolute inset-0'>;
          <motion&& motion.div;
                ease: 'easeInOut',              }}}}/>;
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className='absolute inset-0'>

                ease: 'easeInOut',              }}

              }}

            />
        </svg>;
        {/* Holographic Effects */}<div className='absolute inset-0'>;
                ease: 'easeInOut',              }}}}/>;
          ))}
        </svg>

        {/* Holographic Effects */}
        </svg>;
        {/* Holographic Effects */}<div className='absolute inset-0'>;
                ease: 'easeInOut',              }}}}/>;
          ))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset-0'>;
<div className='absolute inset-0'>;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full';
                delay: i * 0.5,ease: 'easeInOut',              }}                ease: "easeInOut";
=======
        <svg className='absolute inset-0 w-full h-full opacity-20'>

                ease: 'easeInOut',              }}                ease: "easeInOut"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset - 0'>;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
            animate={{
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{
              duration: 15,
              repeat: Infinity,

            }}

              duration: 15,
              repeat: Infinity,
              ease: 'linear',              ease: "linear"
            }}

            }}

          />
        </div>
            animate={{animate={{scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{duration: 15,repeat: Infinity,}}duration: 15,repeat: Infinity,ease: 'linear',              ease: "linear";
              scale: [1, 1.1, 1],rotate: [0, 90, 180, 270, 360],opacity: [0.1, 0.3, 0.1],}}
            transition={{duration: 20,repeat: Infinity,ease: 'linear',}}
          />;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full';
            animate={{scale: [1, 1.2, 1],rotate: [360, 270, 180, 90, 0],opacity: [0.1, 0.4, 0.1],}}
            transition={{duration: 15,repeat: Infinity,ease: 'linear',}}}}/>;
        </div>;
        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>;
          {[...Array(20)].map((_, i) => (<motion.div;
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Data Streams */}
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key = $2;
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: Math.random() * 2,
=======
              animate={{"
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">"
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />"
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />"
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle;
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;"
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;"
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;"
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;"
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle;
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],              }}          <defs>;"
            <linear_gradient id="neural_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;"
              <stop offset="0%" stop_color="#8b5cf6" stop_opacity="0.5" />;"
              <stop offset="50%" stop_color="#06b6d4" stop_opacity="0.3" />;"
              <stop offset="100%" stop_color="#ec4899" stop_opacity="0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (
            <motion.circle;`
              key={`neural-${i}`}`
              cx={`${20 + (i * 10)}%`}`
              cy={`${30 + (i * 5)}%`}"
              r="3";"
              fill="url (#neural_gradient)";
              animate={{}
                delay: i * 0 && 0.5,'"
                ease: 'easeInOut',              }}                ease: "easeInOut"
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
              }}
            />;
          ))}
        {/* Holographic Effects */}'
        <div className='absolute inset-0'>;
          <motion&& motion.div'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                ease: 'easeInOut',              }}

                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}'
        <div className='absolute inset-0'>
'
                ease: 'easeInOut',              }}

=======

              }}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              }}

            />
          ))}
<<<<<<< HEAD
        </svg>

        {/* Holographic Effects */}'
        <div className='absolute inset-0'>


<<<<<<< HEAD
<div className='absolute inset-0'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <motion.div
=======
          <motion.div'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
                delay: i * 0.5,'"
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}'
        <div className='absolute inset - 0'>;
          <motion.div;'
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';
            animate={{}
            animate={{}
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{}
              duration: 15,
              repeat: Infinity,

            }}

              duration: 15,
              repeat: Infinity,'"
              ease: 'linear',              ease: "linear"
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
ease: 'linear',
            }}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
ease: 'linear',
origin/cursor/automate-test-improve-and-merge-code-2533
            }}

            }}

          />
        </div>
<<<<<<< HEAD
        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>
=======
        {/* Data Streams */}'
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {[...Array(20)].map((_, i) => (
            <motion.div;`
              key={`stream-${i}`}'
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{}`
                right: `${Math.random() * 32}px``
                top: `${i * 5}%`'
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;`
              key={`stream-${i}`}'
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{}
            <motion.div;`
                right: `${Math.random () * 32}px`,`
                top: `${i * 5}%`,
              }}
              animate={{}
                height: [8, 32, 8],`
                top: `${i * 5}%``
                right: `${Math.random () * 32}px`,`
                top: `${i * 5}%`;
              }}
<<<<<<< HEAD
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3],
origin/cursor/automate-test-improve-and-merge-code-2533
              }}
              animate={{


              transition={{
=======
              animate={{}
              transition={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,'
                ease: 'easeInOut',              }}

ease: 'easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
              }}



              }}



            />
          ))}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>
      </div>
    </>
<<<<<<< HEAD
              style={{right: `${Math.random() * 32}px`;
                top: `${i * 5}%`;
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (<motion.div;
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{<motion.div;
                right: `${Math.random () * 32}px`,top: `${i * 5}%`,}}
              animate={{height: [8, 32, 8],top: `${i * 5}%`;
                right: `${Math.random () * 32}px`,top: `${i * 5}%`;}}
              animate={{height: [8, 32, 8],opacity: [0.3, 1, 0.3],}}
              animate={{transition={{duration: 2 + Math.random() * 2,repeat: Infinity,delay: Math.random() * 2,ease: 'easeInOut',              }}ease: 'easeInOut',}}}}/>;
          ))}
        </div>;
      </div>;
    </>;
))height: [8, 32, 8];
                opacity: [0 && 0.3, 1, 0 && 0.3];
);  )
                height: [8, 32, 8]
                opacity: [0 && 0.3, 1, 0 && 0.3]
              }}
              transition={{ease: 'easeInOut',              }}                ease: "easeInOut";
=======
);  )
                height: [8;, 32, 8]
                opacity: [0 && 0.3;, 1, 0 && 0.3]
              }}
<<<<<<< HEAD
              transition={{'"
                ease: 'easeInOut',              }}                ease: "easeInOut"
=======
              transition={{
                ease: 'easeInOut';,              }}                ease: "easeInOut";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              }}
            />;
          ))}
        </div>;
      </div>;
    </>;
<<<<<<< HEAD
  ))}
  )}
                delay: Math.random () * 2,ease: 'easeInOut',              }}                ease: "easeInOut";
=======
  );  );
}
  )
}
<<<<<<< HEAD
                delay: Math.random () * 2,'"
                ease: 'easeInOut',              }}                ease: "easeInOut";
=======
                delay: Math.random () * 2;,
                ease: 'easeInOut';,              }}                ease: "easeInOut";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              }}
            />))}
        </div>;
      </div>;
    </>));
}
<<<<<<< HEAD

  );
    </>))}))
  )
}
=======

  );
<<<<<<< HEAD
<<<<<<< HEAD
);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
);
origin/cursor/automate-test-improve-and-merge-code-2533

);

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

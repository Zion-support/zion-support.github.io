<<<<<<< HEAD
import React, { useEffect, useRef } from 'react',;
import { motion } from 'framer-motion',;
;
const UltraFuturisticBackground:React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null),;
;
  useEffect(() => {;
    const canvas = canvasRef.current,;
    if (!canvas) return,;
;
    const ctx = canvas.getContext('2d'),;
    if (!ctx) return,;
;
    canvas.width = window.innerWidth,;
    canvas.height = window.innerHeight,;
;
    // Quantum particle system;
    const particles:Array<{;
      x:number,;
      y:number,;
      vx:number,;
      vy:number,;
      size:number,;
      color:string,;
      life:number,;
      maxLife:number;
    }> = [],;
;
    // Create initial particles;
    for (let i = 0, i < 100, i++) {;
      particles.push({;
        x:Math.random() * canvas.width,;
        y:Math.random() * canvas.height,;
        vx:(Math.random() - 0.5) * 2,;
        vy:(Math.random() - 0.5) * 2,;
        size:Math.random() * 3 + 1,;
        color:`hsl(${Math.random() * 360}, 70%, 60%)`,;
        life:Math.random() * 100,;
        maxLife:100;
      }),;
    }
;
    // Animation loop;
    const animate = () => {;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)',;
      ctx.fillRect(0, 0, canvas.width, canvas.height),;
;
      // Update and draw particles;
      particles.forEach((particle, index) => {;
        particle.x += particle.vx,;
        particle.y += particle.vy,;
        particle.life--,;
;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width,;
        if (particle.x > canvas.width) particle.x = 0,;
        if (particle.y < 0) particle.y = canvas.height,;
        if (particle.y > canvas.height) particle.y = 0,;
;
        // Draw particle;
        ctx.beginPath(),;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),;
        ctx.fillStyle = particle.color,;
        ctx.globalAlpha = particle.life / particle.maxLife,;
        ctx.fill(),;
;
        // Reset particle if it dies;
        if (particle.life <= 0) {;
          particles[index] = {;
            x:Math.random() * canvas.width,;
            y:Math.random() * canvas.height,;
            vx:(Math.random() - 0.5) * 2,;
            vy:(Math.random() - 0.5) * 2,;
            size:Math.random() * 3 + 1,;
            color:`hsl(${Math.random() * 360}, 70%, 60%)`,;
            life:100,;
            maxLife:100;
          },;
        }
      }),;
;
      // Draw quantum entanglement lines;
      particles.forEach((particle1, i) => {;
        particles.slice(i + 1).forEach((particle2) => {;
          const distance = Math.sqrt(;
            Math.pow(particle1.x - particle2.x, 2) + ;
            Math.pow(particle1.y - particle2.y, 2);
          ),;
          ;
          if (distance < 100) {;
            ctx.beginPath(),;
            ctx.moveTo(particle1.x, particle1.y),;
            ctx.lineTo(particle2.x, particle2.y),;
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`,;
            ctx.lineWidth = 1,;
            ctx.stroke(),;
          }
        }),;
      }),;
;
      requestAnimationFrame(animate),;
    },;
;
    animate(),;
;
    // Handle resize;
    const handleResize = () => {;
      canvas.width = window.innerWidth,;
      canvas.height = window.innerHeight,;
    },;
;
    window.addEventListener('resize', handleResize),;
;
    return () => {;
      window.removeEventListener('resize', handleResize),;
    },;
  }, []),;
;
  return (;
    <div className="fixed inset-0 -z-10 overflow-hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvasRef}
        className="absolute inset-0 w-full h-full";
        style={{ background:'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />;
;
      {/* Quantum Grid */}
      <div className="absolute inset-0">;
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />;
      </div>;
;
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">;
        {/* Hexagon */}
        <motion.div;
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30";
          style={{;
            clipPath:'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
=======
import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion',
const UltraFuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null),

  useEffect(() => {
    const canvas = canvasRef.current,
    if (!canvas) return,

    const ctx = canvas.getContext('2d'),
    if (!ctx) return,
    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    // Quantum particle system,
const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
      maxLife: number
    }> = [],

    // Create initial particles,
for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,        life: Math.random() * 100,
        maxLife: 100
      })
    }

    // Animation loop,
const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)',
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles,
particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
        particle.life--,
        // Wrap around edges,
if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle,
ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.life / particle.maxLife,
        ctx.fill(),
        // Reset particle if it dies,
if (particle.life <= 0) {
          particles[index] = {
            x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, size: Math.random() * 3 + 1, color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            life: 100,
            maxLife: 100
          }
        }
      }),

      // Draw quantum entanglement lines,
particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach((particle2) => {
          const distance = Math.sqrt(
            Math.pow(particle1.x - particle2.x, 2) + 
            Math.pow(particle1.y - particle2.y, 2)
          ),
          
          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particle1.x, particle1.y),
            ctx.lineTo(particle2.x, particle2.y),
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`,
            ctx.lineWidth = 1,
            ctx.stroke()          }
        })
      }),

      requestAnimationFrame(animate)
    },

    animate(),

    // Handle resize,
const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },
    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Canvas Background */}
      <canvas,
ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' }}
      />

      {/* Quantum Grid */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)1px,transparent1px),linear-gradient(90deg,rgba(0,255,255,0.1)1px,transparent1px)] bg-[size:50px50px] opacity-20&quot; />
      </div>

      {/* Floating Geometric Shapes */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Hexagon */}
        <motion.div,
className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/30&quot;
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          }}
          animate={{;
            rotate:[0, 360],;
            scale:[1, 1.2, 1],;
            opacity:[0.3, 0.6, 0.3];
          }}
<<<<<<< HEAD
          transition={{;
            duration:20,;
            repeat:Infinity,;
            ease:"linear";
          }}
        />;
;
        {/* Triangle */}
        <motion.div;
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30";
          style={{;
            clipPath:'polygon(50% 0%, 0% 100%, 100% 100%)';
=======
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: &quot;linear&quot
          }}        />

        {_/* Triangle */}
        <motion.div,
className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/30&quot;
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          }}
          animate={{;
            rotate:[360, 0],;
            scale:[1, 1.3, 1],;
            opacity:[0.3, 0.7, 0.3];
          }}
<<<<<<< HEAD
          transition={{;
            duration:15,;
            repeat:Infinity,;
            ease:"linear";
          }}
        />;
;
        {/* Circle */}
        <motion.div;
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full";
          animate={{;
            scale:[1, 1.5, 1],;
            opacity:[0.2, 0.8, 0.2];
          }}
          transition={{;
            duration:12,;
            repeat:Infinity,;
            ease:"easeInOut";
          }}
        />;
;
        {/* Square */}
        <motion.div;
          className="absolute bottom-20 right-20 w-28 h-28 border border-green-400/30";
          animate={{;
            rotate:[0, 180, 360],;
            scale:[1, 1.1, 1],;
            opacity:[0.3, 0.6, 0.3];
          }}
          transition={{;
            duration:18,;
            repeat:Infinity,;
            ease:"linear";
=======
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: &quot;linear&quot
          }}        />

        {_/* Circle */}
        <motion.div,
className=&quot;absolute bottom-32 left-1/3 w-20 h-20 border border-blue-400/30 rounded-full&quot;
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot
          }}        />

        {_/* Square */}
        <motion.div,
className=&quot;absolute bottom-20 right-20 w-28 h-28 border border-green-400/30&quot;
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: &quot;linear&quot
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
          }}
        />;
      </div>;
;
      {/* Energy Orbs */}
<<<<<<< HEAD
      <div className="absolute inset-0">;
        {[...Array(8)].map((_, i) => (;
          <motion.div;
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm";
            style={{;
              left:`${20 + (i * 10)}%`,;
              top:`${30 + (i * 5)}%`;
=======
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(8)].map((_, i) => (
          <motion.div,
key={i}
            className=&quot;absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-sm&quot;
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            }}
            animate={{;
              scale:[0.5, 2, 0.5],;
              opacity:[0.3, 1, 0.3],;
              y:[0, -20, 0];
            }}
<<<<<<< HEAD
            transition={{;
              duration:3 + i * 0.5,;
              repeat:Infinity,;
              ease:"easeInOut",;
              delay:i * 0.3;
            }}
          />;
=======
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: &quot;easeInOut&quot;,
              delay: i * 0.3            }}
            animate={_{
              scale: [0.5, 2, 0.5], opacity: [0.3, 1, 0.3], y: [0, _-20, 0]}}
            transition={_{
              duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3}}
          />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        ))}
      </div>;
;
      {/* Quantum Wave Effects */}
<<<<<<< HEAD
      <div className="absolute inset-0">;
        {[...Array(5)].map((_, i) => (;
          <motion.div;
            key={i}
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent";
            style={{;
              top:`${20 + (i * 15)}%`;
=======
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(5)].map((_, i) => (
          <motion.div,
key={i}
            className=&quot;absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent&quot;
            style={{
              top: `${20 + (i * 15)}%`
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            }}
            animate={{;
              x:['-100%100%'],;
              opacity:[0, 1, 0];
            }}
<<<<<<< HEAD
            transition={{;
              duration:8 + i * 2,;
              repeat:Infinity,;
              ease:"linear",;
              delay:i * 1.5;
            }}
          />;
=======
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: &quot;linear&quot;,
              delay: i * 1.5
            }}          />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        ))}
      </div>;
;
      {/* Neon Glow Effects */}
<<<<<<< HEAD
      <div className="absolute inset-0">;
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />;
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />;
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500" />;
      </div>;
;
      {/* Data Stream Effect */}
      <div className="absolute inset-0">;
        {[...Array(20)].map((_, i) => (;
          <motion.div;
            key={i}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent";
            style={{;
              left:`${Math.random() * 100}%`,;
              top:'-2rem';
=======
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot; />
        <div className=&quot;absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-500&quot; />
      </div>

      {/* Data Stream Effect */}
      <div className=&quot;absolute inset-0&quot;>
        {[...Array(20)].map((_, i) => (
          <motion.div,
key={i}
            className=&quot;absolute w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: '-2rem'
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
            }}
            animate={{;
              y:['0vh100vh'],;
              opacity:[0, 1, 0];
            }}
<<<<<<< HEAD
            transition={{;
              duration:4 + Math.random() * 3,;
              repeat:Infinity,;
              ease:"linear",;
              delay:Math.random() * 5;
            }}
          />;
=======
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: &quot;linear&quot;,
              delay: Math.random() * 5
            }}          />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
        ))}
      </div>;
;
      {/* Quantum Entanglement Lines */}
<<<<<<< HEAD
      <div className="absolute inset-0">;
        <svg className="w-full h-full">;
          <defs>;
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="rgba(0,255,255,0.3)" />;
              <stop offset="50%" stopColor="rgba(255,0,255,0.3)" />;
              <stop offset="100%" stopColor="rgba(0,255,255,0.3)" />;
            </linearGradient>;
          </defs>;
          {[...Array(15)].map((_, i) => (;
            <motion.line;
              key={i}
=======
      <div className=&quot;absolute inset-0&quot;>
        <svg className=&quot;w-full h-full&quot;>          <defs>
            <linearGradient id=&quot;quantumGradient&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;>
              <stop offset=&quot;0%&quot; stopColor=&quot;rgba(0,255,255,0.3)&quot; />
              <stop offset=&quot;50%&quot; stopColor=&quot;rgba(255,0,255,0.3)&quot; />
              <stop offset=&quot;100%&quot; stopColor=&quot;rgba(0,255,255,0.3)&quot; />
            </linearGradient>
          </defs>
          {_[...Array(15)].map(_(_, i) => (
            <motion.line,
key={i}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              x1={Math.random() * 100}
              y1={Math.random() * 100}
              x2={Math.random() * 100}
              y2={Math.random() * 100}
<<<<<<< HEAD
              stroke="url(#quantumGradient)";
              strokeWidth="1";
              opacity="0.3";
              animate={{;
                opacity:[0.1, 0.5, 0.1],;
                strokeDasharray:[0, 100, 0];
              }}
              transition={{;
                duration:6 + i * 0.5,;
                repeat:Infinity,;
                ease:"easeInOut";
              }}
            />;
          ))}
        </svg>;
      </div>;
    </div>;
  ),;
},;
;
=======
              stroke=&quot;url(#quantumGradient)&quot;
              strokeWidth=&quot;1&quot;
              opacity=&quot;0.3&quot;
              animate={{
                opacity: [0.1, 0.5, 0.1],
                strokeDasharray: [0, 100, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: &quot;easeInOut&quot
              }}            />
          ))}
        </svg>
      </div>
    </div>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default UltraFuturisticBackground,
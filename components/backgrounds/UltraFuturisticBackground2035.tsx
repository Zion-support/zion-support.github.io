import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion'
export default function UltraFuturisticBackground2035() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return,

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = canvas.getContext('2d')
    if (!ctx) return,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1),
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    let animationFrameId: number
    let particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string
    }> = [],

    // Initialize particles
    const initParticles = () => {
      particles = [],
      const isSmallScreen = window.innerWidth < 768
      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100)
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
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
      }
    },

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1),
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1),
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0,

        // Draw particle
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity,
        ctx.fill(),

        // Draw connections
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140)
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        if (maxDistance > 0) {
          particles.forEach(_(otherParticle, _otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < maxDistance) {
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(otherParticle.x, otherParticle.y),
                ctx.strokeStyle = particle.color,
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08,
                ctx.lineWidth = 1,
                ctx.stroke()
              }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
            }
          })
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles)
      }
    },

    initParticles(),
    updateParticles(),

    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1),

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []),

  return (
    <>
      {_/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className=&quot;fixed inset-0 pointer-events-none z-0 overflow-hidden&quot;>
        {/* Floating Geometric Shapes */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full&quot;
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45&quot;
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />

        <motion.div
          className=&quot;absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full&quot;
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />

        {/* Neon Glow Effects */}
        <div className=&quot;absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse&quot; />
        <div className=&quot;absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000&quot; />
        <div className=&quot;absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000&quot; />

        {/* Animated Grid Lines */}
        <div className=&quot;absolute inset-0 opacity-10&quot;>
          <div className=&quot;absolute inset-0&quot; style={{
            backgroundImage: `
              linear-gradient(rgba(139, _92, _246, _0.3) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(139, _92, _246, _0.3) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px'}} />
        </div>

        {_/* Floating Particles */}
        {_[...Array(20)].map(_(_, _i) => (
          <motion.div
            key={i}
            className=&quot;absolute w-1 h-1 bg-purple-400 rounded-full&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: &quot;easeInOut&quot;
            }}
            animate={_{
              y: [0, _-30, _0], _opacity: [0, _1, _0], _scale: [0, _1, _0]}}
            transition={_{
              duration: 3 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2, _ease: "easeInOut"}}
          />
        ))}

        {_/* Energy Waves */}
        <motion.div
          className=&quot;absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent&quot;
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />

        <motion.div
          className=&quot;absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent&quot;
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: &quot;easeInOut&quot;
          }}
        />

        {_/* Quantum Dots */}
        {_[...Array(15)].map(_(_, _i) => (
          <motion.div
            key={`quantum-${i}`}
            className=&quot;absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full&quot;
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: &quot;easeInOut&quot;
            }}
            animate={_{
              scale: [0, _1, _0], _opacity: [0, _0.8, _0], _rotate: [0, _360]}}
            transition={_{
              duration: 5 + Math.random() * 3, _repeat: Infinity, _delay: Math.random() * 5, _ease: "easeInOut"}}
          />
        ))}

        {/* Neural Network Connections */}
        <svg className=&quot;absolute inset-0 w-full h-full opacity-20&quot;>
          <defs>
            <linearGradient id=&quot;neuralGradient&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;>
              <stop offset=&quot;0%&quot; stopColor=&quot;#8b5cf6&quot; stopOpacity=&quot;0.5&quot; />
              <stop offset=&quot;50%&quot; stopColor=&quot;#06b6d4&quot; stopOpacity=&quot;0.3&quot; />
              <stop offset=&quot;100%&quot; stopColor=&quot;#ec4899&quot; stopOpacity=&quot;0.5&quot; />
            </linearGradient>
          </defs>
          
          {_[...Array(8)].map(_(_, _i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r=&quot;3&quot;
              fill=&quot;url(#neuralGradient)&quot;
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: &quot;easeInOut&quot;
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className=&quot;absolute inset-0&quot;>
          <motion.div
            className=&quot;absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full&quot;
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: &quot;linear&quot;
            }}
          />
          
          <motion.div
            className=&quot;absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full&quot;
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: &quot;linear&quot;
            }}
          />
        </div>

        {/* Data Streams */}
        <div className=&quot;absolute right-0 top-0 w-32 h-full opacity-30&quot;>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className=&quot;absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent&quot;
              style={{
                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: &quot;easeInOut&quot;
              }}
              animate={_{
                height: [8, _32, _8], _opacity: [0.3, _1, _0.3]}}
              transition={_{
                duration: 2 + Math.random() * 2, _repeat: Infinity, _delay: Math.random() * 2, _ease: "easeInOut"}}
            />
          ))}
        </div>
      </div>
    </>
  )
}
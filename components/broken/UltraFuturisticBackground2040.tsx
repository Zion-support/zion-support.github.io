import React, { useEffect, useRef } from 'react',
import { motion } from 'framer-motion'
const UltraFuturisticBackground2040: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return,

    const ctx = canvas.getContext('2d')
    if (!ctx) return,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number
    let time = 0

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      opacity: number
    }> = [],

    // Initialize particles
    for (let i = 0, i < 100, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)],
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    const animate = () => {
      time += 0.01,
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)',
      ctx.fillRect(0, 0, canvas.width, canvas.height),

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle with glow effect
        ctx.save(),
        ctx.globalAlpha = particle.opacity,
        
        // Glow effect
        ctx.shadowColor = particle.color,
        ctx.shadowBlur = 10,
        
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.fill(),
        
        ctx.restore()
      }),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)',
      ctx.lineWidth = 0.5,
      
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath(),
            ctx.moveTo(particles[i].x, particles[i].y),
            ctx.lineTo(particles[j].x, particles[j].y),
            ctx.stroke()
          }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)',
      ctx.lineWidth = 0.5,
      
      const gridSize = 50
      const offset = (time * 20) % gridSize
      
      for (let x = offset, x < canvas.width, x += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, canvas.height),
        ctx.stroke()
      }
      
      for (let y = offset, y < canvas.height, y += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(canvas.width, y),
        ctx.stroke()
      }

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
      ],

      shapes.forEach((shape, index) => {
        ctx.save(),
        ctx.translate(shape.x, shape.y),
        ctx.rotate(shape.rotation),
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`,
        ctx.lineWidth = 2,
        
        if (index === 0) {
          // Square
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size)
        } else if (index === 1) {
          // Circle
          ctx.beginPath(),
          ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2),
          ctx.stroke()
        } else {
          // Triangle
          ctx.beginPath(),
          ctx.moveTo(0, -shape.size/2),
          ctx.lineTo(shape.size/2, shape.size/2),
          ctx.lineTo(-shape.size/2, shape.size/2),
          ctx.closePath(),
          ctx.stroke()
        }
      const _gridSize = 50;
      const _offset = (time * 20) % gridSize;
      
      for (let x = offset; x < canvas.width; x += gridSize) {_ctx.beginPath();
        ctx.moveTo(x, _0);
        ctx.lineTo(x, _canvas.height);
        ctx.stroke();}
      
      for (let y = offset; y < canvas.height; y += gridSize) {_ctx.beginPath();
        ctx.moveTo(0, _y);
        ctx.lineTo(canvas.width, _y);
        ctx.stroke();}

      // Draw floating geometric shapes
      const _shapes = [
        {_x: canvas.width * 0.2, _y: canvas.height * 0.3, _size: 60, _rotation: time * 0.5},
        {_x: canvas.width * 0.8, _y: canvas.height * 0.7, _size: 40, _rotation: time * -0.3},
        {_x: canvas.width * 0.6, _y: canvas.height * 0.2, _size: 50, _rotation: time * 0.7}
      ];

      shapes.forEach(_(shape, _index) => {_ctx.save();
        ctx.translate(shape.x, _shape.y);
        ctx.rotate(shape.rotation);
        
        
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        ctx.restore()
      }),

      // Draw energy waves
      const waveCount = 3
      for (let i = 0, i < waveCount, i++) {
        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200)
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50
        
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`,
        ctx.lineWidth = 3,
        
        ctx.beginPath(),
        for (let x = -100, x < canvas.width + 100, x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20
          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        }
        ctx.stroke()
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
    <div className=&quot;fixed inset-0 pointer-events-none overflow-hidden&quot;>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80&quot; />
      <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60&quot; />
      
      {/* Floating Elements */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Animated Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-20&quot;>
          <div className=&quot;absolute top-0 left-0 w-full h-full&quot; style={{
            backgroundImage: `
              linear-gradient(rgba(6, _182, _212, _0.1) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(6, _182, _212, _0.1) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px', _animation: 'gridMove 20s linear infinite'}} />
        </div>
        
        {_/* Floating Geometric Elements */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full&quot;
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45&quot;
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        {_/* Additional Floating Elements */}
        <motion.div
          className=&quot;absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12&quot;
          animate={{
            rotate: [12, 372],
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: &quot;linear&quot;
          }}
        />
        
        {_/* Particle Effects */}
        <motion.div
          className=&quot;absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full&quot;
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;
          }}
        />
        
        <motion.div
          className=&quot;absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full&quot;
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 1
          }}
        />
        
        <motion.div
          className=&quot;absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-pink-400/40 rounded-full&quot;
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: &quot;easeInOut&quot;,
            delay: 2
          }}
        />
      </div>
      
      {_/* CSS Animations */}
      <style jsx>{_`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0)
          }
          100% {
            transform: translate(50px, 50px)
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px)
          }
          50% {
            transform: translateY(-20px)
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2
          }
          50% {
            opacity: 0.5
          }
            transform: translate(0, _0);}
          100% {_transform: translate(50px, _50px);}
        }
        
        @keyframes float {_0%, _100% {
            transform: translateY(0px);}
          50% {_transform: translateY(-20px);}
        }
        
        @keyframes pulse {_0%, _100% {
            opacity: 0.2;}
          50% {_opacity: 0.5;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      `}</style>
    </div>
  )
},

export default UltraFuturisticBackground2040

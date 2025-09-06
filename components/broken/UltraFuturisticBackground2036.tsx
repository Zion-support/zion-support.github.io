import React, { useEffect, useRef } from 'react',

interface UltraFuturisticBackground2036Props {
  variant?: 'default' | 'quantum' | 'space' | 'ai' | 'cyber',
  intensity?: 'low' | 'medium' | 'high'
}

export default function UltraFuturisticBackground2036({ 
  variant = 'default',
  intensity = 'medium' 
}: UltraFuturisticBackground2036Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (typeof window === 'undefined') return,
    
    const canvas = canvasRef.current
    if (!canvas) return,

    const ctx = canvas.getContext('2d')
    if (!ctx) return,

    const resizeCanvas = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    let animationFrameId: number
    let particles: Particle[] = []
    let connections: Connection[] = []

    let animationFrameId: number
    let particles: Particle[] = []
    const connections: Connection[] = []
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      type: 'quantum' | 'neon' | 'energy' | 'data'
    }> = [],

    const colors = {
      quantum: ['#00ffff#0080ff#8000ff#ff0080'],
      neon: ['#00ff00#ff00ff#ffff00#00ffff'],
      energy: ['#ff6600#ff0066#6600ff#00ff66'],
      data: ['#00ccff#cc00ff#ffcc00#00ffcc']
    },

    const intensityMultiplier = {
      low: 0.5,
      medium: 1,
      high: 1.5
    },

    const variantConfig = {
      default: { particleCount: 50, speed: 1, size: 2 },
      quantum: { particleCount: 80, speed: 1.5, size: 3 },
      space: { particleCount: 100, speed: 0.8, size: 2.5 },
      ai: { particleCount: 120, speed: 2, size: 1.5 },
      cyber: { particleCount: 90, speed: 1.8, size: 2.2 }
    },

    const config = variantConfig[variant]
    const multiplier = intensityMultiplier[intensity]

    // Initialize particles
    for (let i = 0, i < config.particleCount * multiplier, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.speed * multiplier,
        vy: (Math.random() - 0.5) * config.speed * multiplier,
        size: Math.random() * config.size * multiplier,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        type: variant === 'default' ? ['quantumneonenergydata'][Math.floor(Math.random() * 4)] as any : variant
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      ),

      // Update and draw particles
      particles.forEach(_(particle, _index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width,
        if (particle.x > canvas.width) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height,
        if (particle.y > canvas.height) particle.y = 0,

        // Draw particle with glow effect
        ctx.save(),
        
        // Create glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        ),
        
        ctx.fillStyle = glowGradient,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2),
        ctx.fill(),
        
        // Draw core particle
        ctx.fillStyle = particle.color,
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fill(),
        
        ctx.restore(),

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          ),
          }
        })
      }),

      // Add floating geometric shapes
      if (variant === 'quantum' || variant === 'ai') {
        drawQuantumShapes(ctx, canvas, multiplier)
      }

      // Add data streams for AI variant
      if (variant === 'ai') {
        drawDataStreams(ctx, canvas, multiplier)
      }

      // Add space elements for space variant
      if (variant === 'space') {
        drawSpaceElements(ctx, canvas, multiplier)
      }

      // Add space elements for space variant
      if (variant === 'space') {_drawSpaceElements(ctx, _canvas, _multiplier);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

      animationRef.current = requestAnimationFrame(animate)
    },

    const drawQuantumShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = Date.now() * 0.001
        
        ctx.beginPath(),
        ctx.moveTo(-size, -size),
        ctx.lineTo(size, -size),
        ctx.lineTo(size, size),
        ctx.lineTo(-size, size),
        ctx.closePath(),
        ctx.stroke(),
        
        // Draw inner quantum dots
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 * multiplier})`,
        ctx.beginPath(),
        ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2),
        ctx.fill(),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        
        ctx.restore()
      }
    },

    const drawDataStreams = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = Date.now() * 0.001
        
        ctx.beginPath(),
        ctx.moveTo(x, startY),
        ctx.lineTo(x, streamY),
        ctx.stroke(),
        
        // Data packets
        ctx.fillStyle = `rgba(0, 255, 0, ${0.8 * multiplier})`,
        ctx.fillRect(x - 3, streamY - 3, 6, 6),
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
        
        ctx.restore()
      }
    },

    const drawSpaceElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = Date.now() * 0.001
      }
      
      // Draw nebula
      const _nebulaGradient = ctx.createRadialGradient(
        canvas.width * 0.7, canvas.height * 0.3, 0,
        canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier
      ),
      
      nebulaGradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)'),
      nebulaGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)'),
      nebulaGradient.addColorStop(1, 'transparent'),
      
      ctx.fillStyle = nebulaGradient,
      ctx.beginPath(),
      ctx.arc(canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier, 0, Math.PI * 2),
      ctx.fill()
    },

    animate(),

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [variant, intensity]),

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      <canvas
        ref={canvasRef}
        className=&quot;w-full h-full&quot;
        style={{ display: 'block' }}
      />
      
      {/* Additional overlay effects */}
      <div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {/* Grid overlay for cyber variant */}
        {variant === 'cyber' && (
          <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]&quot; />
        )}
        
        {/* Quantum field lines */}
        {variant === 'quantum' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent&quot;
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  transform: 'translateX(-50%)'
                }}
                animate={_{
                  opacity: [0.3, _0.8, _0.3]}}
                transition={_{
                  duration: 3, _repeat: Infinity, _delay: i * 0.5}}
              />
            ))}
          </div>
        )}
        
        {/* AI neural network overlay */}
        {variant === 'ai' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className=&quot;absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent&quot;
                style={{
                  top: `${(i + 1) * 16.67}%`}}
                animate={_{
                  opacity: [0.2, _0.6, _0.2]}}
                transition={_{
                  duration: 4, _repeat: Infinity, _delay: i * 0.8}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
},

export default UltraFuturisticBackground2036
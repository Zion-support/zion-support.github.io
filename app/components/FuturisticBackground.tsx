'use client'
import React, { useEffect, useRef } from 'react'

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system for futuristic effects
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      life: number
      maxLife: number
    }> = []

    const colors = ['#00ffff', '#8b5cf6', '#ec4899', '#10b981', '#3b82f6']

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy

      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width
          y = 0
          vx = (Math.random() - 0.5) * 2
          vy = Math.random() * 2 + 1
          break
        case 1: // Right
          x = canvas.width
          y = Math.random() * canvas.height
          vx = -(Math.random() * 2 + 1)
          vy = (Math.random() - 0.5) * 2
          break
        case 2: // Bottom
          x = Math.random() * canvas.width
          y = canvas.height
          vx = (Math.random() - 0.5) * 2
          vy = -(Math.random() * 2 + 1)
          break
        case 3: // Left
          x = 0
          y = Math.random() * canvas.height
          vx = Math.random() * 2 + 1
          vy = (Math.random() - 0.5) * 2
          break
        default:
          return
      }

      particles.push({
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 100
      })
    }

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++
        particle.opacity = (1 - particle.life / particle.maxLife) * 0.8

        if (particle.life >= particle.maxLife || 
            particle.x < -50 || particle.x > canvas.width + 50 ||
            particle.y < -50 || particle.y > canvas.height + 50) {
          particles.splice(i, 1)
        }
      }
    }

    const drawParticles = () => {
      particles.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color
        ctx.shadowBlur = 20
        ctx.shadowColor = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 150) * 0.3
            ctx.strokeStyle = '#00ffff'
            ctx.lineWidth = 1
            ctx.shadowBlur = 5
            ctx.shadowColor = '#00ffff'
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new particles
      if (Math.random() < 0.1) {
        createParticle()
      }

      updateParticles()
      drawConnections()
      drawParticles()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional Visual Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Holographic Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="holographic w-full h-full"></div>
        </div>
        
        {/* Cyber Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-grid w-full h-full"></div>
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl floating"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-cyan-500/20 blur-xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl floating" style={{ animationDelay: '4s' }}></div>
      </div>
    </>
  )
}

export default FuturisticBackground
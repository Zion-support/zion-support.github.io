'use client'
import React, { useEffect, useRef } from 'react'

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Background animation logic
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        // Set canvas size
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        
        // Animation loop
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          // Add background animation here
          requestAnimationFrame(animate)
        }
        
        animate()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: -1 }}
    />
  )
}

export default FuturisticBackground

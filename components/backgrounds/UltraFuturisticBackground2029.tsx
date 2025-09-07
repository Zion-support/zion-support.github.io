resizeCanvas ()
window.addEventListener ('resize', resizeCanvas)
// Initialize particles 
}particlesRef.current = particles 
}
initParticles ()
// Animation loop // Update and draw particles particlesRef.current.forEach ( (particle, index) => {
  // Update position particle.x += particle.vx
particle.y += particle.vy
// Wrap around edges if (particle.x < 0) particle.x = canvas.width
if (particle.x > canvas.width) particle.x = 0
if (particle.y < 0) particle.y = canvas.height
if (particle.y > canvas.height) particle.y = 0
// Draw particle ctx.save ()
ctx.globalAlpha = particle.opacity
// Different effects for different particle types switch (particle.type) {
  case 'quantum': // Quantum particles with glow effect 
}
}
}break
case 'holographic': // Holographic particles with rainbow effect case 'neural': // Neural particles with network connections ctx.fillStyle = particle.color
ctx.shadowColor = particle.color
ctx.shadowBlur = 10
ctx.beginPath ()
ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2)
ctx.fill ()
// Neural network connections if (index % 15 === 0) {
  const connections = particlesRef.current.filter (p => p.type === 'neural' && 
}break
case 'cyberpunk': // Cyberpunk particles with electric effect ctx.strokeStyle = particle.color
ctx.lineWidth = 2
ctx.shadowColor = particle.color
ctx.shadowBlur = 25
ctx.beginPath ()
ctx.moveTo (particle.x - particle.size, particle.y - particle.size)
ctx.lineTo (particle.x + particle.size, particle.y + particle.size)
ctx.moveTo (particle.x + particle.size, particle.y - particle.size)
ctx.lineTo (particle.x - particle.size, particle.y + particle.size)
ctx.stroke ()
break 
}ctx.restore () 
})
// Draw floating geometric shapes drawGeometricShapes (ctx, canvas.width, canvas.height)
// Draw energy waves drawEnergyWaves (ctx, canvas.width, canvas.height)
animationRef.current = requestAnimationFrame (animate) 
}
animate ()
}
}
// Horizontal energy waves for (let i = 0, i < 3, i++) {
  ctx.save ()
ctx.globalAlpha = 0.05
ctx.strokeStyle = `hsl ($ {
  180 + i * 60 
}, 70%, 60%) `
ctx.lineWidth = 2
ctx.beginPath ()
ctx.stroke ()
ctx.restore () 
}// Vertical energy waves ctx.stroke ()
ctx.restore () 
}
}
return (/> {
  /* Canvas for particle effects */ 
}<canvas /> {
  /* Holographic matrix */ 
}<motion.div /> {
  /* Neural network nodes */ 
}<motion.div left: `$ {
  20 + (i * 10) 
}%`
top: `$ {
  30 + (i * 8) 
}%`
filter: 'blur (1px) '
boxShadow: '0 0 20px rgba (0, 255, 255, 0.6) ' 
}
}animate= {
  {
  y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] 
}
}transition= {
  {
  duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 
}
}/>) ) 
}</div> </div>) 
}
resizeCanvas ()
window.addEventListener ('resize', resizeCanvas)
// Particle class constructor () {
  this.x = Math.random () * canvas.width
this.y = Math.random () * canvas.height
this.vx = (Math.random () - 0.5) * 2
this.vy = (Math.random () - 0.5) * 2
this.size = Math.random () * 3 + 1
this.life = Math.random () * 100
this.maxLife = 100
switch (this.type) {
  case 'quantum': this.color = `hsl ($ {
  180 + Math.random () * 60 
}, 70%, 60%) `
break
case 'neural': // Bounce off edges if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1
if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1
// Add some quantum randomness if (Math.random () < 0.01) {
  // Limit velocity this.vx = Math.max (-3, Math.min (3, this.vx) )
this.vy = Math.max (-3, Math.min (3, this.vy) ) 
}switch (this.type) {
  case 'quantum': // Quantum particles with wave function case 'neural': // Neural network nodes ctx.beginPath ()
ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2)
ctx.fillStyle = this.color
ctx.fill ()
// Neural connections 
}
})
break
case 'data': // Data streams ctx.fillStyle = this.color
ctx.fillRect (this.x - this.size/2, this.y - this.size/2, this.size, this.size)
// Data flow lines ctx.beginPath ()
ctx.moveTo (this.x, this.y)
ctx.lineTo (this.x + this.vx * 10, this.y + this.vy * 10)
ctx.strokeStyle = this.color
ctx.lineWidth = 1
ctx.stroke ()
break
case 'energy': // Energy particles with glow effect ctx.beginPath ()
ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2)
ctx.fillStyle = this.color
ctx.fill ()
// Glow effect 
}ctx.restore () 
}// Draw quantum field lines drawQuantumField (ctx, canvas.width, canvas.height)
// Draw neural network grid drawNeuralGrid (ctx, canvas.width, canvas.height)
animationRef.current = requestAnimationFrame (animate) 
}
// Quantum field lines ctx.stroke () 
}
}
// Neural network grid 
}
}
// Start animation initParticles ()
animate ()
// Cleanup /> {
  /* Quantum particle canvas */ 
}<canvas />) ) 
}{
  [...Array (6) ].map ( (, i) => (<motion.div key= {
  `square-$ {
  i 
}` 
}/>) ) 
}</div> />) ) 
}</div> </div>) 
}
export default UltraFuturisticBackground2046
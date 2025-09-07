canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particles: Array< {
  //Initialize particles with enhanced properties const initParticles = () => {
  const count = intensity === 'extreme' ? particleCount * 2 : intensity === 'high' ? particleCount : intensity === 'medium' ? Math.floor (particleCount * 0.7) : Math.floor (particleCount * 0.5)
for (let i = 0, i < count, i++) {
  particles.push ({
  
}
}
//Enhanced animation loop with quantum effects ctx.fillStyle = gradient
ctx.fillRect (0, 0, canvas.width, canvas.height)
//Update and draw particles with enhanced effects //Update position with quantum effects particle.x += particle.vx
particle.y += particle.vy
particle.rotation += particle.rotationSpeed
//Quantum entanglement effect 
}
}//Bounce off edges with quantum tunneling if (particle.x <= 0 || particle.x >= canvas.width) {
  if (enableQuantumEffects && Math.random () < 0.1) {
  //Quantum tunneling effect 
}if (particle.y <= 0 || particle.y >= canvas.height) {
  if (enableQuantumEffects && Math.random () < 0.1) {
  //Quantum tunneling effect 
}//Wrap around edges if (particle.x < 0) particle.x = canvas.width
if (particle.x > canvas.width) particle.x = 0
if (particle.y < 0) particle.y = canvas.height
if (particle.y > canvas.height) particle.y = 0
//Draw particle with enhanced effects ctx.save ()
ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife)
ctx.translate (particle.x, particle.y)
ctx.rotate (particle.rotation)
ctx.restore () 
})
//Add quantum field effects 
}
}//Add holographic matrix effect 
}animationRef.current = requestAnimationFrame (animate) 
}
//Handle window resize window.addEventListener ('resize', handleResize)
initParticles ()
animate ()
return (<div className="relative min-h-screen" > <canvas </div>) 
}{
  children 
}</div>) 
}
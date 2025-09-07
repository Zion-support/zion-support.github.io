const getColorScheme = () => {
  switch (colorScheme) {
  case 'quantum-fusion': return {
  
}
}
resizeCanvas ()
window.addEventListener ('resize', resizeCanvas)
//Initialize particles 
}
}
initParticles ()
//Animation loop //Update and draw particles particlesRef.current.forEach ( (particle, index) => {
  //Update position particle.x += particle.vx
particle.y += particle.vy
//Bounce off edges if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1
//Update life particle.life--
//Regenerate particle if it dies if (particle.life <= 0) {
  animationRef.current = requestAnimationFrame (animate) 
}
animate ()
ctx.strokeStyle = colors.primary
ctx.lineWidth = 0.5
ctx.globalAlpha = 0.3
return (<div className="fixed inset-0 -z-10 overflow-hidden" > <canvas background: [ `radial-gradient (circle at 20% 20%, $ {
  colors.glow 
}0%, transparent 50%) `
`radial-gradient (circle at 80% 80%, $ {
  colors.glow 
}0%, transparent 50%) `
`radial-gradient (circle at 20% 20%, $ {
  colors.glow 
}0%, transparent 50%) ` ] 
}
}/>) ) 
}</div> </div> </div>) 
}
export default UltraFuturisticBackground2035
canvas.width = window.innerWidth * (window.devicePixelRatio || 1)
canvas.height = window.innerHeight * (window.devicePixelRatio || 1)
if (ctx) {
  
}
}
//Update and draw particles //Wrap around edges if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1)
if (particle.x > canvas.width / (window.devicePixelRatio || 1) ) particle.x = 0
if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1)
if (particle.y > canvas.height / (window.devicePixelRatio || 1) ) particle.y = 0
//Draw particle if (maxDistance > 0) {
  particles.forEach ( (otherParticle, otherIndex) => {
  if (index !== otherIndex) {
  
}
}) 
}
})
initParticles ()
updateParticles ()
window.addEventListener ('resize', handleResize)
return (<> {
  /* Fixed Background Canvas */ 
}<canvas backgroundImage: `linear-gradient (rgba (139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient (90deg, rgba (139, 92, 246, 0.3) 1px, transparent 1px) `, backgroundSize: '50px 50px' 
}
}/> </div> {
  /* Floating Particles */ 
}{
  [...Array (20) ].map ( (, i) => (<motion.div key= {
  i 
}
}
}animate= {
  {
  y: [0, -30, 0], opacity: [0, 1, 0], scale: [0, 1, 0] 
}
}transition= {
  {
  duration: 3 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2, ease: "easeInOut" 
}
}/>) ) 
}{
  /* Energy Waves */ 
}<motion.div /> {
  /* Quantum Dots */ 
}{
  [...Array (15) ].map ( (, i) => (<motion.div key= {
  `quantum-$ {
  i 
}` 
}
}
}animate= {
  {
  scale: [0, 1, 0], opacity: [0, 0.8, 0], rotate: [0, 360] 
}
}transition= {
  {
  duration: 5 + Math.random () * 3, repeat: Infinity, delay: Math.random () * 5, ease: "easeInOut" 
}
}/>) ) 
}<defs> <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%" > <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" /> <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" /> <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" /> </linearGradient> </defs> {
  [...Array (8) ].map ( (, i) => (<motion.circle key= {
  `neural-$ {
  i 
}` 
}/>) ) 
}</svg> 
}
}animate= {
  {
  height: [8, 32, 8], opacity: [0.3, 1, 0.3] 
}
}transition= {
  {
  duration: 2 + Math.random () * 2, repeat: Infinity, delay: Math.random () * 2, ease: "easeInOut" 
}
}/>) ) 
}</div> </div> </>) 
}
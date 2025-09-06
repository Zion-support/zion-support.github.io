 useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
  updateDimensions ();
window.addEventListener ('resize', updateDimensions);
setIsVisible (true);
return () => window.removeEventListener ('resize', updateDimensions) 
}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  x: number;
y: number;
vx: number;
vy: number;
size: number;
color: string;
life: number;
maxLife: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
constructor () {
  // Bounce off edges if (this.x <= 0 || this.x >= dimensions.width) this.vx *= -1;
if (this.y <= 0 || this.y >= dimensions.height) this.vy *= -1;
// Quantum tunneling effect if (Math.random () < 0.001 * intensityMultiplier) {
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.beginPath ();
ctx.moveTo (this.x - this.size, this.y);
ctx.lineTo (this.x + this.size, this.y);
ctx.lineTo (this.x, this.y - this.size);
ctx.lineTo (this.x - this.size, this.y);
ctx.fillStyle = this.color;
ctx.fill ();
// Holographic grid ctx.strokeStyle = this.color;
ctx.lineWidth = 0.5;
ctx.globalAlpha = alpha * 0.5;
ctx.strokeRect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
case 'energy': // Energy field 
}ctx.restore () 
}
}// Create particles // Draw quantum entanglement lines ctx.strokeStyle = colors.primary;
ctx.lineWidth = 0.5;
ctx.globalAlpha = 0.3;
}
}// Draw holographic grid ctx.strokeStyle = colors.secondary;
ctx.lineWidth = 0.3;
ctx.globalAlpha = 0.2;
animationId = requestAnimationFrame (animate) 
};
animate ();
return (<div className= {
  `relative min-h-screen overflow-hidden $ {
  className 
}` 
}> {
  /* Quantum Holographic Canvas Background */ 
}<canvas background: [ `radial-gradient (circle at 20% 20%, $ {
  colors.primary 
}10 0%, transparent 50%) `;
`radial-gradient (circle at 80% 80%, $ {
  colors.secondary 
}10 0%, transparent 50%) `;
`radial-gradient (circle at 20% 80%, $ {
  colors.tertiary 
}10 0%, transparent 50%) `;
`radial-gradient (circle at 80% 20%, $ {
  colors.accent 
}10 0%, transparent 50%) ` ] 
}
}/>) ) 
}</div> {
  /* Quantum Fluctuations */ 
}<motion.div boxShadow: [ `inset 0 0 100px $ {
  colors.primary 
}20`;
`inset 0 0 200px $ {
  colors.secondary 
}20`;
`inset 0 0 150px $ {
  colors.tertiary 
}20`;
`inset 0 0 100px $ {
  colors.primary 
}20` ] 
}
}/> </div> </div>) 
}
 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles: Array< {
  const colors = [ '#00ffff', // Cyan '#ff00ff', // Magenta '#ffff00', // Yellow '#00ff00', // Green '#ff0080', // Pink '#8000ff', // Purple '#0080ff', // Blue '#ff8000' // Orange ];
switch (side) {
  case 0: // Top x = Math.random () * canvas.width;
y = -10;
vx = (Math.random () - 0.5) * 2;
vy = Math.random () * 2 + 1;
break;
case 1: // Right x = canvas.width + 10;
y = Math.random () * canvas.height;
vx = - (Math.random () * 2 + 1);
vy = (Math.random () - 0.5) * 2;
break;
case 2: // Bottom x = Math.random () * canvas.width;
y = canvas.height + 10;
vx = (Math.random () - 0.5) * 2;
vy = - (Math.random () * 2 + 1);
break;
case 3: // Left if (particle.life > particle.maxLife || particle.x < -20 || particle.x > canvas.width + 20 || particle.y < -20 || particle.y > canvas.height + 20) {
  // Draw particle ctx.save ();
ctx.globalAlpha = particle.alpha;
ctx.fillStyle = particle.color;
ctx.beginPath ();
ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
ctx.fill ();
// Draw glow effect const gradient = ctx.createRadialGradient (particle.x, particle.y, 0;
particle.x, particle.y, particle.size * 3);
gradient.addColorStop (0, particle.color);
gradient.addColorStop (1, 'transparent');
ctx.fillStyle = gradient;
ctx.beginPath ();
ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
ctx.fill ();
ctx.restore () 
});
// Draw connecting lines between nearby particles animationRef.current = requestAnimationFrame (animate) 
};
window.addEventListener ('resize', handleResize);
initParticles ();
animate ();
return (<div className= {
  `relative min-h-screen overflow-hidden $ {
  className 
}` 
}> {
  /* Animated Canvas Background */ 
}<canvas </div> </div>) 
};
export default UltraFuturisticBackground2026;

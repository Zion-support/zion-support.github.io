 canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Particle system const particles: Array< {
  alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50 
}) 
}// Animation loop // Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle // Add glow effect ctx.shadowColor = particle.color;
ctx.shadowBlur = 20;
ctx.fill ();
ctx.restore ();
// Remove dead particles and create new ones if (particle.life <= 0) {
  particles[index] = {
  x: Math.random () * canvas.width, y: Math.random () * canvas.height, vx: (Math.random () - 0.5) * 2, vy: (Math.random () - 0.5) * 2, size: Math.random () * 3 + 1, color: `hsl ($ {
  Math.random () * 360 
}, 70%, 60%) `;
alpha: Math.random () * 0.8 + 0.2;
life: Math.random () * 100 + 50 
}

};
export default UltraFuturisticBackground2045;

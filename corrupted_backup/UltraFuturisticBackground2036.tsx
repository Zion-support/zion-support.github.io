 let animationFrameId: number;
let particles: Particle[] = [];
const connections: Connection[] = [];
//Particle system //Update and draw particles particles.forEach ( (particle, index) => {
  //Update position particle.x += particle.vx;
particle.y += particle.vy;
//Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
//Draw particle with glow effect ctx.save ();
//Create glow effect ctx.fillStyle = glowGradient;
ctx.beginPath ();
ctx.arc (particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
ctx.fill ();
//Draw core particle ctx.fillStyle = particle.color;
ctx.beginPath ();
ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
ctx.fill ();
ctx.restore ();
//Draw connections between nearby particles 
}

export default UltraFuturisticBackground2036;

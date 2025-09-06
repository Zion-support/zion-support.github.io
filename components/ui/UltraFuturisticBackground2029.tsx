 resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Mouse move handler for interactive effects window.addEventListener ('mousemove', handleMouseMove);
// Initialize particles with different types 
}particlesRef.current = particles 
};
// Initialize energy fields for (let i = 0, i < 8, i++) {
  fields.push ({
  
}energyFieldsRef.current = fields 
};
initParticles ();
initEnergyFields ();
// Animation loop ctx.fillStyle = gradient;
ctx.beginPath ();
ctx.arc (field.x, field.y, field.radius, 0, Math.PI * 2);
ctx.fill () 
});
// Update and draw particles particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle with type-specific effects ctx.save ();
switch (particle.type) {
  case 'energy': // Energy particles with glow effect ctx.shadowColor = particle.color;
ctx.shadowBlur = 15;
ctx.globalCompositeOperation = 'screen';
break;
case 'data': // Data particles with digital effect ctx.globalCompositeOperation = 'multiply';
break;
case 'quantum': // Quantum particles with uncertainty effect ctx.globalCompositeOperation = 'overlay';
ctx.shadowColor = particle.color;
ctx.shadowBlur = 10;
break;
case 'neon': // Neon particles with bright glow ctx.beginPath ();
ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
ctx.fillStyle = particle.color + Math.floor (currentOpacity * 255) .toString (16) .padStart (2, '0');
ctx.fill ();
ctx.restore ();
// Draw connections between nearby particles 
}ctx.stroke () 
}// Draw neural network connections ctx.strokeStyle = 'rgba (255, 0, 255, 0.1) ';
ctx.lineWidth = 1;
animationRef.current = requestAnimationFrame (animate) 
};
animate ();
</div> </div>) 
}
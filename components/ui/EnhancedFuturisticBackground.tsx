const colorSchemes = {
  quantum: {
  resizeCanvas ()
window.addEventListener ('resize', resizeCanvas)
// Wrap around edges if (this.x < 0) this.x = canvas.width
if (this.x > canvas.width) this.x = 0
if (this.y < 0) this.y = canvas.height
if (this.y > canvas.height) this.y = 0
// Fade out near end of life if (this.life < 20) {
  
}
}let particles: Particle[] = []
let connections: Connection[] = []
// Initialize particles ctx.fillStyle = colors.primary
ctx.font = `$ {
  fontSize 
}px monospace`
}
}
return drawMatrix 
}
// Draw matrix rain drawMatrix ()
// Update and draw particles particles.forEach (particle => {
  
}
}// Draw connections connections.forEach (connection => connection.draw () )
// Add floating geometric shapes ctx.save ()
ctx.globalAlpha = 0.1
ctx.strokeStyle = colors.accent
ctx.lineWidth = 1
if (Math.random () < 0.5) {
  // Draw triangle ctx.restore () 
}// Respect reduced motion animate ()
return (<div className= {
  `relative min-h-screen $ {
  className 
}` 
}> <canvas /> {
  /* Overlay gradient */ 
}<div </div> </div>) 
}
ctx.restore();}
        }
      }
    }
    let particles: Particle[] = [];
    let connections: Connection[] = [];

// Initialize particles;
for (let i = 0; i < settings.particleCount; i++) {}
      particles.push(new Particle());}
    }
    // Matrix rain effect;
const matrixRain = (;
  const characters =
        '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

const fontSize = 12;

const columns = canvas.width / fontSize;

const drops: number[] = [];

for (let i = 0; i < columns; i++) {
        drops[i] = 1;) => {
  return $3;}
}
      }

const drawMatrix = (
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors.primary;) => {
  return $3;}
}
        ctx.font = `${fontSize}px monospace`;


for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {}
            drops[i] = 0;}
          }
          drops[i]++;
        }
      };


      return drawMatrix;
};


const drawMatrix = matrixRain();
    // Main animation loop;
const animate = (
      // Clear canvas with fade effect;
ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw matrix rain;
drawMatrix();
      // Update and draw particles;
particles.forEach(particle => {
        particle.update();

particle.draw();) => {
  return $3;}
}
      });
      // Remove dead particles and add new ones;
particles = particles.filter(particle => !particle.isDead());
      while (particles.length < settings.particleCount) {
}
particles.push(new Particle());}
      }

      // Create connections between nearby particles;
connections = [];
for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            Math.pow(particles[i].x - particles[j].x, 2) +
              Math.pow(particles[i].y - particles[j].y, 2)
          );
          if (distance < 150) {
}
            connections.push(new Connection(particles[i], particles[j]));}
          }

        }
      }// Draw connections;
      connections.forEach(connection => connection.draw())// Add floating geometric shapes;
      if (Math.random() < 0.02) {const x = Math.random() * canvas.width;

const y = Math.random() * canvas.height;

const size  = Math.random() * 20 + 10;ctx.save()ctx.globalAlpha = 0.1;
        ctx.strokeStyle = colors.accent;

        ctx.lineWidth = 1;

        if (Math.random() < 0.5) {
          // Draw triangle;
ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x - size, y + size);
          ctx.lineTo(x + size, y + size);
          ctx.closePath();
}
ctx.stroke();}
        } else {
          // Draw square;}
          ctx.stroke_rect (x - size, y - size, size * 2, size * 2);}
        }

        ctx.restore();
      }
      // Respect reduced motion;
const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'

      ).matches;
      if (prefersReduced) {// Slow down updates;}
        setTimeout(() => {animationRef.current = requestAnimationFrame(animate)}, 100)} else {animationRef.current = requestAnimationFrame(animate)}
    }

    animate();
    return () => {
      if (animationRef.current) {}
cancelAnimationFrame(animationRef.current);}
      }
      window.removeEventListener('resize', resizeCanvas)
};

  }, [colorScheme, intensity, particleCount, animationSpeed]);

  return (
    <div className={`relative min-h-screen ${className}`} />

      <canvas;
ref={canvasRef}

className='fixed inset-0 w-full h-full pointer-events-none z-0'

        style={{background: 'transparent' }
}
      />;
      {/* Overlay gradient */}
      <div;
        className='fixed inset - 0 pointer - events - none z - 0';

        style={{
}
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)`,}
        }}
      />

      {/* Content */}
      <div className='relative z-10' />{children}</div>
    </div>
  )
};


export default EnhancedFuturisticBackground;



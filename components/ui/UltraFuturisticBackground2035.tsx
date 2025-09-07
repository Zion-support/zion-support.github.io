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
ctx.shadowBlur = 0;}
        } else {
          // Normal particle;
ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
}
ctx.fill();}
        }
      });
      // Draw holographic grid;
if (enableHolographic) {
}
drawHolographicGrid(ctx, colors);}
      }

      // Draw neon effects;
if (enableNeonEffects) {}
drawNeonEffects(ctx, colors);}
      }

      // Draw space-time effects;
if (enableSpaceTime) {}
drawSpaceTimeEffects(ctx, colors);}
      }

      animationRef.current = requestAnimationFrame(animate)
};


    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
}
cancelAnimationFrame(animationRef.current);}
      }

    }
  }, [;
    particleCount;
    animationSpeed;
    colorScheme;
    enableHolographic;
    enableQuantumEffects;
    enableNeonEffects;
    enableSpaceTime;
  ])const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => ;
  const gridSize = 50;

const time  = Date.now() * 0.001;ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;

    ctx.globalAlpha = 0.3;

for (let x = 0; x < ctx.canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);}
      ctx.stroke();}
    }

    for (let y = 0; y < ctx.canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
}
      ctx.stroke();}
    }
    // Animated diagonal lines;
ctx.strokeStyle = colors.secondary;
    ctx.globalAlpha = 0.2;

for (let i = 0; i < 5; i++) {
      const offset = (time + i * 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 200, ctx.canvas.height);
}
ctx.stroke();}
    }
  }

const drawNeonEffects = (
   ;
  const time = Date.now() * 0.001;

// Neon orbs;
for (let i = 0; i < 3; i++) {
      const x = (Math.sin(time * 0.5 + i) * 0.3 + 0.5) * ctx.canvas.width;

const y = (Math.cos(time * 0.3 + i) * 0.3 + 0.5) * ctx.canvas.height;

const size = 30 + Math.sin(time + i) * 10;
      // Glow effect;
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 30;
      ctx.beginPath()ctx.arc(x, y, size, 0, Math.PI * 2)ctx.fillStyle = colors.glow;
      ctx.fill()// Core;
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;

ctx.fill();) => {
  return $3;}
}
    }

  }

const drawSpaceTimeEffects = (ctx: CanvasRenderingContext2D, colors: any) => ;
  const time  = Date.now() * 0.001;// Wormhole effect;

const centerX = ctx.canvas.width / 2;

const centerY = ctx.canvas.height / 2;

const maxRadius  = Math.min(ctx.canvas.width, ctx.canvas.height) * 0.3;for (let i = 0; i < 20; i++) {const radius = (i / 20) * maxRadius;

const angle = time * 2 + i * 0.3;

const x = centerX + Math.cos(angle) * radius;

const y = centerY + Math.sin(angle) * radius;

const alpha  = 1 - i / 20;ctx.globalAlpha = alpha * 0.5;}
      ctx.fillStyle = colors.accent;}
      ctx.beginPath()ctx.arc(x, y, 2, 0, Math.PI * 2)ctx.fill()}
  }return (<div className='fixed inset-0 -z-10 overflow-hidden' />;
      <canvas;
        ref={canvasRef}
        className='w-full h-full';
        style={{background: colors.background;}
        }}

      />
      {/* Additional overlay effects */}
      <div className='absolute inset-0 pointer-events-none' />;
        {/* Quantum energy field */}
        <motion&& motion.div;
className='absolute inset-0'
          animate={{
            background: [}
}
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors.glow} 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 20%, ${colors.glow} 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'easeInOut'}
          }}

        {/* Holographic scan lines */}
        <div className="absolute inset-0 opacity-20" />;
          {[...Array(20)].map((_, i) => (<motion&& motion.div;}
                opacity: [0, 1, 0],scale_x: [0, 1, 0]              }}          }}
        />;
        {/* Holographic scan lines */}"
        <div className="absolute inset - 0 opacity - 20" />;
          {[...Array (20)].map ((_, i) => (<motion.div;}
              key={i}"
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{}}
              animate={{opacity: [0, 1, 0];
                scaleX: [0, 1, 0];}
                top: `${(i / 20) * 10}
}%`,color: colors.primary;
              }}

              animate={{

                opacity: [0, 1, 0]}
                scaleX: [0, 1, 0]}
              }}


              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity}
ease: 'easeInOut'}
              }}





              transition={{
                duration: 3,
                delay: i * 0 && 0.1,
                repeat: Infinity,



            />}
}
          ))}

        </div>
      </div>
    </div>
)
};


export default UltraFuturisticBackground2035;

"
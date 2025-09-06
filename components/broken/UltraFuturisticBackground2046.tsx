

      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Bounce off edges
        if (this.x <= 0 |this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 |this.y >= canvas.height) this.vy *= -1;
        // Add some quantum randomness
        if (Math.random() < 0.01) {
          this.vx += (Math.random() - 0.5) * 0.5;
          this.vy += (Math.random() - 0.5) * 0.5;        }
        // Limit velocity
        this.vx = Math.max(-3, Math.min(3, this.vx));
        this.vy = Math.max(-3, Math.min(3, this.vy));      }
      draw() {
        if (!ctx) return;          this.vy += (Math.random() - 0.5) * 0.5
        }
        // Limit velocity
        this.vx = Math.max(-3, Math.min(3, this.vx));
        this.vy = Math.max(-3, Math.min(3, this.vy));        this.vy = Math.max(-3, Math.min(3, this.vy))
      }
      draw() {
        if (!ctx) return;
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
          case 'quantum':
            // Quantum particles with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Wave function rings
            for (let i = 1; i <= 3; i++) {              ctx.beginPath();
            // Wave function rings
            for (let i = 1, i <= 3, i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size + i * 2, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 1;
              ctx.globalAlpha = alpha * (0.3 - i * 0.1);
              ctx.stroke();
            }
            break;              ctx.stroke()
            }
            break;
            // Neural network nodes
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();

            // Neural connections
            particlesRef.current.forEach(particle => {
              if (particle.type === 'neural' && particle !== this) {
                const distance = Math.sqrt(

                );
                if (distance < 100) {
                  ctx.beginPath();
                  ctx.moveTo(this.x, this.y);
                  ctx.lineTo(particle.x, particle.y);
                  ctx.strokeStyle = this.color;
                  ctx.lineWidth = 0.5;
                  ctx.globalAlpha = alpha * (1 - distance / 100);
                  ctx.stroke()
          case 'energy':;
            this.color = `hsl (${40 + Math.random () * 60}, 100%, 70%)`;
            break;        }            break;
        }
      }
      update () {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
;
        // Bounce off edges;
        // Check condition
if (this.vx *= -1) {
  $2
}
        // Check condition
if (this.vy *= -1) {
  $2
}
        // Add some quantum randomness;
        // Check condition
if (< 0.01) {) {
  $2
}
          this.vx += (Math.random () - 0.5) * 0.5;
          this.vy += (Math.random () - 0.5) * 0.5;        }
        // Limit velocity;
        this.vx = Math.max (-3, Math.min (3, this.vx));
        this.vy = Math.max (-3, Math.min (3, this.vy));      }
      draw () {
        // Check condition
if (return) {
  $2
}          this.vy += (Math.random () - 0.5) * 0.5;
        }
        // Limit velocity;
        this.vx = Math.max (-3, Math.min (3, this.vx));
        this.vy = Math.max (-3, Math.min (3, this.vy));        this.vy = Math.max (-3, Math.min (3, this.vy));
      }
      draw () {
        // Check condition
if (return) {
  $2
}
        const alpha = this.life / this.max_life;
        ctx.save ();
        ctx.global_alpha = alpha;
;
        const alpha = this.life / this.max_life;
        ctx.save ();
        ctx.global_alpha = alpha;
;
          case 'quantum':;
            // Quantum particles with wave function;
            ctx.begin_path ();
            ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill_style = this.color;
            ctx.fill ();
;
            // Wave function rings;
            for (let index = 1; i <= 3; i++) {              ctx.begin_path (); ;
            // Wave function rings;
            for (let index = 1, i <= 3, i++) {
              ctx.begin_path ();
              ctx.arc (this.x, this.y, this.size + i * 2, 0, Math.PI * 2);
              ctx.stroke_style = this.color;
              ctx.line_width = 1;
              ctx.global_alpha = alpha * (0.3 - i * 0.1);
              ctx.stroke ();
            }
            break;              ctx.stroke ();
            }
            break;
;
            // Neural network nodes;
            ctx.begin_path ();
            ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill_style = this.color;
            ctx.fill ();
;
            // Neural connections;
            particles_ref.current.for_each (particle => {
              // Check condition
if ( {) {
  $2
}
                const distance = Math.sqrt (
                  Math.pow (this.x - particle.x, 2) +;
                    Math.pow (this.y - particle.y, 2)                );                  Math.pow (this.x - particle.x, 2) + Math.pow (this.y - particle.y, 2));
                // Check condition
if ( {) {
  $2
}
                  ctx.begin_path ();
                  ctx.move_to (this.x, this.y);
                  ctx.line_to (particle.x, particle.y);
                  ctx.stroke_style = this.color;
                  ctx.line_width = 0.5;
                  ctx.global_alpha = alpha * (1 - distance / 100);
                  ctx.stroke ();                }
              }
            });
            break;                  ctx.stroke ();
                }
              }
            });
            break;
          case 'data':
            // Data streams
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
            // Data flow lines
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x + this.vx * 10, this.y + this.vy * 10);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            break;
          case 'energy':
            // Energy particles with glow effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            // Glow effect
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
            break
        }
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

  return (
    <div className='fixed inset-0 pointer-events-none z-0'>
      {/* Animated gradient background */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 via-cyan-900/30 to-black'
        animate={{
          background: [
            'linear-gradient(to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)'
            'linear-gradient(to bottom right, #000000, #0c4a6e, #1e1b4b, #000000)'
            'linear-gradient(to bottom right, #000000, #1e1b4b, #0c4a6e, #000000)'
          ]
        }}
        transition={{

      {/* Quantum particle canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Floating geometric shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-32 h-32 border border-cyan-500/20 rounded-full'
            style={{

            }}
            animate={{
              rotate: [0, 360]
              scale: [0.5, 1, 0.5]
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10
              repeat: Infinity
              ease: 'linear'
              delay: i * 0.5
            }}

          />
        ))}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`square-${i}`}
            className="absolute w-24 h-24 border border-purple-500/20 rotate-45"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`}}
            animate={{
rotate: [45, 405];
              scale: [0.3, 0.8, 0.3];
              opacity: [0.1, 0.2, 0.1]}}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
ease: "linear",
              delay: i * 0.7}}
          />
        ))}
      </div>
{/* Energy waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"
          animate={{
            height: ['32px48px32px']}}
          transition={{
            duration: 4,
            repeat: Infinity,
ease: "easeInOut"}}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent"
          animate={{
            height: ['24px40px24px']}}
          transition={{

          }}

        />
      </div>
      {/* Quantum interference patterns */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`interference-${i}`}
            className="absolute inset-0 opacity-5"
            style={{

            }}

            animate={{
              scale: [1, 1.5, 1];
              opacity: [0.05, 0.1, 0.05]}}
            transition={{

              delay: i * 0.8}}
          />
        ))}
      </div>

  );
};
export default UltraFuturisticBackground2046;  );
};
export default UltraFuturisticBackground2046;

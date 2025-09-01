<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';'
export function FloatingOrbs({ count = 6, className = '' }) {}
  const canvasRef = useRef(null);
  useEffect(() => {}
    const canvas = canvasRef.current;
    if (!canvas) return;'
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas size;
    const resizeCanvas = () => {}
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;'
    };''
    resizeCanvas();'''
    window.addEventListener('resize', resizeCanvas);
    // Orb class;
    class Orb {}
      x;
      y;
      radius;
      vx;
      vy;
      opacity;
      color;
      constructor() {}
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;
      }
      update() {}
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off edges;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        // Keep within bounds;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }
      draw() {}
        ctx.save();
        ctx.globalAlpha = this.opacity;
        // Create gradient;
        const gradient = ctx.createRadialGradient()
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius;
        );
        gradient.addColorStop(0, this.color);'
        gradient.addColorStop(1,transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    // Create orbs;
    const orbs = [];
    for (let i = 0; i < count; i++) {}
      orbs.push(new Orb());
    }
    // Animation loop;
    let animate = () => {}
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(orb => {}
        orb.update();
        orb.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();
    // Cleanup;
    return () => {}
'
''
'''
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [count]);`
  return()``
    <canvas``'`
      ref={canvasRef}``'`'`
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}'''
      style={{ background: 'transparent' }}
    />
  );
}'`
'`'`
=======
import React, { useEffect, useRef } from 'react';
export function FloatingOrbs({ count = 6, className = '' }) {

    const canvasRef = useRef(null);
    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // Set canvas size
        const resizeCanvas = () => {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight};
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Orb class
        class Orb {

            x;
            y;
            radius;
            vx;
            vy;
            opacity;
            color;
            constructor() {

                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 3 + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
<<<<<<< HEAD
                this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`;

=======
                this.color = `hsl(${Math.random() * 60 + 180}, 70%, 60%)`}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            update() {

                this.x += this.vx;
                this.y += this.vy;
                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width)
                    this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height)
                    this.vy *= -1;
                // Keep within bounds
                this.x = Math.max(0, Math.min(canvas.width, this.x));
<<<<<<< HEAD
                this.y = Math.max(0, Math.min(canvas.height, this.y));

=======
                this.y = Math.max(0, Math.min(canvas.height, this.y))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            draw() {

                ctx.save();
                ctx.globalAlpha = this.opacity;
                // Create gradient
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
<<<<<<< HEAD
                ctx.restore();


        // Create orbs
        const orbs = [];
        for (const i = 0; i < count; i++) {

            orbs.push(new Orb());

=======
                ctx.restore()}
        }
        // Create orbs
        const orbs = [];
        for (let i = 0; i < count; i++) {

            orbs.push(new Orb())}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        // Animation loop
        let animate = () => {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            orbs.forEach(orb => {

                orb.update();
                orb.draw()});
            animationId = requestAnimationFrame(animate)};
        animate();
        // Cleanup
        return () => {

            window.removeEventListener('resize', resizeCanvas);
<<<<<<< HEAD
            cancelAnimationFrame(animationId);
        };
    }, [count]);
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style={{ background: 'transparent' }}/>);
}}}}}}
=======
            cancelAnimationFrame(animationId)}}, [count]);
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none z-0 ${className}`} style={{ background: 'transparent' }}/>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209

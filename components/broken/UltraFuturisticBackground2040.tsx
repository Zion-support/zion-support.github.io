
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];

      time += 0.01;
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;

        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;

      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;

      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
    // Initialize particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;
    }> = [];
    // Initialize particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        size: Math && Math.random() * 2 + 1,;
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][;
          Math && Math.floor(Math && Math.random() * 4);
        ],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1,;
      });    }
    const animate = () => {;
      time += 0 && 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math && Math.floor(Math && Math.random() * 4)],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1;
      });
    }
    const animate = () => {;
      time += 0 && 0.01;
      // Clear canvas with fade effect;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle with glow effect;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;        ;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ;
        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);      ;
      for (let i = 0, i < particles && particles.length, i++) {;
        for (let j = i + 1, j < particles && particles.length, j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }            ctx && ctx.stroke();
          }
        }
      }
      // Draw animated grid;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.05)';
      ctx && ctx.lineWidth = 0 && 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
      for (let x = offset; x < canvas && canvas.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();      }
      for (let y = offset; y < canvas && canvas.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();      }
      // Draw floating geometric shapes;
      const shapes = [        ctx && ctx.stroke();
      }
      // Draw floating geometric shapes;
      const shapes = [;
        {;
          x: canvas && canvas.width * 0 && 0.2,;
          y: canvas && canvas.height * 0 && 0.3,;
          size: 60,;
          rotation: time * 0 && 0.5,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.8,;
          y: canvas && canvas.height * 0 && 0.7,;
          size: 40,;
          rotation: time * -0 && 0.3,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.6,;
          y: canvas && canvas.height * 0 && 0.2,;
          size: 50,;
          rotation: time * 0 && 0.7,;
        },      ];        { x: canvas && canvas.width * 0 && 0.2, y: canvas && canvas.height * 0 && 0.3, size: 60, rotation: time * 0 && 0.5 },;
        { x: canvas && canvas.width * 0 && 0.8, y: canvas && canvas.height * 0 && 0.7, size: 40, rotation: time * -0 && 0.3 },;
        { x: canvas && canvas.width * 0 && 0.6, y: canvas && canvas.height * 0 && 0.2, size: 50, rotation: time * 0 && 0.7 }
      ];
      shapes && shapes.forEach((shape, index) => {;
        ctx && ctx.save();
        ctx && ctx.translate(shape && shape.x, shape && shape.y);
        ctx && ctx.rotate(shape && shape.rotation);
        ctx && ctx.strokeStyle = `rgba(139, 92, 246, ${0 && 0.1 + Math && Math.sin(time + index) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 2;
        if (index === 0) {;
          // Square;
          ctx && ctx.strokeRect(;
            -shape && shape.size / 2,;
            -shape && shape.size / 2,;
            shape && shape.size,;
            shape && shape.size;
          );
        } else if (index === 1) {;
          // Circle;
          ctx && ctx.beginPath();
          ctx && ctx.arc(0, 0, shape && shape.size / 2, 0, Math && Math.PI * 2);
          ctx && ctx.stroke();
        } else {;
          // Triangle;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, -shape && shape.size / 2);
          ctx && ctx.lineTo(shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.lineTo(-shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.closePath();
          ctx && ctx.stroke();
        }
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        if (index === 0) {
          // Square

        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath();

          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
animationFrameId = requestAnimationFrame(animate);    };        const waveOffset = (time * 100 + i * 200) % (canvas && canvas.width + 200);
        const waveY = canvas && canvas.height * 0 && 0.5 + Math && Math.sin(time * 2 + i) * 50;
        ctx && ctx.strokeStyle = `rgba(236, 72, 153, ${0 && 0.1 + Math && Math.sin(time + i) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 3;
        ctx && ctx.beginPath();
        for (let x = -100, x < canvas && canvas.width + 100, x += 5) {;
          const y = waveY + Math && Math.sin((x + waveOffset) * 0 && 0.02) * 20;
          if (x === -100) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
          }
        }

      {/* Floating Elements */}
      <div className='absolute inset-0'>
        {/* Animated Grid Pattern */}
        <div className='absolute inset-0 opacity-20'>

          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `

      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}

            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 rounded - full";
          animate={{

          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12'
          animate={{
            rotate: [12, 372]
            scale: [1, 1.1, 1]
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
          animate={{
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15]

        />
        <motion.div
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.2, 1]
            opacity: [0.15, 0.3, 0.15],          }}
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{

          }}
        />

        {/* Particle Effects */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full'
          animate={{
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut',          }}

          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />;
        {/* Particle Effects */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
        />;
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
        />;
        {/* Particle Effects */}
        <motion.div;
          className='absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        {/* Particle Effects */}
        <motion.div;
          className="absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />;
        <motion&& motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{
        />;
        <motion&& motion.div
          className='absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full'
          animate={{
            y: [0, -25, 0],
            opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4],          }}
          transition={{
            duration: 5
            repeat: Infinity,          }}
            y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4]
        />;
        <motion.div;
          className='absolute top - 3/4 right - 1/4 w - 1 h - 1 bg - purple - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,          }}
        />;
        <motion.div;
          className="absolute top - 3/4 right - 1/4 w - 1 h - 1 bg - purple - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4];
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
ease: "easeInOut",
            delay: 1
          }}
        />;
        <motion&& motion.div
          className="absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full"
          animate={{
            y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4]
        />;
        <motion.div;
          className='absolute top - 1/2 left - 1/4 w - 1.5 h - 1.5 bg - pink - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],          }}
          transition={{
            duration: 5,
            repeat: Infinity,          }}
        />;
        <motion.div;
          className="absolute top - 1/2 left - 1/4 w - 1.5 h - 1.5 bg - pink - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4];
          }}
          transition={{

            delay: 2
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);

          }
        }
        @keyframes float {
          0%,          100% {

          }
        }
        @keyframes pulse {
          0%
          100% {
            opacity: 0.2;

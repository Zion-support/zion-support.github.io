      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        // Reset particle if it dies
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 100) {
              ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
      // Draw quantum matrix overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 0.5;
      }

      // Draw holographic circles
      ctx.globalAlpha = 0.05;
        
        ctx.strokeStyle = `hsl(${180 + i * 60}, 100%, 50%)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 opacity-20"
          animate={{
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
          />
        ))}
      </div>

            />
          ))}
        </svg>
      </div>


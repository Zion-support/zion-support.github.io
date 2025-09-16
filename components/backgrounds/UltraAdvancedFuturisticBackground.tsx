  intensity = 'medium',
  theme = 'quantum',
  particleCount = 200,
  animationSpeed = 1.0,
  enableHolographic = true,
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      type: 'quantum' | 'neon' | 'holographic' | 'cyberpunk';
      life: number;
    // Initialize particles with enhanced properties
    const initParticles = () => {
      const count = intensity === 'extreme' ? particleCount * 2 : 
                   intensity === 'high' ? particleCount : 
                   intensity === 'medium' ? Math.floor(particleCount * 0.7) : 
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 3 * animationSpeed,
          vy: (Math.random() - 0.5) * 3 * animationSpeed,
          size: Math.random() * 6 + 2,
          opacity: Math.random() * 0.9 + 0.1,
          color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1 * animationSpeed
      if (theme === 'quantum-fusion') {
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');
        gradient.addColorStop(0.3, 'rgba(0, 255, 255, 0.1)');
        gradient.addColorStop(0.6, 'rgba(255, 0, 255, 0.05)');
      // Update and draw particles with enhanced effects
      particles.forEach((particle, index) => {
        // Update particle life
        particle.life -= 0.5;
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
          particle.x = Math.random() * canvas.width;
        // Update position with quantum effects
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
          if (partner && partner !== particle) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * particle.opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(partner.x, partner.y);
          }
        }

        // Bounce off edges with quantum tunneling
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
            particle.x = particle.x <= 0 ? canvas.width : 0;
          } else {
          if (enableQuantumEffects && Math.random() < 0.1) {
            // Quantum tunneling effect
            particle.y = particle.y <= 0 ? canvas.height : 0;
          } else {
          }
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with enhanced effects
        ctx.save();
        ctx.globalAlpha = particle.opacity * (particle.life / particle.maxLife);
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        if (particle.type === 'quantum') {
          // Quantum particle with wave effect
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 4);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(0.6, particle.color + '40');
          gradient.addColorStop(1, 'transparent');
              ctx.strokeStyle = particle.color + Math.floor(40 - i * 10).toString(16);
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(0, 0, particle.size * i, 0, Math.PI * 2);
            }
          }
        } else if (particle.type === 'holographic' && enableHolographic) {
          // Holographic particle with rainbow effect
          const hue = (Date.now() * 0.1 + index * 10) % 360;
          ctx.fillStyle = `hsl(${hue}, 100%, 70%)`;
          ctx.shadowBlur = 0;
        } else {
          // Standard neon particle
          ctx.fillStyle = particle.color;
      // Add quantum field effects
      if (enableQuantumEffects && theme === 'quantum-fusion') {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 5; i++) {
      }

      // Add holographic matrix effect
      if (enableHolographic && theme === 'holographic') {
        const time = Date.now() * 0.001;
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.lineWidth = 1;
          const y = (i * canvas.height / 15 + time * 30) % canvas.height;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);

  return (
    <div className="relative min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}
      />
      
      {/* Additional futuristic overlay effects */}
      {enableHolographic && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.03),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03),transparent_50%)]" />
        </div>
      )}
      
      {enableQuantumEffects && (
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.02),transparent_70%)]" />
        </div>
      )}
      

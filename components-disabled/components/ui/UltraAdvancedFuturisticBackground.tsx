      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
        primary: '#00d4ff',
        secondary: '#ff6b35',
        accent: '#9d4edd',
        quantum: '#00ff88',
    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
            ctx.strokeStyle = `rgba(0, 255, 136, ${0.3 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
      // Vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      // Horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const strength = 1 - (distance / 150);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * strength})`;
            ctx.lineWidth = strength * 2;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.6)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Create effects
      createHolographicGrid();
      createQuantumEntanglement();
      createNeuralNetwork();
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Create glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        // Add sparkle effect for holographic particles
        if (particle.type === 'holographic' && Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      // Add intensity-based effects
      if (intensity === 'high') {
        // Add energy waves
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1 }}

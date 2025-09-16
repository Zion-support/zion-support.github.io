  colorScheme?: 'quantum-fusion' | 'neon-cyber' | 'holographic-matrix' | 'space-time';
  particleCount?: number;
  animationSpeed?: number;
  enableHolographic?: boolean;
  enableQuantumEffects?: boolean;
  enableNeonEffects?: boolean;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

        return {
          primary: '#ff0080',
          secondary: '#00ff80',
          accent: '#8000ff',
        return {
          primary: '#00ff41',
          secondary: '#ff0040',
          accent: '#0040ff',
        return {
          primary: '#ff6b35',
          secondary: '#4ecdc4',
          accent: '#45b7d1',
        return {
          primary: '#00ffff',
          secondary: '#ff00ff',
          accent: '#ffff00',
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2 * animationSpeed,
          vy: (Math.random() - 0.5) * 2 * animationSpeed,
          size: Math.random() * 3 + 1,
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50,
          type: Math.random() > 0.7 ? 'quantum' : 'normal',
        if (particle.type === 'quantum' && enableQuantumEffects) {
          // Quantum particle effect
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = colors.accent;
          ctx.fill();
          // Quantum glow
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = colors.glow;
          ctx.fill();
        } else {
          // Normal particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
      }

      // Draw neon effects
      if (enableNeonEffects) {
      }

      // Draw space-time effects
      if (enableSpaceTime) {
  }, [particleCount, animationSpeed, colorScheme, enableHolographic, enableQuantumEffects, enableNeonEffects, enableSpaceTime]);

  const drawHolographicGrid = (ctx: CanvasRenderingContext2D, colors: any) => {
    const gridSize = 50;
    const time = Date.now() * 0.001;
    
    ctx.strokeStyle = colors.primary;
    ctx.lineWidth = 0.5;
    ctx.globalAlpha = 0.3;

      const offset = (time + i * 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 200, ctx.canvas.height);
      // Glow effect
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 30;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colors.glow;
      ctx.fill();
      // Core
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
              transition={{
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,

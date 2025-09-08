import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD

interface UltraFuturisticBackground2036Props {variant?: 'default' | 'quantum' | 'space' | 'ai' | 'cyber';
  intensity?: 'low' | 'medium' | 'high';
}
:components/broken/UltraFuturisticBackground2036.tsx
export default function UltraFuturisticBackground2036({variant = 'default';
;
export default function UltraFuturisticBackground2036({;
  variant = 'default',;
  intensity = 'medium';
}: UltraFuturisticBackground2036Props) {const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {;
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    let animationFrameId: number;
    let particles: Particle[] = [];
    const connections: Connection[] = [];
    // Particle system;
    const particles: Array<{x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'quantum' | 'neon' | 'energy' | 'data';
    }> = [];
    const colors = {quantum: ['#00ffff#0080ff#8000ff#ff0080'];
      neon: ['#00ff00#ff00ff#ffff00#00ffff'];
      energy: ['#ff6600#ff0066#6600ff#00ff66'];
      data: ['#00ccff#cc00ff#ffcc00#00ffcc'];
    }
    const intensityMultiplier = {low: 0.5;
      medium: 1;
      high: 1.5;
    }
    const variantConfig = {default: { particleCount: 50, speed: 1, size: 2 }
      quantum: { particleCount: 80, speed: 1.5, size: 3 }
      space: { particleCount: 100, speed: 0.8, size: 2.5 }
      ai: { particleCount: 120, speed: 2, size: 1.5 }
      cyber: { particleCount: 90, speed: 1.8, size: 2.2 }
    }
    const config = variantConfig[variant];
    const multiplier = intensityMultiplier[intensity];
    // Initialize particles;
    for (let i = 0, i < config.particleCount * multiplier, i++) {particles.push({;
        x: Math.random() * canvas.width;
        y: Math.random() * canvas.height;
        vx: (Math.random() - 0.5) * config.speed * multiplier;
        vy: (Math.random() - 0.5) * config.speed * multiplier;
        size: Math.random() * config.size * multiplier;
        opacity: Math.random() * 0.8 + 0.2;
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)];
        type: variant === 'default' ? ['quantumneonenergydata'][Math.floor(Math.random() * 4)] as any : variant;
      });
    }
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background;
      const gradient = ctx.createRadialGradient(;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;
        canvas.height / 2;
        Math.max(canvas.width, canvas.height) / 2;
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
      particles.forEach((particle, index) => {;
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect;
        ctx.save();
        // Create glow effect;
        const glowGradient = ctx.createRadialGradient(;
          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3;
        );
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 100).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        // Draw core particle;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // Draw connections between nearby particles;
        particles.slice(index + 1).forEach(otherParticle => {const distance = Math.sqrt(;
            Math.pow(particle.x - otherParticle.x, 2) +;
            Math.pow(particle.y - otherParticle.y, 2);
          );
          if (distance < 100 * multiplier) {;
            const opacity = (100 - distance) / 100 * 0.3 * multiplier;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      // Add floating geometric shapes;
      if (variant === 'quantum' |variant === 'ai') {drawQuantumShapes(ctx, canvas, multiplier);
      }
      // Add data streams for AI variant;
      if (variant === 'ai') {drawDataStreams(ctx, canvas, multiplier);
      }
      // Add space elements for space variant;
      if (variant === 'space') {drawSpaceElements(ctx, canvas, multiplier);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    const drawQuantumShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 3, i++) {;
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.1);
        const size = 30 * multiplier;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time + i);
        // Draw quantum circuit pattern;
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * multiplier})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(-size, -size);
        ctx.lineTo(size, -size);
        ctx.lineTo(size, size);
        ctx.lineTo(-size, size);
        ctx.closePath();
        ctx.stroke();
        // Draw inner quantum dots;
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 * multiplier})`;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    const drawDataStreams = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 5, i++) {;
        const x = canvas.width * (0.1 + i * 0.2);
        const startY = canvas.height * 0.1;
        const endY = canvas.height * 0.9;
        ctx.save();
        ctx.strokeStyle = `rgba(0, 255, 0, ${0.4 * multiplier})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 5]);
        // Animated data stream;
        const streamY = startY + (endY - startY) * ((time * 0.5 + i * 0.2) % 1);
        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x, streamY);
        ctx.stroke();
        // Data packets;
        ctx.fillStyle = `rgba(0, 255, 0, ${0.8 * multiplier})`;
        ctx.fillRect(x - 3, streamY - 3, 6, 6);
        ctx.restore();
      }
    }
    const drawSpaceElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      // Draw stars;
      for (let i = 0, i < 50 * multiplier, i++) {;
        const x = (i * 12345) % canvas.width;
        const y = (i * 67890) % canvas.height;
        const brightness = (Math.sin(time + i) + 1) * 0.5;
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * multiplier})`;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      // Draw nebula;
      const nebulaGradient = ctx.createRadialGradient(;
        canvas.width * 0.7, canvas.height * 0.3, 0;
        canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier;
      );
      nebulaGradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)');
      nebulaGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
      nebulaGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGradient;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier, 0, Math.PI * 2);
      ctx.fill();
    }
    animate();
    return () => {if (animationRef.current) {;
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    }
}, [variant, intensity])

  intensity = 'medium';
}: UltraFuturisticBackground2036Props) {const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationRef = useRef<number | undefined>(undefined);
</number>
    const particles: Array<{x: number;,
  y: number;
      vx: number;,
  vy: number;
      size: number;,
  color: string;
      type: 'quantum' | 'neon' | 'energy' | 'data';
    }> = [];
    const colors = {quantum: ['#00ffff#0080ff#8000ff#ff0080'];',
  neon: ['#00ff00#ff00ff#ffff00#00ffff'];
      energy: ['#ff6600#ff0066#6600ff#00ff66'];',
  data: ['#00ccff#cc00ff#ffcc00#00ffcc'];
    const intensityMultiplier = {low: 0.5;,
  medium: 1;
      high: 1.5;
    const variantConfig = {default: { particleCount: 50, speed: 1, size: 2 }
      quantum: { particleCount: 80, speed: 1.5, size: 3 }
      space: { particleCount: 100, speed: 0.8, size: 2.5 }
      ai: { particleCount: 120, speed: 2, size: 1.5 }
      cyber: { particleCount: 90, speed: 1.8, size: 2.2 }
    const config = variantConfig[variant];
    const multiplier = intensityMultiplier[intensity];
    // Initialize particles;
    for (let i = 0, i < config.particleCount * multiplier, i++) {particles.push({;)
        x: Math.random() * canvas.width;,
  y: Math.random() * canvas.height;
        vx: (Math.random() - 0.5) * config.speed * multiplier;,
  vy: (Math.random() - 0.5) * config.speed * multiplier;
        size: Math.random() * config.size * multiplier;,
  opacity: Math.random() * 0.8 + 0.2;
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)];,
  type: variant === 'default' ? ['quantumneonenergydata'][Math.floor(Math.random() * 4)] as any : variant;
      });
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background;
      const gradient = ctx.createRadialGradient(;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.height / 2;)
        Math.max(canvas.width, canvas.height) / 2;
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
      particles.forEach((particle, index) => {;
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect;
        ctx.save();
        // Create glow effect;
        const glowGradient = ctx.createRadialGradient(;
          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3;)
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);`;
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 100).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        // Draw core particle;
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.restore();
        // Draw connections between nearby particles;
        particles.slice(index + 1).forEach(otherParticle => {const distance = Math.sqrt(;)
            Math.pow(particle.x - otherParticle.x, 2) +;
            Math.pow(particle.y - otherParticle.y, 2);
          if (distance < 100 * multiplier) {;
            const opacity = (100 - distance) / 100 * 0.3 * multiplier;`;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
      // Add floating geometric shapes;
      if (variant === 'quantum' |variant === 'ai') {drawQuantumShapes(ctx, canvas, multiplier);
      // Add data streams for AI variant;
      if (variant === 'ai') {drawDataStreams(ctx, canvas, multiplier);
      // Add space elements for space variant;
      if (variant === 'space') {drawSpaceElements(ctx, canvas, multiplier);
      animationRef.current = requestAnimationFrame(animate);
    const drawQuantumShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 3, i++) {;
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.1);
        const size = 30 * multiplier;
        ctx.translate(x, y);
        ctx.rotate(time + i);
        // Draw quantum circuit pattern;`;
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * multiplier})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(-size, -size);
        ctx.lineTo(size, -size);
        ctx.lineTo(size, size);
        ctx.lineTo(-size, size);
        ctx.closePath();
        // Draw inner quantum dots;`;
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 * multiplier})`;
        ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
    const drawDataStreams = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 5, i++) {;
        const x = canvas.width * (0.1 + i * 0.2);
        const startY = canvas.height * 0.1;
        const endY = canvas.height * 0.9;
        ctx.save();`;
        ctx.strokeStyle = `rgba(0, 255, 0, ${0.4 * multiplier})`;
        ctx.setLineDash([10, 5]);
        // Animated data stream;
        const streamY = startY + (endY - startY) * ((time * 0.5 + i * 0.2) % 1);
        ctx.moveTo(x, startY);
        ctx.lineTo(x, streamY);
        // Data packets;`;
        ctx.fillStyle = `rgba(0, 255, 0, ${0.8 * multiplier})`;
        ctx.fillRect(x - 3, streamY - 3, 6, 6);
    const drawSpaceElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      // Draw stars;
      for (let i = 0, i < 50 * multiplier, i++) {;
        const x = (i * 12345) % canvas.width;
        const y = (i * 67890) % canvas.height;
        const brightness = (Math.sin(time + i) + 1) * 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * multiplier})`;
        ctx.arc(x, y, 1, 0, Math.PI * 2);
      // Draw nebula;
      const nebulaGradient = ctx.createRadialGradient(;
        canvas.width * 0.7, canvas.height * 0.3, 0;
        canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier;)
      nebulaGradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)');
      nebulaGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
      nebulaGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGradient;
      ctx.arc(canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier, 0, Math.PI * 2);
    animate();
    return () => {if (animationRef.current) {;
        cancelAnimationFrame(animationRef.current);



  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
</div>

=======
interface UltraFuturisticBackground2036Props {
  variant?: 'default' | 'quantum' | 'space' | 'ai' | 'cyber',
  intensity?: 'low' | 'medium' | 'high'
}
:components/broken/UltraFuturisticBackground2036.tsx
export default function UltraFuturisticBackground2036({variant = 'default';
;
export default function UltraFuturisticBackground2036({;
  variant = 'default',;
  intensity = 'medium';
}: UltraFuturisticBackground2036Props) {const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  useEffect(() => {;
    if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    let animationFrameId: number;
    let particles: Particle[] = [];
    const connections: Connection[] = [];
    // Particle system;
    const particles: Array<{x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'quantum' | 'neon' | 'energy' | 'data';
    }> = [];
    const colors = {quantum: ['#00ffff#0080ff#8000ff#ff0080'];
      neon: ['#00ff00#ff00ff#ffff00#00ffff'];
      energy: ['#ff6600#ff0066#6600ff#00ff66'];
      data: ['#00ccff#cc00ff#ffcc00#00ffcc'];
    }
    const intensityMultiplier = {low: 0.5;
      medium: 1;
      high: 1.5;
    }
    const variantConfig = {default: { particleCount: 50, speed: 1, size: 2 }
      quantum: { particleCount: 80, speed: 1.5, size: 3 }
      space: { particleCount: 100, speed: 0.8, size: 2.5 }
      ai: { particleCount: 120, speed: 2, size: 1.5 }
      cyber: { particleCount: 90, speed: 1.8, size: 2.2 }
    }
    const config = variantConfig[variant];
    const multiplier = intensityMultiplier[intensity];
    // Initialize particles;
    for (let i = 0, i < config.particleCount * multiplier, i++) {particles.push({;
        x: Math.random() * canvas.width;
        y: Math.random() * canvas.height;
        vx: (Math.random() - 0.5) * config.speed * multiplier;
        vy: (Math.random() - 0.5) * config.speed * multiplier;
        size: Math.random() * config.size * multiplier;
        opacity: Math.random() * 0.8 + 0.2;
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)];
        type: variant === 'default' ? ['quantumneonenergydata'][Math.floor(Math.random() * 4)] as any : variant;
      });
    }
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background;
      const gradient = ctx.createRadialGradient(;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;
        canvas.height / 2;
        Math.max(canvas.width, canvas.height) / 2;
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)');
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
      particles.forEach((particle, index) => {;
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect;
        ctx.save();
        // Create glow effect;
        const glowGradient = ctx.createRadialGradient(;
          particle.x, particle.y, 0;
          particle.x, particle.y, particle.size * 3;
        );
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 100).toString(16).padStart(2, '0')}`);
        glowGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        // Draw core particle;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        // Draw connections between nearby particles;
        particles.slice(index + 1).forEach(otherParticle => {const distance = Math.sqrt(;
            Math.pow(particle.x - otherParticle.x, 2) +;
            Math.pow(particle.y - otherParticle.y, 2);
          );
          if (distance < 100 * multiplier) {;
            const opacity = (100 - distance) / 100 * 0.3 * multiplier;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      // Add floating geometric shapes;
      if (variant === 'quantum' |variant === 'ai') {drawQuantumShapes(ctx, canvas, multiplier);
      }
      // Add data streams for AI variant;
      if (variant === 'ai') {drawDataStreams(ctx, canvas, multiplier);
      }
      // Add space elements for space variant;
      if (variant === 'space') {drawSpaceElements(ctx, canvas, multiplier);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    const drawQuantumShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 3, i++) {;
        const x = canvas.width * (0.2 + i * 0.3);
        const y = canvas.height * (0.3 + Math.sin(time + i) * 0.1);
        const size = 30 * multiplier;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time + i);
        // Draw quantum circuit pattern;
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * multiplier})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(-size, -size);
        ctx.lineTo(size, -size);
        ctx.lineTo(size, size);
        ctx.lineTo(-size, size);
        ctx.closePath();
        ctx.stroke();
        // Draw inner quantum dots;
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 * multiplier})`;
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    const drawDataStreams = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      for (let i = 0, i < 5, i++) {;
        const x = canvas.width * (0.1 + i * 0.2);
        const startY = canvas.height * 0.1;
        const endY = canvas.height * 0.9;
        ctx.save();
        ctx.strokeStyle = `rgba(0, 255, 0, ${0.4 * multiplier})`;
        ctx.lineWidth = 2;
        ctx.setLineDash([10, 5]);
        // Animated data stream;
        const streamY = startY + (endY - startY) * ((time * 0.5 + i * 0.2) % 1);
        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x, streamY);
        ctx.stroke();
        // Data packets;
        ctx.fillStyle = `rgba(0, 255, 0, ${0.8 * multiplier})`;
        ctx.fillRect(x - 3, streamY - 3, 6, 6);
        ctx.restore();
      }
    }
    const drawSpaceElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {const time = Date.now() * 0.001;
      // Draw stars;
      for (let i = 0, i < 50 * multiplier, i++) {;
        const x = (i * 12345) % canvas.width;
        const y = (i * 67890) % canvas.height;
        const brightness = (Math.sin(time + i) + 1) * 0.5;
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * multiplier})`;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      // Draw nebula;
      const nebulaGradient = ctx.createRadialGradient(;
        canvas.width * 0.7, canvas.height * 0.3, 0;
        canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier;
      );
      nebulaGradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)');
      nebulaGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
      nebulaGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGradient;
      ctx.beginPath();
      ctx.arc(canvas.width * 0.7, canvas.height * 0.3, 200 * multiplier, 0, Math.PI * 2);
      ctx.fill();
    }
    animate();
    return () => {if (animationRef.current) {;
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    }
}, [variant, intensity])

export default function UltraFuturisticBackground2036({ 
  variant = $2;
  intensity = $2;
  const animationRef = $2;
  useEffect(() => {
    if (typeof window = $2;
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    const resizeCanvas = $2;
      canvas.height = $2;
    let animationFrameId: number,
    let particles: Particle[] = [],
    const connections: Connection[] = [],

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
      vx: number,
      vy: number,
      size: number,
      color: string,
      type: 'quantum' | 'neon' | 'energy' | 'data'
    }> = [],

    const colors = $2;
      neon: ['#00ff00#ff00ff#ffff00#00ffff'],
      energy: ['#ff6600#ff0066#6600ff#00ff66'],
      data: ['#00ccff#cc00ff#ffcc00#00ffcc']
    },

    const intensityMultiplier = $2;
      medium: 1,
      high: 1.5
    },

    const variantConfig = {
      default: { particleCount: 50, speed: 1, size: 2},
      quantum: { particleCount: 80, speed: 1.5, size: 3},
      space: { particleCount: 100, speed: 0.8, size: 2.5 },
      ai: { particleCount: 120, speed: 2, size: 1.5 },
      cyber: { particleCount: 90, speed: 1.8, size: 2.2 }
    },

    const config = $2;
    const multiplier = $2;
    // Initialize particles
    for (let i = 0, i < config.particleCount * multiplier, i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.speed * multiplier,
        vy: (Math.random() - 0.5) * config.speed * multiplier,
        size: Math.random() * config.size * multiplier,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[variant][Math.floor(Math.random() * colors[variant].length)],
        type: variant === 'default' ? ['quantumneonenergydata'][Math.floor(Math.random() * 4)] as any : variant
      })
    }

    const animate = () => {
      ctx.clearRect($2);
      // Create gradient background
      const gradient = $2;
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        Math.max(canvas.width, canvas.height) / 2
      ),
      
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)'),
      gradient.addColorStop(0.3, 'rgba(20, 20, 40, 0.6)'),
      gradient.addColorStop(0.7, 'rgba(40, 20, 60, 0.4)'),
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)'),
      
      ctx.fillStyle = $2;
      ctx.fillRect($2);
      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = $2;
        if (particle.x > canvas.width) particle.x = $2;
        if (particle.y < 0) particle.y = $2;
        if (particle.y > canvas.height) particle.y = $2;
        // Draw particle with glow effect
        ctx.save($2);
        // Create glow effect
        const glowGradient = ctx.createRadialGradient($2);
        glowGradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`),
        glowGradient.addColorStop(0.5, `${particle.color}${Math.floor(particle.opacity * 100).toString(16).padStart(2, '0')}`),
        glowGradient.addColorStop($2);
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        // Draw core particle
        ctx.fillStyle = $2;
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore($2);
        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          ),
          
          if (distance < 100 * multiplier) {
            const opacity = $2;
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`,
            ctx.lineWidth = $2;
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke()
          }
        })
      }),

      // Add floating geometric shapes
      if (variant === 'quantum' || variant === 'ai') {
        drawQuantumShapes(ctx, canvas, multiplier)
      }

      // Add data streams for AI variant
      if (variant === 'ai') {
        drawDataStreams(ctx, canvas, multiplier)
      }

      // Add space elements for space variant
      if (variant === 'space') {
        drawSpaceElements(ctx, canvas, multiplier)
      }

      animationRef.current = $2;
    const drawQuantumShapes = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = $2;
      for (let i = 0, i < 3, i++) {
        const x = $2;
        const y = $2;
        const size = $2;
        ctx.save($2);
        ctx.translate($2);
        ctx.rotate($2);
        // Draw quantum circuit pattern
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * multiplier})`,
        ctx.lineWidth = $2;
        ctx.setLineDash($2);
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.lineTo($2);
        ctx.lineTo($2);
        ctx.closePath($2);
        ctx.stroke($2);
        // Draw inner quantum dots
        ctx.fillStyle = `rgba(0, 255, 255, ${0.6 * multiplier})`,
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }
    },

    const drawDataStreams = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = $2;
      for (let i = 0, i < 5, i++) {
        const x = $2;
        const startY = $2;
        const endY = $2;
        ctx.save($2);
        ctx.strokeStyle = `rgba(0, 255, 0, ${0.4 * multiplier})`,
        ctx.lineWidth = $2;
        ctx.setLineDash($2);
        // Animated data stream
        const streamY = $2;
        ctx.beginPath($2);
        ctx.moveTo($2);
        ctx.lineTo($2);
        ctx.stroke($2);
        // Data packets
        ctx.fillStyle = `rgba(0, 255, 0, ${0.8 * multiplier})`,
        ctx.fillRect($2);
        ctx.restore()
      }
    },

    const drawSpaceElements = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, multiplier: number) => {
      const time = $2;
      // Draw stars
      for (let i = 0, i < 50 * multiplier, i++) {
        const x = $2;
        const y = $2;
        const brightness = $2;
        ctx.save($2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * multiplier})`,
        ctx.beginPath($2);
        ctx.arc($2);
        ctx.fill($2);
        ctx.restore()
      }
      
      // Draw nebula
      const nebulaGradient = ctx.createRadialGradient($2);
      nebulaGradient.addColorStop(0, 'rgba(255, 0, 255, 0.1)'),
      nebulaGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)'),
      nebulaGradient.addColorStop($2);
      ctx.fillStyle = $2;
      ctx.beginPath($2);
      ctx.arc($2);
      ctx.fill()
    },

    animate($2);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [variant, intensity]),

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <canvas,
ref={canvasRef}
        className=&quot;w-full h-full&quot;
        style={{ display: 'block' }}
      />;
<<<<<<< HEAD

</canvas>
<div className=&quot;absolute inset-0 pointer-events-none&quot;>
</div>)
          <div className=&quot;absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)1px,transparent1px),linear-gradient(90deg,rgba(0,255,255,0.1)1px,transparent1px)] bg-[size:50px50px]&quot; />

        {/* Quantum field lines */}
{variant === 'quantum' && (


          <div className=&quot;absolute inset-0&quot;>
              <motion.div,
key={i}
                className=&quot;absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent&quot;


=======
      {/* Additional overlay effects */}
<div className=&quot;absolute inset-0 pointer-events-none&quot;>
        {/* Grid overlay for cyber variant */}
        {variant === 'cyber' && (
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size: 50px_50px]" />
        )}
        {/* Quantum field lines */}
{variant === 'quantum' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key = $2;
                  transform: 'translateX(-50%)'
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3]}}
                transition = $2;
                  repeat: Infinity,
                  delay: i * 0.5}}
              />;
            ))}
          </div>;
        )}
                animate={_{
                  opacity: [0.3, 0.8, 0.3]}}
                transition={_{
                  duration: 3, repeat: Infinity, delay: i * 0.5}}
              />
            ))}
          </div>;
        )}
        ;
        {/* AI neural network overlay */}
{variant === 'ai' && (
          <div className=&quot;absolute inset-0&quot;>
            {[...Array(6)].map((_, i) => (
              <motion.div,
key={i}
                className=&quot;absolute w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent&quot;
                style={{
                  top: `${(i + 1) * 16.67}%`}}
                animate={{
                  opacity: [0.2, 0.6, 0.2]}}
                transition = $2;
                  repeat: Infinity,
                  delay: i * 0.8}}
              />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            ))}
          </div>;
        )}
      </div>
    </div>
  )
},

export default UltraFuturisticBackground2036,
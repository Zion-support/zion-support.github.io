import React, { useEffect, useRef } from 'react';
export const FuturisticAnimatedBackground = ({ className = '', intensity = 'medium', colorScheme = 'multi' }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
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
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        // Particle system
        const particles = [];
        // Color schemes
        const colorSchemes = {
            blue: ['#00ffff', '#0080ff', '#0040ff', '#0000ff'],
            purple: ['#ff00ff', '#8000ff', '#4000ff', '#0000ff'],
            green: ['#00ff00', '#00ff80', '#00ff40', '#00ff00'],
            multi: ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff8000', '#8000ff']
        };
        const colors = colorSchemes[colorScheme];
        const particleCount = intensity === 'low' ? 50 : intensity === 'medium' ? 100 : 200;
        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: Math.random() * 100,
                maxLife: 100
            });
        }
        // Grid lines
        const gridSize = 50;
        const gridOpacity = intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.2 : 0.3;
        // Animation loop
        const animate = () => {
            // Clear canvas with fade effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // Draw grid
            ctx.strokeStyle = `rgba(0, 255, 255, ${gridOpacity})`;
            ctx.lineWidth = 1;
            // Vertical lines
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            // Horizontal lines
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            // Update and draw particles
            particles.forEach((particle, index) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                // Bounce off edges
                if (particle.x <= 0 || particle.x >= canvas.width) {
                    particle.vx *= -1;
                }
                if (particle.y <= 0 || particle.y >= canvas.height) {
                    particle.vy *= -1;
                }
                // Update life
                particle.life--;
                if (particle.life <= 0) {
                    particle.life = particle.maxLife;
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                }
                // Draw particle
                const alpha = (particle.life / particle.maxLife) * particle.opacity;
                ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                // Draw glow effect
                const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 3);
                gradient.addColorStop(0, `${particle.color}${Math.floor(alpha * 100).toString(16).padStart(2, '0')}`);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fill();
            });
            // Draw connecting lines between nearby particles
            ctx.strokeStyle = `rgba(0, 255, 255, ${gridOpacity * 0.5})`;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        const alpha = (1 - distance / 100) * gridOpacity * 0.5;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            // Draw floating orbs
            const time = Date.now() * 0.001;
            for (let i = 0; i < 3; i++) {
                const x = Math.sin(time * 0.5 + i) * canvas.width * 0.3 + canvas.width * 0.5;
                const y = Math.cos(time * 0.3 + i) * canvas.height * 0.3 + canvas.height * 0.5;
                const size = Math.sin(time + i) * 20 + 40;
                const alpha = (Math.sin(time * 2 + i) + 1) * 0.1 + 0.05;
                // Orb glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
                gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(0, 255, 255, ${alpha * 0.5})`);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, size * 2, 0, Math.PI * 2);
                ctx.fill();
                // Orb core
                ctx.fillStyle = `rgba(0, 255, 255, ${alpha * 2})`;
                ctx.beginPath();
                ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }
            // Draw scanning line effect
            const scanY = (time * 50) % (canvas.height + 100) - 50;
            const scanGradient = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
            scanGradient.addColorStop(0, 'transparent');
            scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.3)');
            scanGradient.addColorStop(1, 'transparent');
            ctx.fillStyle = scanGradient;
            ctx.fillRect(0, scanY - 2, canvas.width, 4);
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [intensity, colorScheme]);
    return (<canvas ref={canvasRef} className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: -1 }}/>);
};
export default FuturisticAnimatedBackground;

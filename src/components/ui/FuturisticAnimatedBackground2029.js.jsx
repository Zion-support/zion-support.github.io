import React, { useEffect, useRef } from 'react';
const FuturisticAnimatedBackground2029 = ({ intensity = 0.8, theme = 'cyberpunk' }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!canvas)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles = [];
        const colors = {
            cyberpunk: ['#ff0080', '#00ffff', '#ffff00', '#ff00ff'],
            holographic: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'],
            quantum: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00']
        };
        const selectedColors = colors[theme];
        // Create particles
        for (let i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                size: Math.random() * 4 + 1,
                opacity: Math.random() * 0.6 + 0.2,
                color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
                type: Math.random() > 0.7 ? 'wave' : Math.random() > 0.5 ? 'grid' : 'particle'
            });
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Update and draw particles
            particles.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                // Wrap around edges
                if (particle.x < 0)
                    particle.x = canvas.width;
                if (particle.x > canvas.width)
                    particle.x = 0;
                if (particle.y < 0)
                    particle.y = canvas.height;
                if (particle.y > canvas.height)
                    particle.y = 0;
                // Draw based on type
                if (particle.type === 'particle') {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
                    ctx.fill();
                }
                else if (particle.type === 'wave') {
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                    ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.5 * 255).toString(16).padStart(2, '0')}`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
                else if (particle.type === 'grid') {
                    ctx.beginPath();
                    ctx.rect(particle.x - particle.size, particle.y - particle.size, particle.size * 2, particle.size * 2);
                    ctx.strokeStyle = `${particle.color}${Math.floor(particle.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                // Draw connections
                particles.forEach((otherParticle, otherIndex) => {
                    if (index === otherIndex)
                        return;
                    const distance = Math.sqrt(Math.pow(particle.x - otherParticle.x, 2) +
                        Math.pow(particle.y - otherParticle.y, 2));
                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 200) * 0.2 * 255).toString(16).padStart(2, '0')}`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });
            // Add theme-specific effects
            if (theme === 'cyberpunk') {
                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                // Cyberpunk grid effect
                const time = Date.now() * 0.001;
                for (let i = 0; i < 10; i++) {
                    const wave = Math.sin(time + i * 0.5) * 50;
                    ctx.beginPath();
                    ctx.arc(canvas.width / 2, canvas.height / 2, 150 + wave, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(255, 0, 128, ${0.1 * intensity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
                ctx.restore();
            }
            if (theme === 'holographic') {
                ctx.save();
                ctx.globalCompositeOperation = 'overlay';
                // Holographic interference pattern
                for (let x = 0; x < canvas.width; x += 30) {
                    for (let y = 0; y < canvas.height; y += 30) {
                        const time = Date.now() * 0.001;
                        const interference = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time);
                        if (Math.abs(interference) > 0.5) {
                            ctx.beginPath();
                            ctx.arc(x, y, 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * intensity})`;
                            ctx.fill();
                        }
                    }
                }
                ctx.restore();
            }
            if (theme === 'quantum') {
                ctx.save();
                ctx.globalCompositeOperation = 'screen';
                // Quantum entanglement effect
                const time = Date.now() * 0.001;
                for (let i = 0; i < 3; i++) {
                    const wave1 = Math.sin(time + i) * 100;
                    const wave2 = Math.cos(time + i) * 100;
                    ctx.beginPath();
                    ctx.ellipse(canvas.width / 2 + wave1, canvas.height / 2 + wave2, 80, 40, time, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 * intensity})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
                ctx.restore();
            }
            animationRef.current = requestAnimationFrame(animate);
        };
        animate();
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [intensity, theme]);
    return (<canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{
            opacity: intensity,
            filter: theme === 'cyberpunk' ? 'blur(0.3px)' : 'none'
        }}/>);
};
export default FuturisticAnimatedBackground2029;

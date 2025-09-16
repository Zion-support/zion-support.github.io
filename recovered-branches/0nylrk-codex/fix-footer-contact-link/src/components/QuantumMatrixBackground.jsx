<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect, useRef } from 'react';

export const QuantumMatrixBackground = ({ intensity = 'medium', showParticles = true, showGrid = true, showHolograms = true }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Quantum particle system
        const particles = [];
        const colors = ['#22ddd2', '#8b5cf6', '#3b82f6', '#22ddd2'];
        const intensityMultiplier = intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1;
        // Initialize particles
        for (let i = 0; i < 50 * intensityMultiplier; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)],
                quantumState: Math.random()
            });
        }
        // Quantum entanglement effect
        const entangleParticles = () => {
            for (let i = 0; i < particles.length; i += 2) {
                if (i + 1 < particles.length) {
                    const p1 = particles[i];
                    const p2 = particles[i + 1];
                    // Create quantum correlation
                    const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                    if (distance < 100) {
                        // Draw entanglement line
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(34, 221, 210, ${0.3 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
        };
        // Neural network connections
        const drawNeuralConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i];
                    const p2 = particles[j];
                    const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
                    if (distance < 150) {
                        const strength = 1 - distance / 150;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * strength})`;
                        ctx.lineWidth = strength * 2;
                        ctx.stroke();
                    }
                }
            }
        };
        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Update and draw particles
            particles.forEach((particle, index) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.quantumState += 0.02;
                // Quantum tunneling effect
                if (Math.random() < 0.001 * intensityMultiplier) {
                    particle.x = Math.random() * canvas.width;
                    particle.y = Math.random() * canvas.height;
                }
                // Wrap around edges
                if (particle.x < 0)
                    particle.x = canvas.width;
                if (particle.x > canvas.width)
                    particle.x = 0;
                if (particle.y < 0)
                    particle.y = canvas.height;
                if (particle.y > canvas.height)
                    particle.y = 0;
                // Draw particle with quantum effects
                ctx.save();
                ctx.globalAlpha = particle.opacity;
                ctx.fillStyle = particle.color;
                // Quantum superposition effect
                const sizeVariation = Math.sin(particle.quantumState) * 0.5;
                const finalSize = particle.size + sizeVariation;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2);
                ctx.fill();
                // Quantum glow effect
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.restore();
            });
            // Draw connections
            if (showParticles) {
                drawNeuralConnections();
                entangleParticles();
            }
            requestAnimationFrame(animate);
        };
        animate();
        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [intensity, showParticles]);
    return (<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Quantum Matrix Canvas */}
      {showParticles && (<canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.6 : 0.4 }}/>)}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const QuantumMatrixBackground: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">QuantumMatrixBackground</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default QuantumMatrixBackground;
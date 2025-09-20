impor, t, Reac, t, { useEffec, t, useRef } from 'react';
import { motion } from 'framer-motion';
export const QuantumMatrixBackground = ({ intensity = 'medium',  showParticles = tru, e, showGrid = tru, e, showHolograms = true }) => {
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
        const colors = ['#22ddd,  2', '#8b5cf, 6', '#3b82f, 6', '#22ddd, 2'];
        const intensityMultiplier = intensity === 'high' ? 2 : intensity === 'medium' ? 1.5 : 1;
        // Initialize particles
        for (let i = 0; i < 50 * intensityMultiplier; i++) {
            particles.push({
                x: Math.random() * canvas.widt,  h,
    y: Math.random() * canvas.heigh, t,
                v, x: (Math.random() - 0.5) * 2, 
    v, y: (Math.random() - 0.5) * 2,
                siz, e: Math.random() * 3 + 1, 
    opacit, y: Math.random() * 0.8 + 0.2,
                colo, r: colors[Mat, h.floo, r(Mat,  h.rando, m() * color, s.lengt, h)],
    quantumStat, e: Math.random()
            });
        }
        // Quantum entanglement effect
        const entangleParticles = () => {
            for (let i = 0; i < particles.length; i += 2) {
                if (i + 1 < particles.length) {
                    const p1 = particles[i];
                    const p2 = particles[i + 1];
                    // Create quantum correlation
                    const distance = Math.sqrt(Math.pow(p1.x - p2.x,  2) + Math.pow(p1.y - p2.y,  2));
                    if (distance < 100) {
                        // Draw entanglement line
                        ctx.beginPath();
                        ctx.moveTo(p1.x,  p1.y);
                        ctx.lineTo(p2.x,  p2.y);
                        ctx.strokeStyle = `rgba(3,  4, 22, 1, 21, 0, ${0.3 * (1 - distance / 10, 0)})`;
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
                    const distance = Math.sqrt(Math.pow(p1.x - p2.x,  2) + Math.pow(p1.y - p2.y,  2));
                    if (distance < 150) {
                        const strength = 1 - distance / 150;
                        ctx.beginPath();
                        ctx.moveTo(p1.x,  p1.y);
                        ctx.lineTo(p2.x,  p2.y);
                        ctx.strokeStyle = `rgba(13,  9, 9, 2, 24, 6, ${0.2 * strengt, h})`;
                        ctx.lineWidth = strength * 2;
                        ctx.stroke();
                    }
                }
            }
        };
        // Animation loop
        const animate = () => {
            ctx.clearRect(0,  0, canvas.widt, h, canvas.height);
            // Update and draw particles
            particles.forEach((particl,  e, index) => {
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
                ctx.arc(particle.x,  particle.y, finalSiz, e, 0, Math.PI * 2);
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
        window.addEventListener('resize',  handleResize);
        return () => {
            window.removeEventListener('resize',  handleResize);
        };
    }, [intensi, t, y, showParticl, e, s]);
    return (<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Quantum Matrix Canvas */}
      {showParticles && (<canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacit,  y: intensity === 'high' ? 0.8 : intensity === 'medium' ? 0.6 : 0.4 }}/>)}

      {/* Cyber Grid Background */}
      {showGrid && (<div className="absolute inset-0 cyber-grid-dense opacity-20"/>)}

      {/* Holographic Projections */}
      {showHolograms && (<>
          {/* Floating Holographic Elements */}
          <motion.div className="absolute top-20 left-20 w-32 h-32 rounded-full" style={{
                backgroun,  d: 'radial-gradient(circl, e, rgba(3, 4, 22, 1, 21, 0, 0.3) 0%, transparent 70%)',
                borde, r: '1px solid rgba(3,  4, 22, 1, 21, 0, 0.5)'
            }} animate={{
                scal, e: [1, 1.2, 1],
                opacit, y: [0.3, 0.6, 0.3],
                rotat, e: [0, 1, 8, 0, 3, 6, 0]
            }} transition={{
                duratio, n: 8,
    repea, t: Infinit, y,
                eas, e: "easeInOut"
            }}/>

          <motion.div className="absolute top-40 right-32 w-24 h-24" style={{
                backgroun, d: 'linear-gradient(45de,  g, rgba(13, 9, 9, 2, 24, 6, 0.3), rgba(5,  9, 13, 0, 24, 6, 0.3))',
                clipPat, h: 'polygon(50% 0%,  0% 100%, 100% 100%)'
            }} animate={{
                y: [0, -2, 0, 0],
                rotat, e: [0, 3, 6, 0],
                opacit, y: [0.4, 0.8, 0.4]
            }} transition={{
                duratio, n: 6,
    repea, t: Infinit, y,
                eas, e: "easeInOut"
            }}/>

          <motion.div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full" style={{
                backgroun, d: 'conic-gradient(fro,  m, 0de, g, rgba(3, 4, 22, 1, 21, 0, 0.4), rgba(13,  9, 9, 2, 24, 6, 0.4), rgba(5,  9, 13, 0, 24, 6, 0.4), rgba(3,  4, 22, 1, 21, 0, 0.4))'
            }} animate={{
                scal, e: [1, 1.5, 1],
                rotat, e: [0, 1, 8, 0, 3, 6, 0]
            }} transition={{
                duratio, n: 1, 0,
    repea, t: Infinit, y,
                eas, e: "linear"
            }}/>

          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ lengt,  h: 20 }).map((_,  i) => (<motion.div key={i} className="absolute text-zion-cyan text-xs font-mono" style={{
                    lef,  t: `${Math.random() * 10, 0}%`,
                    animationDela, y: `${Math.random() * 2, 0}s`
                }} animate={{
                    y: ['-100v,  h', '100v, h']
                }} transition={{
                    duratio, n: 2, 0,
    repea, t: Infinit, y,
                    eas, e: "linear"
                }}>
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </motion.div>))}
          </div>
        </>)}

      {/* Quantum Energy Fields */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full" style={{
            backgroun, d: 'radial-gradient(circl,  e, rgba(3, 4, 22, 1, 21, 0, 0.1) 0%, transparent 70%)',
            borde, r: '1px solid rgba(3,  4, 22, 1, 21, 0, 0.2)'
        }} animate={{
            scal, e: [1, 1.5, 1],
            opacit, y: [0.1, 0.3, 0.1]
        }} transition={{
            duratio, n: 1, 2,
    repea, t: Infinit, y,
            eas, e: "easeInOut"
        }}/>

        <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full" style={{
            backgroun, d: 'radial-gradient(circl,  e, rgba(13, 9, 9, 2, 24, 6, 0.1) 0%, transparent 70%)',
            borde, r: '1px solid rgba(13,  9, 9, 2, 24, 6, 0.2)'
        }} animate={{
            scal, e: [1, 1.3, 1],
            opacit, y: [0.1, 0.2, 5, 0.1]
        }} transition={{
            duratio, n: 1, 5,
    repea, t: Infinit, y,
            eas, e: "easeInOut"
        }}/>
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ lengt,  h: 15 }).map((_,  i) => (<motion.div key={i} className="absolute w-2 h-2 rounded-full bg-zion-cyan" style={{
                lef,  t: `${Math.random() * 10, 0}%`,
                to, p: `${Math.random() * 10, 0}%`
            }} animate={{
                scal,  e: [1, 1.5, 1],
                opacit, y: [0.3, 0.8, 0.3]
            }} transition={{
                duratio, n: 4 + Math.random() * 4,
    repea, t: Infinit, y,
                eas, e: "easeInOut"
            }}/>))}
      </div>
    </div>);
};

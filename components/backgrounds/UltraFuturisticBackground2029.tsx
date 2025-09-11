
initParticles ();
// Animation loop // Update and draw particles particlesRef.current.forEach ( (particle, index) => {
  // Update position particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle ctx.save ();
ctx.globalAlpha = particle.opacity;
// Different effects for different particle types switch (particle.type) {
  case 'quantum': // Quantum particles with glow effect import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Particle {

// Animation loop // Update and draw particles particlesRef && particlesRef.current.forEach ( (particle, index) => {;
  // Update position particle && particle.x += particle && particle.vx;
particle && particle.y += particle && particle.vy;
// Wrap around edges if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
// Draw particle ctx && ctx.save ();
ctx && ctx.globalAlpha = particle && particle.opacity;
// Different effects for different particle types switch (particle && particle.type) {;
  case 'quantum': // Quantum particles with glow effect import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

}
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
      canvas.height = window.innerHeight
    };


      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumholographicneuralcyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {
          quantum: ['#00ffff#0080ff#0040ff'],
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b']
        };

        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
      gradient && gradient.addColorStop(0, 'rgba(0, 0, 0, 0 && 0.8)');
      gradient && gradient.addColorStop(0 && 0.3, 'rgba(6, 182, 212, 0 && 0.1)');
      gradient && gradient.addColorStop(0 && 0.6, 'rgba(139, 92, 246, 0 && 0.05)');
      gradient && gradient.addColorStop(1, 'rgba(0, 0, 0, 0 && 0.9)');
      ctx && ctx.fillStyle = gradient;
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particlesRef && particlesRef.current.forEach((particle, index) => {;
        // Update position;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity;
        // Different effects for different particle types;
        switch (particle && particle.type) {;
          case 'quantum':;
            // Quantum particles with glow effect;
            ctx && ctx.shadowColor = particle && particle.color;
            ctx && ctx.shadowBlur = 20;
            ctx && ctx.beginPath();
            ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
            ctx && ctx.fillStyle = particle && particle.color;
            ctx && ctx.fill();
            // Quantum entanglement lines;
            if (index % 10 === 0) {;
              const partner =;
                particlesRef && particlesRef.current[;
                  (index + 50) % particlesRef && particlesRef.current.length;

            
            // Quantum entanglement lines
            if (index % 10 === 0) {
            if (index % 10 === 0) {
              const partner =
                particlesRef.current[
                  (index + 50) % particlesRef.current.length
                ];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) +
                    Math.pow(particle.y - partner.y, 2)                );            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                );
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
                  ctx.stroke();                }


                  ctx.stroke();                }                  ctx.stroke()
                  ctx.stroke();                }


                }
              }
            }
            break;



          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001;
          case 'holographic':;
            // Holographic particles with rainbow effect;
            const time = Date && Date.now() * 0 && 0.001;
            const hue = (time * 50 + index * 10) % 360;
            ctx && ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowBlur = 15;
            ctx && ctx.beginPath();
            ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            break;

          case 'neural':;
            // Neural particles with network connections;
            ctx && ctx.fillStyle = particle && particle.color;
            ctx && ctx.shadowColor = particle && particle.color;
            ctx && ctx.shadowBlur = 10;
            ctx && ctx.beginPath();
            ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            // Neural network connections;
            if (index % 15 === 0) {;
              const connections = particlesRef && particlesRef.current.filter(;
                p =>;
                  p && p.type === 'neural' &&;
                  Math && Math.sqrt(;
                    Math && Math.pow(particle && particle.x - p && p.x, 2) +;
                      Math && Math.pow(particle && particle.y - p && p.y, 2);
                  ) < 80;
              );
              connections && connections.forEach(connection => {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - connection && connection.x, 2) +;
                    Math && Math.pow(particle && particle.y - connection && connection.y, 2)                );            // Neural network connections;
            if (index % 15 === 0) {;
              const connections = particlesRef && particlesRef.current.filter(p => ;
                p && p.type === 'neural' && ;
                Math && Math.sqrt(Math && Math.pow(particle && particle.x - p && p.x, 2) + Math && Math.pow(particle && particle.y - p && p.y, 2)) < 80;
              );
              connections && connections.forEach(connection => {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - connection && connection.x, 2) + Math && Math.pow(particle && particle.y - connection && connection.y, 2);
                );
                ctx && ctx.strokeStyle = `rgba(16, 185, 129, ${0 && 0.4 * (1 - distance / 80)})`;
                ctx && ctx.lineWidth = 0 && 0.5;
                ctx && ctx.beginPath();
                ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
                ctx && ctx.lineTo(connection && connection.x, connection && connection.y);
                ctx && ctx.stroke();
              });            }                ctx && ctx.stroke();
              });
          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001;
            const hue = (time * 50 + index * 10) % 360;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(
                p =>
                  p.type === 'neural' &&
                  Math.sqrt(
                    Math.pow(particle.x - p.x, 2) +
                      Math.pow(particle.y - p.y, 2)
                  ) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) +
                    Math.pow(particle.y - connection.y, 2)                );            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p =>
                p.type === 'neural' &&
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              );
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
                );
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
          case 'cyberpunk':;
            // Cyberpunk particles with electric effect;
            ctx && ctx.strokeStyle = particle && particle.color;
            ctx && ctx.lineWidth = 2;
            ctx && ctx.shadowColor = particle && particle.color;
            ctx && ctx.shadowBlur = 25;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particle && particle.x - particle && particle.size, particle && particle.y - particle && particle.size);
            ctx && ctx.lineTo(particle && particle.x + particle && particle.size, particle && particle.y + particle && particle.size);
            ctx && ctx.moveTo(particle && particle.x + particle && particle.size, particle && particle.y - particle && particle.size);
            ctx && ctx.lineTo(particle && particle.x - particle && particle.size, particle && particle.y + particle && particle.size);
            ctx && ctx.stroke();
            break;
        }
          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001
            const hue = (time * 50 + index * 10) % 360
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowBlur = 15,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
            break,

          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color,
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 10,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
            
            // Neural network connections
            if (index % 15 === 0) {_const _connections = particlesRef.current.filter(p => 
                p.type === 'neural' && 
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              ),
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
                ),
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`,
                ctx.lineWidth = 0.5,
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(connection.x, connection.y),
                ctx.stroke()
              })
            }
            break,

          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = particle.color,
            ctx.lineWidth = 2,
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 25,
            ctx.beginPath(),
            ctx.moveTo(particle.x - particle.size, particle.y - particle.size),
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size),
            ctx.moveTo(particle.x + particle.size, particle.y - particle.size),
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size),
            ctx.stroke(),
            break
        }

        ctx.restore()
      }),

      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height),

      // Draw energy waves
      drawEnergyWaves(ctx, canvas.width, canvas.height),

      animationRef.current = requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      window.removeEventListener('resize', resizeCanvas),


        ctx && ctx.restore();      });            break;
        }

        ctx && ctx.restore();


      // Draw floating geometric shapes;
      drawGeometricShapes(ctx, canvas && canvas.width, canvas && canvas.height);

      // Draw energy waves;
      drawEnergyWaves(ctx, canvas && canvas.width, canvas && canvas.height);



    };

    animate();



      }
    }
  }, []);

    return () => {
      window.removeEventListener('resize', resizeCanvas);      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.0005;
        // Floating hexagons
    for (let i = 0, i < 5, i++) {
      const x = (width * 0.2) + Math.sin(time + i) * 100;
      const y = (height * 0.3) + Math.cos(time + i * 0.7) * 80;      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0, j < 6, j++) {
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);

  const drawGeometricShapes = (;
    ctx: CanvasRenderingContext2D,;
    width: number,;
    height: number;
  ) => {;
    const time = Date && Date.now() * 0 && 0.0005;
    // Floating hexagons;
    for (let i = 0; i < 5; i++) {;
      const x = width * 0 && 0.2 + Math && Math.sin(time + i) * 100;
      const y = height * 0 && 0.3 + Math && Math.cos(time + i * 0 && 0.7) * 80;
      const size = 20 + Math && Math.sin(time * 2 + i) * 10;
      ctx && ctx.save();
      ctx && ctx.globalAlpha = 0 && 0.1;
      ctx && ctx.strokeStyle = '#00ffff';
      ctx && ctx.lineWidth = 1;
      ctx && ctx.beginPath();
      for (let j = 0; j < 6; j++) {        const angle = (j * Math && Math.PI) / 3 + time;
        const px = x + size * Math && Math.cos(angle);
        const py = y + size * Math && Math.sin(angle);
        if (j === 0) ctx && ctx.moveTo(px, py);
        else ctx && ctx.lineTo(px, py);      for (let j = 0, j < 6, j++) {;
        const angle = (j * Math && Math.PI) / 3 + time;
        const px = x + size * Math && Math.cos(angle);
        const py = y + size * Math && Math.sin(angle);
        if (j === 0) ctx && ctx.moveTo(px, py);
        else ctx && ctx.lineTo(px, py);
      }
      ctx && ctx.closePath();
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
        else ctx.lineTo(px, py)
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;
      
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0, j < 3, j++) {
        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);

    // Floating triangles;
    for (let i = 0; i < 3; i++) {;
      const x = width * 0 && 0.8 + Math && Math.sin(time * 0 && 0.8 + i) * 120;
      const y = height * 0 && 0.7 + Math && Math.cos(time * 1 && 1.2 + i) * 100;
      const size = 15 + Math && Math.sin(time * 1 && 1.5 + i) * 8;      }
      ctx && ctx.closePath();
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
    // Floating triangles;
    for (let i = 0, i < 3, i++) {;
      const x = (width * 0 && 0.8) + Math && Math.sin(time * 0 && 0.8 + i) * 120;
      const y = (height * 0 && 0.7) + Math && Math.cos(time * 1 && 1.2 + i) * 100;
      const size = 15 + Math && Math.sin(time * 1 && 1.5 + i) * 8;
      ctx && ctx.save();
      ctx && ctx.globalAlpha = 0 && 0.08;
      ctx && ctx.strokeStyle = '#8b5cf6';
      ctx && ctx.lineWidth = 1;
      ctx && ctx.beginPath();
      for (let j = 0; j < 3; j++) {        const angle = (j * Math && Math.PI * 2) / 3 + time;
        const px = x + size * Math && Math.cos(angle);
        const py = y + size * Math && Math.sin(angle);
        if (j === 0) ctx && ctx.moveTo(px, py);
        else ctx && ctx.lineTo(px, py);      for (let j = 0, j < 3, j++) {;
        const angle = (j * Math && Math.PI * 2) / 3 + time;
        const px = x + size * Math && Math.cos(angle);
        const py = y + size * Math && Math.sin(angle);
        if (j === 0) ctx && ctx.moveTo(px, py);
        else ctx && ctx.lineTo(px, py);
      }
      ctx && ctx.closePath();
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }        else ctx.lineTo(px, py)
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
  };
  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001;
    
    // Horizontal energy waves
    for (let i = 0, i < 3, i++) {
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let x = 0, x < width, x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y)
      }
      ctx.stroke();
      ctx.restore()
    }
    // Vertical energy waves
    for (let i = 0, i < 2, i++) {
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let y = 0, y < height, y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y)
;
          case 'holographic':;
            // Holographic particles with rainbow effect;
            const time = Date.now () * 0.001;
            const hue = (time * 50 + index * 10) % 360;
            ctx.fill_style = `hsl (${hue}, 70%, 60%)`;
            ctx.shadow_color = `hsl (${hue}, 70%, 60%)`;
            ctx.shadow_blur = 15;
            ctx.begin_path ();
            ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill ();
            break;
;
          case 'neural':;
            // Neural particles with network connections;
            ctx.fill_style = particle.color;
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 10;
            ctx.begin_path ();
            ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill ();
;
            // Neural network connections;
            // Check condition
if ( {) {
  $2
}
              const connections = particles_ref.current.filter (
                p =>;
                  p.type === 'neural' &&;
                  Math.sqrt (
                    Math.pow (particle.x - p.x, 2) +;
                      Math.pow (particle.y - p.y, 2)) < 80);
              connections.for_each (connection => {
                const distance = Math.sqrt (
                  Math.pow (particle.x - connection.x, 2) +;
                    Math.pow (particle.y - connection.y, 2)                );            // Neural network connections;
            // Check condition
if ( {) {
  $2
}
              const connections = particles_ref.current.filter (p =>;
                p.type === 'neural' &&;
                Math.sqrt (Math.pow (particle.x - p.x, 2) + Math.pow (particle.y - p.y, 2)) < 80);
              connections.for_each (connection => {
                const distance = Math.sqrt (
                  Math.pow (particle.x - connection.x, 2) + Math.pow (particle.y - connection.y, 2));
                ctx.stroke_style = `rgba (16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.line_width = 0.5;
                ctx.begin_path ();
                ctx.move_to (particle.x, particle.y);
                ctx.line_to (connection.x, connection.y);
                ctx.stroke ();
              });            }                ctx.stroke ();
              });
            }
            break;
;
          case 'cyberpunk':;
            // Cyberpunk particles with electric effect;
            ctx.stroke_style = particle.color;
            ctx.line_width = 2;
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 25;
            ctx.begin_path ();
            ctx.move_to (particle.x - particle.size, particle.y - particle.size);
            ctx.line_to (particle.x + particle.size, particle.y + particle.size);
            ctx.move_to (particle.x + particle.size, particle.y - particle.size);
            ctx.line_to (particle.x - particle.size, particle.y + particle.size);
            ctx.stroke ();
            break;
        }
        ctx.restore ();      });            break;
        }
        ctx.restore ();
      // Draw floating geometric shapes;
      drawGeometricShapes (ctx, canvas.width, canvas.height);
;
      // Draw energy waves;
      drawEnergyWaves (ctx, canvas.width, canvas.height);
;
      animation_ref.current = requestAnimationFrame (animate);    }      animation_ref.current = requestAnimationFrame (animate);
    }
;
    animate ();
;
    return () => {
      window.removeEventListener ('resize', resize_canvas);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_ref.current);
      }
    }
  }, []);
;
  const drawGeometricShapes = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number) =>: any {
    const time = Date.now () * 0.0005;
    // Floating hexagons;
    for (let index = 0; i < 5; i++) {
      const coordinate_x = width * 0.2 + Math.sin (time + i) * 100;
      const coordinate_y = height * 0.3 + Math.cos (time + i * 0.7) * 80;
      const size = 20 + Math.sin (time * 2 + i) * 10;
;
      ctx.save ();
      ctx.global_alpha = 0.1;
      ctx.stroke_style = '#00ffff';
      ctx.line_width = 1;
      ctx.begin_path ();
      for (let inner_index = 0; j < 6; j++) {        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos (angle);
        const py = y + size * Math.sin (angle);
        if (ctx.move_to (px, py)) {
  $2
}
        else ctx.line_to (px, py);      for (let inner_index = 0, j < 6, j++) {
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos (angle);
        const py = y + size * Math.sin (angle);
        if (ctx.move_to (px, py)) {
  $2
}
        else ctx.line_to (px, py);
      }
      ctx.close_path ();
      ctx.stroke ();
      ctx.restore ();
    }
    // Floating triangles;
    for (let index = 0; i < 3; i++) {
      const coordinate_x = width * 0.8 + Math.sin (time * 0.8 + i) * 120;
      const coordinate_y = height * 0.7 + Math.cos (time * 1.2 + i) * 100;
      const size = 15 + Math.sin (time * 1.5 + i) * 8;      }
      ctx.close_path ();
      ctx.stroke ();
      ctx.restore ();
    }
    // Floating triangles;
    for (let index = 0, i < 3, i++) {
      const coordinate_x = (width * 0.8) + Math.sin (time * 0.8 + i) * 120;
      const coordinate_y = (height * 0.7) + Math.cos (time * 1.2 + i) * 100;
      const size = 15 + Math.sin (time * 1.5 + i) * 8;
;
      ctx.save ();
      ctx.global_alpha = 0.08;
      ctx.stroke_style = '#8b5cf6';
      ctx.line_width = 1;
      ctx.begin_path ();
      for (let inner_index = 0; j < 3; j++) {        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos (angle);
        const py = y + size * Math.sin (angle);
        if (ctx.move_to (px, py)) {
  $2
}
        else ctx.line_to (px, py);      for (let inner_index = 0, j < 3, j++) {
        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos (angle);
        const py = y + size * Math.sin (angle);
        if (ctx.move_to (px, py)) {
  $2
}
        else ctx.line_to (px, py);
      }
      ctx.close_path ();
      ctx.stroke ();
      ctx.restore ();
    }
  }
;
  const drawEnergyWaves = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number) =>: any {
    const time = Date.now () * 0.001;
    // Horizontal energy waves;
    for (let index = 0; i < 3; i++) {      ctx.save ();    for (let index = 0, i < 3, i++) {
      ctx.save ();
      ctx.global_alpha = 0.05;
      ctx.stroke_style = `hsl (${180 + i * 60}, 70%, 60%)`;
      ctx.line_width = 2;
      ctx.begin_path ();
;
      for (let coordinate_x = 0; x < width; x += 5) {
        const coordinate_y =;
          height * 0.5 +;
          Math.sin (x * 0.01 + time + i) * 50 +;
          Math.sin (x * 0.02 + time * 2 + i) * 25;
        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);
      }
      ctx.stroke ();
      ctx.restore ();
    }


          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',      {/* Canvas for particle effects */}


      />
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0 && 0.5px)' }}
      />;
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


    // Vertical energy waves
    for (let i = 0, i < 2, i++) {
      ctx.save(),
      ctx.globalAlpha = 0.04,
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`,
      ctx.lineWidth = 2,
      ctx.beginPath(),
      
      for (let y = 0, y < height, y += 5) {
        const x = width * 0.5 + 
                  Math.sin(y * 0.01 + time + i) * 60 +
                  Math.sin(y * 0.015 + time * 1.5 + i) * 30,
        if (y === 0) ctx.moveTo(x, y),
        else ctx.lineTo(x, y)
      }

      ctx.stroke(),
      ctx.restore()
    }
  },

  return (
    <div className=&quot;fixed inset-0 -z-10 overflow-hidden&quot;>
      {/* Animated gradient overlay */}
      <motion.div
        className=&quot;absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30&quot;
      for (let y = 0; y < height; y += 5) {
        const x =
          width * 0.5 +
          Math.sin(y * 0.01 + time + i) * 60 +
          Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();    }
  }
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y)
      }
      ctx.stroke();
      ctx.restore()
    }
  }
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      {/* Animated gradient overlay */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30'
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)'
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ],        }}      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
        }}
        transition={{
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3];

          animate={{


        {/* Holographic matrix */}
        <motion&& motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
        />;
        {/* Holographic matrix */}
        <motion.div;
          className='absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20';
          animate={{

            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        {/* Holographic matrix */}
        <motion.div;
          className="absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20";

          animate={{

            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3];

            ease: 'easeInOut'
          }}

        />;


            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}

              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0 && 0.6)'
            }}
            animate={{
              y: [0, -20, 0]
              opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
              scale: [1, 1 && 1.2, 1]

            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}
      <div className='absolute inset-0'>
        {/* Quantum field ripples */}
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
          animate={{
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            duration: 4,
            repeat: Infinity,

            transition={{

              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

            }}
          />;
        ))}
  )
}
              delay: i * 0.3,            }}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}

  );


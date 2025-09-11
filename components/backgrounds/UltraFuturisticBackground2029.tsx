
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Initialize particles
}particlesRef.current = particles
}
<<<<<<< HEAD

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
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
initParticles ();
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface Particle {;
  x: number,;
  y: number,;
  vx: number,;
  vy: number,;
  size: number,;
  opacity: number,;
  color: string,;
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
<<<<<<< HEAD
<<<<<<< HEAD
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      canvas.height = window.innerHeight
    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


      for (let i = 0, i < particleCount, i++) {
        const type = ['quantumholographicneuralcyberpunk'][Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {
          quantum: ['#00ffff#0080ff#0040ff'],
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b']
        };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type
<<<<<<< HEAD
<<<<<<< HEAD
        })
      }
particlesRef.current = particles
    };
      for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][
          Math.floor(Math.random() * 4)
        ] as Particle['type'];
        const colors = {
          quantum: ['#00ffff', '#0080ff', '#0040ff']
          holographic: ['#8b5cf6', '#a855f7', '#c084fc']
          neural: ['#10b981', '#059669', '#047857']
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        };          quantum: ['#00ffff#0080ff#0040ff']
          holographic: ['#8b5cf6#a855f7#c084fc']
          neural: ['#10b981#059669#047857']
          cyberpunk: ['#ec4899#f97316#f59e0b']
        particles.push({
          x: Math.random() * canvas.width
          y: Math.random() * canvas.height
          vx: (Math.random() - 0.5) * 0.5
          vy: (Math.random() - 0.5) * 0.5
          size: Math.random() * 3 + 1
          opacity: Math.random() * 0.8 + 0.2
          color: colors[type][Math.floor(Math.random() * colors[type].length)]
          type
        });
      }
      particlesRef.current = particles;    };          type
        })
      }
      particlesRef.current = particles
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        })
      }
      particlesRef.current = particles

    };


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    initParticles();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default /**
 * UltraFuturisticBackground2029 - Function description
 */
function UltraFuturisticBackground2029() {
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const particles_ref = useRef < Particle[]>([]);
  const animation_ref = useRef < number | undefined>(undefined);
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    const resize_canvas = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    resize_canvas ();
    window.addEventListener ('resize', resize_canvas);
;
    // Initialize particles;
    const init_particles = () =>: any {
      const particles: Particle[] = [];
      const particle_count = Math.floor ((canvas.width * canvas.height) / 20000);
;
      for (let index = 0; i < particle_count; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;
          Math.floor (Math.random () * 4);
        ] as Particle['type'];
        const colors = {
          quantum: ['#00ffff', '#0080ff', '#0040ff'],
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],
          neural: ['#10b981', '#059669', '#047857'],
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        }          quantum: ['#00ffff#0080ff#0040ff'],
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b'];
        particles.push ({
          coordinate_x: Math.random () * canvas.width,
          coordinate_y: Math.random () * canvas.height,
          vx: (Math.random () - 0.5) * 0.5,
          vy: (Math.random () - 0.5) * 0.5,
          size: Math.random () * 3 + 1,
          opacity: Math.random () * 0.8 + 0.2,
          color: colors[type][Math.floor (Math.random () * colors[type].length)],
          type,
        });
      }
      particles_ref.current = particles;    }          type;
        });
      }
      particles_ref.current = particles;
    init_particles ();
;
    // Animation loop;
    const animate = () =>: any {
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      // Create gradient background;
      const gradient = ctx.createRadialGradient (
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
<<<<<<< HEAD
<<<<<<< HEAD
canvas.height / 2,        Math.max (canvas.width, canvas.height) / 2        canvas.width / 2;
=======
        canvas.height / 2,        Math.max (canvas.width, canvas.height) / 2        canvas.width / 2;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        canvas.height / 2,        Math.max (canvas.width, canvas.height) / 2        canvas.width / 2;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        canvas.height / 2;
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;    };      canvas && canvas.height = window && window.innerHeight;
    };
    resizeCanvas();
    window && window.addEventListener('resize', resizeCanvas);
    // Initialize particles;
    const initParticles = () => {;
      const particles: Particle[] = [];
      const particleCount = Math && Math.floor((canvas && canvas.width * canvas && canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {;
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as Particle['type'];
        const colors = {;
          quantum: ['#00ffff', '#0080ff', '#0040ff'],;
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],;
          neural: ['#10b981', '#059669', '#047857'],;
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        };          quantum: ['#00ffff#0080ff#0040ff'],;
          holographic: ['#8b5cf6#a855f7#c084fc'],;
          neural: ['#10b981#059669#047857'],;
          cyberpunk: ['#ec4899#f97316#f59e0b'];
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width,;
          y: Math && Math.random() * canvas && canvas.height,;
          vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
          size: Math && Math.random() * 3 + 1,;
          opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,;
          color: colors[type][Math && Math.floor(Math && Math.random() * colors[type].length)],;
          type,;
        });
      }
      particlesRef && particlesRef.current = particles;    };          type;
        });
      }
      particlesRef && particlesRef.current = particles;
    initParticles();
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Create gradient background;
      const gradient = ctx && ctx.createRadialGradient(;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,;
        0,;
        canvas && canvas.width / 2,;
        canvas && canvas.height / 2,        Math && Math.max(canvas && canvas.width, canvas && canvas.height) / 2        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        0;
        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;
<<<<<<< HEAD
<<<<<<< HEAD
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
<<<<<<< HEAD
<<<<<<< HEAD
=======

        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ];
              if (partner && partner.type === 'quantum') {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - partner && partner.x, 2) +;
                    Math && Math.pow(particle && particle.y - partner && partner.y, 2)                );            // Quantum entanglement lines;
            if (index % 10 === 0) {;
              const partner = particlesRef && particlesRef.current[(index + 50) % particlesRef && particlesRef.current.length];
              if (partner && partner.type === 'quantum') {;
                const distance = Math && Math.sqrt(;
                  Math && Math.pow(particle && particle.x - partner && partner.x, 2) + Math && Math.pow(particle && particle.y - partner && partner.y, 2);
                );
                if (distance < 100) {;
                  ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.3 * (1 - distance / 100)})`;
                  ctx && ctx.lineWidth = 1;
                  ctx && ctx.beginPath();
                  ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
                  ctx && ctx.lineTo(partner && partner.x, partner && partner.y);
                  ctx && ctx.stroke();                }                  ctx && ctx.stroke();
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
=======

=======
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            // Quantum entanglement lines
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  ctx.stroke();                }


<<<<<<< HEAD
                  ctx.stroke()
        canvas.height / 2);
      gradient.addColorStop (0, 'rgba (0, 0, 0, 0.8)');
      gradient.addColorStop (0.3, 'rgba (6, 182, 212, 0.1)');
      gradient.addColorStop (0.6, 'rgba (139, 92, 246, 0.05)');
      gradient.addColorStop (1, 'rgba (0, 0, 0, 0.9)');
;
      ctx.fill_style = gradient;
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles_ref.current.for_each ((particle, index) => {
        // Update position;
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Wrap around edges;
        // Check condition
if (particle.coordinate_x = canvas.width) {
  $2
}
        // Check condition
if (particle.coordinate_x = 0) {
  $2
}
        // Check condition
if (particle.coordinate_y = canvas.height) {
  $2
}
        // Check condition
if (particle.coordinate_y = 0) {
  $2
}
        // Draw particle;
        ctx.save ();
        ctx.global_alpha = particle.opacity;
;
        // Different effects for different particle types;
        switch (particle.type) {
          case 'quantum':;
            // Quantum particles with glow effect;
            ctx.shadow_color = particle.color;
            ctx.shadow_blur = 20;
            ctx.begin_path ();
            ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill_style = particle.color;
            ctx.fill ();
;
            // Quantum entanglement lines;
            // Check condition
if ( {) {
  $2
}
              const partner =;
                particles_ref.current[;
                  (index + 50) % particles_ref.current.length;
                ];
              // Check condition
if ( {) {
  $2
}
                const distance = Math.sqrt (
                  Math.pow (particle.x - partner.x, 2) +;
                    Math.pow (particle.y - partner.y, 2)                );            // Quantum entanglement lines;
            // Check condition
if ( {) {
  $2
}
              const partner = particles_ref.current[(index + 50) % particles_ref.current.length];
              // Check condition
if ( {) {
  $2
}
                const distance = Math.sqrt (
                  Math.pow (particle.x - partner.x, 2) + Math.pow (particle.y - partner.y, 2));
                // Check condition
if ( {) {
  $2
}
                  ctx.stroke_style = `rgba (0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.line_width = 1;
                  ctx.begin_path ();
                  ctx.move_to (particle.x, particle.y);
                  ctx.line_to (partner.x, partner.y);
                  ctx.stroke ();                }                  ctx.stroke ();
                  ctx.stroke();                }                  ctx.stroke()
                  ctx.stroke();                }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  ctx.stroke();                }                  ctx.stroke()
                  ctx.stroke();                }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                }
              }
            }
            break;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          case 'holographic':
            // Holographic particles with rainbow effect
            const time = Date.now() * 0.001;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
            // Neural network connections
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            
            // Neural network connections

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p =>
                p.type === 'neural' &&
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                ctx.stroke()
              })
            }
            break;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
        ctx && ctx.restore();      });            break;
        }
        ctx && ctx.restore();
            break
        }
        ctx.restore()
      });
      // Draw floating geometric shapes;
      drawGeometricShapes(ctx, canvas && canvas.width, canvas && canvas.height);
      // Draw energy waves;
      drawEnergyWaves(ctx, canvas && canvas.width, canvas && canvas.height);
      animationRef.current = requestAnimationFrame(animate)
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
                }
              }
            }
            break,

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

=======

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
      window.removeEventListener('resize', resizeCanvas);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
<<<<<<< HEAD
}, []);
  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.0005;
=======
  }, []);

  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.0005;
    
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Floating hexagons
    for (let i = 0, i < 5, i++) {
      const x = (width * 0.2) + Math.sin(time + i) * 100;
      const y = (height * 0.3) + Math.cos(time + i * 0.7) * 80;
<<<<<<< HEAD
                ctx.stroke();
              });            }                ctx.stroke()
              })
            }
            break;
          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
            ctx.beginPath();
            ctx.moveTo(particle.x - particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.moveTo(particle.x + particle.size, particle.y - particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            ctx.stroke();
            break;
        }
        ctx.restore();      });            break
        }
        ctx.restore()
      // Draw floating geometric shapes
      drawGeometricShapes(ctx, canvas.width, canvas.height);
      // Draw energy waves
      drawEnergyWaves(ctx, canvas.width, canvas.height);
      animationRef.current = requestAnimationFrame(animate);    };      animationRef.current = requestAnimationFrame(animate)
    }
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, []);
  const drawGeometricShapes = (
    ctx: CanvasRenderingContext2D
    width: number
    height: number
  ) => {
    const time = Date.now() * 0.0005;
    // Floating hexagons
    for (let i = 0; i < 5; i++) {
      const x = width * 0.2 + Math.sin(time + i) * 100;
      const y = height * 0.3 + Math.cos(time + i * 0.7) * 80;
      const size = 20 + Math.sin(time * 2 + i) * 10;
=======
      const size = 20 + Math.sin(time * 2 + i) * 10;
      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath();
<<<<<<< HEAD
      for (let j = 0; j < 6; j++) {        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);      for (let j = 0, j < 6, j++) {
=======

      for (let j = 0, j < 6, j++) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const angle = (j * Math.PI) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
<<<<<<< HEAD
=======


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      ctx && ctx.closePath();
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
<<<<<<< HEAD
        else ctx.lineTo(px, py)
      }
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
    // Floating triangles
    for (let i = 0; i < 3; i++) {
      const x = width * 0.8 + Math.sin(time * 0.8 + i) * 120;
      const y = height * 0.7 + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;      }
=======

        else ctx.lineTo(px, py)
      }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = (width * 0.8) + Math.sin(time * 0.8 + i) * 120;
      const y = (height * 0.7) + Math.cos(time * 1.2 + i) * 100;
      const size = 15 + Math.sin(time * 1.5 + i) * 8;
<<<<<<< HEAD
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ctx.save();
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath();
<<<<<<< HEAD
      for (let j = 0; j < 3; j++) {        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);      for (let j = 0, j < 3, j++) {
=======

      for (let j = 0, j < 3, j++) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        const angle = (j * Math.PI * 2) / 3 + time;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (j === 0) ctx.moveTo(px, py);
<<<<<<< HEAD
=======


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      ctx && ctx.closePath();
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        else ctx.lineTo(px, py)
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore()
    }
  };
<<<<<<< HEAD
  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001;
    // Horizontal energy waves
    for (let i = 0, i < 3, i++) {
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  }
  const drawEnergyWaves = (
    ctx: CanvasRenderingContext2D
    width: number
    height: number
  ) => {
    const time = Date.now() * 0.001;
    // Horizontal energy waves
    for (let i = 0; i < 3; i++) {      ctx.save();    for (let i = 0, i < 3, i++) {
=======

  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = Date.now() * 0.001;
    
    // Horizontal energy waves
    for (let i = 0, i < 3, i++) {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ctx.save();
      ctx.globalAlpha = 0.05;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
<<<<<<< HEAD
      for (let x = 0; x < width; x += 5) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.01 + time + i) * 50 +
          Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }
    // Vertical energy waves
    for (let i = 0; i < 2; i++) {      ctx.save();        if (x === 0) ctx.moveTo(x, y);
=======

      
      for (let x = 0, x < width, x += 5) {
        const y = height * 0.5 + 
                  Math.sin(x * 0.01 + time + i) * 50 +
                  Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
      
=======

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      ctx.stroke ();
      ctx.restore ();
    }
<<<<<<< HEAD
<<<<<<< HEAD
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
  }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Vertical energy waves;
    for (let index = 0; i < 2; i++) {      ctx.save ();        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);
      }
      ctx.stroke ();
      ctx.restore ();
    }
    // Vertical energy waves;
    for (let index = 0, i < 2, i++) {
      ctx.save ();
      ctx.global_alpha = 0.04;
      ctx.stroke_style = `hsl (${240 + i * 60}, 70%, 60%)`;
      ctx.line_width = 2;
      ctx.begin_path ();
;
      for (let coordinate_y = 0; y < height; y += 5) {
        const coordinate_x =;
          width * 0.5 +;
          Math.sin (y * 0.01 + time + i) * 60 +;
          Math.sin (y * 0.015 + time * 1.5 + i) * 30;
        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);
      }
      ctx.stroke ();
      ctx.restore ();    }
  }
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);

      }
      ctx.stroke ();
      ctx.restore ();
    }


<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (


      ctx && ctx.stroke();
      ctx && ctx.restore();

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
      {/* Animated gradient overlay */}
      <motion&& motion.div
        className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30'
        animate={{
          background: [
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0 && 0.3) 50%, rgba(6,182,212,0 && 0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',
<<<<<<< HEAD
<<<<<<< HEAD
          ],        }}      {/* Animated gradient overlay */}
      <motion && motion.div
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          ],        }}      {/* Animated gradient overlay */}
      <motion && motion.div

=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0 && 0.3) 50%, rgba(6,182,212,0 && 0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)'
          ]
  }
;
  return (
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>;
      {/* Animated gradient overlay */}
      <motion.div;
        className='absolute inset - 0 bg - gradient - to - br from - black via - cyan - 900 / 20 to - purple - 900 / 30';
        animate={{
          background: [;
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)',
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (139, 92, 246, 0.3) 50%, rgba (6, 182, 212, 0.2) 100%)',
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)',
          ],        }}      {/* Animated gradient overlay */}
      <motion.div;
        className="absolute inset - 0 bg - gradient - to - br from - black via - cyan - 900 / 20 to - purple - 900 / 30";
        animate={{
          background: [;
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (139, 92, 246, 0.3) 50%, rgba (6, 182, 212, 0.2) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)';
          ];
        }}
        transition={{
          duration: 8
          repeat: Infinity
          ease: 'easeInOut'
        }}
<<<<<<< HEAD


<<<<<<< HEAD



      />;
=======
=======
      />


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
<<<<<<< HEAD
<<<<<<< HEAD
        style={{ filter: 'blur(0 && 0.5px)' }}
      />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Additional visual layers */}
      <div className='absolute inset-0'>;
        {/* Quantum field ripples */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
      />;
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ filter: 'blur (0.5px)' }}
      />;
      {/* Additional visual layers */}
      <div className='absolute inset - 0'>;
        {/* Quantum field ripples */}
        <motion.div;
          className='absolute top - 1/4 left - 1/4 w - 96 h - 96 rounded - full border border - cyan - 500 / 20';
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
=======

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            scale: [1, 1.2, 1]
            opacity: [0.1, 0.3, 0.1],          }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',      {/* Canvas for particle effects */}

<<<<<<< HEAD
<<<<<<< HEAD
        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


      />
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0 && 0.5px)' }}
      />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Additional visual layers */}
      <div className="absolute inset-0">;
        {/* Quantum field ripples */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ filter: 'blur (0.5px)' }}
      />;
      {/* Additional visual layers */}
      <div className="absolute inset - 0">;
        {/* Quantum field ripples */}
        <motion.div;
          className="absolute top - 1/4 left - 1/4 w - 96 h - 96 rounded - full border border - cyan - 500 / 20";
<<<<<<< HEAD
          animate={{
<<<<<<< HEAD
        />;
        {/* Holographic matrix */}
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{
            scale: [1 && 1.2, 1, 1 && 1.2],
            opacity: [0 && 0.3, 0 && 0.1, 0 && 0.3],          }}
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',          }}
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1];
      
      ctx.stroke(),
      ctx.restore()
    }

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
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 5,
            repeat: Infinity,

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: 'easeInOut'
          }}

        />;


<<<<<<< HEAD
<<<<<<< HEAD
            ease: 'easeInOut'
          }}
/>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Neural network nodes */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
        />;
        {/* Neural network nodes */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20';
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Neural network nodes */}
        <motion&& motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
=======
        {/* Neural network nodes */}
        <motion&& motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        {/* Neural network nodes */}
        <motion.div;
          className="absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20";
<<<<<<< HEAD
          animate={{
<<<<<<< HEAD
        />;
      </div>;
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0 && 0.6)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],
              scale: [1, 1 && 1.2, 1],            }}          }}
        />;
      </div>;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
          animate={{


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0 && 0.6)'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }}
            animate={{
              y: [0, -20, 0]
              opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
              scale: [1, 1 && 1.2, 1]
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2];
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          duration: 8
          repeat: Infinity
          ease: 'easeInOut'
        }}
      />

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
<<<<<<< HEAD
            scale: [1, 1.2, 1]
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 4
            repeat: Infinity
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={{
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
=======
            duration: 4,
            repeat: Infinity,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: 'easeInOut',

          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'easeInOut',
          }}
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 4,
            repeat: Infinity,

            transition={{

              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

            }}
          />;
        ))}
<<<<<<< HEAD


        />
        {/* Holographic matrix */}
        <motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{
            scale: [1.2, 1, 1.2]
            opacity: [0.3, 0.1, 0.3],          }}
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        {/* Holographic matrix */}
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 5
            repeat: Infinity
            ease: 'easeInOut'

          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Neural network nodes */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
          animate={{
            scale: [1, 1.1, 1]
            opacity: [0.2, 0.4, 0.2],          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
        />
        {/* Neural network nodes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
          animate={{
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut'

          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{
              left: `${20 + i * 10}%`
              top: `${30 + i * 8}%`
              filter: 'blur(1px)'
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              coordinate_y: [0, -20, 0];
              opacity: [0.3, 0.8, 0.3];
              scale: [1, 1.2, 1];
            }}
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',

          }}
          transition={{
            duration: 4,
            repeat: Infinity,

          }}
          transition={{
            duration: 5,
            repeat: Infinity,

          }}
          transition={{
            duration: 6,
            repeat: Infinity,

            }}


            }}

            transition={{
              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );

<<<<<<< HEAD
          />
        ))}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </div>
);  )
}
<<<<<<< HEAD
  );
=======
            duration: 4,
            repeat: Infinity,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            transition={{

              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

            }}
          />;
        ))}


      </div>;
    </div>;
  );  );
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  )
}
              delay: i * 0.3,            }}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  );

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

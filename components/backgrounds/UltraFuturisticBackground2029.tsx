<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';'
import { motion } from 'framer-motion';'

import { motion } from 'framer-motion';
}
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
import React, { useEffect, useRef } from 'react';

interface Particle {
  }
  "x": number;

  "y": number;
  "vx": number;
  "vy": number;
  "size": number;
  "opacity": number;
  "color": string;
  "type": 'quantum' | 'holographic' | 'neural' | 'cyberpunk';'

=======
>>>>>>> origin/resolved-merge-conflicts
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk'
=======
<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
=======

<<<<<<< HEAD
resizeCanvas ();
window.addEventListener ('resize', resizeCanvas);
// Initialize particles
}particlesRef.current = particles
}

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

initParticles ();
// Animation loop // Update and draw particles particlesRef && particlesRef.current.forEach ( (particle, index) => {;
  // Update position particle && particle.x += particle && particle.vx;
particle && particle.y += particle && particle.vy;
// Wrap around edges if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Draw particle ctx && ctx.save ();
ctx && ctx.globalAlpha = particle && particle.opacity;
// Different effects for different particle types switch (particle && particle.type) {;
  case 'quantum': // Quantum particles with glow effect import React, { useEffect, useRef } from 'react';'

<<<<<<< HEAD
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
<<<<<<< HEAD
import { motion } from framer-motion;
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
<<<<<<< HEAD
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';
=======
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk';}
>>>>>>> origin/chore/fix-lint-and-merge
}
<<<<<<< HEAD
}

export default function UltraFuturisticBackground2029() {const canvasRef = null;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

export default function UltraFuturisticBackground2029() {const canvasRef = null;
<<<<<<< HEAD
              }
              "delay": i * 0.3;
resizeCanvas ()window.addEventListener ('resize', resizeCanvas)// Initialize particles;'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
              delay: i * 0.3;
resizeCanvas ()window.addEventListener (resize, resizeCanvas)// Initialize particles;
=======
              delay: i * 0.3;}
resizeCanvas ()window.addEventListener ('resize', resizeCanvas)// Initialize particles;}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}particlesRef.current = particles;
}
initParticles ()// Animation loop // Update and draw particles particlesRef.current.forEach ( (particle, index) => {// Update position particle.x += particle.vx;
particle.y += particle.vy;
// Wrap around edges if (particle.x < 0) particle.x = canvas.width;
if (particle.x > canvas.width) particle.x = 0;
if (particle.y < 0) particle.y = canvas.height;
if (particle.y > canvas.height) particle.y = 0;
// Draw particle ctx.save ()ctx.globalAlpha = particle.opacity;
// Different effects for different particle types switch (particle.type) {case 'quantum': // Quantum particles with glow effect;

export default function UltraFuturisticBackground2029() {const canvasRef = useRef<HTMLCanvasElement    />(null)const particlesRef = useRef<Particle[]    />([])const animationRef =;
  useRef<number | undefined    />(undefined;
  useEffect(() => ;
  const canvas = canvasRef.current;
    if (!canvas) return;
<<<<<<< HEAD
    const ctx = canvas.getContext('2d')if (!ctx) return;
    const resizeCanvas = () => {canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export default function UltraFuturisticBackground2029() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
const ctx = canvas.getContext('2d')if (!ctx);'
  return;

const resizeCanvas = () => {canvas.width = window.innerWidth;
=======
>>>>>>> origin/resolved-merge-conflicts
const ctx = canvas.getContext('2d')if (!ctx);
  return;

const resizeCanvas = (canvas.width = window.innerWidth;
canvas.height = window.innerHeight) => {
  return $3;}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
};


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    resizeCanvas();
<<<<<<< HEAD
=======
<<<<<<< HEAD
    window.addEventListener('resize', resizeCanvas);'
    // Initialize particles,
const initParticles = () => {
     ;
  }
  const "particles": Particle[] = [];

const particleCount = Math.floor((canvas.width * canvas.height) / 20000);


for (let i = 0; i < particleCount; i++) {
}
const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;'
          Math.floor(Math.random() * 4)
        ] as Particle['type'];'

const colors = {
          }
          "quantum": ['#00ffff', '#0080ff', '#0040ff'],'
          "holographic": ['#8b5cf6', '#a855f7', '#c084fc'],'
          "neural": ['#10b981', '#059669', '#047857'],'
          "cyberpunk": ['#ec4899', '#f97316', '#f59e0b'],'
        };
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
interface Particle {
  x: number,
  y: number,
  vx: number,
  vy: number,
  size: number,
  opacity: number,
  color: string,
  type: 'quantum' | 'holographic' | 'neural' | 'cyberpunk'
}

export default function UltraFuturisticBackground2029() {
  const canvasRef = $2;
  const particlesRef = $2;
  const animationRef = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,

    const ctx = canvas.getContext($2);
    if (!ctx) return,

    const resizeCanvas = $2;
      canvas.height = $2;
    resizeCanvas($2);
    window.addEventListener($2);
    // Initialize particles
    const initParticles = $2;
      const particleCount = $2;
      for (let i = 0, i < particleCount, i++) {
        const type = $2;
        const colors = $2;
          holographic: ['#8b5cf6#a855f7#c084fc'],
          neural: ['#10b981#059669#047857'],
          cyberpunk: ['#ec4899#f97316#f59e0b']
        },

        particles.push({
          }
          "x": Math.random() * canvas.width,
          "y": Math.random() * canvas.height,
          "vx": (Math.random() - 0.5) * 0.5,
          "vy": (Math.random() - 0.5) * 0.5,
          "size": Math.random() * 3 + 1,
          "opacity": Math.random() * 0.8 + 0.2,
          "color": colors[type][Math.floor(Math.random() * colors[type].length)],
type
        });
      }

      particlesRef.current = particles;
};

    initParticles();
    // Animation loop,
const animate = () => {
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background,
const gradient = ctx.createRadialGradient(;

canvas.width / 2,
=======
>>>>>>> origin/resolved-merge-conflicts
    window.addEventListener('resize', resizeCanvas);
<<<<<<< HEAD
    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
<<<<<<< HEAD
=======
    // Initialize particles;
const initParticles = (
     ;
  const particles: Particle[] = [];
=======
<<<<<<< HEAD
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const particleCount = Math.floor((canvas.width * canvas.height) / 20000);

>>>>>>> origin/chore/fix-lint-and-merge

for (let i = 0; i < particleCount; i++) {
        const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][
          Math.floor(Math.random() * 4)
        ] as Particle['type'];

const colors = {
          quantum: ['#00ffff', '#0080ff', '#0040ff'],
          holographic: ['#8b5cf6', '#a855f7', '#c084fc'],
          neural: ['#10b981', '#059669', '#047857'],
          cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],) => {
  return $3;}
>>>>>>> merged-prs-20250907-203621
}
        };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
<<<<<<< HEAD
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type
        })
      }

      particlesRef.current = $2;
    initParticles($2);
    // Animation loop
    const animate = () => {
      ctx.clearRect($2);
      // Create gradient background
      const gradient = $2;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
      ),
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)'),
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)'),
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)'),
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)'),
      
      ctx.fillStyle = $2;
      ctx.fillRect($2);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx,
        particle.y += particle.vy,
=======
<<<<<<< HEAD
          color: colors[type][Math.floor(Math.random() * colors[type].length)],
          type
<<<<<<< HEAD
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        })
      }

      particlesRef.current = $2;
    initParticles($2);
    // Animation loop
    const animate = () => {
      ctx.clearRect($2);
      // Create gradient background
      const gradient = $2;
=======
          color: colors[type][Math.floor(Math.random() * colors[type].length)]}
type}
        });
      }

      particlesRef.current = particles;
};


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    initParticles();
<<<<<<< HEAD
=======
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Animation loop;
const animate = (
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create gradient background;
const gradient = ctx.createRadialGradient(

canvas.width / 2,
>>>>>>> origin/chore/fix-lint-and-merge
        canvas.height / 2,
        0,
        canvas.width / 2,
<<<<<<< HEAD
        canvas.height / 2,
<<<<<<< HEAD
        Math.max(canvas.width, canvas.height) / 2
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    const resizeCanvas = () => {;
      canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight
};      canvas && canvas.height = window && window.innerHeight
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
canvas.height / 2,        Math.max (canvas.width, canvas.height) / 2        canvas.width / 2;
=======
        canvas.height / 2,        Math.max (canvas.width, canvas.height) / 2        canvas.width / 2;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
      particlesRef && particlesRef.current = particles;    };          type;
        });
      }
      particlesRef && particlesRef.current = particles;
    initParticles();
    // Animation loop;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
    }resizeCanvas()window.addEventListener('resize', resizeCanvas)// Initialize particles;
    const initParticles = () => {const particles: Particle[] = [];
      const particleCount  = Math.floor((canvas.width * canvas.height) / 20000)for (let i = 0; i < particleCount; i++) {const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;
          Math.floor(Math.random() * 4)] as Particle['type'];
        const colors = {quantum: ['#00ffff', '#0080ff', '#0040ff'],holographic: ['#8b5cf6', '#a855f7', '#c084fc'],neural: ['#10b981', '#059669', '#047857'],cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],}particles.push({x: Math.random() * canvas.width,y: Math.random() * canvas.height,vx: (Math.random() - 0.5) * 0.5,vy: (Math.random() - 0.5) * 0.5,size: Math.random() * 3 + 1,opacity: Math.random() * 0.8 + 0.2,color: colors[type][Math.floor(Math.random() * colors[type].length)],type,})}particlesRef.current = particles;
    }initParticles()// Animation loop;
    const animate = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)// Create gradient background;
      const gradient = ctx.createRadialGradient(const resizeCanvas = () => {canvas && canvas.width = window && window.innerWidth;
      canvas && canvas.height = window && window.innerHeight;
}canvas && canvas.height = window && window.innerHeight;
}// Initialize particles;
    const initParticles = () => {const particles: Particle[] = [];
      const particleCount = Math && Math.floor((canvas && canvas.width * canvas && canvas.height) / 20000)for (let i = 0; i < particleCount; i++) {const type = ['quantum', 'holographic', 'neural', 'cyberpunk'][;
          Math && Math.floor(Math && Math.random() * 4)] as Particle['type'];
        const colors = {quantum: ['#00ffff', '#0080ff', '#0040ff'],holographic: ['#8b5cf6', '#a855f7', '#c084fc'],neural: ['#10b981', '#059669', '#047857'],cyberpunk: ['#ec4899', '#f97316', '#f59e0b'],        }quantum: ['#00ffff#0080ff#0040ff'],holographic: ['#8b5cf6#a855f7#c084fc'],neural: ['#10b981#059669#047857'],cyberpunk: ['#ec4899#f97316#f59e0b'];
        particles && particles.push({x: Math && Math.random() * canvas && canvas.width,y: Math && Math.random() * canvas && canvas.height,vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,size: Math && Math.random() * 3 + 1,opacity: Math && Math.random() * 0 && 0.8 + 0 && 0.2,color: colors[type][Math && Math.floor(Math && Math.random() * colors[type].length)],type,})}
      // Create gradient background;
      const gradient = ctx && ctx.createRadialGradient(canvas && canvas.width / 2,canvas && canvas.height / 2,0,canvas && canvas.width / 2,canvas && canvas.height / 2,        Math && Math.max(canvas && canvas.width, canvas && canvas.height) / 2        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        0;
        canvas && canvas.width / 2;
        canvas && canvas.height / 2;
        canvas.width / 2;
        canvas.height / 2;
        0;
        canvas.width / 2;canvas.width / 2,canvas.height / 2,0,canvas.width / 2,canvas.height / 2,Math.max(canvas.width, canvas.height) / 2;
      )gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)')gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)')gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)')gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)')ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height)// Update and draw particles;
      particlesRef.current.forEach((particle, index) => {// Update position;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
                if (distance < 100) {
=======
>>>>>>> origin/resolved-merge-conflicts
        particle.x += particle.vx;
=======
        Math.max(canvas.width, canvas.height) / 2;
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
      gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.1)');
      gradient.addColorStop(0.6, 'rgba(139, 92, 246, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles;
particlesRef.current.forEach((particle, index) => {
        // Update position;
particle.x += particle.vx;
>>>>>>> origin/chore/fix-lint-and-merge
        particle.y += particle.vy;
        // Wrap around edges;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle;
<<<<<<< HEAD
        ctx.save();
        ctx.globalAlpha = particle.opacity;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
        

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
=======
        ctx.save()ctx.globalAlpha = particle.opacity;// Different effects for different particle types;
        switch (particle.type) {case 'quantum':;
>>>>>>> origin/chore/fix-lint-and-merge
            // Quantum particles with glow effect;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 20;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Quantum entanglement lines,
if (index % 10 = == 0) {
             ;
}
const partner =;
                particlesRef.current[
                  (index + 50) % particlesRef.current.length
                ];
              if (partner && partner.type = == 'quantum') {'
               ;
}
const distance = Math.sqrt(;
=======
>>>>>>> origin/resolved-merge-conflicts
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            
            // Quantum entanglement lines
            if (index % 10 === 0) {
            // Quantum entanglement lines
            if (index % 10 === 0) {
              const partner =
                particlesRef.current[
                  (index + 50) % particlesRef.current.length
                ];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  Math.pow(particle.x - partner.x, 2) +
                    Math.pow(particle.y - partner.y, 2)                );            // Quantum entanglement lines
            if (index % 10 === 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                );
                if (distance < 100) {
                if (distance < 100) {) => {
  return $3;}
}
                if (distance < 100) {
=======

>>>>>>> origin/chore/fix-lint-and-merge
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

<<<<<<< HEAD
=======
// Quantum entanglement lines;
if (index % 10 = == 0) {
             ;
  const partner =
                particlesRef.current[
                  (index + 50) % particlesRef.current.length;
                ];
              if (partner && partner.type = == 'quantum') {
               ;
  const distance = Math.sqrt(
>>>>>>> origin/chore/fix-lint-and-merge
                  Math.pow(particle.x - partner.x, 2) +
                    Math.pow(particle.y - partner.y, 2)
                );
<<<<<<< HEAD
                if (distance < 100) {}`
=======
                if (distance < 100) {) => {
  return $3;}
}
>>>>>>> origin/chore/fix-lint-and-merge
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
<<<<<<< HEAD
=======
<<<<<<< HEAD
ctx.stroke();
origin/cursor/automate-test-improve-and-merge-code-2533
                }
=======
>>>>>>> origin/resolved-merge-conflicts

<<<<<<< HEAD
ctx.stroke();
                }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = particle.color;
            ctx.fill()];
              if (partner && partner.type === 'quantum') {const distance = Math && Math.sqrt(Math && Math.pow(particle && particle.x - partner && partner.x, 2) +;
                    Math && Math.pow(particle && particle.y - partner && partner.y, 2)                )// Quantum entanglement lines;
            if (index % 10 === 0) {const partner = particlesRef && particlesRef.current[(index + 50) % particlesRef && particlesRef.current.length];
              if (partner && partner.type === 'quantum') {const distance = Math && Math.sqrt(Math && Math.pow(particle && particle.x - partner && partner.x, 2) + Math && Math.pow(particle && particle.y - partner && partner.y, 2))if (distance < 100) {ctx && ctx.strokeStyle = `rgba(0, 255, 255, ${0 && 0.3 * (1 - distance / 100)})`;
                  ctx && ctx.lineWidth = 1;
                  ctx && ctx.beginPath()ctx && ctx.moveTo(particle && particle.x, particle && particle.y)ctx && ctx.lineTo(partner && partner.x, partner && partner.y)ctx && ctx.stroke()}                  ctx && ctx.stroke()const partner = particlesRef.current[(index + 50) % particlesRef.current.length];
              if (partner && partner.type === 'quantum') {const distance = Math.sqrt(Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)// Quantum entanglement lines;
            if (index % 10 === 0) {const partner =;
                particlesRef.current[;
                  (index + 50) % particlesRef.current.length;
                ];
              if (partner && partner.type === 'quantum') {const distance = Math.sqrt(Math.pow(particle.x - partner.x, 2) +;
                    Math.pow(particle.y - partner.y, 2))if (distance < 100) {ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath()ctx.moveTo(particle.x, particle.y)ctx.lineTo(partner.x, partner.y)ctx.stroke()}
<<<<<<< HEAD
=======
<<<<<<< HEAD
              }
            break;

const hue = (time * 50 + index * 10) % 360;
            ctx && ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;`            ctx && ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;`            ctx && ctx.shadowBlur = 15;

        // Wrap around edges
        if (particle.x < 0) particle.x = $2;
        if (particle.x > canvas.width) particle.x = $2;
        if (particle.y < 0) particle.y = $2;
        if (particle.y > canvas.height) particle.y = $2;
        // Draw particle
        ctx.save($2);
        ctx.globalAlpha = $2;
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
            ctx.shadowColor = $2;
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fillStyle = $2;
            ctx.fill($2);
            // Quantum entanglement lines
            if (index % 10 = $2;
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                ),
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`,
                  ctx.lineWidth = $2;
                  ctx.beginPath($2);
                  ctx.moveTo($2);
                  ctx.lineTo($2);
                  ctx.stroke()
                }
=======
>>>>>>> origin/resolved-merge-conflicts
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
                }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              }
            }
            break;
<<<<<<< HEAD
=======

<<<<<<< HEAD
const hue = (time * 50 + index * 10) % 360;
<<<<<<< HEAD
            ctx && ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;`            ctx && ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;`            ctx && ctx.shadowBlur = 15;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621

        // Wrap around edges
        if (particle.x < 0) particle.x = $2;
        if (particle.x > canvas.width) particle.x = $2;
        if (particle.y < 0) particle.y = $2;
        if (particle.y > canvas.height) particle.y = $2;
        // Draw particle
        ctx.save($2);
        ctx.globalAlpha = $2;
        // Different effects for different particle types
        switch (particle.type) {
          case 'quantum':
            // Quantum particles with glow effect
            ctx.shadowColor = $2;
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fillStyle = $2;
            ctx.fill($2);
            // Quantum entanglement lines
            if (index % 10 = $2;
              if (partner && partner.type === 'quantum') {
                const distance = Math.sqrt(
                  Math.pow(particle.x - partner.x, 2) + Math.pow(particle.y - partner.y, 2)
                );
                if (distance < 100) {) => {
  return $3;}
}
                if (distance < 100) {
                  ctx.strokeStyle = `rgba(0, 255, 255, ${0.3 * (1 - distance / 100)})`;
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(particle.x, particle.y);
                  ctx.lineTo(partner.x, partner.y);
                  ctx.stroke();                }                  ctx.stroke()
                }
              }
            }
            break,

          case 'holographic':
            // Holographic particles with rainbow effect
<<<<<<< HEAD
            const time = $2;
            const hue = $2;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fill($2);
            break,

          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = $2;
            ctx.shadowColor = $2;
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fill($2);
            // Neural network connections
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p => 
                p.type === 'neural' && 
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              ),
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
<<<<<<< HEAD
                ),
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`,
                ctx.lineWidth = $2;
                ctx.beginPath($2);
                ctx.moveTo($2);
                ctx.lineTo($2);
=======
            ctx && ctx.beginPath()ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2)ctx && ctx.fill()break;if (index % 15 === 0) {const connections = particlesRef.current.filter(p =>;
                p.type === 'neural' &&;
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80;
              )connections.forEach(connection => {const distance = Math.sqrt(Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)case 'neural':;
            // Neural particles with network connections;
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()// Neural network connections;
            if (index % 15 === 0) {const connections = particlesRef.current.filter(p =>;
                  p.type === 'neural' &&;
                  Math.sqrt(Math.pow(particle.x - p.x, 2) +;
                      Math.pow(particle.y - p.y, 2)) < 80;
              )connections.forEach(connection => {const distance = Math.sqrt(Math.pow(particle.x - connection.x, 2) +;
                    Math.pow(particle.y - connection.y, 2))ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath()ctx.moveTo(particle.x, particle.y)ctx.lineTo(connection.x, connection.y)return (<div className='fixed inset-0 -z-10 overflow-hidden'>;ctx.stroke()})}
          case 'neural':
            // Neural particles with network connections
            ctx.fillStyle = particle.color;
=======
=======
            const time = Date.now() * 0.001;

          case 'holographic':;
            // Holographic particles with rainbow effect;
            const time = Date && Date.now() * 0 && 0.001;
            const hue = (time * 50 + index * 10) % 360;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ctx && ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowColor = `hsl(${hue}, 70%, 60%)`;
            ctx && ctx.shadowBlur = 15;

            ctx && ctx.beginPath();
            ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            break;
<<<<<<< HEAD
            // Neural network connections
=======

<<<<<<< HEAD
          case 'neural':
            // Neural particles with network connections;
ctx.fillStyle = particle.color;
>>>>>>> origin/chore/fix-lint-and-merge
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
// Neural network connections;
if (index % 15 = == 0) {
             ;
  const connections = particlesRef.current.filter(
                p =>
                  p.type === 'neural' &&
                  Math.sqrt(
                    Math.pow(particle.x - p.x, 2) +
                      Math.pow(particle.y - p.y, 2)
                  ) < 80;
              );
              connections.forEach(connection = > {
               ;
  const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) +
<<<<<<< HEAD
                    Math.pow(particle.y - connection.y, 2)
origin/cursor/automate-test-improve-and-merge-code-2533
                );
=======
                    Math.pow(particle.y - connection.y, 2)}
                );}
>>>>>>> origin/chore/fix-lint-and-merge
=======
            
            // Neural network connections

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p =>
                p.type === 'neural' &&
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(connection.x, connection.y);
<<<<<<< HEAD
<<<<<<< HEAD
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
ctx.stroke();
=======
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            break,

          case 'holographic':
            // Holographic particles with rainbow effect
<<<<<<< HEAD
=======
<<<<<<< HEAD
            const time = $2;
            const hue = $2;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fill($2);
=======
>>>>>>> origin/resolved-merge-conflicts
            const time = Date.now() * 0.001
            const hue = (time * 50 + index * 10) % 360
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowColor = `hsl(${hue}, 70%, 60%)`,
            ctx.shadowBlur = 15,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            break,

          case 'neural':
            // Neural particles with network connections
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ctx.fillStyle = $2;
            ctx.shadowColor = $2;
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.arc($2);
            ctx.fill($2);
            // Neural network connections
            if (index % 15 === 0) {

            if (index % 15 === 0) {
              const connections = particlesRef.current.filter(p =>
                p.type === 'neural' &&
              const connections = particlesRef.current.filter(p => 
=======
>>>>>>> origin/resolved-merge-conflicts
            ctx.fillStyle = particle.color,
            ctx.shadowColor = particle.color,
            ctx.shadowBlur = 10,
            ctx.beginPath(),
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
            ctx.fill(),
            
            // Neural network connections
            if (index % 15 === 0) {_const _connections = particlesRef.current.filter(p => 
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                p.type === 'neural' && 
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80
              ),
              connections.forEach(connection => {
                const distance = Math.sqrt(
                  Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ctx && ctx.beginPath()ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2)ctx && ctx.fill()break;if (index % 15 === 0) {const connections = particlesRef.current.filter(p =>;
                p.type === 'neural' &&;
                Math.sqrt(Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)) < 80;
              )connections.forEach(connection => {const distance = Math.sqrt(Math.pow(particle.x - connection.x, 2) + Math.pow(particle.y - connection.y, 2)case 'neural':;
            // Neural particles with network connections;
            ctx.fillStyle = particle.color;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 10;
            ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fill()// Neural network connections;
            if (index % 15 === 0) {const connections = particlesRef.current.filter(p =>;
                  p.type === 'neural' &&;
                  Math.sqrt(Math.pow(particle.x - p.x, 2) +;
                      Math.pow(particle.y - p.y, 2)) < 80;
              )connections.forEach(connection => {const distance = Math.sqrt(Math.pow(particle.x - connection.x, 2) +;
                    Math.pow(particle.y - connection.y, 2))ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath()ctx.moveTo(particle.x, particle.y)ctx.lineTo(connection.x, connection.y)return (<div className='fixed inset-0 -z-10 overflow-hidden'>;ctx.stroke()})}
            break;
          case 'cyberpunk':;'
            // Cyberpunk particles with electric effect;
=======
>>>>>>> origin/resolved-merge-conflicts
                ),
                ctx.strokeStyle = `rgba(16, 185, 129, ${0.4 * (1 - distance / 80)})`,
                ctx.lineWidth = 0.5,
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(connection.x, connection.y),
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
<<<<<<< HEAD
=======
<<<<<<< HEAD
            ctx.beginPath()ctx.moveTo(particle.x - particle.size, particle.y - particle.size)ctx.lineTo(particle.x + particle.size, particle.y + particle.size)ctx.moveTo(particle.x + particle.size, particle.y - particle.size)ctx.lineTo(particle.x - particle.size, particle.y + particle.size)ctx.stroke()break;
        }ctx.restore()})// Draw floating geometric shapes;
      drawGeometricShapes(ctx, canvas.width, canvas.height)// Draw energy waves;
      drawEnergyWaves(ctx, canvas.width, canvas.height)animationRef.current = requestAnimationFrame(animate)}animate(;
  return () => {window.removeEventListener('resize', resizeCanvas)if (animationRef.current) {cancelAnimationFrame(animationRef.current)}'
    }
  }, [];
  const drawGeometricShapes = ("ctx": CanvasRenderingContext2D;
    "width": number;
    "height": number;
  ) => {const time = Date.now() * 0.0005;
    // Floating hexagons;
    }
    for (let i = 0; i < 5; i++) {const x = width * 0.2 + Math.sin(time + i) * 100;
=======
>>>>>>> origin/resolved-merge-conflicts
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              });
            }
            break;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
ctx.stroke();
              });
            }

            break;
          case 'cyberpunk':;
            // Cyberpunk particles with electric effect;
>>>>>>> origin/chore/fix-lint-and-merge
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 2;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 25;
            ctx.beginPath()ctx.moveTo(particle.x - particle.size, particle.y - particle.size)ctx.lineTo(particle.x + particle.size, particle.y + particle.size)ctx.moveTo(particle.x + particle.size, particle.y - particle.size)ctx.lineTo(particle.x - particle.size, particle.y + particle.size)ctx.stroke()break;
        }ctx.restore()})// Draw floating geometric shapes;
      drawGeometricShapes(ctx, canvas.width, canvas.height)// Draw energy waves;
      drawEnergyWaves(ctx, canvas.width, canvas.height)animationRef.current = requestAnimationFrame(animate)}animate(;
  return () => {window.removeEventListener('resize', resizeCanvas)if (animationRef.current) {cancelAnimationFrame(animationRef.current)}
    }
  }, [];
  const drawGeometricShapes = (time = Date.now() * 0.0005;
    // Floating hexagons;
    for (let i = 0; i < 5; i++) {const x = width * 0.2 + Math.sin(time + i) * 100;

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
const y = height * 0.3 + Math.cos(time + i * 0.7) * 80;

const size = 20 + Math.sin(time * 2 + i) * 10;
      ctx.save()ctx.globalAlpha = 0.1;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      ctx.strokeStyle = '#00ffff';'
      ctx.lineWidth = 1;
      ctx.beginPath()for (let j = 0; j < 6; j++) {const angle = (j * Math.PI) / 3 + time;

}

const py = y + size * Math.sin(angle)if (j === 0) ctx.moveTo(px, py)else ctx.lineTo(px, py)}
=======
>>>>>>> origin/resolved-merge-conflicts
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      ctx.beginPath()for (let j = 0; j < 6; j++) {const angle = (j * Math.PI) / 3 + time;

const px = x + size * Math.cos(angle;) => {
  return $3;}
}
  const py = y + size * Math.sin(angle)if (j === 0) ctx.moveTo(px, py)else ctx.lineTo(px, py)}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      ctx.closePath()ctx.stroke()ctx.restore()}
    // Floating triangles;
    for (let i = 0; i < 3; i++) {const x = width * 0.8 + Math.sin(time * 0.8 + i) * 120;

<<<<<<< HEAD
=======
<<<<<<< HEAD
}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
const y = height * 0.7 + Math.cos(time * 1.2 + i) * 100;

const size = 15 + Math.sin(time * 1.5 + i) * 8;
      ctx.save()ctx.globalAlpha = 0.08;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      ctx.strokeStyle = '#8b5cf6';'
      ctx.lineWidth = 1;
      ctx.beginPath()for (let j = 0; j < 3; j++) {const angle = (j * Math.PI * 2) / 3 + time;

}

=======
>>>>>>> origin/resolved-merge-conflicts
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 1;
      ctx.beginPath()for (let j = 0; j < 3; j++) {const angle = (j * Math.PI * 2) / 3 + time;}
}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
const px = x + size * Math.cos(angle)const py = y + size * Math.sin(angle)if (j === 0) ctx.moveTo(px, py)else ctx.lineTo(px, py)}
      ctx.closePath()ctx.stroke()ctx.restore()}
  }
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const drawEnergyWaves = ("ctx": CanvasRenderingContext2D;
    "width": number;
    "height": number;
  ) => {const time = Date.now() * 0.001;
    // Horizontal energy waves;
    }
    for (let i = 0; i < 3; i++) {ctx.save()ctx.globalAlpha = 0.05;
      }
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;`      ctx.lineWidth = 2;
      ctx.beginPath()for (let x = 0; x < width; x += 5) {const y =;
          }
          height * 0.5 +;
          Math.sin(x * 0.01 + time + i) * 50 +;
          Math.sin(x * 0.02 + time * 2 + i) * 25;
        if (x === 0) ctx.moveTo(x, y)else ctx.lineTo(x, y)}
      ctx.stroke()ctx.restore()}
    // Vertical energy waves;
    for (let i = 0; i < 2; i++) {ctx.save()ctx.globalAlpha = 0.04;
      }
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;`      ctx.lineWidth = 2;
      ctx.beginPath()for (let y = 0; y < height; y += 5) {const x =;
          }
          width * 0.5 +;
          Math.sin(y * 0.01 + time + i) * 60 +;
          Math.sin(y * 0.015 + time * 1.5 + i) * 30;
        if (y === 0) ctx.moveTo(x, y)else ctx.lineTo(x, y)}
=======
>>>>>>> origin/resolved-merge-conflicts
  const drawEnergyWaves = (time = Date.now() * 0.001;
    // Horizontal energy waves;
    for (let i = 0; i < 3; i++) {ctx.save()ctx.globalAlpha = 0.05;) => {
  return $3;}
}
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath()for (let x = 0; x < width; x += 5) {const y =;
          height * 0.5 +;
<<<<<<< HEAD
          Math.sin(x * 0.01 + time + i) * 50 +;}
          Math.sin(x * 0.02 + time * 2 + i) * 25;}
        if (x === 0) ctx.moveTo(x, y)else ctx.lineTo(x, y)}
      ctx.stroke()ctx.restore()}
=======
          Math.sin (x * 0.01 + time + i) * 50 +;
          Math.sin (x * 0.02 + time * 2 + i) * 25;
        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      ctx.stroke ();
      ctx.restore ();
    }
<<<<<<< HEAD
      ctx && ctx.stroke();
      ctx && ctx.restore();
    }
  }
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Vertical energy waves;
    for (let i = 0; i < 2; i++) {ctx.save()ctx.globalAlpha = 0.04;}
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`;
      ctx.lineWidth = 2;
      ctx.beginPath()for (let y = 0; y < height; y += 5) {const x =;
          width * 0.5 +;
          Math.sin(y * 0.01 + time + i) * 60 +;}
          Math.sin(y * 0.015 + time * 1.5 + i) * 30;}
        if (y = == 0) ctx.moveTo(x, y)else ctx.lineTo(x, y)}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      ctx.stroke()ctx.restore()}
  }

 ;
<<<<<<< HEAD
=======
<<<<<<< HEAD
return (;
<div className='fixed inset-0 -z-10 overflow-hidden'>'
      {/* Animated gradient overlay */}
      <motion&& motion.div,
className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30''
        animate={{
          }
          "background": [

            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)','
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)','
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)','
          ]
        }}
        transition={{
          }
          "duration": 8,
"repeat": Infinity,
"ease": 'easeInOut''

          case 'cyberpunk':
            // Cyberpunk particles with electric effect
            ctx.strokeStyle = $2;
            ctx.lineWidth = $2;
            ctx.shadowColor = $2;
            ctx.shadowBlur = $2;
            ctx.beginPath($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.moveTo($2);
            ctx.lineTo($2);
            ctx.stroke($2);
            break
        }

        ctx.restore()
      }),

      // Draw floating geometric shapes
      drawGeometricShapes($2);
      // Draw energy waves
      drawEnergyWaves($2);
      animationRef.current = $2;
    animate($2);
    return () => {
      window.removeEventListener($2);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
  }, []),

  const drawGeometricShapes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = $2;
    // Floating hexagons
    for (let i = 0, i < 5, i++) {
      const x = $2;
      const y = $2;
      const size = $2;
      ctx.save($2);
      ctx.globalAlpha = $2;
      ctx.strokeStyle = $2;
      ctx.lineWidth = $2;
      ctx.beginPath($2);
      for (let j = 0, j < 6, j++) {
        const angle = $2;
        const px = x + size * Math.cos($2);
        const py = y + size * Math.sin($2);
        if (j === 0) ctx.moveTo($2);
        else ctx.lineTo(px, py)
      }
      ctx.closePath($2);
      ctx.stroke($2);
      ctx.restore()
    }

    // Floating triangles
    for (let i = 0, i < 3, i++) {
      const x = $2;
      const y = $2;
      const size = $2;
      ctx.save($2);
      ctx.globalAlpha = $2;
      ctx.strokeStyle = $2;
      ctx.lineWidth = $2;
      ctx.beginPath($2);
      for (let j = 0, j < 3, j++) {
        const angle = $2;
        const px = x + size * Math.cos($2);
        const py = y + size * Math.sin($2);
        if (j === 0) ctx.moveTo($2);
        else ctx.lineTo(px, py)
      }
      ctx.closePath($2);
      ctx.stroke($2);
      ctx.restore()
    }
  },

  const drawEnergyWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const time = $2;
    // Horizontal energy waves
    for (let i = 0, i < 3, i++) {
      ctx.save($2);
      ctx.globalAlpha = $2;
      ctx.strokeStyle = `hsl(${180 + i * 60}, 70%, 60%)`,
      ctx.lineWidth = $2;
      ctx.beginPath($2);
      for (let x = 0, x < width, x += 5) {
        const y = $2;
        if (x === 0) ctx.moveTo($2);
        else ctx.lineTo(x, y)
      }
      
      ctx.stroke($2);
      ctx.restore()
    }

    // Vertical energy waves
    for (let i = 0, i < 2, i++) {
      ctx.save($2);
      ctx.globalAlpha = $2;
      ctx.strokeStyle = `hsl(${240 + i * 60}, 70%, 60%)`,
      ctx.lineWidth = $2;
      ctx.beginPath($2);
      for (let y = 0, y < height, y += 5) {
        const x = $2;
        if (y === 0) ctx.moveTo($2);
        else ctx.lineTo(x, y)
      }
      
      ctx.stroke($2);
      ctx.restore()
    }
  },

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30"
        animate={{
          background: [
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'
          ]
        }}
      {/* Canvas for particle effects *
}
      <canvas;
        ref={canvasRef}
        className='absolute inset-0 w-full h-full';'
          transition={{"duration": 4;
            }
            "repeat": Infinity;
            "ease": 'easeInOut',      {/* Canvas for particle effects */}'
      <canvas;
        ref={canvasRef}
        className="absolute inset-0 w-full h-full";"
        style={{ "filter": 'blur(0.5px)' ,'
} />;
      {/* Additional visual layers */}
      <div className="absolute inset-0">;"
=======
>>>>>>> origin/resolved-merge-conflicts
  return (
<<<<<<< HEAD
<div className='fixed inset-0 -z-10 overflow-hidden'    />
=======
    <div className='fixed inset - 0 -z - 10 overflow - hidden'>        if (ctx.move_to (x, y)) {
  $2
}
        else ctx.line_to (x, y);

      }
      ctx.stroke ();
      ctx.restore ();
    }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return (


      ctx && ctx.stroke();
      ctx && ctx.restore();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Animated gradient overlay */}
      <motion&& motion.div;
className='absolute inset-0 bg-gradient-to-br from-black via-cyan-900/20 to-purple-900/30'
        animate={{
          background: [
<<<<<<< HEAD
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)'}
          ]}
        }}
<<<<<<< HEAD
        transition = $2;
          repeat: Infinity,
=======
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0 && 0.3) 50%, rgba(6,182,212,0 && 0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0 && 0.2) 50%, rgba(139,92,246,0 && 0.3) 100%)',
<<<<<<< HEAD
          ],        }}      {/* Animated gradient overlay */}
      <motion && motion.div
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
=======

          ],        }}      {/* Animated gradient overlay */}
      <motion && motion.div

=======
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <motion.div;
        className="absolute inset - 0 bg - gradient - to - br from - black via - cyan - 900 / 20 to-purple-900 / 30";
        animate={{
          background: [;
            'linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (139, 92, 246, 0.3) 50%, rgba (6, 182, 212, 0.2) 100%)linear - gradient (45deg, rgba (0, 0, 0, 1) 0%, rgba (6, 182, 212, 0.2) 50%, rgba (139, 92, 246, 0.3) 100%)';
          ];
<<<<<<< HEAD
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(139,92,246,0.3) 50%, rgba(6,182,212,0.2) 100%)',
            'linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(6,182,212,0.2) 50%, rgba(139,92,246,0.3) 100%)',
          ],
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }}
        transition={{}
          duration: 8;
          repeat: Infinity'
          ease: 'easeInOut'
        }}
<<<<<<< HEAD
      {/* Canvas for particle effects */}
      <canvas;
        ref={canvasRef}'
        className='absolute inset-0 w-full h-full'
          transition={{}
            duration: 4;
            repeat: Infinity'
=======
        transition={{
          duration: 8;
repeat: Infinity;
ease: 'easeInOut'}
}
        }}
      {/* Canvas for particle effects *}
}
      <canvas;
        ref={canvasRef}
        className='absolute inset-0 w-full h-full';
          transition={{duration: 4;}
            repeat: Infinity;}
>>>>>>> origin/chore/fix-lint-and-merge
=======


<<<<<<< HEAD



      />;
=======
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
<<<<<<< HEAD
        style={{ filter: 'blur(0 && 0.5px)' }}
      />;
=======

        style={{ filter: 'blur(0 && 0.5px)' }}
      />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}
=======

            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1],          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 4
            repeat: Infinity
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas;
        ref={canvasRef}"
        className="absolute inset-0 w-full h-full"'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}"
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
'
        style={{ filter: 'blur(0 && 0.5px)' }}
      />
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion&& motion.div"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
      <canvas
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
          }}
          transition={{}
          }}
        {/* Holographic matrix */}
        <motion&& motion.div'
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{}
          transition={{}
            duration: 5
            repeat: Infinity'
            ease: 'easeInOut',          }}
        />
        />
        {/* Holographic matrix */}
        <motion&& motion.div"
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
        />
        {/* Holographic matrix */}
        <motion.div;'
          className='absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20'
          animate={{}
          }}
          transition={{}
            duration: 5,
            repeat: Infinity,
          }}
        {/* Neural network nodes */}
        <motion&& motion.div'
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
        />
        {/* Neural network nodes */}
        <motion.div;'
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20'
          animate={{}
          transition={{}
            duration: 6
            repeat: Infinity'
            ease: 'easeInOut',          }}
        {/* Neural network nodes */}
        <motion&& motion.div"
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
        />
        {/* Neural network nodes */}

<<<<<<< HEAD
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]
          }}
          transition={{}
          }}
      {/* Floating orbs with glow effects */}'
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <motion&& motion.div
            key={i}'
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{}
      {/* Floating orbs with glow effects */}"
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion&& motion.div
            key={i}"
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
            style={{}
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{}
            duration: 4,
            repeat: Infinity,'
            ease: 'easeInOut',
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          }}
          transition={{}
            duration: 4,
            repeat: Infinity,

          }}
          transition={{}
          }}
          transition={{}
            duration: 6,
            repeat: Infinity,
          duration: 8
          repeat: Infinity'
          ease: 'easeInOut'
        }}
      />
      
      {/* Canvas for particle effects */}
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas
        <motion.div;
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20';
          animate={{ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas;
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(0.5px)' }}
      />
      
      {/* Additional visual layers */}
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition = $2;
            repeat: Infinity,
        <motion.div;
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20';
          animate={{ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas;
        ref={canvasRef}
        className="absolute inset-0 w-full h-full";
        style={{ filter: 'blur(0.5px)' }}
      />;

<<<<<<< HEAD
      {/* Additional visual layers */}
      <div className="absolute inset-0">;
=======
        className=\'absolute inset-0 w-full h-full\';
        style={{ filter: 'blur(0.5px)' }
}
         />;
      {/* Additional visual layers */}"
      <div className=\"absolute inset-0\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Quantum field ripples */}
        <motion.div;"
          className=\'absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20\';
        style={{ filter: 'blur(0 && 0.5px)' }
}
         />;{/* Additional visual layers */}"
      <div className=\"absolute inset-0\"    />;
        {/* Quantum field ripples */}
        <motion&& motion.div;"
          className=\'absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20\';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Additional visual layers */}
      <div className="absolute inset-0">;
        {/* Quantum field ripples */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <canvas;
<<<<<<< HEAD
        ref={canvas_ref}
        className="absolute inset - 0 w-full h-full";
        style={{ filter: 'blur (0.5px)' }}
      />;
      {/* Additional visual layers */}
      <div className="absolute inset-0">;"
        {/* Quantum field ripples */}
        <motion.div;
<<<<<<< HEAD
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20";
          animate={{scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1];
            ease: 'easeInOut';
            ease: 'easeInOut',}}
          transition={{duration: 4,repeat: Infinity,}}scale: [1, 1.2, 1],opacity: [0.1, 0.3, 0.1],}}
          transition={{duration: 4,repeat: Infinity,ease: 'easeInOut',}}
=======
          className="absolute top - 1/4 left - 1/4 w - 96 h - 96 rounded - full border border - cyan - 500 / 20";
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
<<<<<<< HEAD
        transition = $2;
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Canvas for particle effects */}
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
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition = $2;
            repeat: Infinity,
=======
        transition={{
          animate={{
            scale: [1.2, 1, 1.2];
            opacity: [0.3, 0.1, 0.3];
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
        {/* Holographic matrix */}
        <motion&& motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />;
=======
        ref={canvas_ref}"
        className=\'absolute inset - 0 w-full h-full\';
        style={{ filter: 'blur (0.5px)' }
}
         />;
      {/* Additional visual layers */}"
      <div className=\"absolute inset-0\"    />;
        {/* Quantum field ripples */}
        <motion.div;"
          className=\'absolute top - 1/4 left - 1/4 w - 96 h - 96 rounded - full border border-cyan-500 / 20\';
          animate={{scale: [1, 1 && 1.2, 1];}
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1];}
          }}
          transition={{}}
        {/* Holographic matrix */}
        <motion&& motion.div;
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20';
          animate={{transition={{duration: 5;}
            repeat: Infinity;}
            ease: 'easeInOut'          }}
           />;
        />;{/* Holographic matrix */}
        <motion&& motion.div;"
          className=\'absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20\';
           />;
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Holographic matrix */}
        <motion.div;
          className='absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20';
<<<<<<< HEAD
          animate={{}}
          transition={{duration: 5,repeat: Infinity}}
        {/* Neural network nodes */}
        <motion&& motion.div;
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20';
           />;
        {/* Neural network nodes */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20';
          animate={{transition={{duration: 6;}
            repeat: Infinity;}
            ease: 'easeInOut'          }}
        {/* Neural network nodes */}
        <motion&& motion.div;"
          className=\'absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20\';
           />;
        {/* Neural network nodes */}
        <motion.div;"
          className=\'absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border-green-500 / 20\';
          animate={{scale: [1, 1 && 1.1, 1];}
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2];}
          }}
          transition={{}}
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'    />;
        {[...Array(8)].map((_, i) => (<motion&& motion.div;}
            key={i}
            className='absolute w-2 h-2 rounded-full bg-cyan-400';
            style={{{/* Floating orbs with glow effects */}"
      <div className=\"absolute inset-0 pointer-events-none\"    />;
        {[...Array(8)].map((_, i) => (<motion&& motion.div;}
            key={i}"
            className=\'absolute w-2 h-2 rounded-full bg-cyan-400\';
            style={{scale: [1, 1.2, 1],opacity: [0.1, 0.3, 0.1]          }}
          transition={{duration: 4,repeat: Infinity,ease: 'easeInOut'}}
          transition={{duration: 4,repeat: Infinity}}
          transition={{}}
          transition={{duration: 6,repeat: Infinity,duration: 8;
          repeat: Infinity;}
          ease: 'easeInOut';}
        }}
         />;
{/* Canvas for particle effects */}
      <canvas;
        ref={canvasRef}
        className='absolute inset-0 w-full h-full';
        style={{ filter: 'blur(0.5px)' }
}
         />;
      {/* Additional visual layers */}
      <div className='absolute inset-0'    />;
        {/* Quantum field ripples */}

        <motion.div;
className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 5,
            repeat: Infinity,

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ease: 'easeInOut'
          }}

        />;


<<<<<<< HEAD
            ease: 'easeInOut'
          }}
/>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Neural network nodes */}
        <motion&& motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
        />;
        {/* Neural network nodes */}
        <motion.div;
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
<<<<<<< HEAD
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}
=======

<<<<<<< HEAD
            scale: [1, 1.2, 1]}
            opacity: [0.1, 0.3, 0.1]}
          }}
          transition={{
            duration: 4,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
=======
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 6
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
        />;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        {/* Holographic matrix */}
        <motion.div;
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20';
          animate={{scale: [1.2, 1, 1.2],opacity: [0.3, 0.1, 0.3]}}
          transition={{duration: 5,repeat: Infinity,ease: 'easeInOut'}}
           />;
        {/* Neural network nodes */}
        <motion.div;
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20';
          animate={{scale: [1, 1.1, 1],opacity: [0.2, 0.4, 0.2]}}
          transition={{duration: 6,repeat: Infinity,ease: 'easeInOut'}}
           />;
      </div>;
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'    />;
        {[...Array(8)].map((_, i) => (<motion.div;}
            key={i}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            ease: 'easeInOut'
          }
        />
        
        {/* Holographic matrix */}
        <motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }
          transition = $2;
            repeat: Infinity,
            ease: 'easeInOut'
          }
        />
        
        {/* Neural network nodes */}
        <motion.div
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
          animate={
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }
          transition = $2;
            repeat: Infinity,
            ease: 'easeInOut'
          }
        />
      </div>
      
      {/* Floating orbs with glow effects */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
<<<<<<< HEAD
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
=======
        ref={canvasRef}"
        className=absolute inset-0 w-full h-full'
        style={{ filter: blur(0.5px) }}
      />
      {/* Additional visual layers */}"
      <div className="absolute inset-0>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        {/* Quantum field ripples */}
        <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition = $2;
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Neural network nodes */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition = $2;
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
=======
>>>>>>> origin/resolved-merge-conflicts
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
'
        style={{ filter: 'blur(0 && 0.5px) }}

      <div className=absolute inset-0>;
        {/* Quantum field ripples */}
        <motion&& motion.div"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20
      <canvas;

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
            scale: [1, 1 && 1.2, 1]
            opacity: [0 && 0.1, 0 && 0.3, 0 && 0.1]
          }
          transition={}
          }
        {/* Holographic matrix */}

          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={}
          transition={}
            duration: 5;
            repeat: Infinity
            ease: easeInOut'}}
        />
        />;

<<<<<<< HEAD
=======
<<<<<<< HEAD
            className='absolute w-2 h-2 rounded-full bg-cyan-400''
            style={{
              }
              "left": `${20 + i * 10}%``              "top": `${30 + i * ,`}%``
              "filter": 'blur(1px)''
              "boxShadow": '0 0 20px rgba(0, 255, 255, 0.6)''
            }}
            animate={{
              }
              "y": [0, -20, 0],
              "opacity": [0.3, 0.8, 0.3],
              "scale": [1, 1.2, 1]
            }}

            "duration": 4,
            "repeat": Infinity,
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
        {/* Holographic matrix */}
        <motion&& motion.div"
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20"
        />;
        {/* Holographic matrix */}
        <motion.div;'
          className='absolute top - 3/4 right - 1/4 w - 80 h - 80 rounded - full border border - purple - 500 / 20';
          animate={{}
          }}
          transition={{}
            duration: 5,
            repeat: Infinity,
          }}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Neural network nodes */}
        <motion&& motion.div'
          className='absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20'
        />;
        {/* Neural network nodes */}
        <motion.div;'
          className='absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20';
          animate={{}
          transition={{}
            duration: 6;
            repeat: Infinity'
            ease: 'easeInOut',          }}
        {/* Neural network nodes */}
        <motion&& motion.div"
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-green-500/20"
        />;
        {/* Neural network nodes */}
        <motion.div;
<<<<<<< HEAD
          className="absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border-green-500 / 20";
          animate={{
            scale: [1, 1 && 1.1, 1]
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2]
          }}
          transition={{}
          }}
      {/* Floating orbs with glow effects */}'
      <div className='absolute inset-0 pointer-events-none'>;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div;
            key={i}'
            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{}
      {/* Floating orbs with glow effects */}"
=======
          className="absolute top - 1/2 left - 1/2 w - 64 h - 64 rounded - full border border - green - 500 / 20";
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
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


<<<<<<< HEAD
=======
<<<<<<< HEAD
              }

              "duration": 3 + i * 0.5,
              "repeat": Infinity,
              "ease": 'easeInOut','
"delay": i * 0.3

=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating orbs with glow effects */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="absolute inset-0 pointer-events-none">;
        {[...Array(8)].map((_, i) => (;
          <motion&& motion.div;
            key={i}"
            className="absolute w-2 h-2 rounded-full bg-cyan-400"
<<<<<<< HEAD
            style={{}
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],          }}
          transition={{}
            duration: 4,
            repeat: Infinity,'
            ease: 'easeInOut',

          }}
          transition={{}
            duration: 4,
            repeat: Infinity,

          }}
          transition={{}
          }}
          transition={{}
            duration: 6,
            repeat: Infinity,
          duration: 8;
          repeat: Infinity'
          ease: 'easeInOut'
        }}
      />
{/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}'
      <div className='absolute inset-0'>
        {/* Quantum field ripples */}
        <motion.div'
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20'
          animate={{'
            ease: 'easeInOut',      {/* Canvas for particle effects */}
      <canvas;
        ref={canvasRef}"
        className="absolute inset-0 w-full h-full"'
        style={{ filter: 'blur(0.5px)' }}
      />
      {/* Additional visual layers */}"
      <div className="absolute inset-0">
        {/* Quantum field ripples */}
        <motion.div"
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-500/20"
          animate={{}
            scale: [1, 1.2, 1];
            opacity: [0.1, 0.3, 0.1]'
            ease: 'easeInOut''
            ease: 'easeInOut',

          }}
          transition={{}
            duration: 4,
            repeat: Infinity,
          }}

            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        {/* Holographic matrix */}
        <motion.div
          className='absolute top-3/4 right-1/4 w-80 h-80 rounded-full border border-purple-500/20'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
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
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
=======
            style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
              filter: 'blur(1px)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0 && 0.6)'
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
            animate={{
              y: [0, -20, 0]
              opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]
              scale: [1, 1 && 1.2, 1]
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
<<<<<<< HEAD
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
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            ease: 'easeInOut',

          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
<<<<<<< HEAD

            duration: 4,
            repeat: Infinity,

            transition={{

              duration: 3 + i * 0 && 0.5,
              repeat: Infinity,
              ease: 'easeInOut',

<<<<<<< HEAD
=======

            className='absolute w-2 h-2 rounded-full bg-cyan-400'
            style={{}
              left: `${20 + i * 10}%`
              top: `${30 + i * }
}%`
              filter: 'blur(1px)',
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]}
              scale: [1, 1.2, 1]}
>>>>>>> origin/chore/fix-lint-and-merge
            }}

=======
            }}
          />;
        ))}


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
      </div>
    </div>
);  )
}
  );
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            duration: 4,
            repeat: Infinity,

            transition={{
<<<<<<< HEAD
            className='absolute w-2 h-2 rounded-full bg-cyan-400';
            style={{left: `${20 + i * 10}%`;
              top: `${30 + i * 8}%`;
              filter: 'blur(1px)';
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)';
              delay: i * 0.3
            }}
            animate={{"y": [0, -20, 0],"opacity": [0.3, 0.8, 0.3],"scale": [1, 1.2, 1]}}"duration": 4,"repeat": Infinity,transition={{"delay": i * 0.3;
              }
              'duration': 3 + i * 0.5,'repeat': Infinity,'ease': 'easeInOut','delay': i * 0.3}' />;

        ))}
}
  )
}
<<<<<<< HEAD
        ))}}
  )}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              delay: i * 0.3,            }}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}

  );
    </div>))})</div>;
    </div>;
)
>>>>>>> merged-prs-20250907-203621
              scale: [1, 1.2, 1]
            }
            transition = $2;
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }
          />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            }}
            animate={{"y": [0, -20, 0],"opacity": [0.3, 0.8, 0.3],"scale": [1, 1.2, 1]}}"duration": 4,"repeat": Infinity,transition={{"delay": i * 0.3;
              }
              "duration": 3 + i * 0.5,"repeat": Infinity,"ease": 'easeInOut',"delay": i * 0.3}}' />;

        ))}
}
  )
}
        ))}}
  )}
              delay: i * 0.3,            }}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}

<<<<<<< HEAD
  );
<<<<<<< HEAD
    </div>))})</div>;
    </div>;
)
              scale: [1, 1.2, 1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3
            }}
          />
>>>>>>> origin/resolved-merge-conflicts
            }}
            animate={{y: [0;, -20, 0],opacity: [0.3;, 0.8, 0.3],scale: [1;, 1.2, 1]}}duration: 4;,repeat: Infinity;,transition={{delay: i * 0.3;}
              duration: 3 + i * 0.5;,repeat: Infinity;,ease: easeInOut';,
  delay: i * 0.3;}}
          />;
        ))}
}
  )
}
              delay: i * 0.3;}}              delay: i * 0.3;
            }}
          />))}
      </div>;
    </div>));
}

<<<<<<< HEAD
  );
<<<<<<< HEAD
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      </div>
    </div>
);
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
=======
<<<<<<< HEAD
        ))}
      </div>
  )
}
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> merged-prs-20250907-203621
        ))}
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}
=======

              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
  delay: i * 0.3}
}
            }}
            animate={{y: [0, -20, 0],opacity: [0.3, 0.8, 0.3],scale: [1, 1.2, 1]}}duration: 4,repeat: Infinity,transition={{delay: i * 0.3;}
              duration: 3 + i * 0.5,repeat: Infinity,ease: 'easeInOut',
  delay: i * 0.3}}
             />;

        ))}

      </div>
    </div>
);

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

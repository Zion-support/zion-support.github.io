<<<<<<< HEAD
=======

<<<<<<< HEAD

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
export default function UltraFuturisticBackground2035() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);

=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
export default function UltraFuturisticBackground2035() {

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
<<<<<<< HEAD
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
=======

<<<<<<< HEAD
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {}
    const canvas = canvasRef.current;
    if (!canvas) return;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
  const canvasRef = null;
                ease: "easeInOut"
origin/cursor/automate-test-improve-and-merge-code-2533
=======
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

<<<<<<< HEAD
const canvasRef = null;
                ease: \"easeInOut\"
>>>>>>> origin/chore/fix-lint-and-merge
=======
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches,


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);
    if (ctx) {
<<<<<<< HEAD
<<<<<<< HEAD
    const ctx = canvas.getContext('2d);
    if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1);
    canvas.height = window.innerHeight * (window.devicePixelRatio |1);


ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function UltraFuturisticBackground2035() {
  const canvasRef = $2;
  useEffect(() => {
    const canvas = $2;
    if (!canvas) return,
=======
=======


export default function UltraFuturisticBackground2035() {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const prefersReducedMotion = window && window.matchMedia(;
      '(prefers-reduced-motion: reduce)';
    ).matches;    const prefersReducedMotion = window && window.matchMedia('(prefers-reduced-motion: reduce)').matches,;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth * (window && window.devicePixelRatio || 1);
    canvas && canvas.height = window && window.innerHeight * (window && window.devicePixelRatio || 1);
    if (ctx) {;
      ctx && ctx.scale(window && window.devicePixelRatio || 1, window && window.devicePixelRatio || 1);
    let animationFrameId: number;
    let particles: Array<{;
      x: number;
      y: number;
export default /**
 * UltraFuturisticBackground2035 - Function description
 */
function UltraFuturisticBackground2035() {
  const canvas_ref = useRef < HTMLCanvasElement>(null);
;
  useEffect (() => {
    const canvas = canvas_ref.current;
    // Check condition
if (return) {
  $2
}
    const prefersReducedMotion = window.match_media (
      '(prefers - reduced - motion: reduce)').matches;    const prefersReducedMotion = window.match_media ('(prefers - reduced - motion: reduce)').matches,
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    canvas.width = window.inner_width * (window.devicePixelRatio || 1);
    canvas.height = window.inner_height * (window.devicePixelRatio || 1);
    // Check condition
if ( {) {
  $2
}
      ctx.scale (window.devicePixelRatio || 1, window.devicePixelRatio || 1);
;
    let animationFrameId: number;
    let particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
      color: string;    }> = [];      coordinate_x: number,
      coordinate_y: number,

      color: string;    }> = [];      coordinate_x: number,
      coordinate_y: number,

    canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
    canvas.height = window.innerHeight * (window.devicePixelRatio || 1),
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    let animationFrameId: number
    let particles: Array<{
      x: number,
      y: number,
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

    const prefersReducedMotion = $2;
    const ctx = canvas.getContext($2);
    if (!ctx) return,

    canvas.width = $2;
    canvas.height = $2;
    if (ctx) {
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    let animationFrameId: number,
    let particles: Array<{

=======
}
ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);}
    }

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
>>>>>>> origin/chore/fix-lint-and-merge
      vx: number;
      vy: number;
      size: number;
      opacity: number;
<<<<<<< HEAD
      x: number,
      y: number,
<<<<<<< HEAD
=======
=======
      color: string;    }> = [];      coordinate_x: number,
      coordinate_y: number,
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      vx: number,
      vy: number,
      size: number,
      opacity: number,
<<<<<<< HEAD
color: string;    }> = [];      x: number,;
=======

<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
      color: string;}
    }> = [];

<<<<<<< HEAD
=======
      color: string;    }> = [];      x: number,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      opacity: number,;
      color: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    // Initialize particles;
    const initParticles = () => {;
      particles = [];
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Initialize particles;
    const initParticles = () => {;
      vx: number;
      vy: number;
      size: number;
      opacity: number;

      vx: number,
      vy: number,
      size: number,
      opacity: number}
      color: string;}
    }> = [];

<<<<<<< HEAD
      y: number,
      vx: number,
      vy: number,
      size: number,
      opacity: number,
      color: string;
    // Initialize particles;
    const initParticles = () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      color: string;
    // Initialize particles;
    const init_particles = () =>: any {
      particles = [];
      const isSmallScreen = window.inner_width < 768;
      const particle_count = prefersReducedMotion;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
<<<<<<< HEAD
        })
      color: string;
    }> = [];
=======
    // Initialize particles;
const initParticles = (
      particles = [];

const isSmallScreen = window.innerWidth < 768;
>>>>>>> origin/chore/fix-lint-and-merge

const particleCount = prefersReducedMotion;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
      for (let i = 0; i < particleCount; i++) {
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),
          y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random() * 0.35 + 0.08,
<<<<<<< HEAD
color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ],) => {
  return $3;}
}
        });
=======
          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
<<<<<<< HEAD
        })
}
      color: string;    }> = [];      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const isSmallScreen = window.innerWidth < 768;
      const particleCount = prefersReducedMotion
        ? 12
        : isSmallScreen
          ? 40
          : 100;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (Math.random() * canvas.width) / (window.devicePixelRatio |1)
          y: (Math.random() * canvas.height) / (window.devicePixelRatio |1),          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8
          opacity: Math.random() * 0.35 + 0.08
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ]
        });      }      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio |1)
          y: Math.random() * canvas.height / (window.devicePixelRatio |1)
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4
          size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8
          opacity: Math.random() * 0.35 + 0.08
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][
            Math.floor(Math.random() * 4)
          ]
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor(Math.random() * 4)]
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
    // Update and draw particles;
const updateParticles = (
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
<<<<<<< HEAD
        // Wrap around edges
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1))
          particle.y = 0;

<<<<<<< HEAD
=======
<<<<<<< HEAD
        if (particle.x < 0)
          particle.x = canvas.width / (window.devicePixelRatio |1);
        if (particle.x > canvas.width / (window.devicePixelRatio |1))
          particle.x = 0;
        if (particle.y < 0)
          particle.y = canvas.height / (window.devicePixelRatio |1);
        if (particle.y > canvas.height / (window.devicePixelRatio |1))
          particle.y = 0;        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio |1);
        if (particle.x > canvas.width / (window.devicePixelRatio |1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio |1);
        if (particle.y > canvas.height / (window.devicePixelRatio |1)) particle.y = 0;
=======

        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1);
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1);
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        // Draw particle
        ctx.beginPath();
origin/cursor/automate-test-improve-and-merge-code-2533
        // Draw particle
        // Wrap around edges;
        // Draw particle;
        ctx.beginPath();
=======
        // Draw particle;
ctx.beginPath();
>>>>>>> origin/chore/fix-lint-and-merge
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
<<<<<<< HEAD
        // Draw connections
<<<<<<< HEAD
        const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 90
            : 140;        if (maxDistance > 0) {        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);
=======

<<<<<<< HEAD
const maxDistance = prefersReducedMotion
          ? 0
          : window.innerWidth < 768
            ? 90
            : 140;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        if (maxDistance > 0) {
          }
          particles.forEach((otherParticle, otherIndex) => {
            }
            if (index !== otherIndex) {
        // Draw connections;
        if (maxDistance > 0) {}
          particles.forEach((otherParticle, otherIndex) => {}
            if (index !== otherIndex) {}
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {}
              if (distance < maxDistance) {
                }
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;
<<<<<<< HEAD
=======

<<<<<<< HEAD
;
  const canvasRef = useRef<HTMLCanvasElement>(null)useEffect(() => {const canvas = canvasRef.current;
    if (!canvas) return;import React, { useEffect, useRef } from 'react';
import { motion  } from 'framer-motion';
  const canvasRef = null;
                ease: "easeInOut";
    const ctx = canvas.getContext('2d')if (!ctx) return;
    canvas.width = window.innerWidth * (window.devicePixelRatio |1)canvas.height = window.innerHeight * (window.devicePixelRatio |1)if (ctx) {ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)}let animationFrameId: number;
    let particles: Array<{x: number;
      y: number;vx: number;
      vy: number;
      size: number;
      opacity: number;vx: number,vy: number,size: number,opacity: number,y: number,vx: number,vy: number,size: number,opacity: number,color: string;
    // Initialize particles;
    const initParticles = () => {? 12;
        : isSmallScreen;
          ? 40;
          : 100;
        })color: string;
    }> = [];// Initialize particles;
    const initParticles = () => {particles = [];
      const isSmallScreen = window.innerWidth < 768;
const particleCount = prefersReducedMotion;
        ? 12;
        : isSmallScreen;
          ? 40;
          : 100;
      for (let i = 0; i < particleCount; i++) {particles.push({x: (Math.random() * canvas.width) / (window.devicePixelRatio || 1),y: (Math.random() * canvas.height) / (window.devicePixelRatio || 1),vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,size: Math.random() * (isSmallScreen ? 1.5 : 2) + 0.8,opacity: Math.random() * 0.35 + 0.08,color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor(Math.random() * 4)],})}
=======
      for (let i = 0; i < particleCount; i++) {;
        particles && particles.push({;
          x: (Math && Math.random() * canvas && canvas.width) / (window && window.devicePixelRatio || 1),;
          y: (Math && Math.random() * canvas && canvas.height) / (window && window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          vy: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          size: Math && Math.random() * (isSmallScreen ? 1 && 1.5 : 2) + 0 && 0.8,;
          opacity: Math && Math.random() * 0 && 0.35 + 0 && 0.08,;
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math && Math.floor(Math && Math.random() * 4);
          ],;
        });      }      const particleCount = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let i = 0, i < particleCount, i++) {;
        particles && particles.push({;
          x: Math && Math.random() * canvas && canvas.width / (window && window.devicePixelRatio || 1),;
          y: Math && Math.random() * canvas && canvas.height / (window && window.devicePixelRatio || 1),;
          vy: prefersReducedMotion ? 0 : (Math && Math.random() - 0 && 0.5) * 0 && 0.4,;
          size: Math && Math.random() * (isSmallScreen ? 1 && 1.5 : 2) + 0 && 0.8,;
          opacity: Math && Math.random() * 0 && 0.35 + 0 && 0.08,;
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math && Math.floor(Math && Math.random() * 4);
          ],;
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math && Math.floor(Math && Math.random() * 4)];
        });
      }
    };
    // Update and draw particles;
    const updateParticles = () => {;
      ctx && ctx.clearRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0);
          particle && particle.x = canvas && canvas.width / (window && window.devicePixelRatio || 1);
        if (particle && particle.x > canvas && canvas.width / (window && window.devicePixelRatio || 1));
          particle && particle.x = 0;
        if (particle && particle.y < 0);
          particle && particle.y = canvas && canvas.height / (window && window.devicePixelRatio || 1);
        if (particle && particle.y > canvas && canvas.height / (window && window.devicePixelRatio || 1));
          particle && particle.y = 0;        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width / (window && window.devicePixelRatio || 1);
        if (particle && particle.x > canvas && canvas.width / (window && window.devicePixelRatio || 1)) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height / (window && window.devicePixelRatio || 1);
        if (particle && particle.y > canvas && canvas.height / (window && window.devicePixelRatio || 1)) particle && particle.y = 0;
        // Draw particle;
        ctx && ctx.beginPath();
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.globalAlpha = particle && particle.opacity;
        ctx && ctx.fill();
        // Draw connections;
        const maxDistance = prefersReducedMotion;
          ? 0;
          : window && window.innerWidth < 768;
            ? 90;
            : 140;        if (maxDistance > 0) {        const maxDistance = prefersReducedMotion ? 0 : (window && window.innerWidth < 768 ? 90 : 140);
        if (maxDistance > 0) {;
          particles && particles.forEach((otherParticle, otherIndex) => {;
            if (index !== otherIndex) {;
              const dx = particle && particle.x - otherParticle && otherParticle.x;
              const dy = particle && particle.y - otherParticle && otherParticle.y;
              const distance = Math && Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {;
                ctx && ctx.beginPath();
                ctx && ctx.moveTo(particle && particle.x, particle && particle.y);
                ctx && ctx.lineTo(otherParticle && otherParticle.x, otherParticle && otherParticle.y);
                ctx && ctx.strokeStyle = particle && particle.color;
                ctx && ctx.globalAlpha =;
                  ((maxDistance - distance) / maxDistance) * 0 && 0.08;
                ctx && ctx.lineWidth = 1;
                ctx && ctx.stroke();

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      for (let index = 0; i < particle_count; i++) {
        particles.push ({
          coordinate_x: (Math.random () * canvas.width) / (window.devicePixelRatio || 1),
          coordinate_y: (Math.random () * canvas.height) / (window.devicePixelRatio || 1),          vx: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random () * 0.35 + 0.08,
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],
        });      }      const particle_count = prefersReducedMotion ? 12 : (isSmallScreen ? 40 : 100);
      for (let index = 0, i < particle_count, i++) {
        particles.push ({
          coordinate_x: Math.random () * canvas.width / (window.devicePixelRatio || 1),
          coordinate_y: Math.random () * canvas.height / (window.devicePixelRatio || 1),
          vy: prefersReducedMotion ? 0 : (Math.random () - 0.5) * 0.4,
          size: Math.random () * (isSmallScreen ? 1.5 : 2) + 0.8,
          opacity: Math.random () * 0.35 + 0.08,
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor (Math.random () * 4)];
        });
      }
    }
    // Update and draw particles;
    const updateParticles = () => {ctx.clearRect(0, 0, canvas.width, canvas.height)particles.forEach((particle, index) => {particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
if (particle.x < 0)particle.x = canvas.width / (window.devicePixelRatio || 1)if (particle.x > canvas.width / (window.devicePixelRatio || 1))particle.x = 0;
        if (particle.y < 0)particle.y = canvas.height / (window.devicePixelRatio || 1)if (particle.y > canvas.height / (window.devicePixelRatio || 1))particle.y = 0;// Draw particle;
        ctx.beginPath()ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill()// Draw connections;
=======
        // Draw connections;
>>>>>>> origin/chore/fix-lint-and-merge
const maxDistance = prefersReducedMotion;
          ? 0;
          : window.innerWidth < 768;
            ? 90;
            : 140;
        if (maxDistance > 0) {
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x;

const dy = particle.y - otherParticle.y;

const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = particle.color;

ctx.globalAlpha =

                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;) => {
  return $3;}
}
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
          opacity: Math.random () * 0.35 + 0.08,

    }
<<<<<<< HEAD
    // Update and draw particles;
    const update_particles = () =>: any {}
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
      particles.for_each ((particle, index) => {}
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges;
        if (
          particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {}
  $2;
}


    window.addEventListener(resize', handleResize);
    return () => {
      window.removeEventListener('resize, handleResize);
      if (animationFrameId) {
cancelAnimationFrame(animationFrameId);
      }
    }
  }, []);
  return (
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
className=fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)
        }}
      />
      {/* Animated Background Elements */}
      <div className=fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full
          animate={{
            }
          })
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = $2;
    initParticles($2);
    updateParticles($2);
    const handleResize = $2;
      canvas.height = $2;
      if (ctx) {
        ctx.setTransform($2);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
    },

    window.addEventListener($2);
    return () => {
      window.removeEventListener($2);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []),

  return (
    <>
}
                ctx.stroke()}
            }
          })}
      })if (!prefersReducedMotion) {animationFrameId = requestAnimationFrame(updateParticles)}
          opacity: Math.random () * 0.35 + 0.08,'
          color: ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'][;
            Math.floor (Math.random () * 4);
          ],'
        });          color: ['#8b5cf6#06b6d4#ec4899#10b981'][Math.floor (Math.random () * 4)];
        });
      }
    }
;
    // Update and draw particles;
    const update_particles = () =>: any {}
      ctx.clear_rect (0, 0, canvas.width, canvas.height);
;
      particles.for_each ((particle, index) => {}
        particle.x += particle.vx;
        particle.y += particle.vy;
;
        // Wrap around edges;
        if (
<<<<<<< HEAD
          particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {}
  $2;
=======
    initParticles()updateParticles(;
  const handleResize = (canvas.width = window.innerWidth * (window.devicePixelRatio |1)canvas.height = window.innerHeight * (window.devicePixelRatio |1)if (ctx) {ctx.setTransform(1, 0, 0, 1, 0, 0)ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)) => {
  return $3;}
>>>>>>> origin/chore/fix-lint-and-merge
}
      initParticles()}window.addEventListener('resize', handleResize)return () => {window.removeEventListener('resize', handleResize)if (animationFrameId) {cancelAnimationFrame(animationFrameId)}
    }}, [];
  return (<>;
      {/* Fixed Background Canvas */}
      <canvas;
        ref={canvasRef}
<<<<<<< HEAD
=======
          particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {
  $2
}
        if ()) {
  $2
}
          particle.coordinate_x = 0;
        if (
          particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {
  $2
}
        if ()) {
  $2
}
          particle.coordinate_y = 0;        if (particle.coordinate_x = canvas.width / (window.devicePixelRatio || 1)) {
  $2
}
        if () particle.coordinate_x = 0) {
  $2
}
        if (particle.coordinate_y = canvas.height / (window.devicePixelRatio || 1)) {
  $2
}
        if () particle.coordinate_y = 0) {
  $2
}
        // Draw particle;
        ctx.begin_path ();
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color;
        ctx.global_alpha = particle.opacity;
        ctx.fill ();
;
        // Draw connections;
        const max_distance = prefersReducedMotion;
          ? 0;
          : window.inner_width < 768;
            ? 90;
            : 140;        if ( {        const max_distance = prefersReducedMotion ? 0 : (window.inner_width < 768 ? 90 : 140)) {
  $2
}
        // Check condition
if ( {) {
  $2
}
          particles.for_each ((other_particle, other_index) => {
            // Check condition
if ( {) {
  $2
}
              const dx = particle.x - other_particle.x;
              const dy = particle.y - other_particle.y;
              const distance = Math.sqrt (dx * dx + dy * dy);
;
              // Check condition
if ( {) {
  $2
}
                ctx.begin_path ();
                ctx.move_to (particle.x, particle.y);
                ctx.line_to (other_particle.x, other_particle.y);
                ctx.stroke_style = particle.color;
                ctx.global_alpha =;
                  ((max_distance - distance) / max_distance) * 0.08;
                ctx.line_width = 1;
                ctx.stroke ();
                ctx.globalAlpha =
                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });        }
      });
<<<<<<< HEAD
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke()
;
      // Check condition
if ( {) {
  $2
}
        animationFrameId = requestAnimationFrame (update_particles);      }                ctx.line_width = 1;
                ctx.stroke ();
=======


      if (!prefersReducedMotion) {;
        animationFrameId = requestAnimationFrame(updateParticles);      }                ctx && ctx.lineWidth = 1;
                ctx && ctx.stroke();

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              }
            }
          });
        }
      });
<<<<<<< HEAD
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
      }
      initParticles()
    };
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);      }                ctx.lineWidth = 1;
                ctx.stroke()
              }
            }
          })
        }
      });
      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles);        animationFrameId = requestAnimationFrame(updateParticles)
      }
    }
    initParticles();
    updateParticles();
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio |1);
      canvas.height = window.innerHeight * (window.devicePixelRatio |1);
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1);
      }
      initParticles();    };        ctx.scale(window.devicePixelRatio |1, window.devicePixelRatio |1)
      }
      initParticles()
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };  }, []);        cancelAnimationFrame(animationFrameId)
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
    }
  }, []);
  return (
<<<<<<< HEAD
            'radial-gradient(ellipse at center, rgba(139,92,246,0 && 0.04) 0%, rgba(0,0,0,0) 70%)',
        }}
      />;
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>;
        {/* Floating Geometric Shapes */}
        <motion&& motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
;
      // Check condition
if ( {) {
  $2
}
        animationFrameId = requestAnimationFrame (update_particles);        animationFrameId = requestAnimationFrame (update_particles);
      }
    }
;
    init_particles ();
    update_particles ();
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width * (window.devicePixelRatio || 1);
      canvas.height = window.inner_height * (window.devicePixelRatio || 1);
      // Check condition
if ( {) {
  $2
}
        ctx.set_transform (1, 0, 0, 1, 0, 0);
        ctx.scale (window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      init_particles ();    }        ctx.scale (window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      init_particles ();
    }
;
    window.addEventListener ('resize', handle_resize);
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animationFrameId);
      }
    }  }, []);        cancelAnimationFrame (animationFrameId);
      }
    }
  }, []);
;
  return (
    <>;
      {/* Fixed Background Canvas */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background:;
            'radial - gradient (ellipse at center, rgba (139, 92, 246, 0.04) 0%, rgba (0, 0, 0, 0) 70%)',
        }}
      />;
      {/* Animated Background Elements */}
      <div className='fixed inset - 0 pointer - events - none z - 0 overflow - hidden'>;
        {/* Floating Geometric Shapes */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - purple - 500 / 15 rounded - full';
          animate={{
=======
<<<<<<< HEAD
    <>;
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}


          animate={{

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            scale: [1, 1 && 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',      />;
<<<<<<< HEAD
=======

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">;
        {/* Floating Geometric Shapes */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1 && 1.15, 1]
            rotate: [0, 180, 360]
            opacity: [0 && 0.22, 0 && 0.45, 0 && 0.22]

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

<<<<<<< HEAD
=======

<<<<<<< HEAD
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
<<<<<<< HEAD
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22]
=======
            scale: [1, 1.15, 1];
            rotate: [0, 180, 360];
            opacity: [0.22, 0.45, 0.22];
<<<<<<< HEAD
      }
    },

    // Update and draw particles
    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height),

      particles.forEach((particle, index) => {
        particle.x += particle.vx,
        particle.y += particle.vy,

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width / (window.devicePixelRatio || 1),
        if (particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.x = 0,
        if (particle.y < 0) particle.y = canvas.height / (window.devicePixelRatio || 1),
        if (particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.y = 0,

        // Draw particle
        ctx.beginPath(),
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2),
        ctx.fillStyle = particle.color,
        ctx.globalAlpha = particle.opacity,
        ctx.fill(),

        // Draw connections
        const maxDistance = prefersReducedMotion ? 0 : (window.innerWidth < 768 ? 90 : 140)

        if (maxDistance > 0) {
          particles.forEach(_(otherParticle, _otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < maxDistance) {
                ctx.beginPath(),
                ctx.moveTo(particle.x, particle.y),
                ctx.lineTo(otherParticle.x, otherParticle.y),
                ctx.strokeStyle = particle.color,
                ctx.globalAlpha = (maxDistance - distance) / maxDistance * 0.08,
                ctx.lineWidth = 1,
                ctx.stroke()
              }

            }
          })
        }
      }),

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateParticles)
      }
    },

    initParticles(),
    updateParticles(),

    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio || 1),
      canvas.height = window.innerHeight * (window.devicePixelRatio || 1),

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, []),

  return (
    <>
      {_/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className=&quot;fixed inset-0 w-full h-full pointer-events-none z-0&quot;
        style={{ background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)' }}
      />

      {/* Animated Background Elements */}
      <div className=&quot;fixed inset-0 pointer-events-none z-0 overflow-hidden&quot;>
        {/* Floating Geometric Shapes */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full&quot;
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.22, 0.45, 0.22]

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition = $2;
            repeat: Infinity,
<<<<<<< HEAD
            ease: "easeInOut"
          }}
        />
        
        <motion.div
=======
<<<<<<< HEAD
ease: "easeInOut"
    <>
      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)'
        }}
      />
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        {/* Floating Geometric Shapes */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
            scale: [1, 1.15, 1]
            rotate: [0, 180, 360]
            opacity: [0.22, 0.45, 0.22],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',      />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full"
          animate={{
            scale: [1, 1.15, 1];
            rotate: [0, 180, 360];
            opacity: [0.22, 0.45, 0.22]
=======

            ease: "easeInOut"

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 8
            repeat: Infinity
<<<<<<< HEAD
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - cyan - 500 / 20 transform rotate - 45";
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ease: 'easeInOut',          }}

        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - cyan - 500 / 20 transform rotate - 45";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],            scale: [1, 1.3, 1];
            rotate: [45, 225, 405];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion&& motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className="absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
<<<<<<< HEAD
            opacity: [0.2, 0.5, 0.2]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neon Glow Effects */}
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
=======
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],            scale: [1, 1 && 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2]
<<<<<<< HEAD
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
          }}
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - cyan - 500 / 20 transform rotate - 45';
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2],          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1 && 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        <motion.div;
          className='absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 500 / 20 rounded - full';
          animate={{
            scale: [1, 1.4, 1],
            coordinate_y: [0, -20, 0],
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            opacity: [0.4, 0.7, 0.4],          }}
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        />;
=======

        />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{;
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
<<<<<<< HEAD
ctx.globalAlpha =
                  ((maxDistance - distance) / maxDistance) * 0.08;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });
      if (!prefersReducedMotion) {
animationFrameId = requestAnimationFrame(updateParticles);
      }
    }
    initParticles();
    updateParticles();
    const handleResize = () => {
      canvas.width = window.innerWidth * (window.devicePixelRatio |1);
      canvas.height = window.innerHeight * (window.devicePixelRatio |1);
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      }
      initParticles();
    };

        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45
origin/cursor/automate-test-improve-and-merge-code-2533
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405],
            opacity: [0.2, 0.5, 0.2]}}
          transition={{
            duration: 10
            repeat: Infinity
          animate={{}
            scale: [1, 1.3, 1]
            rotate: [45, 225, 405]
            opacity: [0.2, 0.5, 0.2]}}
          transition={{}
            duration: 10;
            repeat: Infinity'
            ease: 'easeInOut',          }}
            opacity: [0.4, 0.7, 0.4],          }}
            ease: 'easeInOut'}}
            opacity: [0.4, 0.7, 0.4]}}
        />;
        <motion&& motion.div
          className=absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{}
            scale: [1, 1 && 1.4, 1],
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4]}}
          transition={{}
            duration: 12;
            repeat: Infinity'
            ease: easeInOut}}
        {/* Neon Glow Effects */}'
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className=absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />          className=absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full";
          animate={{
            scale: [1, 1 && 1.4, 1];
            y: [0, -20, 0];


        <motion.div"
          className="absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full"
          animate={{}
            scale: [1, 1.4, 1];
            y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{}
          }}
        />
        {/* Neon Glow Effects */}
            duration: 10,
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        <motion.div
=======
className='fixed inset-0 w-full h-full pointer-events-none z-0';
        style={{background:;}
            'radial-gradient(ellipse at center, rgba(139,92,246,0.04) 0%, rgba(0,0,0,0) 70%)';}
        }}
         />;
      {/* Animated Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'    />;
        {/* Floating Geometric Shapes */}

        <motion.div;
className='absolute top-20 left-20 w-32 h-32 border border-purple-500/15 rounded-full'
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]}
            opacity: [0.22, 0.45, 0.22]}
          }}
          transition={{
            duration: 8,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />

        <motion.div;
className='absolute top-40 right-32 w-24 h-24 border border-cyan-500/20 transform rotate-45'
          animate={{
            scale: [1, 1.3, 1],
            rotate: [45, 225, 405]}
            opacity: [0.2, 0.5, 0.2]}
          }}
          transition={{

            duration: 10,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
        <motion.div;
>>>>>>> origin/chore/fix-lint-and-merge
className='absolute bottom-32 left-1/4 w-20 h-20 border border-pink-500/20 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -20, 0]}
            opacity: [0.4, 0.7, 0.4]}
          }}
          transition={{
            duration: 12,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
<<<<<<< HEAD
        />
=======
           />
>>>>>>> origin/chore/fix-lint-and-merge
        {/* Neon Glow Effects */}
<div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'    />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000'    />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000'    />
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }}
        />
        {/* Neon Glow Effects */}

<<<<<<< HEAD
            duration: 12
            repeat: Infinity
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />
=======
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4];
          transition={{;
            duration: 12,;
            repeat: Infinity,;
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Neon Glow Effects */}
        <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />;
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />;
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Animated Grid Lines */}
        <div className='absolute inset-0 opacity-10'    />;
          <div;
className='absolute inset-0'
            style={{
              backgroundImage: `
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
<<<<<<< HEAD
=======

            }}
          />        </div>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />


<<<<<<< HEAD
            }}
          />        </div>;
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">;
          <divclassName="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px'
<<<<<<< HEAD
=======


<<<<<<< HEAD
          }} />
        </div>
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }}
          transition={{
            repeat: Infinity,
ease: 'easeInOut',
          }}
        />
        {/* Neon Glow Effects */}
<div className='absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse' />
        <div className='absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000' />
origin/cursor/automate-test-improve-and-merge-code-2533
        {/* Animated Grid Lines */}
        {/* Animated Grid Lines */}'
        <div className='absolute inset-0 opacity-10'>;
          <div'
            className='absolute inset-0'
            style={{}
              backgroundImage: `
        {/* Animated Grid Lines */}"
        <div className="absolute inset-0 opacity-10">;"
          <divclassName="absolute inset-0" style={{}`
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0 && 0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0 && 0.3) 1px, transparent 1px)`
            `'
            backgroundSize: '50px 50px'
          }}
          transition={{}
            duration: 12,
            repeat: Infinity,

          }}
            duration: 12,
            repeat: Infinity}}
        />

        {/* Neon Glow Effects */}

=======

              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px)
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `}
              backgroundSize: '50px 50px'}
            }}
             />
>>>>>>> origin/chore/fix-lint-and-merge
        </div>

<<<<<<< HEAD
          
} />;
        </div>;

=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Floating Particles */}
<<<<<<< HEAD
        {[...Array(20)].map((_, i) => (;
          <motion&& motion.div
<<<<<<< HEAD
}
=======
        {[...Array(20)].map((_, i) => (;}
          <motion&& motion.div;}
>>>>>>> origin/chore/fix-lint-and-merge
key={i}
className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{}
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) =    /> (}
          <motion.div;}
            key={i}
              top: `${Math.random() * 100}%`
              left: `${Math && Math.random() * 10}
}%`,
              top: `${Math && Math.random() * 10}
}%`
=======
            key={i}
            className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }} />
        </div>
        />;
        {/* Neon Glow Effects */}
        <div className='absolute top - 1/4 left - 1/3 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute top - 1/3 right - 1/4 w - 80 h - 80 bg - cyan - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 1000' />;
        <div className='absolute bottom - 1/4 left - 1/2 w - 72 h - 72 bg - pink - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 2000' />          className="absolute bottom - 32 left - 1/4 w - 20 h - 20 border border - pink - 500 / 20 rounded - full";
          animate={{
            scale: [1, 1.4, 1];
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.7, 0.4];
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Neon Glow Effects */}
        <div className='absolute top - 1/4 left - 1/3 w - 96 h - 96 bg - purple - 500 / 5 rounded - full blur - 3xl animate - pulse' />;
        <div className='absolute top - 1/3 right - 1/4 w - 80 h - 80 bg - cyan - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 1000' />;
        <div className='absolute bottom - 1/4 left - 1/2 w - 72 h - 72 bg - pink - 500 / 5 rounded - full blur - 3xl animate - pulse delay - 2000' />;
        {/* Animated Grid Lines */}
        <div className='absolute inset - 0 opacity - 10'>;
          <div;
            className='absolute inset - 0';
            style={{
              background_image: `;
              linear - gradient (rgba (139, 92, 246, 0.3) 1px, transparent 1px),
              linear - gradient (90deg, rgba (139, 92, 246, 0.3) 1px, transparent 1px);
            `,
              background_size: '50px 50px',
            }}
<<<<<<< HEAD
          />        </div>;
        {/* Animated Grid Lines */}
        <div className="absolute inset - 0 opacity - 10">;
          <div className="absolute inset - 0" style={{
            background_image: `;
              linear - gradient (rgba (139, 92, 246, 0.3) 1px, transparent 1px);
              linear - gradient (90deg, rgba (139, 92, 246, 0.3) 1px, transparent 1px);
            `;
            background_size: '50px 50px';
          }} />;
        </div>;
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
            animate={{

<<<<<<< HEAD
          <motion&& motion.div
            key={i}
className='absolute w-1 h-1 bg-purple-400 rounded-full'
            style={{
        {/* Floating Particles */}
        {[...Array (20)].map ((_, i) => (
          <motion.div;
            key={i}`
              top: `${Math.random() * 100}%``
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`,
            }}
            animate={{}
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0],            }}            style={{}
            }}
            animate={{}
              y: [0, -30, 0]
              opacity: [0, 1, 0]
              scale: [0, 1, 0]
            }}
<<<<<<< HEAD
            transition={{}
              duration: 3 + Math.random() * 2;
              repeat: Infinity;
              delay: Math.random() * 2;
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,

            transition={{
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
            transition={{
              }
              "duration": 3 + Math.random() * 2,
              "repeat": Infinity,
              "delay": Math.random() * 2,
"ease": 'easeInOut','
            }}
            transition={{
              }
              "duration": 3 + Math.random() * 2,
              "repeat": Infinity,
              "delay": Math.random() * 2, />
          />;
        ))}
        {/* Energy Waves */}
        <motion&& motion.div
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
            transition={{
              duration: 3 + Math.random () * 2,
              repeat: Infinity,
        {/* Energy Waves */}
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
          animate={{
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
        <motion.div
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2}
ease: 'easeInOut'}
          }}"
            ease: 'easeInOut'          }}            ease: \"easeInOut\"

<<<<<<< HEAD
}
        />
            ease: 'easeInOut'          }}

        />;
        <motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0],opacity: [0, 1, 0],}}transition={{duration: 4,repeat: Infinity,delay: 2,ease: 'easeInOut',}}
            ease: 'easeInOut',          }}            ease: "easeInOut";
ease: 'easeInOut',
          }}
        />
        <motion.div
=======
              y: [0, -30, 0],
              opacity: [0, 1, 0]}
              scale: [0, 1, 0]}
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2}
ease: 'easeInOut'}
            }}
=======
<<<<<<< HEAD
            transition={{
              duration: 3 + Math && Math.random() * 2,
              repeat: Infinity,
              delay: Math && Math.random() * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"

<<<<<<< HEAD



=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
          />;
        ))}
<<<<<<< HEAD


            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
              ease: 'easeInOut',            }}

            }}

          />
        ))}

        {/* Energy Waves */}
            className='absolute w - 1 h - 1 bg - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              coordinate_y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              coordinate_y: [0, -30, 0];
              opacity: [0, 1, 0];
              scale: [0, 1, 0];
            }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,


<<<<<<< HEAD
             />}
          />;}
=======
          />
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ))}
        {/* Energy Waves */}
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
=======
        {/* Energy Waves */}

<<<<<<< HEAD
        <motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            opacity: [0, 1, 0],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        />;
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          }}          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - purple - 500 / 50 to - transparent";
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          animate={{
            scaleX: [0, 1, 0]}
            opacity: [0, 1, 0]}
          }}
          transition={{
            duration: 4,
            repeat: Infinity}
ease: 'easeInOut'}
          }}
           />
        <motion.div;
>>>>>>> origin/chore/fix-lint-and-merge
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]}
            opacity: [0, 1, 0]}
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
            delay: 2,
ease: 'easeInOut',
          transition={{}
            duration: 4;
            repeat: Infinity;
            delay: 2'"
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}'"
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}
            "ease": 'easeInOut'          }}            "ease": "easeInOut""
=======
            delay: 2}
ease: 'easeInOut'}
          }}"
            ease: 'easeInOut'          }}            ease: \"easeInOut\"
>>>>>>> origin/chore/fix-lint-and-merge
          
}
           />
            ease: 'easeInOut'          }}
=======
/>;
        <motion&& motion.div
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2}
ease: easeInOut}
          }}"
            ease: 'easeInOut'          }}            ease: \easeInOut\

}
        />
            ease: easeInOut          }}

        />;
<<<<<<< HEAD
            ease: 'easeInOut',          }}/>;{/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (<motion&& motion.div;
            }
            key={`quantum-${i}`}`className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full';'
            style={{{/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (<motion.div;
            }
            key={`quantum-${i}`}`              "left": `${Math && Math.random() * 10,`}%`,"top": `${Math && Math.random() * 10,`}%`}}`            animate={{"scale": [0, 1, 0],"opacity": [0, 0 && 0.8, 0],"rotate": [0, 360]            }}            style={{"left": `${Math && Math.random() * 10,`}%`,"top": `${Math && Math.random() * 10,`}%`;`            }}
            animate={{"scale": [0, 1, 0];
              }
              "opacity": [0, 0 && 0.8, 0];
              "rotate": [0, 360];
            }}
        />;
          }}
        />
        <motion.div
<<<<<<< HEAD
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]}}
origin/cursor/automate-test-improve-and-merge-code-2533
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 2,
ease: easeInOut,
          transition={{}
            duration: 4;
            repeat: Infinity;
            delay: 2'
            ease: 'easeInOut}}            ease: easeInOut"
          }}"
            ease: 'easeInOut'}}            ease: easeInOut
          }}
        />
            ease: easeInOut'}}
=======

        />;

        <motion&& motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{

            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          }}          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
          }}
          transition={{
<<<<<<< HEAD
        />;
        <motion&& motion.div
=======

        />;
        <motion&& motion.div

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0],          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0]
            opacity: [0, 1, 0]
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        <motion.div;
          className='absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent';
          animate={{
            scale_x: [0, 1, 0],
            opacity: [0, 1, 0],          className="absolute top - 1/2 left - 0 w - full h - px bg - gradient - to - r from - transparent via - cyan - 500 / 50 to - transparent";
          animate={{
            scale_x: [0, 1, 0];
            opacity: [0, 1, 0];
          transition={{
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        />;


<<<<<<< HEAD

=======
<<<<<<< HEAD
            duration: 4
            repeat: Infinity
            delay: 2
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}
        />
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',          }}            ease: "easeInOut"
          }}
        />
            ease: 'easeInOut',          }}

          }}

        />

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (;
          <motion&& motion.div
            key={`quantum-${i}`}
className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full
            style={{
<<<<<<< HEAD
=======
<<<<<<< HEAD
            duration: 4,
            repeat: Infinity,
            delay: 2,
            ease: 'easeInOut',          }}            ease: "easeInOut";
          }}
        />;
=======

            duration: 4,
            repeat: Infinity,
            delay: 2,

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        {/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (
          <motion.div;
            key={`quantum-${i}`}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`,
=======
        <motion.div;
className='absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent';
          animate={{scaleX: [0, 1, 0],opacity: [0, 1, 0]}}transition={{duration: 4,repeat: Infinity,delay: 2,ease: 'easeInOut'}}"
            ease: 'easeInOut'          }}            ease: \'easeInOut\';
          }}
           />;
            ease: 'easeInOut'          }}/>;{/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (<motion&& motion.div;}
            key={`quantum-${i}`}
className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full';
            style={{{/* Quantum Dots */}
        {[...Array (15)].map ((_, i) =    /> (<motion.div;}
            key={`quantum-${i}`}
              left: `${Math && Math.random() * 10}
}%`,top: `${Math && Math.random() * 10}
}%`}}
            animate={{scale: [0, 1, 0],opacity: [0, 0 && 0.8, 0],rotate: [0, 360]            }}            style={{left: `${Math && Math.random() * 10}
}%`,top: `${Math && Math.random() * 10}
}%`;
>>>>>>> origin/chore/fix-lint-and-merge
            }}
            animate={{scale: [0, 1, 0];
              opacity: [0, 0 && 0.8, 0];}
              rotate: [0, 360];}
            }}

            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0 && 0.8, 0],
              rotate: [0, 360],            }}            style={{
              left: `${Math && Math.random() * 100}%`,
              top: `${Math && Math.random() * 100}%`
<<<<<<< HEAD
        {/* Quantum Dots */}
        {[...Array (15)].map ((_, i) => (
          <motion.div;`
            key={`quantum-${i}`}`
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`,
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
            animate={{}
              scale: [0, 1, 0],
              opacity: [0, 0 && 0.8, 0],
              rotate: [0, 360],            }}            style={{}`
              left: `${Math && Math.random() * 100}%`,`
              top: `${Math && Math.random() * 100}%`
            }}
            animate={{}
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
              rotate: [0, 360]
            }}
<<<<<<< HEAD
            transition={{}
              duration: 5 + Math.random() * 3;
              repeat: Infinity;
              delay: Math.random() * 5;
=======

              duration: 5 + Math && Math.random() * 3,
              repeat: Infinity,
              delay: Math && Math.random() * 5,

              ease: 'easeInOut',            }}              ease: "easeInOut"

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,'"
              ease: 'easeInOut',            }}              ease: "easeInOut"
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360],
            }}
            animate={{
              scale: [0, 1, 0]
              opacity: [0, 0 && 0.8, 0]
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />

<<<<<<< HEAD
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10>
          <div className=absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)
            `,
            backgroundSize: 50px 50px
          }} />
        </div>

              "scale": [0, 1, 0],
              "opacity": [0, 0.8, 0],
              "rotate": [0, 360]
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition = $2;
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
=======
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]}
              rotate: [0, 360]}
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5}
ease: 'easeInOut'}
            }}
             />
>>>>>>> origin/chore/fix-lint-and-merge
        ))}
        {/* Neural Network Connections */}

<<<<<<< HEAD
        {/* Energy Waves */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition = $2;
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition = $2;
            repeat: Infinity,
            delay: 2,
            ease: "easeInOut"
          }}
        />

        {/* Quantum Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key = $2;
              top: `${Math.random() * 100}%`
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 360]
            }}
            transition = $2;
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

<<<<<<< HEAD
        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,

            transition={{
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
            transition={{
              duration: 5 + Math && Math.random() * 3,
              repeat: Infinity,
              delay: Math && Math.random() * 5,
              ease: 'easeInOut',            }}              ease: "easeInOut"
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}
          />;
        ))}
        {/* Neural Network Connections */}
<<<<<<< HEAD
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
<svg className='absolute inset-0 w-full h-full opacity-20'>
          <defs>
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
<<<<<<< HEAD
            transition={{duration: 5 + Math.random() * 3;
              repeat: Infinity;
              delay: Math.random() * 5;
              duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,ease: 'easeInOut',            }}              ease: "easeInOut";
              scale: [0, 1, 0],opacity: [0, 0.8, 0],rotate: [0, 360],}}
            transition={{duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,ease: 'easeInOut',}}
          />;
        ))}
        {/* Neural Network Connections */}<svg className='absolute inset-0 w-full h-full opacity-20'>;
              duration: 5 + Math.random() * 3,repeat: Infinity,delay: Math.random() * 5,transition={{ease: 'easeInOut',            }}              ease: "easeInOut";
            }}
          />;
        ))}
        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;<svg className='absolute inset-0 w-full h-full opacity-20'>;
          <defs>;
            <linearGradient;
              id='neuralGradient';
              x1='0%';
              y1='0%';
              x2='100%';
=======
<svg className='absolute inset-0 w-full h-full opacity-20'    />
          <defs    />
            <linearGradient;
id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'

>>>>>>> origin/chore/fix-lint-and-merge
=======

              y2='100%'>;
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0 && 0.5' />;
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0 && 0.3' />;
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0 && 0.5' />;
            </linearGradient>;
          </defs>;
          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className='absolute w - 2 h - 2 bg - gradient - to - r from - cyan - 400 to - purple - 400 rounded - full';
            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
rotate: [0, 360],            }}            style={{
              left: `${Math.random () * 100}%`,
              top: `${Math.random () * 100}%`;
            }}
            animate={{
              scale: [0, 1, 0];
              opacity: [0, 0.8, 0];
              rotate: [0, 360];
            }}
              duration: 5 + Math.random() * 3
              repeat: Infinity
              delay: Math.random() * 5

            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',            }}              ease: "easeInOut"
            }}
          />))}
        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',            }}

            }}

          />
        ))}

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full opacity-20'>

          <defs>
            <linearGradient
              id='neuralGradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0.5' />
              <stop offset='50%' stopColor='#06b6d4' stopOpacity='0.3' />
              <stop offset='100%' stopColor='#ec4899' stopOpacity='0.5' />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              key={`neural-${i}`}
              cx={`${20 + i * 10}%`}
              cy={`${30 + i * 5}%`}
              r='3';
<<<<<<< HEAD
            <linearGradient'
              id='neuralGradient''
              x1='0%''
              y1='0%''
              x2='100%'`
              key={`neural-${i}`}`
              cx={`${20 + i * 10}%`}`
              cy={`${30 + i * 5}%`}'
              r='3';'
              fill='url (#neural_gradient)';
=======
              fill='url (#neural_gradient)';

>>>>>>> origin/chore/fix-lint-and-merge
              animate={{
<<<<<<< HEAD
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>

        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
                r: [3, 6, 3]
                opacity: [0.3, 0.8, 0.3],              }}          <defs>
=======

<<<<<<< HEAD
                }

<<<<<<< HEAD
                ease: 'easeInOut',              }}

              }}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;
          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],              }}          <defs>;
            <linear_gradient id="neural_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;
              <stop offset="0%" stop_color="#8b5cf6" stop_opacity="0.5" />;
              <stop offset="50%" stop_color="#06b6d4" stop_opacity="0.3" />;
              <stop offset="100%" stop_color="#ec4899" stop_opacity="0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (
            <motion.circle;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3";
              fill="url (#neural_gradient)";
              animate={{


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              }}
              transition={{

                duration: 4,
                repeat: Infinity,

                ease: 'easeInOut',              }}                ease: "easeInOut"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                delay: i * 0.5,
                ease: "easeInOut"

              }}
            />;
          ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

            />
        </svg>;
        {/* Holographic Effects */}<div className='absolute inset-0'>;
                ease: 'easeInOut',              }}}}/>;
          ))}
        </svg>

<<<<<<< HEAD
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
=======
        {/* Holographic Effects */}
        </svg>;
        {/* Holographic Effects */}<div className='absolute inset-0'>;
                ease: 'easeInOut',              }}}}/>;
          ))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset-0'>;
<<<<<<< HEAD
<div className='absolute inset-0'>;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full';
                delay: i * 0.5,ease: 'easeInOut',              }}                ease: "easeInOut";
=======
          <motion&& motion.div
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,

          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
                delay: i * 0.5,
                ease: 'easeInOut',              }}                ease: "easeInOut";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset - 0'>;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';
<<<<<<< HEAD
              key={`neural-${i}`}
              cx={`${20 + (i * 10)}%`}
              cy={`${30 + (i * 5)}%`}
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
=======
            animate={{
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              scale: [1, 1 && 1.1, 1],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
<<<<<<< HEAD
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
            animate={{
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{
              duration: 15,
              repeat: Infinity,

            }}

              duration: 15,
              repeat: Infinity,
              ease: 'linear',              ease: "linear"
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1];

<<<<<<< HEAD
              ease: 'linear',          <motion.div;
            className="absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full";
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
ease: "linear"
            }}
          />;
          <motion&& motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
          />;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 48 h - 48 border border - purple - 500 / 30 rounded - full';
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1],            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',            }}            }}
          />;
          <motion.div;
            className="absolute top - 1/4 left - 1/4 w - 48 h - 48 border border - purple - 500 / 30 rounded - full";
            animate={{
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1];
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            }}

            }}

<<<<<<< HEAD
=======
          />;
        </div>;


        {/* Data Streams */}



              duration: 15,
              repeat: Infinity,

            }}


              duration: 15,
              repeat: Infinity,


            }}


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          />
        </div>
            animate={{animate={{scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{duration: 15,repeat: Infinity,}}duration: 15,repeat: Infinity,ease: 'linear',              ease: "linear";
              scale: [1, 1.1, 1],rotate: [0, 90, 180, 270, 360],opacity: [0.1, 0.3, 0.1],}}
            transition={{duration: 20,repeat: Infinity,ease: 'linear',}}
          />;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full';
            animate={{scale: [1, 1.2, 1],rotate: [360, 270, 180, 90, 0],opacity: [0.1, 0.4, 0.1],}}
            transition={{duration: 15,repeat: Infinity,ease: 'linear',}}}}/>;
        </div>;
        {/* Data Streams */}
<<<<<<< HEAD
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>;
          {[...Array(20)].map((_, i) => (<motion.div;
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
=======
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>



          {[...Array(20)].map((_, i) => (
            <motion.div
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

<<<<<<< HEAD
        {/* Data Streams */}
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key = $2;
                top: `${i * 5}%`

}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: Math.random() * 2,
              animate={{"
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">"
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />"
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />"
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle;
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3],              }}          <defs>;"
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">;"
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0 && 0.5" />;"
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0 && 0.3" />;"
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0 && 0.5" />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle;
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],              }}          <defs>;"
            <linear_gradient id="neural_gradient" x1="0%" y1="0%" x2="100%" y2="100%">;"
              <stop offset="0%" stop_color="#8b5cf6" stop_opacity="0.5" />;"
              <stop offset="50%" stop_color="#06b6d4" stop_opacity="0.3" />;"
              <stop offset="100%" stop_color="#ec4899" stop_opacity="0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (
            <motion.circle;`
              key={`neural-${i}`}`
              cx={`${20 + (i * 10)}%`}`
              cy={`${30 + (i * 5)}%`}"
              r="3";"
              fill="url (#neural_gradient)";
              animate={{}
                delay: i * 0 && 0.5,'"
                ease: 'easeInOut',              }}                ease: "easeInOut"
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],
=======
                r: [3, 6, 3]}
                opacity: [0.3, 0.8, 0.3]}
>>>>>>> origin/chore/fix-lint-and-merge
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5}
ease: 'easeInOut'}
              }}

               />;
          ))}
        {/* Holographic Effects */}
        <div className='absolute inset-0'    />;
          <motion&& motion.div;
                ease: 'easeInOut'              }}}}   />;
          ))}
        {/* Holographic Effects */}'
        <div className='absolute inset-0'>;
          <motion&& motion.div'
                ease: 'easeInOut',              }}

        </svg>

        {/* Holographic Effects */}
<<<<<<< HEAD
        <div className="absolute inset-0>
          <motion.div
            className=absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear
            }}
          />
          
          <motion.div
            className=absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
            animate={{
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{
              duration: 15,
              repeat: Infinity}}

              duration: 15,
              repeat: Infinity,
              ease: linear,              ease: "linear
            }}

            }}

          />
        </div>
            animate={{animate={{scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{duration: 15,repeat: Infinity}}duration: 15,repeat: Infinity,ease: 'linear',              ease: linear";
              scale: [1, 1.1, 1],rotate: [0, 90, 180, 270, 360],opacity: [0.1, 0.3, 0.1]}}
            transition={{duration: 20,repeat: Infinity,ease: linear}}
          />;
          <motion.div;
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full';
            animate={{scale: [1, 1.2, 1],rotate: [360, 270, 180, 90, 0],opacity: [0.1, 0.4, 0.1]}}
            transition={{duration: 15,repeat: Infinity,ease: linear}}}}/>;
        </div>;
        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>;
          {[...Array(20)].map((_, i) => (<motion.div;
              key={`stream-${i}`}
              className=absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent;
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;
              key={`stream-${i}`}
              className=absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent;
              style={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition = $2;
              repeat: Infinity,
              ease: "linear
            }}
          />
        </div>

        {/* Data Streams */}
        <div className=absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key = $2;
                top: `${i * 5}%`

}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3]
              }}
              transition = $2;
                repeat: Infinity,
                delay: Math.random() * 2,
              animate={{"
            <linearGradient id=neuralGradient x1="0%" y1=0% x2="100%" y2=100%>"
              <stop offset="0% stopColor=#8b5cf6" stopOpacity="0.5 />
              <stop offset="50%" stopColor=#06b6d4 stopOpacity="0.3" />
              <stop offset=100%" stopColor="#ec4899 stopOpacity=0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <motion.circle;
                r: [3, 6, 3],
                opacity: [0 && 0.3, 0 && 0.8, 0 && 0.3]}}          <defs>;"
            <linearGradient id=neuralGradient x1="0%" y1=0% x2="100%" y2=100%>;"
              <stop offset="0% stopColor=#8b5cf6" stopOpacity="0 && 0.5 />;
              <stop offset="50%" stopColor=#06b6d4 stopOpacity="0 && 0.3" />;
              <stop offset=100%" stopColor="#ec4899 stopOpacity=0 && 0.5" />;
            </linearGradient>;
          </defs>;

          {[...Array(8)].map((_, i) => (;
            <motion&& motion.circle;
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]}}          <defs>;"
            <linear_gradient id=neural_gradient x1="0%" y1=0% x2="100%" y2=100%>;"
              <stop offset="0% stop_color=#8b5cf6" stop_opacity="0.5 />;
              <stop offset="50%" stop_color=#06b6d4 stop_opacity="0.3" />;
              <stop offset=100%" stop_color="#ec4899 stop_opacity=0.5" />;
            </linear_gradient>;
          </defs>;
          {[...Array (8)].map ((_, i) => (
            <motion.circle;`
              key={`neural-${i}`}`
              cx={`${20 + (i * 10)}%`}`
              cy={`${30 + (i * 5)}%`}"
              r=3;"
              fill="url (#neural_gradient);
              animate={{}
                delay: i * 0 && 0.5,'
                ease: 'easeInOut}}                ease: "easeInOut"
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3]}}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
ease: easeInOut',
origin/cursor/automate-test-improve-and-merge-code-2533
              }}
            />;
          ))}
        {/* Holographic Effects */}'
        <div className=absolute inset-0>;
          <motion&& motion.div'
                ease: 'easeInOut}}

                ease: easeInOut
              }}
            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className='absolute inset-0'>

                ease: easeInOut'}}


              }}

              }}

            />
          ))}
        </svg>

        {/* Holographic Effects */}'
        <div className='absolute inset-0'>


<div className='absolute inset-0'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
                delay: i * 0.5,'"
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </svg>;
        {/* Holographic Effects */}
        <div className=absolute inset - 0'>;
          <motion.div;'
            className=absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full;
            animate={{}
            animate={{}
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1];
            }}
            transition={{}
              duration: 15,
              repeat: Infinity}}

              duration: 15,
              repeat: Infinity,'
              ease: 'linear,              ease: "linear"
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.1, 0.3, 0.1]}}
            transition={{
              duration: 20,
              repeat: Infinity,
ease: linear'}}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0],
              opacity: [0.1, 0.4, 0.1]}}
            transition={{
              duration: 15,
              repeat: Infinity,
ease: linear',
origin/cursor/automate-test-improve-and-merge-code-2533
            }}

            }} />
        </div>
        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'>
          {[...Array(20)].map((_, i) => (
            <motion.div;`
              key={`stream-${i}`}'
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{}`
                right: `${Math.random() * 32}px``
                top: `${i * 5}%`'
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (
            <motion.div;`
              key={`stream-${i}`}'
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{}
            <motion.div;`
                right: `${Math.random () * 32}px`,`
                top: `${i * 5}%`,
              }}
              animate={{}
                height: [8, 32, 8],`
                top: `${i * 5}%``
                right: `${Math.random () * 32}px`,`
                top: `${i * 5}%`;
              }}
=======

<div className='absolute inset-0'    />
          <motion.div;
className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
                delay: i * 0.5,"
                ease: 'easeInOut'              }}                ease: \'easeInOut\';

              }}
               />))}
        </svg>;
        {/* Holographic Effects */}
        <div className='absolute inset - 0'    />;
          <motion.div;
            className='absolute top - 1/4 left - 1/4 w - 64 h - 64 border border - cyan - 500 / 30 rounded - full';

            animate={{

              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360]}
              opacity: [0.1, 0.3, 0.1]}
            }}
            transition={{
              duration: 20,
              repeat: Infinity}
ease: 'linear'}
            }}
             />
          <motion.div;
className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [360, 270, 180, 90, 0]}
              opacity: [0.1, 0.4, 0.1]}
            }}
            transition={{
              duration: 15,
              repeat: Infinity}
ease: 'linear'}
            }}

            }}

             />
        </div>

        {/* Data Streams */}
<div className='absolute right-0 top-0 w-32 h-full opacity-30'    />;
          {[...Array(20)].map((_, i) => (<motion.div;}
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';

              style={{}
                right: `${Math.random() * 32}px`
                top: `${i * 5}%`

              
}
>>>>>>> origin/chore/fix-lint-and-merge
              animate={{
                height: [8, 32, 8]}
                opacity: [0.3, 1, 0.3]}
=======

                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`,


              }}
              animate={{
                height: [8, 32, 8]
                opacity: [0.3, 1, 0.3],              }}          {[...Array(20)].map((_, i) => (
        <div className="absolute right-0 top-0 w-32 h-full opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
                right: `${Math.random () * 32}px`,
<<<<<<< HEAD
right: `${Math.random () * 32}px`,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                top: `${i * 5}%`,
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0.3, 1, 0.3],              }}          {[...Array (20)].map ((_, i) => (
            <motion.div;
              r="3"
              fill="url(#neuralGradient)"
              animate={{
                r: [3, 6, 3];
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 4
                repeat: Infinity
                delay: i * 0.5
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
        {/* Holographic Effects */}
        <div className='absolute inset-0'>
                r: [3, 6, 3],
                opacity: [0.3, 0.8, 0.3],              }}

              }}

              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </svg>

        {/* Holographic Effects */}
        <div className='absolute inset-0'>

          <motion.div
            className='absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full'
            animate={{
              scale: [1, 1.1, 1]
              rotate: [0, 90, 180, 270, 360]
              opacity: [0.1, 0.3, 0.1],            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear',          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1];
              rotate: [0, 90, 180, 270, 360];
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 20
              repeat: Infinity
              ease: 'linear'
            }}
          />
          <motion.div
            className='absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full'
            animate={{
              scale: [1, 1.2, 1]
              rotate: [360, 270, 180, 90, 0]
              opacity: [0.1, 0.4, 0.1],            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',            }}            }}
          />
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 border border-purple-500/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1];
              rotate: [360, 270, 180, 90, 0];
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 15
              repeat: Infinity
              ease: 'linear',              ease: "linear"
            }}
              duration: 15,
              repeat: Infinity,

            }}

              duration: 15,
              repeat: Infinity,
              ease: 'linear',              ease: "linear"
            }}

            }}

          />
        </div>
        {/* Data Streams */}
        <div className='absolute right-0 top-0 w-32 h-full opacity-30'>

          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`stream-${i}`}
              className="absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent";
              style={{
<<<<<<< HEAD
=======

                right: `${Math && Math.random() * 32}px`,
                top: `${i * 5}%`,
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                right: `${Math.random() * 32}px`
                top: `${i * 5}%`
                right: `${Math.random() * 32}px`,
                top: `${i * 5}%`,
              }}
              animate={{
                height: [8, 32, 8],
                opacity: [0 && 0.3, 1, 0 && 0.3],              }}          {[...Array(20)].map((_, i) => (;
            <motion&& motion.div
              key={`stream-${i}`}
              className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                right: `${Math && Math.random() * 32}px`,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                top: `${i * 5}%`
                right: `${Math.random () * 32}px`,
                top: `${i * 5}%`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              }}
              animate={{
<<<<<<< HEAD


              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
<<<<<<< HEAD
                delay: Math.random() * 2,'
                ease: 'easeInOut',              }}

"ease": 'easeInOut','
=======
                delay: Math.random() * 2
}
ease: 'easeInOut'}
>>>>>>> origin/chore/fix-lint-and-merge
              }}



              }}



<<<<<<< HEAD
               />
          ))}
        </div>
      </div>
<<<<<<< HEAD
    </>
              style={{right: `${Math.random() * 32}px`;
                top: `${i * 5}%`;
        <div className='absolute right - 0 top - 0 w - 32 h - full opacity - 30'>;
          {[...Array (20)].map ((_, i) => (<motion.div;
              key={`stream-${i}`}
              className='absolute w - 1 h - 8 bg - gradient - to - b from - purple - 400 to - transparent';
              style={{<motion.div;
                right: `${Math.random () * 32}px`,top: `${i * 5}%`,}}
              animate={{height: [8, 32, 8],top: `${i * 5}%`;
                right: `${Math.random () * 32}px`,top: `${i * 5}%`;}}
              animate={{height: [8, 32, 8],opacity: [0.3, 1, 0.3],}}
              animate={{transition={{duration: 2 + Math.random() * 2,repeat: Infinity,delay: Math.random() * 2,ease: 'easeInOut',              }}ease: 'easeInOut',}}}}/>;
=======
            />
          ))}


                duration: 2 + Math && Math.random() * 2,
                repeat: Infinity,
                delay: Math && Math.random() * 2,
                ease: 'easeInOut',              }}                ease: "easeInOut"
                height: [8, 32, 8];
                opacity: [0.3, 1, 0.3];
              }}
              transition={{
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );

<<<<<<< HEAD
                duration: 2 + Math.random() * 2
                repeat: Infinity
                delay: Math.random() * 2
                ease: 'easeInOut',              }}                ease: "easeInOut"


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
<<<<<<< HEAD
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
                ease: 'easeInOut',              }}

              }}

            />
          ))}
        </div>
      </div>
    </>
);  )
}
  );
=======



              }}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          ))}
        </div>;
      </div>;
    </>;
<<<<<<< HEAD
))height: [8, 32, 8];
                opacity: [0 && 0.3, 1, 0 && 0.3];
);  )
                height: [8, 32, 8]
                opacity: [0 && 0.3, 1, 0 && 0.3]
              }}
              transition={{ease: 'easeInOut',              }}                ease: "easeInOut";
              transition={{'"
                ease: 'easeInOut',              }}                ease: "easeInOut"
              }}
            />;
          ))}
        </div>;
      </div>;
    </>;
  ))}
  )}
                delay: Math.random () * 2,ease: 'easeInOut',              }}                ease: "easeInOut";
                delay: Math.random () * 2,'"
=======
  );  );
}
  )
}
                delay: Math.random () * 2,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                ease: 'easeInOut',              }}                ease: "easeInOut";
              }}
            />))}
        </div>;
      </div>;
    </>));
}

  );
    </>))}))
  )
}
);
origin/cursor/automate-test-improve-and-merge-code-2533
);
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
);

"
=======
    <   />

);

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
<<<<<<< HEAD
const UltraFuturisticBackground2040: React.FC = () => {
    canvas.height = window.innerHeight;
    let animationFrameId: number,
    let time = 0;
    // Particle system
    const particles: Array<{
const UltraFuturisticBackground2040: React.FC = () => {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {;
    const canvas = canvasRef && canvasRef.current;
    if (!canvas) return;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = window && window.innerWidth;
    canvas && canvas.height = window && window.innerHeight,;
    let animationFrameId: number;    let animationFrameId: number,;
    let time = 0;
    // Particle system;
    const particles: Array<{;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      x: number;
      y: number;
  const canvas_ref = useRef < HTMLCanvasElement>(null);
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
    canvas.width = window.inner_width;
    canvas.height = window.inner_height,
    let animationFrameId: number;    let animationFrameId: number,
    let time = 0;
;
    // Particle system;
    const particles: Array<{
      coordinate_x: number;
      coordinate_y: number;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const UltraFuturisticBackground2040: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    let animationFrameId: number;    let animationFrameId: number
    let time = 0;
    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      opacity: number;
    }> = [];
<<<<<<< HEAD
<<<<<<< HEAD
    canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,

    let animationFrameId: number
    let time = 0

    // Particle system
    const particles: Array<{
      x: number,
      y: number,
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      x: number,
      y: number,
=======
;
    // Initialize particles;
    for (let index = 0; i < 100; i++) {      particles.push ({      coordinate_x: number,
      coordinate_y: number,
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      vx: number,
      vy: number,
      size: number,
      color: string,

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)],
<<<<<<< HEAD
<<<<<<< HEAD
        opacity: Math.random() * 0.5 + 0.1
      })
    }
const animate = () => {
    // Initialize particles
    for (let i = 0; i < 100; i++) {      particles.push({      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
    }> = [];
    // Initialize particles
    for (let i = 0, i < 100, i++) {
        x: Math.random() * canvas.width
        y: Math.random() * canvas.height
        vx: (Math.random() - 0.5) * 0.5
        vy: (Math.random() - 0.5) * 0.5
        size: Math.random() * 2 + 1
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][
          Math.floor(Math.random() * 4)
        ]
        opacity: Math.random() * 0.5 + 0.1
      });    }
    const animate = () => {
      time += 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor(Math.random() * 4)]
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        opacity: Math.random() * 0.5 + 0.1
      })
    }
    const animate = () => {
      time += 0.01;
<<<<<<< HEAD
<<<<<<< HEAD
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.opacity;
<<<<<<< HEAD
<<<<<<< HEAD
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();      });
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        // Glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ctx.restore()
      });
      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
      ctx.lineWidth = 0.5;
<<<<<<< HEAD
<<<<<<< HEAD
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
=======

      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      for (let i = 0, i < particles.length, i++) {
        for (let j = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ctx.stroke()

          }
        }
      }
<<<<<<< HEAD


=======
=======
            ctx.stroke();          }            ctx.stroke()
          }
        }
      }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ctx.stroke();          }

          }



<<<<<<< HEAD
<<<<<<< HEAD
        }
      }

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        }
      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        }
      }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;

      
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
      
      for (let x = offset, x < canvas.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke()
      }
      
      for (let y = offset, y < canvas.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
<<<<<<< HEAD
<<<<<<< HEAD
            ctx.stroke()
          }
        }
      }
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();          }            ctx.stroke()
          }
        }
      }
            ctx.stroke();          }

          }

        }
      }

      // Draw animated grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
];
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();      }
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();      }
      // Draw floating geometric shapes
      const shapes = [        ctx.stroke()
      }
      // Draw floating geometric shapes
      const shapes = [
        {
          x: canvas.width * 0.2
          y: canvas.height * 0.3
          size: 60
          rotation: time * 0.5
        }
        {
          x: canvas.width * 0.8
          y: canvas.height * 0.7
          size: 40
          rotation: time * -0.3
        }
        {
          x: canvas.width * 0.6
          y: canvas.height * 0.2
          size: 50
          rotation: time * 0.7
        },      ];        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 }
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 }
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ctx.stroke()
      }

      // Draw floating geometric shapes
      const shapes = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        { x: canvas.width * 0.6, y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
      ];
      shapes.forEach((shape, index) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Initialize particles;
    for (let i = 0; i < 100; i++) {      particles && particles.push({      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      opacity: number;
    }> = [];
    // Initialize particles;
    for (let i = 0, i < 100, i++) {;
        x: Math && Math.random() * canvas && canvas.width,;
        y: Math && Math.random() * canvas && canvas.height,;
        vx: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        vy: (Math && Math.random() - 0 && 0.5) * 0 && 0.5,;
        size: Math && Math.random() * 2 + 1,;
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][;
          Math && Math.floor(Math && Math.random() * 4);
        ],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1,;
      });    }
    const animate = () => {;
      time += 0 && 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math && Math.floor(Math && Math.random() * 4)],;
        opacity: Math && Math.random() * 0 && 0.5 + 0 && 0.1;
      });
    }
    const animate = () => {;
      time += 0 && 0.01;
      // Clear canvas with fade effect;
      ctx && ctx.fillStyle = 'rgba(0, 0, 0, 0 && 0.05)';
      ctx && ctx.fillRect(0, 0, canvas && canvas.width, canvas && canvas.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.x += particle && particle.vx;
        particle && particle.y += particle && particle.vy;
        // Wrap around edges;
        if (particle && particle.x < 0) particle && particle.x = canvas && canvas.width;
        if (particle && particle.x > canvas && canvas.width) particle && particle.x = 0;
        if (particle && particle.y < 0) particle && particle.y = canvas && canvas.height;
        if (particle && particle.y > canvas && canvas.height) particle && particle.y = 0;
        // Draw particle with glow effect;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = particle && particle.opacity;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;        ;
        // Glow effect;
        ctx && ctx.shadowColor = particle && particle.color;
        ctx && ctx.shadowBlur = 10;
        ctx && ctx.arc(particle && particle.x, particle && particle.y, particle && particle.size, 0, Math && Math.PI * 2);
        ctx && ctx.fillStyle = particle && particle.color;
        ctx && ctx.fill();
        ctx && ctx.restore();      });        ;
        ctx && ctx.restore();
      });
      // Draw connecting lines between nearby particles;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.1)';
      ctx && ctx.lineWidth = 0 && 0.5;
      for (let i = 0; i < particles && particles.length; i++) {;
        for (let j = i + 1; j < particles && particles.length; j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);      ;
      for (let i = 0, i < particles && particles.length, i++) {;
        for (let j = i + 1, j < particles && particles.length, j++) {;
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math && Math.sqrt(dx * dx + dy * dy);
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(particles[i].x, particles[i].y);
            ctx && ctx.lineTo(particles[j].x, particles[j].y);
            ctx && ctx.stroke();          }            ctx && ctx.stroke();
          }
        }
      }
      // Draw animated grid;
      ctx && ctx.strokeStyle = 'rgba(6, 182, 212, 0 && 0.05)';
      ctx && ctx.lineWidth = 0 && 0.5;
      const gridSize = 50;
      const offset = (time * 20) % gridSize;
      for (let x = offset; x < canvas && canvas.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, canvas && canvas.height);
        ctx && ctx.stroke();      }
      for (let y = offset; y < canvas && canvas.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(canvas && canvas.width, y);
        ctx && ctx.stroke();      }
      // Draw floating geometric shapes;
      const shapes = [        ctx && ctx.stroke();
      }
      // Draw floating geometric shapes;
      const shapes = [;
        {;
          x: canvas && canvas.width * 0 && 0.2,;
          y: canvas && canvas.height * 0 && 0.3,;
          size: 60,;
          rotation: time * 0 && 0.5,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.8,;
          y: canvas && canvas.height * 0 && 0.7,;
          size: 40,;
          rotation: time * -0 && 0.3,;
        },;
        {;
          x: canvas && canvas.width * 0 && 0.6,;
          y: canvas && canvas.height * 0 && 0.2,;
          size: 50,;
          rotation: time * 0 && 0.7,;
        },      ];        { x: canvas && canvas.width * 0 && 0.2, y: canvas && canvas.height * 0 && 0.3, size: 60, rotation: time * 0 && 0.5 },;
        { x: canvas && canvas.width * 0 && 0.8, y: canvas && canvas.height * 0 && 0.7, size: 40, rotation: time * -0 && 0.3 },;
        { x: canvas && canvas.width * 0 && 0.6, y: canvas && canvas.height * 0 && 0.2, size: 50, rotation: time * 0 && 0.7 }
      ];
      shapes && shapes.forEach((shape, index) => {;
        ctx && ctx.save();
        ctx && ctx.translate(shape && shape.x, shape && shape.y);
        ctx && ctx.rotate(shape && shape.rotation);
        ctx && ctx.strokeStyle = `rgba(139, 92, 246, ${0 && 0.1 + Math && Math.sin(time + index) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 2;
        if (index === 0) {;
          // Square;
          ctx && ctx.strokeRect(;
            -shape && shape.size / 2,;
            -shape && shape.size / 2,;
            shape && shape.size,;
            shape && shape.size;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          );
        } else if (index === 1) {;
          // Circle;
          ctx && ctx.beginPath();
          ctx && ctx.arc(0, 0, shape && shape.size / 2, 0, Math && Math.PI * 2);
          ctx && ctx.stroke();
        } else {;
          // Triangle;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, -shape && shape.size / 2);
          ctx && ctx.lineTo(shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.lineTo(-shape && shape.size / 2, shape && shape.size / 2);
          ctx && ctx.closePath();
          ctx && ctx.stroke();
        }
<<<<<<< HEAD
<<<<<<< HEAD
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        if (index === 0) {
          // Square
ctx.beginPath();
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;

        ctx.lineWidth = 2;
        if (index === 0) {
          // Square
<<<<<<< HEAD
<<<<<<< HEAD
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size)
        } else if (index === 1) {
          // Circle
          ctx.beginPath();
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
          ctx.stroke()
      opacity: number;
    }> = [];
;
    // Initialize particles;
    for (let index = 0, i < 100, i++) {
        coordinate_x: Math.random () * canvas.width,
        coordinate_y: Math.random () * canvas.height,
        vx: (Math.random () - 0.5) * 0.5,
        vy: (Math.random () - 0.5) * 0.5,
        size: Math.random () * 2 + 1,
        color: ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'][;
          Math.floor (Math.random () * 4);
        ],
        opacity: Math.random () * 0.5 + 0.1,
      });    }
    const animate = () =>: any {
      time += 0.01;        color: ['#06b6d4#3b82f6#8b5cf6#ec4899'][Math.floor (Math.random () * 4)],
        opacity: Math.random () * 0.5 + 0.1;
      });
    }
    const animate = () =>: any {
      time += 0.01;
;
      // Clear canvas with fade effect;
      ctx.fill_style = 'rgba (0, 0, 0, 0.05)';
      ctx.fill_rect (0, 0, canvas.width, canvas.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
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
        // Draw particle with glow effect;
        ctx.save ();
        ctx.global_alpha = particle.opacity;
;
        // Glow effect;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 10; ;
        // Glow effect;
        ctx.shadow_color = particle.color;
        ctx.shadow_blur = 10;
;
        ctx.arc (particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill_style = particle.color;
        ctx.fill ();
;
        ctx.restore ();      }); ;
        ctx.restore ();
      });
;
      // Draw connecting lines between nearby particles;
      ctx.stroke_style = 'rgba (6, 182, 212, 0.1)';
      ctx.line_width = 0.5;
;
      for (let index = 0; i < particles.length; i++) {
        for (let inner_index = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy); ;
      for (let index = 0, i < particles.length, i++) {
        for (let inner_index = i + 1, j < particles.length, j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt (dx * dx + dy * dy);
;
            ctx.begin_path ();
            ctx.move_to (particles[i].x, particles[i].y);
            ctx.line_to (particles[j].x, particles[j].y);
            ctx.stroke ();          }            ctx.stroke ();
          }
        }
      }
      // Draw animated grid;
      ctx.stroke_style = 'rgba (6, 182, 212, 0.05)';
      ctx.line_width = 0.5;
;
      const grid_size = 50;
      const offset = (time * 20) % grid_size;
;
      for (let coordinate_x = offset; x < canvas.width; x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, canvas.height);
        ctx.stroke ();      }
      for (let coordinate_y = offset; y < canvas.height; y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (canvas.width, y);
        ctx.stroke ();      }
      // Draw floating geometric shapes;
      const shapes = [        ctx.stroke ();
      }
      // Draw floating geometric shapes;
      const shapes = [;
        {
          coordinate_x: canvas.width * 0.2,
          coordinate_y: canvas.height * 0.3,
          size: 60,
          rotation: time * 0.5,
        },
        {
          coordinate_x: canvas.width * 0.8,
          coordinate_y: canvas.height * 0.7,
          size: 40,
          rotation: time * -0.3,
        },
        {
          coordinate_x: canvas.width * 0.6,
          coordinate_y: canvas.height * 0.2,
          size: 50,
          rotation: time * 0.7,
        },      ];        { coordinate_x: canvas.width * 0.2, coordinate_y: canvas.height * 0.3, size: 60, rotation: time * 0.5 },
        { coordinate_x: canvas.width * 0.8, coordinate_y: canvas.height * 0.7, size: 40, rotation: time * -0.3 },
        { coordinate_x: canvas.width * 0.6, coordinate_y: canvas.height * 0.2, size: 50, rotation: time * 0.7 }
      ];
;
      shapes.for_each ((shape, index) => {
        ctx.save ();
        ctx.translate (shape.x, shape.y);
        ctx.rotate (shape.rotation);
;
        ctx.stroke_style = `rgba (139, 92, 246, ${0.1 + Math.sin (time + index) * 0.05})`;
        ctx.line_width = 2;
;
        // Check condition
if ( {) {
  $2
}
          // Square;
          ctx.stroke_rect (
            -shape.size / 2,
            -shape.size / 2,
            shape.size,
            shape.size);
        } else // Check condition
if ( {) {
  $2
}
          // Circle;
          ctx.begin_path ();
          ctx.arc (0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.stroke ();
        } else {
          // Triangle;
          ctx.begin_path ();
          ctx.move_to (0, -shape.size / 2);
          ctx.line_to (shape.size / 2, shape.size / 2);
          ctx.line_to (-shape.size / 2, shape.size / 2);
          ctx.close_path ();
          ctx.stroke ();
        }
        ctx.restore ();      });
;
      // Draw energy waves;
      const wave_count = 3;
      for (let index = 0; i < wave_count; i++) {        ctx.stroke_style = `rgba (139, 92, 246, ${0.1 + Math.sin (time + index) * 0.05})`;
        ctx.line_width = 2;
;
        // Check condition
if ( {) {
  $2
}
          // Square;
          ctx.stroke_rect (-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else // Check condition
if ( {) {
  $2
}
          // Circle;
          ctx.begin_path ();
          ctx.arc (0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.stroke ();
        } else {
          // Triangle;
          ctx.begin_path ();
          ctx.move_to (0, -shape.size / 2);
          ctx.line_to (shape.size / 2, shape.size / 2);
          ctx.line_to (-shape.size / 2, shape.size / 2);
          ctx.close_path ();
          ctx.stroke ();
        }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ctx && ctx.restore();      });
      // Draw energy waves;
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {        ctx && ctx.strokeStyle = `rgba(139, 92, 246, ${0 && 0.1 + Math && Math.sin(time + index) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 2;
        if (index === 0) {;
          // Square;
          ctx && ctx.strokeRect(-shape && shape.size/2, -shape && shape.size/2, shape && shape.size, shape && shape.size);
        } else if (index === 1) {;
          // Circle;
          ctx && ctx.beginPath();
          ctx && ctx.arc(0, 0, shape && shape.size/2, 0, Math && Math.PI * 2);
          ctx && ctx.stroke();
        } else {;
          // Triangle;
          ctx && ctx.beginPath();
          ctx && ctx.moveTo(0, -shape && shape.size/2);
          ctx && ctx.lineTo(shape && shape.size/2, shape && shape.size/2);
          ctx && ctx.lineTo(-shape && shape.size/2, shape && shape.size/2);
          ctx && ctx.closePath();
          ctx && ctx.stroke();
        }
        ctx && ctx.restore();
      });
      // Draw energy waves;
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {;
        const waveOffset = (time * 100 + i * 200) % (canvas && canvas.width + 200);
        const waveY = canvas && canvas.height * 0 && 0.5 + Math && Math.sin(time * 2 + i) * 50;
        ctx && ctx.strokeStyle = `rgba(236, 72, 153, ${0 && 0.1 + Math && Math.sin(time + i) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 3;
        ctx && ctx.beginPath();
        for (let x = -100; x < canvas && canvas.width + 100; x += 5) {;
          const y = waveY + Math && Math.sin((x + waveOffset) * 0 && 0.02) * 20;
          if (x === -100) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }
        }
        ctx && ctx.stroke();
      }
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      for (let i = 0, i < waveCount, i++) {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ctx.strokeRect(
            -shape.size / 2
            -shape.size / 2
            shape.size
            shape.size
          );
        } else if (index === 1) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();      });
      // Draw energy waves
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 + Math.sin(time + index) * 0.05})`;
        ctx.lineWidth = 2;
        if (index === 0) {
          // Square
          ctx.strokeRect(-shape.size/2, -shape.size/2, shape.size, shape.size)
        } else if (index === 1) {
          // Circle
          ctx.beginPath();
          ctx.arc(0, 0, shape.size/2, 0, Math.PI * 2);
          ctx.stroke()
        } else {
          // Triangle
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.stroke()
        }
        ctx.restore()
      });
      // Draw energy waves
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
<<<<<<< HEAD
<<<<<<< HEAD
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = -100; x < canvas.width + 100; x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      animationFrameId = requestAnimationFrame(animate);    };        const waveOffset = (time * 100 + i * 200) % (canvas.width + 200);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        const waveY = canvas.height * 0.5 + Math.sin(time * 2 + i) * 50;
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.1 + Math.sin(time + i) * 0.05})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let x = -100, x < canvas.width + 100, x += 5) {
          const y = waveY + Math.sin((x + waveOffset) * 0.02) * 20;
          if (x === -100) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
animationFrameId = requestAnimationFrame(animate);    };        const waveOffset = (time * 100 + i * 200) % (canvas && canvas.width + 200);
        const waveY = canvas && canvas.height * 0 && 0.5 + Math && Math.sin(time * 2 + i) * 50;
        ctx && ctx.strokeStyle = `rgba(236, 72, 153, ${0 && 0.1 + Math && Math.sin(time + i) * 0 && 0.05})`;
        ctx && ctx.lineWidth = 3;
        ctx && ctx.beginPath();
        for (let x = -100, x < canvas && canvas.width + 100, x += 5) {;
          const y = waveY + Math && Math.sin((x + waveOffset) * 0 && 0.02) * 20;
          if (x === -100) {;
            ctx && ctx.moveTo(x, y);
          } else {;
            ctx && ctx.lineTo(x, y);
          }
        }
<<<<<<< HEAD
<<<<<<< HEAD
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight
    };
    window && window.addEventListener('resize', handleResize);
      />;
      {/* Overlay Gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />;
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />;
      {/* Floating Elements */}
      <div className='absolute inset-0'>;
        {/* Animated Grid Pattern */}
        <div className='absolute inset-0 opacity-20'>;
        ctx.stroke()
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;    };      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
=======
<<<<<<< HEAD
        ctx && ctx.stroke();
      }


      animationFrameId = requestAnimationFrame(animate);

    };

    animate();



    };

    window && window.addEventListener('resize', handleResize);



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      cancelAnimationFrame(animationFrameId);
    }
  }, []);
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{ zIndex: -1 }}
<<<<<<< HEAD
=======

      />;

      {/* Overlay Gradients */}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />;
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />;





<<<<<<< HEAD
      />
      {/* Overlay Gradients */}
      <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60' />

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Floating Elements */}
      <div className='absolute inset-0'>
        {/* Animated Grid Pattern */}
        <div className='absolute inset-0 opacity-20'>
          <div
            className='absolute top-0 left-0 w-full h-full'
            style={{
              backgroundImage: `

              linear-gradient(rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
        ctx.restore ();
      });
;
      // Draw energy waves;
      const wave_count = 3;
      for (let index = 0; i < wave_count; i++) {
        const wave_offset = (time * 100 + i * 200) % (canvas.width + 200);
        const wave_y = canvas.height * 0.5 + Math.sin (time * 2 + i) * 50;
;
        ctx.stroke_style = `rgba (236, 72, 153, ${0.1 + Math.sin (time + i) * 0.05})`;
        ctx.line_width = 3;
;
        ctx.begin_path ();
        for (let coordinate_x = -100; x < canvas.width + 100; x += 5) {
          const coordinate_y = wave_y + Math.sin ((x + wave_offset) * 0.02) * 20;
          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }
        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (animate);    }        const wave_offset = (time * 100 + i * 200) % (canvas.width + 200);
        const wave_y = canvas.height * 0.5 + Math.sin (time * 2 + i) * 50;
;
        ctx.stroke_style = `rgba (236, 72, 153, ${0.1 + Math.sin (time + i) * 0.05})`;
        ctx.line_width = 3;
;
        ctx.begin_path ();
        for (let coordinate_x = -100, x < canvas.width + 100, x += 5) {
          const coordinate_y = wave_y + Math.sin ((x + wave_offset) * 0.02) * 20;
          // Check condition
if ( {) {
  $2
}
            ctx.move_to (x, y);
          } else {
            ctx.line_to (x, y);
          }
        }
        ctx.stroke ();
      }
      animationFrameId = requestAnimationFrame (animate);
    }
;
    animate ();
;
    const handle_resize = () =>: any {
      canvas.width = window.inner_width;
      canvas.height = window.inner_height;    }      canvas.height = window.inner_height;
    }
;
    window.addEventListener ('resize', handle_resize);
;
    return () => {
      window.removeEventListener ('resize', handle_resize);
      cancelAnimationFrame (animationFrameId);
    }
  }, []);
;
  return (
    <div className='fixed inset - 0 pointer - events - none overflow - hidden'>;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='absolute inset - 0 w - full h - full';
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className='absolute inset - 0 bg - gradient - to - br from - black / 80 via - transparent to - black / 80' />;
      <div className='absolute inset - 0 bg - gradient - to - t from - black / 60 via - transparent to - black / 60' />;
      {/* Floating Elements */}
      <div className='absolute inset - 0'>;
        {/* Animated Grid Pattern */}
        <div className='absolute inset - 0 opacity - 20'>;
          <div;
            className='absolute top - 0 left - 0 w - full h - full';
            style={{
              background_image: `;
              linear - gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px),
              linear - gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            `,
              background_size: '50px 50px',
              animation: 'grid_move 20s linear infinite',
            }}
          />;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Floating Geometric Elements */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg';
          animate={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        {/* Floating Geometric Elements */}
        <motion.div;
          className='absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg';

          animate={{

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [0, 360],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.2, 0 && 0.4, 0 && 0.2],          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId)
    }
  }, []);
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">;
=======


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `
              backgroundSize: '50px 50px'
              animation: 'gridMove 20s linear infinite'
            }}
          />
        </div>
        {/* Floating Geometric Elements */}
        <motion.div
          className='absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.1, 1]
            opacity: [0.2, 0.4, 0.2],          }}
          transition={{
<<<<<<< HEAD
            duration: 8
            repeat: Infinity
            ease: 'linear',  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
<<<<<<< HEAD
=======

      />;
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />;
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Floating Elements */}
      <div className="absolute inset-0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">;
          <divclassName="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              linear-gradient(rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
              linear-gradient(90deg, rgba(6, 182, 212, 0 && 0.1) 1px, transparent 1px)
            `
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />;
        </div>;
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {/* Floating Geometric Elements */}
        <motion&& motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            ease: 'linear',  }, []);
;
  return (
    <div className="fixed inset - 0 pointer - events - none overflow - hidden">;
      {/* Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className="absolute inset - 0 w - full h - full";
        style={{ z_index: -1 }}
      />;
      {/* Overlay Gradients */}
      <div className="absolute inset - 0 bg - gradient - to - br from - black / 80 via - transparent to - black / 80" />;
      <div className="absolute inset - 0 bg - gradient - to - t from - black / 60 via - transparent to - black / 60" />;
      {/* Floating Elements */}
      <div className="absolute inset - 0">;
        {/* Animated Grid Pattern */}
        <div className="absolute inset - 0 opacity - 20">;
          <div className="absolute top - 0 left - 0 w - full h - full" style={{
            background_image: `;
              linear - gradient (rgba (6, 182, 212, 0.1) 1px, transparent 1px);
              linear - gradient (90deg, rgba (6, 182, 212, 0.1) 1px, transparent 1px);
            `;
            background_size: '50px 50px',
            animation: 'grid_move 20s linear infinite';
          }} />;
        </div>;
        {/* Floating Geometric Elements */}
        <motion.div;
          className="absolute top - 20 left - 20 w - 32 h - 32 border border - cyan - 400 / 20 rounded - lg";
          animate={{
<<<<<<< HEAD
        />;
        <motion&& motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full'
          animate={{
            rotate: [360, 0],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.2, 0 && 0.5, 0 && 0.2],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2];
        }
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    },

    animate(),

    const handleResize = () => {
      canvas.width = window.innerWidth,
      canvas.height = window.innerHeight
    },

    window.addEventListener('resize', handleResize),

    return () => {
      window.removeEventListener('resize', handleResize),
      cancelAnimationFrame(animationFrameId)
    }
  }, []),

  return (
    <div className=&quot;fixed inset-0 pointer-events-none overflow-hidden&quot;>
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className=&quot;absolute inset-0 w-full h-full&quot;
        style={{ zIndex: -1 }}
      />
      
      {/* Overlay Gradients */}
      <div className=&quot;absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80&quot; />
      <div className=&quot;absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60&quot; />
      
      {/* Floating Elements */}
      <div className=&quot;absolute inset-0&quot;>
        {/* Animated Grid Pattern */}
        <div className=&quot;absolute inset-0 opacity-20&quot;>
          <div className=&quot;absolute top-0 left-0 w-full h-full&quot; style={{
            backgroundImage: `
              linear-gradient(rgba(6, _182, _212, _0.1) 1px, _transparent 1px), _linear-gradient(90deg, _rgba(6, _182, _212, _0.1) 1px, _transparent 1px)
            `, _backgroundSize: '50px 50px', _animation: 'gridMove 20s linear infinite'}} />
        </div>
        
        {_/* Floating Geometric Elements */}
        <motion.div
          className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg&quot;
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]

          }}
          transition={{
            duration: 8,
            repeat: Infinity,
ease: "linear"
          }}
        />;
        <motion&& motion.div
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
        />;
        <motion.div;
          className='absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full';
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute top - 40 right - 32 w - 24 h - 24 border border - purple - 400 / 20 rounded - full";
          animate={{
<<<<<<< HEAD
=======

            duration: 10
            repeat: Infinity
            ease: 'linear'

          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        />;
        <motion&& motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45'
          animate={{
            rotate: [45, 405],
            scale: [1, 1 && 1.15, 1],
            opacity: [0 && 0.2, 0 && 0.3, 0 && 0.2],          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2];
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "linear"
          }}
        />;
        <motion&& motion.div
=======
            ease: "linear"
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ease: "linear"
          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
        />;
        <motion.div;
          className='absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45';
          animate={{
            rotate: [45, 405],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 32 left - 32 w - 40 h - 40 border border - pink - 400 / 20 transform rotate - 45";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
        />;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            duration: 12
            repeat: Infinity
            ease: 'linear'

          }}

        />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Additional Floating Elements */}
        <motion&& motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            rotate: [12, 372],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.15, 0 && 0.25, 0 && 0.15],          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            rotate: [12, 372],
            scale: [1, 1 && 1.1, 1],
            opacity: [0 && 0.15, 0 && 0.25, 0 && 0.15],          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}

            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.2, 0.3, 0.2];
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
<<<<<<< HEAD
<<<<<<< HEAD
ease: "linear"
          }}
        />;
=======
            ease: "linear"
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            ease: "linear"
          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Additional Floating Elements */}
        <motion&& motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
        />;
        {/* Additional Floating Elements */}
        <motion.div;
          className='absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 transform rotate - 12';
          animate={{
            rotate: [12, 372],
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
            ease: 'linear',          }}
        />;


        {/* Additional Floating Elements */}
        <motion.div;
          className="absolute top - 1/3 right - 1/4 w - 16 h - 16 border border - blue - 400 / 20 transform rotate - 12";
          animate={{
<<<<<<< HEAD
        />;
        <motion&& motion.div
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full'
          animate={{
            rotate: [0, 360],
            scale: [1, 1 && 1.2, 1],
            opacity: [0 && 0.15, 0 && 0.3, 0 && 0.15],          }}
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15];
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
<<<<<<< HEAD
ease: "linear"
          }}
        />;
        <motion&& motion.div
=======
            ease: "linear"
          }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
        />;
        <motion.div;
          className='absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 rounded - full';
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],          }}
          transition={{
            duration: 18,
            repeat: Infinity,
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60" />
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px);
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `;
            backgroundSize: '50px 50px'
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        {/* Floating Geometric Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.1, 1];
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full'
          animate={{
            rotate: [360, 0]
            scale: [1, 1.2, 1]
            opacity: [0.2, 0.5, 0.2],          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear',          }}
        />;
        <motion.div;
          className="absolute bottom - 1/3 right - 1/3 w - 20 h - 20 border border - green - 400 / 20 rounded - full";
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            rotate: [360, 0];
            scale: [1, 1.2, 1];
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10
            repeat: Infinity
            ease: 'linear'
          }}
        />
        <motion.div
          className='absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45'
          animate={{
            rotate: [45, 405]
            scale: [1, 1.15, 1]
            opacity: [0.2, 0.3, 0.2],          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
          animate={{
            rotate: [45, 405];
            scale: [1, 1.15, 1];
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 12
            repeat: Infinity
            ease: 'linear'
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className='absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12'
          animate={{
            rotate: [12, 372]
            scale: [1, 1.1, 1]
            opacity: [0.15, 0.25, 0.15],          }}
          transition={{
            duration: 15
            repeat: Infinity
            ease: 'linear',          }}
        />
        {/* Additional Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-400/20 transform rotate-12"
          animate={{
            rotate: [12, 372];
            scale: [1, 1.1, 1];
            opacity: [0.15, 0.25, 0.15]
            duration: 8,
            repeat: Infinity,
            ease: 'linear',

          }}
          transition={{
            duration: 8,
            repeat: Infinity,

          }}
          transition={{
            duration: 10,
            repeat: Infinity,

          }}
          transition={{
            duration: 12,
            repeat: Infinity,

          }}
          transition={{
            duration: 15
=======

            duration: 18
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

            duration: 18
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            repeat: Infinity
            ease: 'linear'

          }}

<<<<<<< HEAD
<<<<<<< HEAD
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full'
          animate={{
            rotate: [0, 360]
            scale: [1, 1.2, 1]
            opacity: [0.15, 0.3, 0.15],          }}
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear',          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-green-400/20 rounded-full"
          animate={{
            rotate: [0, 360];
            scale: [1, 1.2, 1];
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 18
            repeat: Infinity
            ease: 'linear'
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
=======
        />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        />;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Particle Effects */}
        <motion&& motion.div
          className='absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full'
          animate={{
<<<<<<< HEAD
<<<<<<< HEAD
            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            y: [0, -20, 0],
            opacity: [0 && 0.4, 0 && 0.8, 0 && 0.4],          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 3
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />
        {/* Particle Effects */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
          transition={{
            duration: 18,
            repeat: Infinity,


          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Particle Effects */}
        <motion&& motion.div
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400/40 rounded-full"
          animate={{
<<<<<<< HEAD
=======
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          }}
          transition={{

            duration: 3
            repeat: Infinity
            ease: 'easeInOut'

          }}

        />;
        <motion&& motion.div
          className='absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full'
          animate={{
            y: [0, -15, 0],
            opacity: [0 && 0.4, 0 && 0.7, 0 && 0.4],          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1,          }}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4]
        />;
        {/* Particle Effects */}
        <motion.div;
          className='absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',          }}
        />;
        {/* Particle Effects */}
        <motion.div;
          className="absolute top - 1/4 left - 1/3 w - 2 h - 2 bg - cyan - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -20, 0];
            opacity: [0.4, 0.8, 0.4];
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
<<<<<<< HEAD
<<<<<<< HEAD
        />;
        <motion&& motion.div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <motion&& motion.div

          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          animate={{

            duration: 4
            repeat: Infinity
            ease: 'easeInOut'
            delay: 1

          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <motion&& motion.div
          className='absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full'
          animate={{
            y: [0, -25, 0],
            opacity: [0 && 0.4, 0 && 0.9, 0 && 0.4],          }}
<<<<<<< HEAD
<<<<<<< HEAD
          transition={{
            duration: 5
            repeat: Infinity,          }}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          transition={{
            duration: 5
            repeat: Infinity,          }}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4]
        />;
        <motion.div;
          className='absolute top - 3/4 right - 1/4 w - 1 h - 1 bg - purple - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -15, 0],
            opacity: [0.4, 0.7, 0.4],          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,          }}
        />;
        <motion.div;
          className="absolute top - 3/4 right - 1/4 w - 1 h - 1 bg - purple - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -15, 0];
            opacity: [0.4, 0.7, 0.4];
<<<<<<< HEAD
<<<<<<< HEAD
=======

          }}
          transition={{
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          }}
          transition={{
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}

<<<<<<< HEAD
<<<<<<< HEAD
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
ease: "easeInOut",
            delay: 1
          }}
        />;
        <motion&& motion.div
          className="absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full"
            duration: 5,
          animate={{
            y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4]
        />;
        <motion.div;
          className='absolute top - 1/2 left - 1/4 w - 1.5 h - 1.5 bg - pink - 400 / 40 rounded - full';
          animate={{
            coordinate_y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4],          }}
          transition={{
            duration: 5,
            repeat: Infinity,          }}
        />;
        <motion.div;
          className="absolute top - 1/2 left - 1/4 w - 1.5 h - 1.5 bg - pink - 400 / 40 rounded - full";
          animate={{
            coordinate_y: [0, -25, 0];
            opacity: [0.4, 0.9, 0.4];
          }}
          transition={{
=======
        />;
        <motion&& motion.div
          className="absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full"

          animate={{

          }}
          transition={{

          }}
          transition={{
            duration: 5,
            repeat: Infinity,

=======
        />;
        <motion&& motion.div
          className="absolute top-1/2 left-1/4 w-1 && 1.5 h-1 && 1.5 bg-pink-400/40 rounded-full"

          animate={{

            delay: 2
=======
          }}
        />
      </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <style jsx>{`
        @keyframes gridMove {
          0% {
=======
            duration: 5,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: 'easeInOut',
            delay: 2,
          }}
        />;
      </div>;
            ease: "easeInOut",;
            delay: 2;
          }}
        />;
      </div>;
      <style jsx>{`;
        @keyframes gridMove {;
          0% {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transform: translate(0, 0);
          }
          100% {;
            transform: translate(50px, 50px);
          }
        }
<<<<<<< HEAD
<<<<<<< HEAD
        @keyframes float {;
          0%,          100% {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        @keyframes float {;
          0%,          100% {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            transform: translateY(0px);
          }
          50% {;
            transform: translateY(-20px);
          }
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            ease: 'easeInOut',
            delay: 2,
          }}
        />;
      </div>;
            ease: "easeInOut",
            delay: 2;
          }}
        />;
      </div>;
      <style jsx>{`;
        @keyframes grid_move {
          0% {
            transform: translate (0, 0);
          }
          100% {
            transform: translate (50px, 50px);
<<<<<<< HEAD
            duration: 5
            repeat: Infinity
            ease: 'easeInOut'
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
            ease: "easeInOut"
            delay: 2
          }}
        />
      </div>
=======
=======
            duration: 5,
            repeat: Infinity,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            duration: 5,
            repeat: Infinity,

      {/* CSS Animations */}
<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes float {
          0%,          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        @keyframes pulse {
          0%
          100% {
            opacity: 0.2;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
        @keyframes pulse {;
          0%,;
          100% {;
            opacity: 0 && 0.2;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0)
          }
          100% {
            transform: translate(50px, 50px)
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
50% {;
            opacity: 0 && 0.5;          }
        }
<<<<<<< HEAD
<<<<<<< HEAD
};  );
};
        @keyframes float {
          0%, 100% {
            transform: translateY(0px)
          }
          50% {
            transform: translateY(-20px)
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2
          }
          50% {
            opacity: 0.5
          }

        }
      `}</style>
    </div>
  )
};
export default UltraFuturisticBackground2040;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


};
export default UltraFuturisticBackground2040;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      `}</style>;
    </div>);
}export default UltraFuturisticBackground2040;            opacity: 0.5;
          }
        }
      `}</style>;
    </div>);
}  );
}
;
export default UltraFuturisticBackground2040;
<<<<<<< HEAD
;

<<<<<<< HEAD
export default UltraFuturisticBackground2040;

          }
          50% {
            opacity: 0.5;          }
        }
      `}</style>
    </div>
  );
};export default UltraFuturisticBackground2040;            opacity: 0.5
          }
        }
      `}</style>
    </div>
  );
};  )
}
export default UltraFuturisticBackground2040;

export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
export default UltraFuturisticBackground2040;
=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default UltraFuturisticBackground2040;

=======
export default UltraFuturisticBackground2040;
=======
export default UltraFuturisticBackground2040;
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

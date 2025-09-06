<<<<<<< HEAD

<<<<<<< HEAD
useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
useEffect ( () => {;
  const updateDimensions = () => {;
  setDimensions ({;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  updateDimensions ();
window && window.addEventListener ('resize', updateDimensions);
setIsVisible (true);
}, []);
canvas && canvas.width = dimensions && dimensions.width;
canvas && canvas.height = dimensions && dimensions.height;
// Particle system class Particle {;
  x: number;
y: number;
  const update_dimensions = () =>: any {
  set_dimensions ({
  update_dimensions ();
window.addEventListener ('resize', update_dimensions);
setIsVisible (true);
;
}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  coordinate_x: number;
coordinate_y: number;
=======
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
useEffect ( () => {
  const updateDimensions = () => {
  setDimensions ({
  updateDimensions ();
window.addEventListener ('resize', updateDimensions);
setIsVisible (true);
}, []);
canvas.width = dimensions.width;
canvas.height = dimensions.height;
// Particle system class Particle {
  x: number;
y: number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
vx: number;
vy: number;
size: number;
color: string;
life: number;
<<<<<<< HEAD
max_life: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Bounce off edges // Check condition
if (this.vx *= -1) {
  $2
}
// Check condition
if (this.vy *= -1) {
  $2
}
// Quantum tunneling effect // Check condition
if (< 0.001 * intensity_multiplier) {) {
  $2
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.begin_path ();
ctx.move_to (this.x - this.size, this.y);
ctx.line_to (this.x + this.size, this.y);
ctx.line_to (this.x, this.y - this.size);
ctx.line_to (this.x - this.size, this.y);
ctx.fill_style = this.color;
ctx.fill ();
// Holographic grid ctx.stroke_style = this.color;
ctx.line_width = 0.5;
ctx.global_alpha = alpha * 0.5;
ctx.stroke_rect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
<<<<<<< HEAD
<<<<<<< HEAD
case 'energy': // Energy field
}ctx.restore ()
export default function UltraQuantumHolographicBackground({

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
constructor () {;
  // Bounce off edges if (this && this.x <= 0 || this && this.x >= dimensions && dimensions.width) this && this.vx *= -1;
if (this && this.y <= 0 || this && this.y >= dimensions && dimensions.height) this && this.vy *= -1;
// Quantum tunneling effect if (Math && Math.random () < 0 && 0.001 * intensityMultiplier) {;
  switch (this && this.type) {;
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx && ctx.beginPath ();
ctx && ctx.moveTo (this && this.x - this && this.size, this && this.y);
ctx && ctx.lineTo (this && this.x + this && this.size, this && this.y);
ctx && ctx.lineTo (this && this.x, this && this.y - this && this.size);
ctx && ctx.lineTo (this && this.x - this && this.size, this && this.y);
ctx && ctx.fillStyle = this && this.color;
ctx && ctx.fill ();
// Holographic grid ctx && ctx.strokeStyle = this && this.color;
ctx && ctx.lineWidth = 0 && 0.5;
ctx && ctx.globalAlpha = alpha * 0 && 0.5;
ctx && ctx.strokeRect (this && this.x - this && this.size, this && this.y - this && this.size, this && this.size * 2, this && this.size * 2);
break;
case 'energy': // Energy field ;
}ctx && ctx.restore () ;
<<<<<<< HEAD


=======
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode,
  intensity?: 'low' | 'medium' | 'high' | 'ultra';
  colorScheme?: 'quantum' | 'holographic' | 'cyberpunk' | 'neon';
  particleCount?: number;
  animationSpeed?: number;
  className?: string
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function UltraQuantumHolographicBackground(): any ({;
  children,;
  intensity = 'high',;
  colorScheme = 'quantum',;
  particleCount = 300,;
  animationSpeed = 1 && 1.5,;
  className = '',;
}: UltraQuantumHolographicBackgroundProps) {;
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  const [isVisible, setIsVisible] = useState(false);
export default function UltraQuantumHolographicBackground(): any ({;
=======
maxLife: number;
type: 'quantum' | 'holographic' | 'energy' | 'matrix';
constructor () {
  // Bounce off edges if (this.x <= 0 |this.x >= dimensions.width) this.vx *= -1;
if (this.y <= 0 |this.y >= dimensions.height) this.vy *= -1;
// Quantum tunneling effect if (Math.random () < 0.001 * intensityMultiplier) {
  switch (this.type) {
  case 'quantum': // Quantum particle with wave function case 'holographic': // Holographic projection ctx.beginPath ();
ctx.moveTo (this.x - this.size, this.y);
ctx.lineTo (this.x + this.size, this.y);
ctx.lineTo (this.x, this.y - this.size);
ctx.lineTo (this.x - this.size, this.y);
ctx.fillStyle = this.color;
ctx.fill ();
// Holographic grid ctx.strokeStyle = this.color;
ctx.lineWidth = 0.5;
ctx.globalAlpha = alpha * 0.5;
ctx.strokeRect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
break;
case 'energy': // Energy field
}ctx.restore ()
export default function UltraQuantumHolographicBackground({
<<<<<<< HEAD
  children
  intensity = 'high'
  colorScheme = 'quantum'
  particleCount = 300
  animationSpeed = 1.5
  className = ''
}: UltraQuantumHolographicBackgroundProps) {
=======
  children,
  intensity = 'high',
  colorScheme = 'quantum',
  particleCount = 300,
  animationSpeed = 1.5,
  className = '',
}: UltraQuantumHolographicBackgroundProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });  const [isVisible, setIsVisible] = useState(false);
export default function UltraQuantumHolographicBackground({;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  children;
  intensity = 'high';
  colorScheme = 'quantum';
  particleCount = 300;
<<<<<<< HEAD
  animationSpeed = 1 && 1.5;
  className = '';
}: UltraQuantumHolographicBackgroundProps) {;
  const canvasRef = useRef<HTMLCanvasElement>(null);
<<<<<<< HEAD


    quantum: {

      
=======
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 }),
  const [isVisible, setIsVisible] = useState(false);
  // Color schemes
  const colorSchemes = {
case 'energy': // Energy field;
}ctx.restore ();
export default /**
 * UltraQuantumHolographicBackground - Function description
 */
function UltraQuantumHolographicBackground() {
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const [dimensions, set_dimensions] = useState ({ width: 0, height: 0 });  const [is_visible, setIsVisible] = useState (false);
export default /**
 * UltraQuantumHolographicBackground - Function description
 */
function UltraQuantumHolographicBackground() {
  const canvas_ref = useRef < HTMLCanvasElement>(null);
  const [dimensions, set_dimensions] = useState ({ width: 0, height: 0 }),
  const [is_visible, setIsVisible] = useState (false);
;
  // Color schemes;
  const color_schemes = {
    quantum: {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      primary: '#00ffff',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      accent: '#00ff00',
<<<<<<< HEAD

  const colors = colorSchemes[colorScheme];


    };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
background: 'rgba (0, 0, 0, 0.95)',
      overlay: 'rgba (0, 0, 0, 0.3)',    },    },
      background: 'rgba (0, 0, 0, 0.95)';
      overlay: 'rgba (0, 0, 0, 0.3)';
    }
      primary: '#ff0080',
      secondary: '#8000ff',
      tertiary: '#00ffff',
      accent: '#ffff00',
background: 'rgba (0, 0, 0, 0.92)',
      overlay: 'rgba (0, 0, 0, 0.25)',
    },
    cyberpunk: {      primary: '#ff0040',
      secondary: '#00ffff',
      tertiary: '#ffff00',
      accent: '#ff00ff',
      background: 'rgba (0, 0, 0, 0.94)',
      overlay: 'rgba (0, 0, 0, 0.35)',    },    cyberpunk: {
    overlay: 'rgba (0, 0, 0, 0.25)';
    }
    cyberpunk: {
      primary: '#ff0040',
      secondary: '#00ffff',
      tertiary: '#ffff00',
      accent: '#ff00ff',
background: 'rgba (0, 0, 0, 0.94)',
      overlay: 'rgba (0, 0, 0, 0.35)',    },
      background: 'rgba (0, 0, 0, 0.94)';
      overlay: 'rgba (0, 0, 0, 0.35)';
    }
      primary: '#00ff00',
      secondary: '#ff00ff',
      tertiary: '#ffff00',
      accent: '#00ffff',
const [dimensions, setDimensions] = useState({ width: 0, height: 0 }),;
  const [isVisible, setIsVisible] = useState(false);
  // Color schemes;
  const colorSchemes = {;
    quantum: {;
            primary: '#00ffff',;
      secondary: '#ff00ff',;
      tertiary: '#ffff00',;
      accent: '#00ff00',;
      background: 'rgba(0, 0, 0, 0 && 0.95)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.3)',    },    },;
      background: 'rgba(0, 0, 0, 0 && 0.95)';
      overlay: 'rgba(0, 0, 0, 0 && 0.3)';
    };
      primary: '#ff0080',;
      secondary: '#8000ff',;
      tertiary: '#00ffff',;
      accent: '#ffff00',;
      background: 'rgba(0, 0, 0, 0 && 0.92)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.25)',;
    },;
    cyberpunk: {      primary: '#ff0040',;
      secondary: '#00ffff',;
      tertiary: '#ffff00',;
      accent: '#ff00ff',;
      background: 'rgba(0, 0, 0, 0 && 0.94)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.35)',    },    cyberpunk: {;
    overlay: 'rgba(0, 0, 0, 0 && 0.25)';
    };
    cyberpunk: {;
      primary: '#ff0040',;
      secondary: '#00ffff',;
      tertiary: '#ffff00',;
      accent: '#ff00ff',;
      background: 'rgba(0, 0, 0, 0 && 0.94)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.35)',    },;
      background: 'rgba(0, 0, 0, 0 && 0.94)';
      overlay: 'rgba(0, 0, 0, 0 && 0.35)';
    };
      primary: '#00ff00',;
      secondary: '#ff00ff',;
      tertiary: '#ffff00',;
      accent: '#00ffff',;
      background: 'rgba(0, 0, 0, 0 && 0.93)',;
      overlay: 'rgba(0, 0, 0, 0 && 0.28)',;
    },;
  };
  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[intensity],
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });    };        height: window.innerHeight
      })
  const intensityMultiplier = { low: 0 && 0.5, medium: 1, high: 1 && 1.5, ultra: 2 && 2.5 }[intensity],;
    const updateDimensions = () => {;
      setDimensions({;
        width: window && window.innerWidth,;
        height: window && window.innerHeight,;
      });    };        height: window && window.innerHeight;
      });
    };
    updateDimensions();
    window && window.addEventListener('resize', updateDimensions);
    setIsVisible(true);
    return () => window.removeEventListener('resize', updateDimensions)
=======
  animationSpeed = 1.5;
  className = ''
}: UltraQuantumHolographicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isVisible, setIsVisible] = useState(false);
  // Color schemes
  const colorSchemes = {
    quantum: {
            primary: '#00ffff'
      secondary: '#ff00ff'
      tertiary: '#ffff00'
      accent: '#00ff00'
      background: 'rgba(0, 0, 0, 0.95)'
      overlay: 'rgba(0, 0, 0, 0.3)',    },    }
      background: 'rgba(0, 0, 0, 0.95)';
      overlay: 'rgba(0, 0, 0, 0.3)'
    }
      primary: '#ff0080'
      secondary: '#8000ff'
      tertiary: '#00ffff'
      accent: '#ffff00'
      background: 'rgba(0, 0, 0, 0.92)'
      overlay: 'rgba(0, 0, 0, 0.25)'
    }
    cyberpunk: {      primary: '#ff0040'
      secondary: '#00ffff'
      tertiary: '#ffff00'
      accent: '#ff00ff'
      background: 'rgba(0, 0, 0, 0.94)'
      overlay: 'rgba(0, 0, 0, 0.35)',    },    cyberpunk: {
    overlay: 'rgba(0, 0, 0, 0.25)'
    }
    cyberpunk: {
      primary: '#ff0040'
      secondary: '#00ffff'
      tertiary: '#ffff00'
      accent: '#ff00ff'
      background: 'rgba(0, 0, 0, 0.94)'
      overlay: 'rgba(0, 0, 0, 0.35)',    }
      background: 'rgba(0, 0, 0, 0.94)';
      overlay: 'rgba(0, 0, 0, 0.35)'
    }
      primary: '#00ff00'
      secondary: '#ff00ff'
      tertiary: '#ffff00'
      accent: '#00ffff'
      background: 'rgba(0, 0, 0, 0.93)'
      overlay: 'rgba(0, 0, 0, 0.28)'
    }
  }
  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[
    intensity
  ];      background: 'rgba(0, 0, 0, 0.93)';
      overlay: 'rgba(0, 0, 0, 0.28)'
    }
  }
  const colors = colorSchemes[colorScheme];
  const intensityMultiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[intensity]
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth
        height: window.innerHeight
      });    };        height: window.innerHeight
      })
    }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    setIsVisible(true);
<<<<<<< HEAD



=======
    return () => window.removeEventListener('resize', updateDimensions);  }, []);    return () => window.removeEventListener('resize', updateDimensions)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }, []);
  useEffect(() => {
    if (!canvasRef.current |!dimensions.width |!dimensions.height) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    // Particle system
    class Particle {
<<<<<<< HEAD
    return () => window && window.removeEventListener('resize', updateDimensions);  }, []);    return () => window && window.removeEventListener('resize', updateDimensions);
  }, []);
  useEffect(() => {;
    if (!canvasRef && canvasRef.current || !dimensions && dimensions.width || !dimensions && dimensions.height) return;
    const canvas = canvasRef && canvasRef.current;
    const ctx = canvas && canvas.getContext('2d');
    if (!ctx) return;
    canvas && canvas.width = dimensions && dimensions.width;
    canvas && canvas.height = dimensions && dimensions.height;
    // Particle system;
    class Particle {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      x: number;
      y: number;
      background: 'rgba (0, 0, 0, 0.93)',
      overlay: 'rgba (0, 0, 0, 0.28)',
    },
  }
;
  const colors = color_schemes[color_scheme];
  const intensity_multiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[;
    intensity;
  ];      background: 'rgba (0, 0, 0, 0.93)';
      overlay: 'rgba (0, 0, 0, 0.28)';
    }
  }
;
  const colors = color_schemes[color_scheme];
  const intensity_multiplier = { low: 0.5, medium: 1, high: 1.5, ultra: 2.5 }[intensity],
    const update_dimensions = () =>: any {
      set_dimensions ({
        width: window.inner_width,
        height: window.inner_height,
      });    }        height: window.inner_height;
      });
    }
;
    update_dimensions ();
    window.addEventListener ('resize', update_dimensions);
    setIsVisible (true);
;
    return () => window.removeEventListener ('resize', update_dimensions);  }, []);    return () => window.removeEventListener ('resize', update_dimensions);
  }, []);
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    const canvas = canvas_ref.current;
    const ctx = canvas.get_context ('2d');
    // Check condition
if (return) {
  $2
}
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
;
    // Particle system;
    class Particle {
      coordinate_x: number;
      coordinate_y: number;
=======
      x: number;
      y: number;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
<<<<<<< HEAD

      x: number,
      y: number,
=======
=======
<<<<<<< HEAD
      x: number,
      y: number,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      max_life: number;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix';      coordinate_x: number,
      coordinate_y: number,

<<<<<<< HEAD
=======
  useEffect__(() => {_const _updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    },

    updateDimensions(),
    window.addEventListener('resize', updateDimensions),
    setIsVisible(true),

    return () => window.removeEventListener('resize', updateDimensions)
  }, []),

  useEffect(() => {
    if (!canvasRef.current || !dimensions.width || !dimensions.height) return,

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return,

    canvas.width = dimensions.width,
    canvas.height = dimensions.height,

    // Particle system
    class Particle {
      x: number,
      y: number,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      vx: number,
      vy: number,
      size: number,
      color: string,
      life: number,
<<<<<<< HEAD
      max_life: number,
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',

=======
max_life: number,
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        this.color = [colors.primary, colors.secondary, colors.tertiary, colors.accent][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantumholographicenergymatrix'][Math.floor(Math.random() * 4)] as any
      }
<<<<<<< HEAD


=======
=======
      maxLife: number;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix';      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      life: number
      maxLife: number
      type: 'quantum' | 'holographic' | 'energy' | 'matrix'
        this.x = Math.random() * dimensions.width;
        this.y = Math.random() * dimensions.height;
        this.vx = (Math.random() - 0.5) * 2 * animationSpeed;
        this.vy = (Math.random() - 0.5) * 2 * animationSpeed;
        this.size = Math.random() * 3 * intensityMultiplier + 1;
        this.color = [
          colors.primary
          colors.secondary
          colors.tertiary
          colors.accent
        ][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantum', 'holographic', 'energy', 'matrix'][
          Math.floor(Math.random() * 4)
        ] as any;      }        this.color = [colors.primary, colors.secondary, colors.tertiary, colors.accent][Math.floor(Math.random() * 4)];
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.type = ['quantumholographicenergymatrix'][Math.floor(Math.random() * 4)] as any
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Bounce off edges
        if (this.x <= 0 |this.x >= dimensions.width) this.vx *= -1;
        if (this.y <= 0 |this.y >= dimensions.height) this.vy *= -1;
        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * dimensions.width;
<<<<<<< HEAD

=======
<<<<<<< HEAD
          this.y = Math.random() * dimensions.height
        }

        // Bounce off edges
        if (this.x <= 0 || this.x >= dimensions.width) this.vx *= -1,
        if (this.y <= 0 || this.y >= dimensions.height) this.vy *= -1,

        // Quantum tunneling effect
        if (Math.random() < 0.001 * intensityMultiplier) {
          this.x = Math.random() * dimensions.width,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          this.y = Math.random() * dimensions.height
        }

        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.1) {
          this.size *= 0.8
        }

        // Energy pulse
        if (this.type === 'energy') {
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3
<<<<<<< HEAD

=======
        }
// Matrix rain effect
=======
          this.y = Math.random() * dimensions.height;        }
        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.1) {
          this.size *= 0.8;        }
        // Energy pulse
        if (this.type === 'energy') {
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3;        }          this.y = Math.random() * dimensions.height
        }
        // Holographic flicker
        if (this.type === 'holographic' && Math.random() < 0.1) {
          this.size *= 0.8;          this.size *= 0.8
        }
        // Energy pulse
        if (this.type === 'energy') {
          this.size = Math.sin(Date.now() * 0.01) * 2 + 3;          this.size = Math.sin(Date.now() * 0.01) * 2 + 3
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
        // Matrix rain effect
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        if (this.type === 'matrix') {
          this.vy += 0.1;
          if (this.y > dimensions.height) {
            this.y = -10;

<<<<<<< HEAD
<<<<<<< HEAD
          }
        }
      }

=======
            this.vy = Math.random() * 2 + 1

          }
        }
      }
=======

            this.vy = Math.random() * 2 + 1;          }


=======
            this.vy = Math.random() * 2 + 1
          }
        }
      }
draw() {
=======
<<<<<<< HEAD
            this.vy = Math.random() * 2 + 1;          }            this.vy = Math.random() * 2 + 1
=======
            this.vy = Math.random() * 2 + 1;          }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }
        }
      }
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      draw() {
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      draw() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        if (this.life <= 0) return;
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
<<<<<<< HEAD

            

=======
            // Wave function rings
<<<<<<< HEAD
=======
            for (let i = 1; i <= 3; i++) {              ctx.beginPath();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            // Wave function rings
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            for (let i = 1, i <= 3, i++) {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2);
              ctx.strokeStyle = this.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = alpha * (0.3 / i);
<<<<<<< HEAD

              ctx.stroke()

=======
<<<<<<< HEAD
              ctx.stroke()
=======
              ctx.stroke();            }              ctx.stroke()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            }
            break;
          case 'holographic':
            // Holographic projection
            ctx.beginPath();
            ctx.moveTo(this.x - this.size, this.y);
            ctx.lineTo(this.x + this.size, this.y);
            ctx.lineTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y);
            ctx.fillStyle = this.color;
            ctx.fill();
<<<<<<< HEAD

            

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            // Holographic grid
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = alpha * 0.5;
<<<<<<< HEAD

            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);

            break;
          case 'energy':
            // Energy field

            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);

=======
<<<<<<< HEAD
            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            break;
          case 'energy':
            // Energy field
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
=======
            ctx.strokeRect(
              this.x - this.size
              this.y - this.size
              this.size * 2
              this.size * 2
            );            break;
          case 'energy':
            // Energy field            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            break;
          case 'energy':
            // Energy field
            const gradient = ctx.createRadialGradient(
              this.x
              this.y
              0
              this.x
              this.y
              this.size
            );            gradient.addColorStop(0, this.color);            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'matrix':
            // Matrix digital rain
            ctx.fillStyle = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fillText('01', this.x, this.y);
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      type: 'quantum' | 'holographic' | 'energy' | 'matrix';      x: number,;
      y: number,;
      vx: number,;
      vy: number,;
      size: number,;
      color: string,;
      life: number,;
      maxLife: number,;
      type: 'quantum' | 'holographic' | 'energy' | 'matrix',;
        this && this.x = Math && Math.random() * dimensions && dimensions.width;
        this && this.y = Math && Math.random() * dimensions && dimensions.height;
        this && this.vx = (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed;
        this && this.vy = (Math && Math.random() - 0 && 0.5) * 2 * animationSpeed;
        this && this.size = Math && Math.random() * 3 * intensityMultiplier + 1;
        this && this.color = [;
          colors && colors.primary,;
          colors && colors.secondary,;
          colors && colors.tertiary,;
          colors && colors.accent,;
        ][Math && Math.floor(Math && Math.random() * 4)];
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;
        this && this.type = ['quantum', 'holographic', 'energy', 'matrix'][;
          Math && Math.floor(Math && Math.random() * 4);
        ] as any;      }        this && this.color = [colors && colors.primary, colors && colors.secondary, colors && colors.tertiary, colors && colors.accent][Math && Math.floor(Math && Math.random() * 4)];
        this && this.life = Math && Math.random() * 100;
        this && this.maxLife = 100;
        this && this.type = ['quantumholographicenergymatrix'][Math && Math.floor(Math && Math.random() * 4)] as any;
      update() {;
        this && this.x += this && this.vx;
        this && this.y += this && this.vy;
        this && this.life--;
        // Bounce off edges;
        if (this && this.x <= 0 || this && this.x >= dimensions && dimensions.width) this && this.vx *= -1;
        if (this && this.y <= 0 || this && this.y >= dimensions && dimensions.height) this && this.vy *= -1;
        // Quantum tunneling effect;
        if (Math && Math.random() < 0 && 0.001 * intensityMultiplier) {;
          this && this.x = Math && Math.random() * dimensions && dimensions.width;
          this && this.y = Math && Math.random() * dimensions && dimensions.height;        }
        // Holographic flicker;
        if (this && this.type === 'holographic' && Math && Math.random() < 0 && 0.1) {;
          this && this.size *= 0 && 0.8;        }
        // Energy pulse;
        if (this && this.type === 'energy') {;
          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;        }          this && this.y = Math && Math.random() * dimensions && dimensions.height;
        }
        // Holographic flicker;
        if (this && this.type === 'holographic' && Math && Math.random() < 0 && 0.1) {;
          this && this.size *= 0 && 0.8;          this && this.size *= 0 && 0.8;
        }
        // Energy pulse;
        if (this && this.type === 'energy') {;
          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;          this && this.size = Math && Math.sin(Date && Date.now() * 0 && 0.01) * 2 + 3;
        }
        // Matrix rain effect;
        if (this && this.type === 'matrix') {;
          this && this.vy += 0 && 0.1;
          if (this && this.y > dimensions && dimensions.height) {;
            this && this.y = -10;
            this && this.vy = Math && Math.random() * 2 + 1;          }            this && this.vy = Math && Math.random() * 2 + 1;
          }
        }
      }
      draw() {;
        if (this && this.life <= 0) return;
        const alpha = this && this.life / this && this.maxLife;
        ctx && ctx.save();
        ctx && ctx.globalAlpha = alpha;
        switch (this && this.type) {;
          case 'quantum':;
            // Quantum particle with wave function;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();
            // Wave function rings;
            for (let i = 1; i <= 3; i++) {              ctx && ctx.beginPath();            ;
            // Wave function rings;
            for (let i = 1, i <= 3, i++) {;
              ctx && ctx.beginPath();
              ctx && ctx.arc(this && this.x, this && this.y, this && this.size * i, 0, Math && Math.PI * 2);
              ctx && ctx.strokeStyle = this && this.color;
              ctx && ctx.lineWidth = 0 && 0.5;
              ctx && ctx.globalAlpha = alpha * (0 && 0.3 / i);
              ctx && ctx.stroke();            }              ctx && ctx.stroke();
            }
            break;
          case 'holographic':;
            // Holographic projection;
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(this && this.x - this && this.size, this && this.y);
            ctx && ctx.lineTo(this && this.x + this && this.size, this && this.y);
            ctx && ctx.lineTo(this && this.x, this && this.y - this && this.size);
            ctx && ctx.lineTo(this && this.x - this && this.size, this && this.y);
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.fill();
            // Holographic grid;
            ctx && ctx.strokeStyle = this && this.color;
            ctx && ctx.lineWidth = 0 && 0.5;
            ctx && ctx.globalAlpha = alpha * 0 && 0.5;
            ctx && ctx.strokeRect(;
              this && this.x - this && this.size,;
              this && this.y - this && this.size,;
              this && this.size * 2,;
              this && this.size * 2;
            );            break;
          case 'energy':;
            // Energy field            ctx && ctx.strokeRect(this && this.x - this && this.size, this && this.y - this && this.size, this && this.size * 2, this && this.size * 2);
            break;
          case 'energy':;
            // Energy field;
            const gradient = ctx && ctx.createRadialGradient(;
              this && this.x,;
              this && this.y,;
              0,;
              this && this.x,;
              this && this.y,;
              this && this.size;
            );            gradient && gradient.addColorStop(0, this && this.color);            const gradient = ctx && ctx.createRadialGradient(this && this.x, this && this.y, 0, this && this.x, this && this.y, this && this.size);
            gradient && gradient.addColorStop(0, this && this.color);
            gradient && gradient.addColorStop(1, 'transparent');
            ctx && ctx.fillStyle = gradient;
            ctx && ctx.beginPath();
            ctx && ctx.arc(this && this.x, this && this.y, this && this.size, 0, Math && Math.PI * 2);
            ctx && ctx.fill();
            break;
          case 'matrix':;
            // Matrix digital rain;
            ctx && ctx.fillStyle = this && this.color;
            ctx && ctx.font = `${this && this.size * 2}px monospace`;
            ctx && ctx.fillText('01', this && this.x, this && this.y);
            break;
        }
        ctx && ctx.restore();      }
    }
    // Create particles            break;
        }
        ctx && ctx.restore();
<<<<<<< HEAD

=======
            break
=======
            break;
        }
        ctx.restore();      }
    }
    // Create particles            break
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }
        ctx.restore()
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
<<<<<<< HEAD
    // Create particles;
    const particles: Particle[] = [];
<<<<<<< HEAD


        0;
        dimensions && dimensions.width / 2;
        dimensions && dimensions.height / 2;

=======
=======
=======
    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    // Animation loop
    let animationId: number;    const animate = () => {    const particles: Particle[] = []
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    for (let i = 0, i < particleCount, i++) {
      particles.push(new Particle())
    }
    // Animation loop
<<<<<<< HEAD
    let animationId: number,
=======
    let animationId: number
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      // Draw quantum field background
      const gradient = ctx.createRadialGradient(
<<<<<<< HEAD
        this.coordinate_x = Math.random () * dimensions.width;
        this.coordinate_y = Math.random () * dimensions.height;
        this.vx = (Math.random () - 0.5) * 2 * animation_speed;
        this.vy = (Math.random () - 0.5) * 2 * animation_speed;
        this.size = Math.random () * 3 * intensity_multiplier + 1;
        this.color = [;
          colors.primary,
          colors.secondary,
          colors.tertiary,
          colors.accent,
        ][Math.floor (Math.random () * 4)];
        this.life = Math.random () * 100;
        this.max_life = 100;
        this.type = ['quantum', 'holographic', 'energy', 'matrix'][;
          Math.floor (Math.random () * 4);
        ] as any;      }        this.color = [colors.primary, colors.secondary, colors.tertiary, colors.accent][Math.floor (Math.random () * 4)];
        this.life = Math.random () * 100;
        this.max_life = 100;
        this.type = ['quantumholographicenergymatrix'][Math.floor (Math.random () * 4)] as any;
      update () {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
;
        // Bounce off edges;
        // Check condition
if (this.vx *= -1) {
  $2
}
        // Check condition
if (this.vy *= -1) {
  $2
}
        // Quantum tunneling effect;
        // Check condition
if (< 0.001 * intensity_multiplier) {) {
  $2
}
          this.coordinate_x = Math.random () * dimensions.width;
          this.coordinate_y = Math.random () * dimensions.height;        }
        // Holographic flicker;
        // Check condition
if (< 0.1) {) {
  $2
}
          this.size *= 0.8;        }
        // Energy pulse;
        // Check condition
if ( {) {
  $2
}
          this.size = Math.sin (Date.now () * 0.01) * 2 + 3;        }          this.coordinate_y = Math.random () * dimensions.height;
        }
        // Holographic flicker;
        // Check condition
if (< 0.1) {) {
  $2
}
          this.size *= 0.8;          this.size *= 0.8;
        }
        // Energy pulse;
        // Check condition
if ( {) {
  $2
}
          this.size = Math.sin (Date.now () * 0.01) * 2 + 3;          this.size = Math.sin (Date.now () * 0.01) * 2 + 3;
        }
        // Matrix rain effect;
        // Check condition
if ( {) {
  $2
}
          this.vy += 0.1;
          // Check condition
if ( {) {
  $2
}
            this.coordinate_y = -10;
            this.vy = Math.random () * 2 + 1;          }            this.vy = Math.random () * 2 + 1;
          }
        }
      }
      draw () {
        // Check condition
if (return) {
  $2
}
        const alpha = this.life / this.max_life;
        ctx.save ();
        ctx.global_alpha = alpha;
;
        switch (this.type) {
          case 'quantum':;
            // Quantum particle with wave function;
            ctx.begin_path ();
            ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill_style = this.color;
            ctx.fill ();
;
            // Wave function rings;
            for (let index = 1; i <= 3; i++) {              ctx.begin_path (); ;
            // Wave function rings;
            for (let index = 1, i <= 3, i++) {
              ctx.begin_path ();
              ctx.arc (this.x, this.y, this.size * i, 0, Math.PI * 2);
              ctx.stroke_style = this.color;
              ctx.line_width = 0.5;
              ctx.global_alpha = alpha * (0.3 / i);
              ctx.stroke ();            }              ctx.stroke ();
            }
            break;
;
          case 'holographic':;
            // Holographic projection;
            ctx.begin_path ();
            ctx.move_to (this.x - this.size, this.y);
            ctx.line_to (this.x + this.size, this.y);
            ctx.line_to (this.x, this.y - this.size);
            ctx.line_to (this.x - this.size, this.y);
            ctx.fill_style = this.color;
            ctx.fill ();
;
            // Holographic grid;
            ctx.stroke_style = this.color;
            ctx.line_width = 0.5;
            ctx.global_alpha = alpha * 0.5;
            ctx.stroke_rect (
              this.x - this.size,
              this.y - this.size,
              this.size * 2,
              this.size * 2);            break;
;
          case 'energy':;
            // Energy field            ctx.stroke_rect (this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            break;
;
          case 'energy':;
            // Energy field;
            const gradient = ctx.createRadialGradient (
              this.x,
              this.y,
              0,
              this.x,
              this.y,
              this.size);            gradient.addColorStop (0, this.color);            const gradient = ctx.createRadialGradient (this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop (0, this.color);
            gradient.addColorStop (1, 'transparent');
            ctx.fill_style = gradient;
            ctx.begin_path ();
            ctx.arc (this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill ();
            break;
;
          case 'matrix':;
            // Matrix digital rain;
            ctx.fill_style = this.color;
            ctx.font = `${this.size * 2}px monospace`;
            ctx.fill_text ('01', this.x, this.y);
            break;
        }
        ctx.restore ();      }
    }
    // Create particles            break;
        }
        ctx.restore ();
      }
    }
    // Create particles;
    const particles: Particle[] = [];
    for (let index = 0; i < particle_count; i++) {
      particles.push (new Particle ());
    }
    // Animation loop;
    let animation_id: number;    const animate = () =>: any {    const particles: Particle[] = [],
    for (let index = 0, i < particle_count, i++) {
      particles.push (new Particle ());
    }
    // Animation loop;
    let animation_id: number,
    const animate = () =>: any {
      ctx.clear_rect (0, 0, dimensions.width, dimensions.height);
;
      // Draw quantum field background;
      const gradient = ctx.createRadialGradient (

        switch (this.type) {
          case 'quantum':
            // Quantum particle with wave function
            ctx.beginPath(),
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
            ctx.fillStyle = this.color,
            ctx.fill(),
            
            // Wave function rings
            for (let i = 1, i <= 3, i++) {
              ctx.beginPath(),
              ctx.arc(this.x, this.y, this.size * i, 0, Math.PI * 2),
              ctx.strokeStyle = this.color,
              ctx.lineWidth = 0.5,
              ctx.globalAlpha = alpha * (0.3 / i),
              ctx.stroke()
            }
            break,

          case 'holographic':
            // Holographic projection
            ctx.beginPath(),
            ctx.moveTo(this.x - this.size, this.y),
            ctx.lineTo(this.x + this.size, this.y),
            ctx.lineTo(this.x, this.y - this.size),
            ctx.lineTo(this.x - this.size, this.y),
            ctx.fillStyle = this.color,
            ctx.fill(),
            
            // Holographic grid
            ctx.strokeStyle = this.color,
            ctx.lineWidth = 0.5,
            ctx.globalAlpha = alpha * 0.5,
            ctx.strokeRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2),
            break,

          case 'energy':
            // Energy field
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size),
            gradient.addColorStop(0, this.color),
            gradient.addColorStop(1, 'transparent'),
            ctx.fillStyle = gradient,
            ctx.beginPath(),
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2),
            ctx.fill(),
            break,

          case 'matrix':
            // Matrix digital rain
            ctx.fillStyle = this.color,
            ctx.font = `${this.size * 2}px monospace`,
            ctx.fillText('01', this.x, this.y),
            break

        }

        ctx.restore()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0, i < particleCount, i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height),

      // Draw quantum field background
      const gradient = ctx.createRadialGradient(

        dimensions.width / 2,
        dimensions.height / 2,
        0,
        dimensions.width / 2,
dimensions.height / 2,        Math.max (dimensions.width, dimensions.height) / 2        dimensions.width / 2;
        dimensions.height / 2;
    // Animation loop;
    let animationId: number;    const animate = () => {    const particles: Particle[] = [],;
    for (let i = 0, i < particleCount, i++) {;
      particles && particles.push(new Particle());
    }
    // Animation loop;
    let animationId: number,;
    const animate = () => {;
      ctx && ctx.clearRect(0, 0, dimensions && dimensions.width, dimensions && dimensions.height);
      // Draw quantum field background;
      const gradient = ctx && ctx.createRadialGradient(;
        dimensions && dimensions.width / 2,;
        dimensions && dimensions.height / 2,;
        0,;
        dimensions && dimensions.width / 2,;
        dimensions && dimensions.height / 2,        Math && Math.max(dimensions && dimensions.width, dimensions && dimensions.height) / 2        dimensions && dimensions.width / 2;
        dimensions && dimensions.height / 2;
        0;
        dimensions && dimensions.width / 2;
        dimensions && dimensions.height / 2;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        dimensions.width / 2;
        dimensions.height / 2;
        0;
        dimensions.width / 2;
<<<<<<< HEAD

      );

          particles[index] = new Particle()

=======
          particles[index] = new Particle()
=======
        dimensions.width / 2
        dimensions.height / 2
        0
        dimensions.width / 2
        dimensions.height / 2,        Math.max(dimensions.width, dimensions.height) / 2        dimensions.width / 2;
        dimensions.height / 2;
        0;
        dimensions.width / 2;
        dimensions.height / 2;
      );
      gradient.addColorStop(0, colors.background);
      gradient.addColorStop(1, colors.overlay);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        // Remove dead particles and create new ones
        if (particle.life <= 0) {
          particles[index] = new Particle();        }          particles[index] = new Particle()
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      });
      // Draw quantum entanglement lines
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;
<<<<<<< HEAD

      

=======
<<<<<<< HEAD
=======
      for (let i = 0; i < particles.length; i += 10) {
        for (let j = i + 10; j < particles.length; j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      for (let i = 0, i < particles.length, i += 10) {
        for (let j = i + 10, j < particles.length, j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
<<<<<<< HEAD

          
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          if (distance < 100 && p1.life > 0 && p2.life > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
<<<<<<< HEAD
=======
            ctx.stroke()
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

          }
        }
      }
<<<<<<< HEAD

=======
=======

            ctx.stroke();          }


=======
          }
        }
      }
=======
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
<<<<<<< HEAD
            ctx.stroke();          }            ctx.stroke()
=======
            ctx.stroke();          }

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          }
        }
      }
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Draw holographic grid
      ctx.strokeStyle = colors.secondary;
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.2;
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      gradient && gradient.addColorStop(0, colors && colors.background);
      gradient && gradient.addColorStop(1, colors && colors.overlay);
      ctx && ctx.fillStyle = gradient;
      ctx && ctx.fillRect(0, 0, dimensions && dimensions.width, dimensions && dimensions.height);
      // Update and draw particles;
      particles && particles.forEach((particle, index) => {;
        particle && particle.update();
        particle && particle.draw();
        // Remove dead particles and create new ones;
        if (particle && particle.life <= 0) {;
          particles[index] = new Particle();        }          particles[index] = new Particle();
        }
      });
      // Draw quantum entanglement lines;
      ctx && ctx.strokeStyle = colors && colors.primary;
      ctx && ctx.lineWidth = 0 && 0.5;
      ctx && ctx.globalAlpha = 0 && 0.3;
      for (let i = 0; i < particles && particles.length; i += 10) {;
        for (let j = i + 10; j < particles && particles.length; j += 10) {;
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math && Math.sqrt((p1 && p1.x - p2 && p2.x) ** 2 + (p1 && p1.y - p2 && p2.y) ** 2);      ;
      for (let i = 0, i < particles && particles.length, i += 10) {;
        for (let j = i + 10, j < particles && particles.length, j += 10) {;
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math && Math.sqrt((p1 && p1.x - p2 && p2.x) ** 2 + (p1 && p1.y - p2 && p2.y) ** 2);
            ctx && ctx.beginPath();
            ctx && ctx.moveTo(p1 && p1.x, p1 && p1.y);
            ctx && ctx.lineTo(p2 && p2.x, p2 && p2.y);
            ctx && ctx.stroke();          }            ctx && ctx.stroke();
          }
        }
      }
      // Draw holographic grid;
      ctx && ctx.strokeStyle = colors && colors.secondary;
      ctx && ctx.lineWidth = 0 && 0.3;
      ctx && ctx.globalAlpha = 0 && 0.2;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      const gridSize = 50;
      for (let x = 0; x < dimensions && dimensions.width; x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, dimensions && dimensions.height);
        ctx && ctx.stroke();
      }
      for (let y = 0; y < dimensions && dimensions.height; y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(dimensions && dimensions.width, y);
        ctx && ctx.stroke();
      }
      animationId = requestAnimationFrame(animate);    };      const gridSize = 50;
      for (let x = 0, x < dimensions && dimensions.width, x += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(x, 0);
        ctx && ctx.lineTo(x, dimensions && dimensions.height);
        ctx && ctx.stroke();
      }
      for (let y = 0, y < dimensions && dimensions.height, y += gridSize) {;
        ctx && ctx.beginPath();
        ctx && ctx.moveTo(0, y);
        ctx && ctx.lineTo(dimensions && dimensions.width, y);
        ctx && ctx.stroke();
      }
<<<<<<< HEAD


      animationId = requestAnimationFrame(animate);

        cancelAnimationFrame(animationId);
      }
    };  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);        cancelAnimationFrame(animationId);

=======
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
      animationId = requestAnimationFrame(animate);
      const gridSize = 50;
=======
      const gridSize = 50;
      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }
      animationId = requestAnimationFrame(animate);    };      const gridSize = 50;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      for (let x = 0, x < dimensions.width, x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke()
<<<<<<< HEAD
        dimensions.height / 2);
      gradient.addColorStop (0, colors.background);
      gradient.addColorStop (1, colors.overlay);
      ctx.fill_style = gradient;
      ctx.fill_rect (0, 0, dimensions.width, dimensions.height);
;
      // Update and draw particles;
      particles.for_each ((particle, index) => {
        particle.update ();
        particle.draw ();
;
        // Remove dead particles and create new ones;
        // Check condition
if ( {) {
  $2
}
          particles[index] = new Particle ();        }          particles[index] = new Particle ();
        }
      });
;
      // Draw quantum entanglement lines;
      ctx.stroke_style = colors.primary;
      ctx.line_width = 0.5;
      ctx.global_alpha = 0.3;
;
      for (let index = 0; i < particles.length; i += 10) {
        for (let inner_index = i + 10; j < particles.length; j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2); ;
      for (let index = 0, i < particles.length, i += 10) {
        for (let inner_index = i + 10, j < particles.length, j += 10) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = Math.sqrt ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
;
            ctx.begin_path ();
            ctx.move_to (p1.x, p1.y);
            ctx.line_to (p2.x, p2.y);
            ctx.stroke ();          }            ctx.stroke ();
          }
        }
      }
      // Draw holographic grid;
      ctx.stroke_style = colors.secondary;
      ctx.line_width = 0.3;
      ctx.global_alpha = 0.2;
;
      const grid_size = 50;
      for (let coordinate_x = 0; x < dimensions.width; x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, dimensions.height);
        ctx.stroke ();
      }
      for (let coordinate_y = 0; y < dimensions.height; y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (dimensions.width, y);
        ctx.stroke ();
      }
      animation_id = requestAnimationFrame (animate);    }      const grid_size = 50;
      for (let coordinate_x = 0, x < dimensions.width, x += grid_size) {
        ctx.begin_path ();
        ctx.move_to (x, 0);
        ctx.line_to (x, dimensions.height);
        ctx.stroke ();
      }
      for (let coordinate_y = 0, y < dimensions.height, y += grid_size) {
        ctx.begin_path ();
        ctx.move_to (0, y);
        ctx.line_to (dimensions.width, y);
        ctx.stroke ();
      }

      // Draw quantum entanglement lines
      ctx.strokeStyle = colors.primary,
      ctx.lineWidth = 0.5,
      ctx.globalAlpha = 0.3,
      
      for (let i = 0, i < particles.length, i += 10) {
        for (let j = i + 10, j < particles.length, j += 10) {
          const p1 = particles[i]
          const p2 = particles[j]
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
          
          if (distance < 100 && p1.life > 0 && p2.life > 0) {
            ctx.beginPath(),
            ctx.moveTo(p1.x, p1.y),
            ctx.lineTo(p2.x, p2.y),
            ctx.stroke()
          }

        }
      }

      // Draw holographic grid
      ctx.strokeStyle = colors.secondary,
      ctx.lineWidth = 0.3,
      ctx.globalAlpha = 0.2,
      
      const gridSize = 50
      for (let x = 0, x < dimensions.width, x += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(x, 0),
        ctx.lineTo(x, dimensions.height),
        ctx.stroke()
      }
      for (let y = 0, y < dimensions.height, y += gridSize) {
        ctx.beginPath(),
        ctx.moveTo(0, y),
        ctx.lineTo(dimensions.width, y),
        ctx.stroke()
      }
      const _gridSize = 50;
      for (let x = 0; x < dimensions.width; x += gridSize) {_ctx.beginPath();
        ctx.moveTo(x, _0);
        ctx.lineTo(x, _dimensions.height);
        ctx.stroke();}
      for (let y = 0; y < dimensions.height; y += gridSize) {_ctx.beginPath();
        ctx.moveTo(0, _y);
        ctx.lineTo(dimensions.width, _y);
        ctx.stroke();}

      animationId = requestAnimationFrame(animate)
    },

    animate(),

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
}, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>;
=======
      }
      for (let y = 0, y < dimensions.height, y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke()
      }
      animationId = requestAnimationFrame(animate)
    }
    animate();
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);        cancelAnimationFrame(animationId)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
  }, [dimensions, colors, particleCount, animationSpeed, intensityMultiplier]);
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Quantum Holographic Canvas Background */}
      <canvas
        ref={canvasRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className='fixed inset-0 w-full h-full pointer-events-none z-0'
        style={{
          background: colors.background
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`,        }}
=======
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: colors.background,
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`;
        }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background: colors.background
          filter: `blur(${intensity === 'ultra' ? '0.5px' : '0px'})`;
      />
<<<<<<< HEAD

      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>

=======


=======
<<<<<<< HEAD
          background: colors && colors.background,
          filter: `blur(${intensity === 'ultra' ? '0 && 0.5px' : '0px'})`,        }}
      />;
      {/* Holographic Overlay Effects */}
              `radial-gradient(circle at 20% 20%, ${colors && colors.primary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, ${colors && colors.secondary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 20% 80%, ${colors && colors.tertiary}10 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 20%, ${colors && colors.accent}10 0%, transparent 50%)`,
      animation_id = requestAnimationFrame (animate);
    }
;
    animate ();
;
    return () => {
      // Check condition
if ( {) {
  $2
}
        cancelAnimationFrame (animation_id);
      }
    }  }, [dimensions, colors, particle_count, animation_speed, intensity_multiplier]);        cancelAnimationFrame (animation_id);
      }
    }
  }, [dimensions, colors, particle_count, animation_speed, intensity_multiplier]);
;
  return (
    <div className={`relative min - h-screen overflow - hidden ${class_name}`}>;
      {/* Quantum Holographic Canvas Background */}
      <canvas;
        ref={canvas_ref}
        className='fixed inset - 0 w - full h - full pointer - events - none z - 0';
        style={{
          background: colors.background,
          filter: `blur (${intensity === 'ultra' ? '0.5px' : '0px'})`,        }}
      />;
      {/* Holographic Overlay Effects */}
      <div className='fixed inset - 0 z - 10 pointer - events - none'>        className="fixed inset - 0 w - full h - full pointer - events - none z - 0";
        style={{
          background: colors.background,
          filter: `blur (${intensity === 'ultra' ? '0.5px' : '0px'})`;
      />;
      {/* Holographic Overlay Effects */}
      <div className='fixed inset - 0 z - 10 pointer - events - none'>;
        <motion.div;
          className='absolute inset - 0';
=======
<<<<<<< HEAD
      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>
<<<<<<< HEAD
=======

        }}
      />

      {/* Holographic Overlay Effects */}

          }}
        />

        {/* Holographic Scan Lines */}

          }}

        />
      </div>

      {/* Content Layer */}
      <div className='relative z-20'>{children}</div>

      {/* Quantum Noise Effect */}
      <div className='fixed inset-0 z-30 pointer-events-none opacity-5'>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

      {/* Holographic Overlay Effects */}
      <div className='fixed inset-0 z-10 pointer-events-none'>
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <motion.div
          className='absolute inset-0'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          animate={{
            background: [;
              `radial - gradient (circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`,
              `radial - gradient (circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`,
              `radial - gradient (circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`,
              `radial - gradient (circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ],          }}
          transition={{
            duration: 8
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="fixed inset-0 z-10 pointer-events-none">
        {/* Quantum Field Lines */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              `radial-gradient(circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`
            ]
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
<<<<<<< HEAD
            ease: "easeInOut"

=======
ease: "easeInOut"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }}
        />
        />;
        {/* Holographic Scan Lines */}              `radial-gradient(circle at 20% 20%, ${colors && colors.primary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 80%, ${colors && colors.secondary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 20% 80%, ${colors && colors.tertiary}10 0%, transparent 50%)`;
              `radial-gradient(circle at 80% 20%, ${colors && colors.accent}10 0%, transparent 50%)`;
            ];
          transition={{;
            duration: 8,;
            repeat: Infinity,;
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Holographic Scan Lines */}
<<<<<<< HEAD


                key={i}
                className='absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent';
                style={{

                  top: i * 4,
                  color: colors && colors.primary,

                }}
                animate={{

                  opacity: [0, 1, 0],
                  scale_x: [0, 1, 0],

                }}
                transition={{

=======
        />;
        {/* Holographic Scan Lines */}              `radial - gradient (circle at 20% 20%, ${colors.primary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 80% 80%, ${colors.secondary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 20% 80%, ${colors.tertiary}10 0%, transparent 50%)`;
              `radial - gradient (circle at 80% 20%, ${colors.accent}10 0%, transparent 50%)`;
            ];
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
        {/* Holographic Scan Lines */}
        <div className='absolute inset - 0 opacity - 20'>;
          {Array.from ({ length: Math.ceil (dimensions.height / 4) }).map (
            (_, i) => (
              <motion.div;
                key={i}
                className='absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent';
                style={{
                  top: i * 4,
                  color: colors && colors.primary,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale_x: [0, 1, 0],
                }}
                transition={{
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  duration: 2,
                  delay: i * 0 && 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />;
            );
          )}        </div>;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Quantum Fluctuations */}
        <motion && motion.div        <div className="absolute inset-0 opacity-20">;
          {Array && Array.from({ length: Math && Math.ceil(dimensions && dimensions.height / 4) }).map((_, i) => (;
            <motion&& motion.div
<<<<<<< HEAD

=======
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: Math.ceil(dimensions.height / 4) }).map((_, i) => (
            <motion.div

=======
=======
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: Math.ceil(dimensions.height / 4) }).map((_, i) => (
            <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              />))}        </div>;
        {/* Quantum Fluctuations */}
        <motion.div        <div className="absolute inset - 0 opacity - 20">;
          {Array.from ({ length: Math.ceil (dimensions.height / 4) }).map ((_, i) => (
            <motion.div;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              key={i}
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{

                top: i * 4,
                color: colors && colors.primary

=======
              key={i}
              className="absolute w - full h - px bg - gradient - to - r from - transparent via - current to - transparent";
              style={{
                top: i * 4,
                color: colors && colors.primary
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              }}
              animate={{
                opacity: [0, 1, 0]
                scaleX: [0, 1, 0]
                top: i * 4,
                color: colors.primary;
              }}
              animate={{
                opacity: [0, 1, 0];
                scale_x: [0, 1, 0];
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              }}
              transition={{

                duration: 2,
                delay: i * 0 && 0.1,
                repeat: Infinity,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          }}




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        />
      </div>
=======
        />;
      </div>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Content Layer */}


=======
              }}
              transition={{
                duration: 2,
                delay: i * 0 && 0.1,
                repeat: Infinity,
        </div>
        {/* Quantum Fluctuations */}
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: [
              `inset 0 0 100px ${colors.primary}20`;
              `inset 0 0 200px ${colors.secondary}20`;
              `inset 0 0 150px ${colors.tertiary}20`;
              `inset 0 0 100px ${colors.primary}20`
            ]
          }}
<<<<<<< HEAD
          transition={{
            duration: 6,
            repeat: Infinity,
ease: "easeInOut"
          }}
        />;
      </div>;
=======
<<<<<<< HEAD
=======
=======

        }}
      />

      {/* Holographic Overlay Effects */}

          }}
        />

        {/* Holographic Scan Lines */}

          }}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        />
      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {/* Content Layer */}
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www && www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0 && 0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www && www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0 && 0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              `inset 0 0 100px ${colors.primary}20`;
            ];
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
      {/* Content Layer */}
      <div className='relative z - 20'>{children}</div>;
      {/* Quantum Noise Effect */}
      <div className='fixed inset - 0 z - 30 pointer - events - none opacity - 5'>;
        <motion.div;
          className='absolute inset - 0';
          animate={{
            background: [;
              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.9' num_octaves='4' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`,
              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.7' num_octaves='3' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ],          }}
          transition={{
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',          }}
<<<<<<< HEAD


=======
=======
        />;
      </div>;
      <div className="relative z-20">
        {children}
      </div>
      {/* Quantum Noise Effect */}
      <div className="fixed inset-0 z-30 pointer-events-none opacity-5">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http: //www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
            ]
    </div>);              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.9' num_octaves='4' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`;
              `url ("data:image / svg + xml, %3Csvg view_box='0 0 100 100' xmlns='http://www.w3.org / 2000 / svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractal_noise' base_frequency='0.7' num_octaves='3' stitch_tiles='stitch'/%3E%3C / filter%3E%3Crect width='100' height='100' filter='url (%23noise)'/%3E%3C / svg%3E")`;
            ];
          }}
          transition={{
<<<<<<< HEAD
            duration: 4,
            repeat: Infinity,
transition={{;
            duration: 4,;
            repeat: Infinity,;
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
    </div>;
  );  );
}
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            ease: 'easeInOut',            ease: "easeInOut";
          }}
        />;
      </div>;
    </div>));
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
        />
      </div>
    </div>
  );              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`;
              `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)'/%3E%3C/svg%3E")`
            ]
          }}
          transition={{
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
            duration: 4
            repeat: Infinity
            ease: 'easeInOut',            ease: "easeInOut"
=======
            duration: 4,
            repeat: Infinity,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
            ease: 'easeInOut',            ease: "easeInOut"
          }}
        />
      </div>
    </div>
);  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

          }}
        />
      </div>
<<<<<<< HEAD

=======

            duration: 4,
            repeat: Infinity,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
);  )
}
=======
    </div>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface EnhancedFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'holographic' | 'quantum' | 'neural' | 'cyberpunk' | 'space' | 'biotech' | 'energy';
  intensity?: 'low' | 'medium' | 'high';
  interactive?: boolean;
  glowColor?: string;
  borderColor?: string;
  background?: 'transparent' | 'glass' | 'solid';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  onClick?: () => void;
}

const EnhancedFuturisticCard: React.FC<EnhancedFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'neural',
  intensity = 'medium',
  interactive = true,
  glowColor,
  borderColor,
  background = 'glass',
  size = 'md',
  glow = true,
  onClick
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Get variant-specific colors and effects
  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          primary: '#00ffff',
          secondary: '#0080ff',
          accent: '#8000ff',
          glow: glowColor || '#00ffff',
          border: borderColor || '#00ffff',
          background: 'rgba(0, 255, 255, 0.05)',
          pattern: 'quantum'
        };
      case 'holographic':
        return {
          primary: '#ff00ff',
          secondary: '#00ffff',
          accent: '#ffff00',
          glow: glowColor || '#ff00ff',
          border: borderColor || '#ff00ff',
          background: 'rgba(255, 0, 255, 0.05)',
          pattern: 'holographic'
        };
      case 'neural':
        return {
          primary: '#00ff80',
          secondary: '#8000ff',
          accent: '#ff0080',
          glow: glowColor || '#00ff80',
          border: borderColor || '#00ff80',
          background: 'rgba(0, 255, 128, 0.05)',
          pattern: 'neural'
        };
      case 'cyberpunk':
        return {
          primary: '#ff0080',
          secondary: '#00ff80',
          accent: '#ffff00',
          glow: glowColor || '#ff0080',
          border: borderColor || '#ff0080',
          background: 'rgba(255, 0, 128, 0.05)',
          pattern: 'cyberpunk'
        };
      case 'space':
        return {
          primary: '#4a90e2',
          secondary: '#7b68ee',
          accent: '#ff6b6b',
          glow: glowColor || '#4a90e2',
          border: borderColor || '#4a90e2',
          background: 'rgba(74, 144, 226, 0.05)',
          pattern: 'space'
        };
      case 'biotech':
        return {
          primary: '#00d4aa',
          secondary: '#00a8cc',
          accent: '#ff6b6b',
          glow: glowColor || '#00d4aa',
          border: borderColor || '#00d4aa',
          background: 'rgba(0, 212, 170, 0.05)',
          pattern: 'biotech'
        };
      case 'energy':
        return {
          primary: '#ffd700',
          secondary: '#ff8c00',
          accent: '#ff4500',
          glow: glowColor || '#ffd700',
          border: borderColor || '#ffd700',
          background: 'rgba(255, 215, 0, 0.05)',
          pattern: 'energy'
        };
      default:
        return {
          primary: '#00ff80',
          secondary: '#8000ff',
          accent: '#ff0080',
          glow: glowColor || '#00ff80',
          border: borderColor || '#00ff80',
          background: 'rgba(0, 255, 128, 0.05)',
          pattern: 'neural'
        };
    }
  };

  const styles = getVariantStyles();

  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4 min-h-[200px]';
      case 'md':
        return 'p-6 min-h-[300px]';
      case 'lg':
        return 'p-8 min-h-[400px]';
      case 'xl':
        return 'p-10 min-h-[500px]';
      default:
        return 'p-6 min-h-[300px]';
    }
  };

  // Get background classes
  const getBackgroundClasses = () => {
    switch (background) {
      case 'transparent':
        return 'bg-transparent';
      case 'glass':
        return 'bg-white/5 backdrop-blur-sm';
      case 'solid':
        return 'bg-slate-900/80';
      default:
        return 'bg-white/5 backdrop-blur-sm';
    }
  };

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  const scale = useSpring(1, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      scale.set(1.05);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      scale.set(1);
      mouseX.set(0);
      mouseY.set(0);
    };

    const handleMouseDown = () => {
      setIsPressed(true);
      scale.set(0.95);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
      scale.set(isHovered ? 1.05 : 1);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mousedown', handleMouseDown);
      card.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
        card.removeEventListener('mousedown', handleMouseDown);
        card.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [interactive, mouseX, mouseY, scale, isHovered]);

  // Canvas animation for background effects
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      if (!ctx || !canvas.width || !canvas.height) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const intensityMultiplier = intensity === 'high' ? 1.5 : intensity === 'medium' ? 1 : 0.5;

      // Draw animated background pattern
      if (styles.pattern === 'quantum') {
        // Quantum field pattern
        for (let x = 0; x < canvas.width; x += 20) {
          for (let y = 0; y < canvas.height; y += 20) {
            const wave = Math.sin(time + x * 0.01) * Math.cos(time + y * 0.01);
            if (Math.abs(wave) > 0.3) {
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = `${styles.primary}${Math.floor(Math.abs(wave) * 100).toString(16).padStart(2, '0')}`;
              ctx.fill();
            }
          }
        }
      } else if (styles.pattern === 'holographic') {
        // Holographic interference pattern
        for (let i = 0; i < 50 * intensityMultiplier; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.5 + 0.1;
          
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `${styles.primary}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }
      } else if (styles.pattern === 'neural') {
        // Neural network pattern
        const nodes = [];
        for (let i = 0; i < 20; i++) {
          nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
          });
        }

        nodes.forEach((node, i) => {
          node.x += node.vx;
          node.y += node.vy;
          
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = styles.primary;
          ctx.fill();

          nodes.forEach((otherNode, j) => {
            if (i !== j) {
              const dx = node.x - otherNode.x;
              const dy = node.y - otherNode.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.strokeStyle = `${styles.primary}${Math.floor((100 - distance) / 100 * 100).toString(16).padStart(2, '0')}`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [styles, intensity]);

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl border-2 transition-all duration-300
        ${getSizeClasses()}
        ${getBackgroundClasses()}
        ${interactive ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        borderColor: isHovered ? styles.glow : styles.border,
        boxShadow: glow && isHovered ? `0 0 30px ${styles.glow}40` : 'none',
        transform: interactive ? 'perspective(1000px)' : 'none'
      }}
      animate={{
        rotateX: interactive ? rotateX : 0,
        rotateY: interactive ? rotateY : 0,
        scale: scale
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      onClick={onClick}
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />

      {/* Glow effect */}
      {glow && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, ${styles.glow}20, transparent, ${styles.accent}20)`,
            opacity: isHovered ? 1 : 0
          }}
        />
      )}

      {/* Border glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, ${styles.primary}, ${styles.secondary}, ${styles.accent}, ${styles.primary})`,
          padding: '2px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>

      {/* Interactive particles */}
      {interactive && isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: styles.primary,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Press effect */}
      <AnimatePresence>
        {isPressed && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `radial-gradient(circle at center, ${styles.glow}20, transparent)`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default EnhancedFuturisticCard;
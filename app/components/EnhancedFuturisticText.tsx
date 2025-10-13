import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface EnhancedFuturisticTextProps {
  children: React.ReactNode;
  variant?: 'default' | 'neon' | 'holographic' | 'glitch' | 'cyber' | 'matrix';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'cyan' | 'purple' | 'pink' | 'green' | 'blue' | 'white' | 'gray' | 'custom';
  customColor?: string;
  glow?: boolean;
  animated?: boolean;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  gradient?: boolean;
  gradientColors?: string[];
  typing?: boolean;
  typingSpeed?: number;
  glitchIntensity?: 'low' | 'medium' | 'high';
}

const EnhancedFuturisticText: React.FC<EnhancedFuturisticTextProps> = ({
  children,
  variant = 'default',
  size = 'base',
  weight = 'normal',
  color = 'white',
  customColor,
  glow = false,
  animated = true,
  delay = 0,
  duration = 0.6,
  className = '',
  as: Component = 'span',
  gradient = false,
  gradientColors = ['#00ffff', '#a855f7', '#ec4899'],
  typing = false,
  typingSpeed = 100,
  glitchIntensity = 'medium'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const getSizeClasses = () => {
    const sizes = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl'
    };
    
    return sizes[size];
  };

  const getWeightClasses = () => {
    const weights = {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    };
    
    return weights[weight];
  };

  const getColorClasses = () => {
    if (customColor) return '';
    
    const colors = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      green: 'text-green-400',
      blue: 'text-blue-400',
      white: 'text-white',
      gray: 'text-gray-400'
    };
    
    return colors[color] || colors.white;
  };

  const getVariantClasses = () => {
    const baseClasses = 'transition-all duration-300';
    
    const variants = {
      default: '',
      neon: glow ? 'neon-glow' : '',
      holographic: 'holographic',
      glitch: 'glitch',
      cyber: 'font-mono tracking-wider',
      matrix: 'font-mono text-green-400'
    };
    
    return `${baseClasses} ${variants[variant]}`;
  };

  const getGlowClasses = () => {
    if (!glow) return '';
    
    const glowColors = {
      cyan: 'neon-glow-cyan',
      purple: 'neon-glow-purple',
      pink: 'neon-glow-pink',
      green: 'neon-glow-green',
      blue: 'neon-glow-blue',
      white: 'neon-glow-white',
      gray: 'neon-glow-gray'
    };
    
    return glowColors[color] || glowColors.cyan;
  };

  const getGradientStyle = () => {
    if (!gradient) return {};
    
    return {
      background: `linear-gradient(45deg, ${gradientColors.join(', ')})`,
      backgroundSize: '400% 400%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'holographic-shift 3s ease-in-out infinite'
    };
  };

  const getGlitchStyle = () => {
    if (variant !== 'glitch') return {};
    
    const intensities = {
      low: { duration: 2, intensity: 0.1 },
      medium: { duration: 1.5, intensity: 0.2 },
      high: { duration: 1, intensity: 0.3 }
    };
    
    const config = intensities[glitchIntensity];
    
    return {
      animation: `glitch ${config.duration}s infinite`,
      filter: `hue-rotate(${Math.random() * 360}deg)`
    };
  };

  // Typing effect
  useEffect(() => {
    if (!typing) {
      setDisplayText(children as string);
      return;
    }
    
    const text = children as string;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, children, typing, typingSpeed]);

  // Animation
  useEffect(() => {
    if (animated) {
      controls.start({
        opacity: [0, 1],
        y: [20, 0],
        transition: {
          duration,
          delay: delay * 0.1,
          ease: 'easeOut'
        }
      });
    }
  }, [animated, delay, duration, controls]);

  const textClasses = `
    ${getSizeClasses()}
    ${getWeightClasses()}
    ${getColorClasses()}
    ${getVariantClasses()}
    ${getGlowClasses()}
    ${className}
  `.trim();

  const textStyle = {
    ...getGradientStyle(),
    ...getGlitchStyle(),
    color: customColor
  };

  const textContent = typing ? displayText : children;

  return (
    <motion.div
      animate={controls}
      initial={animated ? { opacity: 0, y: 20 } : {}}
      className="inline-block"
    >
      <Component
        className={textClasses}
        style={textStyle}
        data-text={variant === 'glitch' ? textContent : undefined}
      >
        {textContent}
      </Component>
      
      {/* Glitch effect overlays */}
      {variant === 'glitch' && (
        <>
          <Component
            className={`${textClasses} absolute top-0 left-0 opacity-0 glitch-before`}
            style={{
              ...textStyle,
              color: '#00ffff',
              animation: 'glitch-1 0.5s infinite'
            }}
            data-text={textContent}
          >
            {textContent}
          </Component>
          <Component
            className={`${textClasses} absolute top-0 left-0 opacity-0 glitch-after`}
            style={{
              ...textStyle,
              color: '#ec4899',
              animation: 'glitch-2 0.5s infinite'
            }}
            data-text={textContent}
          >
            {textContent}
          </Component>
        </>
      )}
      
      {/* Matrix rain effect */}
      {variant === 'matrix' && (
        <div className="absolute inset-0 matrix-rain opacity-20" />
      )}
    </motion.div>
  );
};

export default EnhancedFuturisticText;
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface FuturisticTextEnhancedProps {
=======
interface FuturistictextenhancedProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface FuturisticTextEnhancedProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'display';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'cyan' | 'purple' | 'pink';
  gradient?: boolean;
  animated?: boolean;
  glow?: boolean;
  neon?: boolean;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
  delay?: number;
  duration?: number;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function FuturisticTextEnhanced({ className = '', children }: FuturisticTextEnhancedProps) {
=======
export default function Futuristictextenhanced({ className = '', children, ...props }: FuturistictextenhancedProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface FuturisticTextEnhancedProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function FuturisticTextEnhanced({ children, className = '', ...props }: FuturisticTextEnhancedProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function FuturisticTextEnhanced({ className = '', children, ...props }: FuturisticTextEnhancedProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
const FuturisticTextEnhanced: React.FC<FuturisticTextEnhancedProps> = ({
  children,
  variant = 'body',
  size = 'md',
  color = 'white',
  gradient = false,
  animated = true,
  glow = false,
  neon = false,
  className = '',
  delay = 0,
  duration = 0.6
}) => {
  const variantClasses = {
    heading: 'font-bold',
    subheading: 'font-semibold',
    body: 'font-normal',
    caption: 'font-light',
    display: 'font-black'
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl'
  };

  const colorClasses = {
    primary: 'text-white',
    secondary: 'text-gray-300',
    accent: 'text-cyan-400',
    muted: 'text-gray-400',
    white: 'text-white',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400'
  };

  const gradientClasses = {
    primary: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400',
    cyan: 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600',
    purple: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600',
    pink: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600'
  };

  const glowClasses = {
    cyan: 'drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    purple: 'drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]',
    pink: 'drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]'
  };

  const neonClasses = {
    cyan: 'text-shadow-[0_0_20px_rgba(6,182,212,0.8)]',
    purple: 'text-shadow-[0_0_20px_rgba(139,92,246,0.8)]',
    pink: 'text-shadow-[0_0_20px_rgba(236,72,153,0.8)]'
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const getTextColor = () => {
    if (gradient) {
      return gradientClasses[color as keyof typeof gradientClasses] || gradientClasses.primary;
    }
    return colorClasses[color];
  };

  const getGlowEffect = () => {
    if (glow) {
      return glowClasses[color as keyof typeof glowClasses] || glowClasses.cyan;
    }
    return '';
  };

  const getNeonEffect = () => {
    if (neon) {
      return neonClasses[color as keyof typeof neonClasses] || neonClasses.cyan;
    }
    return '';
  };

  const textClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${getTextColor()}
    ${getGlowEffect()}
    ${getNeonEffect()}
    ${className}
  `;

  if (animated) {
    return (
      <motion.div
        className={textClasses}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    );
  }

=======

import React from 'react';

interface FuturistictextenhancedProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristictextenhanced({ className = '', children, ...props }: FuturistictextenhancedProps) {
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={textClasses}>
      {children}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    </div>
  );
};

export default FuturisticTextEnhanced;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className={`futuristictextenhanced-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

import React from 'react';
import FuturisticText from "../components/FuturisticText";

interface FuturistictextProps {
  className?: string;
  children?: React.ReactNode;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
//   children,
  variant = 'body',
  className = '',
  as: Component = 'p'
}) => {
  const baseClasses = "transition-all duration-300";
  
  const variantClasses = {
//     heading: "text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400",
//     subheading: "text-2xl md:text-3xl lg:text-4xl font-bold text-white",
//     body: "text-base md:text-lg text-gray-300 leading-relaxed",
//     caption: "text-sm text-gray-400",
//     neon: "text-cyan-400 font-semibold drop-shadow-lg",
//     gradient: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <Component className={classes}>{children}</Component>;
};

export default FuturisticText;

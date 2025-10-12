import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NeonButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  disabled = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-cyan-500 text-white shadow-cyan-500/50 hover:shadow-cyan-500/75';
      case 'secondary':
        return 'bg-purple-500 text-white shadow-purple-500/50 hover:shadow-purple-500/75';
      case 'accent':
        return 'bg-pink-500 text-white shadow-pink-500/50 hover:shadow-pink-500/75';
      default:
        return 'bg-cyan-500 text-white shadow-cyan-500/50 hover:shadow-cyan-500/75';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const buttonClasses = `
    relative overflow-hidden rounded-lg font-semibold
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${className}
  `;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Neon glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.3)',
            '0 0 40px rgba(6, 182, 212, 0.6)',
            '0 0 20px rgba(6, 182, 212, 0.3)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Neon Button - Zion Tech Group</title>
      </Helmet>
      
      {href ? (
        <Link to={href} className="inline-block">
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </>
  );
};

export default NeonButton;
import React from 'react';
<<<<<<< HEAD

interface FuturisticGlowProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: 'blue' | 'purple' | 'cyan' | 'pink';
}

const FuturisticGlow: React.FC<FuturisticGlowProps> = ({
  children,
  className = '',
  intensity = 'medium',
  color = 'blue'
}) => {
  const intensityClasses = {
    low: 'shadow-lg',
    medium: 'shadow-xl',
    high: 'shadow-2xl'
  };

  const colorClasses = {
    blue: 'shadow-blue-500/50',
    purple: 'shadow-purple-500/50',
    cyan: 'shadow-cyan-500/50',
    pink: 'shadow-pink-500/50'
  };

  return (
    <div className={`${intensityClasses[intensity]} ${colorClasses[color]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticGlow;
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FuturisticGlow() {
  return (
    <>
      <Helmet>
        <title>Futuristic Glow - Zion Tech Group</title>
      </Helmet>
      <div className="futuristic-glow-container">
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-2d8f

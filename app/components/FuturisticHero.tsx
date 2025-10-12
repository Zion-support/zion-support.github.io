import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
interface FuturisticHeroProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default FuturisticHero;
=======
export default function FuturisticHero() {
  return (
    <>
      <div className="futuristic-hero-container">
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

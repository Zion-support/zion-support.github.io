import React from 'react';

interface FuturisticHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

const FuturisticHero: React.FC<FuturisticHeroProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = "" 
}) => {
  return (
    <section className={`text-center py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default FuturisticHero;
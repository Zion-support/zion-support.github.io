import React from 'react';

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
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {title && (
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {title}
                </span>
              </h1>
            )}
            {description && (
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {description}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturisticHero;
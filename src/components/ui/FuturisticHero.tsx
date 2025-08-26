import React from 'react';

interface FuturisticHeroProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticHero({ title, subtitle, children, className = '' }: FuturisticHeroProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {children && (
            <div className="space-y-6">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </section>
  );
}
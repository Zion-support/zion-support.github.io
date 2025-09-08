import React from 'react';






export function NeonBorder({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      {/* Neon border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-lg blur-sm opacity-50"></div>
      <div className="relative bg-zion-slate-dark/90 rounded-lg border border-zion-purple/30">
        {children}
      </div>
    </div>
  );
}

export function GlowingText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`${className} bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-pulse`}>
      {children}
    </span>
  );
}

export function FloatingElement({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
    </div>
  );
}
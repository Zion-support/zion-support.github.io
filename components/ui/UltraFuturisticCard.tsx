import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  cta?: React.ReactNode;
}

export default function UltraFuturisticCard({ 
  children, 
  className = '',
  title,
  description,
  cta 
}: UltraFuturisticCardProps) {
  return (
    <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-300 mb-4">{description}</p>
        )}
        {children}
        {cta && (
          <div className="mt-4">{cta}</div>
        )}
      </div>
    </div>
  );
}
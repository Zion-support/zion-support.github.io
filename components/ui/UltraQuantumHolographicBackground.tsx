import React from 'react';

interface UltraQuantumHolographicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraQuantumHolographicBackground({ children, className = '' }: UltraQuantumHolographicBackgroundProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
      {children}
    </div>
  );
}
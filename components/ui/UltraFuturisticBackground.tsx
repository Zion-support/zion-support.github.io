import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  variant?: string;
  intensity?: string;
}

export default function UltraFuturisticBackground({ children, variant = 'default', intensity = 'medium' }: UltraFuturisticBackgroundProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}

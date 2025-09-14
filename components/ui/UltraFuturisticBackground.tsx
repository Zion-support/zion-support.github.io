import React from 'react';

interface UltraFuturisticBackgroundProps {
  variant?: string;
  intensity?: string;
  children: React.ReactNode;
}

export default function UltraFuturisticBackground({ 
  variant = 'default', 
  intensity = 'medium', 
  children 
}: UltraFuturisticBackgroundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {children}
    </div>
  );
}
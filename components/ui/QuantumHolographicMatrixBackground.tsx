import React from 'react';

interface QuantumHolographicMatrixBackgroundProps {
  children: React.ReactNode;
  variant?: string;
  intensity?: string;
}

export default function QuantumHolographicMatrixBackground({ children, variant = 'default', intensity = 'medium' }: QuantumHolographicMatrixBackgroundProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}

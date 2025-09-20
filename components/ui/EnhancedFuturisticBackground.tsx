import React from 'react';

interface Props { children: React.ReactNode }
export default function EnhancedFuturisticBackground({ children }: Props) {
  return <div className="min-h-screen bg-black">{children}</div>;
}

import React from 'react';

interface Props { children: React.ReactNode }
export default function UltraFuturisticBackground2035({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {children}
    </div>
  );
}
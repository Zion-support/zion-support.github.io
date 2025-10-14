import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'gradient';
}

export default function FuturisticCard({ 
  children, 
  className = '', 
  variant = 'default' 
}: FuturisticCardProps) {
  return (
    <div className={`${className} futuristic-card futuristic-card-${variant}`}>
      {children}
    </div>
  );
}
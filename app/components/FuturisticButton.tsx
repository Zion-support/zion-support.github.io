'use client';
import React from 'react';

export default function FuturisticButton({ children, variant = 'primary', size = 'md', icon, className = '' }: { 
  children: React.ReactNode; 
  variant?: string; 
  size?: string; 
  icon?: React.ReactNode; 
  className?: string; 
}) {
  return <button className={`px-4 py-2 rounded-lg ${className}`}>{children}</button>;
}

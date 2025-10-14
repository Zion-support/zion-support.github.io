'use client';
import React from 'react';

interface FuturisticCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticCard({ children, className = '' }: FuturisticCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
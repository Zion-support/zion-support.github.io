'use client';
import React from 'react';

interface FuturisticServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function FuturisticServiceCard({ children, className = '' }: FuturisticServiceCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
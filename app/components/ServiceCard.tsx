'use client';
import React from 'react';

interface ServiceCardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceCard({ children, className = '' }: ServiceCardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
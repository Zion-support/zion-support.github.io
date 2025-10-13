'use client';
import React from 'react';

export default function FuturisticCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>{children}</div>;
}

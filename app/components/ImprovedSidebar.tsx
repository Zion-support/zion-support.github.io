'use client';
import React from 'react';

interface ImprovedSidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ImprovedSidebar({ children, className = '' }: ImprovedSidebarProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
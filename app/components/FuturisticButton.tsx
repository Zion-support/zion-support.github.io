import React from 'react';

interface FuturisticButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function FuturisticButton({ children, className = '', onClick }: FuturisticButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

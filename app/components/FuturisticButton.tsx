import React from 'react';

interface FuturisticButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticButton({ 
  className = '', 
  children 
}: FuturisticButtonProps) {
  return (
    <div className={'futuristicbutton ' + className}>
      {children || <p>FuturisticButton component</p>}
    </div>
  );
}

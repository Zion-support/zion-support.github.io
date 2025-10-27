import React from 'react';

interface _FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticCard({ 
  className = '', 
  children 
}: _FuturisticCardProps) {
  return (
    <div className={'futuristiccard ' + className}>
      {children || <p>FuturisticCard component</p>}
    </div>
  );
}

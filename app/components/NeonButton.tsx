import React from 'react';

interface NeonButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NeonButton({ className, children }: NeonButtonProps) {
  return (
    <div className={}>
      {children || 'NeonButton Component'}
    </div>
  );
}

import React from 'react';

interface UserExperienceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UserExperienceEnhancer({ className = '', children }: UserExperienceEnhancerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
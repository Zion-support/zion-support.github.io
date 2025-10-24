'use client';
import React from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  enableTransitions?: boolean;
  enableHoverEffects?: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  enableAnimations = true,
  enableTransitions = true,
  enableHoverEffects = true,
}) => {
  return (
    <div className={`user-experience-enhancer ${enableAnimations ? 'animations' : ''} ${enableTransitions ? 'transitions' : ''} ${enableHoverEffects ? 'hover-effects' : ''}`}>
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;
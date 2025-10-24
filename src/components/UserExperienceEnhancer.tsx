import React from 'react';

interface UserExperienceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;

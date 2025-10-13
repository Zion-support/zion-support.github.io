import React from 'react';
import React from "react";
interface UserExperienceEnhancerProps;
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;

interface UserExperienceEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function UserExperienceEnhancer({ className = '', children }: UserExperienceEnhancerProps) {
const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = (
  children,
  className = "",
  title,
  description,
) =>
const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
//   children,
  className = "",
//   title,
//   description,
}) => {
  return (
    <div className={`${className}`}>
      {children}
  </div>
</div>
  );
}
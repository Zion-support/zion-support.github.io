<<<<<<< HEAD
interface TestrunnerxProps {
}
const Testrunnerx: React.FC<TestrunnerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Testrunnerx</h2>
    </div>
=======
import React from 'react';

interface TestrunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Testrunner({ className = '', children, ...props }: TestrunnerProps) {
  return (
    <div className={`testrunner-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main

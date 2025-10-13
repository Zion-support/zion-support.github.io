<<<<<<< HEAD
interface ErrorhandlerxProps {
}
const Errorhandlerx: React.FC<ErrorhandlerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Errorhandlerx</h2>
    </div>
=======
import React from 'react';

interface ErrorhandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
  return (
    <div className={`errorhandler-component ${className}`} {...props}>
      {children}
    </div>
  );
}
>>>>>>> origin/main

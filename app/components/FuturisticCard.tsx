import React from 'react';

<<<<<<< HEAD
interface FuturisticCardProps {
=======
interface FuturisticcardProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function FuturisticCard({ className = '', children }: FuturisticCardProps) {
=======
export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
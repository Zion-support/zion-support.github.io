import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface FuturisticCardProps {
=======
interface FuturisticcardProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface FuturisticCardProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
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
=======
export default function FuturisticCard({ className = '', children, ...props }: FuturisticCardProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

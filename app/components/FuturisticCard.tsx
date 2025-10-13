import React from 'react';

<<<<<<< HEAD
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
=======
interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function FuturisticCard({ children, className = '', ...props }: FuturisticCardProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
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
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6

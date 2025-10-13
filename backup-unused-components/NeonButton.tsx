<<<<<<< HEAD
import React from 'react';

interface NeonButtonProps {
=======
import React from "react";
import { ArrowRight } from "lucide-react";
interface NeonButtonProps;
  children?: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

export default function NeonButton({ className = '', children }: NeonButtonProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
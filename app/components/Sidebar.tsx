<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
<<<<<<< HEAD
=======
}

export default function Sidebar({ className = '', children, ...props }: SidebarProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
}

export default function Sidebar({ className = '', children }: SidebarProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f

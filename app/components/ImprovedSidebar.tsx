import React from 'react';

<<<<<<< HEAD
interface ImprovedSidebarProps {
=======
interface ImprovedsidebarProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function ImprovedSidebar({ className = '', children }: ImprovedSidebarProps) {
  return (
    <div className={`${className}`}>
=======
export default function Improvedsidebar({ className = '', children, ...props }: ImprovedsidebarProps) {
  return (
    <div className={`improvedsidebar-component ${className}`} {...props}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
      {children}
    </div>
  );
}
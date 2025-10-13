import React from 'react';

<<<<<<< HEAD
interface EnhancedFooterProps {
  className?: string;
  children?: React.ReactNode;
=======
export default function EnhancedFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
  </div>
    </footer>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
}

export default function EnhancedFooter({ className = '', children }: EnhancedFooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
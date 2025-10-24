<<<<<<< HEAD
import React from 'react';

interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Navigation;
=======
'use client'

import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation
>>>>>>> cursor/fix-errors-and-merge-to-main-2503

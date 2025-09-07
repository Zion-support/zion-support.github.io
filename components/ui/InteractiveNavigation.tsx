<<<<<<< HEAD

}

interface InteractiveNavigationProps {
  items: NavItem[];
  className?: string;
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';

const InteractiveNavigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">Interactive Nav</div>
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Home</span>
            </Link>
            <Link href="/services">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Services</span>
            </Link>
            <Link href="/about">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">About</span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-600 hover:text-gray-900 transition-colors">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InteractiveNavigation;
=======
const InteractiveNavigation = () => {}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

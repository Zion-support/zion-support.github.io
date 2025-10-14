'use client';
import React from 'react';
<<<<<<< HEAD
interface NavigationProps {
  className?: string;
}
export default function NavigationBackup({ className = '' }: NavigationProps) {
  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
=======

export default function NavigationBackup() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Navigation Backup</h1>
        <p className="text-gray-300 text-lg">
          This is a backup navigation component.
        </p>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
  );
}
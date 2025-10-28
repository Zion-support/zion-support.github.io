'use client';

import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
interface NavigationBackupProps {
  className?: string;
  children?: React.ReactNode;
}

const NavigationBackup: React.FC<NavigationBackupProps> = ({ className = '', children }) => {
  return (<nav className="bg-white shadow-lg" role="navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {logo && <img src={logo} alt={logoText} className="h-8 w-8 mr-2" />}
            <span className="text-xl font-bold text-gray-800">{logoText}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a key={index} href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={ctaHref}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {ctaText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavigationBackup.displayName = 'NavigationBackup';

export default NavigationBackup;
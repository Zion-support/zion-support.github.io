'use client';
import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
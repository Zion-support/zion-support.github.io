'use client'
import Link from 'next/link';

export default function SimpleNavigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
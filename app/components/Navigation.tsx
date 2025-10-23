'use client'
import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Zion Tech Group
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
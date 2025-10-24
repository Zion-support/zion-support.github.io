'use client'

import React from 'react'
import Link from 'next/link'

const SimpleNavigation: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Zion Tech Group
        </Link>
        <div className="...">
          <Link href="/about" className="...">
            About
          </Link>
          <Link href="/services" className="...">
            Services
          </Link>
          <Link href="/contact" className="...">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default SimpleNavigation
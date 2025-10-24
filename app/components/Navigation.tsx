import React from 'react'
import Link from 'next/link'

const Page: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About
            </Link>
            <Link href="/services" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services
            </Link>
            <Link href="/pricing" className="text-gray-500 hove,
      r:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing
            </Link>
            <Link href="/contact" className="text-gray-500 hove,
      r:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
;
export default Page;
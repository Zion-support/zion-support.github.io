import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | Zion Tech Group',
  description: 'The page you are looking for could not be found. Explore our AI and technology solutions.',
}

export default function NotFound() : any {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-400 mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The page you are looking for could not be found. It might have been moved, deleted, or doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Go Home
          </Link>
          
          <div className="text-gray-400">
            <p className="mb-4">Or explore our services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="text-blue-400 hover:text-blue-300 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact
              </Link>
              <Link href="/tools" className="text-blue-400 hover:text-blue-300 transition-colors">
                Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
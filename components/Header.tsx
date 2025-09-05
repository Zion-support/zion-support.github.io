import React from 'react'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">Zion Tech Group</div>
          <nav className="hidden sm:flex gap-6 text-sm text-gray-700">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
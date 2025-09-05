import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">Zion Tech Group</Link>
        <div className="flex items-center gap-4">
          <Link href="/ai-services" className="text-gray-700 hover:text-blue-600">AI Services</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
          <Link href="/help" className="text-gray-700 hover:text-blue-600">Help</Link>
        </div>
      </nav>
    </header>
  )
}
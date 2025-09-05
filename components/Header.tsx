import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Zion Tech Group
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <Link href="/services">Services</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/help">Help</Link>
        </nav>
      </div>
    </header>
  )
}


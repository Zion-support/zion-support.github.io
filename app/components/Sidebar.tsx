'use client'
import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  onSidebarToggle?: () => void
  isOpen?: boolean
  onClose?: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onSidebarToggle }) => {
  return (
    <aside className="bg-gray-100 w-64 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Navigation</h2>
      </div>
      <nav className="space-y-2">
        <Link href="/" className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded">
          Home
        </Link>
        <Link href="/about" className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded">
          About
        </Link>
        <Link href="/services" className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded">
          Services
        </Link>
        <Link href="/contact" className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded">
          Contact
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
import React from 'react',
import Link from 'next/link',
export default function Header() {
  return (
    <header className="bg-zion-blue-dark border-b border-zion-blue-light">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" >
              <span className="text-2xl font-bold text-white">
                Zion Tech Group
              </span>
            </Link>
          <nav className="flex gap-6">
            <Link href="/services" className="text-zion-cyan hover: text-white transition-colors">
              Services
            </Link>
            <Link href="/about" >
              <span className="text-zion-cyan hover:text-white transition-colors">
                About
              </span>
            </Link>
            <Link href="/contact" >
              <span className="text-zion-cyan hover:text-white transition-colors">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )}
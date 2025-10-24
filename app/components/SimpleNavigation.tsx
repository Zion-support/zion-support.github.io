'use client';
import React from 'react'
import Link from 'next/link'
const SimpleNavigation: React.FC = () => {
  return (
    <nav className="...">
      <div className="...">
        <Link href="/" className="...">
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
  )}
export default SimpleNavigation
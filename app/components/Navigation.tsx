'use client'

import React from 'react'
import Link from 'next/link'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navigation

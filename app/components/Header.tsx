'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Zion Tech Group</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

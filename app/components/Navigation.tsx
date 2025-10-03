import React from 'react';

// Simple navigation component
export default function Navigation() {
  return (
    <nav className="text-left">
      <div className="text-left">
        <a href="/" className="text-left">Home</a>
        <a href="/about" className="text-left">About</a>
        <a href="/contact" className="text-left">Contact</a>
      </div>
    </nav>
  );
}
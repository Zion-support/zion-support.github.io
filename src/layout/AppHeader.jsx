import React from 'react';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="w-full py-4 px-6 border-b border-zinc-800 bg-black/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold">Zion Tech Group</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/about" className="text-zinc-300 hover:text-white">About</Link>
          <Link to="/services" className="text-zinc-300 hover:text-white">Services</Link>
          <Link to="/pricing" className="text-zinc-300 hover:text-white">Pricing</Link>
          <Link to="/contact" className="text-zinc-300 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
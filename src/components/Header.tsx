import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold">Zion Tech Group</Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/services" className="text-white/80 hover:text-white">Services</Link>
          <Link to="/blog" className="text-white/80 hover:text-white">Blog</Link>
          <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
          <Link to="/contact" className="text-white/80 hover:text-white">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
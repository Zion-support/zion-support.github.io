import React from "react";

export function Header() {
  return (
    <header className="bg-zion-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">Z</span>
          </div>
          <span className="text-xl font-bold">Zion Tech Group</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-zion-cyan">Home</a>
          <a href="/services" className="hover:text-zion-cyan">Services</a>
          <a href="/about" className="hover:text-zion-cyan">About</a>
          <a href="/contact" className="hover:text-zion-cyan">Contact</a>
        </nav>
      </div>
    </header>
  );
}
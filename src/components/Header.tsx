import React, { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Zion Tech Group
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
"use client";

import React, { useState, useEffect } from "react";

interface Service {
  id: string;
  name: string;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
const handleScroll: any = () => {
setIsScrolled(window.scrollY > 0);
};

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Zion
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>      </div>
    </header>
  );
}
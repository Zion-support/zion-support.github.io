<<<<<<< HEAD
interface Service {
  id: string;
  name: string;
}

import React, { useState, useEffect } from "react";

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
        </div>
=======
import React from "react";
import Link from "next/link";
import { Brain } from "lucide-react";

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Zion Tech Group</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-blue-200 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
        </nav>
>>>>>>> pr-22703
      </div>
    </header>
  );
}
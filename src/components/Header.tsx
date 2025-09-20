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
      </div>
    </header>
  );
}
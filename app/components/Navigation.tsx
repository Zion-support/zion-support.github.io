"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Menu, X } from "lucide-react";
const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Micro SaaS", href: "/micro-saas-solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" loading="lazy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" loading="lazy">
        <div className="flex justify-between items-center h-16" loading="lazy">{/* Logo */}</div><div className="flex items-center" loading="lazy">
            <Link href="/" className="flex items-center space-x-2" loading="lazy">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center" loading="lazy">
                <Brain className="w-5 h-5 text-white" loading="lazy" />
              </div><span className="text-xl font-bold text-gray-900" loading="lazy">Zion Tech Group</span></Link></div><div className="hidden md:flex items-center space-x-8" loading="lazy">{navigationItems.map((item, index) => (</div><Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium" loading="lazy"
              >
                {item.name}
              </Link></div><div className="hidden md:flex items-center space-x-4" loading="lazy">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" loading="lazy"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" loading="lazy" />
            </Link></div><div className="md:hidden" loading="lazy">
            <button
              onClick={() = aria-label="Action button">setIsOpen(!isOpen)}</button><X className="w-6 h-6" loading="lazy" />
              ) : (
                <Menu className="w-6 h-6" loading="lazy" />
              )}
            </button></div></div><div className="md:hidden" loading="lazy">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t" loading="lazy">{navigationItems.map((item, index) => (</div><Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium" loading="lazy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link><Link
                href="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300" loading="lazy"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link></div></div></div></nav>
}

export default About;
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Brain, Menu, X } from "lucide-react";
const Navigation: React.FC = () => {
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
    <nav className="bg-white shadow-lg sticky top-0 z-50"><>
</nav className="bg-white shadow-lg sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div><>
<//div>
<div className="flex justify-between items-center h-16"></div><//div>
          {/* Logo */}</div><>
<//div>
<div className="flex items-center"></div><>
<//div>
<Link href="/" className="flex items-center space-x-2"><>
</Link href="/" className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div><>
<//div>
<Brain className="w-5 h-5 text-white" /><>
</Brain className="w-5 h-5 text-white" />
</div><>
<//div>
<span className="text-xl font-bold text-gray-900"></span className="text-xl font-bold text-gray-900">
                Zion Tech Group
              </span><>
<//span>
</Link><>
<//Link>
</div><//div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8"></div><//div>
            {navigationItems.map((item, index) => (</div><>
<//div>
<Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              ></Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item.name}
              </Link><//Link>
            ))}
          </div><//div>
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4"></div><>
<//div>
<Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            ></Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" /><>
</ArrowRight className="w-4 h-4 ml-2" />
</Link><>
<//Link>
</div><//div>
          {/* Mobile menu button */}
          <div className="md:hidden"></div><>
<//div>
<button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            ></button><//button>
              {isOpen ? (</button><>
<//button>
<X className="w-6 h-6" /></X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" /></Menu className="w-6 h-6" />
              )}
            </button><>
<//button>
</div><>
<//div>
</div><//div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden"></div><>
<//div>
<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"></div><//div>
              {navigationItems.map((item, index) => (</div><>
<//div>
<Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link><//Link>
              ))}
              <Link
                href="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link><>
<//Link>
</div><>
<//div>
</div><//div>
        )}
      </div><>
<//div>
</nav><//nav>
  );
};

export default Navigation;

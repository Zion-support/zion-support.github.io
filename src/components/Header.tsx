import React, { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
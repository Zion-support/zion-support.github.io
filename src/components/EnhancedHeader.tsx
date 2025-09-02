import React from 'react';''export const EnhancedHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">"      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">"        <div className="flex justify-between items-center py-6">"          <div className="flex items-center">"            <a href="/" className="text-2xl font-bold text-blue-900">"              Zion Tech Group"            </a>
          </div>
          <nav className="hidden md:flex space-x-8">"            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>"            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>"            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>"            <a href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</a>"            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>"          </nav>"        </div></div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block w-full py-2 text-gray-700 hover:text-blue-600">
                {link.label}
              </a>
            ))}
            <a href="/services/ai" className="block w-full py-2 text-blue-700 font-medium">Explore AI</a>
          </div>
        </div>
      )}
    </header>
  );
};

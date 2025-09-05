import React, { useState } from 'react',
import Link from 'next/link',

const EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50"></nav>
      <div className="container mx-auto px-4"></div>
        <div className="flex justify-between items-center py-4"></div>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2"></Link>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"></div>
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8"></div>
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              About
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              Blog
            </Link>
            <Link href="/talent" className="text-gray-600 hover:text-blue-600 font-medium transition-colors"></Link>
              Careers
            </Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"></Link>
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4"></div>
            <div className="space-y-2"></div>
              <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Home
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Services
              </Link>
              <Link href="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Products
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                About
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Blog
              </Link>
              <Link href="/talent" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Careers
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"></Link>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  ),
},

export default EnhancedNavigation,
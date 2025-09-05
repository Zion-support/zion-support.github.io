import React, { useState } from 'react',
import Link from 'next/link',
const EnhancedNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),

  return (
    <nav className=&quot;bg-white shadow-lg sticky top-0 z-50&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;flex justify-between items-center py-4&quot;>          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-2&quot;>
            <div className=&quot;w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center&quot;>
              <span className=&quot;text-white font-bold text-xl&quot;>Z</span>
            </div>
            <span className=&quot;text-xl font-bold text-gray-800&quot;>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            <Link href=&quot;/&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>              Home
            </Link>
            <Link href=&quot;/services&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Services
            </Link>
            <Link href=&quot;/products&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Products
            </Link>
            <Link href=&quot;/about&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              About
            </Link>
            <Link href=&quot;/blog&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Blog
            </Link>
            <Link href=&quot;/talent&quot; className=&quot;text-gray-600 hover:text-blue-600 font-medium transition-colors&quot;>
              Careers
            </Link>
            <Link href=&quot;/contact&quot; className=&quot;bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors&quot;>
              Get Started
            </Link>
          </div>

          {_/* Mobile menu button */}
          <button
            className=&quot;lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100&quot;
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
              <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M4 6h16M4 12h16M4 18h16&quot; />            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className=&quot;lg:hidden border-t border-gray-200 py-4&quot;>
            <div className=&quot;space-y-2&quot;>
              <Link href=&quot;/&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>                Home
              </Link>
              <Link href=&quot;/services&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Services
              </Link>
              <Link href=&quot;/products&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Products
              </Link>
              <Link href=&quot;/about&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                About
              </Link>
              <Link href=&quot;/blog&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Blog
              </Link>
              <Link href=&quot;/talent&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Careers
              </Link>
              <Link href=&quot;/contact&quot; className=&quot;block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md&quot;>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
},

export default EnhancedNavigation,
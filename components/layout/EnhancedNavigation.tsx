import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const EnhancedNavigation = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${servicesOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services/ai-analytics-dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Analytics Dashboard
                </Link>
                <Link href="/services/ai-content-generation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Generation
                </Link>
                <Link href="/services/ai-content-optimizer" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Content Optimizer
                </Link>
                <Link href="/services/ai-copilots" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Copilots
                </Link>
                <Link href="/services/ai-customer-insights" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Customer Insights
                </Link>
                <Link href="/services/ai-finance-analyzer" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Finance Analyzer
                </Link>
                <Link href="/services/ai-healthcare-assistant" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Healthcare Assistant
                </Link>
                <Link href="/services/ai-powered-tools" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Powered Tools
                </Link>
                <Link href="/services/ai-project-management" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Project Management
                </Link>
                <Link href="/services/ai-project-manager" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Project Manager
                </Link>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 ${solutionsOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Enterprise Solutions
                </Link>
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Integration
                </Link>
                <Link href="/solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Digital Transformation
                </Link>
              </div>
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link href="/" className="block py-2 text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <div className="py-2">
                <div className="text-gray-700 font-medium mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  <Link href="/services/ai-analytics-dashboard" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Analytics Dashboard
                  </Link>
                  <Link href="/services/ai-content-generation" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Content Generation
                  </Link>
                  <Link href="/services/ai-content-optimizer" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Content Optimizer
                  </Link>
                  <Link href="/services/ai-copilots" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Copilots
                  </Link>
                  <Link href="/services/ai-customer-insights" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Customer Insights
                  </Link>
                  <Link href="/services/ai-finance-analyzer" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Finance Analyzer
                  </Link>
                  <Link href="/services/ai-healthcare-assistant" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Healthcare Assistant
                  </Link>
                  <Link href="/services/ai-powered-tools" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Powered Tools
                  </Link>
                  <Link href="/services/ai-project-management" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Project Management
                  </Link>
                  <Link href="/services/ai-project-manager" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Project Manager
                  </Link>
                </div>
              </div>
              <div className="py-2">
                <div className="text-gray-700 font-medium mb-2">Solutions</div>
                <div className="pl-4 space-y-1">
                  <Link href="/solutions" className="block py-1 text-gray-600 hover:text-blue-600">
                    Enterprise Solutions
                  </Link>
                  <Link href="/solutions" className="block py-1 text-gray-600 hover:text-blue-600">
                    AI Integration
                  </Link>
                  <Link href="/solutions" className="block py-1 text-gray-600 hover:text-blue-600">
                    Digital Transformation
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link href="/about" className="block py-2 text-gray-600 hover:text-blue-600">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
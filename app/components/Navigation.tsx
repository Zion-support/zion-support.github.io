import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const solutions = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <a href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
            Zion Tech Group
          </a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
            >
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-700 rounded-lg shadow-xl z-50">
                <div className="py-2">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="block px-4 py-2 text-sm hover:bg-slate-600 transition-colors"
                    >
                      {solution.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <a href="/services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a>
          <a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a>
          <a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

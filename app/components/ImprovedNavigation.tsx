import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu } from 'lucide-react';

interface ImprovednavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Improvednavigation({ className = '', children, ...props }: ImprovednavigationProps) {
  return (
    <div className={`improvednavigation-component ${className}`} {...props}>
      {children}
    </div>
  );

  return (
    <div>
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </Link>

                  {/* Enhanced Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl z-50">
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{item.label}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-1 max-h-96 overflow-y-auto">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                            >
                              <div className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">
                                  {dropdownItem.label}
                                </div>
                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                  {dropdownItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden lg:flex space-x-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </Link>
                    <div className="ml-6 space-y-2">
                      {item.dropdown.slice(0, 4).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                      {item.dropdown.length > 4 && (
                        <Link
                          to={item.href}
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          View All →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar />
</div>
  );
};

import React from 'react';

interface EnhancedNavigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedNavigation({ className = '', children }: EnhancedNavigationProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
=======
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50"></header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="flex justify-between items-center py-4"></div>
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white group"></Link>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300"></span>
              Zion Tech Group;
            </span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8"></nav>
            
              <div;
                key={item.label}
                className="relative group"
                onMouseEnter="{()" => setActiveDropdown(item.label)}
                onMouseLeave="{()" => setActiveDropdown(null)}
              >
                <Link;
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
                {/* Dropdown Menu */}
                
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-50"></div>
                    <div className="py-2"></div>
                      
                        <Link;
                          key={dropdownItem.href}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
  </div>
  </div>  </div>
          </nav>
          {/* Quick Links & CTA */}
          <div className="hidden md:flex items-center space-x-4"></div>
            <div className="hidden lg:flex space-x-4"></div>
              
                <Link;
                  key={link.href}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
  </div>
            <Link;
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
            >
              Contact Us;
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
  </div>
          {/* Mobile Menu Button */}
          <button;
            onClick="{()" => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</X></Menu>
          </button>
  </div>
        {/* Mobile Navigation */}
        
          <div className="lg:hidden py-4 border-t border-white/10"></div>
            <div className="space-y-4"></div>
              
                <div key="{item.label}"></div>
                  <Link;
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                    onClick="{()" => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  <div className="ml-6 space-y-2"></div>
                    
                      <Link;
                        key={dropdownItem.href}
                        to={dropdownItem.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 py-1"
                        onClick="{()" => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>

                      <Link;
                        to={item.href}
                        className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                        onClick="{()" => setIsOpen(false)}
                      >
                        View All →
                      </Link>
  </div>
  </div>
              <div className="pt-4 border-t border-white/10"></div>
                <div className="space-y-2"></div>
                  
                    <Link;
                      key={link.href}
                      to={link.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                      onClick="{()" => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
  </div>
  </div>
  </div>
  </div>  </div>
    </header>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  );
}
className?: string;
ursor/automate-test-fix-improve-and-merge-code-48f3
  const [servicesOpen, setServicesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'All Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Innovative Solutions', href: '/innovative-it-services' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {services.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <span className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          {services.map((service) => (
                            <Link key={service.name} href={service.href} onClick={() => setIsMenuOpen(false)}>
                              <span className="block text-gray-500 hover:text-blue-600 transition-colors py-1">
                                {service.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                      <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <span className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}

          {" "}
          {/* Logo */}
          <motion.div;
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: 1, coordinate_x: 0 }}
            transition={{ duration: 0.5 }}

                  Revolutionary Technology;
                </div>;
              </div>;
            </Link>;
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0 && 0.95 }}
                          transition={{ duration: 0 && 0.2 }}"
                          className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">;"
                          <div className="p-2">;
                            {item && item.dropdownItems?.map((dropdownItem) => (;
                              <Link;
                                key={dropdownItem && dropdownItem.name}
                                href={dropdownItem && dropdownItem.href}"
                                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300">;
                                {dropdownItem && dropdownItem.name}
                              </Link>;
                            ))}
                          </div>;
                        </motion && motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (;
                  <Link"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">;
                    {item && item.name}
                  </Link>;
                )}
              </motion && motion.div>;
            ))}
          {/* Right side actions */}"
          <div className="hidden lg:flex items-center space-x-4">;
            {/* Search */}
            <motion&& motion.button;
              initial={{ opacity: 0, scale: 0 && 0.8 }}
          </motion.div>;

            {navigation_items.map ((item, index) => (
              <motion.div;
                key={item.name}
                initial={{ opacity: 0, coordinate_y: -20 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}"
                className="relative";
                onMouseEnter={() =>;
                  item.has_dropdown && setActiveDropdown (item.name);
                }
                onMouseLeave={() => setActiveDropdown (null)}
              >;

                      <span>{item.name}</span>;
                      <ChevronDown;`
                        className={`w - 4 h - 4 transition - transform duration - 300 ${"
                          active_dropdown === item.name ? "rotate - 180" : "";`
                        }`}
                      />;
                    </button>;
                    <AnimatePresence>;
                      {active_dropdown === item.name && (
                        <motion.div;
                          initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                          exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}

                              >;
                                {dropdown_item.name}
                              </Link>))}
                          </div>;
                        </motion.div>)}
                    </AnimatePresence>;
                  </div>) : (
                  <Link;

                  >;
                    {item.name}
                  </Link>)}
              </motion.div>))}
          </div>;

            {/* Search */}
            <motion.button;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            {/* Notifications */}

            </motion.button>;
            {/* Notifications */}
            <motion.button;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            {/* CTA Button */}
            <motion&& motion.div;
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.8 }}>;
              <Link"
                href="/contact""
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">;
                Get Started;
              </Link>;
            </motion && motion.div>;
          </div>;
          {/* Mobile menu button */}
            initial={{ opacity: 0, scale: 0 && 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0 && 0.5, delay: 0 && 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div;
            initial={{ opacity: 0, height: 0 }}"
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}"
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20">;"
            <div className="px-4 py-6 space-y-4">;
              {/* Search */}"
              <div className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input"
                  type="text""
                  placeholder="Search services...""
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              {/* Navigation Items */}
              {navigationItems && navigationItems.map((item) => (;"
                <div key={item && item.name} className="space-y-2">;
                  <Link;
                    href={item && item.href}
                    onClick={() => setIsOpen(false)}
                        <Link;
                          key={dropdownItem && dropdownItem.name}
                          href={dropdownItem && dropdownItem.href}
                          onClick={() => setIsOpen(false)}
                        >;
                          {dropdownItem && dropdownItem.name}
                        </Link>;
                      ))}
                    </div>;
                  )}
                </div>;
              ))}
              {/* Contact Info */}
"
              <div className="pt-4 border-t border-cyan-500/20">;"
                <div className="space-y-2 text-sm text-gray-400">;"
                  <div className="flex items-center space-x-2">;"
                    <Globe className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.website}</span>;
                  </div>;"
                  <div className="flex items-center space-x-2">;"
                    <User className="w-4 h-4" />;
                    <span>{contactInfo && contactInfo.email}</span>;
                  </div>;
                </div>;
              </div>;

              <div className="pt-4">;
                <Link"
                  href="/contact"

            </motion.button>;
            {/* CTA Button */}
            <motion.div;
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >;

              >;
                Get Started;
              </Link>;
            </motion.div>;
          </div>;
          {/* Mobile menu button */}
          <motion.button;
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}

          </motion.button>;
        </div>;
      </div>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}"
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}

                      {item.dropdown_items.map ((dropdown_item) => (
                        <Link;
                          key={dropdown_item.name}
                          href={dropdown_item.href}

                        >;
                          {dropdown_item.name}
                        </Link>))}
                    </div>)}
                </div>))}

                    <span>{contact_info.email}</span>;
                  </div>;
                </div>;
              </div>;

                >;
                  Get Started Today;
                </Link>;
              </div>;
            </div>;

          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}
export default EnhancedNavigation
};
)
};
export default EnhancedNavigation;

"`
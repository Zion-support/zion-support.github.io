<<<<<<< HEAD
import React, { useState } from 'react',;',';';
    ';';';';
import Link from 'next/link',;';';
    ';';';';
import { motion, AnimatePresence  } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Cloud,;
  Zap,;';
  Users,;';';
  Settings,;';';';
  Network,;',';';
    ';';';
  Cpu} from 'lucide-react';';';';
const navigation = [',';';
    ';';' { name: 'Home', href: '/' },';';' {',';';
    ';';';
    name: 'Services',',';';
    ';';';
    href: '/services',';';';
    dropdown: [',';';
    ';';' { name: 'AI Services', href: '/ai-services', icon: Brai n, description: 'Cutting-edge AI solutions' },',';';
    ';';' { name: 'IT Services', href: '/it-services', icon: Clou d, description: 'Comprehensive IT solutions' },',';';
    ';';' { name: 'Micro SaaS', href: '/micro-saas', icon: Za p, description: 'Scalable SaaS applications' },',';';
    ';';' { name: 'All Services', href: '/services', icon: User s, description: 'Complete service portfolio' }';';
    ]';';';
},',';';
    ';';' { name: 'About', href: '/about' },',';';
    ';';' { name: 'Contact', href: '/contact' }
];
const Navigation: Reac t.FC = () => {
  const [isOpen, setIsOpen] = useState<any>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (props: any) => {
    setActiveDropdown(activeDropdown === name ? null : name)};
  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm: p x-6 lg: p x-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md: bloc k">
            <div className="ml-10 flex items-baseline space-x-8">
              { navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)
      )}
    </div>
  );
}
                        className="text-gray-300 hover: tex t-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4"  />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 1 0, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 1 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                          >
                            <div className="p-4">
                              <div className="grid grid-cols-1 gap-2">
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-3 rounded-lg hover: b g-gray-800/50 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)
      )}
    </div>
  );
}
                                  >
                                    <div className="flex-shrink-0">
                                      <dropdownItem.icon className="w-5 h-5 text-cyan-400 group-hover: tex t-cyan-300 transition-colors" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium text-white group-hover: tex t-cyan-100 transition-colors">
                                        {dropdownItem.name}
                                      </p>
                                      <p className="text-xs text-gray-400 group-hover: tex t-gray-300 transition-colors">
                                        {dropdownItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))
      )}
    </div>
  );
}
                              </div>
                            </div>
                          </motion.div>
                        )
      )}
    </div>
  );
}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover: tex t-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )
      )}
    </div>
  );
}
                </div>
              ))
      )}
    </div>
  );
}
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden md: bloc k">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover: shado w-lg hover: shado w-blue-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md: hidde n">
            <button
              onClick={() => setIsOpen(!isOpen)
      )}
    </div>
  );
}
              className="text-gray-300 hover: tex t-white p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>' {isOpen && (';';
          <motion.div';';';
            initial={{ opacity: 0, height: 0 }}',';';
    ';';';
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md: hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm: p x-3">
              { navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)
      )}
    </div>
  );
}
                        className="text-gray-300 hover: tex t-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4"  />
                      </button>
                      <AnimatePresence>' {activeDropdown === item.name && (';';
                          <motion.div';';';
                            initial={{ opacity: 0, height: 0 }}',';';
    ';';';
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="text-gray-400 hover: tex t-white block px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setIsOpen(false)}}
                              >
                                <dropdownItem.icon className="w-4 h-4" />
                                <span>{dropdownItem.name}</span>
                              </Link>
                            ))
      )}
    </div>
  );
}
                          </motion.div>
                        )
      )}
    </div>
  );
}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover: tex t-white block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsOpen(false)
      )}
    </div>
  );
}
                    >
                      {item.name}
                    </Link>
                  )
      )}
    </div>
  );
}
                </div>
              ))
      )}
    </div>
  );
}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover: shado w-lg hover: shado w-blue-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)
      )}
    </div>
  );
}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}
      </AnimatePresence>
    </nav>';
  );';';
};';';';
export default Navigation;"';';';';
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { Brain, Menu, X, ChevronDown, Search, Phone, Mail } from 'lucide-react';

export default function Navigation(props: any) {
  const [open, setOpen] = useState<any>(false);
  const [servicesOpen, setServicesOpen] = useState<any>(false);

  const services = [
    { name: 'AI Services', href: '/services/ai-services', description: 'Artificial Intelligence Solutions' },
    { name: 'IT Services', href: '/services/it-services', description: 'Information Technology Services' },
    { name: 'Micro SaaS', href: '/services/micro-saas', description: 'Software as a Service Solutions' },
    { name: 'Cybersecurity', href: '/services/it/cybersecurity', description: 'Security & Protection' },
    { name: 'Cloud Services', href: '/services/it/cloud-finops', description: 'Cloud Infrastructure' },
    { name: 'Platform Engineering', href: '/services/it/platform-engineering', description: 'Platform Development' }
  ];

  const mainNavItems = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg grid place-items-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              <p className="text-xs text-gray-500 -mt-1">Innovation & Technology</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{service.name}</h4>
                              <p className="text-sm text-gray-500">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <Link 
                          href="/services" 
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/request-quote" 
              className="text-sm text-gray-700 hover:text-blue-600 transition-colors"
            >
              Get Quote
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            aria-label="Toggle menu" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t space-y-3">
                <Link 
                  href="/request-quote" 
                  className="block w-full text-center py-2 text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </Link>
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
>>>>>>> merge-all-prs-20250904-105408

</any>
</any>
</motion>
</motion>
</motion>
</string>
</any>
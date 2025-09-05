import React, { useState } from 'react';''
import Link from 'next/link';''
import { motion } from 'framer-motion';''
import { Menu, X, ChevronDown } from 'lucide-react';'
const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = ['
    { name: 'Home', href: '/' },'
    { '
      name: 'Services',''
      href: '/services','
      submenu: ['
        { name: 'AI Services', href: '/ai-services' },''
        { name: 'IT Services', href: '/it-services' },''
        { name: 'Micro SaaS', href: '/micro-saas' },''
        { name: 'All Services', href: '/services' }']
      ]
    },'
    { name: 'Solutions', href: '/solutions' },''
    { name: 'About', href: '/about' },''
    { name: 'Contact', href: '/contact' }'
  ];

  return ('
    <header className="bg-white shadow-lg sticky top-0 z-50">"
</header>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center py-4">"
</div>"
          <div className="flex-shrink-0">"
</div>"
            <Link href="/" className="flex items-center">"
</Link>"
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
                <span className="text-white font-bold text-xl">Z</span>"
              </div>"
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech Group</span>"
            </Link>
          </div>"
          <nav className="hidden md:flex space-x-8">"
</nav>"
              <div key={item.name} className="relative group">"
</div>
                <Link;
                  href={item.href}"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"")
                  onMouseEnter={() => item.submenu && setIsServicesOpen(true)}
</Link>"
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}"
</ChevronDown>
                </Link>
                  <motion.div;
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}"
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50""
                    onMouseEnter={() => setIsServicesOpen(true)}
</motion>
                      <Link;
                        key={subItem.name}
                        href={subItem.href}"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200""
                      >
</Link>
                      </Link>
                  </motion.div>
                )}
              </div>
          </nav>"
          <div className="hidden md:flex items-center space-x-4">"
</div>
            <Link;"
              href="/contact"""
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium""
            >
</Link>
            </Link>
          </div>"
          <div className="md:hidden">"
</div>
            <button;
              onClick={() => setIsMenuOpen(!isMenuOpen)}
</button>"
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
</X>
            </button>
          </div>
        </div>
          <motion.div;
            initial={{ opacity: 0, height: 0 }}"
            animate={{ opacity: 1, height: 'auto' }}'
            exit={{ opacity: 0, height: 0 }}'
            className="md:hidden border-t border-gray-200 py-4""
          >
</motion>"
            <nav className="space-y-2">"
</nav>
                <div key={item.name}>
</div>
                  <Link;
                    href={item.href}"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200""
                    onClick={() => setIsMenuOpen(false)}
</Link>
                  </Link>"
                    <div className="ml-4 space-y-1">"
</div>
                        <Link;
                          key={subItem.name}
                          href={subItem.href}"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200""
                          onClick={() => setIsMenuOpen(false)}
</Link>
                        </Link>
                    </div>
                </div>"
              <div className="pt-4">"
</div>
                <Link;"
                  href="/contact"""
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium""
                  onClick={() => setIsMenuOpen(false)}
</Link>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>"
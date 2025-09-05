import React, { useState } from 'react';''
import Link from 'next/link';'

  ChevronDown,
  Brain,
  Network,
  Cloud,
  Users,
  Shield,
  BarChart3,
  Settings,
  Globe,
  FileText,
  MessageSquare,
  Rocket,
  Building,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Zap,
  Video,
  Car,
  Search,
  Sprout;'
} from 'lucide-react';'
const navigation = [
  {'
    name: 'Services',''
    href: '/services','
    children: [
]
    ]
  },
  {'
    name: 'Solutions',''
    href: '/solutions','

    ]
  },
  {'
    name: 'Industries',''
    href: '/industries','

    ]
  },
  {'
    name: 'Resources',''
    href: '/resources','

];

const contactInfo = {'
  phone: '+1 302 464 0950',''
  email: 'kleber@ziontechgroup.com',''
  address: '364 E Main St STE 1008, Middletown, DE 19709''
};


  return ('
    <header className="bg-white shadow-lg sticky top-0 z-50">"
</header>"
      <div className="bg-blue-900 text-white py-2">"
</div>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">"
</div>"
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">"
</div>"
              <div className="flex items-center gap-2">"
</div>"
                <Phone className="w-4 h-4" />"
</Phone>

              </div>"
              <div className="flex items-center gap-2">"
</div>"
                <Mail className="w-4 h-4" />"
</Mail>
                <span>{contactInfo.email}</span>
              </div>
            </div>"
            <div className="flex items-center gap-2">"
</div>"
              <MapPin className="w-4 h-4" />"
</MapPin>
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>"
              <div key={item.name} className="relative group">"
</div>
                <Link;
                  href={item.href}"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"")
                  onMouseEnter={() => setActiveDropdown(item.name)}
</Link>"
                  <item.icon className="w-4 h-4" />"
</item>"
                  <span className="text-sm">{item.name}</span>""
                  {item.children && <ChevronDown className="w-3 h-3" />}"
</ChevronDown>
                </Link>
                  <AnimatePresence>
</AnimatePresence>
                      <motion.div;
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}"
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50""
                        onMouseEnter={() => setActiveDropdown(item.name)}
</motion>
                          <Link;
                            key={child.name}
                            href={child.href}"
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors""
                          >
</Link>"
                            <div className="flex items-center space-x-3">"
</div>"
                              <child.icon className="w-4 h-4" />"
</child>"
                              <span className="text-sm">{child.name}</span>"
                            </div>"
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">"
</span>
                              </span>
                          </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </div>
            <Link;"
              href="/contact"""
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm""
            >
</Link>
            </Link>
            <Link;"
              href="/contact"""
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm""
            >
</Link>
            </Link>
          </div>
          <button;
            onClick={toggleMenu}"
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors flex-shrink-0""
          >
</button>"
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}"
</X>
          </button>
        </div>
      </div>
        <AnimatePresence>
</AnimatePresence>
            <motion.div;
              initial={{ opacity: 0, height: 0 }}"
              animate={{ opacity: 1, height: 'auto' }}'
              exit={{ opacity: 0, height: 0 }}'
              className="lg:hidden border-t border-gray-200 bg-white max-h-screen overflow-y-auto""
            >
</motion>"
              <div className="p-4 border-b border-gray-200">"
</div>"
                <div className="relative">"
</div>
                  <input;"
                    type="text"""
                    placeholder="Search services, solutions..."""
                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                  />
</input>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />"
</Search>
                </div>
              </div>
"
              <div className="py-4 space-y-1">"
</div>
                  <div key={item.name}>
</div>
                    <Link;
                      href={item.href}"
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium""
                      onClick={closeMenu}
                    >
</Link>"
                      <div className="flex items-center space-x-3">"
</div>"
                        <item.icon className="w-5 h-5" />"
</item>"
                        <span className="text-base">{item.name}</span>"
                      </div>"
                      {item.children && <ChevronDown className="w-4 h-4" />}"
</ChevronDown>
                    </Link>"
                      <div className="ml-8 space-y-1 border-l-2 border-gray-100 pl-4">"
</div>
                          <Link;
                            key={child.name}
                            href={child.href}"
                            className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-2""
                            onClick={closeMenu}
                          >
</Link>"
                            <div className="flex items-center space-x-3">"
</div>"
                              <child.icon className="w-4 h-4" />"
</child>
                              <span>{child.name}</span>
                            </div>"
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">"
</span>
                              </span>
                          </Link>
                      </div>
                  </div>"
                <div className="px-4 pt-6 border-t border-gray-200 space-y-3">"
</div>
                  <Link;"
                    href="/contact"""
                    className="block w-full px-4 py-3 text-center border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium""
                    onClick={closeMenu}
                  >
</Link>
                  </Link>
                  <Link;"
                    href="/contact"""
                    className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium""
                    onClick={closeMenu}
                  >
</Link>
                  </Link>
                </div>

    </header>"
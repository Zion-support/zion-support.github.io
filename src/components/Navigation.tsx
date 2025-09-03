import React { useState, useEffect } from 'react';
import Link from 'next/link';

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)};


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const navigationItems = [

    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }

  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)};

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null)};


              Zion Tech Group
            </span>
          </Link>


          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">


                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                  </div>
                ) : (
                  <Link
                    href={item.href}

                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>


            >
              Get Started
            </Link>
          </div>


            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


                        >
                          <span>{item.name}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={closeMobileMenu}
                                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                                >
                                  <dropdownItem.icon className="w-4 h-4 text-cyan-400" />
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )};

export default Navigation;



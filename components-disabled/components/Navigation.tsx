
import React, { useState } from 'react';''
import Link from 'next/link';'
import {
  // TODO: Implement
}
  Menu, 
  X, '
} from 'lucide-react';'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
</string>'
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">"
</nav>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center h-16">"
</div>"
          <Link href="/" className="flex items-center space-x-2">"
</Link>"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
              <span className="text-white font-bold text-lg">Z</span>"
            </div>"
            <span className="text-white text-xl font-bold">Zion Tech Group</span>"
          </Link>"
          <div className="hidden md:flex items-center space-x-8">"
</div>"
              <div key={item.name} className="relative">"
</div>"
                  <div className="relative">"
</div>
                    <button;
                      onClick={() => toggleDropdown(item.name)}
</button>"
                      <ChevronDown className="ml-1 h-4 w-4" />"
</ChevronDown>
                    </button>
                    
                    <AnimatePresence>
</AnimatePresence>
                        <motion.div;
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}"
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50""
                        >
</motion>
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors""
                              onClick={() => setActiveDropdown(null)}
</Link>
                            </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link;
                    href={item.href}"
                    className="text-gray-300 hover:text-white transition-colors""
                  >
</Link>
                  </Link>
              </div>
          </div>"
          <div className="hidden md:flex items-center space-x-4">"
</div>
            <Link;"
              href="/contact"""
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors""
            >
</Link>"
              <ArrowRight className="ml-2 h-4 w-4" />"
</ArrowRight>
            </Link>
          </div>"
          <div className="md:hidden">"
</div>
            <button;
              onClick={() => setIsOpen(!isOpen)}
</button>"
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
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
              className="md:hidden border-t border-gray-800""
            >
</motion>"
              <div className="py-4 space-y-2">"
</div>
                  <div key={item.name}>
</div>
                      <div>
</div>
                        <button;
                          onClick={() => toggleDropdown(item.name)}
</button>"
                          <ChevronDown className="h-4 w-4" />"
</ChevronDown>
                        </button>"
                          <div className="pl-4 space-y-1">"
</div>
                              <Link;
                                key={dropdownItem.name}
                                href={dropdownItem.href}"
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors""
                                onClick={() => {
</Link>
                              </Link>
                          </div>
                      </div>
                      <Link;
                        href={item.href}"
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors""
                        onClick={() => setIsOpen(false)}
</Link>
                      </Link>
                  </div>"
                <div className="pt-4 border-t border-gray-800">"
</div>
                  <Link;"
                    href="/contact"""
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors""
                    onClick={() => setIsOpen(false)}
</Link>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
    <>;
      {/* Top Bar */}"
      <div className="bg-blue-900 text-white py-2">;"
</div>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;"
</div>"
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;"
</div>"
              <div className="flex items-center">;"
</div>"
                <Phone className="w-4 h-4 mr-2" />;"
</Phone>"
                <a href="tel:+13024640950" className="hover:text-blue-300">;"
</a>
                </a>;
              </div>;"
              <div className="flex items-center">;"
</div>"
                <Mail className="w-4 h-4 mr-2" />;"
</Mail>
                <a;
                </a>;

              </div>;
            </div>;
          </div>;
        </div>;

      </div>;"
      <nav className="bg-white shadow-lg sticky top-0 z-50">;"
</nav>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="flex justify-between items-center py-4">;"
</div>
                </div>;
              </div>;
            </Link>;"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors""
                  onMouseEnter={() => setIsServicesOpen(true)}
</button>"
                  <ChevronDown className="w-4 h-4 ml-1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      onMouseEnter={() => setIsServicesOpen(true)}
</motion>"
                      <div className="grid grid-cols-2 gap-4 px-6">;"
</div>"
            <div className="hidden lg:flex items - center space - x-8">;"
</div>
              <Link;"
                href="/";""
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
              >;
</Link>
              </Link>;"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
                  onMouseEnter={() => setIsServicesOpen (true)}
</button>"
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}"
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      onMouseEnter={() => setIsServicesOpen (true)}
</motion>"
                      <div className="grid grid - cols - 2 gap - 4 px - 6">;"
</div>
                            <Link;
                              key={index}
              {/* Solutions Dropdown */}"
              <div className="relative group">;"
</Link>
                <button;"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors""
                  onMouseEnter={() => setIsSolutionsOpen(true)}
</button>"
                  <ChevronDown className="w-4 h-4 ml-1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      onMouseEnter={() => setIsSolutionsOpen(true)}
</motion>"
                      <div className="grid grid-cols-2 gap-4 px-6">;"
</div>"
                              <div className="flex items - center mb - 2">;"
</div>"
                                <IconComponent className="w - 5 h - 5 text - blue - 600 mr - 2" />;"
</IconComponent>"
                                <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;"
</div>
                                </div>;
                              </div>;"
                              <div className="text - sm text - gray - 500">;"
</div>
                              </div>;
                            </Link>);
                      </div>;"
                      <div className="border - t border - gray - 200 mt - 4 pt - 4 px - 6">;"
</div>
                        <Link;"
                          href="/services";""
                          className="flex items - center text - blue - 600 hover:text - blue - 700 font - medium";"
                        >;
</Link>"
                          <ArrowRight className="w - 4 h - 4 ml - 2" />;"
</ArrowRight>

                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;

              </div>;"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
                  onMouseEnter={() => setIsSolutionsOpen (true)}
</button>"
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}"
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      onMouseEnter={() => setIsSolutionsOpen (true)}
</motion>"
                      <div className="grid grid - cols - 2 gap - 4 px - 6">;"
</div>
                            <Link;
                              key={index}
              {/* Industries Dropdown */}"
              <div className="relative group">;"
</Link>
                <button;"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors""
                  onMouseEnter={() => setIsIndustriesOpen(true)}
</button>"
                  <ChevronDown className="w-4 h-4 ml-1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      onMouseEnter={() => setIsIndustriesOpen(true)}
</motion>"
                      <div className="px-6">;"
</div>
                          <Link;
                            key={index}
                            href={industry && industry.href}"
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">;"
</Link>"
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">;"
</div>
                            </div>;"
                            <div className="text-sm text-gray-500">;"
</div>

                            </div>;
                          </Link>;
                      </div>;
                    </motion && motion.div>;
                  )}

              {/* Resources Dropdown */}"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors""
                  onMouseEnter={() => setIsResourcesOpen(true)}
</button>"
                  <ChevronDown className="w-4 h-4 ml-1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion&& motion.div;
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}"
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4""
                      onMouseEnter={() => setIsResourcesOpen(true)}
</motion>"
                      <div className="px-6">;"
</div>
                          <Link;
                            key={index}
                            href={resource && resource.href}"
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group">;"
</Link>"
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">;"
</div>
                            </div>;"
                            <div className="text-sm text-gray-500">;"
</div>

                            </div>;
                          </Link>;
                      </div>;
                    </motion && motion.div>;
                className=\"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors;
              >;
                className=\"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors>

                Get Started;
              </Link>;
              <a;
                href=\"tel:+13024640950\";
                className=\"bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors\";
               />;
                className=\"bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors\">

                Call Now;
              </a>;
            </div>;
                className=\"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors\">;
                Get Started;
              </Link>;
              <a;
                href=\"tel:+13024640950\";
                  )}


                </AnimatePresence />;
              </div>;

                  )}
                </AnimatePresence>;
              </div>;

              <Link;"
                href="/pricing"""
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">;"
</Link>
              </Link>;
            </div>;"
            <div className="hidden lg:flex items-center space-x-4">;"
</div>
              <button;
                onClick={() => setIsSearchOpen(true)}
</button>"
            <div className="hidden lg:flex items-center space-x-4">"
</div>
              <Link;"
                href=/contact"""
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors;"
              >
</Link>
              </Link>
              <a;"
                href="tel:+13024640950"""
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors""
              >
</a>
              </a>
            </div>
              </Link>;
              <a;"
                href="tel:+13024640950"""
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors">;"
</a>
              </a>;
            </div>;
            <button;"
              className="lg:hidden p-2""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
</button>"
                <X className="w-6 h-6" />;"
</X>"
                <Menu className="w-6 h-6" />;"
</Menu>
          <AnimatePresence>;
</AnimatePresence>
              <motion&& motion.div;
                initial={{ opacity: 0, height: 0 }}"
                animate={{ opacity: 1, height: "auto" }}"
                exit={{ opacity: 0, height: 0 }}"
                className="lg:hidden border-t border-gray-200">;"
</motion>"
                <div className="py-4 space-y-2">;"
</div>
                  <Link;"
                    href="/"""
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg""
                    onClick={() => setIsMenuOpen(false)}
</Link>"
                  <div className="px-4 py-2">;"
</div>"
                    <div className="font-medium text-gray-900 mb-2">;"
</div>
                    </div>;"
                    <div className="space-y-1 ml-4">;"
</div>
                        <Link;
                          key={index}
                          href={service && service.href}"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600""
                          onClick={() => setIsMenuOpen(false)}
</Link>
                        </Link>;"
                  <div className="px-4 py-2">;"
</div>"
                    <div className="font-medium text-gray-900 mb-2">;"
</div>
                    </div>;"
                    <div className="space-y-1 ml-4">;"
</div>
                        <Link;
                          key={index}
                          href={solution && solution.href}"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600""
                          onClick={() => setIsMenuOpen(false)}
</Link>
                        </Link>;"
                  <div className="px-4 py-2">;"
</div>"
                    <div className="font-medium text-gray-900 mb-2">;"
</div>
                    </div>;"
                    <div className="space-y-1 ml-4">;"
</div>
                        <Link;
                          key={index}
                          href={industry && industry.href}"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600""
                          onClick={() => setIsMenuOpen(false)}
</Link>
                        </Link>;"
                  <div className="px-4 py-2">;"
</div>"
                    <div className="font-medium text-gray-900 mb-2">;"
</div>
                    </div>;"
                    <div className="space-y-1 ml-4">;"
</div>
                        <Link;
                          key={index}
                          href={resource && resource.href}"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600""
                          onClick={() => setIsMenuOpen(false)}
</Link>
                        </Link>;
                  <Link;"
                    href="/pricing"""
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg""
                    onClick={() => setIsMenuOpen(false)}
</Link>
                    <Link;"
                      href="/contact"""
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center""
                      onClick={() => setIsMenuOpen(false)}
</Link>
                    </Link>;
                    <a;"
                      href="tel:+13024640950"""
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center""
                      onClick={() => setIsMenuOpen(false)}
</a>"
                              <div className="flex items - center mb - 2">;"
</div>"
                                <IconComponent className="w - 5 h - 5 text - blue - 600 mr - 2" />;"
</IconComponent>"
                                <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;"
</div>
                                </div>;
                              </div>;"
                              <div className="text - sm text - gray - 500">;"
</div>
                              </div>;
                            </Link>);
                      </div>;"
                      <div className="border - t border - gray - 200 mt - 4 pt - 4 px - 6">;"
</div>
                        <Link;"
                          href="/solutions";""
                          className="flex items - center text - blue - 600 hover:text - blue - 700 font - medium";"
                        >;
</Link>"
                          <ArrowRight className="w - 4 h - 4 ml - 2" />;"
</ArrowRight>

                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;

              </div>;"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
                  onMouseEnter={() => setIsIndustriesOpen (true)}
</button>"
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}"
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      onMouseEnter={() => setIsIndustriesOpen (true)}
</motion>"
                      <div className="px - 6">;"
</div>
                          <Link;
                            key={index}
                            href={industry.href}"
                            className="block p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";"
                          >;
</Link>"
                            <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;"
</div>
                            </div>;"
                            <div className="text - sm text - gray - 500">;"
</div>

                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;

              </div>;"
              <div className="relative group">;"
</div>
                <button;"
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
                  onMouseEnter={() => setIsResourcesOpen (true)}
</button>"
                  <ChevronDown className="w - 4 h - 4 ml - 1" />;"
</ChevronDown>
                </button>;
                <AnimatePresence>;
</AnimatePresence>
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}"
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray - 200 py - 4";"
                      onMouseEnter={() => setIsResourcesOpen (true)}
</motion>"
                      <div className="px - 6">;"
</div>
                          <Link;
                            key={index}
                            href={resource.href}"
                            className="block p - 3 rounded - lg hover:bg - blue - 50 transition - colors group";"
                          >;
</Link>"
                            <div className="font - medium text - gray - 900 group - hover:text - blue - 600">;"
</div>
                            </div>;"
                            <div className="text - sm text - gray - 500">;"
</div>

                            </div>;
                          </Link>))}
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;

              <Link;"
                href="/pricing";""
                className="text - gray - 700 hover:text - blue - 600 font - medium transition - colors";"
              >;
</Link>
              </Link>;
            </div>;"
            <div className="hidden lg:flex items - center space - x-4">;"
</div>
              <button;
                on_click={() => setIsSearchOpen (true)}
</button>"
                <Search className="w - 5 h - 5" />;"
</Search>
              </button>;
              <Link;"
                href="/contact";""
                className="bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 2 rounded - lg font - medium transition - colors";"
              >;
</Link>
              </Link>;
              <a;"
                href="tel:+13024640950";""
                className="bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 6 py - 2 rounded - lg font - medium transition - colors";"
              >;
</a>
              </a>;
            </div>;
            <button;"
              className="lg:hidden p - 2";"
              on_click={() => setIsMenuOpen (!isMenuOpen)}
</button>"
                <X className="w - 6 h - 6" />) : ("
</X>)"
                <Menu className="w - 6 h - 6" />)}"
</Menu>
            </button>;
          </div>;
          <AnimatePresence>;
</AnimatePresence>
              <motion.div;
                initial={{ opacity: 0, height: 0 }}"
                animate={{ opacity: 1, height: "auto" }}"
                exit={{ opacity: 0, height: 0 }}"
                className="lg:hidden border - t border - gray - 200";"
              >;
</motion>"
                <div className="py - 4 space - y-2">;"
</div>
                  <Link;"
                    href="/";""
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 rounded - lg";"
                    on_click={() => setIsMenuOpen (false)}
</Link>
                  </Link>;"
                  <div className="px - 4 py - 2">;"
</div>"
                    <div className="font - medium text - gray - 900 mb - 2">;"
</div>
                    </div>;"
                    <div className="space - y-1 ml - 4">;"
</div>
                        <Link;
                          key={index}
                          href={service.href}"
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";"
                          on_click={() => setIsMenuOpen (false)}
</Link>
                        </Link>))}
                    </div>;
                  </div>;"
                  <div className="px - 4 py - 2">;"
</div>"
                    <div className="font - medium text - gray - 900 mb - 2">;"
</div>
                    </div>;"
                    <div className="space - y-1 ml - 4">;"
</div>
                        <Link;
                          key={index}
                          href={solution.href}"
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";"
                          on_click={() => setIsMenuOpen (false)}
</Link>
                        </Link>))}
                    </div>;
                  </div>;"
                  <div className="px - 4 py - 2">;"
</div>"
                    <div className="font - medium text - gray - 900 mb - 2">;"
</div>
                    </div>;"
                    <div className="space - y-1 ml - 4">;"
</div>
                        <Link;
                          key={index}
                          href={industry.href}"
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";"
                          on_click={() => setIsMenuOpen (false)}
</Link>
                        </Link>))}
                    </div>;
                  </div>;"
                  <div className="px - 4 py - 2">;"
</div>"
                    <div className="font - medium text - gray - 900 mb - 2">;"
</div>
                    </div>;"
                    <div className="space - y-1 ml - 4">;"
</div>
                        <Link;
                          key={index}
                          href={resource.href}"
                          className="block py - 1 text - sm text - gray - 600 hover:text - blue - 600";"
                          on_click={() => setIsMenuOpen (false)}
</Link>
                        </Link>))}
                    </div>;
                  </div>;
                  <Link;"
                    href="/pricing";""
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue - 600 rounded - lg";"
                    on_click={() => setIsMenuOpen (false)}
</Link>
                  </Link>;"
                  <div className="px - 4 py - 2 space - y-2">;"
</div>
                    <Link;"
                      href="/contact";""
                      className="block bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 2 rounded - lg font - medium text - center";"
                      on_click={() => setIsMenuOpen (false)}
</Link>
                    </Link>;
                    <a;"
                      href="tel:+13024640950";""
                      className="block bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 4 py - 2 rounded - lg font - medium text - center";"
                      on_click={() => setIsMenuOpen (false)}
</a>
                    </a>;
                  </div>;
                </div>;
      <SearchModal;
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
</SearchModal>

    </>;
  )</motion.div>)}
  );
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </nav>;
      <SearchModal;
        is_open={isSearchOpen}

        on_close={() => setIsSearchOpen (false)}
</SearchModal>
    </>);

  Menu, 
  X, "
} from 'lucide-react';'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
</string>'
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">"
</nav>"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="flex justify-between items-center h-16">"
</div>"
          <Link href="/" className="flex items-center space-x-2">"
</Link>"
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">"
</div>"
              <span className="text-white font-bold text-lg">Z</span>"
            </div>"
            <span className="text-white text-xl font-bold">Zion Tech Group</span>"
          </Link>"
          <div className="hidden md:flex items-center space-x-8">"
</div>"
              <div key={item.name} className="relative">"
</div>"
                  <div className="relative">"
</div>
                    <button;
                      onClick={() => toggleDropdown(item.name)}
</button>"
                      <ChevronDown className="ml-1 h-4 w-4" />"
</ChevronDown>
                    </button>
                    
                    <AnimatePresence>
</AnimatePresence>
                        <motion.div;
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}"
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50""
                        >
</motion>
                            <Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors""
                              onClick={() => setActiveDropdown(null)}
</Link>

                            </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link;
                    href={item.href}"
                    className="text-gray-300 hover:text-white transition-colors""
                  >
</Link>

                  </Link>
              </div>

          </div>"
          <div className="hidden md:flex items-center space-x-4">"
</div>
            <Link;"
              href="/contact"""
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors""
            >
</Link>"
              <ArrowRight className="ml-2 h-4 w-4" />"
</ArrowRight>
            </Link>
          </div>"
          <div className="md:hidden">"
</div>
            <button;
              onClick={() => setIsOpen(!isOpen)}
</button>"
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}"
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
              className="md:hidden border-t border-gray-800""
            >
</motion>"
              <div className="py-4 space-y-2">"
</div>
                  <div key={item.name}>
</div>
                      <div>
</div>
                        <button;
                          onClick={() => toggleDropdown(item.name)}
</button>"
                          <ChevronDown className="h-4 w-4" />"
</ChevronDown>
                        </button>"
                          <div className="pl-4 space-y-1">"
</div>
                              <Link;
                                key={dropdownItem.name}
                                href={dropdownItem.href}"
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors""
                                onClick={() => {
</Link>

                              </Link>
                          </div>
                      </div>

                      <Link;
                        href={item.href}"
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors""
                        onClick={() => setIsOpen(false)}
</Link>
                      </Link>
                  </div>"
                <div className="pt-4 border-t border-gray-800">"
</div>
                  <Link;"
                    href="/contact"""
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors""
                    onClick={() => setIsOpen(false)}
</Link>

                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </nav>"


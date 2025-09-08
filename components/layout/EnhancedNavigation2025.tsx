



  useEffect(() => {;
    const handleScroll = () => {;
      setIsScrolled(window && window.scrollY > 20);
    };
    window && window.addEventListener('scroll', handleScroll);
    return () => window && window.removeEventListener('scroll', handleScroll);



  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>;
      {/* Top Contact Bar */}


      <div className="bg-gradient-to-r from-cyan-900 to-purple-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">;
            <div className="flex items-center gap-4 mb-2 sm:mb-0">;
              <div className="flex items-center gap-2">;
                <Phone className="w-4 h-4 text-cyan-300" />;
                <span>{contactInfo && contactInfo.phone}</span>;
              </div>;
              <div className="flex items-center gap-2">;
                <Mail className="w-4 h-4 text-purple-300" />;
                <span>{contactInfo && contactInfo.email}</span>;
              </div>;
            </div>;
            <div className="flex items-center gap-2">;
              <MapPin className="w-4 h-4 text-green-300" />;
              <span className="text-xs">{contactInfo && contactInfo.address}</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <navclassName={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50' 


          : 'bg-transparent'
      }`}>;
        <div className="container mx-auto px-4">;
          <div className="flex items-center justify-between h-20">;
            {/* Logo */}



            <Link href="/" className="flex items-center space-x-3 group">;
              <div className="relative">;
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                  <Star className="w-6 h-6 text-white" />;
                </div>;
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
              </div>;
              <div>;
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>;
                <p className="text-xs text-gray-400">Innovation • Intelligence • Impact</p>;
              </div>;
            </Link>;




            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">;
              {navigationItems && navigationItems.map((item) => (;
                <div key={item && item.name} className="relative group">;
                  <button

                    onClick={() => setActiveSubmenu(activeSubmenu === item && item.name ? null : item && item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2";
                  >;
                    <item && item.icon className="w-4 h-4" />;
                    <span>{item && item.name}</span>;
                    <ChevronDownclassName={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === item && item.name ? 'rotate-180' : ''
                    }`} />;
                  </button>;





                  {/* Submenu */}
                  <AnimatePresence>;
                    {activeSubmenu === item && item.name && (;
                      <motion&& motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0 && 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">;
                        <div className="p-6">;
                          {item && item.submenu?.map((subitem) => (;

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50'

          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-gray-400">Innovation • Intelligence • Impact</p>
              </div>
            </Link>


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeSubmenu === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {activeSubmenu === item.name && (
                      <motion.div

                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}

                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-6">
                          {item.submenu?.map((subitem) => (


                              className="group block p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200 mb-2 last:mb-0"
                            >
                              <div className="flex items-start space-x-3">
                                {subitem.icon && (
                                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-200">
                                    <subitem.icon className="w-5 h-5 text-cyan-400" />
                                  </div>
                                )}
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {subitem.name}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {subitem.description}
                                  </p>
                                  {subitem.services && (
                                    <div className="mt-2 flex flex-wrap gap-1">
                                      {subitem.services.slice(0, 2).map((service) => (
                                        <span
                                          key={service}
                                          className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                                        >
                                          {service}

                                        </span>;
                                      ))}

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;

              <Link
                href="/pricing"
                className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200">;
                Pricing;
              </Link>;
              <Link
                href="/contact"



            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}



}</span>) );
}+ {}
  subitem.services.length - 2;
}more </span>);
}</div>);
}</div> </div> </a>) );
}</div> </motion.div>);


  /* Mobile Menu Button */;
}<button </button> </div> </div> </nav> {}
  /* Mobile Menu */;
}<AnimatePresence> {}
  is_open && (<motion.div {}
  item.badge;
}</span>);
}</div> <ChevronDown className= {}`
  `w - 4 h - 4 transition - transform duration - 200 $ {'
  active_dropdown === item.name ? 'rotate - 180' : '';`
}`;
}/> </button> > {}
  item.children?.map ( (child) => (<Link key= {}
  child.name;
}</span> </a>) );
}</motion.div>);

}`;
}/> </button> {}
  /* Mobile Submenu */;
}<AnimatePresence> > {}
  item.submenu?.map ( (subitem) => (<Link key= {}
  subitem.name;
}) );
}</motion.div>);
}</AnimatePresence> </div>) );
}</div> > View Pricing </a> <Link > Contact Us </a> </div> </div> </div> </div> </div> </div> </motion.div>);
}</AnimatePresence> </>);
}export default EnhancedNavigation2025;
export default /**;
 * EnhancedNavigation2025 - Function description;
 */
function EnhancedNavigation2025() {}
  const [is_open, setIsOpen] = useState (false);
  const [active_submenu, setActiveSubmenu] = useState < string | null>(null);
  const [is_scrolled, setIsScrolled] = useState (false);
;
  useEffect (() => {}
    const handle_scroll = () =>: any {}
      setIsScrolled (window.scroll_y > 20);
    }'
    window.addEventListener ('scroll', handle_scroll);'
    return () => window.removeEventListener ('scroll', handle_scroll);
  }, []);
;
  const toggle_menu = () =>: any setIsOpen (!is_open);
  const close_menu = () =>: any setIsOpen (false);
;
  return (
    <>;

            </div>;
          </div>;
        </div>;
      </div>;

                    }`} />;
                  </button>;
                  {/* Submenu */}
                  <AnimatePresence>;
                    {active_submenu === item.name && (
                      <motion.div;
                        initial={{ opacity: 0, coordinate_y: 10 }}
                        animate={{ opacity: 1, coordinate_y: 0 }}
                        exit={{ opacity: 0, coordinate_y: 10 }}

                          {item.submenu?.map ((subitem) => (
                            <Link;
                              key={subitem.name}
                              href={subitem.href}

                                          +{subitem.services.length - 2} more;
                                        </span>)}
                                    </div>)}
                                </div>;
                              </div>;
                            </Link>))}
                        </div>;
                      </motion.div>)}
                  </AnimatePresence>;
                </div>))}
            </div>;

              >;
                Get Started;
              </Link>;
            </div>;
            {/* Mobile Menu Button */}
            <button;

            </button>;
          </div>;
        </div>;
      </nav>;


                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}


                          key={child && child.name}
                          href={child && child.href}"
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}


                      ))}
                    </motion && motion.div>;
                  )}
                </div>;
              ))}






                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >;
                  Get Started;
                </Link>;"
            className="fixed inset-0 z-50 lg:hidden";
          >;
            {/* Backdrop */}
            <div"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}



            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 overflow-y-auto">;

              <div className="p-6">;
                {/* Close Button */}"
                <div className="flex justify-end mb-6">;
                  <button;
                    onClick={closeMenu}
                {/* Mobile Navigation Items */}"
                <div className="space-y-4">;
                  {navigationItems && navigationItems.map((item) => (;
                    <div key={item && item.name}>;

                      <button




                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {activeSubmenu === item && item.name && (;
                          <motion&& motion.div;
                            initial={{ opacity: 0, height: 0 }}'
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0 && 0.2 }}"
                            className="ml-8 space-y-2">;
                            {item && item.submenu?.map((subitem) => (;
                              <Link;
                                key={subitem && subitem.name}
                                href={subitem && subitem.href}
                                onClick={closeMenu}"
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">;"
                                <h4 className="text-white font-medium">{subitem && subitem.name}</h4>;"
                                <p className="text-sm text-gray-400 mt-1">{subitem && subitem.description}</p>;
                              </Link>;
                            ))}
                          </motion && motion.div>;
                        )}
                      </AnimatePresence>;
                    </div>;
                  ))}



                {/* Mobile CTA */}

                <div className="mt-8 space-y-4">;
                  <Link"
                    href="/pricing"
                    onClick={closeMenu}"
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200">;
                    View Pricing;
                  </Link>;
                  <Link"
                    href="/contact"
                    onClick={closeMenu}


                      <Phone className="w-4 h-4 text-cyan-400" />;
                      <span>{contactInfo && contactInfo.phone}</span>;
                    </div>;"
                    <div className="flex items-center space-x-3 text-gray-400">;"
                      <Mail className="w-4 h-4 text-purple-400" />;
                      <span>{contactInfo && contactInfo.email}</span>;
                    </div>;"
                    <div className="flex items-start space-x-3 text-gray-400">;"
                      <MapPin className="w-4 h-4 text-green-400 mt-0 && 0.5" />;"
                      <span className="text-xs">{contactInfo && contactInfo.address}</span>;
      {/* Mobile Menu */}
      <AnimatePresence>;
        {is_open && (
          <motion.div;'
            initial={{ opacity: 0, coordinate_x: '100%' }}
            animate={{ opacity: 1, coordinate_x: 0 }}'
            exit={{ opacity: 0, coordinate_x: '100%' }}
            transition={{ duration: 0.3 }}

                          {item.badge}
                        </span>)}
                    </div>;`
                    <ChevronDown className={`w - 4 h - 4 transition - transform duration - 200 ${'
                      active_dropdown === item.name ? 'rotate - 180' : '';`
                    }`} />;
                  </button>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}'
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}

className="ml - 8 mt - 2 space - y-2";

                    >;
                      {item.children?.map ((child) => (
                        <Link;
                          key={child.name}

                            {sub_item.name}
                          </span>;
                        </Link>))}
                    </motion.div>)}
                </div>))}

                        }`} />;
                      </button>;
                      {/* Mobile Submenu */}
                      <AnimatePresence>;
                        {active_submenu === item.name && (
                          <motion.div;


                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Mobile Submenu */}
                      <AnimatePresence>
                        {activeSubmenu === item.name && (
                          <motion.div

                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                                on_click={close_menu}
                                className="block p - 3 rounded - lg hover:bg - gray - 800 / 50 transition - all duration - 200";
                              >;
                                <h4 className="text - white font - medium">{subitem.name}</h4>;
                                <p className="text - sm text - gray - 400 mt - 1">{subitem.description}</p>;
                              </Link>))}
                          </motion.div>)}
                      </AnimatePresence>;
                    </div>))}
                </div>;
                {/* Mobile CTA */}
                <div className="mt - 8 space - y-4">;
                  <Link;
                    href="/pricing";
                    on_click={close_menu}
                    className="block w - full text - center px - 6 py - 3 border border - gray - 600 text - gray - 300 rounded - xl hover:border - gray - 500 hover:text - white transition - all duration - 200";

                  >;
                    View Pricing;
                  </Link>;
                  <Link;"
                    href="/contact";

                  >;
                    Contact Us;
                  </Link>;
                </div>;

                {/* Mobile Contact Info */}
                <div className="mt - 8 pt - 6 border - t border - gray - 700 / 50">;
                  <div className="space - y-3 text - sm">;
                    <div className="flex items - center space - x-3 text - gray - 400">;
                      <Phone className="w - 4 h - 4 text - cyan - 400" />;
                      <span>{contact_info.phone}</span>;
                    </div>;
                    <div className="flex items - center space - x-3 text - gray - 400">;
                      <Mail className="w - 4 h - 4 text - purple - 400" />;
                      <span>{contact_info.email}</span>;
                    </div>;
                    <div className="flex items - start space - x-3 text - gray - 400">;
                      <MapPin className="w - 4 h - 4 text - green - 400 mt - 0.5" />;
                      <span className="text - xs">{contact_info.address}</span>;

                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;


      <div className="h-20" />
    </>
  )
}

      </AnimatePresence>;

      {/* Spacer for fixed navigation */}

      <div className="h-20" />;
    </>;
  )
};



          </motion.div>)}
      </AnimatePresence>;
                            className="ml-8 space-y-2"
                          >
                            {item.submenu?.map((subitem) => (
                              <Link
                                key={subitem.name}
                                href={subitem.href}
                                onClick={closeMenu}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                              >
                                <h4 className="text-white font-medium">{subitem.name}</h4>
                                <p className="text-sm text-gray-400 mt-1">{subitem.description}</p>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-4">
                  <Link
                    href="/pricing"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 border border-gray-600 text-gray-300 rounded-xl hover:border-gray-500 hover:text-white transition-all duration-200"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-start space-x-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-green-400 mt-0.5" />
                      <span className="text-xs">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className="h - 20" />;
    </>);
}






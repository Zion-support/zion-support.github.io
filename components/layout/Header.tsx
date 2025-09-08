


      {/* Main Navigation */}"
      <nav className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />"
        <div className=\"flex justify-between items-center h-16\"    />
          {/* Logo */}"
          <div className=\"flex items-center\"    />"
            <Link href=\"/\" className=\"flex items-center\"    />"
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\"    />"
                <span className=\"text-white font-bold text-xl\"    />Z</span>
              </div>"
              <span className=\"ml-3 text-2xl font-bold text-gray-900\"    />Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}"
          <div className=\"hidden lg:flex items-center space-x-8\"    />
            {navigation.map((item) => (}
              <div key={item.nam}"
} className=\"relative\"    />
                {item.hasDropdown ? (
                  <div;"
className=\"flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200\"
                    onMouseEnter={() =    /> {
                      if (item.name === 'Services') setIsServicesOpen(true);}
                      if (item.name === 'Solutions') setIsSolutionsOpen(true);}
                    }}
                    onMouseLeave={() => {
                      if (item.name === 'Services') setIsServicesOpen(false);}
                      if (item.name === 'Solutions') setIsSolutionsOpen(false);}
                    }}
                  >"
                    <span className=\"font-medium\"    />{item.name}</span>"
                    <ChevronDown className=\"h-4 w-4\"    />
                  </div>
                ) : (
                  <Link;
href={item.href}
                    className={`font-medium transition-colors duration-200 ${}
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover: text-blue-600'}
                    }`}
                      />
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown *}
}
                {item.name === 'Services' && (
                  <AnimatePresence    />
                    {isServicesOpen && (
                      <motion.div;}
initial={{ opacity: 0, y: 10 }
}
                        animate={{ opacity: 1, y: 0 }
}
                        exit={{ opacity: 0, y: 10 }}"
                        className=\"absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4\"
                        onMouseEnter={() =    /> setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >"
                        <div className=\"grid grid-cols-2 gap-2\"    />
                          {item.children?.map((child) => (}
                            <Link;}
key={child.name}
                              href={child.href}"
                              className=\"flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200\"
                                />"
                              <child.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />"
                              <span className=\"text-sm font-medium\"    />{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Solutions Dropdown *}
}
                {item.name === 'Solutions' && (
                  <AnimatePresence    />
                    {isSolutionsOpen && (
                      <motion.div;}
initial={{ opacity: 0, y: 10 }
}
                        animate={{ opacity: 1, y: 0 }
}
                        exit={{ opacity: 0, y: 10 }}"
                        className=\"absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4\"
                        onMouseEnter={() =    /> setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >"
                        <div className=\"grid grid-cols-2 gap-2\"    />
                          {item.children?.map((child) => (}
                            <Link;}
key={child.name}
                              href={child.href}"
                              className=\"flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200\"
                                />"
                              <child.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />"
                              <span className=\"text-sm font-medium\"    />{child.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>

            ))}
          </nav>


          {/* CTA Button */}"
          <div className=\"hidden lg:flex items-center space-x-4\"    />
            <Link;"
href=\"/contact\"
              className=\"inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl\"
                />
              Get Started;"
              <ArrowRight className=\"ml-2 h-4 w-4\"    />
            </Link>
          </div>

      name: 'Micro SaaS',
  href: '/services / micro - saas',
      description: 'Innovative focused software solutions'}
  popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];}

      href: '/services / ai - services',
      description: 'Cutting - edge AI & machine learning',

    { ;
      name: 'Micro SaaS',;
      href: '/services/micro-saas',;
      description: 'Innovative focused software solutions',;}
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking'];}
},;
    { ;
      name: 'IT Services',;
      href: '/services/it-services',;
      description: 'Enterprise infrastructure & security',;}
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks'];}
},;
    { ;
      name: 'AI Services',;
      href: '/services/ai-services',;

      description: 'Cutting-edge AI & machine learning',;
      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery'];
},;
  ];
  const serviceCategories = [;
    { name: 'AI Solutions', href: '/services/ai-solutions' },;
    { name: 'Cloud & DevOps', href: '/services/cloud' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity' },;
    { name: 'Data & Analytics', href: '/services/data' },;
    { name: 'Micro SaaS', href: '/services/micro-saas' },;
    { name: 'Digital Transformation', href: '/services/transformation' },;
  ];
  const solutionCategories = [;
    { name: 'Enterprise', href: '/solutions/enterprise' },;
    { name: 'SMB', href: '/solutions/smb' },;
    { name: 'Startup', href: '/solutions/startup' },;
  ];
  const resourceCategories = [;
    { name: 'Documentation', href: '/docs' },;
    { name: 'Blog', href: '/blog' },;
    { name: 'Partners', href: '/partners' },;
    { name: 'Team', href: '/team' },;
    { name: 'Careers', href: '/careers' },;




  return (
    <header className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${
      is_scrolled ;
        ? 'bg - slate - 900 / 95 backdrop - blur - md border - b border - slate - 700 / 50' ;
        : 'bg - transparent';
}`}>;
      <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex items - center justify - between h - 16">;
          {/* Logo */}

              Zion Tech Group;
            </Link>;
          </div>;








            </button    />;






          <div className="flex - shrink - 0">;
            <Link href="/" className="text - 2xl font - bold text - blue - 600">;



        {/* Mobile Menu */}
        {/* Mobile Navigation */}

        {/* Mobile Menu *}
}
        <AnimatePresence    />
          {isMenuOpen && (
            <motion.div;}
initial={{ opacity: 0, height: 0 }
}
              animate={{ opacity: 1, height: 'auto' }
}
              exit={{ opacity: 0, height: 0 }}"
              className=\"lg:hidden border-t border-gray-200\"
                />"
              <div className=\"py-4 space-y-4\"    />
                {navigation.map((item) => (}
                  <div key={item.name}    />
                    {item.hasDropdown ? (
                      <div    />}"
                        <div className=\"flex items-center justify-between px-4 py-2 text-gray-700 font-medium\"    />}
                          <span    />{item.name}</span>"
                          <ChevronDown className=\"h-4 w-4\"    />
                        </div>"
                        <div className=\"pl-4 space-y-2\"    />
                          {item.children?.map((child) => (}
                            <Link;}
key={child.name}
                              href={child.hre}
}"
                              className=\"flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200\"    />
"
                              <child.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                              <span className=\"text-sm font-medium\"    />{child.name}</span>;
                            </Link>;
                          ))}
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}{/* Solutions Dropdown */}
                {item.name === 'Solutions' && (<AnimatePresence    />;
                    {isSolutionsOpen && (<motion.div;}
                        initial={{ opacity: 0, y: 10 }
}
                        animate={{ opacity: 1, y: 0 }
}
                        exit={{ opacity: 0, y: 10 }
}"
                        className=\'absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4\';
                        onMouseEnter={() =    /> setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                      >;"
                        <div className=\"grid grid-cols-2 gap-2\"    />;
                          {item.children?.map((child) => (<Link;}
                              key={child.name}
                              href={child.href}"
                              className=\"flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200\"    />
"
                              <child.icon className=\"h-5 w-5 mr-3 text-blue-500\"    />;"
                              <span className=\"text-sm font-medium\"    />{child.name}</span>;
                            </Link>;
                          ))}
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}
          </div>;
          {/* CTA Button */}"
          <div className=\"hidden lg:flex items-center space-x-4\"    />;
            <Link;"
              href=\'/contact\';"
              className=\"inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl\"    />

              Get Started;"
              <ArrowRight className=\"ml-2 h-4 w-4\"    />;
            </Link>;
          </div>;
          {/* Mobile Menu Button */}"
          <div className=\"lg:hidden\"    />;
            <button;
              onClick={() =    /> setIsMenuOpen(!isMenuOpen)}"
              className=\"text-gray-700 hover: text-blue-600 transition-colors duration-200\">
"
              {isMenuOpen ? <X className=\"h-6 w-6\"    /> : <Menu className=\"h-6 w-6\" /}
}
            </button    />;
          </div>;
        </div>;
        {/* Mobile Menu */}
        {/* Mobile Navigation */}
        {/* Mobile Navigation */}{/* Mobile Menu */}{/* Mobile Navigation */}{/* Mobile Menu */}{/* Mobile Menu */}
        {/* Mobile Navigation */}
        {/* Mobile Navigation */}{/* Mobile Menu */}<AnimatePresence    />;
          {isMenuOpen && (<motion.div;}
              initial={{ opacity: 0, height: 0 }
}
              animate={{ opacity: 1, height: 'auto' }
}
              exit={{ opacity: 0, height: 0 }
}"
              className=\"md:hidden\"    />
"
              <div className=\"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t\"    />;
                {navigation.map((item) => (<Link;}
                    key={item.name}
                    href={item.href}"
                    className=\'text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium\';
                    onClick={() =    /> setIsMenuOpen(false)}
                  >;
                    {item.name}
                  </Link>;
                ))}"
              className=\"lg:hidden border-t border-gray-200\">
"
              <div className=\"py-4 space-y-4\"    />;
                {navigation.map((item) => (<div key={item.name}    />;
                    {item.hasDropdown ? (<div    />;}"
                        <div className=\"flex items-center justify-between px-4 py-2 text-gray-700 font-medium\"    />;}
                          <span    />{item.name}</span>;"
                          <ChevronDown className=\"h-4 w-4\"    />;
                        </div>;"
                        <div className=\"pl-4 space-y-2\"    />;
                          {item.children?.map((child) => (<Link;}
                              key={child.name}
                              href={child.href}"
                              className=\"flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200\"    />
"
                              <child.icon className=\"h-4 w-4 mr-3 text-blue-500\"    />;"
                              <span className=\"text-sm\"    />{child.name}</span>;
                            </Link>;
                          ))}
                        </div>;
                      </div>;
                    ) : (<Link;
                        href={item.href}
                        className={`block px-4 py-2 font-medium transition-colors duration-200 ${isActive(item.href) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';}
                        }`}    />

                        {item.name}
                      </Link>;
                    )}
                  </div>;"
                ))}<div className=\"pt-4 border-t border-gray-200\"    />;
                  <Link;"
                    href=\'/contact\';"
                    className=\"block mx-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300\"    />

                    Get Started;
                  </Link>;
                </div>;"
              className=\"md:hidden\">
"
              <div className=\"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t\"    />;
                {navigation.map((item) => (<Link;}
                    key={item.name}
                    href={item.href}"
                    className=\'text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium\';
                    onClick={() =    /> setIsMenuOpen(false)}
                  >;
                    {item.name}
                  </Link>;
                ))}</div>;
            </motion.div>;
          )}
        </AnimatePresence>;
      </nav>;
    </header>;
  )}

export default Header;


export default Header;
export default Header;










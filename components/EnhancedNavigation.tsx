

  ];


const company = [
  { name: 'About Us',}
  href: '/about', icon: Users, description: 'Learn about our mission and team',}
const closeAllDropdowns = (EnhancedNavigation: React.FC = () => {const [isOpen, setIsOpen] =;
                onClick={() =    /> toggleDropdown('services')}
              {activeDropdown === 'services' && (<motion.div;
                className=\'flex items-center space-x-1 text-white hover:text-blue-300 transition-colors\';
                  />;}
                <span    />Services</span>;}
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}    />;
              </button>;{activeDropdown === 'services' && (<motion&& motion.div;}


            <div className=\"relative\"    />;



          </button>;
        </div>;






        {/* Mobile Menu */}

        {isOpen && (<motion&& motion.div;}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
        {/* Mobile Menu *,}
                      className=\'flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors\';
                      onClick={closeAllDropdowns}    />;
                      <service && service.icon className=\"w-5 h-5 text-blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font-medium text-gray-900\"    />{service && service.name}</h4>;
                        <p className=\"text-sm text-gray-600\"    />{service && service.description}</p>;
                      </div>;
                    </Link>;
                  ))}
              {/* Mobile Company */}
              <div    />;
                <h3 className=\"text-lg font-semibold text-gray-900 mb-4\"    />Company</h3>;
                <div className=\"space-y-2\"    />;
                  {company && company.map((item) => (<Link;}
                      key={item && item.name}
                      href={item && item.href}
                      className=\'flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors\';
                      onClick={closeAllDropdowns}    />;
                      <item && item.icon className=\"w-5 h-5 text-blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font-medium text-gray-900\"    />{item && item.name}</h4>;
                        <p className=\"text-sm text-gray-600\"    />{item && item.description}</p>;
                      </div>;
                    </Link>;
                  ))}
              {/* Mobile CTA */}

  ];

const company = [
  { name: 'About Us',}
  href: '/about', icon: Users, description: 'Learn about our mission and team',}
},{ name: 'Our Work',}
  href: '/portfolio', icon: Award, description: 'See our latest projects and achievements',}
},{ name: 'Content Hub',}
  href: '/reports', icon: BookOpen, description: 'Access autonomous content and insights',}
},{ name: 'Blog & Insights',}
  href: '/blog', icon: BookOpen, description: 'Stay updated with industry trends',}
},{ name: 'Contact',}
  href: '/contact', icon: Phone, description: 'Get in touch with our experts',}
}
  ];

const toggle_dropdown = (dropdown: string) =>: any {setActiveDropdown (active_dropdown === dropdown ? null : dropdown)}
  const closeAllDropdowns = () =>: any {setActiveDropdown (null)setIsOpen (false);
  return (<nav className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${is_scrolled;
        ? 'bg - slate - 900 / 95 backdrop - blur - xl border - b border - white / 10 shadow - 2xl';}
        : 'bg - transparent';}
    }`}    />

      <div className=\"max - w-7xl mx-auto px-6\"    />;
        <div className=\"flex items - center justify-between h-20\"    />;
          {/* Logo */}
          <Link href=\"/\" className=\"flex items-center space-x-3\" on_click={closeAllDropdowns}    />;
            <div className=\"w - 10 h - 10 rounded - xl bg - gradient - to - br from - blue - 600 to - cyan - 600 flex items-center justify-center\"    />;
              <Brain className=\"w - 6 h-6 text-white\"    />;
            </div>;
            <span className=\"text - xl font - bold bg - gradient - to - r from - white to - blue - 100 bg - clip-text text-transparent\"    />;
              Zion Tech Group;
            </span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className=\"hidden lg:flex items-center space-x-8\"    />;
            {/* Services Dropdown */}
            <div className=\"relative\"    />;
              <button;
                on_click={() =    /> toggle_dropdown ('services')}
                className=\"flex items - center space - x-1 text - white hover:text - blue-300 transition-colors\">

                <span     /> Services</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'services' ? 'rotate - 180' : ''}`}    />;
              </button>;
              {active_dropdown === 'services' && (<motion.div;}
                  initial={{ opacity: 0, coordinate_y: 10 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: 10 }}
                  className=\'absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\';
                    />;
                  initial={{ opacity: 0, coordinate_y: 10 ,}
}
                  animate={{ opacity: 1, coordinate_y: 0 ,}
}
                  exit={{ opacity: 0, coordinate_y: 10 ,}
}
                  className=\"absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\">

                  <div className=\"grid grid - cols - 2 gap-4 px-6\"    />;
                    {services.map ((service) => (<Link;}
                        key={service.name}
                        href={service.href}
                        className=\'group p - 4 rounded - lg hover:bg - gray-50 transition-colors\';
                        on_click={closeAllDropdowns}
                          />;
                        <div className=\"flex items-start space-x-3\"    />;
                          <service.icon className=\"w - 6 h - 6 text - blue-600 mt-1\"    />;
                          <div    />;
                            <h3 className=\"font - semibold text - gray - 900 group - hover:text-blue-600\"    />;
                              {service.name}
                            </h3>;
                            <p className=\"text - sm text-gray-600\"    />{service.description}</p>;
                          </div>;
                        </div>;
                      </Link>))}
                  </div>;
                </motion.div>)}
            </div>;
            {/* Company Dropdown */}
            <div className=\"relative\"    />;
              <button;
                on_click={() =    /> toggle_dropdown ('company')}
                className=\"flex items - center space - x-1 text - white hover:text - blue-300 transition-colors\">

                <span     /> Company</span>;
                <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`}    />;
              </button>;
              {active_dropdown === 'company' && (<motion.div;}
                  initial={{ opacity: 0, coordinate_y: 10 }}
                  animate={{ opacity: 1, coordinate_y: 0 }}
                  exit={{ opacity: 0, coordinate_y: 10 }}
                  className=\'absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\';
                    />;
                  initial={{ opacity: 0, coordinate_y: 10 ,}
}
                  animate={{ opacity: 1, coordinate_y: 0 ,}
}
                  exit={{ opacity: 0, coordinate_y: 10 ,}
}
                  className=\"absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - xl shadow - 2xl border border - gray-200 py-6\">

                  <div className=\"space-y-2 px-6\"    />;
                    {company.map ((item) => (<Link;}
                        key={item.name}
                        href={item.href}
                        className=\'group flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                        on_click={closeAllDropdowns}
                          />;
                        <item.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                        <div    />;
                          <h3 className=\"font - semibold text - gray - 900 group - hover:text-blue-600\"    />;
                            {item.name}
                          </h3>;
                          <p className=\"text - sm text-gray-600\"    />{item.description}</p>;
                        </div>;
                      </Link>))}
                  </div>;
                </motion.div>)}
            </div>;
            {/* CTA Button */}
            <Link;
              href=\'/contact\';
              className=\"px - 6 py - 2 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font-semibold transition-colors\"    />

              Get Started;
            </Link>;
          </div>;
          {/* Mobile Menu Button */}
          <button;
            on_click={() =    /> setIsOpen (!is_open)}
            className=\"lg: hidden p - 2 text - white hover:text - blue-300 transition-colors\">

            {is_open ? <X className=\"w-6 h-6\"    /> : <Menu className=\"w-6 h-6\" /,}
}
          </button    />;
        </div>;
        {/* Mobile Menu */}
        {is_open && (<motion.div;}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className=\'lg:hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6\';
              />;
            initial={{ opacity: 0, height: 0 ,}
}
            animate={{ opacity: 1, height: 'auto' ,}
}
            exit={{ opacity: 0, height: 0 ,}
}
            className=\"lg:hidden bg - white rounded - xl shadow - 2xl border border - gray - 200 mt-2 py-6\">

            <div className=\"px-6 space-y-6\"    />;
              {/* Mobile Services */}
              <div    />;
                <h3 className=\"text - lg font - semibold text - gray-900 mb-4\"    />Services</h3>;
                <div className=\"space-y-2\"    />;
                  {services.map ((service) => (<Link;}
                      key={service.name}
                      href={service.href}
                      className=\'flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                      on_click={closeAllDropdowns}
                        />;
                      <service.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font - medium text-gray-900\"    />{service.name}</h4>;
                        <p className=\"text - sm text-gray-600\"    />{service.description}</p>;
                      </div>;
                    </Link>))}
                </div>;
              </div>;
              {/* Mobile Company */}
              <div    />;
                <h3 className=\"text - lg font - semibold text - gray-900 mb-4\"    />Company</h3>;
                <div className=\"space-y-2\"    />;
                  {company.map ((item) => (<Link;}
                      key={item.name}
                      href={item.href}
                      className=\'flex items - start space - x-3 p - 3 rounded - lg hover:bg - gray-50 transition-colors\';
                      on_click={closeAllDropdowns}
                        />;
                      <item.icon className=\"w - 5 h - 5 text - blue-600 mt-1\"    />;
                      <div    />;
                        <h4 className=\"font - medium text-gray-900\"    />{item.name}</h4>;
                        <p className=\"text - sm text-gray-600\"    />{item.description}</p>;
                      </div>;
                    </Link>))}
                </div>;
              </div>;
              {/* Mobile CTA */}
              <div className=\"pt - 4 border - t border-gray-200\"    />;
                <Link;
                  href=\'/contact\';
                  className=\'block w - full text - center px - 6 py - 3 bg - blue - 600 hover:bg - blue - 700 text - white rounded - lg font-semibold transition-colors\';
                  on_click={closeAllDropdowns}

                >;

                  Get Started;
                </Link>;
              </div>;
            </div>;



          </motion.div>)}
      </div>;
    </nav>);




import React, { useState, useEffect } from 'react';
export default Navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables;
  const [isScrolled, setIsScrolled] = useState(false);

 50);
    };

    window.addEventListener('scroll', handleScroll);
 window.removeEventListener('scroll', handleScroll);
  }, []);

    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
  };

    setIsServicesOpen(!isServicesOpen);
  };

  ];

  ];

  ];

  // Removed specializedServices as it was unused;
          {/* Logo */}  <span className="text-xl font-bold text-white neon-text"></spa>Zion Tech Group</span>
          {/* Desktop Navigation */}  <span></spa>Services</span>
                        Micro SAAS;
                            <span></spa>{service.name}</span>
                        ))}
                        AI Services;
                            <span></spa>{service.name}</span>
                        ))}
                        IT Services;
                            <span></spa>{service.name}</span>
                        ))}
                        <span></spa>View All Services</span>
                        <span></spa>Specialized Solutions</span>
              )}

              About;
              Blog;
              Case Studies;
              Pricing;
              Contact;
                <span className="hidden sm:inline"></spa>+1 302 464 0950</span>
                Get Started;
          {/* Mobile Menu Button */} {isMenuOpen ? <X className="w-6 h-6" /&gt; : <Menu className="w-6 h-6" /&gt;}</X></Menu></X>
        {/* Mobile Menu */}  <span></spa>Services</span>
                      <h4 className="text-cyan-400 font-semibold mb-2"></h>Micro SAAS</h4>
                            {service.name} ))}
                      <h4 className="text-cyan-400 font-semibold mb-2"></h>AI Services</h4>
                            {service.name} ))}
                    
                      View All Services →
                )}

                About;
                Blog;
                Case Studies;
                Pricing;
                Contact;
                  <span></spa>+1 302 464 0950</span>
                  Get Started;
        )}
  );
};


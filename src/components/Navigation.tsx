import React, { useState, useEffect } from 'react'
export default Navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  // Removed unused state variables
  const [isScrolled, setIsScrolled] = useState(false)
 50)
    }
    window.addEventListener('scroll', handleScroll)
 window.removeEventListener('scroll', handleScroll)
  }, [])
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }
    setIsMenuOpen(!isMenuOpen)
      closeAllMenus()
  }
    setIsServicesOpen(!isServicesOpen)
  }
  ]
  ]
  ]
  // Removed specializedServices as it was unused
          {/* Logo */}
            <span className = "text-xl font-bold text-white neon-text"</span className = "text-xl font-bold text-white neon-text">>Zion Tech Group</span>
          {/* Desktop Navigation */}
                <spa</spa>n>Services</span>
                        Micro SAAS
                            <spa</spa>n>{service.name}</span>
                        ))}
                        AI Services
                            <spa</spa>n>{service.name}</span>
                        ))}
                        IT Services
                            <spa</spa>n>{service.name}</span>
                        ))}
                        <spa</spa>n>View All Services</span>
                        <spa</spa>n>Specialized Solutions</span>
              )}
              About
              Blog
              Case Studies
              Pricing
              Contact
                <span className = "hidden sm:inline"</span className = "hidden sm:inline">>+1 302 464 0950</span>
                Get Started
          {/* Mobile Menu Button */};
            {isMenuOpen ? <X className="w-6 h-6" /&gt; : <Menu className="w-6 h-6" /&gt;}</X></X>
        {/* Mobile Menu */}
                  <spa</spa>n>Services</span>
                      <h4 className = "text-cyan-400 font-semibold mb-2"</h4 className = "text-cyan-400 font-semibold mb-2">>Micro SAAS</h4>
                            {service.name}
                        ))}
                      <h4 className="text-cyan-400 font-semibold mb-2"</h4 className="text-cyan-400 font-semibold mb-2">>AI Services</h4>
                            {service.name}
                        ))}
                      View All Services →
                )}
                About
                Blog
                Case Studies
                Pricing
                Contact
                  <spa</spa>n>+1 302 464 0950</span>
                  Get Started
        )}
  )
}""'"'
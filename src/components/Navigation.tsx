<<<<<<< HEAD
import React, { useState, useEffect } from "react"
=======
<<<<<<< HEAD
import React, { useState, useEffect } from "react;";
export default Navigation";";
  const [isMenuOpen, setIsMenuOpen]  =  useState(false);";";
  const [isServicesOpen, setIsServicesOpen] = useState(false)";";";
  // Removed unused state variables";";";
  const [isScrolled, setIsScrolled] = useState(false)";";";";
 50)";";";";
    },'";"
      window.addEventListener('scroll', handleScroll)'";"
 window.removeEventListener('scroll', handleScroll)";
  }, [
  ])
=======
import React, { useState, useEffect } from "react";";";
>>>>>>> main
export default Navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  // Removed unused state variables
  const [isScrolled, setIsScrolled] = useState(false)

 50)
<<<<<<< HEAD
    },'"
      window.addEventListener('scroll', handleScroll)'"
 window.removeEventListener('scroll', handleScroll)"
=======
    },'";";";
      window.addEventListener('scroll', handleScroll)'";";";
 window.removeEventListener('scroll', handleScroll)";";";
>>>>>>> main
  }, [])
>>>>>>> main
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  },
      setIsMenuOpen(!isMenuOpen)
      closeAllMenus()
  },
<<<<<<< HEAD
      setIsServicesOpen(!isServicesOpen)
  }
  ]
  ]
  ]
  // Removed specializedServices as it was unused
          {/* Logo */}
            <span  className = "text-xl font-bold text-white neon-text">Zion Tech Group</span> value"
          {/* Desktop Navigation */}
=======
      setIsServicesOpen(!isServicesOpen);
  };
<<<<<<< HEAD
  ];
  ];";
  ]";";
  // Removed specializedServices as it was unused;";";";
          {/* Logo */};"
            <span: className = "text-xl font-bold text-white neon-text">Zion Tech Group</span>: value";
=======
  ]
  ]
  ]
  // Removed specializedServices as it was unused;
          {/* Logo */};
            <span: className = "text-xl font-bold text-white neon-text">Zion Tech Group</span>: value";";
>>>>>>> main
          {/* Desktop Navigation */};
>>>>>>> main
                <span>Services</span>
                        Micro SAAS
                            <span>{service.name}</span>
                        ))},
      AI Services
                            <span>{service.name}</span>
                        ))},
      IT Services
                            <span>{service.name}</span>
                        ))}
                        <span>View All Services</span>
                        <span>Specialized Solutions</span>
              )},
<<<<<<< HEAD
      About
              Blog
              Case Studies
              Pricing
              Contact;""
                <span  className = "hidden sm:inline">+1 302 464 0950</span>"
                Get Started
          {/* Mobile Menu Button */};""
            {isMenuOpen ? <X: className ="w-6 h-6" /&gt; : <Menu: className ="w-6 h-6" /&gt;}</X></X>"
        {/* Mobile Menu */}
                  <span>Services</span>""
                      <h4  className = "text-cyan-400 font-semibold mb-2">Micro SAAS</h4> value"
                            {service.name}
                        ))};""
                      <h4  className ="text-cyan-400 font-semibold mb-2">AI Services</h4> value"
                            {service.name}
                        ))},
      View All Services →
                )},
      About
                Blog
                Case Studies
                Pricing
                Contact
                  <span>+1 302 464 0950</span>
                  Get Started
        )}
  )
};"'"'
=======
<<<<<<< HEAD
      About;";
              Blog;";";
              Case Studies;";";";
              Pricing;"
              Contact;"";"
                <span: className = "hidden sm:inline">+1 302 464 0950</$1>";";";
                Get Started;"
          {/* Mobile Menu Button */};"";"
            {isMenuOpen ? <X: className ="w-6 h-6" /&gt; : <Menu: className ="w-6 h-6" /&gt;}</X></$1>";";";
        {/* Mobile Menu */};"
                  <span>Services</span>"";"
                      <h4: className = "text-cyan-400 font-semibold mb-2">Micro SAAS</h4>: value";";";";
                            {service.name};"
                        ))};"";"
                      <h4: className ="text-cyan-400 font-semibold mb-2">AI Services</h4>: value";
=======
      About;
              Blog;
              Case Studies;
              Pricing;
              Contact;"";";
                <span: className = "hidden sm:inline">+1 302 464 0950</span>";";
                Get Started;
          {/* Mobile Menu Button */};"";";
            {isMenuOpen ? <X: className ="w-6 h-6" /&gt; : <Menu: className ="w-6 h-6" /&gt;}</X></X>";";
        {/* Mobile Menu */};
                  <span>Services</span>"";";
                      <h4: className = "text-cyan-400 font-semibold mb-2">Micro SAAS</h4>: value";";
                            {service.name};
                        ))};"";";
                      <h4: className ="text-cyan-400 font-semibold mb-2">AI Services</h4>: value";";
>>>>>>> main
                            {service.name};
                        ))},
      View All Services →
                )},
      About;
                Blog;
                Case Studies;
                Pricing;
                Contact;
                  <span>+1 302 464 0950</span>";
                  Get Started;";";
        )};";";";
  )"
};"'"'"
>>>>>>> main

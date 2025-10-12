import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Code, Users, Zap, ArrowRight, Database, Settings, Target, MessageSquare, Eye, Cpu3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables
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

  // Removed specializedServices as it was unused

          {/* Logo */}
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>

          {/* Desktop Navigation */}
                <span>Services</span>
              
                        Micro SAAS
                            <span>{service.name}</span>
                        ))}
                        AI Services
                            <span>{service.name}</span>
                        ))}
                        IT Services
                            <span>{service.name}</span>
                        ))}
                        <span>View All Services</span>
                      
                        <span>Specialized Solutions</span>
              )}

              About
              Blog
              Case Studies
              Pricing
              Contact
            
                <span className="hidden sm:inline">+1 302 464 0950</span>
              
                Get Started

          {/* Mobile Menu Button */}
          
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

        {/* Mobile Menu */}
                  <span>Services</span>
                
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                            {service.name}
                        ))}
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                            {service.name}
                        ))}
                    
                      View All Services →
                )}

                About
                Blog
                Case Studies
                Pricing
                Contact
              
                  <span>+1 302 464 0950</span>
                
                  Get Started
        )}
  );
};

export default Navigation;

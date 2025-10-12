import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Code, Users, Zap, ArrowRight, Database, Settings, Target, MessageSquare, Eye, Cpu3, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, CreditCard, Heart, Stethoscope, Briefcase, Calculator, Calendar, Smartphone } from 'lucide-react';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  // Removed unused state variables
  const [isScrolled, setIsScrolled] = useState(false);

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

    setIsMenuOpen(!isMenuOpen);
      closeAllMenus();
    }
  };

    setIsServicesOpen(!isServicesOpen);
  };

  ];

  ];

  ];

  // Removed specializedServices as it was unused

    }`}>
  return (
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2">
                          
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                          
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                          
                          >
                            <service.icon className="w-3 h-3" />
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      >
                        <span>Specialized Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                  <div className="mt-4 pl-4 space-y-3">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                      <div className="space-y-2">
                          
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2">
                          
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    >
                      View All Services →
                    </a>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700">
                
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Navigation;

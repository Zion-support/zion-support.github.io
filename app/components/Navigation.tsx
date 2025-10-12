import { useState, useEffect  } from "react";
import { Link  } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi  } from "lucide-react";
const Navigation: React.FC = () => {
  return (
  return (
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    
  );

  );
};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', icon: <><Brain className="w-4 h-4" /> },
    { name: 'AI Automation', url: '/ai-automation', icon: <Zap className="w-4 h-4" /> },
    { name: 'AI Chatbots', url: '/ai-chatbot-builder', icon: <Globe className="w-4 h-4" /> },
    { name: 'AI Content Generation', url: '/ai-content-generator', icon: <Code className="w-4 h-4" /> },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: <Wifi className="w-4 h-4" /> },
    {name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: <Smartphone className="w-4 h-4" /> }
  ];

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
    { name: 'DevOps & CI/CD', url: '/devops', icon: <Code className="w-4 h-4" /> },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Database Management', url: '/database', icon: <Globe className="w-4 h-4" /> },
    { name: 'API Development', url: '/api', icon: <Code className="w-4 h-4" /> },
    {name: 'Mobile Development', url: '/mobile-development', icon: <Smartphone className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${></nav>
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'></nav>
    }`}>
      <>div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ></div><><div className="flex items-center justify-between h-16" ></div></>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" ></Link>
            <>div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" ></div><Brain className="w-5 h-5 text-white" /></></Brain>
            </div>
            <span className="text-xl font-bold text-white" >Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ></div>
            <Link;></Link>
              to="/" className="text-gray-300 hover:text-white transition-colors duration-300" ></Link>
            >
              Home;
            </Link><Link;></Link></>
              to="/about" className="text-gray-300 hover:text-white transition-colors duration-300" ></Link>
            >
              About;
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative" ></div>
              <button;
                onClick={toggleServices}></button>
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300" ></button>
              >
                Services;
                <><ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} /></ChevronDown>
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50" ></div><div className="px-6 py-2" ></div></>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2" ></h3>
                      <Brain className="w-4 h-4 text-blue-500" /></Brain>
                      AI Services;
                    </h3>
                    <>div className="grid grid-cols-1 gap-2 mb-4" ></div>
                      {aiServices.map((service, index) => (
                        <Link;
                          key={index}
                          to={service.url}></Link>
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" ></Link>
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2" ></h3>
                      <Cloud className="w-4 h-4 text-green-500" /></Cloud>
                      IT Services;
                    </h3>
                    <div className="grid grid-cols-1 gap-2" ></div>
                      {itServices.map((service, index) => (
                        <Link;
                          key={index}
                          to={service.url}></Link>
                          className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200" ></Link>
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link;></Link>
              to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300" ></Link>
            >
              Contact;
            </Link><Link;></Link></>
              to="/news" className="text-gray-300 hover:text-white transition-colors duration-300" ></Link>
            >
              News;
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4" ></div>
            <><Link;></Link>
              to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300" ></Link>
            >
              Get Started;
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" ></div>
            <button;
              onClick={toggleMenu}></button>
              className="text-gray-300 hover:text-white transition-colors duration-300" ></button>
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800" ></div><div className="px-2 pt-2 pb-3 space-y-1" ></div></>
              <Link;></Link>
                to="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300" ></Link>
                onClick={() => setIsOpen(false)}
              >
                Home;
              </Link><Link;></Link></>
                to="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300" ></Link>
                onClick={() => setIsOpen(false)}
              >
                About;
              </Link>
              
              {/* Mobile Services */}
              <>div className="px-3 py-2" ></div><div className="text-gray-300 font-medium mb-2" >AI Services</div></>
                <>div className="ml-4 space-y-1" ></div>
                  {aiServices.map((service, index) => (
                    <><Link;
                      key={index}
                      to={service.url}></Link>
                      className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors duration-300" ></Link>
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div><div className="px-3 py-2" ></div></>
                <>div className="text-gray-300 font-medium mb-2" >IT Services</div><div className="ml-4 space-y-1" ></div></>
                  {itServices.map((service, index) => (
                    <Link;
                      key={index}
                      to={service.url}></Link>
                      className="block px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors duration-300" ></Link>
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link;></Link>
                to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300" ></Link>
                onClick={() => setIsOpen(false)}
              >
                Contact;
              </Link><Link;></Link></>
                to="/news" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300" ></Link>
                onClick={() => setIsOpen(false)}
              >
                News;
              </Link>
              
              <div className="px-3 py-2" ></div>
                <Link;></Link>
                  to="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300" ></Link>
                  onClick={() => setIsOpen(false)}
                >
                  Get Started;
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
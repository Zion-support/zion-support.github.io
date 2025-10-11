  useEffect(() => {
    const handleResize = () => {
  return (
    <div>
      {/* Content */}
    </div>
  );
      if (window.innerWidth >= 1024) {
        setIsOpen(false)}}

    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false)}// Service data;
    const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
    window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
  }
  }, [])
  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleServices = () => setServicesOpen(!servicesOpen)
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen)
  const toggleItServices = () => setItServicesOpen(!itServicesOpen)
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen)
  const closeAllMenus = () => {
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
  }

  // Service data
  const aiServices = [
  const itServices = [
    {name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' ,},
    {name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' ,},
    {name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' ,},
    {name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' ,},
    {name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' ,},
    {name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' ,}];
  ]
  const itServices = [
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security' },
    { name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' }
  ]
  const microSaasServices = [
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
          </div><div className="flex-shrink-0">
            </div><Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                </div><Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover: text-cyan-400 ml-auto" />,
                      </Link>
                    ))}

                </button>
                
                {servicesOpen && (

            </div>

                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover: text-cyan-400 ml-auto" />,
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover: text-cyan-400 ml-auto" />,
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover: text-cyan-400 ml-auto" />,
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

              <span className="text-sm">Email</span>
            </a>
          </div>


          <div className="lg: hidden mt-4 pb-4 border-t border-cyan-500/20">,</div>
            <div className="pt-4 space-y-4">
              <Link href="/" className="block text-gray-300 hover: text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus,}>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            </div><$2 />
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? </button><X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (

          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            </div><div className="pt-4 space-y-4">
              </div><Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>

                Home;
              </Link>
              
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {itServicesOpen && (
                    ))}
                  </div>
                )}
              </div>

                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} / /></ChevronDown>
                </button>
                {microSaasOpen && (
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              </Link>
              <Link to="/contact" className="text-gray-300 hover: text-white block px-3 py-2 rounded-md text-base font-medium">,

                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  </div><MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>

                </a>
                <div className="flex items-center text-gray-400 px-3 py-2 text-sm">
                  </div><MapPin className="w-4 h-4 mr-2" />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709;
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navigation
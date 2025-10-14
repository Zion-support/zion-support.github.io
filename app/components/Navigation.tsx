import React from 'react';
// import from 'react-router-dom'; // Empty import removed
// import from '@heroicons/react/24/outline'; // Empty import removed

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const navigation = ['
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { '
      name: 'Services', '
      href: '/services', 
      icon: BriefcaseIcon,
      submenu: ['
        { name: 'AI Solutions', href: '/ai-solutions' },'
        { name: 'IT Solutions', href: '/it-solutions' },'
        { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },'
        { name: 'Cybersecurity', href: '/cybersecurity' },'
        { name: 'Cloud Infrastructure', href: '/cloud-solutions' },'
        { name: 'Digital Transformation', href: '/digital-transformation' },'
        { name: '5G Solutions', href: '/5g-solutions' }
      ]
    },'
    { name: 'Solutions', href: '/solutions', icon: CogIcon },'
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },'
        { name: 'Digital Transformation', href: '/digital-transformation', icon: CogIcon },'
        { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },'
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
      ]
    },
    { '
      name: 'Solutions', '
      href: '/solutions', 
      icon: CogIcon,
      submenu: ['
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },'
        { name: 'IT Services', href: '/it-services', icon: BriefcaseIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },'
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }
      ]
    },'
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },'
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },'
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },'
    { name: 'Demo', href: '/demo', icon: PlayIcon },'
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },'
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ];

  const isActive = (path: string) => {}
  const toggleMobileMenu = () => {}
  const toggleServicesMenu = () => {}
  const toggleSolutionsMenu = () => {}
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>

          {}
          <div className="hidden lg:flex items-center space-x-8">
            {} className="relative group">
                  <Link
                    to={}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                    onMouseEnter={}
                    onMouseLeave={}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{}</span>
                    {}
                  </Link>
                  
                  {}
                  {}
                          to={}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                          onClick={}                        >
                          {}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {} className="relative">
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={}
                      >
                        {}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      {}
                          onMouseLeave={}
                        >
                          {}
                              to={}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={}
                      className={`${
                        isActive(item.href)'
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      } px-3 py-2 text-sm font-medium`}
                    >
                      {}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="md:hidden flex items-center">
            <button
              onClick={}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <div key={item.name}>
                  {}
                        className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                      >
                        {}
                        <ChevronDownIcon className="ml-1 h-4 w-4 inline" />
                      </button>
                      {}
                              to={}
                              className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-sm"
                              onClick={}
                            >
                              {}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={}
                      className={`${
                        isActive(item.href)'
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600'
                      } block px-3 py-2 text-base font-medium`}
                      onClick={}
                    >
                      {}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navigation;'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom
import { 
  Menu, 
  X, 
  Brain, '
  Shield, ;';}
  Zap, ';}
  Globe,';}
  ChevronDown'}
} from 'lucide-react
interface NavigationProps {}
  onSidebarToggle?: () => void;}
}
const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
const [isAIServicesOpen, setIsAIServicesOpen] = useState(false)
  const [isITServicesOpen, setIsITServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);}
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);';}
';}
  const navigation = ['}
    { name: 'Home', href: '/', icon: HomeIcon },'
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { '
      name: 'Services', '}
      href: '/services', }
      icon: BriefcaseIcon,}
      submenu: ['}
        { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },'
        { name: 'IT Solutions', href: '/it-solutions', icon: BriefcaseIcon },'
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: GlobeAltIcon },'
        { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },']
        { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }]
      ]
    },
    { '
      name: 'Solutions', '}
      href: '/solutions', }
      icon: CogIcon,}
      submenu: ['}
        { name: 'AI Services', href: '/ai-services', icon: CpuChipIcon },'
        { name: 'IT Services', href: '/it-services', icon: BriefcaseIcon },'
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: CloudIcon },']
        { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }]
      ]
    },'
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },'
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },'
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },'
    { name: 'Demo', href: '/demo', icon: PlayIcon },'
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },'
    { name: 'Contact', href: '/contact', icon: PhoneIcon }
  ]
  const isActive = (path: string) => {}
    return location.pathname ="==" path;}
  }
  const itServices = ['
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: "<Cloud className="w-4" h-4 /> "},'
    { name: 'Cybersecurity', href: '/cybersecurity', icon: "<Shield className="w-4" h-4 /> "},'
    { name: 'Web Development', href: '/web-development', icon: "<Globe className="w-4" h-4 /> "},'
    { name: 'Mobile Development', href: '/mobile-development', icon: "<Smartphone className="w-4" h-4 /> "},'
    { name: 'Database Management', href: '/database-management', icon: "<Database className="w-4" h-4 /> "},']
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: "<Network className="w-4" h-4 /> "}]
  ]
  const microSaasServices = ['
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: "<BarChart3 className="w-4" h-4 /> "},'
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: "<Shield className="w-4" h-4 /> "},'
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: "<Cloud className="w-4" h-4 /> "},']
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: "<FileText className="w-4" h-4 /> "}]
  ]
  const fiveGServices = ['
    { name: '5G Implementation', href: '/5g-implementation', icon: "<Cpu className="w-4" h-4 /> "},'
    { name: '5G Edge Computing', href: '/5g-edge-computing', icon: "<Zap className="w-4" h-4 /> "},'
    { name: '5G IoT Solutions', href: '/5g-iot-solutions', icon: "<Wifi className="w-4" h-4 /> "},']
    { name: '5G Smart City', href: '/5g-smart-city-solutions', icon: "<Building2 className="w-4" h-4 /> "}]
  ]
  return (
    <nav>div</nav>
      <div></div>
          {/* Logo */"}
          <div>Link</div>
      <Link>div</Link>
      <div>span</div>
      <span>Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */})
          <div className="hidden lg: "flex items-center space-x-1></div>)
            {navigation.map((item) => {"}
              const Icon = item.icon;}
              return (}
                <div>Link</div>
      <Link> item.submenu && setIsServicesOpen(true)}
                    onMouseLeave="{()" => item.submenu && setIsServicesOpen(false)}
                  >
                    <Icon>span</Icon>
      <span>{item.name}</span>
                    {item.submenu && <ChevronDownIcon className="w-4 h-4 ml-1" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && isServicesOpen && ()
                    <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50"></div>)
                      {item.submenu.map((subItem) => (
                        <Link key="{subItem.name);"}
                          to="{subItem.href;"}
                          className="block px-4 py-2 text-sm text-gray-300 hover: "text-white hover:bg-slate-700"}
                        ></Link>}
                          {subItem.name})
                        </Link>)
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Button */}
          <div>Link</div>
      <Link></Link>
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */"}
          <div>button</div>
      <button>svg</button>
      <svg>path</svg>
      <path></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )}
export default Navigation
'
import React from 'react;
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Brain, 
  BarChart3, 
  Star, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Link as LinkIcon,
  Sidebar as SidebarIcon,
  Video,
  Users,
  Target,
  Settings,
  Search,
  Bell,
  User'
} from 'lucide-react';
import FuturisticButton from './FuturisticButton';

interface NavigationEnhancedProps {
  onSidebarToggle?: () => void;
const NavigationEnhanced = React.memo<NavigationEnhancedProps>(({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)'
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  const toggleServices = useCallback(() => {
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])
  const toggleMicroSaas = useCallback(() => {
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])
  const toggleItServices = useCallback(() => {
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])
  const toggleAiServices = useCallback(() => {
    setIsAiServicesOpen(!isAiServicesOpen)
  }, [isAiServicesOpen])
  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen])
  // Close all dropdowns when route changes;
  useEffect(() => {
    setIsServicesOpen(false)
    setIsMicroSaasOpen(false)
    setIsItServicesOpen(false)
    setIsAiServicesOpen(false)
    setIsOpen(false)
  }, [location.pathname])

  const aiServices = useMemo(() => ['
    { name: 'AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> featured: true },'
    { name: 'AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" /> featured: true },'
    { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> featured: true },'
    { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" /> featured: true },'
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" /> featured: false },'
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" /> featured: false },'
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" /> featured: false },'
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" /> featured: false }
  ], [])

  const itServices = useMemo(() => ['
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4"> },'
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4"> },'
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4"> },'
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4"> },'
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4"> },'
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4"> },'
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4"> },'
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4"> }
  ], [])

  const microSaasServices = useMemo(() => ['
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" /> featured: true },'
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" /> featured: true },'
    { name: 'Zion AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> featured: true },'
    { name: 'Zion AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" /> featured: true },'
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" /> featured: false },'
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> featured: false },'
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" /> featured: false },'
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" /> featured: false }
  ], [])

  const mainNavItems = useMemo(() => ['
    { name: 'Home', path: '/' },'
    { name: 'About', path: '/about' },'
    { name: 'Services', path: '/services' },'
    { name: 'AI Services', path: '/ai-services' },'
    { name: 'IT Services', path: '/it-services' },'
    { name: 'Micro SAAS', path: '/micro-saas' },'
    { name: 'Pricing', path: '/pricing' },'
    { name: 'Case Studies', path: '/case-studies' },'
    { name: 'Blog', path: '/blog' },'
    { name: 'Contact', path: '/contact' }
  ], [])
  const serviceCategories = useMemo(() => [
    {'
      name: 'AI Services','
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
      services: ['
        { name: 'AI Video Generator', path: '/zion-ai-video-generator' },'
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' },'
        { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro' },'
        { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro' }
      ]
    },
    {'
      name: 'IT Services','
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />
      services: ['
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },'
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },'
        { name: 'Web Development', path: '/web-development' },'
        { name: 'Mobile Development', path: '/mobile-development' }
      ]
    },
    {'
      name: '5G Solutions','
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />
      services: ['
        { name: '5G Implementation', path: '/5g-implementation' },'
        { name: '5G Edge Computing', path: '/5g-edge-computing' },'
        { name: '5G IoT Solutions', path: '/5g-iot-solutions' },'
        { name: '5G Smart Cities', path: '/5g-smart-city-solutions' }
      ]
    }
  ], [])
  return (
    
    <nav />
      {/* Contact Bar */}
      <div>
    <div />
          <div>
    <div />
              <div>
    <span />
                <span>Live Support Available</span>
              </div>
              <div>
    <span className="mr-2">📞</span>
                <a />
                  +1 302 464 0950
                </a>
              </div>
              <div>
    <span className="mr-2">✉️</span>
                <a />
                  kleber@ziontechgroup.com
                </a>
              </div>
  </div>
  <div>
    <FuturisticButton />
                Get Quote
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div>
    <div />
          <Link />
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <div />
            {/* Search Button */}
<button />
              <Search />
            </button>
            {/* Sidebar Toggle Button */}
<button />
              <SidebarIcon />
            </button>
            {mainNavItems.map((item) => (
<Link />
                {item.name}
                <span />
              </Link>
            ))}
            
            {/* AI Services Dropdown */}
            <div>
    <button />
                <span>AI Services</span>'
                <ChevronDown />
              </button>
              
              {isAiServicesOpen && (
                <div>
    <div />
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">AI Services</h3>
                  </div>
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group ${'
                        service.featured ? 'bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-l-2 border-purple-400' : ';
                      }`}
                      onClick={() => setIsAiServicesOpen(false)}
                    >
                      <div />
                        {service.icon}
                      </div>
                      <div>
    <span className="font-medium">{service.name}</span>
                        {service.featured && (
                          <div>
    <Star />
                            <span className="text-xs text-yellow-400">Featured</span>
                          </div>
                        )}
                      </div>
                    </Link>
))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div>
    <button />
                <span>IT Services</span>'
                <ChevronDown />
              </button>
              {isItServicesOpen && (
                <div>
    <div />
                    <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider">IT Services</h3>
                  </div>
                  {itServices.map((service) => (
<Link
                      key={service.name;
                      to={service.path;
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"> setIsItServicesOpen(false)}
                    >
                      <div />
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.name}</span>"
                    </Link>
))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div>
    <button />
                <span>Micro SAAS</span>'
                <ChevronDown />
              </button>
              
              {isMicroSaasOpen && (
                <div>
    <div />
                    <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Micro SAAS Solutions</h3>
                  </div>
                  {microSaasServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group ${'
                        service.featured ? 'bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-l-2 border-purple-400' : ';
                      }`}
                      onClick={() => setIsMicroSaasOpen(false)}
                    >
                      <div />
                        {service.icon}
                      </div>
                      <div>
    <span className="font-medium">{service.name}</span>
                        {service.featured && (
                          <div>
    <Star />
                            <span className="text-xs text-yellow-400">Featured</span>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <FuturisticButton;
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4">}"
            >
              Get Started;
            </FuturisticButton>
          </div>
          {/* Mobile menu button */}
          <div>
    <button />
              {isOpen ? <X className="w-6 h-6"> : <Menu className="w-6 h-6">}
            </button>
          </div>
        </div>
        {/* Search Bar */}
        {isSearchOpen && (
          <div>
    <div />
              <Search />
              <input
                type="text"
                placeholder="Search services, solutions, or topics..."
                value={searchQuery;
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus: 'outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
</div>
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div>
    <div />
              {mainNavItems.map((item) => (
                <Link />
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile AI Services */}
              <div />
                <button />
                  <span>AI Services</span>'
                  <ChevronDown />
                </button>
                {isAiServicesOpen && (
                  <div />
                    {aiServices.map((service) => (
<Link
                        key={service.name;
                        to={service.path;
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"> {
                          setIsAiServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon;
                        <span>{service.name}</span>
                        {service.featured && <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto">}"
                      </Link>
))}
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div />
                <button />
                  <span>IT Services</span>'
                  <ChevronDown />
                </button>
                {isItServicesOpen && (
                  <div />
                    {itServices.map((service) => (
<Link
                        key={service.name;
                        to={service.path;
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-green-400 transition-colors rounded-lg hover:bg-green-500/10"> {
                          setIsItServicesOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon;
                        <span>{service.name}</span>
                      </Link>
))}
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div />
                <button />
                  <span>Micro SAAS</span>'
                  <ChevronDown />
                </button>
                {isMicroSaasOpen && (
                  <div />
                    {microSaasServices.map((service) => (
<Link
                        key={service.name;
                        to={service.path;
                        className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-500/10"> {
                          setIsMicroSaasOpen(false)
                          toggleMenu()
                        }}
                      >
                        {service.icon;
                        <span>{service.name}</span>
                        {service.featured && <Star className="w-3 h-3 text-yellow-400 fill-current ml-auto">}"
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <FuturisticButton />
                <span>Get Started</span>
                <ArrowRight />
              </FuturisticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
})
'
NavigationEnhanced.displayName = 'NavigationEnhanced'

export default NavigationEnhanced;
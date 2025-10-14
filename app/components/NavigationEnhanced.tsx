import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { X
  ChevronDown } from 'lucide-react';
import { Zap
  Cloud } from 'lucide-react';
import { Shield
  Database } from 'lucide-react';
import { Code
  Brain } from 'lucide-react';
import { BarChart3
  Star } from 'lucide-react';
import { ArrowRight
  Globe } from 'lucide-react';
import { Cpu
  Link } from 'lucide-react';
import { Sidebar } from 'lucide-react';
import { Video
  Users } from 'lucide-react';
import { Target
  Settings } from 'lucide-react';
import { Search
  Bell } from 'lucide-react';
import { User } from 'lucide-react';
import FuturisticButton from './FuturisticButton'
interface NavigationEnhancedProps {
  onSidebarToggle?: () => void
}
const NavigationEnhanced = React.memo<NavigationEnhancedProps>(({ onSidebarToggle }) => {;
  return null;
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false)
  const [isItServicesOpen, setIsItServicesOpen] = useState(false)
  const [isAiServicesOpen, setIsAiServicesOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()
  const toggleMenu = useCallback(() => {;
  return null;
    setIsOpen(!isOpen)
  }, [isOpen])
  const toggleServices = useCallback(() => {;
  return null;
    setIsServicesOpen(!isServicesOpen)
  }, [isServicesOpen])
  const toggleMicroSaas = useCallback(() => {;
  return null;
    setIsMicroSaasOpen(!isMicroSaasOpen)
  }, [isMicroSaasOpen])
  const toggleItServices = useCallback(() => {;
  return null;
    setIsItServicesOpen(!isItServicesOpen)
  }, [isItServicesOpen])
  const toggleAiServices = useCallback(() => {;
  return null;
    setIsAiServicesOpen(!isAiServicesOpen)
  }, [isAiServicesOpen])
  const toggleSearch = useCallback(() => {;
  return null;
    setIsSearchOpen(!isSearchOpen)
  }, [isSearchOpen])
  // Close all dropdowns when route changes,
useEffect(() => {
  return null;
    setIsServicesOpen(false)
    setIsMicroSaasOpen(false)
    setIsItServicesOpen(false)
    setIsAiServicesOpen(false)
    setIsOpen(false)
  }, [location.pathname])
  const aiServices = useMemo(() => [
    { name: 'AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" />, featured: true }
    { name: 'AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" />, featured: true }
    { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" />, featured: true }
    { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true }
    { name: 'AI Analytics', path: '/ai-analytics', icon: <BarChart3 className="w-4 h-4" />, featured: false }
    { name: 'AI Automation', path: '/ai-automation', icon: <Zap className="w-4 h-4" />, featured: false }
    { name: 'AI Content Generation', path: '/ai-content-generation', icon: <Code className="w-4 h-4" />, featured: false }
    { name: 'AI Customer Support', path: '/ai-customer-support', icon: <Users className="w-4 h-4" />, featured: false }
  ], [])
  const itServices = useMemo(() => [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Cloud className="w-4 h-4" /> }
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> }
    { name: 'Web Development', path: '/web-development', icon: <Code className="w-4 h-4" /> }
    { name: 'Mobile Development', path: '/mobile-development', icon: <Code className="w-4 h-4" /> }
    { name: 'Database Management', path: '/database-management', icon: <Database className="w-4 h-4" /> }
    { name: 'Custom Software', path: '/custom-software', icon: <Code className="w-4 h-4" /> }
    { name: 'Network Infrastructure', path: '/network-infrastructure', icon: <Cloud className="w-4 h-4" /> }
    { name: 'Data Analytics', path: '/data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
  ], [])
  const microSaasServices = useMemo(() => [
    { name: 'Zion AI Video Generator', path: '/zion-ai-video-generator', icon: <Video className="w-4 h-4" />, featured: true }
    { name: 'Zion AI Customer Insights', path: '/zion-ai-customer-insights', icon: <Brain className="w-4 h-4" />, featured: true }
    { name: 'Zion AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" />, featured: true }
    { name: 'Zion AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro', icon: <BarChart3 className="w-4 h-4" />, featured: true }
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <BarChart3 className="w-4 h-4" />, featured: false }
    { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" />, featured: false }
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Cloud className="w-4 h-4" />, featured: false }
    { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Brain className="w-4 h-4" />, featured: false }
  ], [])
  const mainNavItems = useMemo(() => [
    { name: 'Home', path: '/' }
    { name: 'About', path: '/about' }
    { name: 'Services', path: '/services' }
    { name: 'AI Services', path: '/ai-services' }
    { name: 'IT Services', path: '/it-services' }
    { name: 'Micro SAAS', path: '/micro-saas' }
    { name: 'Pricing', path: '/pricing' }
    { name: 'Case Studies', path: '/case-studies' }
    { name: 'Blog', path: '/blog' }
    { name: 'Contact', path: '/contact' }
  ], [])
  const serviceCategories = useMemo(() => [
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      services: [,
        { name: 'AI Video Generator', path: '/zion-ai-video-generator' }
        { name: 'AI Customer Insights', path: '/zion-ai-customer-insights' }
        { name: 'AI Cybersecurity Suite Pro', path: '/zion-ai-cybersecurity-suite-pro' }
        { name: 'AI Business Intelligence Pro', path: '/zion-ai-business-intelligence-pro' }
      ]
    }
    {
      name: 'IT Services',
      path: '/it-services',
      icon: <Shield className="w-4 h-4" />,
      services: [,
        { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' }
        { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' }
        { name: 'Web Development', path: '/web-development' }
        { name: 'Mobile Development', path: '/mobile-development' }
      ]
    }
    {
      name: '5 G Solutions',
      path: '/5 g-solutions',
      icon: <Globe className="w-4 h-4" />,
      services: [,
        { name: '5 G Implementation', path: '/5 g-implementation' }
        { name: '5 G Edge Computing', path: '/5 g-edge-computing' }
        { name: '5 G IoT Solutions', path: '/5 g-iot-solutions' }
        { name: '5 G Smart Cities', path: '/5 g-smart-city-solutions' }
      ]
    }
  ], [])
  return (
    <nav,
className="bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 text-white shadow-2 xl border-b border-cyan-500/20 backdrop-blur-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
     /></nav>
      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-white/10" /></div>
        <div className="max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8" />,
          <div className="flex flex-col sm: flex-row items-center justify-between py-2 text-sm" />,
            <div className="flex flex-col sm: flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6" />,
              <div className="flex items-center text-cyan-400" /></div>
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" /></span>
                <span>Live Support Available</span>
              </div>
              <div className="flex items-center text-cyan-400" /></div>
                <span className="mr-2">📞</span>
                <a href="tel: +13024640950" className="hover:text-cyan-300 transition-colors" />,
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-cyan-400" /></div>
                <span className="mr-2">✉️</span>
                <a href="mailto: kleber@ziontechgroup.com" className="hover:text-cyan-300 transition-colors" />,
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4" /></div>
              <FuturisticButton,
href="/contact"
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover: text-white",
               /></FuturisticButton>
                Get Quote
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="max-w-7 xl mx-auto px-4" /></div>
        <div className="flex justify-between items-center py-4" /></div>
          <Link,
to="/" 
            className="text-2 xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover: from-cyan-300 hover:to-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded",
            aria-label="Zion Tech Group - Go to homepage"
           /></Link>
            Zion Tech Group
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg: flex space-x-8 items-center" />,
            {/* Search Button */}
            <button,
onClick={toggleSearch}
              className="text-gray-300 hover: text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10",
              aria-label="Search"
             /></button>
              <Search className="w-5 h-5" / /></Search>
            </button>
            {/* Sidebar Toggle Button */}
            <button,
onClick={onSidebarToggle}
              className="text-gray-300 hover: text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10",
              aria-label="Toggle sidebar"
             /></button>
              <SidebarIcon className="w-5 h-5" / /></SidebarIcon>
            </button>)
            )
            {mainNavItems.map((item) => (
              <Link,
key={item.name}
                to={item.path}
                className={""
                }""
                <span className={""
                }""
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}""
                      className={""
                      }""
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}""
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}""
                      className={""
                      }""
                  className={""
                  }""
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAiServicesOpen ? 'rotate-180' : ''}""
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isItServicesOpen ? 'rotate-180' : ''}""
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMicroSaasOpen ? 'rotate-180' : ''}"";
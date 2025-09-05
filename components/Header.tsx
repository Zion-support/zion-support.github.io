import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  User, 
  Phone, 
  Mail,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  DollarSign
} from 'lucide-react';

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export function Header({ className, onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('\');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', href: '/services' },
        { label: 'AI Services', href: '/ai-services' },
        { label: 'IT Services', href: '/it-services' },
        { label: 'Micro SaaS', href: '/micro-saas' },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Data Analytics', href: '/services/data-analytics' },
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Solutions', href: '/solutions' },
        { label: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { label: 'Healthcare', href: '/solutions/healthcare' },
        { label: 'Finance', href: '/solutions/finance' },
        { label: 'Retail', href: '/solutions/retail' },
        { label: 'Education', href: '/solutions/education' },
        { label: 'Government', href: '/solutions/government' },
      ]
    },
    {
      label: 'Company',
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Education', href: '/industries/education' },
        { label: 'Government', href: '/industries/government' },
        { label: 'Manufacturing', href: '/industries/manufacturing' },
        { label: 'Retail', href: '/industries/retail' },
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
      ]
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    } ${className || '\'}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Free Consultation Available</span>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Schedule Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    onMouseEnter={() => {
                      if (item.hasDropdown) {
                        if (item.label === 'Services') setIsServicesOpen(true);
                        if (item.label === 'Company') setIsCompanyOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) {
                        if (item.label === 'Services') setIsServicesOpen(false);
                        if (item.label === 'Company') setIsCompanyOpen(false);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menus */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                      item.label === 'Services' && isServicesOpen ? 'opacity-100 visible' : '\'
                    } ${item.label === 'Company' && isCompanyOpen ? 'opacity-100 visible' : '\'}`}>
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {dropdownItem.label === 'AI Services' && <Brain className="w-4 h-4" />}
                          {dropdownItem.label === 'IT Services' && <Shield className="w-4 h-4" />}
                          {dropdownItem.label === 'Micro SaaS' && <Cloud className="w-4 h-4" />}
                          {dropdownItem.label === 'About Us' && <Users className="w-4 h-4" />}
                          {dropdownItem.label === 'Blog' && <FileText className="w-4 h-4" />}
                          {dropdownItem.label === 'Help Center' && <HelpCircle className="w-4 h-4" />}
                          <span>{dropdownItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* User menu */}
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:block">Account</span>
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
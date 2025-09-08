
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Zion Tech Group
            </a>
          </div>

            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</a>

  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud,
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen,
  MessageCircle, HelpCircle, DollarSign, Gauge, Workflow, Atom, Star,
  Target, TrendingUp, Award, Code, Truck, Building, BarChart3, PenTool,
  Eye, Server, Smartphone, Database, Network, Clock, ArrowRight,

import { motion, AnimatePresence } from 'framer-motion';

import {
  Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud,
  Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen,

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(&apos;&apos;);&apos;&apos;
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<;<;<string | null>(null);
  useEffect(() => {}
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)}
    window.addEventListener(&apos;scroll&apos;, handleScroll);
    return () => window.removeEventListener(&apos;scroll&apos;, handleScroll)}, []);
  useEffect(() => {

    // Close mobile menu when route changes;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}
  }
;
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Code, hasDropdown: true },
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Rocket },
    { name: 'Solutions', href: '/solutions', icon: Target },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      description: 'Revolutionary AI-powered software solutions',
      href: '/zion-cutting-edge-services-2029',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform',
      href: '/services/AI-Content-Creation-Studio-Pro',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform',
      href: '/services/Quantum-AI-Trading-Platform',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      name: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service solutions',
      href: '/services/micro-saas-solutions',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      href: '/ai-services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade IT solutions',
      href: '/it-services',
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions',
      href: '/services/quantum-computing',
      icon: Atom,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      href: '/services/cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Digital Transformation',
      description: 'End-to-end business transformation services',
      href: '/services/digital-transformation',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: '2025 Innovative Services',
      description: 'Latest cutting-edge services',
      href: '/zion-innovative-services-2025',
      icon: SparklesIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: '2025 Services Showcase',
      description: 'Comprehensive innovative services showcase',
      href: '/innovative-services-showcase-2025',
      icon: SparklesIcon,
      color: 'from-cyan-500 to-blue-500',
      featured: true
    },
    {
      name: '2029 Cutting-Edge Services',
      description: 'Future-ready innovative services',
      href: '/zion-cutting-edge-services-2029',
      icon: SparklesIcon,
      color: 'from-indigo-500 to-purple-500',
      featured: true
    }
  ];

                {link.label}
              </a>;
            ))}
          </nav>;
          <button;
            aria-label='Toggle navigation';
            onClick={() => setMobileOpen((v) => !v)}
            className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100';
          >;
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>;
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />;
            </svg>;
          </button>;
        </div>;
      </div>;

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)}
;

  const navLinks = [
    { label: &apos;Home&apos;, href: &apos;/&apos}, { label: &apos;Services&apos;, href: &apos;/services&apos}, { label: &apos;Solutions&apos;, href: &apos;/solutions&apos}, { label: &apos;Enterprise&apos;, href: &apos;/enterprise&apos}, { label: &apos;Request Quote&apos;, href: &apos;/request-quote&apos}, { label: &apos;Case Studies&apos;, href: &apos;/case-studies&apos}, { label: &apos;Careers&apos;, href: &apos;/careers&apos}, { label: &apos;Contact&apos;, href: &apos;/contact&apos}

  ]

            </a>
          </div>
          <nav className='hidden md: flex: space-x-8'>',;
,;;
            {navLinks.map((link, index) => (

                {link.label}

              </a>
            ))}

            onClick={() => setMobileOpen((v) => !v)}



            </svg>
          </button>
        </div>
      </div>


  )};

  )}






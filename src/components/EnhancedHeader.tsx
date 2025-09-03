
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

  ];
  // Featured services for quick access;&apos;
  const services = [

      featured: true}
  ];&apos;
  const solutionsCategories = [
    {
      title: &apos;Industry Solutions&apos;,
      icon: Building,
      color: &apos;from-blue-500 to-purple-500&apos;,
      solutions: [{ nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos;, description: &apos;Large-scale business transformation&apos}, { name: &apos;Healthcare Solutions&apos;, href: &apos;/solutions/healthcare&apos;, description: &apos;Medical technology innovation&apos}, { name: &apos;Financial Solutions&apos;, href: &apos;/financial-solutions&apos;, description: &apos;Fintech and banking solutions&apos}, { name: &apos;Manufacturing Solutions&apos;, href: &apos;/manufacturing-solutions&apos;, description: &apos;Industry 4.0 automation&apos}]}, {
      title: &apos;Technology Solutions&apos;,
      icon: Cpu,
      color: &apos;from-cyan-500 to-blue-500&apos;,
      solutions: [
        { nam,e: &apos;AI Solutions&apos;, href: &apos;/ai-solutions&apos;, description: &apos;Artificial intelligence integration&apos}, { name: &apos;Digital Transformation&apos;, href: &apos;/services/digital-transformation&apos;, description: &apos;Business modernization&apos}, { name: &apos;Research & Development&apos;, href: &apos;/research-development&apos;, description: &apos;Innovation and discovery&apos}, { name: &apos;Green IT Solutions&apos;, href: &apos;/green-it&apos;, description: &apos;Sustainable technology&apos}]}
  ];&apos;
  const companyLinks = [
    { name: &apos;About Us&apos;, href: &apos;/about&apos;, description: &apos;Learn about our mission and values&apos}, { name: &apos;Our Team&apos;, href: &apos;/team&apos;, description: &apos;Meet our expert professionals&apos}, { name: &apos;Leadership&apos;, href: &apos;/leadership&apos;, description: &apos;Executive team and vision&apos}, { name: &apos;Careers&apos;, href: &apos;/careers&apos;, description: &apos;Join our growing team&apos}, { name: &apos;Partners&apos;, href: &apos;/partners&apos;, description: &apos;Strategic partnerships&apos}, { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos;, description: &apos;Success stories and results&apos}];&apos;
  const resourceLinks = [
    { name: &apos;Blog&apos;, href: &apos;/blog&apos;, description: &apos;Latest insights and updates&apos}, { name: &apos;News&apos;, href: &apos;/news&apos;, description: &apos;Company announcements&apos}, { name: &apos;Press&apos;, href: &apos;/press&apos;, description: &apos;Media resources&apos}, { name: &apos;Webinars&apos;, href: &apos;/webinars&apos;, description: &apos;Educational sessions&apos}, { name: &apos;White Papers&apos;, href: &apos;/white-papers&apos;, description: &apos;In-depth research&apos}, { name: &apos;Documentation&apos;, href: &apos;/documentation&apos;, description: &apos;Technical guides&apos}];&apos;
  const supportLinks = [
    { name: &apos;Help Center&apos;, href: &apos;/help&apos;, description: &apos;Find answers and solutions&apos}, { name: &apos;FAQ&apos;, href: &apos;/faq&apos;, description: &apos;Frequently asked questions&apos}, { name: &apos;Support&apos;, href: &apos;/support&apos;, description: &apos;Technical assistance&apos}, { name: &apos;Training&apos;, href: &apos;/training&apos;, description: &apos;Skill development programs&apos}, { name: &apos;Contact Support&apos;, href: &apos;/contact&apos;, description: &apos;Get in touch with our team&apos}, { name: &apos;Status Page&apos;, href: &apos;/status&apos;, description: &apos;Service availability&apos}];&apos;

      href: '/services/ai-email-automation-suite', icon: Mail,
      color: 'from-blue-500 to-indigo-500', featured: true}, { name: 'AI Social Media Scheduler', description: 'AI-powered social media automation',
      href: '/services/ai-social-media-scheduler', icon: Share2,
      color: 'from-purple-500 to-pink-500', featured: true}, { name: 'AI Customer Insights Platform', description: 'Advanced customer analytics & insights',
      href: '/services/ai-customer-insights-platform', icon: Users,
      color: 'from-green-500 to-emerald-500', featured: true}, { name: 'AI-Powered DevOps Automation', description: 'Intelligent CI/CD & infrastructure automation',
      href: '/services/ai-powered-devops-automation', icon: Workflow,
      color: 'from-blue-500 to-indigo-500', featured: true}, { name: 'AI Content Creation Studio Pro', description: 'Advanced AI-powered content creation platform',
      href: '/services/AI-Content-Creation-Studio-Pro', icon: PenTool,
      color: 'from-purple-500 to-pink-500', featured: true}, { name: 'Quantum AI Trading Platform', description: 'Revolutionary quantum-enhanced trading system',
      href: '/services/Quantum-AI-Trading-Platform', icon: BarChart3,
      color: 'from-orange-500 to-red-500', featured: true}, { name: 'AI Quantum Financial Analytics', description: 'Revolutionary quantum AI financial platform',
      href: '/services/ai-quantum-financial-analytics-platform', icon: BarChart3,
      color: 'from-blue-500 to-purple-600', featured: true}, { name: 'AI Autonomous Supply Chain', description: 'Self-learning supply chain management',
      href: '/services/ai-autonomous-supply-chain-management-platform', icon: Truck,
      color: 'from-green-500 to-blue-600', featured: true}, { name: 'AI Cybersecurity Operations', description: 'Autonomous security operations center',
      href: '/services/ai-cybersecurity-operations-center', icon: Shield,
      color: 'from-red-500 to-orange-600', featured: true}, { name: '2026 Services Showcase', description: 'Latest innovative services showcase',
      href: '/innovative-services-showcase-2026', icon: Sparkles,
      color: 'from-yellow-500 to-orange-500', featured: true}
  ];

    { label: 'Contact', href: '/contact' }
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






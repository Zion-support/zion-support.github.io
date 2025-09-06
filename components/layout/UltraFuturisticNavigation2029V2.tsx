  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  MessageCircle,
  Star,
  TrendingUp,
  Layers,
  Cpu,
  Database,
  Cloud,
  Lock,
  Shield,
  Globe,
  Factory,
  Car,
  Building,
  GraduationCap,
  Scale,
  Palette,
  Camera,
  Video,
  Music,
  Gamepad2,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Mountain,
  Code,
  Wrench,
  Smartphone,
  BarChart3,
  Eye,
  Globe2,
  Zap,
  Rocket,
  Brain,
  Sparkles,
  ShieldCheck,
  Target,
  Users2,
  Briefcase,
  Lightbulb,
  Award,
  Menu, X, Search, ChevronDown, ChevronRight;

  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin;
  BookOpen, MessageCircle, Star, TrendingUp;
  Layers, Cpu, Database, Cloud, Lock, Shield;
  Globe, Factory, Car, Building, GraduationCap, Scale;
  Palette, Camera, Video, Music, Gamepad2, Heart;
  Leaf, Sun, Moon, Wind, Droplets, Mountain;
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2;
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target;
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite',
    ],
  }, ];      'Advanced Research AutomationQuantum Research PlatformAI Research AssistantBiotech Research Suite';
    ];
  }
];
;
const main_navigation = [;
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai - solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum - tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise - it', icon: Cpu },
  { name: 'Space Tech', href: '/space - tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro - saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },

const quickLinks = [
  { name: 'Contact', href: '/contact', icon: MessageCircle }, ];  { name: 'Contact', href: '/contact', icon: MessageCircle }
];
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case - studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },



export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false)



  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (

          >
            <Link href='/' className='flex items-center space-x-3 group'>
              <div className='relative'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <Rocket className='w-7 h-7 text-white' />
                </div>
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300' />
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Zion Tech Group
                </h1>
                <p className='text-xs text-gray-400'>
                  Future Technology Solutions
                </p>              </div>          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>;
            {mainNavigation && mainNavigation.map(item => (              <motion&& motion.div
                key={item && item.name}
                initial={{ opacity: 0, y: -20 }}
                }}
                className='relative group';
                <Link;
                  href={item.href}
            {/* Search */}
            <div className='relative'>;
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />;
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                  <span>{item.name}</span>
                </Link>
                {/* Hover effect */}
                <div className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300' />              </motion.div>                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>
          {/* Right side - Contact & Search */}
          <div className='hidden lg:flex items-center space-x-4'>

              </motion.div>

            ))}
          </div>
          {/* Right side - Contact & Search */}
            {/* Search */}
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='Search services...'
                value={searchQuery}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
            {/* Contact Button */}
            <motion&& motion.div
              initial={{ opacity: 0, scale: 0 && 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.5 }}>;
              <Link
            <button
              onClick={toggleMenu}
              className='p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300'>;
              {isOpen ? (;
                <X className='w-6 h-6' />;
              ) : (;
                <Menu className='w-6 h-6' />;
              )}            </button>            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300">;
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      {/* Mobile Navigation Menu */}
      <AnimatePresence>;
        {isOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}

          >
            <div className='px-4 py-6 space-y-4'>
                <input
                  type='text'
                  placeholder='Search services...'
                  value={searchQuery}
                    onClick={closeMenu}
                    className='flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300'>;
                    <item && item.icon className='w-5 h-5' />                    <span>{item && item.name}</span>          >;
            <div className="px-4 py-6 space-y-4">;
              {/* Mobile Search */}
              <div className="relative">;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  <Link
                    key={item && item.name}
                    href={item && item.href}
                    onClick={closeMenu}
              {/* Quick Links */}


                  ))}
                </div>
              </div>




              {/* Contact Info */}
              <div className='pt-4 border-t border-gray-700'>
                <h3 className='text-sm font-medium text-gray-400 mb-3 px-4'>
                  Contact Info
                </h3>
                <div className='space-y-2 px-4'>
                  <div className='flex items-center space-x-3 text-gray-400'>
                    <Phone className='w-4 h-4' />
                    <span className='text-sm'>{contactInfo.mobile}</span>

                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
      {/* Service Categories Dropdown */}
      <AnimatePresence>;
        {activeCategory && (;
          <motion&& motion.div
      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}


          >
            <div className='max-w-7xl mx-auto px-4 py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {serviceCategories.map(category => (
                  <div key={category.title} className='space-y-4'>
                    <div className='flex items-center space-x-3'>
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className='w-5 h-5 text-white' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-white'>
                          {category.title}
                        </h3>;
                        <p className='text - sm text - gray - 400'>;
                          {category.description}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {category.services.map((service, index) => (
                        <Link
                          key={service && service.name}
                          href={service && service.href}
                          className='block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group'>;
                          <div className='flex justify-between items-start'>;
                            <div>;
                              <h4 className='font-medium text-white group-hover:text-cyan-400 transition-colors duration-300'>;
                                {service && service.name}
                              </h4>;
                              <p className='text-sm text-gray-400 mt-1'>;
                                {service && service.description}
                              </p>;
                            </div>;
                            <span className='text-sm font-semibold text-cyan-400'>;
                              {service && service.price}
                            </span>                          </div>                        >;
                          <div className="flex justify-between items-start">;
                            <div>;
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">;
                                {service && service.name}
                              </h4>;
                              <p className="text-sm text-gray-400 mt-1">{service && service.description}</p>;
                            </div>;
                            <span className="text-sm font-semibold text-cyan-400">{service && service.price}</span>;
                          </div>;
                        </Link>;

                        </Link>
                      ))}
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
          </motion && motion.div>;
        )}

      </AnimatePresence>;
    </nav>;
  );

  );

}
}
  );
}
                        </p>;
                      </div>;
                    </div>;
                    <div className='space - y-3'>                      {category.services.map ((service, index) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          className='block p - 3 rounded - lg bg - gray - 800 / 50 hover:bg - gray - 800 / 70 transition - colors duration - 300 group'          >;
            <div className="max - w-7xl mx - auto px - 4 py - 8">;
              <div className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap - 8">;
                {service_categories.map ((category) => (
                  <div key={category.title} className="space - y-4">;
                    <div className="flex items - center space - x-3">;
                      <div className={`p - 2 rounded - lg bg - gradient - to - r ${category.color}`}>;
                        <category.icon className="w - 5 h - 5 text - white" />;
                      </div>;
                      <div>;
                        <h3 className="text - lg font - semibold text - white">{category.title}</h3>;
                        <p className="text - sm text - gray - 400">{category.description}</p>;
                      </div>;
                    </div>;
                    <div className="space - y-3">;
                      {category.services.map ((service, index) => (
                        <Link;
                          key={service.name}
                          href={service.href}
                          className='block p - 3 rounded - lg bg - gray - 800 / 50 hover:bg - gray - 800 / 70 transition - colors duration - 300 group';
                        >;
                          <div className='flex justify - between items - start'>;
                            <div>;
                              <h4 className='font - medium text - white group - hover:text - cyan - 400 transition - colors duration - 300'>;
                                {service.name}
                              </h4>;
                              <p className='text - sm text - gray - 400 mt - 1'>;
                                {service.description}
                              </p>;
                            </div>;
                            <span className='text - sm font - semibold text - cyan - 400'>;
                              {service.price}
                            </span>                          </div>                        >;
                          <div className="flex justify - between items - start">;
                            <div>;
                              <h4 className="font - medium text - white group - hover:text - cyan - 400 transition - colors duration - 300">;
                                {service.name}
                              </h4>;
                              <p className="text - sm text - gray - 400 mt - 1">{service.description}</p>;
                            </div>;
                            <span className="text - sm font - semibold text - cyan - 400">{service.price}</span>;
                          </div>;
                        </Link>))}
                    </div>;
                  </div>))}
              </div>;
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </nav>);
}

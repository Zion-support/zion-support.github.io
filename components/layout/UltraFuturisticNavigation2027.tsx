
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import {

  FileText, Calendar, CreditCard, BarChart3, Settings;
  Rocket, Star, TrendingUp, Users, Target, Award;
  Phone, Mail, MapPin, ExternalLink, Building
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',};  website: 'https://ziontechgroup.com'
}
const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations'
    icon: Rocket
    color: 'from-violet-600 to-purple-600'
    description: 'Beyond the future of technology'
    services: [
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-platform'
        description: 'Evolve AI beyond human limits'
        price: '$9,999/month'
      }
      {
        name: 'Quantum Consciousness Interface'
        href: '/quantum-consciousness-interface'
        description: 'Bridge quantum computing with consciousness'
        price: '$15,999/month'
      }
      {
        name: 'Autonomous AI Civilization'
        href: '/autonomous-ai-civilization-platform'
        description: 'Create AI civilizations'
        price: '$19,999/month'
      }
      {
        name: 'Quantum Time Manipulation'
        href: '/quantum-time-manipulation-platform'
        description: 'Manipulate time through quantum computing'
        price: '$25,999/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Evolve AI beyond human limits', price: '$9,999/month' }
      { name: 'Quantum Consciousness Interface', href: '/quantum-consciousness-interface', description: 'Bridge quantum computing with consciousness', price: '$15,999/month' }
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform', description: 'Create AI civilizations', price: '$19,999/month' }
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation-platform', description: 'Manipulate time through quantum computing', price: '$25,999/month' }
    ]
  }
    title: '🎯 2028 Practical Micro SAAS'
    icon: Target
    color: 'from-blue-600 to-cyan-600'
    description: 'Real business solutions for today'
    services: [
      {
        name: 'AI Customer Success Automation'
        href: '/ai-customer-success-automation-2028'
        description: 'Automate customer success with AI'
        price: '$299/month'
      }
      {
        name: 'Smart Inventory Management'
        href: '/smart-inventory-management-2028'
        description: 'AI inventory optimization'
        price: '$399/month'
      }
      {
        name: 'Automated HR Recruitment'
        href: '/automated-hr-recruitment-2028'
        description: 'AI-powered hiring automation'
        price: '$249/month'
      }
      {
        name: 'AI Content Marketing Suite'
        href: '/ai-content-marketing-suite-2028'
        description: 'AI-powered content creation'
        price: '$199/month'
      }
    ]
  },  {      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-2028', description: 'Automate customer success with AI', price: '$299/month' }
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-2028', description: 'AI inventory optimization', price: '$399/month' }
      { name: 'Automated HR Recruitment', href: '/automated-hr-recruitment-2028', description: 'AI-powered hiring automation', price: '$249/month' }
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-suite-2028', description: 'AI-powered content creation', price: '$199/month' }
    ]
  }
    title: '⚛️ 2028 Quantum & Space Tech'
    icon: Atom
    color: 'from-indigo-600 to-blue-600'
    description: 'Quantum computing and space exploration'
    services: [
      {
        name: 'Quantum Internet Security'
        href: '/quantum-internet-security-gateway-2028'
        description: 'Unbreakable quantum encryption'
        price: '$3,999/month'
      }
      {
        name: 'Quantum Neural Interface'
        href: '/quantum-neural-interface-platform-2028'
        description: 'Brain-computer quantum interface'
        price: '$8,999/month'
      }
      {
        name: 'Space Debris Management AI'
        href: '/space-debris-management-ai-2028'
        description: 'AI space safety and management'
        price: '$5,999/month'
      }
      {
        name: 'Quantum Financial Trading'
        href: '/quantum-financial-trading-algorithm-platform-2028'
        description: 'Quantum trading algorithms'
        price: '$12,999/month'
      }
    ]
  },  {      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway-2028', description: 'Unbreakable quantum encryption', price: '$3,999/month' }
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform-2028', description: 'Brain-computer quantum interface', price: '$8,999/month' }
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-2028', description: 'AI space safety and management', price: '$5,999/month' }
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform-2028', description: 'Quantum trading algorithms', price: '$12,999/month' }
    ]
  }
    title: '🤖 2028 AI & Machine Learning'
    icon: Brain
    color: 'from-emerald-600 to-teal-600'
    description: 'Next-generation AI solutions'
    services: [
      {
        name: 'AI Consciousness Evolution'
        href: '/ai-consciousness-evolution-platform-2028'
        description: 'Evolve AI beyond human limits'
        price: '$9,999/month'
      }
      {
        name: 'Autonomous AI Civilization'
        href: '/autonomous-ai-civilization-platform-2028'
        description: 'Create AI civilizations'
        price: '$19,999/month'
      }
      {
        name: 'AI Healthcare Companion'
        href: '/ai-healthcare-companion-2028'
        description: 'Revolutionary healthcare AI'
        price: '$399/month'
      }
      {
        name: 'AI Content Creation Revolution'
        href: '/ai-content-creation-revolution-2028'
        description: 'Unlimited AI content generation'
        price: '$599/month'
      }
    ]
  },  {      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform-2028', description: 'Evolve AI beyond human limits', price: '$9,999/month' }
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform-2028', description: 'Create AI civilizations', price: '$19,999/month' }
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-2028', description: 'Revolutionary healthcare AI', price: '$399/month' }
      { name: 'AI Content Creation Revolution', href: '/ai-content-creation-revolution-2028', description: 'Unlimited AI content generation', price: '$599/month' }
    ]
  }
    title: '🏢 2028 Enterprise Solutions'
    icon: Shield
    color: 'from-red-600 to-orange-600'
    description: 'Enterprise-grade solutions'
    services: [
      {
        name: 'Zero Trust Architecture 2028'
        href: '/zero-trust-network-architecture-2028'
        description: 'Next-gen security architecture'
        price: 'Custom pricing'
      }
      {
        name: 'Edge Computing Orchestration'
        href: '/edge-computing-orchestration-2028'
        description: 'Intelligent edge computing'
        price: 'Custom pricing'
      }
      {
        name: '5G Private Networks'
        href: '/5g-private-network-solutions-2028'
        description: 'Enterprise 5G solutions'
        price: 'Custom pricing'
      }
      {
        name: 'Blockchain Infrastructure'
        href: '/blockchain-infrastructure-platform-2028'
        description: 'Enterprise blockchain'
        price: 'Custom pricing'
      }
    ]
  },  {      { name: 'Zero Trust Architecture 2028', href: '/zero-trust-network-architecture-2028', description: 'Next-gen security architecture', price: 'Custom pricing' }
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-2028', description: 'Intelligent edge computing', price: 'Custom pricing' }
      { name: '5G Private Networks', href: '/5g-private-network-solutions-2028', description: 'Enterprise 5G solutions', price: 'Custom pricing' }
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-2028', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  }
    title: '🌌 2028 Metaverse & Digital Reality'
    icon: Globe
    color: 'from-pink-600 to-rose-600'
    description: 'Virtual and augmented reality'
    services: [
      {
        name: 'Holographic Metaverse'
        href: '/holographic-metaverse-development-platform-2028'
        description: '3D holographic experiences'
        price: '$2,999/month'
      }
      {
        name: 'AI Multiverse Creation'
        href: '/ai-multiverse-creation-platform-2028'
        description: 'Create AI-powered multiverses'
        price: '$29,999/month'
      }
      {
        name: 'Virtual Event Holograms'
        href: '/virtual-event-hologram-platform-2028'
        description: 'Holographic event platform'
        price: '$1,999/month'
      }
      {
        name: 'Digital Reality Interface'
        href: '/digital-reality-interface-2028'
        description: 'Next-gen reality interface'
        price: '$4,999/month'
      }
    ]
  },];
const companyLinks = [

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home }
  {
    name: '🚀 2028 Services'
    href: '/ultimate-2028-services-showcase'
    icon: Rocket
  }
  {
    name: '⭐ Ultimate 2028'
    href: '/ultimate-2028-services-showcase'
    icon: Star
  }
  {
    name: '💰 2028 Pricing'
    href: '/revolutionary-2028-pricing'
    icon: DollarSign
  },  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },  { name: '🚀 2028 Services', href: '/ultimate-2028-services-showcase', icon: Rocket }
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star }
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign }
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase }
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen }
  { name: '📈 Reports', href: '/reports', icon: TrendingUp }
  { name: '🔧 Solutions', href: '/solutions', icon: Layers }
  { name: '💼 Careers', href: '/careers', icon: Users }
  { name: '📞 Contact', href: '/contact', icon: MessageCircle },];  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
];
const technologyLinks = [
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain }
  { name: '⚛️ Quantum Services', href: '/quantum-services', icon: Atom }
  { name: '☁️ Cloud Platform', href: '/cloud-platform', icon: Cloud }
  { name: '🔒 Cybersecurity', href: '/cybersecurity', icon: Lock }
  { name: '📊 Analytics', href: '/analytics', icon: Database }
  { name: '🔄 Automation', href: '/automation', icon: Cpu },];  { name: '🔄 Automation', href: '/automation', icon: Cpu }
];

export default function UltraFuturisticNavigation2027() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);  }, []);    setIsClient(true)
  }, []);
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  }, [isClient]);      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  const navigation = [
    {
      name: 'AI & Machine Learning'
      href: '/services?category=AI%20%26%20Machine%20Learning'
      description: '200+ AI & ML Solutions'
      icon: <Brain className='w-5 h-5' />
      color: 'from-purple-500 to-indigo-600'
      children: [

                Revolutionary Technology Solutions
              </div>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className='hidden xl:flex items-center space-x-1'>
            {navigation.map(item => (
              <div key={item.name} className='relative group'>
                <motion.button

                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >

                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}

                      animate={{ opacity: 1, y: 0, scale: 1 }}
          {/* Desktop Navigation */}
          <nav className='hidden xl:flex items - center space - x-1'>;
            {navigation.map (item => (
              <div key={item.name} className='relative group'>;
                <motion.button;
                  className='flex items - center space - x-2 px - 4 py - 3 text - gray - 300 hover:text - white transition - all duration - 300 rounded - xl hover:bg - gray - 800 / 50 hover:shadow - lg hover:shadow - cyan - 500 / 20'                  onMouseEnter={() => setActiveDropdown (item.name)}          <nav className="hidden xl:flex items - center space - x-1">;
            {navigation.map ((item) => (
              <div key={item.name} className="relative group">;
                <motion.button;
                  className="flex items - center space - x-2 px - 4 py - 3 text - gray - 300 hover:text - white transition - all duration - 300 rounded - xl hover:bg - gray - 800 / 50 hover:shadow - lg hover:shadow - cyan - 500 / 20";
                  onMouseLeave={() => setActiveDropdown (null)}
                  while_hover={{ coordinate_y: -2 }}
                  while_tap={{ scale: 0.95 }}
                >;
                  <div;
                    className={`p - 2 rounded - lg bg - gradient - to - br ${item.color} shadow - lg`}
                  >;
                    {item.icon}
                  </div>;
                  <span className='font - medium'>{item.name}</span>;
                  <ChevronDown className='w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 300' />                </motion.button>                  <div className={`p - 2 rounded - lg bg - gradient - to - br ${item.color} shadow - lg`}>;
                    {item.icon}
                  </div>;
                  <span className="font - medium">{item.name}</span>;
                  <ChevronDown className="w - 4 h - 4 group - hover:rotate - 180 transition - transform duration - 300" />;
                {/* Dropdown Menu */}
                <AnimatePresence>;
                  {active_dropdown === item.name && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
                      exit={{ opacity: 0, coordinate_y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}

                    >
                      <div className='p-4'>
                        <div className='flex items-center space-x-3 mb-4'>
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                          >

                            {item.icon}
                          </div>;
                          <div>;
                            <h3 className='text - lg font - semibold text - white'>;
                              {item.name}
                            </h3>;
                            <p className='text - sm text - gray - 400'>;
                              {item.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className='space - y-2'>;
                          {item.children.map (child => (
                            <Link;
                              key={child.name}
                              href={child.href}
                              className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 200 group';
                            >;
                              <span className='text - 2xl'>{child.icon}</span>;
                              <div className='flex - 1'>;
                                <div className='font - medium text - white group - hover:text - cyan - 300 transition - colors'>;
                                  {child.name}
                                </div>;
                                <div className='text - sm text - gray - 400'>;
                                  {child.description}
                                </div>;
                              </div>;
                              <div className='text - right'>;
                                <div className='text - sm font - medium text - cyan - 400'>;
                                  {child.price}

                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>

                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            className={`p-3 rounded-xl bg-gradient-to-br ${item && item.color} shadow-lg`}>;
                            {item && item.icon}
                          </div>;
                          <div>;
                            <h3 className='text-lg font-semibold text-white'>;
                              {item && item.name}
                            </h3>;
                            <p className='text-sm text-gray-400'>;
                              {item && item.description}
                            </p>;
                          </div>;
                        </div>;
                        <div className='space-y-2'>;
                          {item && item.children.map(child => (;
                            <Link
                              key={child && child.name}
                              href={child && child.href}
                              className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group'>;
                              <span className='text-2xl'>{child && child.icon}</span>;
                              <div className='flex-1'>;
                                <div className='font-medium text-white group-hover:text-cyan-300 transition-colors'>;
                                  {child && child.name}
                                </div>;
                                <div className='text-sm text-gray-400'>;
                                  {child && child.description}
                                </div>;
                              </div>;
                              <div className='text-right'>;
                                <div className='text-sm font-medium text-cyan-400'>;
                                  {child && child.price}
                                </div>;
                                <ChevronRight className='w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors' />                              </div>                    >;
                      <div className="p-4">;
                        <div className="flex items-center space-x-3 mb-4">;
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item && item.color} shadow-lg`}>;
                            {item && item.icon}
                          </div>;
                          <div>;
                            <h3 className="text-lg font-semibold text-white">{item && item.name}</h3>;
                            <p className="text-sm text-gray-400">{item && item.description}</p>;
                          </div>;
                        </div>;
                        <div className="space-y-2">;
                          {item && item.children.map((child) => (;
                            <Link
                              key={child && child.name}
                              href={child && child.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group">;
                              <span className="text-2xl">{child && child.icon}</span>;
                              <div className="flex-1">;
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">;
                                  {child && child.name}
                                </div>;
                                <div className="text-sm text-gray-400">{child && child.description}</div>;
                              </div>;
                              <div className="text-right">;
                                <div className="text-sm font-medium text-cyan-400">{child && child.price}</div>;
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />;
                              </div>;
                            </Link>;
                          ))}
                        </div>;
                      </div>;
                    </motion && motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            ))}
          </nav>;
          {/* Right Side */}
          <div className='flex items-center space-x-4'>;
            {/* Contact Info */}
            <div className='hidden lg:flex items-center space-x-4 text-sm'>;
              <a
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors'>;
                <Phone className='w-4 h-4' />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </a>;
              <a
                            <Link
                                </div>;
                                <ChevronRight className='w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors' />                              </div>                    >;
                      <div className="p - 4">;
                        <div className="flex items - center space - x-3 mb - 4">;
                          <div className={`p - 3 rounded - xl bg - gradient - to - br ${item.color} shadow - lg`}>;
                            {item.icon}
                          </div>;
                          <div>;
                            <h3 className="text - lg font - semibold text - white">{item.name}</h3>;
                            <p className="text - sm text - gray - 400">{item.description}</p>;
                          </div>;
                        </div>;
                        <div className="space - y-2">;
                          {item.children.map ((child) => (
                            <Link;
                              key={child.name}
                              href={child.href}

                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

            {/* Contact Info */}
            <div className='hidden lg:flex items-center space-x-4 text-sm'>

              <a
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">;
                <Phone className="w-4 h-4" />;
                <span>{contactInfo && contactInfo.mobile}</span>;
              </a>;
              <a

              <Link
                href="/contact"

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isMenuOpen && (
          <motion.div;
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}

          >
            <div className='container mx-auto px-4 py-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Services */}
                <div>
                  <h3 className='text-lg font-semibold text-white mb-4'>
                    Services
                  </h3>
                  <div className='space-y-3'>
                    {navigation.map(item => (
                      <div key={item.name}>
                        <Link

                          href={item.href}
                          className='flex items - center space - x-3 p - 3 rounded - xl hover:bg - gray - 800 / 50 transition - all duration - 200';
                        >;
                          <div;
                            className={`p - 2 rounded - lg bg - gradient - to - br ${item.color}`}
                          >;
                            {item.icon}
                          </div>;
                          <div>;
                            <div className='font - medium text - white'>;
                              {item.name}
                            </div>;
                            <div className='text - sm text - gray - 400'>;
                              {item.description}
                            </div>                          </div>          >;
            <div className="container mx - auto px - 4 py - 6">;
              <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
                {/* Services */}

                  <div>
                    <h3 className='text-lg font-semibold text-white mb-4'>
                      Quick Links
                    </h3>
                    <div className='space-y-2'>
                      {quickLinks.map(link => (

                        <Link
                          key={link && link.name}
                          href={link && link.href}
                          className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200'>;
                          {link && link.icon}
                          <span className='text-white'>{link && link.name}</span>                        </Link>                  <div>;
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>;
                    <div className="space-y-2">;
                      {quickLinks && quickLinks.map((link) => (;
                        <Link
                          key={link && link.name}
                          href={link && link.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200">;
                          {link && link.icon}
                          <span className="text-white">{link && link.name}</span>;
                        </Link>;
                {/* Quick Links & Contact */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {quickLinks.map((link) => (
                        <Link
                          </div>;
                          <div>;
                            <div className="font - medium text - white">{item.name}</div>;
                            <div className="text - sm text - gray - 400">{item.description}</div>;
                          </div>;
                        </Link>;
                      </div>))}
                  </div>;
                </div>;
                {/* Quick Links & Contact */}
                <div className='space - y-6'>;
                  <div>;
                    <h3 className='text - lg font - semibold text - white mb - 4'>;
                      Quick Links;
                    </h3>;
                    <div className='space - y-2'>;
                      {quick_links.map (link => (
                        <Link;
                          key={link.name}
                          href={link.href}

                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{contactInfo.mobile}</span>
                      </a>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center space-x-3 p-3 rounded-xl">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-white text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

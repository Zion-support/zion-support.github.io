import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  GitFork,
  Atom,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Core Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'AI & Analytics', href: '/services?category=AI%20%26%20Analytics' },
        { name: 'AI & FinTech', href: '/services?category=AI%20%26%20FinTech' },
        { name: 'AI & Healthcare', href: '/services?category=AI%20%26%20Healthcare' },
        { name: 'AI & Legal Tech', href: '/services?category=AI%20%26%20Legal%20Tech' },
        { name: 'AI & Research', href: '/services?category=AI%20%26%20Research' },
        { name: 'AI & Green Tech', href: '/services?category=AI%20%26%20Green%20Tech' },
        { name: 'AI & Metaverse', href: '/services?category=AI%20%26%20Metaverse' },
        { name: 'AI & Blockchain', href: '/services?category=AI%20%26%20Blockchain' },
        { name: 'AI & Edge Computing', href: '/services?category=AI%20%26%20Edge%20Computing' },
        { name: 'Quantum Computing', href: '/services?category=Quantum%20Computing' },
        { name: 'AI & Space Tech', href: '/services?category=AI%20%26%20Space%20Tech' },
        { name: 'AI & Content', href: '/services?category=AI%20%26%20Content' },
        { name: 'Cybersecurity', href: '/services?category=Cybersecurity' },
        { name: 'AI & HR', href: '/services?category=AI%20%26%20HR' },
        { name: 'AI & Logistics', href: '/services?category=AI%20%26%20Logistics' },
        { name: 'AI & Education', href: '/services?category=AI%20%26%20Education' },
        { name: 'AI & Real Estate', href: '/services?category=AI%20%26%20Real%20Estate' },
        { name: 'AI & Manufacturing', href: '/services?category=AI%20%26%20Manufacturing' },
        { name: 'AI & Business Process', href: '/services?category=AI%20%26%20Business%20Process' }
      ]
    },
    {
      title: 'Advanced Solutions',
      featured: true,
      links: [
        { name: 'AI Solutions Hub', href: '/ai-solutions', featured: true },
        { name: 'Quantum Computing Solutions', href: '/quantum-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Blockchain Web3 Platform', href: '/services/blockchain-web3', featured: true },
        { name: 'Space Technology Solutions', href: '/services/space-tech', featured: true },
        { name: 'Green Technology Solutions', href: '/services/green-it', featured: true },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'API Playground', href: '/api-playground', featured: false },
        { name: 'Case Studies', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false },
        { name: 'Webinars', href: '/webinars', featured: false },
        { name: 'Training Programs', href: '/training', featured: false },
        { name: 'Support Center', href: '/support', featured: false },
        { name: 'FAQ', href: '/faq', featured: false }
      ]
    },
    {
      title: 'Company & Contact',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Our Team', href: '/team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'News & Updates', href: '/news', featured: false },
        { name: 'Events', href: '/events', featured: false },
        { name: 'Contact Us', href: '/contact', featured: false },
        { name: 'Request Quote', href: '/request-quote', featured: false }
      ]
    },
    {
      title: 'Advanced Solutions',
      featured: true,
      links: [
        { name: 'Cybersecurity Platform', href: '/cybersecurity', featured: true },
        { name: 'Cloud & DevOps Services', href: '/cloud-devops', featured: true },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', featured: true },
        { name: 'Digital Twin Solutions', href: '/digital-twin', featured: true },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', featured: true },
        { name: 'Space Technology', href: '/space-tech', featured: true }
      ]
    },
    {
      title: 'Solutions',
      featured: false,
      links: [
        { name: 'Enterprise Solutions', href: '/solutions', featured: false },
        { name: 'SMB Solutions', href: '/solutions', featured: false },
        { name: 'Startup Solutions', href: '/solutions', featured: false },
        { name: 'Government Solutions', href: '/solutions', featured: false },
        { name: 'Healthcare Solutions', href: '/solutions', featured: false },
        { name: 'Financial Solutions', href: '/solutions', featured: false },
        { name: 'Manufacturing Solutions', href: '/solutions', featured: false },
        { name: 'Retail Solutions', href: '/solutions', featured: false },
        { name: 'Education Solutions', href: '/solutions', featured: false },
        { name: 'Transportation Solutions', href: '/solutions', featured: false }
      ]
    },
    {
      title: 'Resources',
      featured: false,
      links: [
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'Case Studies', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false },
        { name: 'Webinars', href: '/webinars', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'FAQ & Support', href: '/faq', featured: false },
        { name: 'API Reference', href: '/docs/api', featured: false },
        { name: 'Developer Tools', href: '/developer-tools', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false }
      ]
    },
    {
      title: 'Company',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Our Team', href: '/team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'News & Events', href: '/news', featured: false },
        { name: 'Press Kit', href: '/press', featured: false },
        { name: 'Investor Relations', href: '/investors', featured: false },
        { name: 'Sustainability', href: '/sustainability', featured: false },
        { name: 'Diversity & Inclusion', href: '/diversity', featured: false },
        { name: 'Contact Us', href: '/contact', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, featured: true },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, featured: false },
    { name: 'Schedule Demo', href: '/demo', icon: Play, featured: false },
    { name: 'Get Support', href: '/support', icon: HelpCircle, featured: false },
    { name: 'Join Community', href: '/community', icon: Users, featured: false },
    { name: 'Partner Program', href: '/partners', icon: Users, featured: false }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="container-responsive py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Company Info & Contact */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">Revolutionary AI Solutions</p>
                </div>
              </Link>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and drive innovation across industries.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{contactInfo.phone}</span>
              </a>
              
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contactInfo.email}</span>
              </a>
              
              <div className="flex items-start gap-3 text-gray-300">
                <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-700/50 rounded-lg text-gray-400 transition-all duration-300 hover:bg-slate-600/50 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className={`text-lg font-semibold text-white flex items-center gap-2 ${
                    section.featured ? 'text-cyan-400' : ''
                  }`}>
                    {section.featured && <Star className="w-4 h-4 text-cyan-400" />}
                    {section.title}
                  </h4>
                  
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`text-sm transition-colors duration-200 flex items-center gap-2 group ${
                            link.featured 
                              ? 'text-cyan-400 hover:text-cyan-300' 
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          <span>{link.name}</span>
                          {link.featured && (
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. Get in touch today to learn how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.href}
                className={`p-4 rounded-xl border transition-all duration-300 transform hover:scale-105 text-center group ${
                  action.featured
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30'
                    : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 hover:bg-slate-700/30'
                }`}
              >
                <div className={`p-2 rounded-lg mx-auto mb-3 w-fit ${
                  action.featured
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'bg-slate-700/50 text-gray-400 group-hover:text-cyan-400'
                }`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <span className={`text-sm font-medium ${
                  action.featured ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {action.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="container-responsive py-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
              {/* Contact Information */}
              <div className="text-left">
                <h4 className="text-white font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="text-left">
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><Link to="/services" className="hover:text-cyan-400 transition-colors">All Services</Link></p>
                  <p><Link to="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></p>
                  <p><Link to="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></p>
                  <p><Link to="/request-quote" className="hover:text-cyan-400 transition-colors">Request Quote</Link></p>
                </div>
              </div>

              {/* Legal & Social */}
              <div className="text-left">
                <h4 className="text-white font-semibold mb-4">Legal & Social</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p><Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></p>
                  <p><Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></p>
                  <p><Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></p>
                  <div className="flex space-x-4 mt-4">
                    <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="text-sm text-gray-400 mb-4">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              </div>
              <p className="text-xs text-gray-500 max-w-xs">
                Empowering businesses with cutting-edge AI, quantum computing, and innovative technology solutions.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUpRight className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
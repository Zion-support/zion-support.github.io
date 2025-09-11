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
  Play,
  MailIcon
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Business Intelligence',
      featured: true,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Development Platform', href: '/services/ai-development', featured: true },
        { name: 'AI Autonomous Research Assistant', href: '/services/ai-autonomous-research-assistant', featured: true }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      links: [
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'DevOps Automation', href: '/services/devops-automation' },
        { name: 'Microservices Architecture', href: '/services/microservices-architecture' },
        { name: 'Container Orchestration', href: '/services/container-orchestration' },
        { name: 'Serverless Computing', href: '/services/serverless-computing' },
        { name: 'Edge Computing', href: '/services/edge-computing' }
      ]
    },
    {
      title: 'Digital Transformation',
      links: [
        { name: 'Digital Strategy', href: '/services/digital-strategy' },
        { name: 'Process Automation', href: '/services/process-automation' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Business Intelligence', href: '/services/business-intelligence' },
        { name: 'Customer Experience', href: '/services/customer-experience' },
        { name: 'Change Management', href: '/services/change-management' }
      ]
    },
    {
      title: 'Emerging Technologies',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
        { name: 'IoT Platforms', href: '/services/iot-platforms' },
        { name: '5G Networks', href: '/services/5g-networks' },
        { name: 'Augmented Reality', href: '/services/augmented-reality' },
        { name: 'Virtual Reality', href: '/services/virtual-reality' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Insights', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' }
  ];

  const supportLinks = [
    { name: 'Documentation', href: '/documentation' },
    { name: 'Support Center', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: '/community' },
    { name: 'Status Page', href: '/status' },
    { name: 'Security', href: '/security' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Processing Agreement', href: '/dpa' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'info@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-darkest relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section - Featured Services */}
        <div className="border-b border-zion-slate-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                  Revolutionary AI
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-zion-slate-light max-w-3xl mx-auto"
              >
                Experience the future of technology with our cutting-edge AI solutions, 
                cloud infrastructure, and digital transformation services.
              </motion.p>
            </div>

            {/* Featured Services Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-zion-slate-light/5 backdrop-blur-sm border border-zion-slate-light/10 rounded-xl p-6 hover:bg-zion-slate-light/10 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg group-hover:bg-zion-cyan/30 transition-colors">
                      {section.featured ? (
                        <Star className="w-5 h-5 text-zion-cyan" />
                      ) : (
                        <Zap className="w-5 h-5 text-zion-cyan" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {section.links.slice(0, 4).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm group/link"
                      >
                        <div className="flex items-center space-x-2">
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          <span>{link.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {section.links.length > 4 && (
                    <div className="mt-4 pt-3 border-t border-zion-slate-light/10">
                      <Link
                        to={`/services#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium transition-colors flex items-center space-x-2 group"
                      >
                        <span>View All {section.title}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Company Info & Links */}
        <div className="border-b border-zion-slate-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Crown className="w-6 h-6 text-zion-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  </div>
                  
                  <p className="text-zion-slate-light text-lg leading-relaxed">
                    Leading provider of cutting-edge AI, cloud computing, and digital transformation services. 
                    We help businesses innovate, scale, and thrive in the digital age.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 sm:col-span-2">
                      <MapPin className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{contactInfo.address}</span>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-zion-slate-light/10 hover:bg-zion-cyan/20 text-zion-slate-light hover:text-zion-cyan rounded-lg transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Building className="w-5 h-5 text-zion-cyan" />
                    <span>Company</span>
                  </h4>
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Support & Legal */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <HelpCircle className="w-5 h-5 text-zion-cyan" />
                    <span>Support</span>
                  </h4>
                  <div className="space-y-2">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-zion-cyan" />
                    <span>Legal</span>
                  </h4>
                  <div className="space-y-2">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Newsletter & Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-zion-cyan" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-zion-slate-light">
                Get the latest insights on AI, technology trends, and digital transformation.
              </p>
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-medium rounded-lg transition-colors flex items-center space-x-2"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>Subscribe</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-slate-light text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">50+</div>
                <div className="text-zion-slate-light text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
                <div className="text-zion-slate-light text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-zion-purple mb-2">24/7</div>
                <div className="text-zion-slate-light text-sm">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 pt-8 border-t border-zion-slate-light/20 text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-zion-slate-light text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-zion-slate-light text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Delaware, USA</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
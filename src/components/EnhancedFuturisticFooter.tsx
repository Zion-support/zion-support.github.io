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
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'AI Consciousness Transfer', href: '/services/ai-consciousness-transfer-platform', featured: true },
        { name: 'AI Time Dilation Platform', href: '/services/ai-time-dilation-platform', featured: true },
        { name: 'Multiverse Communication', href: '/services/ai-multiverse-communication-platform', featured: true },
        { name: 'Reality Manipulation', href: '/services/ai-reality-manipulation-platform', featured: true },
        { name: 'AI Immortality Platform', href: '/services/ai-immortality-platform', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform', featured: true },
        { name: 'Neural Interface Platform', href: '/services/neural-interface-development-platform', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services/holographic-workspace-platform', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services/biodigital-twin-platform', featured: true },
        { name: 'Space Debris Tracking System', href: '/services/space-debris-tracking-system', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services/ai-ethics-guardian-platform', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services/metaverse-builder-platform', featured: true },
        { name: 'AI Autonomous Operations', href: '/services/ai-autonomous-business-operations', featured: true }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Fraud Detection Platform', href: '/services/ai-fraud-detection-platform', featured: true }
      ]
    },
    {
      title: 'Emerging Technology Services',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'AI Autonomous Fleet Management', href: '/services/ai-autonomous-fleet-management', featured: true },
        { name: 'Quantum-Resistant Cryptography', href: '/services/quantum-resistant-cryptography-platform', featured: true },
        { name: 'AI Synthetic Biology Platform', href: '/services/ai-synthetic-biology-platform', featured: true },
        { name: 'Quantum Internet Infrastructure', href: '/services/quantum-internet-infrastructure', featured: true },
        { name: 'AI Space Mining Platform', href: '/services/ai-space-mining-platform', featured: true },
        { name: 'Neural Network Compression', href: '/services/neural-network-compression-platform', featured: true },
        { name: 'AI Climate Engineering Platform', href: '/services/ai-climate-engineering-platform', featured: true },
        { name: 'AI Fusion Energy Platform', href: '/services/ai-fusion-energy-platform', featured: true },
        { name: 'AI Quantum Sensing Platform', href: '/services/ai-quantum-sensing-platform', featured: true }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      featured: false,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: false },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: false },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: false },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: false },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: false },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform', featured: false },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', featured: false },
        { name: 'Security Headers CSP Manager', href: '/services/security-headers-csp-manager', featured: false }
      ]
    },
    {
      title: 'Specialized Solutions',
      featured: false,
      links: [
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', featured: false },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', featured: false },
        { name: 'GDPR DSAR Portal', href: '/services/gdpr-dsar-portal', featured: false },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', featured: false },
        { name: 'IT Consulting', href: '/services/it-consulting', featured: false },
        { name: 'Digital Transformation', href: '/services/digital-transformation', featured: false },
        { name: 'Robotics Automation', href: '/services/robotics-automation', featured: false },
        { name: 'Website Analytics', href: '/services/website-analytics', featured: false }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'Case Studies', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false },
        { name: 'Webinars', href: '/webinars', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'FAQ', href: '/faq', featured: false },
        { name: 'Support', href: '/contact', featured: false },
        { name: 'Community', href: '/community', featured: false }
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

        {/* Contact Information Footer */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-sm text-slate-400 mt-2">Available 24/7 for urgent support</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
                <p className="text-sm text-slate-400 mt-2">Global remote support available</p>
              </div>
            </div>
            
            {/* Additional Contact Methods */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Emergency Support</h4>
                  <p className="text-sm text-slate-500">Critical issues: +1 302 464 0950</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Business Hours</h4>
                  <p className="text-sm text-slate-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Response Time</h4>
                  <p className="text-sm text-slate-500">Urgent: 1 hour, Normal: 4 hours</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Global Support</h4>
                  <p className="text-sm text-slate-500">24/7 availability worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="container-responsive py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
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
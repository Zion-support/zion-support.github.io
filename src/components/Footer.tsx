import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Globe, 
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Code,
  Users,
  Building,
  Award,
  Clock,
  CheckCircle,
  MessageCircle,
  Star,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  Briefcase,
  BookOpen,
  HelpCircle,
  Settings,
  Package,
  Handshake,
  ArrowRight,
  ExternalLink,
  Network,
  Cpu,
  FileText,
  Lock
} from 'lucide-react';

const footerNavigation = {
  services: {
    title: 'Services',
    description: 'Comprehensive IT & AI Solutions',
    items: [
      { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, featured: true },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, featured: true },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
      { name: 'IoT & Edge', href: '/services/iot-edge', icon: Zap },
      { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, featured: true },
      { name: 'Blockchain', href: '/services/blockchain', icon: Code },
      { name: 'Digital Twin', href: '/services/digital-twin', icon: Building },
      { name: 'Sustainability', href: '/services/sustainability', icon: Heart }
    ],
  },
  microSaas: {
    title: 'Micro SAAS',
    description: 'Innovative Software Solutions',
    items: [
      { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, featured: true },
      { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users },
      { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, featured: true },
      { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network },
      { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield },
      { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu },
      { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText },
      { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users }
    ],
  },
  marketplace: {
    title: 'Marketplace',
    description: 'Digital Products & Services',
    items: [
      { name: 'Products', href: '/marketplace', icon: Package },
      { name: 'Services', href: '/services', icon: Settings },
      { name: 'Talent', href: '/talent', icon: Users },
      { name: 'Equipment', href: '/equipment', icon: Cpu },
      { name: 'Categories', href: '/categories', icon: Globe },
      { name: 'Green IT', href: '/green-it', icon: Heart },
      { name: 'IT Onsite Services', href: '/it-onsite-services', icon: Users },
    ],
  },
  company: {
    title: 'Company',
    description: 'About Zion Tech Group',
    items: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Contact', href: '/contact', icon: MessageCircle },
      { name: 'FAQ', href: '/faq', icon: HelpCircle },
      { name: 'Sitemap', href: '/sitemap', icon: Globe },
    ],
  },
  support: {
    title: 'Support & Resources',
    description: 'Help and Documentation',
    items: [
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Contact Support', href: '/contact', icon: MessageCircle },
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield },
      { name: 'Security', href: '/security', icon: Lock },
      { name: 'System Status', href: '/status', icon: Settings },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-marketplace', icon: Linkedin },
  { name: 'Facebook', href: 'https://www.facebook.com/zionmarketplace', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-zion-cyan/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Z</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">ZION TECH GROUP</h3>
                <p className="text-sm text-zion-cyan font-medium">Innovation • Intelligence • Impact</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI, quantum computing, blockchain, 
              and emerging technology solutions. Transforming businesses through innovation and intelligence.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-zion-cyan">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-zion-cyan">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-zion-slate-light/10 hover:bg-zion-cyan/20 text-zion-slate-light hover:text-zion-cyan rounded-lg transition-all duration-200 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center space-x-2">
                  <section.icon className="w-5 h-5 text-zion-cyan" />
                  <span>{section.title}</span>
                </h3>
                <p className="text-sm text-zion-slate-light mb-4">{section.description}</p>
              </div>
              
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="group flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4 group-hover:text-zion-cyan transition-colors duration-200" />
                      <span className="text-sm">{item.name}</span>
                      {item.featured && (
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-zion-slate-light/20">
          <div className="bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10 rounded-2xl p-8 border border-zion-cyan/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-zion-cyan" />
                  <span className="text-zion-cyan font-medium">Stay Updated</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Get the Latest Tech Insights
                </h3>
                <p className="text-zion-slate-light">
                  Subscribe to our newsletter for cutting-edge technology updates, industry insights, 
                  and exclusive offers from Zion Tech Group.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:ring-2 focus:ring-zion-cyan/20"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 flex items-center space-x-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>Subscribe</span>
                  </motion.button>
                </div>
                <p className="text-xs text-zion-slate-light">
                  By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-zion-slate-light/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Certified Excellence</h4>
              <p className="text-zion-slate-light text-sm">
                ISO 27001, SOC 2, and industry-leading certifications
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-purple/20 to-zion-blue/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">
                Bank-level security and compliance standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-blue/20 to-zion-cyan/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-zion-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">
                500+ successful projects and 99.9% client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-slate-light/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>&copy; 2025 Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-zion-cyan transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-zion-cyan transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-zion-cyan transition-colors duration-200">
                Sitemap
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-zion-slate-light">Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span className="text-sm text-zion-slate-light">in Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-2xl shadow-zion-cyan/20 hover:shadow-zion-cyan/40 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;

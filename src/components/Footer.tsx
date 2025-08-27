import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FooterNewsletter } from "@/components/FooterNewsletter";
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
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  ExternalLink,
  MessageCircle,
  Server,
  ShoppingCart
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      icon: Globe,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Solutions', path: '/solutions', icon: Target },
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Blog', path: '/blog', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Innovation Services',
      icon: Brain,
      links: [
        { name: 'Enhanced 2025 Services', path: '/enhanced-services-showcase-2025', icon: Star, featured: true },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Legal Automation', path: '/services/ai-legal-document-automation', icon: Shield },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics-platform', icon: Heart },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading-platform', icon: DollarSign },
        { name: 'AI Content Creation', path: '/services/ai-content-creation-suite', icon: FileText },
        { name: 'AI Supply Chain', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Project Management', path: '/services/ai-project-management-platform', icon: Target }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom, featured: true },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'Space Technology', path: '/services/space-tech', icon: Satellite },
        { name: 'Digital Twin Services', path: '/services/digital-twin-services', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Lock }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      links: [
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'Data Analytics Services', path: '/services/data-analytics-services', icon: BarChart3 },
        { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'IT Consulting', path: '/services/it-consulting', icon: Cpu },
        { name: 'Micro SaaS Solutions', path: '/services/micro-saas-solutions', icon: ShoppingCart },
        { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
        { name: 'Training & Support', path: '/training', icon: GraduationCap }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Request Quote', path: '/request-quote', icon: MessageCircle, primary: true },
    { name: 'Schedule Demo', path: '/contact', icon: Video, primary: false },
    { name: 'Support Portal', path: '/support', icon: HelpCircle, primary: false },
    { name: 'Documentation', path: '/docs', icon: FileText, primary: false }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 font-medium">Innovation & Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI solutions, innovative micro SAAS services, 
                and comprehensive IT solutions that transform businesses and drive digital innovation.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p>364 E Main St STE 1008</p>
                    <p>Middletown DE 19709</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-slate-700/50 hover:border-cyan-400/50`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center mb-4">
                  <section.icon className="w-5 h-5 mr-2 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className={`flex items-center text-sm transition-all duration-300 group ${
                          link.featured 
                            ? 'text-cyan-400 hover:text-cyan-300 font-medium' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {link.featured && <Star className="w-3 h-3 mr-2 text-yellow-400" />}
                        <link.icon className="w-3 h-3 mr-2 opacity-60 group-hover:opacity-100" />
                        {link.name}
                        {link.featured && (
                          <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            Featured
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
            <p className="text-gray-400">Take the next step in your digital transformation journey</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action) => (
              <Link
                key={action.name}
                to={action.path}
                className={`flex items-center justify-center px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  action.primary
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl'
                    : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50 border border-slate-700/50 hover:border-cyan-400/50'
                }`}
              >
                <action.icon className="w-4 h-4 mr-2" />
                {action.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-slate-700/50">
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-300">
                Accessibility
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-white">Zion Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </footer>
  );
}

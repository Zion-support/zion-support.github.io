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
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Lock,
  Cloud,
  Cpu,
  Globe2,
  Atom
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' }
      ]
    },
    {
      title: 'IoT & Digital Twin',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Award,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-architecture' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      links: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030' },
        { name: 'Services Showcase 2030', href: '/revolutionary-services-showcase-2030' },
        { name: 'Pricing Guide 2027', href: '/pricing' },
        { name: 'Pricing Guide 2030', href: '/pricing-2030' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Crown,
      color: 'from-red-600 to-pink-600',
      links: [
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Onsite Support', href: '/services/onsite-support' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Partners', href: '/partners' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Help Center', href: '/help' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-slate-400">Innovation • Technology • Solutions</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, innovative Micro SaaS platforms, 
              and cutting-edge IT services that transform businesses and drive digital innovation.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-cyan-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700/50 hover:border-cyan-400/50 transition-all ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Sections */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-gradient-to-r ${section.color} text-white text-sm font-semibold`}>
                    <section.icon className="w-4 h-4" />
                    <span>{section.title}</span>
                  </div>
                  
                  <div className="space-y-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-sm text-slate-300 hover:text-cyan-300 transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="block text-sm text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ for innovation</span>
              <span>•</span>
              <span>Powered by AI & Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href={`tel:${contactInfo.phone}`}
          className="group w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
        </a>
      </motion.div>
    </footer>
  );
};
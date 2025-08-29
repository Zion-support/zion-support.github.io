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
  Workflow,
  Truck,
  Atom,
  Leaf,
  Satellite,
  Cloud,
  Database,
  BarChart3,
  Target,
  Eye,
  MessageCircle,
  BookOpen,
  DollarSign,
  Settings
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    {
      title: 'Digital Solutions',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Star,
      color: 'from-yellow-600 to-orange-600',
      links: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Services Overview', href: '/services-overview', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'Pricing Guide', href: '/pricing', icon: DollarSign },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Support Portal', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Training', href: '/training' },
    { name: 'Community', href: '/community' },
    { name: 'Onsite Support', href: '/onsite-support' },
    { name: 'Contact Support', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-zion-cyan text-sm">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Leading the future of technology with AI-powered solutions, cutting-edge innovation, 
                and transformative digital experiences that drive business success.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
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
                    className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 border border-slate-700 hover:border-zion-cyan transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${section.color} text-white text-sm font-medium`}>
                <section.icon className="w-4 h-4 mr-2" />
                {section.title}
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8 mb-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-zion-cyan/50 hover:bg-slate-800/50 transition-all duration-200 group"
              >
                <link.icon className="w-4 h-4 text-zion-cyan group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-sm">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest technology trends and innovations.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-200 text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Empowering the future with AI</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
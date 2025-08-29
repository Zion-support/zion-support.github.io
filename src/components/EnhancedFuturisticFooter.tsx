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
  CheckCircle
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics platform' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'Sales automation & coaching' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Intelligent email automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content creation' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'Advanced compliance management' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization platform' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'DevOps automation & CI/CD' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure management' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business transformation services' },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Sustainable technology solutions' },
        { name: '5G Network Solutions', href: '/services/5g-solutions', description: 'Next-gen network infrastructure' }
      ]
    },
    {
      title: 'IoT & Digital Twin',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'System simulation & monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Edge computing solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Advanced data insights' },
        { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions', description: 'Industry 4.0 solutions' },
        { name: 'Supply Chain Optimization', href: '/services/supply-chain', description: 'Smart supply chain management' },
        { name: 'Retail Solutions', href: '/services/retail-solutions', description: 'Digital retail transformation' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: Crown,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', description: 'Quantum algorithms & optimization' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network-platform', description: 'Quantum AI platform' },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech innovations' },
        { name: 'Cybersecurity Suite', href: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Modern security framework' }
      ]
    }
  ];

  const quickAccessLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: Award, description: 'Advanced pricing strategies' },
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', icon: Users, description: 'Productized SaaS solutions' },
    { name: 'Request Quote', href: '/request-quote', icon: CheckCircle, description: 'Get custom pricing' },
    { name: 'Contact Us', href: '/contact', icon: Mail, description: 'Get in touch today' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Team', href: '/team', description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights' },
    { name: 'Press', href: '/press', description: 'Media resources' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Support', href: '/support', description: 'Technical assistance' },
    { name: 'Documentation', href: '/docs', description: 'Technical guides' },
    { name: 'Training', href: '/training', description: 'Learning resources' },
    { name: 'Webinars', href: '/webinars', description: 'Educational sessions' },
    { name: 'Status', href: '/status', description: 'System status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
    { name: 'Terms of Service', href: '/terms', description: 'Service terms' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
    { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },
    { name: 'Security', href: '/security', description: 'Security practices' },
    { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-cyan-400/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Services & Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services Overview */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {footerSections.slice(0, 2).map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                      <section.icon className="w-3 h-3 text-white" />
                    </div>
                    <h4 className="font-semibold text-white">{section.title}</h4>
                  </div>
                  <div className="space-y-2">
                    {section.links.slice(0, 3).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            >
              Quick Access
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickAccessLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <link.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Detailed Services */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Complete Service Portfolio
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{section.title}</h4>
                    <p className="text-sm text-slate-400">Innovative solutions</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <div className="space-y-2">
              {supportLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-3 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <span className="text-slate-400">|</span>
              <span className="text-sm text-slate-400">
                Transforming businesses through innovation
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright & Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700/50 text-center">
            <div className="text-sm text-slate-400 mb-2">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="text-xs text-slate-500 space-x-4">
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>SOC 2 Type II Compliant</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
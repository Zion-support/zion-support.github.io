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
  ShoppingCart
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary 2030',
      icon: Rocket,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'Quantum AI Hybrid Platform', href: '/revolutionary-services-2030' },
        { name: 'AI Cybersecurity Platform', href: '/revolutionary-services-2030' },
        { name: 'Autonomous AI Operations', href: '/revolutionary-services-2030' },
        { name: 'Quantum Financial Trading', href: '/revolutionary-services-2030' },
        { name: 'AI Healthcare Diagnostics', href: '/revolutionary-services-2030' },
        { name: 'Smart City Platform', href: '/revolutionary-services-2030' }
      ]
    },
    {
      title: 'Innovative Services 2025',
      icon: Star,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'AI Sales Automation Suite', href: '/innovative-services-showcase-2025' },
        { name: 'AI Customer Support Platform', href: '/innovative-services-showcase-2025' },
        { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025' },
        { name: 'AI Supply Chain Optimization', href: '/innovative-services-showcase-2025' },
        { name: 'AI HR Platform', href: '/innovative-services-showcase-2025' },
        { name: 'AI Project Management', href: '/innovative-services-showcase-2025' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' }
      ]
    },
    {
      title: 'IoT & Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      links: [
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Smart City Solutions', href: '/services/space-tech' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-red-600 to-pink-600',
      links: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Security & Compliance', href: '/security' },
        { name: 'Privacy & Data Protection', href: '/privacy' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'from-yellow-600 to-orange-600',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' },
        { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-teal-600 to-cyan-600',
      links: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot' },
        { name: 'RAG Search Platform', href: '/services/rag-search' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline' },
        { name: 'E-commerce Personalization', href: '/services/ecommerce-personalization' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', description: 'Complete AI solutions portfolio' },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Research & Development', href: '/research-development', description: 'Innovation and R&D services' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Services Overview', href: '/services-overview' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Pricing Guide', href: '/pricing-guide' },
    { name: 'Help Center', href: '/help' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission' },
    { name: 'Team', href: '/team', description: 'Meet our experts' },
    { name: 'Careers', href: '/careers', description: 'Join our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights' },
    { name: 'News', href: '/news', description: 'Company and industry news' },
    { name: 'Events', href: '/events', description: 'Upcoming events and webinars' },
    { name: 'Press', href: '/press', description: 'Media resources' },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
    { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'Documentation', href: '/docs', description: 'Technical guides' },
    { name: 'Training', href: '/training', description: 'Learning resources' },
    { name: 'Webinars', href: '/webinars', description: 'Educational sessions' }
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
              {quickLinks.map((link, index) => (
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

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Brain className="w-8 h-8 text-zion-cyan animate-bounce" />
      </div>
      <div className="absolute top-20 right-20 opacity-20">
        <Rocket className="w-8 h-8 text-zion-purple animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Brain className="w-8 h-8 text-zion-cyan animate-spin" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Shield className="w-8 h-8 text-zion-purple animate-bounce delay-1000" />
      </div>
    </footer>
  );
};
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
  Omega
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI & Analytics',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'Predictive Analytics', href: '/ai-services' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'DevOps Automation', href: '/it-services' }
      ]
    },
    {
      title: 'Emerging Technologies',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Blockchain Solutions', href: '/services' },
        { name: '5G Network Optimization', href: '/services' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      links: [
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Content Optimizer', href: '/services/ai-content-optimizer' },
        { name: 'Quantum Cryptography', href: '/services/quantum-cryptography-platform' },
        { name: 'AI Supply Chain Optimizer', href: '/services/ai-supply-chain-optimizer' },
        { name: 'IoT Healthcare Monitor', href: '/services/iot-healthcare-monitor' },
        { name: 'Green IT Sustainability', href: '/services/green-it-sustainability-platform' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      links: [
        { name: 'AI Cybersecurity Sentinel', href: '/services/ai-cybersecurity-sentinel' },
        { name: 'Data Analytics Platform', href: '/services/data-analytics' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' },
        { name: 'Transformation Services', href: '/services/transformation' },
        { name: 'Enterprise IT Solutions', href: '/it-services' }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare Technology', href: '/services' },
        { name: 'Financial Services', href: '/services' },
        { name: 'Manufacturing Solutions', href: '/services' },
        { name: 'Retail & E-commerce', href: '/services' },
        { name: 'Transportation & Logistics', href: '/services' },
        { name: 'Energy & Utilities', href: '/services' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-purple/10 to-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    ZION
                  </div>
                  <div className="text-sm text-zion-cyan font-medium">TECH GROUP</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with innovative AI, quantum computing, 
                and cutting-edge solutions that transform businesses and drive innovation.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-cyan">
                  <Phone className="w-4 h-4" />
                  <span className="text-white">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-purple">
                  <Mail className="w-4 h-4" />
                  <span className="text-white">{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-cyan">
                  <MapPin className="w-4 h-4" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-purple">
                  <Globe className="w-4 h-4" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zion-cyan transition-colors duration-300">
                    {contactInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Service Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>
                <h3 className="text-zion-cyan font-semibold mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Quick Links Section */}
          <div className="border-t border-zion-cyan/20 pt-8 mb-8">
            <h3 className="text-zion-cyan font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-zion-cyan transition-colors duration-300 text-sm hover:translate-x-1 transform transition-transform duration-200 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="border-t border-zion-cyan/20 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Social Links */}
              <div>
                <h3 className="text-zion-cyan font-semibold mb-4 text-lg">Connect With Us</h3>
                <div className="flex space-x-4">
                  {/* Social links would go here, similar to the original socialLinks array */}
                  {/* For now, keeping the original socialLinks structure for consistency */}
                  {/* <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-lg flex items-center justify-center text-zion-cyan hover:bg-gradient-to-br hover:from-zion-cyan hover:to-zion-purple hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-zion-cyan font-semibold mb-4 text-lg">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest insights on AI, quantum computing, and emerging technologies.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-cyan/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} ZION Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.href} className="text-gray-400 hover:text-zion-cyan transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Made with Love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by ZION Team</span>
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
        <Atom className="w-8 h-8 text-zion-cyan animate-spin" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Shield className="w-8 h-8 text-zion-purple animate-bounce delay-1000" />
      </div>
    </footer>
  );
};
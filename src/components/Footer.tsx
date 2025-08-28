import React, { useState, useEffect } from 'react';
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
  Star,
  Atom,
  Lock,
  Eye,
  Network,
  Smartphone,
  Database,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  Workflow,
  MessageCircle,
  Search
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: '2029 Revolutionary Services', href: '/revolutionary-services-2029', featured: true },
        { name: '2027 Services', href: '/services2027', featured: true },
        { name: '2026 Services', href: '/services2026', featured: true },
        { name: 'AI & Automation', href: '/services/ai-autonomous-business-operations' },
        { name: 'Quantum Computing', href: '/services/quantum-ai-hybrid-platform' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops-platform' },
        { name: 'Data Analytics', href: '/services/ai-data-analytics-bi' },
        { name: 'Micro SaaS', href: '/services/micro-saas-solutions' },
        { name: 'View All Services', href: '/services', featured: true }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Retail & E-commerce', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' },
        { name: 'Government', href: '/solutions/government' },
        { name: 'Startups', href: '/solutions/startups' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Sustainability', href: '/sustainability' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: '2029 Innovative Services', path: '/innovative-services-2029', icon: Star }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Heart },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Shield }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      links: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
        { name: 'IT Services', path: '/it-services', icon: Building },
        { name: 'Micro SaaS Solutions', path: '/micro-saas-solutions', icon: Zap },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Consulting', path: '/services/it-consulting', icon: Cpu }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Code,
      links: [
        { name: 'AI Content Creation Studio', path: '/services/ai-content-creation-studio', icon: FileText },
        { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', icon: MessageCircle },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp },
        { name: 'AI HR Platform', path: '/services/ai-hr-platform', icon: Users },
        { name: 'AI Code Reviewer', path: '/services/ai-autonomous-code-reviewer', icon: Code },
        { name: 'AI SEO Platform', path: '/services/ai-seo', icon: Search }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      links: [
        { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Lock },
        { name: 'IoT Platforms', path: '/services/iot-edge-computing', icon: Network },
        { name: 'Edge Computing', path: '/services/iot-edge-computing', icon: Chip },
        { name: '5G Solutions', path: '/services/5g-enterprise', icon: Wifi },
        { name: 'Smart Cities', path: '/services/smart-city', icon: Building },
        { name: 'Autonomous Systems', path: '/services/autonomous-systems', icon: Bot },
        { name: 'Robotics & Automation', path: '/services/robotics', icon: Workflow },
        { name: 'Augmented Reality', path: '/services/ar-vr', icon: Eye }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-cyan-500/20">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-neon">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl opacity-20 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    ZION TECH GROUP
                  </h3>
                  <p className="text-cyan-400/70 font-rajdhani text-sm">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative micro SaaS solutions. 
                We transform businesses through intelligent automation and next-generation technology.
              </p>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">{contactInfo.email}</a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-sm">{contactInfo.website}</a>
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
                    className={`p-2 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-gray-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-orbitron">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                      >
                        <link.icon className="w-3 h-3 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-cyan-500/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400">Get the latest insights on AI, quantum computing, and emerging technologies</p>
          </div>
          <FooterNewsletter />
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors duration-300">Accessibility</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-neon hover:shadow-neon-purple transition-all duration-300 hover:scale-110 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb" style={{ top: '20%', left: '10%' }}></div>
        <div className="floating-orb" style={{ top: '60%', right: '15%' }}></div>
        <div className="floating-orb" style={{ bottom: '30%', left: '20%' }}></div>
      </div>
    </footer>
  );
};

export default Footer;

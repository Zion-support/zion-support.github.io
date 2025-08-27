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
  Server,
  ShoppingCart,
  MessageCircle,
  Code,
  Smartphone
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
      title: 'AI & Research Services',
      icon: Brain,
      links: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: TrendingUp },
        { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
        { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
        { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp }
      ]
    },
    {
      title: 'Advanced Technology',
      icon: Cpu,
      links: [
        { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'Space Technology', path: '/services/space-tech', icon: Satellite },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf },
        { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      links: [
        { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
        { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: BarChart3 },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'IT Consulting', path: '/services/it-consulting', icon: Cpu },
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3 },
        { name: 'Business Intelligence', path: '/services/business-intelligence', icon: TrendingUp }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      links: [
        { name: 'Micro SaaS Platform', path: '/services/micro-saas-solutions', icon: ShoppingCart },
        { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle },
        { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
        { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: FileText },
        { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'Developers', path: '/developers', icon: Code },
        { name: 'Training', path: '/training', icon: GraduationCap },
        { name: 'Support', path: '/support', icon: MessageCircle },
        { name: 'Status', path: '/status', icon: Activity },
        { name: 'Sitemap', path: '/sitemap', icon: Globe }
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Marketplace Home', path: '/marketplace', icon: ShoppingCart },
        { name: 'Products', path: '/marketplace/products', icon: ShoppingCart },
        { name: 'Talent', path: '/marketplace/talent', icon: Users },
        { name: 'Equipment', path: '/marketplace/equipment', icon: Server },
        { name: 'Services', path: '/marketplace/services', icon: Zap },
        { name: 'Request Quote', path: '/request-quote', icon: MessageCircle },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'Case Studies', path: '/case-studies', icon: FileText }
      ]
    },
    {
      title: 'Legal & Privacy',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText },
        { name: 'Cookies Policy', path: '/cookies', icon: Shield },
        { name: 'Security', path: '/security', icon: Lock },
        { name: 'Accessibility', path: '/accessibility', icon: Eye },
        { name: 'GDPR Compliance', path: '/services/dsr-portal', icon: Shield },
        { name: 'Data Protection', path: '/privacy', icon: Lock },
        { name: 'Trust Center', path: '/security', icon: CheckCircle }
      ]
    }
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" }
  ];
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 shadow-lg shadow-cyan-400/30"
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );

  return (
    <footer className="relative bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <FuturisticBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section with Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">Innovation Hub</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading the future of technology with cutting-edge AI solutions, quantum computing, 
                and innovative micro SAAS services that transform businesses worldwide.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-300">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                    364 E Main St STE 1008, Middletown DE 19709
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                    ziontechgroup.com
                  </a>
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
                    className={`p-3 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-gray-400 ${social.color} hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <div className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:pl-8">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Stay Updated</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Get the latest insights on AI, quantum computing, and emerging technologies 
                  delivered to your inbox.
                </p>
                <FooterNewsletter />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <section.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <link.icon className="w-3 h-3 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
                        <span className="text-sm group-hover:text-cyan-400 transition-colors duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-cyan-400/20">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. 
                <span className="ml-2 text-cyan-400">Innovating the future, today.</span>
              </div>

              {/* Quick Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </motion.button>
    </footer>
  );
}

import React, { useState } from 'react';
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
  ShoppingCart,
  ArrowRight,
  Star,
  Award,
  Lock,
  Eye,
  Atom,
  Code,
  Database,
  Network,
  Server,
  Leaf,
  Satellite,
  Link as LinkIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Users as UsersIcon,
  Workflow,
  MessageCircle,
  BarChart3,
  Smartphone
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const footerSections = [
    {
      title: 'Company',
      icon: Building,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: BrainIcon,
      links: [
        { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Micro SaaS Platform', path: '/services/ai-micro-saas-platform', icon: Brain },
        { name: 'Quantum AI Trading Platform', path: '/services/quantum-ai-trading-platform', icon: Atom },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'AI Solutions Overview', path: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', icon: DollarSign },
        { name: 'AI IoT Edge Computing', path: '/services/ai-iot-edge-computing', icon: Cpu },
        { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'AI Services Overview', path: '/ai-services', icon: Brain }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: AtomIcon,
      links: [
        { name: 'Quantum AI Hybrid Platform', path: '/services/quantum-ai-hybrid-platform', icon: Atom },
        { name: 'Blockchain Enterprise Solutions', path: '/services/blockchain-enterprise-solutions', icon: LinkIcon },
        { name: 'Space Technology Solutions', path: '/services/space-technology-solutions', icon: Satellite },
        { name: 'Green Technology Solutions', path: '/services/green-technology-solutions', icon: Leaf },
        { name: 'Quantum Computing', path: '/quantum-computing', icon: Atom },
        { name: 'Emerging Technologies', path: '/emerging-technologies', icon: Rocket }
      ]
    },
    {
      title: 'IT & Infrastructure',
      icon: CpuIcon,
      links: [
        { name: 'Cloud DevOps Automation', path: '/services/cloud-devops-automation', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Cybersecurity Solutions', path: '/cybersecurity', icon: Shield },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', icon: Network },
        { name: 'Server Management', path: '/services/server-management', icon: Server },
        { name: 'IT Consulting', path: '/it-consulting', icon: Cpu }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: UsersIcon,
      links: [
        { name: 'Micro CRM Platform', path: '/services/micro-crm-platform', icon: Users },
        { name: 'Helpdesk Platform', path: '/services/helpdesk', icon: MessageCircle },
        { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
        { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
        { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
        { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: DatabaseIcon,
      links: [
        { name: 'Advanced Data Analytics', path: '/services/advanced-data-analytics', icon: BarChart3 },
        { name: 'Business Intelligence', path: '/services/business-intelligence', icon: TrendingUp },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics', icon: Target },
        { name: 'Data Visualization', path: '/services/data-visualization', icon: Eye },
        { name: 'Big Data Processing', path: '/services/big-data-processing', icon: Database },
        { name: 'Data Governance', path: '/services/data-governance', icon: Shield }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: ZapIcon,
      links: [
        { name: 'Digital Transformation Suite', path: '/services/digital-transformation-suite', icon: Zap },
        { name: 'Process Automation', path: '/services/process-automation', icon: Workflow },
        { name: 'Legacy System Modernization', path: '/services/legacy-modernization', icon: Cpu },
        { name: 'Cloud Migration', path: '/services/cloud-migration', icon: Cloud },
        { name: 'Change Management', path: '/services/change-management', icon: Users },
        { name: 'Innovation Consulting', path: '/services/innovation-consulting', icon: Rocket }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'News', path: '/news', icon: Newspaper },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'Contact Support', path: '/contact', icon: Mail },
        { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
        { name: 'Sitemap', path: '/sitemap', icon: FileText }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Video, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-600' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.3,
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

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section with Logo and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-cyan-400 font-rajdhani tracking-wider">
                    Innovation Group
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI solutions, quantum computing, 
                and innovative micro SAAS services. Transform your business with next-generation innovations.
              </p>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-cyan-500/20 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Overview */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-6">Our Innovative Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center">
                      <Atom className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Quantum Computing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg flex items-center justify-center">
                      <LinkIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Blockchain & Web3</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-gray-700 rounded-lg flex items-center justify-center">
                      <Satellite className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Space Technology</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Green Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-pink-700 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Micro SaaS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-red-700 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">Digital Transformation</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <Link
                  to="/innovative-services-showcase-2025"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white font-rajdhani">
                    {section.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 lg:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link to="/privacy" className="hover:text-cyan-400 ml-2">Privacy Policy</Link> | 
                <Link to="/terms" className="hover:text-cyan-400 ml-2">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>50+ Innovative Services</span>
                <span>•</span>
                <span>Proven ROI</span>
                <span>•</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 mx-auto" />
        </motion.button>
      </div>
    </footer>
  );
}
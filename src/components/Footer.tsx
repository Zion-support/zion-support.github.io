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
  Crown,
  Atom,
  Lock,
  Eye,
  Network,
  Leaf,
  Globe2,
  Satellite,
  Dna,
  Robot,
  Code,
  MessageCircle
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
      title: '2028 Services',
      icon: Crown,
      featured: true,
      links: [
        { name: '2028 Services Overview', path: '/ultimate-services-showcase-2028', icon: Crown, featured: true },
        { name: 'Space Technology', path: '/services/space-technology', icon: Satellite },
        { name: 'Biotechnology AI', path: '/services/biotech-ai', icon: Dna },
        { name: 'Advanced Robotics', path: '/services/advanced-robotics', icon: Robot },
        { name: 'Neuromorphic Computing', path: '/services/neuromorphic-computing', icon: Brain },
        { name: 'Quantum Internet', path: '/services/quantum-internet', icon: Network },
        { name: 'Advanced Materials', path: '/services/advanced-materials', icon: Atom },
        { name: 'AI Ethics & Governance', path: '/services/ai-ethics-governance', icon: Shield }
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
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Activity },
        { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf },
        { name: 'Zero Trust Network', path: '/services/zero-trust-network-access', icon: Lock }
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
        { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Lock }
      ]
    },
    {
      title: 'Resources & Support',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Training', path: '/training', icon: GraduationCap },
        { name: 'Support', path: '/support', icon: Users },
        { name: 'Status', path: '/status', icon: Activity },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact Support', path: '/contact', icon: MessageCircle }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Request Quote', path: '/request-quote', icon: MessageCircle, primary: true },
    { name: 'Get Started', path: '/contact', icon: Rocket, primary: true },
    { name: 'View Services', path: '/ultimate-services-showcase-2028', icon: Crown, primary: false },
    { name: 'Contact Sales', path: '/contact', icon: Users, primary: false }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      {/* Enhanced Footer Background */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container-responsive py-16">
            {/* Enhanced Header Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h2>
                    <p className="text-gray-400 text-sm">Innovation at Light Speed</p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Leading the future with cutting-edge AI, quantum computing, and emerging technology solutions. 
                  Transform your business with our revolutionary 2028 services.
                </p>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
              >
                {quickActions.map((action, index) => (
                  <Link
                    key={action.name}
                    to={action.path}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-slate-700/50 border border-slate-600/50 text-gray-300 hover:text-white hover:bg-slate-600/50 hover:border-cyan-500/50'
                    }`}
                  >
                    <action.icon className="w-4 h-4" />
                    {action.name}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Footer Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${section.featured ? 'lg:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 rounded-lg ${
                      section.featured 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' 
                        : 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                    }`}>
                      <section.icon className={`w-5 h-5 ${
                        section.featured ? 'text-yellow-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <h3 className={`font-semibold ${
                      section.featured ? 'text-yellow-400' : 'text-cyan-400'
                    }`}>
                      {section.title}
                      {section.featured && (
                        <span className="ml-2 inline-block px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                          FEATURED
                        </span>
                      )}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                        >
                          <link.icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          <span className="text-sm">{link.name}</span>
                          {link.featured && (
                            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <FooterNewsletter />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Phone</h4>
                </div>
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Email</h4>
                </div>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Globe2 className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Website</h4>
                </div>
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Address</h4>
                </div>
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </address>
              </div>
            </motion.div>

            {/* Social Links & Bottom Bar */}
            <div className="border-t border-slate-700/50 pt-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">Follow us:</span>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-sm text-gray-400">
                    © {currentYear} Zion Tech Group. All rights reserved.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start gap-4 mt-2 text-xs text-gray-500">
                    <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                    <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
                  </div>
                </div>

                {/* Scroll to Top */}
                <button
                  onClick={scrollToTop}
                  className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-200 hover:scale-105 group"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

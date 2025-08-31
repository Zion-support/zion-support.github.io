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
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Users,
  Building,
  Code,
  Leaf,
  Star,
  Award,
  Heart,
  Clock,
  CheckCircle,
  MessageCircle,
  HelpCircle,
  FileText,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  Globe as WebIcon,
  Shield as SecurityIcon,
  Zap as PerformanceIcon,
  Brain as AIIcon,
  Cloud as CloudIcon,
  Rocket as InnovationIcon
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', href: '/ai-services', icon: Brain },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Cybersecurity', href: '/security', icon: Shield },
        { name: 'Cloud & DevOps', href: '/cloud-devops', icon: Cloud },
        { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket },
        { name: '2025 Services Showcase', href: '/comprehensive-services-showcase-2025', icon: Star },
        { name: '2025 Pricing Guide', href: '/comprehensive-pricing-guide-2025', icon: DollarSign }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'Industry Solutions', href: '/solutions/industry', icon: Target },
        { name: 'AI & Machine Learning', href: '/solutions/ai-ml', icon: Brain },
        { name: 'Quantum Computing', href: '/quantum-technology', icon: Atom },
        { name: 'Blockchain & Web3', href: '/blockchain-solutions', icon: Link },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cpu },
        { name: 'Green Technology', href: '/green-it', icon: Leaf }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'News & Press', href: '/news', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
        { name: 'Contact Us', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog & Insights', href: '/blog', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Documentation', href: '/documentation', icon: FileText },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Support', href: '/support', icon: LifeBuoy }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 and ISO 27001 compliance'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Get up and running in weeks, not months'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and dedicated account management'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light border-t border-cyan-500/30">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Company Info & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-300 text-sm">Leading AI & Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Transform your business with our cutting-edge AI solutions, quantum computing, 
              and innovative micro SAAS services. Leading the future of technology.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 hover:bg-white/20 border border-cyan-500/30 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {navigationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Services' && <Brain className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Solutions' && <Target className="w-5 h-5 text-purple-400 mr-2" />}
                {section.title === 'Company' && <Building className="w-5 h-5 text-green-400 mr-2" />}
                {section.title === 'Resources' && <BookOpen className="w-5 h-5 text-orange-400 mr-2" />}
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 mr-2 text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter & CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Ahead with Zion Tech Group
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI, technology trends, and industry innovations delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-xl border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Links & Copyright */}
        <div className="border-t border-cyan-500/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-1">Leading the future of technology with AI-powered solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        >
          <a
            href="tel:+13024640950"
            className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
            aria-label="Call Zion Tech Group"
          >
            <Phone className="w-7 h-7 text-white" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default EnhancedFooter;
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
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  GitFork,
  Atom,
  Target,
  TrendingUp,
  CheckCircle,
  ShoppingCart,
  Building,
  MailIcon,
  BookOpen,
  Calendar,
  Settings
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Services Overview', href: '/services-overview' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Services Catalog', href: '/services-catalog' },
        { name: 'Services Comparison', href: '/services-comparison' }
      ]
    },
    {
      title: 'Core Technologies',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Cybersecurity Suite', href: '/services/ai-compliance-copilot' },
        { name: 'Data Analytics', href: '/services/data-analytics' }
      ]
    },
    {
      title: 'Innovation Hub',
      icon: Star,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', icon: Star, description: 'Future-focused solutions' },
        { name: 'Comprehensive Services 2028', href: '/comprehensive-services-landing-2028', icon: Star, description: 'Complete service portfolio' },
        { name: 'Emerging Tech 2030', href: '/emerging-tech-2030', icon: Star, description: 'Cutting-edge technology' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Star, description: 'Sales automation' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-automation', icon: Star, description: 'Content generation' }
      ]
    },
    {
      title: 'Pricing & Plans',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      links: [
        { name: 'Pricing Overview', href: '/pricing' },
        { name: 'Pricing Guide', href: '/pricing-guide' },
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Schedule Demo', href: '/schedule-demo' },
        { name: 'Contact Sales', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      icon: Building,
      color: 'from-green-600 to-emerald-600',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Press', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {
      title: 'Resources & Learning',
      icon: BookOpen,
      color: 'from-orange-600 to-red-600',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Support Center', href: '/support' },
        { name: 'Community', href: '/community' }
      ]
    },
    {
      title: 'Platform & Tools',
      icon: Settings,
      color: 'from-slate-600 to-gray-600',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Login', href: '/login' },
        { name: 'Sign Up', href: '/signup' },
        { name: 'System Status', href: '/status' },
        { name: 'API Documentation', href: '/documentation' },
        { name: 'Developer Tools', href: '/documentation' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      color: 'from-gray-600 to-slate-600',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Security', href: '/security' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Accessibility', href: '/accessibility' },
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Quote', href: '/request-quote', icon: DollarSign },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Contact Support', href: '/support', icon: MessageCircle },
    { name: 'View Status', href: '/status', icon: Gauge }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = {
    phone: '+1 (800) 123-4567',
    email: 'info@ziontechgroup.com',
    address: '123 Innovation Drive, Tech City, TC 12345'
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-slate-400">Innovating Tomorrow, Today</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Leading provider of innovative technology solutions, helping businesses transform and thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <section.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-white">{section.title}</h4>
                </div>
                <div className="space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Transform your business with our cutting-edge technology solutions. Get in touch today for a personalized consultation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-medium text-center">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-300">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                  <span className="text-slate-300">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-slate-300 mb-4">
                Subscribe to our newsletter for the latest insights, updates, and technology trends.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                />
                <button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <span className="text-sm">Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span className="text-sm">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
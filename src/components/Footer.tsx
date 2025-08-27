import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  BookOpen, 
  MessageCircle,
  ExternalLink,
  Heart,
  Sparkles,
  Building,
  Handshake,
  TrendingUp,
  FileText,
  Video,
  HelpCircle,
  Settings,
  BarChart3,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  DollarSign,
  Heart as HeartIcon,
  ShieldCheck,
  LockKeyhole,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Monitor,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Quantum',
      icon: Brain,
      services: [
        { name: 'Quantum AI Platform', href: '/innovative-services-2027' },
        { name: 'Autonomous AI Systems', href: '/innovative-services-2027' },
        { name: 'Machine Learning', href: '/services/ai-services' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Quantum Security Suite', href: '/innovative-services-2027' },
        { name: 'Zero Trust Architecture', href: '/services/cybersecurity' },
        { name: 'Incident Response', href: '/services/cybersecurity' },
        { name: 'Compliance Automation', href: '/services/cybersecurity' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'Edge Computing', href: '/services/iot-edge' },
        { name: 'Infrastructure as Code', href: '/services/cloud-devops' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Rocket,
      services: [
        { name: 'Space Technology', href: '/innovative-services-2027' },
        { name: 'Biotechnology', href: '/innovative-services-2027' },
        { name: 'Nanotechnology', href: '/innovative-services-2027' },
        { name: 'Autonomous Systems', href: '/innovative-services-2027' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'News', href: '/news' },
    { name: 'Press', href: '/press' }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Help Center', href: '/help-center' },
    { name: 'Training', href: '/training' },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const solutionLinks = [
    { name: 'Enterprise', href: '/solutions/enterprise' },
    { name: 'Healthcare', href: '/solutions/healthcare' },
    { name: 'Finance', href: '/solutions/finance' },
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Government', href: '/solutions/government' },
    { name: 'Retail', href: '/solutions/retail' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-zion-neon/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-slate/80 via-zion-purple/80 to-zion-cyan/80"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-slate-900" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-neon to-zion-cyan rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-orbitron">Zion Tech Group</h3>
                  <p className="text-zion-neon/80 font-rajdhani">Innovating Tomorrow</p>
                </div>
              </div>
              
              <p className="text-zion-neon/80 mb-6 max-w-md">
                Leading the future of technology with cutting-edge AI, quantum computing, 
                and innovative solutions that transform businesses and industries worldwide.
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-zion-neon/80">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
                <a 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-zion-neon/80 hover:text-zion-neon transition-colors duration-200"
                >
                  <Globe className="w-5 h-5" />
                  <span>{contactInfo.website}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-zion-neon/60 hover:text-zion-neon hover:bg-zion-neon/10 rounded-lg transition-all duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-zion-purple" />
                <span>Services</span>
              </h4>
              <div className="space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-zion-neon/20 to-zion-cyan/20">
                        <category.icon className="w-4 h-4 text-zion-neon" />
                      </div>
                      <h5 className="text-zion-neon font-medium text-sm">{category.name}</h5>
                    </div>
                    <div className="ml-6 space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-zion-neon/60 hover:text-zion-neon text-sm transition-colors duration-200"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-zion-cyan" />
                <span>Quick Links</span>
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-zion-neon font-medium text-sm mb-3">Company</h5>
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-neon/60 hover:text-zion-neon text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-zion-neon font-medium text-sm mb-3">Solutions</h5>
                  <div className="space-y-2">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-neon/60 hover:text-zion-neon text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-zion-neon font-medium text-sm mb-3">Resources</h5>
                  <div className="space-y-2">
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block text-zion-neon/60 hover:text-zion-neon text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-zion-neon/20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-4">
                Stay Updated with Zion Tech Group
              </h4>
              <p className="text-zion-neon/80 mb-6 max-w-2xl mx-auto">
                Get the latest insights on emerging technologies, industry trends, and innovative solutions 
                delivered directly to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-zion-neon/30 rounded-xl text-white placeholder-zion-neon/60 focus:outline-none focus:border-zion-neon focus:ring-2 focus:ring-zion-neon/20 transition-all"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 font-semibold rounded-xl hover:from-zion-cyan hover:to-zion-neon transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-neon/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-zion-neon/60">
                <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
                <Link to="/privacy" className="hover:text-zion-neon transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-zion-neon transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-zion-neon transition-colors duration-200">
                  Cookie Policy
                </Link>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-zion-neon/60">Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span className="text-sm text-zion-neon/60">by Zion Tech Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-neon to-zion-cyan text-slate-900 rounded-full shadow-2xl shadow-zion-neon/20 hover:from-zion-cyan hover:to-zion-neon transition-all duration-300 transform hover:scale-110 z-50"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}

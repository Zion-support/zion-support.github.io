import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Brain, Rocket, Shield, Cloud, 
  Zap, Atom, Building2, Star,
  ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function EnhancedFooter() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=ai',
      icon: Brain,
      description: 'Advanced AI services and solutions',
      services: ['AI Content Generation', 'Machine Learning Models', 'Neural Networks', 'AI Automation']
    },
    {
      name: 'Quantum Computing',
      href: '/services?category=quantum',
      icon: Atom,
      description: 'Quantum-powered solutions',
      services: ['Quantum Algorithms', 'Quantum Security', 'Quantum Optimization', 'Quantum AI']
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=security',
      icon: Shield,
      description: 'Next-gen security solutions',
      services: ['Threat Detection', 'Zero Trust Security', 'AI Security', 'Compliance Management']
    },
    {
      name: 'Cloud & Infrastructure',
      href: '/services?category=cloud',
      icon: Cloud,
      description: 'Scalable cloud solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Infrastructure as Code', 'Multi-Cloud Management']
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=emerging',
      icon: Rocket,
      description: 'Cutting-edge innovations',
      services: ['Blockchain Solutions', 'IoT Platforms', 'Edge Computing', 'Metaverse Development']
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=enterprise',
      icon: Building2,
      description: 'Enterprise-grade solutions',
      services: ['Digital Transformation', 'Legacy Modernization', 'Data Analytics', 'Process Automation']
    }
  ];

  const quickLinks = [
    { name: 'Revolutionary Services', href: '/revolutionary-services-showcase', highlight: true },
    { name: 'All Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Market Pricing', href: '/market-pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: '💻' }
  ];

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'from-purple-500 to-indigo-600',
      services: [
        { name: 'AI Consciousness Platform', href: '/services/ai-consciousness-platform' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Autonomous AI Agents', href: '/services/autonomous-ai-agents' },
        { name: 'AI Content Factory', href: '/services/ai-content-factory' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: <Atom className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-600',
      services: [
        { name: 'Quantum Neural Interface', href: '/services/quantum-neural-interface' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'Quantum Internet Protocol', href: '/services/quantum-internet-protocol' },
        { name: 'Quantum Sensors Network', href: '/services/quantum-sensors-network' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: <Rocket className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Holographic Metaverse', href: '/services/holographic-metaverse-platform' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic-computing' },
        { name: 'Synthetic Biology', href: '/services/synthetic-biology-platform' },
        { name: 'Brain-Computer Interface', href: '/services/brain-computer-interface' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: <Target className="w-5 h-5" />,
      color: 'from-orange-500 to-red-600',
      services: [
        { name: 'Smart Inventory Manager', href: '/services/smart-inventory-manager' },
        { name: 'Customer Success Automation', href: '/services/customer-success-automation' },
        { name: 'AI Sales Coach', href: '/services/ai-sales-coach' },
        { name: 'Smart HR Assistant', href: '/services/smart-hr-assistant' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Tools', href: '/developer-tools' },
    { name: 'Integration Guides', href: '/integrations' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'Community Forum', href: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'Services', value: '500+', icon: <Zap className="w-6 h-6" /> },
    { label: 'Clients', value: '10K+', icon: <Users className="w-6 h-6" /> },
    { label: 'ROI Average', value: '800%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.9%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
                Z
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">Revolutionary Technology Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Pioneering the future with 1000+ cutting-edge AI, quantum computing, and emerging technology services. 
              Achieve 1000% ROI with our revolutionary solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-green-400" />
                <a href={contactInfo.website} className="text-sm" target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Our Revolutionary Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceCategories.map((category) => (
                <div key={category.name} className="group">
                  <Link
                    href={category.href}
                    className="flex items-center space-x-3 mb-3 group-hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </span>
                  </Link>
                  <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                  <ul className="space-y-1">
                    {category.services.slice(0, 3).map((service) => (
                      <li key={service} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-2 text-sm transition-colors ${
                      link.highlight
                        ? 'text-cyan-400 hover:text-cyan-300 font-medium'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <ArrowRight className="w-3 h-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-200 hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8 mb-12"
        >
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Get started today and achieve 1000% ROI with cutting-edge AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Revolutionary Services Inquiry`}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. Revolutionary technology solutions for the future.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating CTA */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
        >
          <Rocket className="w-5 h-5" />
          <span>Get Started</span>
        </Link>
      </motion.div>
    </footer>
  );
};

export default EnhancedFooter;

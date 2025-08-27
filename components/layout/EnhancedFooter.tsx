import React from 'react';
import Link from 'next/link';
import { 
  Brain, Atom, Rocket, Target, Zap, 
  Twitter, Linkedin, Github, Instagram, Youtube,
  Mail, Phone, MapPin, Globe, ArrowRight
} from 'lucide-react';
export default function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
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
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-gray-400">Leading technology solutions for modern businesses</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI, quantum computing, and emerging technologies. 
              We transform ideas into innovative solutions that drive growth and competitive advantage.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <h5 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {category.title}
                    </h5>
                  </div>
                  <ul className="ml-8 space-y-1">
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          href={service.href}
                          className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Company</h5>
                <ul className="space-y-1">
                  {companyLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Resources</h5>
                <ul className="space-y-1">
                  {resourceLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Service Categories Grid */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold text-center mb-8 text-white">Our Service Categories</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h5 className="text-lg font-semibold text-white mb-3">{category.title}</h5>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        href={service.href}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Social Links */}
        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              {legalLinks.slice(0, 4).map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

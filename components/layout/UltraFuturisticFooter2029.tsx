import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _ArrowRight, _Star, _Rocket, _Brain, _Atom, _Building, _Briefcase, _Microscope, _Twitter, _Facebook, _Linkedin, _Instagram, _Youtube, _Github, _Zap, _Sparkles, _Shield, _Cpu, _Database} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: 'AI & Machine Learning', _icon: Brain, _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029'},
      {_name: 'Quantum Neural Networks', _href: '/quantum-neural-network-platform'},
      {_name: 'Autonomous Business Operations', _href: '/autonomous-business-operations-platform'},
      {_name: 'AI-Powered IT Asset Management', _href: '/ai-powered-it-asset-management'}
    ]
  },
  {_title: '🧠 AI & Technology', _services: [
      { name: 'AI Services', _href: '/ai-services'},
      {_name: 'Machine Learning', _href: '/machine-learning'},
      {_name: 'Natural Language Processing', _href: '/nlp-services'},
      {_name: 'Computer Vision', _href: '/computer-vision'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _services: [
      { name: 'Quantum Computing', _href: '/quantum-computing'},
      {_name: 'Blockchain Solutions', _href: '/blockchain-solutions'},
      {_name: 'IoT Platforms', _href: '/iot-platforms'},
      {_name: 'Space Technology', _href: '/space-tech'}
    ]
  },
  {_title: '🏙️ Enterprise Solutions', _services: [
      { name: 'Enterprise IT', _href: '/enterprise-it'},
      {_name: 'Cloud Solutions', _href: '/cloud-solutions'},
      {_name: 'Cybersecurity', _href: '/cybersecurity'},
      {_name: 'DevOps Automation', _href: '/devops-automation'}
    ]
  }
];

const _quickLinks = [
  {_name: 'Home', _href: '/', _icon: Home},
  {_name: 'Services', _href: '/services', _icon: Briefcase},
  {_name: 'Solutions', _href: '/solutions', _icon: Rocket},
  {_name: 'About', _href: '/about', _icon: Users},
  {_name: 'Blog', _href: '/blog', _icon: BookOpen},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle},
  {_name: 'Support', _href: '/support', _icon: MessageCircle},
  {_name: 'Privacy', _href: '/privacy', _icon: Shield}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin, _color: 'hover:text-blue-400'},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter, _color: 'hover:text-sky-400'},
  {_name: 'GitHub', _href: 'https://github.com/Zion-Holdings', _icon: Github, _color: 'hover:text-gray-400'},
  {_name: 'YouTube', _href: 'https://youtube.com/@ziontechgroup', _icon: Youtube, _color: 'hover:text-red-500'}
];

const _footerSections = [
  {_title: 'Company', _links: [
      { name: 'About Us', _href: '/about'},
      {_name: 'Our Mission', _href: '/mission'},
      {_name: 'Leadership Team', _href: '/team'},
      {_name: 'Careers', _href: '/careers'},
      {_name: 'Press & Media', _href: '/press'},
      {_name: 'Partnerships', _href: '/partnerships'}
    ]
  },
  {_title: 'Solutions', _links: [
      { name: 'AI Services', _href: '/ai-services'},
      {_name: 'Quantum Technology', _href: '/quantum-technology'},
      {_name: 'IT Infrastructure', _href: '/it-infrastructure'},
      {_name: 'Cybersecurity', _href: '/cybersecurity'},
      {_name: 'Cloud Solutions', _href: '/cloud-solutions'},
      {_name: 'Blockchain', _href: '/blockchain-solutions'}
    ]
  },
  {_title: 'Resources', _links: [
      { name: 'Blog', _href: '/blog'},
      {_name: 'Case Studies', _href: '/case-studies'},
      {_name: 'White Papers', _href: '/white-papers'},
      {_name: 'Documentation', _href: '/docs'},
      {_name: 'API Reference', _href: '/api'},
      {_name: 'Support Center', _href: '/support'}
    ]
  },
  {_title: 'Legal', _links: [
      { name: 'Privacy Policy', _href: '/privacy'},
      {_name: 'Terms of Service', _href: '/terms'},
      {_name: 'Cookie Policy', _href: '/cookies'},
      {_name: 'Data Protection', _href: '/data-protection'},
      {_name: 'Accessibility', _href: '/accessibility'},
      {_name: 'Compliance', _href: '/compliance'}
    ]
  }
];

const _UltraFuturisticFooter2029 = () => {_return (_<footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {_/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">Innovating the Future</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading the revolution in AI, _quantum computing, _and autonomous technology solutions. 
              Transforming businesses with cutting-edge innovation.
            </p>

            {_/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href={_`tel:${contactInfo.mobile}`} className="text-sm">
                  {_contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href={_`mailto:${contactInfo.email}`} className="text-sm">
                  {_contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{_contactInfo.address}</span>
              </div>
            </div>

            {_/* Social Links */}
            <div className="flex space-x-4">
              {_socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={_`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {_/* Service Categories */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-4">
              {_serviceCategories.map(_(category, _index) => (_<div key={index}>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{_category.title}</h5>
                  <ul className="space-y-2">
                    {_category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={_service.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                        >
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          <span>{_service.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {_/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {_quickLinks.map(_(link) => (
                <Link
                  key={link.name}
                  href={_link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{_link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {_/* Footer Sections */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <div className="space-y-4">
              {_footerSections.map(_(section) => (_<div key={section.title}>
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{_section.title}</h5>
                  <ul className="space-y-2">
                    {_section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={_link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {_link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {_/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Zion Tech Group. All rights reserved.
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
      </div>

      {_/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Innovation
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, quantum computing, and autonomous technology. 
              Join our newsletter for exclusive updates and industry insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2029;
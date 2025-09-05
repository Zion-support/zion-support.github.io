import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _Rocket, _Brain, _Atom, _Shield, _Users, _Briefcase, _BookOpen, _MessageCircle, _Star, _TrendingUp, _Target, _Layers, _Cpu, _Database, _Cloud, _Lock, _ShieldCheck, _Heart, _Leaf, _Car, _GraduationCap, _Scale, _Building, _Factory, _Camera, _Video, _Music, _Gamepad2, _Sun, _Moon, _Wind, _Droplets, _Code} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: '🚀 2028 Futuristic Innovations', _services: [
      { name: 'AI Climate Prediction Platform', _href: '/ai-climate-prediction-platform'},
      {_name: 'Quantum Cybersecurity Firewall', _href: '/quantum-cybersecurity-firewall'},
      {_name: 'Autonomous Drone Delivery Network', _href: '/autonomous-drone-delivery-network'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _services: [
      { name: 'Smart City Infrastructure Management', _href: '/smart-city-infrastructure-management'},
      {_name: 'IoT Energy Management System', _href: '/iot-energy-management-system'},
      {_name: 'Digital Twin Manufacturing Platform', _href: '/digital-twin-manufacturing-platform'},
      {_name: 'Autonomous Manufacturing AI', _href: '/autonomous-manufacturing-ai'}
    ]
  },
  {_title: '⚛️ Quantum & Advanced Tech', _services: [
      { name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform'},
      {_name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Internet Protocol', _href: '/quantum-internet-protocol'}
    ]
  },
  {_title: '🤖 AI & Machine Learning', _services: [
      { name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite'},
      {_name: 'AI Legal Research Platform', _href: '/ai-legal-research-platform'}
    ]
  }
];

const _companyLinks = [
  {_name: 'About Us', _href: '/about', _icon: Users},
  {_name: 'Case Studies', _href: '/case-studies', _icon: Briefcase},
  {_name: 'Blog & Resources', _href: '/blog', _icon: BookOpen},
  {_name: 'Careers', _href: '/careers', _icon: TrendingUp},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle},
  {_name: 'Support', _href: '/support', _icon: ShieldCheck}
];

const _resourceLinks = [
  {_name: 'Documentation', _href: '/docs', _icon: BookOpen},
  {_name: 'API Reference', _href: '/api', _icon: Cpu},
  {_name: 'Developer Tools', _href: '/dev-tools', _icon: Database},
  {_name: 'Mobile Apps', _href: '/mobile', _icon: Globe},
  {_name: 'Cloud Services', _href: '/cloud', _icon: Cloud},
  {_name: 'Security Center', _href: '/security', _icon: Shield}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Users},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: MessageCircle},
  {_name: 'YouTube', _href: 'https://youtube.com/@ziontechgroup', _icon: Video},
  {_name: 'GitHub', _href: 'https://github.com/ziontechgroup', _icon: Code}
];

export default function UltraFuturisticFooter2028() {_return (_<footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {_/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-purple-300">2028 Future Technology</p>
              </div>
            </div>
            
            <p className="text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AI, _quantum computing, _and innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
            </p>

            {_/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-purple-200">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">{_contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-200">
                <Globe className="w-4 h-4 text-purple-400" />
                <a href={_contactInfo.website} className="text-sm hover:text-white transition-colors">
                  {_contactInfo.website}
                </a>
              </div>
            </div>

            {_/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {_socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={_social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {_/* Service Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              🚀 Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {_serviceCategories.map(_(category) => (_<div key={category.title} className="space-y-3">
                  <h4 className="font-medium text-purple-300">{_category.title}</h4>
                  <ul className="space-y-2">
                    {_category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={_service.href}
                          className="text-sm text-purple-200 hover:text-white transition-colors hover:underline"
                        >
                          {_service.name}
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
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-purple-500/30 pb-2">
              Quick Links
            </h3>
            
            {_/* Company Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Company</h4>
              <ul className="space-y-2">
                {_companyLinks.map(_(link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{_link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {_/* Resource Links */}
            <div className="mb-6">
              <h4 className="font-medium text-purple-300 mb-3">Resources</h4>
              <ul className="space-y-2">
                {_resourceLinks.map(_(link) => (
                  <li key={link.name}>
                    <Link
                      href={_link.href}
                      className="text-sm text-purple-200 hover:text-white transition-colors hover:underline flex items-center space-x-2"
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{_link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {_/* Newsletter Signup */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-sm text-purple-200 mb-3">
                Get the latest insights on future technology and AI innovations.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {_/* Bottom Bar */}
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {_/* Copyright */}
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {_/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>

      {_/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>

      {_/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}
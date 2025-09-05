import React from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _Zap, _Brain, _Atom, _Rocket, _Shield, _Cpu, _Target, _Microscope, _Users, _Facebook, _Twitter, _Linkedin, _Instagram, _Youtube, _Github, _ArrowRight, _Heart, _Star, _Award, _CheckCircle} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: '🚀 AI & Consciousness', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotion-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Learning Accelerator', _href: '/quantum-learning-accelerator'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'}
    ]
  },
  {_title: '🧬 Biotech & DNA Computing', _services: [
      { name: 'DNA Computing Platform', _href: '/biotech-dna-computing-platform'},
      {_name: 'Personalized Nutrition', _href: '/biotech-personalized-nutrition'},
      {_name: 'Predictive Health Analytics', _href: '/ai-predictive-health-analytics'},
      {_name: 'Research Automation', _href: '/advanced-research-automation'}
    ]
  },
  {_title: '🏙️ Enterprise IT Solutions', _services: [
      { name: 'Autonomous DevOps', _href: '/autonomous-devops-platform'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center'},
      {_name: 'AI Enterprise Security', _href: '/ai-powered-enterprise-security'},
      {_name: 'Intelligent Data Governance', _href: '/intelligent-data-governance'}
    ]
  },
  {_title: '🌌 Space & Metaverse Tech', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform'},
      {_name: 'Metaverse Digital Reality', _href: '/metaverse-digital-reality-platform'},
      {_name: 'Quantum Research Platform', _href: '/quantum-research-platform'},
      {_name: 'AI Research Assistant', _href: '/ai-research-assistant'}
    ]
  },
  {_title: '🎯 2030 Innovative Micro SAAS', _services: [
      { name: 'AI Business Intelligence Suite 2030', _href: '/ai-business-intelligence-suite-2030'},
      {_name: 'AI Customer Experience Platform 2030', _href: '/ai-customer-experience-platform-2030'},
      {_name: 'AI Marketing Automation Suite 2030', _href: '/ai-marketing-automation-2030'},
      {_name: 'AI HR Management Suite 2030', _href: '/ai-hr-management-suite-2030'}
    ]
  }
];

const _quickLinks = [
  {_name: 'Home', _href: '/'},
  {_name: 'Services', _href: '/services'},
  {_name: 'Solutions', _href: '/solutions'},
  {_name: 'Pricing', _href: '/pricing'},
  {_name: 'Resources', _href: '/resources'},
  {_name: 'Case Studies', _href: '/case-studies'},
  {_name: 'Blog', _href: '/blog'},
  {_name: 'Contact', _href: '/contact'}
];

const _companyInfo = [
  {_name: 'About Us', _href: '/about'},
  {_name: 'Careers', _href: '/careers'},
  {_name: 'Press', _href: '/press'},
  {_name: 'Partners', _href: '/partners'},
  {_name: 'Support', _href: '/support'},
  {_name: 'Status', _href: '/status'}
];

const _socialLinks = [
  {_name: 'LinkedIn', _href: 'https://linkedin.com/company/ziontechgroup', _icon: Linkedin},
  {_name: 'Twitter', _href: 'https://twitter.com/ziontechgroup', _icon: Twitter},
  {_name: 'Facebook', _href: 'https://facebook.com/ziontechgroup', _icon: Facebook},
  {_name: 'Instagram', _href: 'https://instagram.com/ziontechgroup', _icon: Instagram},
  {_name: 'YouTube', _href: 'https://youtube.com/ziontechgroup', _icon: Youtube},
  {_name: 'GitHub', _href: 'https://github.com/ziontechgroup', _icon: Github}
];

const _certifications = [
  'ISO 27001 Certified',
  'SOC 2 Type II Compliant',
  'GDPR Compliant',
  'HIPAA Compliant',
  'PCI DSS Level 1',
  'FedRAMP Authorized'
];

export default function UltraFuturisticFooter2030() {_return (
    <footer className="bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10">
        {_/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-gray-400">2030 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
                Transforming businesses through innovative solutions and intelligent automation.
              </p>

              {_/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{_contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <a href={_contactInfo.website} className="hover:text-purple-400 transition-colors">
                    {_contactInfo.website.replace('https://', _'')}
                  </a>
                </div>
              </div>
            </div>

            {_/* Service Categories */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Our Services</span>
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {_serviceCategories.slice(0, _3).map(_(category, _index) => (_<div key={index} className="space-y-2">
                    <h5 className="text-sm font-medium text-purple-300">{_category.title}</h5>
                    <div className="space-y-1">
                      {_category.services.map((service, _serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={_service.href}
                          className="block text-xs text-gray-400 hover:text-purple-300 transition-colors"
                        >
                          {_service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {_/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h4>
              <div className="space-y-2">
                {_quickLinks.map(_(link, _index) => (
                  <Link
                    key={index}
                    href={_link.href}
                    className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    <span>{_link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <h5 className="text-sm font-medium text-cyan-300">Company</h5>
                {_companyInfo.map(_(link, _index) => (
                  <Link
                    key={index}
                    href={_link.href}
                    className="block text-xs text-gray-400 hover:text-cyan-300 transition-colors"
                  >
                    {_link.name}
                  </Link>
                ))}
              </div>
            </div>

            {_/* Social & Certifications */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-400" />
                <span>Connect & Trust</span>
              </h4>
              
              {_/* Social Links */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300">Follow Us</h5>
                <div className="flex flex-wrap gap-2">
                  {_socialLinks.map(_(social, _index) => (
                    <a
                      key={index}
                      href={_social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/40"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {_/* Certifications */}
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-green-300 flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {_certifications.map(_(cert, _index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{_cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {_/* Bottom Bar */}
        <div className="border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Made with passion for innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>5.0/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

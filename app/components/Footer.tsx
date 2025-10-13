import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing', icon: RocketLaunchIcon },
    { name: 'AI Neural Interface', href: '/ai-neural-interface', icon: CpuChipIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: ChartBarIcon },
    { name: 'Micro SaaS', href: '/micro-saas', icon: GlobeAltIcon },
    { name: 'AI Content Studio', href: '/micro-saas-ai-content-studio', icon: CpuChipIcon },
    { name: 'AI Workflow Automation', href: '/micro-saas-ai-workflow-automation', icon: ChartBarIcon },
    { name: '5G Solutions', href: '/5g-solutions', icon: GlobeAltIcon },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
    { name: 'Community', href: '/community' },
    { name: 'Status', href: '/status' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyber relative overflow-hidden hologram-effect">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      </div>
      
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group quantum-float">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform cyber-pulse">
                <span className="text-white font-bold text-xl neon-text">Z</span>
              </div>
              <span className="text-white font-bold text-2xl text-hologram">Zion Tech Group</span>
            </Link>
            <p className="text-cyber mb-6 max-w-md leading-relaxed">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age with real, proven results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-cyber quantum-float">
                <PhoneIcon className="w-5 h-5 text-purple-400 neural-pulse" />
                <span className="neon-text">+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-cyber quantum-float" style={{animationDelay: '1s'}}>
                <EnvelopeIcon className="w-5 h-5 text-purple-400 neural-pulse" />
                <span className="neon-text">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-cyber quantum-float" style={{animationDelay: '2s'}}>
                <MapPinIcon className="w-5 h-5 text-purple-400 neural-pulse" />
                <span className="neon-text">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 text-hologram">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={service.name} className="quantum-float" style={{animationDelay: `${index * 0.1}s`}}>
                    <Link 
                      to={service.href}
                      className="text-cyber hover:text-purple-400 transition-colors flex items-center group"
                    >
                      <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:neon-text transition-all">{service.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 text-hologram">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={item.name} className="quantum-float" style={{animationDelay: `${index * 0.1}s`}}>
                  <Link 
                    to={item.href}
                    className="text-cyber hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:neon-text transition-all">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 text-hologram">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={resource.name} className="quantum-float" style={{animationDelay: `${index * 0.1}s`}}>
                  <Link 
                    to={resource.href}
                    className="text-cyber hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:neon-text transition-all">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-white font-bold text-lg mb-6 text-hologram">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <li key={item.name} className="quantum-float" style={{animationDelay: `${index * 0.1}s`}}>
                  <Link 
                    to={item.href}
                    className="text-cyber hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:neon-text transition-all">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-cyber">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 text-hologram">Stay Updated</h3>
            <p className="text-cyber mb-6 text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border-cyber rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cyber-pulse"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold cyber-pulse">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyber flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-cyber mb-4 md:mb-0 quantum-float">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-400 neural-pulse" />
            <span className="neon-text">by Zion Tech Group</span>
          </div>
          <p className="text-cyber text-sm neon-text">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
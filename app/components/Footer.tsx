import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SignalIcon,
  CogIcon,
  UserGroupIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions', icon: CpuChipIcon },
    { name: 'IT Solutions', href: '/it-solutions', icon: CogIcon },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions', icon: GlobeAltIcon },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: ShieldCheckIcon },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', icon: CloudIcon },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: RocketLaunchIcon },
    { name: '5G Solutions', href: '/5g-solutions', icon: SignalIcon }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Demo', href: '/demo' },
    { name: 'Documentation', href: '/docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '🐙' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: '📘' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform cyber-glow">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                Leading provider of advanced AI and IT solutions, micro SaaS platforms, 
                cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <PhoneIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <EnvelopeIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <MapPinIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="group-hover:text-white transition-colors">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a,
  key ={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <span className="text-2xl group-hover:text-purple-400 transition-colors">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <service.icon className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors" />
                      <span className="group-hover:text-purple-400 transition-colors">{service.name}</span>
                      <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="group-hover:text-cyan-400 transition-colors">{item.name}</span>
                      <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="group-hover:text-pink-400 transition-colors">{item.name}</span>
                      <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-white font-semibold text-sm mb-3 text-gray-300">Legal</h4>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-500 hover:text-white transition-all duration-300 text-sm group"
                    >
                      <span className="group-hover:text-pink-400 transition-colors">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-slate-700/50">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Get the latest insights on AI and IT trends delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input,
  type ="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 neon-button">
                  Subscribe
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <HeartIcon className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by Zion Tech Group</span>
            </div>
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {legal.map((link) => (
                <Link,
  key ={link.name}
                  to={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm hover:scale-105"
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
};

export default Footer;
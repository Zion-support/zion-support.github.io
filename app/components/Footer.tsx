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
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
  UserGroupIcon
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
    { name: 'About Us', href: '/about', icon: UserGroupIcon },
    { name: 'Solutions', href: '/solutions', icon: CogIcon },
    { name: 'Pricing', href: '/pricing', icon: CurrencyDollarIcon },
    { name: 'Blog', href: '/blog', icon: DocumentTextIcon },
    { name: 'Careers', href: '/careers', icon: UserGroupIcon },
    { name: 'Case Studies', href: '/case-studies', icon: DocumentTextIcon }
  ];

  const support = [
    { name: 'Contact', href: '/contact', icon: PhoneIcon },
    { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon },
    { name: 'Tutorials', href: '/tutorials', icon: AcademicCapIcon },
    { name: 'Demo', href: '/demo', icon: PlayIcon },
    { name: 'Documentation', href: '/docs', icon: DocumentTextIcon }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 matrix-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center neon-border">
                <span className="text-white font-bold text-xl cyber-text">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <PhoneIcon className="w-4 h-4 text-purple-400" />
                <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <EnvelopeIcon className="w-4 h-4 text-purple-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPinIcon className="w-4 h-4 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover-glow"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                    <span className="text-xs font-bold">
                      {social.icon === 'linkedin' && 'in'}
                      {social.icon === 'twitter' && 't'}
                      {social.icon === 'github' && 'g'}
                    </span>
                  </div>
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
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <service.icon className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                    {service.name}
                    <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <item.icon className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                    {item.name}
                    <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group text-sm"
                  >
                    <item.icon className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                    {item.name}
                    <ArrowRightIcon className="w-3 h-3 ml-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white font-semibold text-sm mb-3 text-gray-400">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
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
            <p className="text-gray-300 mb-6 text-sm">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="neon-button px-8 py-3 rounded-lg font-semibold flex items-center justify-center">
                Subscribe
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span className="text-sm">Made with</span>
            <HeartIcon className="w-4 h-4 text-red-400" />
            <span className="text-sm">by Zion Tech Group</span>
          </div>
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status', href: '/status' },
    { name: 'Community', href: '/community' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'GitHub', href: '#', icon: 'github' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Leading provider of AI and IT solutions, transforming businesses through 
                innovative technology and expert consulting services.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <PhoneIcon className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <EnvelopeIcon className="w-5 h-5 mr-3" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPinIcon className="w-5 h-5 mr-3" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.href} 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href} 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Get the latest news and updates from Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                      aria-label={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-6 h-6 bg-gray-600 rounded"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-4 pt-4 border-t border-slate-700/30">
              <div className="flex flex-wrap justify-center gap-6">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Cloud Solutions', href: '/cloud-infrastructure' },
      { name: 'Digital Transformation', href: '/digital-transformation' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: '5G Solutions', href: '/5g-solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Pricing', href: '/pricing' }
    ],
    support: [
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Demo', href: '/demo' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 block">
              Zion Tech Group
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through cutting-edge AI and IT solutions. 
              We help companies innovate and grow in the digital age with our comprehensive suite of micro SAAS services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-purple-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest insights on AI and IT trends, new micro SAAS services, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {footerLinks.legal.map((link) => (
              <Link key={link.name}
                to={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
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
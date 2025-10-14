'use client';
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Linkedin, 
  Twitter, 
  Github,
  Clock,
  Brain,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Solutions', href: '/ai-services' },
      { name: 'IT Services', href: '/services' },
      { name: '5G Solutions', href: '/5g-solutions' },
      { name: 'Micro SAAS', href: '/micro-saas' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Support', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Zion Tech Group
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for modern businesses.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-purple-400" />
                <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-purple-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
=======
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {}
  return (
    <div>Page content</div>
  );
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className="grid md:grid-cols-4 gap-8">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
          {/* Company Info */}
          <div className="md:col-span-2">
      </div>
      </div>
      </div>
      </div>
      </div>
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, 
              automation, and digital innovation.
            </p>
            <div className="flex space-x-4">
      </div>
      </div>
      </div>
      </div>
      </div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
              <div className="flex items-center space-x-3">
      </div>
      </div>
      </div>
      </div>
      </div>
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@ziontech.com</span>
              </div>
              <div className="flex items-center space-x-3">
      </div>
      </div>
      </div>
      </div>
      </div>
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
      </div>
      </div>
      </div>
      </div>
      </div>
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">San Francisco, CA</span>
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {}
  return (
    <div>Page content</div>
  );
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      </div>
      </div>
      </div>
      </div>
      </div>
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
              <li><Link to="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
              <li><Link to="/cloud-services" className="text-gray-400 hover:text-white">Cloud Services</Link></li>
            </ul>
          </div>
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
            </ul>
          </div>
          <div>
      </div>
      </div>
      </div>
      </div>
      </div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
      </div>
      </div>
      </div>
      </div>
      </div>
              <div className="flex items-center text-gray-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                <Mail className="w-4 h-4 mr-2" />
                contact@ziontech.com
              </div>
              <div className="flex items-center text-gray-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
      </div>
      </div>
      </div>
      </div>
      </div>
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      </div>
      </div>
      </div>
      </div>
      </div>
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      </div>
      </div>
      </div>
      </div>;
      </div>;
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
        </div>
      </div>
    </footer>
  );
};

export default Footer;
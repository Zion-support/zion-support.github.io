import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'AI Development', href: '/services#ai' },
      { label: 'Web Development', href: '/services#web' },
      { label: 'Mobile Development', href: '/services#mobile' },
      { label: 'Cloud Solutions', href: '/services#cloud' },
      { label: 'Cybersecurity', href: '/services#security' },
      { label: 'Data Analytics', href: '/services#analytics' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Pricing', href: '/pricing' }
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Help Center', href: '/help' },
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/api' },
      { label: 'Status', href: '/status' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' }
    ]
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <p className="text-zion-gray-light mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. 
              We deliver innovative AI, IT, and Micro SaaS solutions that drive growth and transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-zion-gray-light">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-blue-light mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zion-gray-light text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                className="text-zion-gray-light hover:text-zion-cyan transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
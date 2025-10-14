import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'GitHub', href: '#', icon: 'github' }
  ];

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {service.name}
                    <ArrowRightIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowRightIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {item.name}
                    <ArrowRightIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center">
              Made with <HeartIcon className="w-4 h-4 text-red-500 mx-1" /> by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
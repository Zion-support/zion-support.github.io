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
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'Demo', href: '/demo' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'News', href: '/news' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services that drive innovation and growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-3 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center">
              Made with <HeartIcon className="w-4 h-4 mx-1 text-red-500" /> by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
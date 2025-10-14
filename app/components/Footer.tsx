import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Pricing', href: '/pricing' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <GlobeAltIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI solutions, cloud infrastructure, and digital transformation services. 
              Empowering businesses with cutting-edge technology.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-3 text-purple-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3 text-purple-400 mt-1" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
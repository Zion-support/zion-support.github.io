import React from 'react';
import { 
  CpuChipIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Consulting', href: '/consulting' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Documentation', href: '/api-docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech' },
    { name: 'Twitter', href: 'https://twitter.com/ziontech' },
    { name: 'GitHub', href: 'https://github.com/zion-tech' },
    { name: 'YouTube', href: 'https://youtube.com/ziontech' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CpuChipIcon className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech</span>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI and IT solutions, empowering businesses 
              to transform and scale through innovative technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <EnvelopeIcon className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">contact@ziontech.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <PhoneIcon className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPinIcon className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Made with love */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <HeartIcon className="h-4 w-4 text-red-400" />
            <span>by Zion Tech Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD

import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Building2
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'AI Solutions', href: '/services/ai-solutions' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
  ];

  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' },
    { name: 'CRM Systems', href: '/solutions/crm' },
    { name: 'Data Analytics', href: '/solutions/analytics' },
    { name: 'Automation', href: '/solutions/automation' },

=======
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(),
  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const company = [
    { name: 'About Us', href: '/about' },
<<<<<<< HEAD

    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status', href: '/status' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },

=======
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services for modern businesses.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Delaware, USA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">

=======
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform their digital presence;
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
<<<<<<< HEAD



=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
<<<<<<< HEAD

                    className="text-gray-400 hover:text-white transition-colors"

=======
                    className="text-gray-300 hover:text-blue-400 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD


          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
=======
          {/* Company */}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">

              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
<<<<<<< HEAD

                    className="text-gray-400 hover:text-white transition-colors"
=======
                    className="text-gray-300 hover:text-blue-400 transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD

            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"

                  >
                    {item.name}
=======
          </div>
          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy

=======
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+1-555-123-4567" className="hover:text-blue-400">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md: mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm">
                Sitemap
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD

  );

=======
  ),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
};

export default Footer;

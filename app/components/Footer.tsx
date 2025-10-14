import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceLinks = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cloud Services', href: '/cloud-services' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">""""
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">""""
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">"
          {/* Company */"
          <div>""""
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>""""
            <ul className="space-y-2">
              {companyLinks.map((link) => ("
                <li key={link.name}>""
                  <Link """
                    to={link.href}"""">
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""">"
                  >""""
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>"
"
          {/* Services */"
          <div>""""
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>""""
            <ul className="space-y-2">
              {serviceLinks.map((link) => ("
                <li key={link.name}>""
                  <Link"""
                    to={link.href}"""">
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""">"
                  >""""
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>"
"
          {/* Resources */"
          <div>""""
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>""""
            <ul className="space-y-2">
              {resourceLinks.map((link) => ("
                <li key={link.name}>""
                  <Link"""
                    to={link.href}"""">
                    className="text-gray-400 hover:text-white transition-colors flex items-center group""">"
                  >""""
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>"
"
          {/* Contact */"
          <div>""""
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>""""
            <div className="space-y-3">""""
              <div className="flex items-center text-gray-400">""""
                <Mail className="w-4 h-4 mr-2" />""
                contact@ziontech.com"""
              </div>""""
              <div className="flex items-center text-gray-400">""""
                <Phone className="w-4 h-4 mr-2" />""
                +1 (555) 123-4567"""
              </div>""""
              <div className="flex items-center text-gray-400">""""
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>"
          </div>"
        "
""""
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>"
  );""
};"""
"""
export default Footer;"""

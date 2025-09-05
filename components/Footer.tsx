import React from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI Content Creation', href: '/ai-services' },
    { name: 'AI Email Automation', href: '/ai-services' },
    { name: 'AI Business Intelligence', href: '/ai-services' },
    { name: 'AI Customer Support', href: '/ai-services' }
  ],
  'IT Services': [
    { name: 'Cloud Migration', href: '/it-services' },
    { name: 'Cybersecurity', href: '/it-services' },
    { name: 'DevOps', href: '/it-services' },
    { name: 'Data Analytics', href: '/it-services' }
  ],
  'Micro SaaS': [
    { name: 'AI Invoice Generator', href: '/micro-saas' },
    { name: 'Project Management', href: '/micro-saas' },
    { name: 'CRM Solutions', href: '/micro-saas' },
    { name: 'Analytics Dashboard', href: '/micro-saas' }
  ]
};

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, serviceList]) => (
                <div key={category}>
                  <h4 className="font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {serviceList.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300 text-sm">123 Technology Drive, Innovation City, IC 12345</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Transforming businesses with AI and technology solutions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
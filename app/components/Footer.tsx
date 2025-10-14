import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const services = [
  { name: 'AI Solutions', href: '/ai-solutions' },
  { name: 'IT Solutions', href: '/it-solutions' },
  { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
  { name: 'Digital Transformation', href: '/digital-transformation' }
];

const Footer: React.FC = () => {
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Documentation', href: '/docs' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  return (
    <>
      <footer className="bg-slate-900 text-white">
      <div className="container mx-autopx-4py-16">
        <div className="grid md:grid-cols-2lg:grid-cols-4gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-boldbg-gradient-to-rfrom-purple-400to-cyan-400bg-clip-texttext-transparent">
              Zion Tech Group
            </h3>
            <p className="text-gray-300">
              Leading provider of AI solutions, cybersecurity, and IT services for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whitetransition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semiboldmb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-whitetransition-colorsflexitems-center"
                  >
                    <ArrowRight className="w-4 h-4mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semiboldmb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-whitetransition-colorsflexitems-center"
                  >
                    <ArrowRight className="w-4 h-4mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semiboldmb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-whitetransition-colorsflexitems-center"
                  >
                    <ArrowRight className="w-4 h-4mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700mt-12pt-8">
          <div className="grid md:grid-cols-3gap-8">
            <div className="flex items-centerspace-x-3">
              <Mail className="w-5 h-5text-purple-400" />
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-centerspace-x-3">
              <Phone className="w-5 h-5text-purple-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-centerspace-x-3">
              <MapPin className="w-5 h-5text-purple-400" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700mt-8pt-8flexflex-colmd:flex-rowjustify-betweenitems-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6mt-4md:mt-0">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-whitetext-smtransition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
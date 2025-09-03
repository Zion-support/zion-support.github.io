import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Platform Engineering', href: '/services/it/platform-engineering' },
    { name: 'Cybersecurity', href: '/services/it/cybersecurity' },
  ];

  const products = [
    { name: 'Revenue AI Copilot', href: '/products' },
    { name: 'Cloud FinOps Toolkit', href: '/products' },
    { name: 'SOC-as-a-Service', href: '/products' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI, Cloud and Security services that drive measurable business outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link href={product.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">+1 302 464 0950</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy"><span className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</span></Link>
              <Link href="/terms"><span className="text-gray-400 hover:text-white text-sm transition-colors">Terms</span></Link>
              <Link href="/sitemap"><span className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</span></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
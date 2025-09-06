import React from 'react';
import Link from 'next/link';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Services', href: '/services/cloud-services' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Development', href: '/services/mobile-development' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const products = [
    { name: 'AI Solutions', href: '/products/ai-solutions' },
    { name: 'Cloud Platforms', href: '/products/cloud-platforms' },
    { name: 'Analytics Tools', href: '/products/analytics-tools' },
    { name: 'Security Suite', href: '/products/security-suite' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Contact Support', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
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
                  <Link href={product.href} className="text-gray-300 hover:text-white transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
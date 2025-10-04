import React from 'react';

const EnhancedFooter: React.FC = () => {
  const current_year = new Date().getFullYear();
  
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
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/talent' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {product.name}
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Zion Tech Group</p>
              <p>Advanced AI & IT Solutions</p>
              <p>Email: info@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {current_year} Zion Tech Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
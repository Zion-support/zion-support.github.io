import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Team', path: '/team' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Enterprise', path: '/enterprise' },
  ];

  const aiServices = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Healthcare', path: '/ai-healthcare' },
    { name: 'AI Fintech', path: '/ai-fintech' },
  ];

  const technologyServices = [
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SAAS', path: '/micro-saas' },
    { name: 'Quantum Computing', path: '/quantum-computing' },
    { name: 'Autonomous Systems', path: '/autonomous-systems' },
    { name: 'Business Intelligence', path: '/business-intelligence' },
    { name: 'Blockchain & Web3', path: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Robotics', path: '/robotics' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-lg text-gray-600 mb-12">
            Find all pages and services available on our website.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Pages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <a
                      href={page.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h2>
              <ul className="space-y-2">
                {aiServices.map((service) => (
                  <li key={service.path}>
                    <a
                      href={service.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Services</h2>
              <ul className="space-y-2">
                {technologyServices.map((service) => (
                  <li key={service.path}>
                    <a
                      href={service.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal</h2>
              <ul className="space-y-2">
                {legalPages.map((page) => (
                  <li key={page.path}>
                    <a
                      href={page.path}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">
                  Phone: +1 (302) 600-9898<br />
                  Email: contact@ziontechgroup.com<br />
                  Website: ziontechgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;
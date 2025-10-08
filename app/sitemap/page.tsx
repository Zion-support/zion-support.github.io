import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const pages = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Team', path: '/team' },
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'Case Studies', path: '/case-studies' }
      ]
    },
    {
      category: 'Services',
      links: [
        { name: 'All Services', path: '/services' },
        { name: 'AI Services', path: '/ai-services' },
        { name: 'IT Services', path: '/it-services' },
        { name: 'Micro SAAS Solutions', path: '/micro-saas' },
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Business Intelligence', path: '/business-intelligence' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'Advertising Services', path: '/services-advertising' }
      ]
    },
    {
      category: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Technical Guides', path: '/guides' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find all pages and resources on our website organized by category
          </p>
        </header>

        {/* Sitemap Content */}
        <div className="max-w-4xl mx-auto">
          {pages.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to={link.path}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <span className="text-gray-700 hover:text-indigo-600 font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our team for personalized assistance and custom solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
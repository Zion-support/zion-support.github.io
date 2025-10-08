import React from 'react';

const SitemapPage: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { path: '/about', title: 'About Us', description: 'Learn about our mission and expertise' },
    { path: '/services', title: 'All Services', description: 'Comprehensive AI, IT, and micro SAAS solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Affordable, powerful AI-driven tools for modern businesses' },
    { path: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'Revolutionary AI-powered marketing automation' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent automation of business processes' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'Cutting-edge AI solutions for medical applications' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'Revolutionary AI-powered financial services' },
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT solutions and infrastructure' },
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing capabilities' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven insights and analytics' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized applications and smart contracts' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Connected devices and edge analytics' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security services and threat detection' },
    { path: '/services-advertising', title: 'AI Advertising', description: 'AI-powered advertising and marketing solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client implementations' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Advanced AI and IT solutions for large organizations' },
    { path: '/team', title: 'Our Team', description: 'Meet the experts behind our innovative solutions' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team of experts' },
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights and trends in AI and technology' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive guides and documentation' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for our services' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600">
            Navigate through all pages on our website
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <a 
                    href={page.path} 
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {page.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {page.description}
                </p>
                <p className="text-xs text-gray-500">
                  {page.path}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Finding Something?
          </h2>
          <p className="text-gray-600 mb-6">
            If you can't find what you're looking for, feel free to contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Contact Us
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
            >
              Call Us: (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
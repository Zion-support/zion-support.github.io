import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const SitemapPage: React.FC = () => {
  const pages = [
    { url: '/', title: 'Home', description: 'Main homepage' },
    { url: '/about', title: 'About', description: 'About Zion Tech Group' },
    { url: '/services', title: 'Services', description: 'All our services' },
    { url: '/contact', title: 'Contact', description: 'Contact us' },
    { url: '/team', title: 'Team', description: 'Our team' },
    { url: '/enterprise', title: 'Enterprise', description: 'Enterprise solutions' },
    { url: '/case-studies', title: 'Case Studies', description: 'Success stories' },
    { url: '/blog', title: 'Blog', description: 'Latest insights and news' },
    { url: '/guides', title: 'Guides', description: 'Technical implementation guides' },
    { url: '/privacy', title: 'Privacy Policy', description: 'Privacy policy' },
    { url: '/terms', title: 'Terms of Service', description: 'Terms of service' },
    
    // AI Services
    { url: '/ai-services', title: 'AI Services', description: 'Artificial Intelligence solutions' },
    { url: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing solutions' },
    { url: '/ai-automation', title: 'AI Automation', description: 'Intelligent automation services' },
    { url: '/ai-healthcare', title: 'AI Healthcare', description: 'Healthcare AI solutions' },
    { url: '/ai-fintech', title: 'AI Fintech', description: 'Financial technology AI' },
    { url: '/ai-data-analytics', title: 'AI Data Analytics', description: 'Advanced data analytics' },
    { url: '/ai-cybersecurity', title: 'AI Cybersecurity', description: 'AI-powered security solutions' },
    { url: '/ai-workflow-automation', title: 'AI Workflow Automation', description: 'Workflow automation with AI' },
    { url: '/ai-cloud-infrastructure', title: 'AI Cloud Infrastructure', description: 'Cloud infrastructure solutions' },
    { url: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions', description: 'E-commerce AI solutions' },
    { url: '/ai-mobile-app-development', title: 'AI Mobile App Development', description: 'Mobile app development with AI' },
    
    // Other Services
    { url: '/it-services', title: 'IT Services', description: 'Information technology services' },
    { url: '/micro-saas', title: 'Micro SAAS', description: 'Micro software as a service solutions' },
    { url: '/quantum-computing', title: 'Quantum Computing', description: 'Quantum computing solutions' },
    { url: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing systems' },
    { url: '/business-intelligence', title: 'Business Intelligence', description: 'BI and analytics solutions' },
    { url: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Blockchain and Web3 solutions' },
    { url: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things solutions' },
    { url: '/cybersecurity', title: 'Cybersecurity', description: 'Cybersecurity services' },
    { url: '/services-advertising', title: 'Advertising Services', description: 'AI-powered advertising' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find all pages and content on the Zion Tech Group website
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">All Pages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pages.map((page, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <a
                    href={page.url}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors"
                  >
                    {page.title}
                  </a>
                  <p className="text-gray-400 text-sm mt-1">{page.description}</p>
                  <p className="text-gray-500 text-xs mt-1">https://ziontechgroup.com{page.url}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="cyber-card hologram-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact our team for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Call: (302) 464-0950
                </a>
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
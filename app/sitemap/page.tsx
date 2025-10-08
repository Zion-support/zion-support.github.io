import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home', description: 'Main landing page' },
    { path: '/about', title: 'About Us', description: 'Learn about Zion Tech Group' },
    { path: '/services', title: 'All Services', description: 'Comprehensive list of our services' },
    { path: '/ai-services', title: 'AI Services', description: 'Artificial Intelligence solutions' },
    { path: '/it-services', title: 'IT Services', description: 'Information Technology services' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Small-scale software solutions' },
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum solutions' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing systems' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized technology solutions' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Security and protection services' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data analytics and insights' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and examples' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Large-scale enterprise services' },
    { path: '/team', title: 'Our Team', description: 'Meet our expert team' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with us' },
    { path: '/blog', title: 'Blog & Insights', description: 'Latest articles and insights' },
    { path: '/guides', title: 'Technical Guides', description: 'Implementation guides and tutorials' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Data protection and privacy' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions' },
  ];

  const blogPages = [
    { path: '/blog/ai-2025-2026-mega-trends-breakthrough', title: 'AI 2025-2026 Mega Trends Breakthrough' },
    { path: '/blog/ai-2025-january-advanced-ai-revolution', title: 'AI 2025 January Advanced AI Revolution' },
    { path: '/blog/ai-2025-january-cutting-edge-trends-breakthrough', title: 'AI 2025 January Cutting Edge Trends' },
    { path: '/blog/ai-2025-march-autonomous-enterprise-operations-revolution', title: 'AI 2025 March Autonomous Enterprise Operations' },
    { path: '/blog/ai-2026-adaptive-neural-architectures-breakthrough', title: 'AI 2026 Adaptive Neural Architectures' },
    { path: '/blog/ai-2026-advanced-neural-optimization-revolution', title: 'AI 2026 Advanced Neural Optimization' },
    { path: '/blog/ai-2026-autonomous-agent-factories', title: 'AI 2026 Autonomous Agent Factories' },
    { path: '/blog/ai-2026-autonomous-business-intelligence-breakthrough', title: 'AI 2026 Autonomous Business Intelligence' },
    { path: '/blog/ai-2026-consensus-intelligence-breakthrough', title: 'AI 2026 Consensus Intelligence Breakthrough' },
    { path: '/blog/ai-2026-enterprise-automation-revolutionary-breakthrough', title: 'AI 2026 Enterprise Automation Revolutionary' },
    { path: '/blog/ai-2026-february-mega-breakthrough-revolution', title: 'AI 2026 February Mega Breakthrough' },
    { path: '/blog/ai-2026-hyperconscious-computing-revolution', title: 'AI 2026 Hyperconscious Computing Revolution' },
    { path: '/blog/ai-enterprise-transformation-2025', title: 'AI Enterprise Transformation 2025' },
    { path: '/blog/ai-enterprise-transformation-ultimate-guide-2025', title: 'AI Enterprise Transformation Ultimate Guide 2025' },
    { path: '/blog/ai-innovation-labs-product-development-2025', title: 'AI Innovation Labs Product Development 2025' },
    { path: '/blog/ai-powered-autonomous-business-processes-2026', title: 'AI Powered Autonomous Business Processes 2026' },
    { path: '/blog/ai-trends-2026-future-enterprise-transformation', title: 'AI Trends 2026 Future Enterprise Transformation' },
  ];

  const guidePages = [
    { path: '/guides/ai-2026-implementation-roadmap', title: 'AI 2026 Implementation Roadmap' },
    { path: '/guides/ai-2027-implementation-roadmap', title: 'AI 2027 Implementation Roadmap' },
    { path: '/guides/autonomous-business-processes-implementation-guide-2026', title: 'Autonomous Business Processes Implementation Guide 2026' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Find all pages and content on the Zion Tech Group website
          </p>

          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pages.map((page) => (
                <div key={page.path} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={page.path} 
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-lg"
                  >
                    {page.title}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPages.map((page) => (
                <div key={page.path} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={page.path} 
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    {page.title}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Guide Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {guidePages.map((page) => (
                <div key={page.path} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={page.path} 
                    className="text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    {page.title}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* External Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href="https://github.com/ziontechgroup" 
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
                <p className="text-gray-600 text-sm mt-1">Our open source projects and code</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href="https://docs.ziontechgroup.com" 
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
                <p className="text-gray-600 text-sm mt-1">Technical documentation and API references</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href="https://linkedin.com/company/ziontechgroup" 
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <p className="text-gray-600 text-sm mt-1">Follow us on LinkedIn for updates</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <a 
                  href="https://twitter.com/ziontechgroup" 
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <p className="text-gray-600 text-sm mt-1">Follow us on Twitter for news and updates</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;

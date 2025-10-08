import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const pages = [
    { url: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { url: '/about', title: 'About Us', description: 'Learn about our mission and expertise' },
    { url: '/services', title: 'All Services', description: 'Comprehensive AI and IT solutions' },
    { url: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
    { url: '/it-services', title: 'IT Services', description: 'Comprehensive IT support and solutions' },
    { url: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Custom software-as-a-service solutions' },
    { url: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing capabilities' },
    { url: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { url: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized technology solutions' },
    { url: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security solutions and protection' },
    { url: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven insights and analytics' },
    { url: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge computing solutions' },
    { url: '/enterprise', title: 'Enterprise Solutions', description: 'Large-scale enterprise technology solutions' },
    { url: '/case-studies', title: 'Case Studies', description: 'Success stories and client implementations' },
    { url: '/team', title: 'Our Team', description: 'Meet our expert team members' },
    { url: '/contact', title: 'Contact Us', description: 'Get in touch with our team' },
    { url: '/blog', title: 'Blog & Insights', description: 'Latest insights and technology trends' },
    { url: '/guides', title: 'Technical Guides', description: 'Comprehensive technical documentation' },
    { url: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection' },
    { url: '/terms', title: 'Terms of Service', description: 'Terms and conditions of service' }
  ];

  const blogPosts = [
    { url: '/blog/ai-2026-enterprise-breakthrough', title: 'AI 2026 Enterprise Breakthrough' },
    { url: '/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough', title: 'AI 2026 Autonomous Enterprise Automation' },
    { url: '/blog/ai-2026-consensus-intelligence-breakthrough', title: 'AI 2026 Consensus Intelligence Breakthrough' },
    { url: '/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough', title: 'AI 2026 Autonomous Business Intelligence' },
    { url: '/blog/ai-powered-autonomous-business-processes-2026', title: 'AI-Powered Autonomous Business Processes 2026' },
    { url: '/blog/ai-2026-autonomous-agent-factories', title: 'AI 2026 Autonomous Agent Factories' },
    { url: '/blog/ai-2026-february-mega-breakthrough-revolution', title: 'AI 2026 February Mega Breakthrough Revolution' },
    { url: '/blog/ai-2026-hyperconscious-computing-revolution', title: 'AI 2026 Hyperconscious Computing Revolution' },
    { url: '/blog/ai-enterprise-transformation-ultimate-guide-2025', title: 'AI Enterprise Transformation Ultimate Guide 2025' },
    { url: '/blog/ai-2026-february-ultimate-consciousness-breakthrough', title: 'AI 2026 February Ultimate Consciousness Breakthrough' }
  ];

  const guides = [
    { url: '/guides/ai-2027-implementation-roadmap', title: 'AI 2027 Implementation Roadmap' },
    { url: '/guides/autonomous-business-processes-implementation-guide-2026', title: 'Autonomous Business Processes Implementation Guide 2026' },
    { url: '/guides/ai-2026-implementation-roadmap', title: 'AI 2026 Implementation Roadmap' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-lg text-gray-600 mb-12">
            Find all pages and content on the Zion Tech Group website. Use this sitemap to navigate our comprehensive AI and IT solutions.
          </p>

          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pages.map((page) => (
                <div key={page.url} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={page.url} 
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {page.title}
                  </a>
                  <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Posts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts.map((post) => (
                <div key={post.url} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={post.url} 
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {post.title}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Guides */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {guides.map((guide) => (
                <div key={guide.url} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <a 
                    href={guide.url} 
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {guide.title}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h2>
            <p className="text-gray-600 mb-4">
              If you can't find what you're looking for, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
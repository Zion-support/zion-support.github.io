import React from 'react';
<<<<<<< HEAD:app/guides/page.tsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GuidesPage: React.FC = () => {
  const guides = [
    {
<<<<<<< HEAD:app/guides/page.tsx
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      url: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027',
      url: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      url: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Process Automation'
    }
  ];

  return (
<<<<<<< HEAD:app/guides/page.tsx
    <>
      <Helmet>
        <title>Technical Guides | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive technical guides for AI implementation, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI implementation guide, enterprise automation guide, technical documentation, AI roadmap"
        />
        <meta property="og:title" content="Technical Guides | Zion Tech Group" />
        <meta
          property="og:description"
          content="Comprehensive technical guides for AI implementation, enterprise automation, and digital transformation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/guides" />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Technical Guides</h1>
            <p className="text-xl text-gray-300">
              Comprehensive guides for AI implementation and enterprise automation
            </p>
          </header>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <Link
                    to={guide.url}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Read Guide
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Need Custom Guidance?</h2>
                <p className="text-gray-300 mb-6">
                  Our experts can create custom implementation guides tailored to your specific needs.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidesPage;
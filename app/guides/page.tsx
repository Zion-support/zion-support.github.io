import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GuidesPage: React.FC = () => {
  const guides = [
    {
      title: 'AI 2026 Implementation Roadmap',
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026',
      link: '/guides/ai-2026-implementation-roadmap',
      category: 'AI Implementation',
      readTime: '15 min read'
    },
    {
      title: 'AI 2027 Implementation Roadmap',
      description: 'Advanced roadmap for AI implementation strategies in 2027 and beyond',
      link: '/guides/ai-2027-implementation-roadmap',
      category: 'AI Implementation',
      readTime: '20 min read'
    },
    {
      title: 'Autonomous Business Processes Implementation Guide 2026',
      description: 'Step-by-step guide to implementing autonomous business processes',
      link: '/guides/autonomous-business-processes-implementation-guide-2026',
      category: 'Business Automation',
      readTime: '25 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Technical Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides to help you implement cutting-edge AI and technology solutions in your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <article key={index} className="cyber-card hologram-card">
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {guide.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{guide.readTime}</span>
                  <Link
                    to={guide.link}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Custom Implementation Guidance?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert team can provide personalized guidance for your specific AI implementation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button"
              >
                Get Expert Consultation
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
      </main>

      <Footer />
    </div>
  );
};

export default GuidesPage;
import React from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  color: string;
  href: string;
}

export default function ContentShowcase() {
  const featuredContent: ContentItem[] = [
    {
      id: 'ai-revolution-2026',
      title: 'AI Revolution 2026: The Next Frontier of Enterprise Intelligence',
      excerpt: 'Discover autonomous AI agents, neural interfaces, and predictive intelligence systems achieving 300% productivity gains.',
      category: 'Featured Article',
      readTime: '25 min read',
      image: '🚀',
      color: 'red',
      href: '/blog/ai-revolution-2026-next-frontier'
    },
    {
      id: 'quantum-ai-breakthrough',
      title: 'Quantum AI Breakthrough 2026: Solving Impossible Problems in Seconds',
      excerpt: 'Explore quantum-enhanced AI delivering 500x faster results and revolutionizing computational capabilities.',
      category: 'Breakthrough',
      readTime: '25 min read',
      image: '⚛️',
      color: 'purple',
      href: '/blog/quantum-ai-breakthrough-2026'
    },
    {
      id: 'manufacturing-success',
      title: 'Global Manufacturing AI Transformation: $50M Savings & 95% Efficiency',
      excerpt: 'See how a Fortune 500 manufacturer achieved $50M annual savings and 95% efficiency improvements.',
      category: 'Success Story',
      readTime: '15 min read',
      image: '🏭',
      color: 'green',
      href: '/case-studies/global-manufacturing-ai-transformation'
    },
    {
      id: 'ai-value-stream-analytics-2026',
      title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
      excerpt: 'Tie AI cost, latency, and quality to business value with end-to-end tracing.',
      category: 'Analytics',
      readTime: '9 min read',
      image: '📈',
      color: 'red',
      href: '/blog/ai-value-stream-analytics-2026'
    },
    {
      id: 'ai-trustworthy-agents-2026',
      title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
      excerpt: 'Deploy trustworthy AI agents with guardrails, approvals, and end-to-end observability.',
      category: 'Autonomous AI',
      readTime: '11 min read',
      image: '🛡️',
      color: 'green',
      href: '/blog/ai-trustworthy-agents-2026'
    }
  ];

interface ContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showMetrics?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

  

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI insights, breakthrough technologies, and success stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.color === 'red' ? 'bg-red-100 text-red-800' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                
                <div className="text-4xl mb-4">{item.image}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/content-hub"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}
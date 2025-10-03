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
    <section className="text-left">
      <div className="text-left">
        <div className="text-left">
          <h2 className="text-left">
            Featured Content
          </h2>
          <p className="text-left">
            Explore our latest AI insights, breakthrough technologies, and success stories
          </p>
        </div>
        
        <div className="text-left">
          {featuredContent.map((item) => (
            <Link key={item.id} href={item.href} className="text-left">
              <div className="text-left">
                <div className="text-left">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    item.color === 'red' ? 'bg-red-100 text-red-800' :
                    item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                    item.color === 'green' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.category}
                  <
                  <span className="text-left">{item.readTime}<
                </div>
                
                <div className="text-left">{item.image}</div>
                
                <h3 className="text-left">
                  {item.title}
                </h3>
                
                <p className="text-left">
                  {item.excerpt}
                </p>
                
                <div className="text-left">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-left">
          <Link
            href="/content-hub"
            className="text-left"
          >
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}
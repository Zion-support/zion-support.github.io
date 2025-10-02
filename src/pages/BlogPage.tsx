import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

interface BlogPageProps {
  slug?: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ slug }) => {
  const { slug: urlSlug } = useParams();
  const activeSlug = slug || urlSlug;

  const blogPosts = [
    {
      id: 'january-2026-ai-breakthroughs',
      title: 'Revolutionary AI Breakthroughs: January 2026',
      excerpt: 'Discover the latest AI breakthroughs including Ultra-Autonomous Enterprise solutions, Quantum Consciousness BI, and Neural-Quantum Fusion technology.',
      content: `
        <p>The year 2026 has ushered in unprecedented AI breakthroughs that are reshaping the enterprise landscape. Our latest innovations represent a quantum leap in artificial intelligence capabilities.</p>
        
        <h3>Ultra-Autonomous Enterprise Solutions</h3>
        <p>Our Ultra-Autonomous Enterprise platform has achieved 99.97% autonomous operations, managing complex business processes without human intervention. This represents a $127B value creation opportunity for enterprises worldwide.</p>
        
        <h3>Quantum Consciousness Business Intelligence</h3>
        <p>The integration of quantum computing with consciousness-based AI has created a new paradigm in business intelligence. Our Quantum Consciousness BI platform delivers insights that were previously impossible to obtain.</p>
        
        <h3>Neural-Quantum Fusion Technology</h3>
        <p>By combining neural networks with quantum computing, we've created a fusion technology that processes information at speeds previously thought impossible. This breakthrough is already transforming industries across the globe.</p>
      `,
      author: 'Dr. Sarah Chen',
      date: '2026-01-15',
      category: 'AI Breakthroughs',
      readTime: '8 min read',
      image: '/api/placeholder/800/400',
      tags: ['AI', 'Quantum Computing', 'Enterprise Solutions']
    },
    {
      id: 'october-2025-llm-orchestration',
      title: 'Enterprise LLM Orchestration: A $8.2B Success Story',
      excerpt: 'How our LLM Orchestration platform delivered 1,840% ROI and 73% cost reduction for Fortune 100 companies.',
      content: `
        <p>Enterprise LLM Orchestration has emerged as the cornerstone of modern AI strategy. Our platform has proven its worth across multiple Fortune 100 implementations.</p>
        
        <h3>Proven Results</h3>
        <p>Our LLM Orchestration platform has delivered:</p>
        <ul>
          <li>1,840% ROI across all implementations</li>
          <li>73% reduction in operational costs</li>
          <li>520% increase in productivity</li>
          <li>99.7% accuracy in decision-making</li>
        </ul>
        
        <h3>Fortune 100 Validation</h3>
        <p>Multiple Fortune 100 companies have validated our approach, with one client reporting $2.3B in value creation within the first year of implementation.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2025-10-01',
      category: 'Enterprise AI',
      readTime: '6 min read',
      image: '/api/placeholder/800/400',
      tags: ['LLM', 'Enterprise', 'ROI', 'Automation']
    },
    {
      id: 'cognitive-orchestration-platform',
      title: 'Cognitive Orchestration: Managing 287,000 AI Agents',
      excerpt: 'Our Cognitive Orchestration platform manages 287,000 AI agents across Fortune 50 enterprises with 99.97% autonomous operations.',
      content: `
        <p>Cognitive Orchestration represents the pinnacle of AI management technology. Our platform seamlessly coordinates hundreds of thousands of AI agents across complex enterprise environments.</p>
        
        <h3>Scale and Performance</h3>
        <p>With 287,000 AI agents under management, our platform demonstrates unprecedented scalability. The 99.97% autonomous operation rate ensures minimal human intervention while maintaining optimal performance.</p>
        
        <h3>Fortune 50 Success</h3>
        <p>Our Fortune 50 clients have reported $84.7B in combined value creation, with 47,200% ROI across all implementations.</p>
      `,
      author: 'Dr. Alex Thompson',
      date: '2025-10-01',
      category: 'Cognitive AI',
      readTime: '7 min read',
      image: '/api/placeholder/800/400',
      tags: ['Cognitive AI', 'Orchestration', 'Fortune 50', 'Autonomous']
    }
  ];

  const selectedPost = blogPosts.find(post => post.id === activeSlug);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center mb-4">
                <Tag className="mr-2" size={16} />
                <span className="text-blue-200">{selectedPost.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {selectedPost.title}
              </h1>
              <div className="flex items-center text-blue-100">
                <User className="mr-2" size={16} />
                <span className="mr-6">{selectedPost.author}</span>
                <Calendar className="mr-2" size={16} />
                <span className="mr-6">{selectedPost.date}</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Blog */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowRight className="mr-2 rotate-180" size={20} />
              Back to Blog
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Insights Blog
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Stay updated with the latest AI breakthroughs, enterprise solutions, and industry insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="mr-2 text-blue-600" size={16} />
                    <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="mr-1" size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
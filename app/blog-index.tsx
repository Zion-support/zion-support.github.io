import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      slug: 'ai-2026-enterprise-breakthrough',
      title: 'AI 2026: The Ultimate Enterprise Breakthrough Revolution',
      excerpt: 'Discover how AI is revolutionizing enterprise operations in 2026 with autonomous systems, advanced neural networks, and breakthrough technologies.',
      date: '2026-01-15',
      readTime: '8 min read',
      category: 'AI Innovation'
    },
    {
      slug: 'ai-2026-autonomous-enterprise-automation-mega-breakthrough',
      title: 'Autonomous Enterprise Automation: The Mega Breakthrough of 2026',
      excerpt: 'Explore the revolutionary autonomous enterprise automation systems that are transforming how businesses operate in 2026.',
      date: '2026-01-10',
      readTime: '12 min read',
      category: 'Automation'
    },
    {
      slug: 'ai-2026-consensus-intelligence-breakthrough',
      title: 'Consensus Intelligence: The Next Frontier in AI',
      excerpt: 'Learn about consensus intelligence systems and how they are enabling unprecedented levels of AI coordination and decision-making.',
      date: '2026-01-05',
      readTime: '10 min read',
      category: 'AI Research'
    },
    {
      slug: 'ai-2026-adaptive-neural-architectures-breakthrough',
      title: 'Adaptive Neural Architectures: The Future of AI',
      excerpt: 'Dive deep into adaptive neural architectures and their potential to revolutionize machine learning and AI systems.',
      date: '2025-12-28',
      readTime: '15 min read',
      category: 'Machine Learning'
    },
    {
      slug: 'ai-2026-autonomous-business-intelligence-mega-breakthrough',
      title: 'Autonomous Business Intelligence: The Mega Breakthrough',
      excerpt: 'Discover how autonomous business intelligence systems are transforming data analysis and decision-making processes.',
      date: '2025-12-20',
      readTime: '9 min read',
      category: 'Business Intelligence'
    },
    {
      slug: 'ai-2026-enterprise-automation-revolutionary-breakthrough',
      title: 'Enterprise Automation: Revolutionary Breakthrough in 2026',
      excerpt: 'Explore the latest breakthroughs in enterprise automation and how they are reshaping business operations.',
      date: '2025-12-15',
      readTime: '11 min read',
      category: 'Enterprise'
    },
    {
      slug: 'ai-2026-february-mega-breakthrough-revolution',
      title: 'February 2026: The Mega Breakthrough Revolution',
      excerpt: 'A comprehensive look at the major AI breakthroughs and technological revolutions happening in February 2026.',
      date: '2025-12-10',
      readTime: '7 min read',
      category: 'Technology Trends'
    },
    {
      slug: 'ai-2026-hyperconscious-computing-revolution',
      title: 'Hyperconscious Computing: The Next Evolution',
      excerpt: 'Learn about hyperconscious computing and its potential to create AI systems with unprecedented levels of awareness.',
      date: '2025-12-05',
      readTime: '13 min read',
      category: 'AI Research'
    },
    {
      slug: 'ai-2026-february-ultimate-consciousness-breakthrough',
      title: 'Ultimate Consciousness Breakthrough: February 2026',
      excerpt: 'Explore the ultimate consciousness breakthrough in AI and its implications for the future of artificial intelligence.',
      date: '2025-11-30',
      readTime: '14 min read',
      category: 'Consciousness'
    },
    {
      slug: 'ai-2026-autonomous-agent-factories',
      title: 'Autonomous Agent Factories: The Future of AI Development',
      excerpt: 'Discover how autonomous agent factories are revolutionizing the way AI systems are created and deployed.',
      date: '2025-11-25',
      readTime: '10 min read',
      category: 'AI Development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI & Technology Blog | Zion Tech Group</title>
        <meta
          name="description"
          content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta
          name="keywords"
          content="AI blog, enterprise technology, automation insights, digital transformation"
        />
        <meta property="og:title" content="AI & Technology Blog | Zion Tech Group" />
        <meta
          property="og:description"
          content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <div className='container mx-auto px-4 py-16 pt-24'>
          <header className='text-center mb-16'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 text-white neon-text'>
              AI & Technology Blog
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Latest insights on AI, enterprise automation, and digital transformation from our expert team
            </p>
          </header>

          <div className='max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {blogPosts.map((post, index) => (
                <article key={index} className='bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/20'>
                  <div className='mb-4'>
                    <span className='inline-block bg-cyan-500/20 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full'>
                      {post.category}
                    </span>
                  </div>
                  <h2 className='text-xl font-bold text-white mb-3 line-clamp-2'>
                    {post.title}
                  </h2>
                  <p className='text-gray-300 mb-4 line-clamp-3'>
                    {post.excerpt}
                  </p>
                  <div className='flex items-center justify-between text-sm text-gray-400 mb-4'>
                    <div className='flex items-center'>
                      <Calendar className='w-4 h-4 mr-1' />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className='flex items-center'>
                      <Clock className='w-4 h-4 mr-1' />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className='inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors'
                  >
                    Read More
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

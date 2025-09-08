import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogIndex: NextPage = () => {
  const blogPosts = [
    {
      title: '5G Technology and Its Impact on IoT',
      excerpt: 'Exploring how 5G networks are revolutionizing IoT applications and enabling new possibilities for connected devices.',
      date: '2024-01-15',
      author: 'Tech Team',
      href: '/blog/5g-technology-and-its-impact-on-iot-chat',
      category: 'Technology'
    }, {
      title: 'AI-Powered Marketplaces: The Future of Digital Commerce',
      excerpt: 'How artificial intelligence is transforming e-commerce platforms and creating more personalized shopping experiences.',
      date: '2024-01-10',
      author: 'AI Team',
      href: '/blog/ai-powered-marketplaces-the-future-of-digital-commerce-chat',
      category: 'AI'
    }, {
      title: 'API-First Development: Building Scalable Systems',
      excerpt: 'Best practices for designing and implementing API-first architectures that can scale with your business.',
      date: '2024-01-05',
      author: 'Engineering Team',
      href: '/blog/api-first-development-building-scalable-systems-chat',
      category: 'Development'
    }, {
      title: 'Augmented Reality in Enterprise Applications',
      excerpt: 'Real-world applications of AR technology in business environments and how it\'s changing the way we work.',
      date: '2024-01-01',
      author: 'Innovation Team',
      href: '/blog/augmented-reality-in-enterprise-applications-chat',
      category: 'Innovation'
    }, {
      title: 'Blockchain Technology in Modern Business Solutions',
      excerpt: 'Understanding how blockchain is being integrated into business processes and the benefits it brings.',
      date: '2023-12-28',
      author: 'Blockchain Team',
      href: '/blog/blockchain-technology-in-modern-business-solutions-chat',
      category: 'Blockchain'
    }, {
      title: 'Cloud-Native Architecture Best Practices',
      excerpt: 'Essential principles and practices for building applications that are designed for the cloud from the ground up.',
      date: '2023-12-25',
      author: 'Cloud Team',
      href: '/blog/cloud-native-architecture-best-practices-chat',
      category: 'Cloud'
    }
  ];

  const categories = ['All', 'Technology', 'AI', 'Development', 'Innovation', 'Blockchain', 'Cloud'];

const Index: NextPage = () => {
  const title = 'Blog - Zion Tech Solutions';
  const desc = 'Latest insights from Zion';
  const ogImage = '/og/default.svg';
  return (
    <MainLayout 
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology from Zion Tech Group's expert team."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Insights, trends, and innovations in technology from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  
                  <Link 
                    href={post.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  )};

        {/* Popular Topics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
              <p className="text-white/60 text-sm">Latest trends and implementation strategies</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Cloud Computing</h3>
              <p className="text-white/60 text-sm">Optimization and migration insights</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
              <p className="text-white/60 text-sm">Monitoring and optimization techniques</p>
            </div>
            <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-white mb-2">Security</h3>
              <p className="text-white/60 text-sm">Automation and threat prevention</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Have a Topic in Mind?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for new topics to cover. Let us know what you&apos;d like to learn more about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Suggest a Topic
              </Link>
              <Link 
                href="/reports"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Reports
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

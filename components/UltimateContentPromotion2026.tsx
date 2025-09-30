import React from 'react';
import Link from 'next/link';

const UltimateContentPromotion2026: React.FC = () => {
  const contentItems = [
    {
      type: 'Blog Post',
      title: 'AI Revolution 2026: The Complete Transformation Guide',
      description: 'Master the revolutionary AI technologies reshaping enterprise operations',
      readTime: '25 min read',
      category: 'Featured',
      color: 'red',
      href: '/blog/ai-revolution-2026-complete-guide'
    },
    {
      type: 'Case Study',
      title: 'Fortune 500 Manufacturing: $100M AI Transformation Success',
      description: 'See how a global manufacturer achieved unprecedented ROI with AI 2026',
      readTime: '15 min read',
      category: 'Success Story',
      color: 'green',
      href: '/case-studies/fortune-500-100m-ai-success'
    },
    {
      type: 'White Paper',
      title: 'Quantum AI Computing: The Future of Enterprise Intelligence',
      description: 'Deep dive into quantum-enhanced AI and its transformative potential',
      readTime: '45 min read',
      category: 'Research',
      color: 'purple',
      href: '/resources/quantum-ai-computing-white-paper'
    },
    {
      type: 'Video Demo',
      title: 'Live AI 2026 Platform Demo: Revolutionary Features',
      description: 'Watch our AI platform in action with real-time demonstrations',
      readTime: '12 min watch',
      category: 'Demo',
      color: 'blue',
      href: '/demos/ai-2026-live-platform-demo'
    },
    {
      type: 'Infographic',
      title: 'AI ROI Calculator: Calculate Your 2026 Transformation ROI',
      description: 'Interactive tool to project your AI transformation returns',
      readTime: 'Interactive',
      category: 'Tool',
      color: 'orange',
      href: '/tools/ai-roi-calculator-2026'
    },
    {
      type: 'Webinar',
      title: 'AI 2026 Masterclass: Enterprise Implementation Strategies',
      description: 'Expert-led session on implementing revolutionary AI technologies',
      readTime: '60 min',
      category: 'Training',
      color: 'indigo',
      href: '/webinars/ai-2026-masterclass-enterprise'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            ULTIMATE CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}That Transforms
            </span>
            <br />
            Your Business
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Access the most comprehensive collection of AI 2026 content, case studies, and resources. 
            Everything you need to master the future of enterprise AI.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`bg-${item.color}-500/20 text-${item.color}-400 px-3 py-1 rounded-full text-xs font-semibold`}>
                  {item.category}
                </span>
                <span className="text-gray-400 text-sm">{item.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                <span>Explore {item.type} →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Get Exclusive AI 2026 Content</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 10,000+ enterprise leaders getting weekly updates on revolutionary AI technologies, 
            implementation strategies, and exclusive case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            🔒 No spam. Unsubscribe anytime. Exclusive content only.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              📚 View All Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              📊 Success Stories
            </Link>
            <Link
              href="/resources"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              🎯 Free Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentPromotion2026;
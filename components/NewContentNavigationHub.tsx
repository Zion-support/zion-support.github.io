import React from 'react';
import { Link } from 'react-router-dom';

const NewContentNavigationHub: React.FC = () => {
  const newContent = [
    {
      title: "Next-Generation AI Systems Revolution",
      description: "Revolutionary breakthrough in AI systems with 99.9% automation accuracy and $2.8B proven ROI",
      href: "/blog/ai-2025-january-next-generation-ai-systems-revolution",
      category: "AI Innovation",
      readTime: "12 min read",
      featured: true,
      metrics: {
        accuracy: "99.9%",
        roi: "$2.8B",
        costReduction: "87%"
      }
    },
    {
      title: "Autonomous Business Intelligence Revolution",
      description: "Transform business intelligence with 95% decision accuracy and $1.2B value creation",
      href: "/blog/ai-2025-january-autonomous-business-intelligence-revolution",
      category: "Business Intelligence",
      readTime: "15 min read",
      featured: true,
      metrics: {
        accuracy: "95%",
        roi: "$1.2B",
        insights: "Real-time"
      }
    },
    {
      title: "$2.8B Fortune 100 Success Story",
      description: "How a Fortune 100 manufacturing conglomerate achieved unprecedented results with next-gen AI",
      href: "/case-studies/ai-2025-january-next-generation-ai-systems-2-8-billion-success",
      category: "Case Studies",
      readTime: "18 min read",
      featured: true,
      metrics: {
        companies: "47 Countries",
        employees: "2.3M",
        roi: "$2.8B"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🆕 NEW JANUARY 2025 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the newest content covering revolutionary AI systems, autonomous business intelligence, 
            and real-world success stories with proven ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                content.featured 
                  ? 'border-indigo-500/50 hover:border-indigo-400/70' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {content.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.category === 'AI Innovation' ? 'bg-indigo-500/20 text-indigo-300' :
                    content.category === 'Business Intelligence' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {content.category}
                  </span>
                  <span className="text-gray-400 text-sm">{content.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {content.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  {content.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {Object.entries(content.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              <Link
                href={content.href}
                className={`block w-full text-center py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                  content.featured
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg hover:shadow-indigo-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white border border-white/20 hover:border-white/40'
                }`}
              >
                {content.category === 'Case Studies' ? 'View Case Study →' : 'Read Article →'}
              </Link>
            </div>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Quick Access to All New Content
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 hover:from-indigo-500/30 hover:to-indigo-600/30 border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300"
            >
              📚 All Blog Posts
            </Link>
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 border border-green-500/30 text-green-300 hover:text-green-200 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300"
            >
              💼 Case Studies
            </Link>
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30 border border-purple-500/30 text-purple-300 hover:text-purple-200 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300"
            >
              🚀 AI Services
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 border border-orange-500/30 text-orange-300 hover:text-orange-200 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300"
            >
              💬 Contact Us
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement Next-Generation AI Systems?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Join the organizations already achieving unprecedented results with our revolutionary AI solutions. 
              Get expert guidance and implementation support from our experienced team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services/ai-implementation"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                View Implementation Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentNavigationHub;
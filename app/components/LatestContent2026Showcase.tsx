import Link from 'next/link';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

export default function LatestContent2026Showcase() {
  const latestContent = [
    {
      title: "AI 2026: Autonomous Business Operations Complete Guide",
      description: "Master the future of business with autonomous AI operations. Complete implementation guide for 2026 enterprise transformation.",
      category: "Autonomous Operations",
      readTime: "12 min read",
      publishDate: "2025-01-15",
      href: "/blog/ai-2026-autonomous-business-operations-complete-guide",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      stats: "95% task reduction, 340% ROI"
    },
    {
      title: "AI 2026: Quantum Computing Business Revolution",
      description: "Discover how quantum computing will revolutionize business operations, AI, and enterprise solutions by 2026.",
      category: "Quantum Computing",
      readTime: "15 min read",
      publishDate: "2025-01-15",
      href: "/blog/ai-2026-quantum-computing-business-revolution",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      stats: "1000x speedup, exponential optimization"
    },
    {
      title: "AI 2026: Neural Interface Revolution Business Transformation",
      description: "Explore how neural interfaces will transform business operations, human-computer interaction, and enterprise productivity.",
      category: "Neural Interfaces",
      readTime: "18 min read",
      publishDate: "2025-01-15",
      href: "/blog/ai-2026-neural-interface-revolution-business-transformation",
      icon: Users,
      gradient: "from-indigo-500 to-purple-500",
      stats: "300-500% productivity boost"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">✨ LATEST CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2026 Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights on the technologies that will define business success in 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestContent.map((content, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${content.gradient} rounded-xl`}>
                    <content.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-purple-600">{content.category}</div>
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {content.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {content.publishDate}
                  </div>
                  <div className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    {content.stats}
                  </div>
                </div>

                <Link 
                  href={content.href}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            View All AI 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
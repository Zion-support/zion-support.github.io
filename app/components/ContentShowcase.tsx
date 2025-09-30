import React from 'react';
<<<<<<< HEAD

const ContentShowcase: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Latest Content & Innovations
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Discover Our
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-purple bg-clip-text text-transparent">
              Latest Innovations
            </span>
          </h2>
          
          <p className="text-xl text-zion-blue-light/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore cutting-edge AI solutions, success stories, and industry insights that are shaping the future of technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Content Items */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 animate-fade-in-up" style={{ animationDelay: `${item * 0.1}s` }}>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue-light rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                Innovation #{item}
              </h3>
              
              <p className="text-zion-blue-light/80 mb-6 leading-relaxed">
                Discover how our cutting-edge solutions are transforming industries and driving unprecedented growth.
              </p>
              
              <div className="flex items-center text-zion-cyan font-medium group-hover:text-white transition-colors duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-white font-semibold rounded-full hover:from-zion-blue-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30">
            <span>Explore All Content</span>
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
=======
import Link from 'next/link';

export default function ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI Enterprise Adoption 2025: Complete Implementation Guide",
      description: "Master AI enterprise adoption with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI.",
      type: "Article",
      category: "Enterprise AI",
      readTime: "20 min read",
      link: "/blog/ai-enterprise-adoption-2025",
      featured: true,
      metrics: "300% ROI",
      color: "blue"
    },
    {
      id: 2,
      title: "AI Trends 2025: Top 10 Predictions & Industry Insights",
      description: "Discover the top AI trends shaping 2025. From autonomous agents to edge computing, explore transformative technologies.",
      type: "Article",
      category: "AI Trends",
      readTime: "15 min read",
      link: "/blog/ai-trends-2025-predictions",
      featured: true,
      metrics: "10 Key Trends",
      color: "purple"
    },
    {
      id: 3,
      title: "AI Supply Chain Optimization: 60% Cost Reduction",
      description: "See how a global manufacturer achieved 60% cost reduction and 90% efficiency improvement, saving $12M annually.",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "12 min read",
      link: "/case-studies/ai-supply-chain-optimization-2025",
      featured: true,
      metrics: "$12M Savings",
      color: "green"
    },
    {
      id: 4,
      title: "AI Autonomous Agents 2025: Enterprise Implementation",
      description: "Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns.",
      type: "Article",
      category: "Autonomous AI",
      readTime: "18 min read",
      link: "/blog/ai-autonomous-agents-2025",
      featured: false,
      metrics: "300% ROI",
      color: "indigo"
    },
    {
      id: 5,
      title: "AI Governance Framework 2025: Enterprise Implementation",
      description: "Master AI governance with 70% risk reduction and comprehensive enterprise frameworks.",
      type: "Article",
      category: "AI Governance",
      readTime: "15 min read",
      link: "/blog/ai-governance-framework-2025",
      featured: false,
      metrics: "70% Risk Reduction",
      color: "red"
    },
    {
      id: 6,
      title: "FinTech AI Risk Compliance: 70% Risk Reduction",
      description: "See how a leading fintech achieved 70% risk reduction with automated governance frameworks.",
      type: "Case Study",
      category: "FinTech",
      readTime: "10 min read",
      link: "/case-studies/fintech-ai-risk-compliance-2025",
      featured: false,
      metrics: "$2.5M Savings",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
      emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              📚 Featured Content
            </span>
            <span className="text-gray-600 text-sm">Latest AI Insights</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Latest AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our latest articles, case studies, and AI innovations that are transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => {
            const colors = getColorClasses(content.color);
            return (
              <Link key={content.id} href={content.link} className="group">
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                  content.featured ? `${colors.border} ring-2 ${colors.bg}` : 'border-gray-200'
                } group-hover:scale-105`}>
                  {content.featured && (
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        ⭐ Featured
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                  )}
                  
                  {!content.featured && (
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {content.type}
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {content.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {content.category}
                      </span>
                    </div>
                    <div className={`${colors.text} font-semibold text-sm`}>
                      {content.metrics}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className={`${colors.text} font-semibold group-hover:translate-x-2 transition-transform`}>
                      Read {content.type === 'Case Study' ? 'Case Study' : 'Article'} →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Content →
          </Link>
        </div>
      </div>
    </section>
  );
}
>>>>>>> cursor/create-and-deploy-new-content-1102

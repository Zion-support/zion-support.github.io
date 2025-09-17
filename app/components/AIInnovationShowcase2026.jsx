import React from 'react';
import Link from 'next/link';

const AIInnovationShowcase2026 = () => {
  const innovations = [
    {
      title: "Responsible AI Implementation",
      description: "A practical guide to implementing AI systems that are ethical, transparent, and aligned with human values.",
      category: "AI Ethics",
      readTime: "13 min read",
      slug: "responsible-ai-implementation-ethics-practice",
      color: "emerald",
      icon: "🛡️"
    },
    {
      title: "AI-Powered Customer Experience Revolution",
      description: "Transform customer experience with AI-driven personalization, predictive service, and intelligent automation.",
      category: "Customer Experience",
      readTime: "11 min read",
      slug: "ai-powered-customer-experience-revolution",
      color: "blue",
      icon: "💬"
    },
    {
      title: "The AI Talent Revolution",
      description: "Navigate the AI talent revolution with strategies for developing, attracting, and retaining AI-skilled workforce.",
      category: "Workforce Development",
      readTime: "16 min read",
      slug: "ai-talent-revolution-building-tomorrows-workforce",
      color: "orange",
      icon: "👥"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        badge: 'bg-emerald-100 text-emerald-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-700',
        button: 'bg-orange-600 hover:bg-orange-700',
        badge: 'bg-orange-100 text-orange-700'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 AI INNOVATION 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge AI Innovations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the latest breakthroughs in AI technology and implementation strategies 
            that are transforming industries and reshaping the future of work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => {
            const colors = getColorClasses(innovation.color);
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{innovation.icon}</div>
                  <div>
                    <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                      {innovation.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {innovation.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{innovation.readTime}</span>
                  <Link 
                    href={`/blog/${innovation.slug}`}
                    className={`${colors.button} text-white px-6 py-2 rounded-lg font-medium transition-colors`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of forward-thinking organizations that are already leveraging 
              cutting-edge AI innovations to drive growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our AI Services
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationShowcase2026;
import React from 'react';
import Link from 'next/link';

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
  icon?: string;
  gradient?: string;
  featured?: boolean;
}

function ContentCard({ title, description, href, badge, icon = "🚀", gradient = "from-blue-500 to-purple-600", featured = false }: ContentCardProps) {
  return (
    <Link href={href} className="group block">
      <div className={`relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-6 border-l-4 ${featured ? 'border-red-500' : 'border-transparent group-hover:border-blue-500'}`}>
        {featured && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
            FEATURED
          </div>
        )}
        
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <span className="text-2xl">{icon}</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              {badge && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  {badge}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ContentPromotion() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough",
      description: "BREAKTHROUGH: Revolutionary AI 2025 breakthrough delivering 10,000% ROI with 99.9% accuracy and 10,000x faster processing speeds.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      badge: "BREAKTHROUGH",
      icon: "🚀",
      gradient: "from-red-500 to-pink-600",
      featured: true
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "Revolutionary quantum-neural fusion technology delivering 15,000% ROI with infinite processing capabilities and quantum precision.",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      badge: "QUANTUM",
      icon: "⚛️",
      gradient: "from-purple-500 to-indigo-600",
      featured: true
    },
    {
      title: "Global Transformation Success",
      description: "Fortune 500 companies achieving 10,000% ROI with our revolutionary AI solutions. Real results, proven success.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "10,000% ROI",
      icon: "🏆",
      gradient: "from-green-500 to-emerald-600",
      featured: true
    }
  ];

  const latestContent = [
    {
      title: "AI 2027 Future Predictions",
      description: "Comprehensive analysis of AI trends and predictions for 2027, including breakthrough technologies and market opportunities.",
      href: "/blog/ai-2027-future-predictions",
      badge: "NEW",
      icon: "🔮",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Neural Interface Revolution",
      description: "Explore the future of brain-computer interfaces and direct neural communication systems with 95% success rates.",
      href: "/blog/ai-2025-neural-interfaces",
      badge: "REVOLUTIONARY",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Enterprise Automation Mastery",
      description: "Complete guide to enterprise automation with AI, achieving 800% ROI and 90% efficiency improvements.",
      href: "/blog/ai-2025-enterprise-automation-mastery",
      badge: "MASTERY",
      icon: "🤖",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Breakthrough quantum computing solutions delivering exponential processing power and infinite scalability.",
      href: "/quantum-computing-solutions",
      badge: "BREAKTHROUGH",
      icon: "⚛️",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for implementing AI solutions with step-by-step guides, templates, and ROI calculators.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      badge: "TOOLKIT",
      icon: "🛠️",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Financial Services Revolution",
      description: "How leading banks achieved 2000% ROI with AI-powered fraud detection and risk management systems.",
      href: "/case-studies/ai-2027-financial-services-revolution",
      badge: "2,000% ROI",
      icon: "💰",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="py-12">
      {/* Featured Content */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚀 Featured Breakthrough Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most revolutionary content featuring breakthrough technologies and proven success stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((content, index) => (
            <ContentCard key={index} {...content} />
          ))}
        </div>
      </section>

      {/* Latest Content */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            📚 Latest Content & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our latest articles, case studies, and implementation guides covering AI 2025-2030.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestContent.map((content, index) => (
            <ContentCard key={index} {...content} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Explore More Content?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Discover our complete library of breakthrough content, case studies, and implementation guides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse All Articles
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
            <Link 
              href="/resources"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Access Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
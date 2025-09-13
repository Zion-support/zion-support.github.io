import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2036 Ultimate Content Hub - Revolutionary Technology Showcase',
  description: 'Explore the complete collection of AI 2036 breakthrough content including consciousness transfer, quantum neural fusion, and autonomous evolution technologies.',
  keywords: ['AI 2036', 'content hub', 'breakthrough technologies', 'consciousness transfer', 'quantum neural fusion', 'autonomous evolution'],
};

export default function AI2036UltimateContentHub() {
  const contentCategories = [
    {
      title: "Breakthrough Showcases",
      description: "Comprehensive showcases of revolutionary AI 2036 technologies",
      items: [
        {
          title: "AI 2036 Breakthrough Showcase",
          description: "Experience consciousness transfer, quantum neural fusion, and autonomous evolution technologies",
          link: "/ai-2036-breakthrough-showcase",
          icon: "🚀",
          gradient: "from-purple-500 to-blue-500",
          featured: true
        },
        {
          title: "Revolutionary Technology Gallery",
          description: "Visual gallery of the most advanced AI technologies ever created",
          link: "/ai-2036-technology-gallery",
          icon: "⚛️",
          gradient: "from-blue-500 to-indigo-500"
        }
      ]
    },
    {
      title: "In-Depth Articles",
      description: "Comprehensive articles exploring AI 2036 breakthrough technologies",
      items: [
        {
          title: "AI 2036 Revolutionary Breakthroughs",
          description: "Deep dive into the most advanced AI technologies reshaping reality in 2036",
          link: "/blog/ai-2036-revolutionary-breakthroughs",
          icon: "🧠",
          gradient: "from-indigo-500 to-purple-500",
          featured: true
        },
        {
          title: "Consciousness Transfer Technology Guide",
          description: "Complete guide to understanding and implementing consciousness transfer technology",
          link: "/blog/ai-2036-consciousness-transfer-guide",
          icon: "🔬",
          gradient: "from-purple-500 to-pink-500"
        },
        {
          title: "Quantum Neural Fusion Explained",
          description: "Technical deep dive into quantum neural fusion technology and applications",
          link: "/blog/ai-2036-quantum-neural-fusion-explained",
          icon: "⚡",
          gradient: "from-pink-500 to-red-500"
        }
      ]
    },
    {
      title: "Success Stories",
      description: "Real-world case studies demonstrating AI 2036 technology impact",
      items: [
        {
          title: "Consciousness Transfer Breakthrough",
          description: "How we achieved 50,000% ROI with consciousness transfer in healthcare",
          link: "/case-studies/ai-2036-consciousness-transfer-breakthrough",
          icon: "🏥",
          gradient: "from-green-500 to-emerald-500",
          featured: true
        },
        {
          title: "Quantum Neural Fusion Success",
          description: "25,000% ROI achieved through quantum neural fusion in research applications",
          link: "/case-studies/ai-2036-quantum-neural-fusion-breakthrough",
          icon: "🔬",
          gradient: "from-emerald-500 to-teal-500"
        },
        {
          title: "Autonomous Evolution Implementation",
          description: "Manufacturing revolution with 25,000% ROI through autonomous evolution systems",
          link: "/case-studies/ai-2036-autonomous-evolution-breakthrough",
          icon: "🏭",
          gradient: "from-teal-500 to-cyan-500"
        }
      ]
    },
    {
      title: "Implementation Resources",
      description: "Practical guides and tools for implementing AI 2036 technologies",
      items: [
        {
          title: "AI 2036 Implementation Master Guide",
          description: "Complete implementation guide for all AI 2036 breakthrough technologies",
          link: "/resources/ai-2036-implementation-master-guide",
          icon: "📚",
          gradient: "from-cyan-500 to-blue-500",
          featured: true
        },
        {
          title: "Consciousness Transfer Calculator",
          description: "Interactive calculator for consciousness transfer ROI and feasibility assessment",
          link: "/tools/ai-2036-consciousness-transfer-calculator",
          icon: "🧮",
          gradient: "from-blue-500 to-indigo-500"
        },
        {
          title: "Quantum Neural Fusion Toolkit",
          description: "Complete toolkit for implementing quantum neural fusion technology",
          link: "/resources/ai-2036-quantum-neural-fusion-toolkit",
          icon: "🛠️",
          gradient: "from-indigo-500 to-purple-500"
        }
      ]
    },
    {
      title: "Interactive Tools",
      description: "Interactive tools and calculators for AI 2036 technologies",
      items: [
        {
          title: "AI 2036 ROI Calculator",
          description: "Calculate potential ROI for implementing AI 2036 breakthrough technologies",
          link: "/tools/ai-2036-roi-calculator",
          icon: "💰",
          gradient: "from-purple-500 to-pink-500",
          featured: true
        },
        {
          title: "Technology Readiness Assessment",
          description: "Assess your organization's readiness for AI 2036 technology implementation",
          link: "/tools/ai-2036-readiness-assessment",
          icon: "🎯",
          gradient: "from-pink-500 to-red-500"
        },
        {
          title: "Consciousness Transfer Simulator",
          description: "Interactive simulator for experiencing consciousness transfer technology",
          link: "/tools/ai-2036-consciousness-simulator",
          icon: "🎮",
          gradient: "from-red-500 to-orange-500"
        }
      ]
    },
    {
      title: "Webinars & Events",
      description: "Live webinars and events showcasing AI 2036 breakthrough technologies",
      items: [
        {
          title: "AI 2036 Breakthrough Webinar Series",
          description: "Live webinars exploring the latest AI 2036 breakthrough technologies",
          link: "/webinars/ai-2036-breakthrough-series",
          icon: "🎥",
          gradient: "from-orange-500 to-yellow-500",
          featured: true
        },
        {
          title: "Consciousness Transfer Demo",
          description: "Live demonstration of consciousness transfer technology in action",
          link: "/webinars/ai-2036-consciousness-transfer-demo",
          icon: "🔬",
          gradient: "from-yellow-500 to-green-500"
        },
        {
          title: "Future of AI Panel Discussion",
          description: "Expert panel discussion on the future implications of AI 2036 technologies",
          link: "/webinars/ai-2036-future-panel",
          icon: "👥",
          gradient: "from-green-500 to-emerald-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI 2036 Ultimate Content Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Your complete resource for AI 2036 breakthrough technologies. Explore consciousness transfer, 
              quantum neural fusion, autonomous evolution, and more revolutionary AI innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#content-categories" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Explore Content
              </Link>
              <Link 
                href="/ai-2036-breakthrough-showcase" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
              >
                View Breakthrough Showcase
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div id="content-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {contentCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {category.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    item.featured ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="p-6">
                    {/* Icon and Featured Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center text-white text-2xl`}>
                        {item.icon}
                      </div>
                      {item.featured && (
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={item.link}
                      className={`inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300`}
                    >
                      Explore Now
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              AI 2036 Content Impact
            </h2>
            <p className="text-xl text-purple-100">
              Discover the impact of our AI 2036 breakthrough content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-purple-200">Page Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-purple-200">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25K+</div>
              <div className="text-purple-200">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Explore AI 2036 Breakthroughs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of organizations already implementing these revolutionary AI 2036 technologies 
            and achieving unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-2036-breakthrough-showcase" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Breakthrough Showcase
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
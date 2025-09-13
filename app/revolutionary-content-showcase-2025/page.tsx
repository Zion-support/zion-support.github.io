import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Revolutionary Content Showcase 2025 - Zion Tech Group',
  description: 'Explore our comprehensive collection of revolutionary AI content for 2025. Breakthrough technologies, case studies, implementation guides, and expert insights.',
  keywords: 'AI content 2025, revolutionary AI, breakthrough content, AI showcase, implementation guides, case studies',
};

export default function RevolutionaryContentShowcase2025() {
  const contentCategories = [
    {
      title: 'Breakthrough Technologies',
      description: 'Revolutionary AI technologies transforming industries',
      items: [
        {
          title: 'AI 2025 Ultimate Breakthrough Revolution',
          description: 'Discover the most revolutionary AI breakthroughs of 2025, delivering unprecedented 10,000% ROI and 99.9% accuracy.',
          href: '/ai-2025-ultimate-breakthrough-revolution',
          type: 'Featured',
          roi: '10,000%',
          accuracy: '99.9%',
          icon: '🚀'
        },
        {
          title: 'Quantum-AI Fusion Technology',
          description: 'Revolutionary combination of quantum computing and AI for complex decision-making processes.',
          href: '/blog/quantum-ai-fusion-2025',
          type: 'Breakthrough',
          roi: '15,000%',
          accuracy: '99.9%',
          icon: '⚛️'
        },
        {
          title: 'Neural Interface Revolution',
          description: 'Advanced neural interfaces bridging human consciousness and artificial intelligence.',
          href: '/blog/neural-interface-revolution-2025',
          type: 'Revolutionary',
          roi: '8,500%',
          accuracy: '95%',
          icon: '🧠'
        }
      ]
    },
    {
      title: 'Expert Analysis & Predictions',
      description: 'Comprehensive analysis of AI trends and future predictions',
      items: [
        {
          title: 'AI 2025 Revolutionary Trends & Predictions',
          description: 'Expert analysis of the most revolutionary AI trends and breakthrough predictions for 2025.',
          href: '/blog/ai-2025-revolutionary-trends-predictions',
          type: 'Analysis',
          readingTime: '15 min',
          icon: '🔮'
        },
        {
          title: 'Future of Autonomous Systems',
          description: 'Deep dive into the future of autonomous AI systems and their impact on industries.',
          href: '/blog/future-autonomous-systems-2025',
          type: 'Prediction',
          readingTime: '12 min',
          icon: '🤖'
        },
        {
          title: 'Predictive Intelligence Revolution',
          description: 'How predictive AI is revolutionizing forecasting and decision-making across industries.',
          href: '/blog/predictive-intelligence-revolution-2025',
          type: 'Insight',
          readingTime: '10 min',
          icon: '📊'
        }
      ]
    },
    {
      title: 'Success Stories & Case Studies',
      description: 'Real-world implementations and proven results',
      items: [
        {
          title: 'AI 2025 Global Transformation Breakthrough',
          description: 'How a Fortune 500 company achieved 15,000% ROI through revolutionary AI implementation.',
          href: '/case-studies/ai-2025-global-transformation-breakthrough',
          type: 'Case Study',
          roi: '15,000%',
          revenue: '$2.3B',
          icon: '🏆'
        },
        {
          title: 'Fortune 500 AI Success Story',
          description: 'Another Fortune 500 company achieved 1,500% ROI through strategic AI implementation.',
          href: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
          type: 'Success Story',
          roi: '1,500%',
          revenue: '$500M',
          icon: '💼'
        },
        {
          title: 'Manufacturing AI Revolution',
          description: 'Manufacturing company increased efficiency by 500% and reduced costs by 80% using AI automation.',
          href: '/case-studies/ai-manufacturing-transformation-2025',
          type: 'Transformation',
          efficiency: '500%',
          costReduction: '80%',
          icon: '🏭'
        }
      ]
    },
    {
      title: 'Implementation Guides & Resources',
      description: 'Comprehensive guides for implementing AI technologies',
      items: [
        {
          title: 'AI 2025 Revolutionary Implementation Guide',
          description: 'Complete step-by-step guide to implementing revolutionary AI technologies in your organization.',
          href: '/resources/ai-2025-revolutionary-implementation-guide',
          type: 'Guide',
          pages: '150+',
          icon: '📚'
        },
        {
          title: 'Ultimate AI Implementation Toolkit',
          description: 'Comprehensive toolkit with templates, checklists, and resources for AI implementation.',
          href: '/resources/ai-2025-ultimate-implementation-toolkit',
          type: 'Toolkit',
          tools: '50+',
          icon: '🛠️'
        },
        {
          title: 'AI ROI Calculator 2025',
          description: 'Advanced calculator to estimate ROI and business impact of AI implementation.',
          href: '/tools/ai-2025-roi-calculator',
          type: 'Tool',
          accuracy: '99%',
          icon: '🧮'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 mb-6">
              <span className="text-purple-300 font-semibold text-sm">📚 CONTENT SHOWCASE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Revolutionary Content Showcase 2025
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Explore our comprehensive collection of revolutionary AI content for 2025. Breakthrough technologies, case studies, implementation guides, and expert insights that are transforming industries worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Content Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15,000%</div>
                <div className="text-sm text-gray-300">Max ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1000x</div>
                <div className="text-sm text-gray-300">Speed Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {contentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-purple-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div className="flex gap-2">
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.roi && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                            {item.roi} ROI
                          </span>
                        )}
                        {item.accuracy && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                            {item.accuracy} Accuracy
                          </span>
                        )}
                        {item.revenue && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                            {item.revenue} Revenue
                          </span>
                        )}
                        {item.efficiency && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded">
                            {item.efficiency} Efficiency
                          </span>
                        )}
                        {item.costReduction && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded">
                            {item.costReduction} Cost Reduction
                          </span>
                        )}
                        {item.readingTime && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded">
                            {item.readingTime} read
                          </span>
                        )}
                        {item.pages && (
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded">
                            {item.pages} pages
                          </span>
                        )}
                        {item.tools && (
                          <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded">
                            {item.tools} tools
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700">
                        Read More
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Featured Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content pieces that are driving extraordinary results for organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI 2025 Ultimate Breakthrough Revolution</h3>
                  <p className="text-purple-600 font-semibold">Featured Content</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                The most comprehensive guide to AI 2025 breakthroughs, featuring revolutionary technologies delivering 10,000% ROI and 99.9% accuracy.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/ai-2025-ultimate-breakthrough-revolution" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Explore Now
                </Link>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">10,000%</div>
                  <div className="text-sm text-gray-600">ROI Potential</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Global Transformation Success Story</h3>
                  <p className="text-green-600 font-semibold">Case Study</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Real-world case study showing how a Fortune 500 company achieved 15,000% ROI through revolutionary AI implementation.
              </p>
              <div className="flex items-center justify-between">
                <Link 
                  href="/case-studies/ai-2025-global-transformation-breakthrough" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read Case Study
                </Link>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">15,000%</div>
                  <div className="text-sm text-gray-600">ROI Achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Access our complete library of revolutionary AI content and start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link href="/" className="text-blue-400 hover:text-blue-300 ml-2">Back to Home</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
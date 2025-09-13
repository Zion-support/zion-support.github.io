import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - AI Breakthroughs & Technology',
  description: 'Explore our comprehensive showcase of revolutionary AI content, breakthrough technologies, and success stories delivering unprecedented ROI in 2025.',
  keywords: [
    'AI content showcase',
    'revolutionary technology',
    'AI breakthroughs 2025',
    'content library',
    'technology showcase',
    'AI success stories',
    'breakthrough content'
  ],
  openGraph: {
    title: 'Revolutionary Content Showcase 2025',
    description: 'Discover the most comprehensive collection of AI breakthroughs and revolutionary technology content.',
    type: 'website',
    images: ['/og-content-showcase.jpg']
  }
};

export default function RevolutionaryContentShowcase2025() {
  const contentCategories = [
    {
      title: "AI 2025 Breakthroughs",
      description: "Revolutionary AI technologies delivering 5,000% ROI",
      color: "from-red-500 to-orange-500",
      items: [
        {
          title: "AI 2025 Ultimate Breakthrough Revolution",
          description: "The most revolutionary AI breakthrough delivering 5,000% ROI",
          href: "/ai-2025-ultimate-breakthrough-revolution",
          roi: "5,000%",
          badge: "BREAKTHROUGH"
        },
        {
          title: "Synthetic Intelligence Revolution",
          description: "Advanced synthetic intelligence transforming businesses worldwide",
          href: "/blog/ai-2025-synthetic-intelligence-revolution",
          roi: "50,000%",
          badge: "REVOLUTIONARY"
        },
        {
          title: "Ultimate Automation Revolution",
          description: "Complete business automation with 5,000% ROI guarantee",
          href: "/blog/ai-2025-ultimate-automation-revolution",
          roi: "5,000%",
          badge: "NEW"
        }
      ]
    },
    {
      title: "AI 2026 Quantum Technology",
      description: "Quantum-neural fusion delivering 15,000% ROI",
      color: "from-cyan-500 to-purple-500",
      items: [
        {
          title: "Quantum-Neural Fusion Breakthrough",
          description: "World's first quantum-neural fusion system with 15,000% ROI",
          href: "/ai-2026-quantum-neural-fusion-breakthrough",
          roi: "15,000%",
          badge: "QUANTUM"
        },
        {
          title: "Neural Interface Revolution",
          description: "Advanced neural interfaces transforming human-computer interaction",
          href: "/blog/ai-2026-neural-interface-revolution",
          roi: "3,000%",
          badge: "BREAKTHROUGH"
        },
        {
          title: "Future Predictions 2026",
          description: "Comprehensive AI predictions and future technology roadmap",
          href: "/ai-2026-2030-future-predictions-breakthrough",
          roi: "∞",
          badge: "FUTURE"
        }
      ]
    },
    {
      title: "AI 2027-2030 Vision",
      description: "Future AI technologies and transcendent intelligence",
      color: "from-purple-500 to-pink-500",
      items: [
        {
          title: "AI 2027 Future Predictions",
          description: "Revolutionary predictions for AI development in 2027",
          href: "/ai-2027-future-predictions-revolutionary",
          roi: "8,000%",
          badge: "FUTURE"
        },
        {
          title: "AI 2030 Transcendent Intelligence",
          description: "Transcendent AI systems with infinite ROI potential",
          href: "/blog/ai-2030-transcendent-intelligence",
          roi: "∞",
          badge: "TRANSCENDENT"
        },
        {
          title: "Singularity Breakthrough 2029",
          description: "AI singularity event predictions and implications",
          href: "/blog/ai-2029-singularity-breakthrough",
          roi: "∞",
          badge: "SINGULARITY"
        }
      ]
    },
    {
      title: "Success Stories & Case Studies",
      description: "Real business transformations with proven ROI",
      color: "from-green-500 to-teal-500",
      items: [
        {
          title: "Global Enterprise Transformation",
          description: "Fortune 500 companies achieving 1,200% ROI with AI implementation",
          href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
          roi: "1,200%",
          badge: "SUCCESS"
        },
        {
          title: "Manufacturing Revolution",
          description: "Manufacturing companies achieving 8,500% ROI with quantum AI",
          href: "/case-studies/ai-2026-autonomous-manufacturing-revolution",
          roi: "8,500%",
          badge: "REVOLUTION"
        },
        {
          title: "Financial Services Breakthrough",
          description: "Financial institutions achieving 2,000% ROI with AI automation",
          href: "/case-studies/ai-2027-financial-services-revolution",
          roi: "2,000%",
          badge: "BREAKTHROUGH"
        }
      ]
    },
    {
      title: "Implementation Guides & Resources",
      description: "Complete guides for implementing AI solutions",
      color: "from-blue-500 to-indigo-500",
      items: [
        {
          title: "Ultimate Implementation Toolkit",
          description: "Complete toolkit with 47 resources for AI implementation",
          href: "/resources/ai-2025-ultimate-implementation-toolkit",
          roi: "N/A",
          badge: "ESSENTIAL"
        },
        {
          title: "AI 2025 Master Implementation Guide",
          description: "Comprehensive guide for implementing AI 2025 solutions",
          href: "/resources/ai-2025-comprehensive-implementation-master-guide",
          roi: "N/A",
          badge: "MASTER"
        },
        {
          title: "ROI Calculator Tools",
          description: "Interactive tools to calculate your AI implementation ROI",
          href: "/tools/ai-2025-roi-calculator",
          roi: "N/A",
          badge: "TOOL"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
              <span className="text-purple-300 text-sm font-semibold">🚀 REVOLUTIONARY CONTENT</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolutionary Content
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Showcase 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most comprehensive collection of AI breakthroughs, revolutionary technologies, 
              and success stories delivering unprecedented ROI and business transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#content-categories" 
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Get Implementation Help
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Categories */}
      <div id="content-categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our organized collection of revolutionary AI content and breakthrough technologies
            </p>
          </div>
          
          <div className="space-y-16">
            {contentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-8`}>
                  <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90 text-lg">{category.description}</p>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Link 
                        key={itemIndex}
                        href={item.href}
                        className="group bg-gray-50 hover:bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            item.badge === 'BREAKTHROUGH' ? 'bg-red-100 text-red-800' :
                            item.badge === 'REVOLUTIONARY' ? 'bg-purple-100 text-purple-800' :
                            item.badge === 'QUANTUM' ? 'bg-cyan-100 text-cyan-800' :
                            item.badge === 'FUTURE' ? 'bg-blue-100 text-blue-800' :
                            item.badge === 'TRANSCENDENT' ? 'bg-pink-100 text-pink-800' :
                            item.badge === 'SINGULARITY' ? 'bg-indigo-100 text-indigo-800' :
                            item.badge === 'SUCCESS' ? 'bg-green-100 text-green-800' :
                            item.badge === 'REVOLUTION' ? 'bg-orange-100 text-orange-800' :
                            item.badge === 'ESSENTIAL' ? 'bg-yellow-100 text-yellow-800' :
                            item.badge === 'MASTER' ? 'bg-gray-100 text-gray-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {item.badge}
                          </span>
                          <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {item.roi}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                          Learn More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Content Impact Statistics</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary content has transformed thousands of businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg text-gray-300">Content Pieces</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">50,000+</div>
              <div className="text-lg text-gray-300">Businesses Transformed</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">15,000%</div>
              <div className="text-lg text-gray-300">Average ROI</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already achieving extraordinary results with our revolutionary AI content and solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link 
              href="/webinars/revolutionary-content-demo" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Watch Content Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
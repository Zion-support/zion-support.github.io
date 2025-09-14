import React from 'react';
import Link from 'next/link';

const AutonomousSystemsShowcase2025: React.FC = () => {
  const contentItems = [
    {
      id: 'autonomous-systems-guide',
      type: 'blog',
      title: 'AI 2025: Next-Generation Autonomous Systems - Ultimate Guide',
      description: 'Complete enterprise guide to autonomous systems transformation with proven ROI strategies',
      url: '/blog/ai-2025-next-generation-autonomous-systems-ultimate-guide',
      image: '/images/autonomous-systems-guide.jpg',
      metrics: {
        roi: '1,200%',
        savings: '$2.8B',
        uptime: '99.9%',
        efficiency: '400%'
      },
      readingTime: '25 min read',
      tags: ['Autonomous Systems', 'AI 2025', 'Enterprise Guide', 'ROI'],
      featured: true
    },
    {
      id: 'fortune-100-case-study',
      type: 'case-study',
      title: 'Fortune 100 Autonomous Systems: $5.2B Company Achieves 1,500% ROI',
      description: 'Real-world transformation story showing how a Fortune 100 company achieved unprecedented results',
      url: '/case-studies/fortune-100-autonomous-systems-transformation-success-story',
      image: '/images/fortune-100-case-study.jpg',
      metrics: {
        roi: '1,500%',
        savings: '$2.8B',
        timeline: '24 months',
        satisfaction: '94%'
      },
      readingTime: '18 min read',
      tags: ['Fortune 100', 'Case Study', 'Success Story', 'Transformation'],
      featured: true
    },
    {
      id: 'implementation-roadmap',
      type: 'resource',
      title: 'AI Autonomous Systems Implementation Roadmap 2025',
      description: 'Step-by-step roadmap to achieve 1,500% ROI through strategic autonomous systems deployment',
      url: '/resources/ai-autonomous-systems-implementation-roadmap-2025',
      image: '/images/implementation-roadmap.jpg',
      metrics: {
        roi: '1,500%',
        timeline: '24 months',
        success: '95%',
        coverage: '100%'
      },
      readingTime: '30 min read',
      tags: ['Implementation', 'Roadmap', 'Strategy', 'ROI'],
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 NEXT-GENERATION AUTONOMOUS SYSTEMS 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Business with Autonomous Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving <span className="font-bold text-blue-600">1,500% ROI</span> and 
            <span className="font-bold text-green-600"> $2.8B in annual savings</span> through strategic autonomous systems implementation.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,500%</div>
            <div className="text-gray-600 text-sm">Average ROI</div>
            <div className="text-xs text-gray-500 mt-1">Within 24 months</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.8B</div>
            <div className="text-gray-600 text-sm">Annual Savings</div>
            <div className="text-xs text-gray-500 mt-1">Fortune 500 average</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm">System Uptime</div>
            <div className="text-xs text-gray-500 mt-1">Continuous operation</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">400%</div>
            <div className="text-gray-600 text-sm">Efficiency Gain</div>
            <div className="text-xs text-gray-500 mt-1">Productivity improvement</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">
                      {item.type === 'blog' ? '📖' : item.type === 'case-study' ? '📊' : '🗺️'}
                    </div>
                    <div className="text-sm font-semibold">{item.type.toUpperCase()}</div>
                  </div>
                </div>
                {item.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                    FEATURED
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(item.metrics).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">{item.readingTime}</span>
                  <span className="text-xs text-gray-500">
                    {item.type === 'case-study' ? 'Success Story' : 
                     item.type === 'resource' ? 'Implementation Guide' : 'Expert Guide'}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-center block transition-all duration-200 transform hover:scale-105"
                >
                  {item.type === 'case-study' ? 'Read Case Study' : 
                   item.type === 'resource' ? 'View Roadmap' : 'Read Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Autonomous Systems Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join Fortune 500 companies achieving unprecedented ROI through strategic autonomous systems implementation. 
              Get your free assessment and discover your transformation potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                href="/services/autonomous-systems"
                className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                Explore Services
              </Link>
              <Link
                href="/resources"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-200"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        {/* Industry Statistics */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Industry Transformation Statistics</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Autonomous systems are revolutionizing industries across the globe. Here's what leading organizations are achieving:
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">78%</div>
              <div className="text-sm text-blue-100">Fortune 500 Companies</div>
              <div className="text-xs text-blue-200">Implementing autonomous systems</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">$150B</div>
              <div className="text-sm text-blue-100">Market Size by 2025</div>
              <div className="text-xs text-blue-200">Autonomous systems market</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">85%</div>
              <div className="text-sm text-blue-100">Cost Reduction</div>
              <div className="text-xs text-blue-200">Average operational savings</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-300 mb-2">94%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
              <div className="text-xs text-blue-200">Implementation success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSystemsShowcase2025;
import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi?: string;
    savings?: string;
    accuracy?: string;
    efficiency?: string;
  };
  readingTime?: string;
  tags: string[];
}

const UltimateAutonomousBusinessShowcase: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-autonomous-business-revolution',
      title: 'AI 2025: The Ultimate Autonomous Business Revolution - Ultimate Breakthrough Guide to 30,000% ROI',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-autonomous-business-revolution-ultimate-breakthrough',
      description: 'Discover the revolutionary AI technologies and implementation strategies that are reshaping entire industries, with companies achieving ROI figures exceeding 30,000% within 18 months.',
      metrics: {
        roi: '30,000%',
        savings: '$500B+',
        accuracy: '99.99%',
        efficiency: '5,000%'
      },
      readingTime: '35 min read',
      tags: ['AI Revolution', 'Autonomous Business', 'ROI', 'Fortune 500', '30,000% ROI']
    },
    {
      id: 'fortune-500-autonomous-business-success',
      title: 'Fortune 500 Autonomous Business Success: $2.8B Annual Savings - 30,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-business-30000-roi-success-story',
      description: 'A Fortune 500 manufacturing giant achieved unprecedented success through comprehensive AI automation, generating $2.8B in annual savings and achieving a remarkable 30,000% ROI within just 18 months.',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B',
        accuracy: '99.99%',
        efficiency: '450%'
      },
      readingTime: '25 min read',
      tags: ['Fortune 500', 'Case Study', '30,000% ROI', 'Success Story', 'Manufacturing']
    },
    {
      id: 'autonomous-business-implementation-guide',
      title: 'Autonomous Business Implementation Ultimate Guide 2025: Complete Roadmap to 30,000% ROI',
      type: 'resource',
      url: '/resources/autonomous-business-implementation-ultimate-guide-2025',
      description: 'Complete roadmap for transforming your organization into an autonomous business powerhouse, covering everything from initial assessment to full-scale deployment and optimization.',
      metrics: {
        roi: '30,000%',
        savings: '$2.8B+',
        accuracy: '99.99%',
        efficiency: '450%'
      },
      readingTime: '60 min read',
      tags: ['Implementation Guide', 'ROI', 'Strategy', 'Framework', '30,000% ROI']
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'resource': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case 'blog': return 'text-blue-600';
      case 'case-study': return 'text-green-600';
      case 'resource': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE AUTONOMOUS BUSINESS REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That's Transforming Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies are achieving unprecedented 30,000% ROI through comprehensive AI automation strategies that are reshaping the future of business.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">30,000%</div>
            <div className="text-gray-600 font-medium">Average ROI</div>
            <div className="text-sm text-gray-500 mt-1">Within 18 months</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.8B</div>
            <div className="text-gray-600 font-medium">Annual Savings</div>
            <div className="text-sm text-gray-500 mt-1">Fortune 500 companies</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">99.99%</div>
            <div className="text-gray-600 font-medium">Accuracy Rate</div>
            <div className="text-sm text-gray-500 mt-1">Autonomous operations</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">5,000%</div>
            <div className="text-gray-600 font-medium">Efficiency Gain</div>
            <div className="text-sm text-gray-500 mt-1">Process optimization</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${getTypeColor(item.type)} p-2 rounded-lg`}>
                      <span className="text-white text-lg">{getTypeIcon(item.type)}</span>
                    </div>
                    <div>
                      <span className={`${getTypeTextColor(item.type)} text-sm font-semibold uppercase tracking-wide`}>
                        {item.type.replace('-', ' ')}
                      </span>
                      {item.readingTime && (
                        <div className="text-gray-500 text-xs mt-1">{item.readingTime}</div>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metrics */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {item.metrics.roi && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                      <div className="text-lg font-bold text-green-700">{item.metrics.roi}</div>
                      <div className="text-xs text-green-600 font-medium">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-200">
                      <div className="text-lg font-bold text-blue-700">{item.metrics.savings}</div>
                      <div className="text-xs text-blue-600 font-medium">Savings</div>
                    </div>
                  )}
                  {item.metrics.accuracy && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
                      <div className="text-lg font-bold text-purple-700">{item.metrics.accuracy}</div>
                      <div className="text-xs text-purple-600 font-medium">Accuracy</div>
                    </div>
                  )}
                  {item.metrics.efficiency && (
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-200">
                      <div className="text-lg font-bold text-orange-700">{item.metrics.efficiency}</div>
                      <div className="text-xs text-orange-600 font-medium">Efficiency</div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                      +{item.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Call to Action */}
                <Link
                  href={item.url}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                    item.type === 'blog'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                      : item.type === 'case-study'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                      : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700'
                  }`}
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the autonomous business revolution and discover how your organization can achieve 30,000% ROI through comprehensive AI automation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="font-bold mb-2">Free ROI Assessment</h4>
                <p className="text-sm opacity-90">Calculate your potential ROI with our advanced assessment tool</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Strategic Consultation</h4>
                <p className="text-sm opacity-90">Get personalized recommendations from our AI experts</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold mb-2">Implementation Support</h4>
                <p className="text-sm opacity-90">Full-service implementation with guaranteed results</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/tools/roi-calculator"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-center"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 text-lg">
              Fortune 500 companies across industries are achieving unprecedented results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.8B</div>
                <div className="text-gray-600 font-medium mb-2">Annual Savings</div>
                <div className="text-sm text-gray-500">Fortune 500 Manufacturing</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">30,000%</div>
                <div className="text-gray-600 font-medium mb-2">ROI Achievement</div>
                <div className="text-sm text-gray-500">Within 18 Months</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99.99%</div>
                <div className="text-gray-600 font-medium mb-2">Accuracy Rate</div>
                <div className="text-sm text-gray-500">Autonomous Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutonomousBusinessShowcase;
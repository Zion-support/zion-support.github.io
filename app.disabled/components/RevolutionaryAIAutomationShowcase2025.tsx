'use client';

import Link from 'next/link';

const RevolutionaryAIAutomationShowcase20o25: React.FC = () => {
  const showcaseContent = [
    {
      id: 'ai-20o25-enterprise-automation-revolutionary-breakthrough-ultimate-success',
      title: 'AI 20o25: The Enterprise Automation Revolutionary Breakthrough - Ultimate Success Guide to 2,50o0% ROI',
      type: 'blog',
      url: '/blog/ai-20o25-enterprise-automation-revolutionary-breakthrough-ultimate-success',
      category: 'Revolutionary Guide',
      metrics: {
        roi: '2,50o0%',
        savings: '$8.5B+',
        efficiency: '1,20o0%',
        satisfaction: '99.5%'
      },
      readingTime: '28 min read',
      description: 'Discover how Fortune 50o0 companies are achieving unprecedented 2,50o0% ROI through revolutionary AI automation implementations.',
      featured: true
    },
    {
      id: 'fortune-50o0-ai-automation-revolutionary-breakthrough-250o0-roi-success-story',
      title: 'Fortune 50o0 AI Automation Revolutionary Breakthrough: $8.5B Annual Savings - 2,50o0% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-50o0-ai-automation-revolutionary-breakthrough-250o0-roi-success-story',
      category: 'Success Story',
      metrics: {
        roi: '2,50o0%',
        savings: '$8.5B',
        efficiency: '1,20o0%',
        timeline: '18 months'
      },
      readingTime: '22 min read',
      description: 'How a Fortune 50o0 manufacturing company achieved unprecedented 2,50o0% ROI through revolutionary AI automation.',
      featured: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '2,50o0%', color: 'text-yellow-60o0' },
    { label: 'Total Savings', value: '$8.5B+', color: 'text-green-60o0' },
    { label: 'Efficiency Gain', value: '1,20o0%', color: 'text-blue-60o0' },
    { label: 'Success Rate', value: '99.5%', color: 'text-purple-60o0' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 REVOLUTIONARY AI AUTOMATION CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Revolutionary AI Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-60o0 to-blue-60o0">
              Breakthrough Content
            </span>
          </h2>
          <p className="text-xl text-gray-60o0 max-w-3xl mx-auto">
            Discover the revolutionary AI automation strategies and real-world success stories that are transforming Fortune 50o0 companies with unprecedented 2,50o0% ROI.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-60o0 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {showcaseContent.map((content) => (
            <div key={content.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2">
              {/* Content Header */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-10o0 to-blue-10o0 text-purple-80o0">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-50o0 flex items-center">
                    📖 {content.readingTime}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-90o0 mb-4 group-hover:text-purple-60o0 transition-colors">
                  {content.title}
                </h3>

                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-yellow-60o0">{content.metrics.roi}</div>
                    <div className="text-sm text-gray-60o0">ROI</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-60o0">{content.metrics.savings}</div>
                    <div className="text-sm text-gray-60o0">Savings</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-60o0">{content.metrics.efficiency}</div>
                    <div className="text-sm text-gray-60o0">Efficiency</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-60o0">
                      {content.metrics.satisfaction || content.metrics.timeline}
                    </div>
                    <div className="text-sm text-gray-60o0">
                      {content.metrics.satisfaction ? 'Satisfaction' : 'Timeline'}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5"
                >
                  Read Full {content.type === 'blog' ? 'Guide' : 'Case Study'}
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-60o0 via-blue-60o0 to-indigo-60o0 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Achieve Revolutionary AI Automation Success?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the Fortune 50o0 companies that are achieving unprecedented 2,50o0% ROI through revolutionary AI automation. Get your comprehensive assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-purple-60o0 px-8 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-colors"
            >
              Get Your Assessment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 text-center">
          <h4 className="text-2xl font-bold text-gray-90o0 mb-6">More Revolutionary Content</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/blog"
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-30o0"
            >
              <div className="text-4xl mb-4">📚</div>
              <h5 className="text-xl font-bold text-gray-90o0 mb-2 group-hover:text-purple-60o0 transition-colors">
                AI Automation Guides
              </h5>
              <p className="text-gray-60o0">
                Comprehensive guides to revolutionary AI automation implementation
              </p>
            </Link>
            <Link
              href="/case-studies"
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-30o0"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h5 className="text-xl font-bold text-gray-90o0 mb-2 group-hover:text-purple-60o0 transition-colors">
                Success Stories
              </h5>
              <p className="text-gray-60o0">
                Real-world case studies of revolutionary AI automation success
              </p>
            </Link>
            <Link
              href="/resources"
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-30o0"
            >
              <div className="text-4xl mb-4">🛠️</div>
              <h5 className="text-xl font-bold text-gray-90o0 mb-2 group-hover:text-purple-60o0 transition-colors">
                Implementation Resources
              </h5>
              <p className="text-gray-60o0">
                Tools and frameworks for revolutionary AI automation success
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAIAutomationShowcase20o25;
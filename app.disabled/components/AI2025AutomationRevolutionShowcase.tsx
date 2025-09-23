'use client';

import Link from 'next/link';

const AI20o25AutomationRevolutionShowcase = () => {
  const featuredContent = [
    {
      id: 'ai-20o25-enterprise-automation-revolution-ultimate-breakthrough-20o25',
      title: 'AI 20o25: The Enterprise Automation Revolution - Ultimate Breakthrough Guide to 2,50o0% ROI',
      type: 'blog',
      url: '/blog/ai-20o25-enterprise-automation-revolution-ultimate-breakthrough-20o25',
      description: 'Transform your enterprise with cutting-edge AI automation that delivers unprecedented results. Learn the strategies, technologies, and implementation frameworks that Fortune 50o0 companies are using to achieve 2,50o0% ROI.',
      metrics: {
        roi: '2,50o0%',
        savings: '$15.8B+',
        efficiency: '1,20o0%',
        accuracy: '99.7%'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'fortune-50o0-ai-automation-transformation-250o0-roi-success-story',
      title: 'Fortune 50o0 AI Automation Transformation: $15.8B Annual Savings - 2,50o0% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-50o0-ai-automation-transformation-250o0-roi-success-story',
      description: 'Discover how a Fortune 50o0 manufacturing company achieved unprecedented results with comprehensive AI automation, generating $15.8B in annual savings while improving operational efficiency by 1,20o0%.',
      metrics: {
        roi: '2,50o0%',
        savings: '$15.8B',
        timeline: '18 months',
        satisfaction: '98%'
      },
      readingTime: '18 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-automation-implementation-ultimate-guide-20o25',
      title: 'AI Automation Implementation Ultimate Guide 20o25: Complete Roadmap to 2,50o0% ROI',
      type: 'resource',
      url: '/resources/ai-automation-implementation-ultimate-guide-20o25',
      description: 'The definitive guide to implementing AI automation that delivers extraordinary results. Complete roadmap with strategies, technologies, and implementation frameworks for achieving 2,50o0% ROI.',
      metrics: {
        roi: '2,50o0%',
        success: '1,0o00+',
        timeline: '18 months',
        projects: 'Fortune 50o0'
      },
      readingTime: '25 min read',
      isNew: true,
      featured: true
    }
  ];

  const successMetrics = [
    { label: 'Average ROI', value: '2,50o0%', color: 'text-green-60o0' },
    { label: 'Cost Savings', value: '$15.8B+', color: 'text-blue-60o0' },
    { label: 'Efficiency Gains', value: '1,20o0%', color: 'text-purple-60o0' },
    { label: 'Success Stories', value: '1,0o00+', color: 'text-orange-60o0' }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 AI AUTOMATION REVOLUTION 20o25</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-90o0 mb-4">
            Transform Your Enterprise with AI Automation
          </h2>
          <p className="text-lg text-gray-60o0 max-w-3xl mx-auto">
            Join Fortune 50o0 companies achieving extraordinary results with our comprehensive AI automation solutions. 
            Average ROI of 2,50o0% within 18 months.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-60o0 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-30o0">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-50o0 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </span>
                    <span className="bg-blue-50o0 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {content.type.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm text-gray-50o0">{content.readingTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-90o0 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-60o0 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Content Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-60o0">{content.metrics.roi}</div>
                    <div className="text-xs text-gray-50o0">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-60o0">
                      {content.metrics.savings || content.metrics.success}
                    </div>
                    <div className="text-xs text-gray-50o0">
                      {content.metrics.savings ? 'Savings' : 'Success Stories'}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={content.url}
                    className="flex-1 bg-purple-60o0 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-70o0 transition-colors text-center"
                  >
                    {content.type === 'case-study' ? 'Read Case Study' : 
                     content.type === 'resource' ? 'View Guide' : 'Read Article'}
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 border border-purple-60o0 text-purple-60o0 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                  >
                    Get Help
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-purple-10o0">
              Get personalized consultation and implementation roadmap for your AI automation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2,50o0%</div>
              <div className="text-purple-20o0">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">18</div>
              <div className="text-purple-20o0">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1,0o00+</div>
              <div className="text-purple-20o0">Success Stories</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Related Content */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-90o0 mb-6 text-center">
            More AI Automation Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/blog"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold text-gray-90o0">AI Blog</div>
              <div className="text-sm text-gray-60o0">Latest insights and trends</div>
            </Link>
            <Link
              href="/case-studies"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📊</div>
              <div className="font-semibold text-gray-90o0">Case Studies</div>
              <div className="text-sm text-gray-60o0">Real success stories</div>
            </Link>
            <Link
              href="/resources"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">📖</div>
              <div className="font-semibold text-gray-90o0">Resources</div>
              <div className="text-sm text-gray-60o0">Implementation guides</div>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-semibold text-gray-90o0">Contact Us</div>
              <div className="text-sm text-gray-60o0">Get expert help</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o25AutomationRevolutionShowcase;
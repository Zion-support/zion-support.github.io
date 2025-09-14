import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UltimateContentRevolutionShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedStats, setAnimatedStats] = useState({
    roi: 0,
    timeReduction: 0,
    engagement: 0,
    costSavings: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targetStats = {
        roi: 25000,
        timeReduction: 95,
        engagement: 500,
        costSavings: 45
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          roi: Math.floor(targetStats.roi * progress),
          timeReduction: Math.floor(targetStats.timeReduction * progress),
          engagement: Math.floor(targetStats.engagement * progress),
          costSavings: Math.floor(targetStats.costSavings * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'features', label: 'Features', icon: '🚀' },
    { id: 'results', label: 'Results', icon: '📈' },
    { id: 'case-studies', label: 'Case Studies', icon: '💼' }
  ];

  const features = [
    {
      title: 'Autonomous Content Creation',
      description: 'AI generates high-quality content without human intervention',
      icon: '🤖',
      benefits: ['24/7 Content Production', 'Consistent Quality', 'Scalable Operations']
    },
    {
      title: 'Real-time Personalization',
      description: 'Content adapts instantly to user preferences and behavior',
      icon: '🎯',
      benefits: ['Dynamic Adaptation', 'Higher Engagement', 'Better Conversion']
    },
    {
      title: 'Multimodal Generation',
      description: 'Create text, images, videos, and interactive content',
      icon: '🎨',
      benefits: ['Multiple Formats', 'Rich Media', 'Cross-Platform']
    },
    {
      title: 'Predictive Strategy',
      description: 'AI anticipates trends and creates content before demand',
      icon: '🔮',
      benefits: ['Future-Ready', 'Market Leadership', 'Competitive Edge']
    }
  ];

  const results = [
    { metric: 'ROI', value: `${animatedStats.roi.toLocaleString()}%`, color: 'text-green-500' },
    { metric: 'Time Reduction', value: `${animatedStats.timeReduction}%`, color: 'text-blue-500' },
    { metric: 'Engagement Boost', value: `${animatedStats.engagement}%`, color: 'text-purple-500' },
    { metric: 'Cost Savings', value: `$${animatedStats.costSavings}M`, color: 'text-orange-500' }
  ];

  const caseStudies = [
    {
      company: 'Fortune 100 Tech Corp',
      industry: 'Technology',
      roi: '25,000%',
      highlight: 'Ultimate Content Revolution Implementation',
      link: '/content/case-studies/ai-2025-ultimate-content-revolution-25000-roi-success'
    },
    {
      company: 'Global Healthcare Provider',
      industry: 'Healthcare',
      roi: '15,000%',
      highlight: 'Medical Documentation Automation',
      link: '/content/case-studies/ai-2025-healthcare-revolution-complete-transformation-success'
    },
    {
      company: 'Financial Services Leader',
      industry: 'Finance',
      roi: '12,000%',
      highlight: 'Customer Communication Revolution',
      link: '/content/case-studies/ai-2025-financial-services-transformation-ultimate-success'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE CONTENT REVOLUTION SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how the AI 2025 Ultimate Content Revolution is transforming businesses worldwide 
            with unprecedented results and breakthrough technology.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    The Ultimate Content Revolution
                  </h3>
                  <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                    The AI 2025 Ultimate Content Revolution represents a paradigm shift in how businesses 
                    create, manage, and optimize content. This breakthrough technology delivers unprecedented 
                    results across all industries and business sizes.
                  </p>
                </div>

                {/* Animated Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map((result, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl">
                      <div className={`text-4xl font-bold ${result.color} mb-2`}>
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Why This Matters</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>Eliminates content creation bottlenecks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>Delivers consistent, high-quality content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>Scales content operations without proportional costs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>Provides competitive advantage through speed and quality</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">→</span>
                        <span>Massive ROI improvements (up to 25,000%)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">→</span>
                        <span>Dramatic time savings (95% reduction)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">→</span>
                        <span>Enhanced customer engagement (500% increase)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">→</span>
                        <span>Significant cost savings (millions annually)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Revolutionary Features
                  </h3>
                  <p className="text-lg text-gray-600">
                    Discover the cutting-edge capabilities that make the Ultimate Content Revolution possible
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
                      <div className="flex items-start mb-4">
                        <div className="text-4xl mr-4">{feature.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm">
                            <span className="text-green-500 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Proven Results
                  </h3>
                  <p className="text-lg text-gray-600">
                    Real-world results from companies that have implemented the Ultimate Content Revolution
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Performance Metrics</h4>
                    {results.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                        <span className="text-lg font-medium text-gray-700">{result.metric}</span>
                        <span className={`text-2xl font-bold ${result.color}`}>
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-gray-900">Business Impact</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="font-bold text-green-800 mb-1">Revenue Growth</div>
                        <div className="text-sm text-green-600">Average 340% increase in revenue</div>
                      </div>
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="font-bold text-blue-800 mb-1">Operational Efficiency</div>
                        <div className="text-sm text-blue-600">95% reduction in content creation time</div>
                      </div>
                      <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                        <div className="font-bold text-purple-800 mb-1">Customer Satisfaction</div>
                        <div className="text-sm text-purple-600">98% client satisfaction rate</div>
                      </div>
                      <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                        <div className="font-bold text-orange-800 mb-1">Cost Savings</div>
                        <div className="text-sm text-orange-600">Average $45M in annual savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'case-studies' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Success Stories
                  </h3>
                  <p className="text-lg text-gray-600">
                    Real companies achieving extraordinary results with the Ultimate Content Revolution
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <Link
                      key={index}
                      href={study.link}
                      className="group bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {study.roi}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">ROI</div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                          {study.company}
                        </h4>
                        <div className="text-sm text-gray-600 mb-2">{study.industry}</div>
                        <div className="text-sm text-purple-600 font-medium">
                          {study.highlight}
                        </div>
                        <div className="mt-4 text-sm text-purple-600 group-hover:text-purple-800">
                          Read Full Case Study →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join the Ultimate Content Revolution and achieve unprecedented results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/content/blog/ai-2025-ultimate-content-revolution-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentRevolutionShowcase;
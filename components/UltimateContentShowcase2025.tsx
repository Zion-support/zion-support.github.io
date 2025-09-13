import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025: React.FC = () => {
  const contentSections = [
    {
      id: 'ai-2025-breakthroughs',
      title: '🚀 AI 2025 Revolutionary Breakthroughs',
      description: 'Discover the latest AI innovations transforming industries worldwide',
      category: 'AI Innovation',
      badge: 'BREAKTHROUGH',
      badgeColor: 'bg-red-500',
      link: '/ai-2025-revolutionary-breakthrough-announcement',
      features: [
        '99.9% Accuracy Rate',
        '10,000x Faster Processing',
        '2,500-5,000% ROI',
        'Global Enterprise Success'
      ]
    },
    {
      id: 'quantum-computing-2025',
      title: '⚛️ Quantum Computing Solutions 2025',
      description: 'Revolutionary quantum computing breakthroughs for enterprise applications',
      category: 'Quantum Technology',
      badge: 'REVOLUTIONARY',
      badgeColor: 'bg-indigo-500',
      link: '/quantum-computing-solutions-2025',
      features: [
        'Error-Corrected Quantum Systems',
        'Quantum Supremacy Achieved',
        '15,000% ROI Potential',
        'Neural-Quantum Fusion'
      ]
    },
    {
      id: 'automation-mastery',
      title: '🤖 Enterprise Automation Mastery',
      description: 'Complete automation solutions for modern businesses',
      category: 'Automation',
      badge: 'MASTERY',
      badgeColor: 'bg-green-500',
      link: '/enterprise-automation-mastery-2026',
      features: [
        'Intelligent Process Automation',
        'Autonomous Decision Systems',
        '800% ROI Average',
        'Zero-Touch Operations'
      ]
    },
    {
      id: 'future-predictions',
      title: '🔮 AI 2026-2030 Future Predictions',
      description: 'Exclusive insights into the next decade of AI evolution',
      category: 'Future Tech',
      badge: 'EXCLUSIVE',
      badgeColor: 'bg-purple-500',
      link: '/ai-2026-2030-future-predictions',
      features: [
        'Neural Interface Revolution',
        'Consciousness AI Development',
        'Infinite ROI Potential',
        'Transcendent Intelligence'
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Global Enterprise Transformation',
      company: 'Fortune 500 Manufacturing',
      roi: '10,000%',
      description: 'Complete digital transformation with AI automation',
      link: '/case-studies/ai-2025-global-transformation-breakthrough'
    },
    {
      title: 'Quantum Financial Optimization',
      company: 'Leading Investment Bank',
      roi: '15,000%',
      description: 'Quantum computing revolutionizing financial services',
      link: '/case-studies/quantum-ai-financial-optimization-breakthrough-2026'
    },
    {
      title: 'Neural Interface Healthcare',
      company: 'Major Hospital Network',
      roi: '5,000%',
      description: '95% patient recovery success with neural interfaces',
      link: '/case-studies/ai-2026-neural-interface-healthcare-breakthrough'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold mb-4">
            🚀 ULTIMATE CONTENT SHOWCASE 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, quantum computing innovations, 
            and future technology predictions that are transforming industries worldwide.
          </p>
        </div>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contentSections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {section.category}
                  </span>
                  <span className={`${section.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse`}>
                    {section.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {section.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={section.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  Explore Content
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Success Stories & Case Studies
            </h3>
            <p className="text-lg text-gray-600">
              Real-world transformations with measurable ROI results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    Case Study
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    {study.roi}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {study.title}
                </h4>
                
                <p className="text-sm text-gray-600 mb-3">
                  {study.company}
                </p>
                
                <p className="text-gray-700 mb-4">
                  {study.description}
                </p>

                <Link
                  href={study.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of enterprises already achieving breakthrough results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/ai-implementation-guide-2025"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;
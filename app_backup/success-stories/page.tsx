import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Success Stories - Zion Tech Group',
  description: 'Discover how our clients achieved remarkable results through AI transformation, quantum computing, and neural interface implementations.',
  keywords: ['success stories', 'AI transformation', 'quantum computing', 'neural interfaces', 'case studies', 'ROI'],
};

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 'fortune-500-ai-transformation',
      title: 'Fortune 500 AI Transformation: 800% ROI in 6 Months',
      company: 'Leading Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Manual processes consuming 60% of operational time, data silos preventing real-time decisions',
      solution: 'Comprehensive AI transformation with intelligent automation and advanced analytics',
      results: {
        roi: '800%',
        costSavings: '$50M annually',
        efficiency: '340% increase',
        satisfaction: '85% improvement'
      },
      image: '/images/success-stories/fortune-500-ai.jpg',
      link: '/blog/ai-2025-ultimate-business-transformation-success-story'
    },
    {
      id: 'neural-interface-productivity',
      title: 'Neural Interface Implementation: 500% Productivity Increase',
      company: 'Leading Technology Company',
      industry: 'Software Development',
      challenge: 'Cognitive overload from multiple tools, context switching reducing focus',
      solution: 'Neural interface technology for thought-controlled computing',
      results: {
        productivity: '500% increase',
        errors: '90% reduction',
        satisfaction: '95% satisfaction',
        savings: '$15M annually'
      },
      image: '/images/success-stories/neural-interface.jpg',
      link: '/case-studies/neural-interface-enterprise-implementation-success'
    },
    {
      id: 'quantum-computing-optimization',
      title: 'Quantum Computing Breakthrough: 1000x Faster Problem Solving',
      company: 'Financial Services Leader',
      industry: 'Financial Services',
      challenge: 'Complex optimization problems taking days to solve',
      solution: 'Quantum computing implementation for advanced optimization',
      results: {
        speed: '1000x faster',
        costReduction: '50% savings',
        accuracy: '99.9% accuracy',
        revenue: '$25M additional'
      },
      image: '/images/success-stories/quantum-computing.jpg',
      link: '/blog/quantum-computing-2025-business-breakthrough-ultimate-guide'
    }
  ];

  return (
    <div>
      <SEO
        title="Success Stories - Zion Tech Group"
        description="Discover how our clients achieved remarkable results through AI transformation, quantum computing, and neural interface implementations."
        keywords="success stories, AI transformation, quantum computing, neural interfaces, case studies, ROI"
        url="/success-stories"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Real results from real companies. Discover how our clients achieved 
              remarkable transformations through cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-6xl text-white">
                      {story.id === 'fortune-500-ai-transformation' && '🏢'}
                      {story.id === 'neural-interface-productivity' && '🧠'}
                      {story.id === 'quantum-computing-optimization' && '⚛️'}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        {story.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      <strong>Challenge:</strong> {story.challenge}
                    </p>
                    <p className="text-gray-600 mb-6">
                      <strong>Solution:</strong> {story.solution}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(story.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={story.link}
                      className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of companies that have transformed their operations 
              with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
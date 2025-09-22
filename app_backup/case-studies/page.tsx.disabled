import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
// import ErrorBoundary from '../../components/ErrorBoundary';
import SuccessStoriesShowcase2026 from '../../components/SuccessStoriesShowcase2026';

export const metadata = {
  title: 'AI Success Stories & Case Studies - Proven ROI Results',
  description: 'Discover real success stories from companies that have transformed their operations with our AI solutions, achieving 500%+ ROI and unprecedented efficiency gains.',
  keywords: ['AI case studies', 'success stories', 'AI ROI', 'business transformation', 'AI results', 'client testimonials', 'AI implementation'],
};

export default function CaseStudiesPage() {
  const additionalStories = [
    {
      id: 5,
      company: 'DataFlow Systems',
      industry: 'Data Analytics',
      logo: '📊',
      challenge: 'Needed to process 10TB of data daily with real-time insights and predictions',
      solution: 'Implemented quantum-enhanced analytics with neural network optimization',
      results: {
        timeSaved: '98%',
        costReduction: '90%',
        productivityIncrease: '600%',
        roi: '750%'
      },
      testimonial: 'The quantum analytics system processes our data 100x faster than before. Real-time insights have revolutionized our decision-making process.',
      author: 'Lisa Chen',
      position: 'Head of Analytics, DataFlow Systems',
      image: '👩‍💻'
    },
    {
      id: 6,
      company: 'SecureNet Corp',
      industry: 'Cybersecurity',
      logo: '🔐',
      challenge: 'Required advanced threat detection and prevention for enterprise networks',
      solution: 'Deployed AI-powered security systems with neural threat analysis',
      results: {
        timeSaved: '85%',
        costReduction: '70%',
        productivityIncrease: '400%',
        roi: '550%'
      },
      testimonial: 'Our security posture has been completely transformed. The AI system detects threats before they become problems.',
      author: 'Robert Martinez',
      position: 'CISO, SecureNet Corp',
      image: '👨‍💼'
    }
  ];

  return (
    <>
      <SEO
        title="AI Success Stories & Case Studies - Proven ROI Results"
        description="Discover real success stories from companies that have transformed their operations with our AI solutions, achieving 500%+ ROI and unprecedented efficiency gains."
        keywords="AI case studies, success stories, AI ROI, business transformation, AI results, client testimonials, AI implementation, neural superintelligence, quantum computing"
        url="/case-studies"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real Results,
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Real Success
                </span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how leading companies are transforming their operations with our AI solutions, 
                achieving remarkable ROI and unprecedented efficiency gains.
              </p>
            </div>
          </div>
        </section>

        {/* Main Success Stories Showcase */}
        <SuccessStoriesShowcase2026 />

        {/* Additional Case Studies */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore additional case studies showcasing the transformative power of our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalStories.map((story) => (
                <div key={story.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{story.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                        <p className="text-gray-600">{story.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">{story.results.timeSaved}</div>
                        <div className="text-sm text-gray-600">Time Saved</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">{story.results.roi}</div>
                        <div className="text-sm text-gray-600">ROI</div>
                      </div>
                    </div>

                    <blockquote className="text-gray-700 italic mb-4">
                      "{story.testimonial}"
                    </blockquote>

                    <div className="text-center">
                      <div className="font-semibold text-gray-900">{story.author}</div>
                      <div className="text-gray-600 text-sm">{story.position}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Track Record
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Numbers that speak for themselves - our AI solutions deliver consistent, measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-300 mb-2">500%+</div>
                <div className="text-lg opacity-80">Average ROI</div>
                <div className="text-sm opacity-60 mt-2">Across all projects</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-300 mb-2">1000+</div>
                <div className="text-lg opacity-80">Projects Delivered</div>
                <div className="text-sm opacity-60 mt-2">Successfully completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-2">99%</div>
                <div className="text-lg opacity-80">Client Satisfaction</div>
                <div className="text-sm opacity-60 mt-2">Based on feedback</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-300 mb-2">24/7</div>
                <div className="text-lg opacity-80">Support Available</div>
                <div className="text-sm opacity-60 mt-2">Expert assistance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Join These Success Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start your transformation journey today and achieve similar results with our proven AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
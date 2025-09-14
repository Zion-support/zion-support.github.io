import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'Success Stories & Case Studies - Zion Tech Group',
  description: 'Discover real-world success stories and case studies of AI transformation, quantum computing implementations, and business automation projects.',
  keywords: ['case studies', 'success stories', 'AI transformation', 'quantum computing', 'business automation', 'ROI'],
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation: 800% ROI Success Story",
      description: "Discover how a Fortune 500 company achieved 800% ROI through comprehensive AI transformation, revolutionizing their operations and competitive position.",
      href: "/case-studies/fortune-500-ai-transformation-success-story",
      image: "/images/fortune-500-ai-transformation.jpg",
      company: "Global Manufacturing Conglomerate",
      industry: "Manufacturing & Supply Chain",
      roi: "800%",
      duration: "24 months",
      featured: true
    }
  ];

  const stats = [
    { label: "Average ROI", value: "340%" },
    { label: "Cost Reduction", value: "45%" },
    { label: "Efficiency Gain", value: "85%" },
    { label: "Client Satisfaction", value: "98%" }
  ];

  return (
    <div>
      <SEO
        title="Success Stories & Case Studies - Zion Tech Group"
        description="Discover real-world success stories and case studies of AI transformation, quantum computing implementations, and business automation projects."
        keywords="case studies, success stories, AI transformation, quantum computing, business automation, ROI"
        url="/case-studies"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🏆 SUCCESS STORIES</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Proven Results
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Real-world success stories and case studies showcasing the transformative power 
                of AI, quantum computing, and autonomous systems in enterprise environments.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Case Studies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Featured
                      </span>
                      <span className="text-sm text-gray-500">{study.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {study.title}
                    </h3>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Company:</span> {study.company}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <span className="font-semibold">Industry:</span> {study.industry}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">ROI:</span> <span className="text-green-600 font-bold">{study.roi}</span>
                      </p>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {study.description}
                    </p>
                    <Link
                      href={study.href}
                      className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read Full Case Study →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Proven Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">340%</div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of companies that have transformed their operations with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
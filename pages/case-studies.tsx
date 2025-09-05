import React from 'react';
import Layout from '../components/Layout';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from 'lucide-react';

const caseStudies = [
  {
    title: 'Healthcare AI Platform Implementation',
    client: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Improve diagnostic accuracy and reduce patient wait times',
    solution: 'AI-powered diagnostic platform with medical imaging analysis',
    results: [
      '40% reduction in diagnostic time',
      '25% improvement in diagnostic accuracy',
      '60% increase in patient satisfaction',
      '30% cost savings in radiology department'
    ],
    image: '/images/case-studies/healthcare-ai.jpg',
    testimonial: 'The AI platform has revolutionized our diagnostic process, enabling us to serve more patients with higher accuracy.',
    author: 'Dr. Sarah Johnson, Chief Medical Officer'
  },
  {
    title: 'Financial Services Digital Transformation',
    client: 'Community Credit Union',
    industry: 'Financial Services',
    challenge: 'Modernize legacy systems and improve customer experience',
    solution: 'Complete digital banking platform with mobile-first design',
    results: [
      '50% increase in mobile banking adoption',
      '35% reduction in customer service calls',
      '45% improvement in loan processing time',
      '20% increase in customer retention'
    ],
    image: '/images/case-studies/financial-digital.jpg',
    testimonial: 'The digital transformation has positioned us as a leader in modern banking services.',
    author: 'Michael Chen, CEO'
  },
  {
    title: 'Manufacturing IoT Implementation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Optimize production processes and reduce downtime',
    solution: 'Industrial IoT platform with predictive maintenance',
    results: [
      '30% reduction in unplanned downtime',
      '25% increase in production efficiency',
      '40% improvement in equipment utilization',
      '50% reduction in maintenance costs'
    ],
    image: '/images/case-studies/manufacturing-iot.jpg',
    testimonial: 'The IoT implementation has transformed our manufacturing operations and significantly improved our bottom line.',
    author: 'Jennifer Martinez, Operations Director'
  },
  {
    title: 'E-commerce Platform Development',
    client: 'Fashion Retail Chain',
    industry: 'Retail',
    challenge: 'Expand online presence and improve customer experience',
    solution: 'Omnichannel e-commerce platform with AI recommendations',
    results: [
      '200% increase in online sales',
      '45% improvement in conversion rate',
      '60% increase in average order value',
      '35% reduction in cart abandonment'
    ],
    image: '/images/case-studies/ecommerce-platform.jpg',
    testimonial: 'The new platform has been a game-changer for our online business, driving significant growth.',
    author: 'David Thompson, E-commerce Director'
  }
];

export default function CaseStudiesPage() {
  return (
    <Layout
      title="Case Studies - Zion Tech Group"
      description="Explore our success stories and client results. Real-world case studies showcasing our technology solutions and their impact on businesses."
      keywords="case studies, success stories, client results, technology implementation, business transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations and achieve remarkable results 
                with our technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients across various industries
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                      <p className="text-blue-100">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-4">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-6">
                      <blockquote className="text-gray-600 italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-sm text-gray-500">— {study.author}</cite>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Proven results across industries and use cases
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Average Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven technology solutions.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
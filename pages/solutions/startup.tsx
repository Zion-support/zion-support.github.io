import React from 'react';
import Layout from '../../components/Layout';
import { Rocket, Zap, Target, Users, CheckCircle, Star } from 'lucide-react';

const solutions = [
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Rapid development of minimum viable products',
    features: ['Agile Development', 'Rapid Prototyping', 'User Testing', 'Iterative Improvement']
  },
  {
    icon: Zap,
    title: 'Startup Acceleration',
    description: 'Technology solutions to accelerate startup growth',
    features: ['Scalable Architecture', 'Cloud Infrastructure', 'Performance Optimization', 'Cost Management']
  },
  {
    icon: Target,
    title: 'Market Validation',
    description: 'Tools and analytics for market validation',
    features: ['User Analytics', 'A/B Testing', 'Market Research', 'Customer Feedback']
  },
  {
    icon: Users,
    title: 'Team Scaling',
    description: 'Technology solutions for growing teams',
    features: ['Collaboration Tools', 'Project Management', 'Communication Platforms', 'Knowledge Sharing']
  }
];

const benefits = [
  'Fast Time to Market',
  'Cost-Effective Solutions',
  'Scalable Technology',
  'Expert Guidance',
  'Flexible Pricing',
  'Startup-Friendly Support'
];

export default function StartupPage() {
  return (
    <Layout
      title="Startup Solutions - Zion Tech Group"
      description="Technology solutions for startups and growing businesses. MVP development, startup acceleration, and scalable solutions for entrepreneurs."
      keywords="startup solutions, MVP development, startup acceleration, entrepreneur technology, startup consulting, scalable solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Startup
                <span className="block text-green-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Technology solutions designed for startups and growing businesses. 
                From MVP development to startup acceleration, we help entrepreneurs 
                build and scale their technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Explore Startup Solutions
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  Schedule Startup Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Startup Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Technology solutions designed for startups and growing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Startup Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in startup technology and rapid development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Launch Your Startup
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let our startup technology experts help you build and scale your next big idea.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Startup Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
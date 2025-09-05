import React from 'react';
import Layout from '../../components/Layout';
import { Building2, Users, Shield, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Scalable Architecture',
    description: 'Enterprise-grade solutions that grow with your business'
  },
  {
    icon: Users,
    title: 'Multi-tenant Support',
    description: 'Secure multi-user environments with role-based access'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security protocols and compliance standards'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Optimized for speed and reliability at scale'
  },
  {
    icon: Target,
    title: 'Custom Integration',
    description: 'Seamless integration with existing enterprise systems'
  },
  {
    icon: CheckCircle,
    title: '24/7 Support',
    description: 'Dedicated enterprise support team'
  }
];

const benefits = [
  'Reduced operational costs by up to 40%',
  'Improved system reliability and uptime',
  'Enhanced security and compliance',
  'Streamlined business processes',
  'Better data management and analytics',
  'Faster time-to-market for new initiatives'
];

export default function EnterpriseSolutions() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise technology solutions designed for large-scale businesses. Scalable, secure, and reliable solutions."
      keywords="enterprise solutions, large business, scalable technology, enterprise software"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your enterprise with scalable, secure, and intelligent technology solutions
                designed for large-scale operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for scale, security, and performance to meet the demands of modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Enterprise Solutions?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our enterprise solutions are designed to handle the complexity and scale of large organizations
                  while maintaining security, performance, and reliability.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Enterprise?</h3>
                <p className="text-lg mb-6">
                  Let our experts help you design and implement the perfect enterprise solution
                  for your organization.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Enterprise?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our enterprise solutions team to discuss your specific requirements
              and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
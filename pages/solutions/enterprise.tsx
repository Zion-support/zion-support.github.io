import React from 'react';
import Layout from '../../components/Layout';
import { Building2, Shield, BarChart3, Users, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Architecture',
    description: 'Scalable and secure enterprise-grade solutions',
    features: ['Microservices Architecture', 'API Management', 'Service Mesh', 'Enterprise Integration']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Comprehensive security solutions for large organizations',
    features: ['Identity & Access Management', 'Data Encryption', 'Compliance Management', 'Threat Detection']
  },
  {
    icon: BarChart3,
    title: 'Enterprise Analytics',
    description: 'Advanced analytics and business intelligence',
    features: ['Data Warehousing', 'Real-time Analytics', 'Predictive Analytics', 'Executive Dashboards']
  },
  {
    icon: Users,
    title: 'Enterprise Collaboration',
    description: 'Tools and platforms for enterprise collaboration',
    features: ['Team Collaboration', 'Document Management', 'Workflow Automation', 'Knowledge Management']
  }
];

const benefits = [
  'Scalable Solutions',
  'Enterprise Security',
  '24/7 Support',
  'Compliance Ready',
  'Cost Optimization',
  'Future-Proof Technology'
];

export default function EnterprisePage() {
  return (
    <Layout
      title="Enterprise Solutions - Zion Tech Group"
      description="Comprehensive enterprise solutions for large organizations. Scalable architecture, security, analytics, and collaboration tools for enterprise needs."
      keywords="enterprise solutions, enterprise architecture, enterprise security, enterprise analytics, large organizations, enterprise software"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Enterprise
                <span className="block text-gray-700">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for large enterprises. 
                From scalable architecture to enterprise security, we help organizations 
                transform their operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Explore Enterprise Solutions
                </button>
                <button className="border border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Schedule Enterprise Consultation
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
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for large organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <solution.icon className="h-8 w-8 text-gray-700 mr-3" />
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
                Why Choose Our Enterprise Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in enterprise technology and large-scale implementations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-gray-700 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Enterprise
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our enterprise technology experts help you build scalable, secure, and efficient solutions.
            </p>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Enterprise Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
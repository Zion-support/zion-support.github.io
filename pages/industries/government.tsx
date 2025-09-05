import React from 'react';
import Layout from '../../components/Layout';
import { Shield, Users, FileText, Database, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Shield,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital services and portals',
    features: ['Online Applications', 'Digital Identity', 'Service Portals', 'Mobile Government']
  },
  {
    icon: Users,
    title: 'Citizen Engagement',
    description: 'Platforms for citizen participation and feedback',
    features: ['Public Forums', 'Feedback Systems', 'Voting Platforms', 'Community Engagement']
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Secure document processing and management systems',
    features: ['Digital Workflows', 'Document Security', 'Compliance Tracking', 'Archive Management']
  },
  {
    icon: Database,
    title: 'Data Analytics & Reporting',
    description: 'Government data analysis and public reporting',
    features: ['Open Data Platforms', 'Performance Metrics', 'Predictive Analytics', 'Public Dashboards']
  }
];

const benefits = [
  'Improved Citizen Services',
  'Enhanced Transparency',
  'Cost Reduction',
  'Better Data Security',
  'Streamlined Processes',
  'Increased Efficiency'
];

export default function GovernmentPage() {
  return (
    <Layout
      title="Government Technology Solutions - Zion Tech Group"
      description="Transform government services with our comprehensive technology solutions. Digital services, citizen engagement, document management, and data analytics for government agencies."
      keywords="government technology, digital government, citizen services, government data, public sector IT, government compliance"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Government
                <span className="block text-gray-700">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform government services with our comprehensive technology solutions. 
                From digital services to citizen engagement, we help government agencies 
                improve efficiency and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Explore Government Solutions
                </button>
                <button className="border border-gray-700 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Government Demo
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
                Government Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for government agencies
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
                Why Choose Our Government Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in government technology and compliance
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
              Transform Your Government Services
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let our government technology experts help you improve citizen services and operational efficiency.
            </p>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Government Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
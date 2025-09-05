import React from 'react';
import Layout from '../../components/Layout';
import { Building2, Shield, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital services and online portals'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Government-grade security and regulatory compliance'
  },
  {
    icon: Users,
    title: 'Citizen Engagement',
    description: 'Platforms for citizen participation and feedback'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Secure document storage and management systems'
  },
  {
    icon: CheckCircle,
    title: 'Workflow Automation',
    description: 'Automated government processes and approvals'
  },
  {
    icon: ArrowRight,
    title: 'Data Analytics',
    description: 'Government data analysis and reporting tools'
  }
];

const benefits = [
  'Improved citizen services and satisfaction',
  'Enhanced government transparency',
  'Streamlined administrative processes',
  'Better data security and compliance',
  'Reduced operational costs',
  'Increased government efficiency'
];

export default function GovernmentSolutions() {
  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions for public sector organizations. Digital services, citizen engagement, and government process automation."
      keywords="government solutions, digital government, public sector, citizen services, government technology, e-government"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform government operations with secure, compliant technology solutions
                designed for public sector organizations and citizen services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors">
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
                Government Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to modernize government operations
                and improve citizen services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-gray-600" />
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
                  Modernizing Government
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our government solutions help public sector organizations improve
                  citizen services, enhance transparency, and streamline operations.
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
              <div className="bg-gradient-to-r from-gray-700 to-blue-800 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Modernize Government?</h3>
                <p className="text-lg mb-6">
                  Let our government technology experts help you implement solutions
                  that improve citizen services and government efficiency.
                </p>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
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
              Ready to Transform Government?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our government solutions team to discuss your specific requirements
              and discover how we can help modernize your government operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Government Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Government Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
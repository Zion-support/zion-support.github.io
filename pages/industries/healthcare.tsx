import React from 'react';
import Layout from '../../components/Layout';
import { Heart, Shield, Brain, Database, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Heart,
    title: 'Electronic Health Records',
    description: 'Secure, interoperable EHR systems for better patient care',
    features: ['HIPAA Compliance', 'Interoperability', 'Patient Portal', 'Clinical Decision Support']
  },
  {
    icon: Brain,
    title: 'AI-Powered Diagnostics',
    description: 'Machine learning solutions for medical imaging and diagnosis',
    features: ['Medical Imaging AI', 'Predictive Analytics', 'Risk Assessment', 'Treatment Recommendations']
  },
  {
    icon: Shield,
    title: 'Healthcare Security',
    description: 'Comprehensive security solutions for healthcare data',
    features: ['HIPAA Compliance', 'Data Encryption', 'Access Controls', 'Audit Logging']
  },
  {
    icon: Database,
    title: 'Health Data Analytics',
    description: 'Advanced analytics for population health and outcomes',
    features: ['Population Health', 'Outcome Analytics', 'Cost Analysis', 'Quality Metrics']
  }
];

const benefits = [
  'Improved Patient Outcomes',
  'Reduced Healthcare Costs',
  'Enhanced Data Security',
  'Streamlined Workflows',
  'Better Clinical Decisions',
  'Regulatory Compliance'
];

export default function HealthcarePage() {
  return (
    <Layout
      title="Healthcare Technology Solutions - Zion Tech Group"
      description="Transform healthcare delivery with our comprehensive technology solutions. EHR systems, AI diagnostics, security, and analytics for healthcare organizations."
      keywords="healthcare technology, EHR, HIPAA compliance, medical AI, healthcare analytics, telemedicine, health data"
    >
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Healthcare
                <span className="block text-green-600">Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with our comprehensive technology solutions. 
                From EHR systems to AI-powered diagnostics, we help healthcare organizations 
                improve patient outcomes and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Explore Healthcare Solutions
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                  View Case Studies
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
                Healthcare Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed specifically for healthcare organizations
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
                Why Choose Our Healthcare Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in healthcare technology and regulatory compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-green-600 mr-3" />
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
              Transform Your Healthcare Organization
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Let our healthcare technology experts help you improve patient care and operational efficiency.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Healthcare Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
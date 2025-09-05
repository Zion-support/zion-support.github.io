import React from 'react';
import Layout from '../../components/Layout';
import { Heart, Shield, Database, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Patient Data Management',
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data.'
  },
  {
    icon: Shield,
    title: 'Healthcare Security',
    description: 'Advanced cybersecurity solutions designed specifically for healthcare environments.'
  },
  {
    icon: Database,
    title: 'Electronic Health Records',
    description: 'Custom EHR solutions that integrate seamlessly with existing healthcare workflows.'
  },
  {
    icon: Users,
    title: 'Telemedicine Platforms',
    description: 'Remote consultation and patient monitoring systems for modern healthcare delivery.'
  },
  {
    icon: Activity,
    title: 'Health Analytics',
    description: 'AI-powered analytics for population health management and predictive insights.'
  }
];

const solutions = [
  'HIPAA-Compliant Cloud Infrastructure',
  'Electronic Health Record (EHR) Systems',
  'Telemedicine & Remote Patient Monitoring',
  'Healthcare Data Analytics & AI',
  'Medical Device Integration',
  'Patient Portal Development',
  'Healthcare Mobile Applications',
  'Interoperability Solutions (FHIR)',
  'Healthcare Cybersecurity',
  'Population Health Management'
];

export default function HealthcareSolutionsPage() {
  return (
    <Layout 
      title="Healthcare Solutions - Zion Tech Group"
      description="Transform healthcare delivery with our HIPAA-compliant solutions, EHR systems, telemedicine platforms, and healthcare analytics."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Healthcare
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare delivery with our HIPAA-compliant technology solutions. 
                From EHR systems to telemedicine platforms, we help healthcare organizations 
                deliver better patient care through innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our healthcare solutions are designed to improve patient outcomes, 
                streamline operations, and ensure compliance with healthcare regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Healthcare Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gray-800/50 rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  HIPAA Compliant & Secure
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  All our healthcare solutions are built with security and compliance in mind, 
                  ensuring your patient data is protected and your organization meets regulatory requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>
                  <p className="text-gray-300">Built to meet all HIPAA requirements for healthcare data protection.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Secure Infrastructure</h3>
                  <p className="text-gray-300">Enterprise-grade security measures to protect sensitive healthcare data.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-300">Continuous monitoring and alerting for security and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare Delivery?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our healthcare technology experts help you implement solutions that 
                improve patient care while ensuring compliance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                  Download Healthcare Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
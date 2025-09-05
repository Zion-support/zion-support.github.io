import React from 'react';
import Layout from '../../components/Layout';
import { Heart, Shield, Database, Users, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    title: "HIPAA Compliance",
    description: "Ensure full compliance with healthcare data protection regulations",
    icon: Shield,
    features: ["Data Encryption", "Access Controls", "Audit Logging", "Risk Assessment"]
  },
  {
    title: "Electronic Health Records",
    description: "Secure and efficient EHR systems for better patient care",
    icon: Database,
    features: ["Patient Data Management", "Interoperability", "Clinical Decision Support", "Telemedicine Integration"]
  },
  {
    title: "Healthcare Analytics",
    description: "Data-driven insights to improve patient outcomes and operational efficiency",
    icon: Heart,
    features: ["Patient Analytics", "Clinical Research", "Population Health", "Predictive Modeling"]
  },
  {
    title: "Telemedicine Platform",
    description: "Comprehensive telehealth solutions for remote patient care",
    icon: Users,
    features: ["Video Consultations", "Remote Monitoring", "Appointment Scheduling", "Prescription Management"]
  }
];

const benefits = [
  "HIPAA Compliant Solutions",
  "Improved Patient Outcomes",
  "Reduced Operational Costs",
  "Enhanced Data Security",
  "Streamlined Workflows",
  "Better Care Coordination"
];

export default function HealthcareSolutionsPage() {
  return (
    <Layout
      title="Healthcare Solutions - Zion Tech Group"
      description="Comprehensive healthcare technology solutions including HIPAA compliance, EHR systems, telemedicine, and healthcare analytics."
      keywords="healthcare solutions, HIPAA compliance, EHR, telemedicine, healthcare analytics, medical software"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-green-900 to-teal-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Healthcare
                <span className="block text-blue-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform healthcare delivery with our comprehensive technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Healthcare Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Healthcare Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Healthcare Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed specifically for healthcare organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Healthcare Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique challenges of healthcare and deliver solutions that improve patient care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Healthcare Organization
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us help you implement technology solutions that improve patient care and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Healthcare Project
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
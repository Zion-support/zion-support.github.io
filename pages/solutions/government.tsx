import React from 'react';
import Layout from '../../components/Layout';
import { Shield, Users, FileText, Globe, CheckCircle, Zap } from 'lucide-react';

const solutions = [
  {
    title: "Digital Government Services",
    description: "Citizen-centric digital services for government agencies",
    icon: Globe,
    features: ["Citizen Portals", "Online Applications", "Digital Forms", "Service Automation"]
  },
  {
    title: "Data Security & Compliance",
    description: "Advanced security measures for government data protection",
    icon: Shield,
    features: ["FISMA Compliance", "Data Encryption", "Access Controls", "Audit Logging"]
  },
  {
    title: "Citizen Engagement",
    description: "Platforms to improve citizen-government interaction",
    icon: Users,
    features: ["Public Forums", "Feedback Systems", "Transparency Tools", "Communication Platforms"]
  },
  {
    title: "Document Management",
    description: "Secure document management and workflow automation",
    icon: FileText,
    features: ["Document Storage", "Workflow Automation", "Version Control", "Digital Signatures"]
  }
];

const benefits = [
  "Enhanced Security",
  "Improved Efficiency",
  "Better Citizen Services",
  "Regulatory Compliance",
  "Cost Savings",
  "Transparency"
];

export default function GovernmentSolutionsPage() {
  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions including digital services, data security, citizen engagement, and document management."
      keywords="government solutions, digital government, citizen services, FISMA compliance, public sector technology"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government
                <span className="block text-blue-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Secure and efficient technology solutions for government agencies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Government Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Government Case Studies
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
                Government Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed for government agencies and public sector organizations
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
                Why Choose Our Government Solutions?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the unique requirements of government agencies and deliver secure, compliant solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Modernize Government Services
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let us help you implement technology solutions that improve citizen services and operational efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Government Project
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
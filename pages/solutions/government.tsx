import React from 'react';
import Layout from '../../components/Layout';
import { Shield, Users, FileText, Globe, Database, CheckCircle, ArrowRight } from 'lucide-react';
const features = [
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance',
    description: 'FISMA, FedRAMP, and other government security standards compliance solutions.'
  },
  {
    icon: Users,
    title: 'Citizen Services',
    description: 'Digital platforms for citizen engagement, service delivery, and government transparency.'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Secure document management and workflow systems for government operations.'
  },
  {
    icon: Globe,
    title: 'Open Data Platforms',
    description: 'Public data portals and open government initiatives for transparency and accountability.'
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Government data analytics and business intelligence for informed decision making.'
  }
];
const solutions = [
  'Citizen Portal Development',
  'Government Data Analytics',
  'Cybersecurity Solutions',
  'Document Management Systems',
  'Open Data Platforms',
  'E-Government Services',
  'Digital Identity Solutions',
  'Government Mobile Applications',
  'Compliance Management',
  'Public Sector Cloud Solutions'
];
export default function GovernmentSolutionsPage() {
  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Transform government operations with our secure, compliant solutions including citizen portals, cybersecurity, document management, and open data platforms."
    >
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Government
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform government operations with our secure, compliant technology solutions.
                From citizen portals to cybersecurity, we help government agencies deliver
                better services while maintaining the highest security standards.
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
                Comprehensive Government Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our government solutions are designed to enhance citizen services,
                improve operational efficiency, and ensure compliance with government regulations.
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
                Our Government Solutions
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
                  Government Compliant & Secure
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  All our government solutions are built with security and compliance in mind,
                  ensuring your systems meet the highest government standards and regulations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">FISMA Compliant</h3>
                  <p className="text-gray-300">Built to meet all FISMA requirements for federal information security.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">FedRAMP Authorized</h3>
                  <p className="text-gray-300">Cloud solutions that meet FedRAMP security requirements.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Section 508 Compliant</h3>
                  <p className="text-gray-300">Accessible solutions that meet Section 508 accessibility standards.</p>
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
                Ready to Transform Government Services?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our government technology experts help you implement solutions that
                enhance citizen services while maintaining the highest security standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                  Download Government Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
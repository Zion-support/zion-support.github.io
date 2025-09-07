import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

export const metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Comprehensive technology solutions for modern businesses.',
  keywords: 'solutions, technology, business, AI, cloud, automation'
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning',
      icon: '🤖',
      features: ['Custom AI models', 'Natural language processing', 'Computer vision', 'Predictive analytics']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: '☁️',
      features: ['Cloud migration', 'Infrastructure as Code', 'DevOps automation', 'Cost optimization']
    },
    {
      title: 'Web Development',
      description: 'Modern web applications and e-commerce platforms',
      icon: '🌐',
      features: ['React/Next.js apps', 'E-commerce platforms', 'API development', 'Performance optimization']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
      features: ['iOS & Android apps', 'React Native', 'Flutter', 'App store deployment']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Decentralized applications and smart contracts',
      icon: '⛓️',
      features: ['Smart contracts', 'DeFi protocols', 'NFT platforms', 'Web3 applications']
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data visualization tools',
      icon: '📊',
      features: ['Data pipelines', 'Real-time analytics', 'Custom dashboards', 'Machine learning insights']
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI solutions to cloud services, we provide end-to-end technology solutions for modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Machine learning, natural language processing, computer vision, and AI automation solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• AI Automation</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cloud migration, optimization, and management solutions for scalable infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud Migration</li>
                  <li>• Infrastructure Optimization</li>
                  <li>• Multi-cloud Management</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Business intelligence, data visualization, and predictive analytics solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business Intelligence</li>
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Real-time Dashboards</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security solutions to protect your business and data.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security Assessment</li>
                  <li>• Threat Detection</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation</h3>
                <p className="text-gray-600 mb-6">
                  Process automation and workflow optimization solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• RPA Implementation</li>
                  <li>• Integration Services</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulting</h3>
                <p className="text-gray-600 mb-6">
                  Strategic technology consulting and digital transformation guidance.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Technology Strategy</li>
                  <li>• Digital Transformation</li>
                  <li>• Process Optimization</li>
                  <li>• Technology Assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our solutions can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

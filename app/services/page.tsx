import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap } from 'lucide-react';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive technology services for modern businesses.',
  keywords: 'services, technology, business, solutions'
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">
                  Custom software development, web applications, and scalable SaaS solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web Applications</li>
                  <li>• Mobile Apps</li>
                  <li>• API Development</li>
                  <li>• Cloud Integration</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cloud migration, cybersecurity, DevOps, and enterprise infrastructure solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud Migration</li>
                  <li>• Cybersecurity</li>
                  <li>• DevOps Automation</li>
                  <li>• Infrastructure Management</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-red-600" />
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
                <div className="bg-yellow-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-yellow-600" />
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

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing support, maintenance, and optimization services.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Support</li>
                  <li>• Maintenance</li>
                  <li>• Performance Optimization</li>
                  <li>• Training & Documentation</li>
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
            Let's discuss how our services can help transform your business and drive growth.
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
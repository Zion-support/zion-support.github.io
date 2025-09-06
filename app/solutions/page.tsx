import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
  keywords: "AI solutions, technology solutions, business transformation, digital innovation"
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Solutions</h3>
            <p className="text-gray-300 mb-4">
              Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">
              Scalable, secure, and reliable cloud solutions that grow with your business.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Cloud Migration</li>
              <li>• DevOps & SRE</li>
              <li>• Container Orchestration</li>
              <li>• Auto-scaling Solutions</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
            <p className="text-gray-300 mb-4">
              Modernize your business processes and systems for the digital age.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Process Automation</li>
              <li>• Legacy System Modernization</li>
              <li>• API Development</li>
              <li>• Integration Services</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Protect your business with comprehensive security solutions and best practices.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Security Audits</li>
              <li>• Threat Detection</li>
              <li>• Compliance Management</li>
              <li>• Incident Response</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Turn your data into actionable insights with advanced analytics and visualization.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Business Intelligence</li>
              <li>• Real-time Dashboards</li>
              <li>• Data Warehousing</li>
              <li>• Predictive Modeling</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Custom Development</h3>
            <p className="text-gray-300 mb-4">
              Bespoke software solutions tailored to your specific business requirements.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• Microservices</li>
              <li>• Third-party Integrations</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
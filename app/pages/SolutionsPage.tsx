'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions by Zion Tech Group. Transform your business with cutting-edge technology and innovation." />
        <meta name="keywords" content="AI solutions, IT solutions, business transformation, Zion Tech Group, technology services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of AI and IT solutions designed to transform your business and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Harness the power of artificial intelligence to automate processes and gain valuable insights.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Solutions</h3>
            <p className="text-gray-300 mb-4">
              Scalable and secure cloud infrastructure to support your business growth.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Cloud Migration</li>
              <li>• Infrastructure as Code</li>
              <li>• DevOps Automation</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Protect your business with comprehensive security solutions and monitoring.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Threat Detection</li>
              <li>• Security Audits</li>
              <li>• Compliance Management</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Transform raw data into actionable insights for better decision making.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Business Intelligence</li>
              <li>• Real-time Dashboards</li>
              <li>• Data Visualization</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
            <p className="text-gray-300 mb-4">
              Modernize your business processes with cutting-edge digital solutions.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Process Automation</li>
              <li>• Legacy System Integration</li>
              <li>• Workflow Optimization</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Custom Development</h3>
            <p className="text-gray-300 mb-4">
              Tailored software solutions built specifically for your business needs.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• API Development</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our expert team is ready to help you implement the perfect solution for your business needs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
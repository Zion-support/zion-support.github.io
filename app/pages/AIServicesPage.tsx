import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AIServicesPage() {
  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI automation solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">AI Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Custom ML models and algorithms tailored to your specific business needs and data patterns.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Predictive Analytics</li>
                <li>• Recommendation Systems</li>
                <li>• Pattern Recognition</li>
                <li>• Data Mining</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Natural Language Processing</h3>
              <p className="text-gray-300 mb-6">
                Advanced NLP solutions for text analysis, language understanding, and automated communication.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Chatbots & Virtual Assistants</li>
                <li>• Sentiment Analysis</li>
                <li>• Language Translation</li>
                <li>• Text Summarization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Computer Vision</h3>
              <p className="text-gray-300 mb-6">
                Image and video analysis solutions for automation, quality control, and visual intelligence.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Object Detection</li>
                <li>• Facial Recognition</li>
                <li>• Medical Imaging</li>
                <li>• Autonomous Systems</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Automation</h3>
              <p className="text-gray-300 mb-6">
                Intelligent automation solutions that streamline processes and reduce manual work.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Process Automation</li>
                <li>• Workflow Optimization</li>
                <li>• Smart Scheduling</li>
                <li>• Resource Management</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Consulting</h3>
              <p className="text-gray-300 mb-6">
                Strategic AI consulting to help you identify opportunities and plan your AI transformation.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AI Strategy Development</li>
                <li>• Technology Assessment</li>
                <li>• Implementation Planning</li>
                <li>• Training & Support</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Custom AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Bespoke AI solutions designed specifically for your industry and business requirements.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Industry-Specific Models</li>
                <li>• Integration Services</li>
                <li>• Performance Optimization</li>
                <li>• Ongoing Maintenance</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify the best opportunities for artificial intelligence in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
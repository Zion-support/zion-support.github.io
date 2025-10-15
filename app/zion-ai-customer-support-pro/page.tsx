import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaicustomersupportproPage() {
  return (
    <>
      <Helmet>
        <title>AI Customer Support Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered customer support solution with intelligent chatbots, automated ticket routing, and 24/7 customer assistance." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Customer Support Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI-powered customer support solution with intelligent chatbots, automated ticket routing, and 24/7 customer assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Pro Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Intelligent Chatbots</h3>
                    <p className="text-gray-600">Advanced AI chatbots that understand context and provide accurate responses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Smart Ticket Routing</h3>
                    <p className="text-gray-600">Automatically route tickets to the right agent based on complexity and expertise</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Sentiment Analysis</h3>
                    <p className="text-gray-600">Real-time analysis of customer sentiment to prioritize urgent issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Knowledge Base Integration</h3>
                    <p className="text-gray-600">Seamlessly integrate with your existing knowledge base and documentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Multi-channel Support</h3>
                    <p className="text-gray-600">Support customers across email, chat, phone, and social media platforms</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Impact</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Faster Resolution</h3>
                  <p className="text-gray-600">Reduce average resolution time by 60% with AI-powered assistance</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Higher Satisfaction</h3>
                  <p className="text-gray-600">Improve customer satisfaction scores with 24/7 availability and instant responses</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                  <p className="text-gray-600">Reduce support costs by up to 40% with automated responses and routing</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable Support</h3>
                  <p className="text-gray-600">Handle unlimited customer inquiries without additional staff</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Transform Your Customer Support</h2>
            <p className="text-gray-600 mb-6">Implement AI-powered customer support that delivers exceptional experiences.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Contact Sales
              </Link>
              <Link to="/pricing" className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

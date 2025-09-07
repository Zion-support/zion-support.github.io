import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';

export const metadata = {
  title: 'AI Customer Support Automation | Zion Tech Group',
  description: 'Intelligent customer support automation with AI chatbots, ticket routing, sentiment analysis, and 24/7 multilingual support for enhanced customer experience.',
  keywords: 'AI customer support, chatbot automation, ticket routing, sentiment analysis, multilingual support, customer service AI'
};

export default function AiCustomerSupportAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Customer Support Automation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AI customer support automation solutions designed to meet your business requirements and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">AI Chatbots</h3>
            <p className="text-gray-300 mb-6">Intelligent chatbots that provide instant responses and handle common queries 24/7.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Natural language processing</li>
              <li>• Multi-language support</li>
              <li>• Context-aware responses</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ticket Routing</h3>
            <p className="text-gray-300 mb-6">Smart ticket routing system that assigns tickets to the right agents automatically.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Priority-based routing</li>
              <li>• Skill-based assignment</li>
              <li>• Load balancing</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Sentiment Analysis</h3>
            <p className="text-gray-300 mb-6">Real-time sentiment analysis to understand customer emotions and improve service.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Emotion detection</li>
              <li>• Escalation triggers</li>
              <li>• Performance insights</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI-Powered CRM Platform | Zion Tech Group',
  description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, and intelligent sales insights. Boost conversion rates by 40% with our smart CRM solution.',
  keywords: 'AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales intelligence'
};

export default function AiPoweredCrmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered CRM Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your sales process with our intelligent CRM that uses AI to score leads, 
            automate follow-ups, and provide predictive insights to boost your conversion rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Lead Scoring</h3>
            <p className="text-gray-600">
              Automatically score and prioritize leads using machine learning algorithms 
              that analyze customer behavior and engagement patterns.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Follow-ups</h3>
            <p className="text-gray-600">
              Never miss an opportunity with intelligent follow-up sequences that adapt 
              to customer responses and engagement levels.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">
              Get insights into sales trends, customer lifetime value, and churn risk 
              with our advanced predictive analytics engine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
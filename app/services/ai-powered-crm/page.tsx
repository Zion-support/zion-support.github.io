<<<<<<< HEAD
import React from 'react';


// Simple TestimonialCard component
const TestimonialCard = ({ name, role, company, content }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">"{content}"</p>
    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500">{role}, {company}</p>
    </div>
  </div>
);
// Simple FeatureCard component
const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Simple PricingTier component
const PricingTier = ({ name, price, description, features, isPopular }: { 
  name: string; 
  price: string; 
  description: string; 
  features: string[]; 
  isPopular?: boolean; 
}) => (
  <div className={`bg-white p-6 rounded-lg shadow-md border ${isPopular ? 'border-blue-500' : 'border-gray-200'}`}>
    {isPopular && <div className="bg-blue-500 text-white text-center py-1 px-3 rounded-full text-sm mb-4">Most Popular</div>}
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
    <div className="text-3xl font-bold text-gray-900 mb-2">{price}</div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <span className="text-green-500 mr-2">✓</span> {feature}
        </li>
      ))}
    </ul>
  </div>
);

export const metadata = {
  title: 'Ai Powered Crm | Zion Tech Group',
  description: 'Professional ai powered crm services for your business needs.',
=======
export const metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Professional AI-powered CRM services for your business needs.',
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
  keywords: 'ai-powered-crm, services, business, technology'
};

export default function AIPoweredCRMPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI-Powered CRM
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Revolutionize your customer relationship management with AI-powered lead scoring, automated follow-ups, and intelligent sales insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Lead Scoring
          </h3>
          <p className="text-gray-600">
            AI-powered lead scoring to identify the most promising prospects and prioritize sales efforts.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🤖</span>
          </div>
<<<<<<< HEAD
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai powered crm solutions run smoothly.
            </p>
          </div>
=======
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Automated Follow-ups
          </h3>
          <p className="text-gray-600">
            Intelligent automated follow-up sequences based on customer behavior and engagement patterns.
          </p>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-17f0
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Sales Analytics
          </h3>
          <p className="text-gray-600">
            Advanced analytics and insights to optimize sales performance and predict customer behavior.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your CRM?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your CRM needs and implement AI-powered solutions.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}
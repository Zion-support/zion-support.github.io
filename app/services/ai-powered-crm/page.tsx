import React from 'react';
import Link from 'next/link';


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
  keywords: 'ai-powered-crm, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Powered Crm
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai powered crm services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai powered crm solutions designed for your specific business requirements.
            </p>
          </div>
          
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
        </div>
      </div>
    </div>
  );
}
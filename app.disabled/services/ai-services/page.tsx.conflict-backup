import React from 'react';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Professional AI services including RAG, agents, fine-tuning, and MLOps solutions.',
  keywords: 'AI services, RAG, agents, fine-tuning, MLOps, machine learning'
};

interface ItemProps {
  title: string;
  details: string[];
}

const Item: React.FC<ItemProps> = ({ title, details }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
    <ul className="space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="text-gray-600 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing: React.FC = () => (
  <div className="mt-8 bg-gray-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-gray-900">Pricing</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg text-center">
        <h4 className="font-semibold text-gray-900">Starter</h4>
        <p className="text-2xl font-bold text-blue-600 mt-2">$99/month</p>
        <p className="text-sm text-gray-600">Basic AI features</p>
      </div>
      <div className="bg-white p-4 rounded-lg text-center border-2 border-blue-500">
        <h4 className="font-semibold text-gray-900">Professional</h4>
        <p className="text-2xl font-bold text-blue-600 mt-2">$299/month</p>
        <p className="text-sm text-gray-600">Advanced AI solutions</p>
      </div>
      <div className="bg-white p-4 rounded-lg text-center">
        <h4 className="font-semibold text-gray-900">Enterprise</h4>
        <p className="text-2xl font-bold text-blue-600 mt-2">Custom</p>
        <p className="text-sm text-gray-600">Tailored solutions</p>
      </div>
    </div>
  </div>
);

export default function AIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Applied AI" 
            details={["RAG over private data", "Task-specific agents", "Vision + speech", "Personalization"]} 
          />
          <Item 
            title="Model Ops" 
            details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} 
          />
          <Item 
            title="Data & MLOps" 
            details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} 
          />
        </div>
        
        <Pricing />
      </div>
    </div>
  );
}
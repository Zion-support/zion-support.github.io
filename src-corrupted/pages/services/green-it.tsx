import React from 'react';

const GreenITServices: Reac t.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Green IT & Sustainability</h1>
        <p className="text-lg text-gray-600 mb-8">
          Reduce environmental impact with sustainable cloud, energy-efficient workloads,
          and responsible AI. Track emissions and optimize costs without sacrificing performance.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Carbon-aware workload scheduling</li>
          <li>Energy and cost optimization (FinOps + GreenOps)</li>
          <li>Sustainable cloud architecture reviews</li>
          <li>ESG reporting enablement</li>
        </ul>
      </div>
    </div>
  );
};

export default GreenITServices;

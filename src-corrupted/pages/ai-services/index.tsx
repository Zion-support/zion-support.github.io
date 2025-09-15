import React from 'react';

export default function AIServicesIndex(props: any) {
  const services = [
    { name: 'Custom LLM Integration', price: 'From $8,000', bullets: ['RAG and vector search', 'Guardrails and policy'] },
    { name: 'Computer Vision Pipelines', price: 'From $6,000', bullets: ['OCR, object detection', 'Edge inference'] },
    { name: 'MLOps Foundations', price: 'From $5,000', bullets: ['CI/CD for models', 'Monitoring and drift'] }
  ];
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
        <p className="text-gray-600 mb-8">Strategy, models, and productionization to accelerate adoption.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.name} className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-1">{s.name}</h3>
              <div className="text-blue-600 mb-3">{s.price}</div>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
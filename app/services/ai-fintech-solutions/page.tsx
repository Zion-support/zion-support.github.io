import React from 'react';

export const metadata = {
  title: 'AI Fintech Solutions | Zion Tech Group',
  description: 'Advanced AI-powered fintech solutions for fraud detection, risk assessment, algorithmic trading, credit scoring, and financial data analysis.',
  keywords: 'AI fintech, fraud detection, risk assessment, algorithmic trading, credit scoring, financial AI, fintech solutions',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIFintechSolutionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Fintech Solutions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced AI-powered fintech solutions for fraud detection, risk assessment, algorithmic trading,
          credit scoring, and financial data analysis. Transform your financial services with cutting-edge AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Fraud Detection"
          details={[
            'Real-time transaction monitoring',
            'Machine learning algorithms',
            'Behavioral analysis',
            'Risk scoring models',
            'Automated alerts',
          ]}
        />
        <FeatureCard
          title="Risk Assessment"
          details={[
            'Credit risk modeling',
            'Market risk analysis',
            'Operational risk assessment',
            'Regulatory compliance',
            'Stress testing',
          ]}
        />
        <FeatureCard
          title="Algorithmic Trading"
          details={[
            'High-frequency trading',
            'Market prediction models',
            'Portfolio optimization',
            'Risk management',
            'Performance analytics',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Fintech?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leverage the power of AI to enhance your financial services, reduce risks,
          and improve customer experiences with our advanced fintech solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}
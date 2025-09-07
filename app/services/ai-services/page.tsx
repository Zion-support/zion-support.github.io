import React from 'react';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. 
          From custom LLM development to computer vision, we deliver enterprise-grade AI that drives real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get AI Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI services designed to accelerate your digital transformation and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom LLM Development</h3>
            <p className="text-gray-600 mb-4">
              Build and deploy large language models tailored to your specific business needs and use cases.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Custom model training</li>
              <li>• Fine-tuning for specific domains</li>
              <li>• API integration</li>
              <li>• Performance optimization</li>
              <li>• Cost-effective deployment</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $15,000</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">RAG Systems</h3>
            <p className="text-gray-600 mb-4">
              Retrieval-Augmented Generation systems that combine knowledge bases with LLMs for accurate, contextual responses.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Knowledge base integration</li>
              <li>• Vector database setup</li>
              <li>• Context-aware responses</li>
              <li>• Real-time data updates</li>
              <li>• Custom embeddings</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $8,000</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Agents & Automation</h3>
            <p className="text-gray-600 mb-4">
              Intelligent agents that automate complex workflows and decision-making processes.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Workflow automation</li>
              <li>• Decision trees</li>
              <li>• Multi-agent systems</li>
              <li>• Integration with existing tools</li>
              <li>• Continuous learning</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $12,000</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Vision</h3>
            <p className="text-gray-600 mb-4">
              Advanced image and video analysis solutions for object detection, recognition, and processing.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Object detection</li>
              <li>• Image classification</li>
              <li>• Facial recognition</li>
              <li>• Video analysis</li>
              <li>• Real-time processing</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $10,000</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MLOps & Model Deployment</h3>
            <p className="text-gray-600 mb-4">
              End-to-end machine learning operations including model training, deployment, and monitoring.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Model versioning</li>
              <li>• Automated training pipelines</li>
              <li>• A/B testing</li>
              <li>• Performance monitoring</li>
              <li>• Scalable deployment</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $20,000</div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 mb-4">
              Text analysis, sentiment analysis, and language understanding solutions for your applications.
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Sentiment analysis</li>
              <li>• Text classification</li>
              <li>• Named entity recognition</li>
              <li>• Language translation</li>
              <li>• Text summarization</li>
            </ul>
            <div className="text-blue-600 font-semibold">From $6,000</div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how AI can solve your specific business challenges and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
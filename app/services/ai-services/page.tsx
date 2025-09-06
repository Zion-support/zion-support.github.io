import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From custom LLM development to AI automation, we deliver enterprise-grade AI services.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive AI solutions tailored to your business needs, 
              from strategy to implementation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom LLM Development</h3>
              <p className="text-gray-600 mb-4">
                Build custom large language models tailored to your specific use case and data requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fine-tuning existing models</li>
                <li>• Custom model architecture</li>
                <li>• Domain-specific training</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">RAG Systems</h3>
              <p className="text-gray-600 mb-4">
                Implement Retrieval-Augmented Generation systems for accurate, context-aware AI responses.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Vector database integration</li>
                <li>• Document processing</li>
                <li>• Context-aware responses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Agents</h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent AI agents that can perform complex tasks and interact with your systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Task automation</li>
                <li>• System integration</li>
                <li>• Continuous learning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Implement computer vision solutions for image recognition, object detection, and visual analysis.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Image classification</li>
                <li>• Object detection</li>
                <li>• Visual analytics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MLOps Solutions</h3>
              <p className="text-gray-600 mb-4">
                Streamline your machine learning operations with automated pipelines and monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Model deployment</li>
                <li>• Performance monitoring</li>
                <li>• Automated retraining</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic AI consulting to help you identify opportunities and plan your AI transformation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• AI strategy development</li>
                <li>• Technology assessment</li>
                <li>• Implementation planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals. 
            Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

interface AIServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function AIServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your business with our comprehensive AI services including custom LLM development,
          RAG systems, AI agents, computer vision, and MLOps solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get AI Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AIService
              icon="🧠"
              title="Custom LLM Development"
              description="Build and deploy custom large language models tailored to your specific business needs and use cases."
              features={[
                "Fine-tuned models for your domain",
                "Custom training pipelines",
                "API integration and deployment",
                "Performance optimization"
              ]}
            />
            <AIService
              icon="🔍"
              title="RAG Systems"
              description="Implement Retrieval-Augmented Generation systems for accurate, context-aware AI responses."
              features={[
                "Vector database integration",
                "Semantic search capabilities",
                "Context-aware responses",
                "Real-time data integration"
              ]}
            />
            <AIService
              icon="🤖"
              title="AI Agents"
              description="Develop intelligent AI agents that can perform complex tasks and interact with your systems autonomously."
              features={[
                "Multi-step task execution",
                "Tool integration and usage",
                "Autonomous decision making",
                "Human-AI collaboration"
              ]}
            />
            <AIService
              icon="👁️"
              title="Computer Vision"
              description="Implement computer vision solutions for image recognition, object detection, and visual analysis."
              features={[
                "Image classification and detection",
                "Real-time video processing",
                "Custom model training",
                "Edge deployment optimization"
              ]}
            />
            <AIService
              icon="⚙️"
              title="MLOps Solutions"
              description="Complete machine learning operations pipeline for model deployment, monitoring, and maintenance."
              features={[
                "Model versioning and tracking",
                "Automated deployment pipelines",
                "Performance monitoring",
                "A/B testing frameworks"
              ]}
            />
            <AIService
              icon="💼"
              title="AI Consulting"
              description="Strategic AI consulting to help you identify opportunities and develop AI roadmaps for your business."
              features={[
                "AI strategy development",
                "Technology assessment",
                "Implementation planning",
                "ROI analysis and optimization"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored AI solutions for your specific business needs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Rapid deployment and integration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">500+ successful AI implementations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white text-center rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8">
            Let our AI experts help you identify opportunities and implement solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function AIService({ icon, title, description, features }: AIServiceProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
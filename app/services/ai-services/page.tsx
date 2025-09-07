import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

interface AIServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const AIServiceCard: React.FC<AIServiceCardProps> = ({ icon, title, description, features, price }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col">
    <div className="text-5xl mb-4 text-center">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 mb-4 text-center flex-grow">{description}</p>
    <ul className="space-y-2 mb-6 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <div className="text-center mt-auto">
      <p className="text-xl font-semibold text-blue-600 mb-4">{price}</p>
      <Link
        href="/contact"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const CTA: React.FC = () => (
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
);

export default function ServicePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
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
          <AIServiceCard
            icon="🧠"
            title="Custom LLM Development"
            description="Build and deploy large language models tailored to your specific business needs and use cases."
            features={[
              "Custom model training",
              "Fine-tuning for specific domains",
              "API integration",
              "Performance optimization",
              "Cost-effective deployment"
            ]}
            price="From $15,000"
          />
          <AIServiceCard
            icon="🔍"
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems that combine knowledge bases with LLMs for accurate, contextual responses."
            features={[
              "Knowledge base integration",
              "Vector database setup",
              "Context-aware responses",
              "Real-time data updates",
              "Custom embeddings"
            ]}
            price="From $8,000"
          />
          <AIServiceCard
            icon="🤖"
            title="AI Agents & Automation"
            description="Intelligent agents that automate complex workflows and decision-making processes."
            features={[
              "Workflow automation",
              "Decision trees",
              "Multi-agent systems",
              "Integration with existing tools",
              "Continuous learning"
            ]}
            price="From $12,000"
          />
          <AIServiceCard
            icon="👁️"
            title="Computer Vision"
            description="Advanced image and video analysis solutions for object detection, recognition, and processing."
            features={[
              "Object detection",
              "Image classification",
              "Facial recognition",
              "Video analysis",
              "Real-time processing"
            ]}
            price="From $10,000"
          />
          <AIServiceCard
            icon="🔧"
            title="MLOps & Model Deployment"
            description="End-to-end machine learning operations including model training, deployment, and monitoring."
            features={[
              "Model versioning",
              "Automated training pipelines",
              "A/B testing",
              "Performance monitoring",
              "Scalable deployment"
            ]}
            price="From $20,000"
          />
          <AIServiceCard
            icon="💬"
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding solutions for your applications."
            features={[
              "Sentiment analysis",
              "Text classification",
              "Named entity recognition",
              "Language translation",
              "Text summarization"
            ]}
            price="From $6,000"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <CTA />
    </div>
  );
}
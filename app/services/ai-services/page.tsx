import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including RAG, agents, fine-tuning, evals, and MLOps. From discovery to production deployment.'
};

interface AIServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}

function AIService({ title, description, price, features, useCases, icon, href }: AIServiceProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-medium text-gray-900 mb-2">Use Cases:</h4>
        <ul className="space-y-1">
          {useCases.map((useCase, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default function AIServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions from discovery to production deployment. 
            We help you harness the power of artificial intelligence to drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIService
            title="RAG Systems"
            description="Build intelligent retrieval-augmented generation systems that provide accurate, contextual responses"
            price="From $5,000"
            features={["Vector databases", "Semantic search", "Context management", "Response generation"]}
            useCases={["Customer support", "Knowledge bases", "Document Q&A"]}
            icon="🔍"
            href="/contact"
          />
          
          <AIService
            title="AI Agents"
            description="Create autonomous AI agents that can perform complex tasks and make decisions"
            price="From $8,000"
            features={["Task automation", "Decision making", "Multi-step workflows", "Integration APIs"]}
            useCases={["Process automation", "Customer service", "Data analysis"]}
            icon="🤖"
            href="/contact"
          />
          
          <AIService
            title="Fine-tuning"
            description="Customize pre-trained models for your specific use case and domain"
            price="From $3,000"
            features={["Model customization", "Domain adaptation", "Performance optimization", "Evaluation metrics"]}
            useCases={["Specialized tasks", "Industry-specific models", "Brand voice"]}
            icon="⚙️"
            href="/contact"
          />
          
          <AIService
            title="MLOps"
            description="End-to-end machine learning operations for production-ready AI systems"
            price="From $10,000"
            features={["Model deployment", "Monitoring", "Version control", "A/B testing"]}
            useCases={["Production AI", "Model management", "Performance tracking"]}
            icon="🚀"
            href="/contact"
          />
          
          <AIService
            title="AI Evaluation"
            description="Comprehensive testing and evaluation of AI systems for quality assurance"
            price="From $2,000"
            features={["Performance metrics", "Bias detection", "Safety testing", "Quality reports"]}
            useCases={["Model validation", "Compliance", "Quality assurance"]}
            icon="📊"
            href="/contact"
          />
          
          <AIService
            title="AI Consulting"
            description="Strategic AI consulting to help you identify opportunities and plan your AI journey"
            price="From $1,500"
            features={["AI strategy", "Use case identification", "Technology selection", "Implementation planning"]}
            useCases={["AI roadmap", "Technology decisions", "Business transformation"]}
            icon="💡"
            href="/contact"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how our AI services can transform your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
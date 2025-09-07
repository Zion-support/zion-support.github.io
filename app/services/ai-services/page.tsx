import React from 'react';
import Link from 'next/link';

interface AIServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  useCases: string[];
  icon: string;
  href: string;
}

export const metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including RAG, agents, fine-tuning, evals, and MLOps. From discovery to production deployment.'
};

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
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
        <ul className="space-y-1">
          {useCases.map((useCase, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive AI solutions from discovery to production deployment. 
          We help you build, deploy, and scale intelligent applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AIService
          title="RAG Systems"
          description="Build intelligent document search and question-answering systems with retrieval-augmented generation."
          price="Starting at $5,000"
          features={[
            "Vector database setup",
            "Document processing pipeline",
            "Semantic search implementation",
            "Query optimization"
          ]}
          useCases={[
            "Knowledge base search",
            "Customer support automation",
            "Research assistance",
            "Document analysis"
          ]}
          icon="🔍"
          href="/contact"
        />
        
        <AIService
          title="AI Agents"
          description="Create autonomous AI agents that can perform complex tasks and make decisions."
          price="Starting at $8,000"
          features={[
            "Multi-step reasoning",
            "Tool integration",
            "Memory management",
            "Error handling"
          ]}
          useCases={[
            "Process automation",
            "Customer service",
            "Data analysis",
            "Content generation"
          ]}
          icon="🤖"
          href="/contact"
        />
        
        <AIService
          title="Model Fine-tuning"
          description="Customize pre-trained models for your specific use case and data."
          price="Starting at $3,000"
          features={[
            "Data preparation",
            "Model selection",
            "Training optimization",
            "Performance evaluation"
          ]}
          useCases={[
            "Domain-specific language models",
            "Custom classification",
            "Specialized generation",
            "Improved accuracy"
          ]}
          icon="⚙️"
          href="/contact"
        />
        
        <AIService
          title="MLOps Pipeline"
          description="Set up complete machine learning operations for model deployment and monitoring."
          price="Starting at $10,000"
          features={[
            "CI/CD for ML",
            "Model versioning",
            "A/B testing",
            "Performance monitoring"
          ]}
          useCases={[
            "Production model deployment",
            "Automated retraining",
            "Model performance tracking",
            "Scalable ML infrastructure"
          ]}
          icon="🚀"
          href="/contact"
        />
        
        <AIService
          title="AI Evaluation"
          description="Comprehensive testing and evaluation of AI systems for reliability and performance."
          price="Starting at $2,000"
          features={[
            "Automated testing",
            "Performance metrics",
            "Bias detection",
            "Quality assurance"
          ]}
          useCases={[
            "Model validation",
            "Performance benchmarking",
            "Quality control",
            "Compliance testing"
          ]}
          icon="📊"
          href="/contact"
        />
        
        <AIService
          title="AI Consulting"
          description="Strategic guidance on AI implementation and technology selection."
          price="Starting at $200/hour"
          features={[
            "Technology assessment",
            "Strategy development",
            "Implementation planning",
            "Team training"
          ]}
          useCases={[
            "AI strategy planning",
            "Technology evaluation",
            "Team upskilling",
            "Project scoping"
          ]}
          icon="💡"
          href="/contact"
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build with AI?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your AI project and find the perfect solution for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}
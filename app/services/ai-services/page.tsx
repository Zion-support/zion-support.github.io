import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

};

}

}: AIServiceProps) {
  return (
    <a
      href={href}
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features:
        </h4>
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
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
        <div className="flex flex-wrap gap-1">
          {useCases.map((useCase, index) => (
            <span
              key={index}
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

}

}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20">
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Services - {name} Plan"
        }`}
        {cta}
      </a>
    </div>
  );
}

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
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          >
            Get AI Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
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
          <AIServiceCard
            icon="👁️"
            title="Computer Vision"
            description="Advanced image and video analysis solutions for object detection, recognition, and processing."
            features={[
              "Object detection",
              "Image classification",
              "Facial recognition",
              "Video analysis",
              "Real-time processing",
            ]}
            ]}
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
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how AI can solve your specific business challenges and
          drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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

function AIServiceCard({ icon, title, description, features, price }: {
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Service: {title}"
      </a>
    </div>
  );
}

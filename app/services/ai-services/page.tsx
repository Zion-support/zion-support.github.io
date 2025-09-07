import React from 'react';
<<<<<<< HEAD
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps. Transform your business with cutting-edge AI solutions.'
};

export default function AIPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Ship AI features with confidence: Custom LLM development, RAG systems, intelligent agents, 
          computer vision, and comprehensive MLOps. We help you harness the power of AI to transform your business.
=======
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
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
        </p>
      </section>

      {/* AI Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AISolution
            title="Custom LLM Development"
            description="Build and fine-tune large language models tailored to your specific use cases and domain knowledge"
            features={["Custom model training", "Domain-specific fine-tuning", "Performance optimization", "Cost-effective inference", "API integration"]}
            pricing="$25k-150k"
            icon="🧠"
          />
          <AISolution
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems that combine your data with LLM capabilities for accurate, contextual responses"
            features={["Vector database setup", "Document processing", "Semantic search", "Context-aware responses", "Real-time updates"]}
            pricing="$15k-80k"
            icon="🔍"
          />
          <AISolution
            title="AI Agents & Automation"
            description="Intelligent agents that can perform complex tasks, make decisions, and interact with multiple systems autonomously"
            features={["Multi-step reasoning", "Tool integration", "Decision making", "Workflow automation", "Human-in-the-loop"]}
            pricing="$20k-100k"
            icon="🤖"
          />
          <AISolution
            title="Computer Vision"
            description="Advanced image and video analysis solutions for object detection, classification, and real-time processing"
            features={["Object detection", "Image classification", "Video analysis", "Real-time processing", "Custom model training"]}
            pricing="$18k-90k"
            icon="👁️"
          />
          <AISolution
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, language translation, and content generation solutions"
            features={["Sentiment analysis", "Language translation", "Text summarization", "Named entity recognition", "Content generation"]}
            pricing="$12k-60k"
            icon="💬"
          />
          <AISolution
            title="Predictive Analytics"
            description="Machine learning models for forecasting, trend analysis, and data-driven decision making"
            features={["Time series forecasting", "Predictive modeling", "Anomaly detection", "Risk assessment", "Real-time predictions"]}
            pricing="$15k-75k"
            icon="📊"
          />
        </div>
      </section>

      {/* Core AI Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIServiceItem 
            title="Applied AI Development" 
            details={[
              "RAG over private data & documents",
              "Task-specific AI agents & workflows",
              "Computer vision & image processing",
              "Natural language understanding",
              "Personalization & recommendation engines",
              "Real-time AI decision making"
            ]} 
          />
          <AIServiceItem 
            title="Model Operations & MLOps" 
            details={[
              "Model training & fine-tuning",
              "A/B testing & model evaluation",
              "Safety & bias detection",
              "Batch & real-time inference",
              "Cost optimization & monitoring",
              "Model versioning & deployment"
            ]} 
          />
          <AIServiceItem 
            title="Data & Infrastructure" 
            details={[
              "Data pipeline development",
              "Feature store implementation",
              "Vector database setup",
              "Model monitoring & drift detection",
              "Scalable inference infrastructure",
              "Security & compliance"
            ]} 
          />
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">AI Use Cases We Solve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UseCaseCard
            title="Customer Service"
            description="AI chatbots, ticket routing, and automated support"
            icon="🎧"
          />
          <UseCaseCard
            title="Content Creation"
            description="Automated content generation, translation, and optimization"
            icon="✍️"
          />
          <UseCaseCard
            title="Data Analysis"
            description="Intelligent insights, pattern recognition, and forecasting"
            icon="📈"
          />
          <UseCaseCard
            title="Process Automation"
            description="Workflow automation, document processing, and decision support"
            icon="⚙️"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AIPricingPlan 
            name="AI Discovery" 
            price="$5k–$12k" 
            duration="2–3 weeks"
            features={[
              "AI use case analysis",
              "Technology stack selection",
              "Proof of concept development",
              "Implementation roadmap",
              "ROI projections"
            ]}
            popular={false}
          />
          <AIPricingPlan 
            name="AI Pilot" 
            price="$15k–$45k" 
            duration="4–8 weeks"
            features={[
              "MVP AI solution development",
              "RAG or agent implementation",
              "Evaluation & safety testing",
              "Performance dashboards",
              "3 months support"
            ]}
            popular={true}
          />
          <AIPricingPlan 
            name="Production AI" 
            price="$50k+" 
            duration="Custom timeline"
            features={[
              "Production-ready AI system",
              "Advanced monitoring & alerting",
              "SLA guarantees",
              "Cost optimization",
              "Dedicated AI team"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
<<<<<<< HEAD
      <ContactCTA />
    </div>
  );
}

function AISolution({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
}

function AIServiceItem({ title, details }: { 
  title: string; 
  details: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UseCaseCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function AIPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Transform Your Business with AI?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your AI needs and create a custom solution that drives real business value. 
        Our team has delivered 100+ successful AI implementations across industries.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
=======
      <CTA />
    </div>
  );
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
}
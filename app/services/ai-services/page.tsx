<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';


export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
=======
import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group",
  description: "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
=======
export const metadata = {
  title: 'Ai Services | Zion Tech Group',
  description: 'Professional ai services services for your business needs.',
  keywords: 'ai-services, services, business, technology'
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
};

export default function ServicePage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how AI can solve your specific business challenges and drive growth.
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
=======
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our AI Capabilities</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🧠"
              title="Custom LLM Development"
              description="Build and deploy large language models tailored to your specific business needs and use cases."
              benefits={["Custom model training", "Domain-specific optimization", "Cost-effective deployment", "Continuous learning"]}
            />
            <FeatureItem
              icon="🔍"
              title="RAG Systems & AI Agents"
              description="Implement Retrieval-Augmented Generation systems and intelligent agents for enhanced decision-making."
              benefits={["Real-time data access", "Context-aware responses", "Automated workflows", "Human-like interactions"]}
            />
            <FeatureItem
              icon="👁️"
              title="Computer Vision Solutions"
              description="Develop advanced computer vision applications for image recognition, object detection, and visual analysis."
              benefits={["Image classification", "Object detection", "Facial recognition", "Quality inspection"]}
            />
            <FeatureItem
              icon="⚙️"
              title="MLOps & Model Management"
              description="End-to-end machine learning operations including model deployment, monitoring, and lifecycle management."
              benefits={["Automated pipelines", "Model versioning", "Performance monitoring", "Scalable deployment"]}
            />
            <FeatureItem
              icon="🤖"
              title="AI Automation & Integration"
              description="Seamlessly integrate AI capabilities into your existing systems and workflows for maximum efficiency."
              benefits={["API integration", "Workflow automation", "Data processing", "System optimization"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for AI?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Proven Expertise"
              description="Our team has successfully delivered 500+ AI projects across various industries with measurable results."
            />
            <BenefitCard
              icon="💡"
              title="Innovation & Research"
              description="We stay at the forefront of AI technology, implementing the latest advances in machine learning and AI."
            />
            <BenefitCard
              icon="🔒"
              title="Enterprise-Grade Security"
              description="All our AI solutions are built with security and compliance in mind, ensuring your data remains protected."
            />
            <BenefitCard
              icon="📈"
              title="Measurable ROI"
              description="We focus on delivering AI solutions that provide clear, measurable business value and return on investment."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Development Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a structured approach to ensure successful AI implementation and adoption.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Discovery & Strategy"
            description="Understand your business needs, data landscape, and define AI objectives."
          />
          <ProcessStep
            step="2"
            title="Development & Training"
            description="Build, train, and optimize AI models tailored to your specific requirements."
          />
          <ProcessStep
            step="3"
            title="Deployment & Optimization"
            description="Deploy AI solutions and continuously monitor and optimize performance."
          />
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Harness the Power of AI?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free AI consultation and discover how artificial intelligence can transform your business.
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
}

function AIServiceCard({ icon, title, description, features, price }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
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
        className="w-full block text-center py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai services services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai services solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai services solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
    </div>
  );
}
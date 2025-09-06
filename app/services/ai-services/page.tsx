<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting'
};

=======
import React from "react";

export const metadata = {
  title: "AI Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
  keywords:
    "AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting",
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

function AIService({
  title,
  description,
  price,
  features,
  useCases,
  icon,
  href,
}: AIServiceProps) {
  return (
    <a
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
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
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
              viewBox="0 0 20 20"
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
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
export default function AIServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
          Transform your business with cutting-edge artificial intelligence solutions. 
          From custom LLM development to computer vision, we deliver enterprise-grade AI that drives real results.
=======
          Harness the power of artificial intelligence to automate processes,
          gain insights, and transform your business with cutting-edge AI
          solutions.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI services designed to accelerate your digital transformation and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIServiceCard
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs, from
            chatbots to predictive analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AIService
            title="AI Chatbot Platform"
            description="Intelligent conversational AI that understands context and provides human-like responses"
            price="Starting at $2,500"
            features={[
              "Natural language processing",
              "Multi-channel support",
              "Custom training data",
              "Analytics dashboard",
              "Integration APIs",
            ]}
            useCases={[
              "Customer Support",
              "Lead Generation",
              "FAQ Automation",
              "Sales Assistant",
            ]}
            icon="🤖"
            href="/services/ai-chatbot-platform"
          />
          <AIService
            title="AI Content Generator"
            description="Automated content creation using advanced language models for blogs, social media, and marketing"
            price="Starting at $1,500"
            features={[
              "GPT-4 integration",
              "SEO optimization",
              "Brand voice training",
              "Multi-format output",
              "Plagiarism detection",
            ]}
            useCases={[
              "Blog Writing",
              "Social Media",
              "Email Campaigns",
              "Product Descriptions",
            ]}
            icon="✍️"
            href="/services/ai-content-generation"
          />
          <AIService
            title="AI Data Analytics"
            description="Predictive analytics and intelligent insights from your business data using machine learning"
            price="Starting at $3,000"
            features={[
              "Predictive modeling",
              "Anomaly detection",
              "Trend analysis",
              "Custom ML models",
              "Real-time insights",
            ]}
            useCases={[
              "Sales Forecasting",
              "Risk Assessment",
              "Customer Segmentation",
              "Performance Optimization",
            ]}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            icon="🧠"
            title="Custom LLM Development"
            description="Build and deploy large language models tailored to your specific business needs and use cases."
            features={[
              "Custom model training",
              "Fine-tuning for specific domains",
              "API integration",
              "Performance optimization",
<<<<<<< HEAD
              "Cost-effective deployment"
            ]}
            price="From $15,000"
          />
          <AIServiceCard
=======
              "Best practice recommendations",
              "CI/CD integration",
            ]}
            useCases={[
              "Code Quality",
              "Security Audits",
              "Performance Reviews",
              "Team Training",
            ]}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            icon="🔍"
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems that combine knowledge bases with LLMs for accurate, contextual responses."
            features={[
<<<<<<< HEAD
              "Knowledge base integration",
              "Vector database setup",
              "Context-aware responses",
              "Real-time data updates",
              "Custom embeddings"
            ]}
            price="From $8,000"
=======
              "Real-time transcription",
              "Meeting summaries",
              "Action item extraction",
              "Calendar integration",
              "Meeting analytics",
            ]}
            useCases={[
              "Meeting Notes",
              "Action Tracking",
              "Team Collaboration",
              "Client Meetings",
            ]}
            icon="🎤"
            href="/services/ai-meeting-assistant"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <AIServiceCard
            icon="🤖"
            title="AI Agents & Automation"
            description="Intelligent agents that automate complex workflows and decision-making processes."
            features={[
<<<<<<< HEAD
              "Workflow automation",
              "Decision trees",
              "Multi-agent systems",
              "Integration with existing tools",
              "Continuous learning"
            ]}
            price="From $12,000"
=======
              "Customer segmentation",
              "Behavior prediction",
              "Personalized recommendations",
              "Churn prediction",
              "ROI analysis",
            ]}
            useCases={[
              "Customer Retention",
              "Personalization",
              "Marketing Optimization",
              "Sales Enhancement",
            ]}
            icon="👥"
            href="/services/ai-customer-insights"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
              "Real-time processing",
            ]}
            useCases={[
              "Quality Control",
              "Security Systems",
              "Medical Imaging",
              "Retail Analytics",
            ]}
<<<<<<< HEAD
            price="From $10,000"
=======
            icon="👁️"
            href="/services/computer-vision-solutions"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <AIServiceCard
            icon="🔧"
            title="MLOps & Model Deployment"
            description="End-to-end machine learning operations including model training, deployment, and monitoring."
            features={[
<<<<<<< HEAD
              "Model versioning",
              "Automated training pipelines",
              "A/B testing",
              "Performance monitoring",
              "Scalable deployment"
            ]}
            price="From $20,000"
=======
              "OCR text extraction",
              "Document classification",
              "Data validation",
              "Workflow automation",
              "Multi-format support",
            ]}
            useCases={[
              "Invoice Processing",
              "Contract Analysis",
              "Data Entry",
              "Compliance",
            ]}
            icon="📄"
            href="/services/ai-document-processor"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <AIServiceCard
            icon="💬"
            title="Natural Language Processing"
            description="Text analysis, sentiment analysis, and language understanding solutions for your applications."
            features={[
<<<<<<< HEAD
              "Sentiment analysis",
              "Text classification",
              "Named entity recognition",
              "Language translation",
              "Text summarization"
            ]}
            price="From $6,000"
=======
              "Subject line optimization",
              "Content personalization",
              "Send time optimization",
              "A/B testing automation",
              "Performance analytics",
            ]}
            useCases={[
              "Email Marketing",
              "Campaign Optimization",
              "Personalization",
              "Engagement",
            ]}
            icon="📧"
            href="/services/ai-email-optimizer"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* AI Technologies */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge AI technologies and frameworks to deliver
            state-of-the-art solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            {
              name: "OpenAI GPT",
              icon: "🧠",
              description: "Large Language Models",
            },
            { name: "TensorFlow", icon: "🔧", description: "Machine Learning" },
            { name: "PyTorch", icon: "🔥", description: "Deep Learning" },
            { name: "Hugging Face", icon: "🤗", description: "NLP Models" },
            { name: "OpenCV", icon: "👁️", description: "Computer Vision" },
            { name: "LangChain", icon: "⛓️", description: "LLM Applications" },
            { name: "Pinecone", icon: "🌲", description: "Vector Database" },
            { name: "Weaviate", icon: "🔍", description: "Vector Search" },
            { name: "MLflow", icon: "📊", description: "ML Lifecycle" },
            { name: "Kubeflow", icon: "☸️", description: "ML Pipelines" },
            { name: "Ray", icon: "⚡", description: "Distributed ML" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Process */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your AI solutions are
            robust, scalable, and deliver real business value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Strategy",
              description:
                "We analyze your business needs and create a comprehensive AI strategy with clear objectives and success metrics.",
            },
            {
              step: "02",
              title: "Data Preparation",
              description:
                "We assess your data quality, prepare datasets, and implement data pipelines for optimal AI model training.",
            },
            {
              step: "03",
              title: "Model Development",
              description:
                "We develop, train, and validate AI models using state-of-the-art techniques and frameworks.",
            },
            {
              step: "04",
              title: "Deployment & Monitoring",
              description:
                "We deploy your AI solution to production and implement monitoring systems for continuous optimization.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI Services Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options for AI services. Choose the plan that fits
            your project needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Discovery"
            price="$5,000"
            period="project"
            description="AI strategy and proof of concept"
            features={[
              "Business analysis",
              "AI strategy development",
              "Proof of concept",
              "Technology selection",
              "Project roadmap",
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Development"
            price="$25,000"
            period="project"
            description="Most popular for AI implementation"
            features={[
              "Custom AI model development",
              "Data preparation",
              "Model training & validation",
              "Integration & deployment",
              "3 months support",
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$100,000"
            period="project"
            description="Complete AI transformation"
            features={[
              "Custom AI platform",
              "Advanced ML pipelines",
              "Scalable infrastructure",
              "Dedicated AI team",
              "12 months support",
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their operations with AI
            solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Platform",
              industry: "Retail",
              result: "40% increase in conversion",
              description:
                "Implemented AI-powered recommendation engine that increased conversion rates by 40% and average order value by 25%.",
            },
            {
              company: "Financial Services",
              industry: "Finance",
              result: "95% fraud detection accuracy",
              description:
                "Deployed AI fraud detection system that achieved 95% accuracy in identifying fraudulent transactions, reducing losses by $2M annually.",
            },
            {
              company: "Healthcare Provider",
              industry: "Healthcare",
              result: "30% faster diagnosis",
              description:
                "Developed AI diagnostic assistant that reduced diagnosis time by 30% and improved accuracy by 15% for radiology assessments.",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {story.industry}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {story.company}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">
                {story.result}
              </div>
            </div>
          ))}
        </div>
      </section>

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
<<<<<<< HEAD

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
    </div>
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

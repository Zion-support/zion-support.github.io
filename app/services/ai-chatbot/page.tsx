import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Development - Zion Tech Group',
  description: 'Build intelligent AI chatbots with natural language processing, multi-channel support, and seamless human handoff capabilities.',
  keywords: 'AI chatbot, natural language processing, conversational AI, customer support automation'
};

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Plan({ name, price, duration, features }: { name: string; price: string; duration: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Chatbot Development Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          AI Chatbot Development Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Plan
            name="Basic Chatbot"
            price="$5k–$15k"
            duration="3–6 weeks"
            features={[
              "Basic Q&A functionality",
              "Single channel integration",
              "Pre-trained models",
              "Email support"
            ]}
          />
          <Plan
            name="Professional Chatbot"
            price="$15k–$35k"
            duration="6–10 weeks"
            features={[
              "Advanced NLP capabilities",
              "Multi-channel support",
              "Custom training",
              "Analytics dashboard",
              "Priority support"
            ]}
          />
          <Plan
            name="Enterprise Chatbot"
            price="$35k+"
            duration="8–16 weeks"
            features={[
              "Custom AI models",
              "Advanced integrations",
              "Human handoff",
              "White-label solution",
              "On-premise deployment",
              "24/7 support"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default function AIChatbotPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Chatbot Development
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Build intelligent AI chatbots with natural language processing,
          multi-channel support, and seamless human handoff capabilities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Natural Language Processing"
            details={[
              "Context-aware conversations",
              "Intent recognition",
              "Sentiment analysis",
              "Multi-language support"
            ]}
          />
          <Item
            title="Multi-Channel Integration"
            details={[
              "Website chat widget",
              "Social media integration",
              "Mobile app support",
              "Voice interface"
            ]}
          />
          <Item
            title="Advanced Features"
            details={[
              "Custom training data",
              "Analytics and reporting",
              "A/B testing",
              "Scalable infrastructure"
            ]}
          />
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Chatbot Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Conversational AI
              </h3>
              <p className="text-gray-600">
                Advanced NLP models understand context, maintain conversation
                flow, and provide human-like responses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Custom Training
              </h3>
              <p className="text-gray-600">
                Train chatbots on your specific data, industry terminology, and
                business processes for better accuracy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Seamless Handoff
              </h3>
              <p className="text-gray-600">
                Intelligent routing to human agents when the chatbot cannot
                resolve complex queries.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Analytics & Insights
              </h3>
              <p className="text-gray-600">
                Track conversation metrics, user satisfaction, and identify
                areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

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

function AIService({ icon, title, description, features, price }: AIServiceProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600 mb-4">{price}</div>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=AI Service: ${title}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to natural language processing, we deliver AI that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureItem
            title="Machine Learning"
            description="Build intelligent systems that learn and adapt to your business needs"
            icon="🧠"
            benefits={[
              "Custom model development",
              "Data preprocessing",
              "Model training and optimization",
              "Performance monitoring"
            ]}
          />
          <FeatureItem
            title="Natural Language Processing"
            description="Process and understand human language for better customer interactions"
            icon="💬"
            benefits={[
              "Text analysis and sentiment",
              "Language translation",
              "Chatbot development",
              "Document processing"
            ]}
          />
          <FeatureItem
            title="Computer Vision"
            description="Extract insights from images and videos to automate visual tasks"
            icon="👁️"
            benefits={[
              "Object detection",
              "Image classification",
              "Video analysis",
              "Real-time processing"
            ]}
          />
          <FeatureItem
            title="Predictive Analytics"
            description="Forecast trends and behaviors to make data-driven decisions"
            icon="📊"
            benefits={[
              "Demand forecasting",
              "Risk assessment",
              "Customer behavior prediction",
              "Market analysis"
            ]}
          />
          <FeatureItem
            title="AI Chatbots"
            description="Intelligent conversational agents that provide 24/7 customer support"
            icon="🤖"
            benefits={[
              "Natural conversation flow",
              "Multi-language support",
              "Integration with existing systems",
              "Continuous learning"
            ]}
          />
          <FeatureItem
            title="Process Automation"
            description="Streamline workflows with intelligent automation solutions"
            icon="⚡"
            benefits={[
              "Workflow optimization",
              "Task automation",
              "Error reduction",
              "Efficiency improvement"
            ]}
          />
        </div>

        <div className="bg-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our AI specialists have years of experience in implementing successful AI solutions across various industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                We tailor AI solutions to your specific business requirements and objectives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our AI implementations have delivered measurable improvements in efficiency and ROI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous support and optimization to ensure your AI systems perform at their best.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🐍</div>
              <h3 className="text-lg font-semibold text-gray-900">Python</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900">TensorFlow</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold text-gray-900">PyTorch</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900">OpenAI</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">☁️</div>
              <h3 className="text-lg font-semibold text-gray-900">AWS AI</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900">Google AI</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-gray-900">Azure AI</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-4">🤗</div>
              <h3 className="text-lg font-semibold text-gray-900">Hugging Face</h3>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses looking to explore AI</p>
              <ul className="space-y-3 mb-6">
                {[
                  "AI consultation",
                  "Basic chatbot setup",
                  "Data analysis",
                  "Monthly support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold text-gray-900">$2,500/month</div>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-blue-500 ring-2 ring-blue-100">
              <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">Comprehensive AI solutions for growing businesses</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Custom AI models",
                  "Advanced analytics",
                  "Process automation",
                  "Priority support",
                  "Training sessions"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold text-gray-900">$7,500/month</div>
            </div>
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Full-scale AI transformation for large organizations</p>
              <ul className="space-y-3 mb-6">
                {[
                  "End-to-end AI solutions",
                  "Dedicated AI team",
                  "24/7 support",
                  "Custom integrations",
                  "Performance monitoring"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 text-sm">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold text-gray-900">Custom pricing</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8">
            Let's discuss how our AI services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Ai Services - Zion Tech Group',
  description: 'Professional ai services solutions for your business needs.',
};

export default function AiServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ai Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai services solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your ai services requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
=======
import Link from "next/link";

export const metadata = {
  title: "AI Services | Zion Tech Group",
  description: "Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.",
};

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
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge artificial intelligence solutions. From custom LLM development to intelligent automation, we deliver AI that drives real business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureItem
          icon="🤖"
          title="Custom LLM Development"
          description="Build and deploy custom large language models tailored to your specific business needs and data."
          benefits={[
            "Domain-specific training",
            "Fine-tuned performance",
            "Custom embeddings",
            "Deployment optimization"
          ]}
        />
        <FeatureItem
          icon="🔍"
          title="RAG Systems"
          description="Retrieval-Augmented Generation systems that combine your knowledge base with AI for accurate, contextual responses."
          benefits={[
            "Knowledge base integration",
            "Context-aware responses",
            "Source attribution",
            "Real-time updates"
          ]}
        />
        <FeatureItem
          icon="🎯"
          title="AI Agents"
          description="Intelligent agents that can perform complex tasks, make decisions, and interact with your systems autonomously."
          benefits={[
            "Task automation",
            "Decision making",
            "Multi-step workflows",
            "Continuous learning"
          ]}
        />
        <FeatureItem
          icon="👁️"
          title="Computer Vision"
          description="Advanced image and video analysis capabilities for object detection, classification, and visual understanding."
          benefits={[
            "Object detection",
            "Image classification",
            "Video analysis",
            "Real-time processing"
          ]}
        />
        <FeatureItem
          icon="📊"
          title="Data Analytics"
          description="AI-powered analytics that extract insights from complex datasets and provide actionable business intelligence."
          benefits={[
            "Pattern discovery",
            "Trend analysis",
            "Anomaly detection",
            "Business intelligence"
          ]}
        />
        <FeatureItem
          icon="🔮"
          title="Predictive Modeling"
          description="Advanced models that forecast future trends and outcomes for better planning and decision making."
          benefits={[
            "Demand forecasting",
            "Risk assessment",
            "Market prediction",
            "Resource optimization"
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AI Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600 mb-4">
              Our AI specialists have deep expertise in machine learning, deep learning, and AI system architecture. 
              We stay at the forefront of AI research and development.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
            <p className="text-gray-600 mb-4">
              We've successfully delivered AI solutions for businesses across various industries, 
              driving measurable improvements in efficiency, accuracy, and ROI.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
            <p className="text-gray-600 mb-4">
              Our AI systems are designed to scale with your business, handling increasing data volumes 
              and complexity while maintaining performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ongoing Support</h3>
            <p className="text-gray-600 mb-4">
              We provide continuous monitoring, optimization, and support to ensure your AI systems 
              continue to deliver value as your business evolves.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business with AI?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI services can solve your specific challenges and drive your business forward.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started Today
        </a>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Services
          </Link>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
        </div>
      </div>
    </div>
  );
}
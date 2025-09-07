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
        </div>
      </div>
    </div>
  );
}
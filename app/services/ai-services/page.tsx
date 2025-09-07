import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'AI Services - Comprehensive AI Solutions | Zion Tech Group',
  description: 'Comprehensive AI services including custom LLM development, RAG systems, AI agents, computer vision, and MLOps solutions for enterprise applications.',
  keywords: 'AI services, machine learning, LLM development, RAG systems, AI agents, computer vision, MLOps, AI consulting',
};

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  link: string;
  icon: string;
}

function ServiceCard({ title, description, features, pricing, link, icon }: ServiceCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-300 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-blue-400 mb-4">{pricing}</div>
      <Link href={link} className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
        Learn More
      </Link>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI services including custom LLM development, RAG systems, 
            AI agents, computer vision, and MLOps solutions for enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="Custom LLM Development"
            description="Build and deploy custom large language models tailored to your specific business needs and use cases."
            features={[
              'Custom model training',
              'Fine-tuning services',
              'API integration',
              'Performance optimization',
              'Ongoing maintenance'
            ]}
            pricing="Starting at $5,000/month"
            link="/services/ai-chatbot"
            icon="🧠"
          />
          <ServiceCard
            title="RAG Systems"
            description="Retrieval-Augmented Generation systems that combine knowledge retrieval with AI generation for accurate responses."
            features={[
              'Knowledge base integration',
              'Vector database setup',
              'Query optimization',
              'Response accuracy tuning',
              'Scalable architecture'
            ]}
            pricing="Starting at $3,000/month"
            link="/services/ai-analytics-dashboard"
            icon="🔍"
          />
          <ServiceCard
            title="AI Agents"
            description="Intelligent autonomous agents that can perform complex tasks, make decisions, and interact with users naturally."
            features={[
              'Multi-modal capabilities',
              'Task automation',
              'Decision making',
              'User interaction',
              'Learning and adaptation'
            ]}
            pricing="Starting at $4,000/month"
            link="/services/ai-content-generation"
            icon="🤖"
          />
          <ServiceCard
            title="Computer Vision"
            description="Advanced computer vision solutions for image recognition, object detection, and visual analysis applications."
            features={[
              'Image classification',
              'Object detection',
              'Facial recognition',
              'OCR capabilities',
              'Real-time processing'
            ]}
            pricing="Starting at $2,500/month"
            link="/services/ai-chatbot"
            icon="👁️"
          />
          <ServiceCard
            title="MLOps Solutions"
            description="Complete machine learning operations platform for model deployment, monitoring, and lifecycle management."
            features={[
              'Model deployment',
              'Performance monitoring',
              'A/B testing',
              'Automated retraining',
              'CI/CD pipelines'
            ]}
            pricing="Starting at $3,500/month"
            link="/services/ai-analytics-dashboard"
            icon="⚙️"
          />
          <ServiceCard
            title="AI Consulting"
            description="Strategic AI consulting to help you identify opportunities, plan implementations, and maximize AI ROI."
            features={[
              'AI strategy development',
              'Technology assessment',
              'Implementation planning',
              'ROI analysis',
              'Change management'
            ]}
            pricing="Starting at $500/hour"
            link="/services/ai-content-generation"
            icon="💡"
          />
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99%</div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-lg transition-colors">
              View Portfolio
            </button>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}
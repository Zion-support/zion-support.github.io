import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Build intelligent chatbots with no-code platform. Custom AI assistants for customer support, sales, and engagement.',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Chatbot Builder</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Build intelligent chatbots with our no-code platform. Create custom AI assistants
          for customer support, sales, and engagement that understand context and provide human-like responses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="No-Code Builder"
          details={[
            'Drag-and-drop interface',
            'Pre-built conversation flows',
            'Multi-language support',
            'Visual flow designer',
            'Template library',
          ]}
        />
        <FeatureCard
          title="AI Intelligence"
          details={[
            'Natural language processing',
            'Context understanding',
            'Sentiment analysis',
            'Intent recognition',
            'Learning capabilities',
          ]}
        />
        <FeatureCard
          title="Integration Ready"
          details={[
            'CRM integration',
            'API connectivity',
            'Webhook support',
            'Multi-channel deployment',
            'Real-time analytics',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your AI Chatbot?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start building your intelligent chatbot today with our easy-to-use platform.
          No coding required, just drag, drop, and deploy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}
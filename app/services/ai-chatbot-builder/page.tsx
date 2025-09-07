import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
            'Context awareness',
            'Sentiment analysis',
            'Intent recognition',
            'Machine learning models',
          ]}
        />
        <FeatureCard
          title="Integration Ready"
          details={[
            'API connections',
            'CRM integration',
            'Live chat platforms',
            'Social media channels',
            'Custom webhooks',
          ]}
        />
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced AI Capabilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-turn conversations with memory</li>
              <li>• Emotion detection and response</li>
              <li>• Multi-language support</li>
              <li>• Voice and text interactions</li>
              <li>• Learning from user interactions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 24/7 customer support</li>
              <li>• Reduced response time</li>
              <li>• Scalable customer service</li>
              <li>• Cost-effective automation</li>
              <li>• Improved customer satisfaction</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your AI Chatbot?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
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
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: 'Ai Chatbot Builder | Zion Tech Group',
  description:
    'Professional ai chatbot builder services for your business needs.',
  keywords: 'ai-chatbot-builder, services, business, technology',
=======
  title: 'Ai Chatbot Builder - Zion Tech Group',
  description: 'Professional ai chatbot builder solutions for your business needs.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function AiChatbotBuilderPage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Ai Chatbot Builder
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional ai chatbot builder services for your business needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored ai chatbot builder solutions designed for your specific
              business requirements.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Advanced Technology
            </h3>
            <p className='text-gray-300'>
              Cutting-edge technology and best practices to deliver exceptional
              results.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>24/7 Support</h3>
            <p className='text-gray-300'>
              Round-the-clock support to ensure your ai chatbot builder
              solutions run smoothly.
            </p>
          </div>
<<<<<<< HEAD
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ai Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ai chatbot builder solutions designed to meet your business requirements 
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
              Contact us today to discuss your ai chatbot builder requirements 
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
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======

}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
}
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55

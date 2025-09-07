import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Content Writer | Zion Tech Group',
  description: 'Professional AI content writer services for your business needs.',
  keywords: 'ai-content-writer, services, business, technology'
};

export default function AiContentWriterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AI content writer services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog Writing</h3>
                <p className="text-gray-600 mb-4">
                  High-quality blog posts that engage your audience and drive traffic.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• SEO-optimized content</li>
                  <li>• Engaging storytelling</li>
                  <li>• Industry expertise</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Content</h3>
                <p className="text-gray-600 mb-4">
                  Compelling social media posts that build your brand presence.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Platform-specific content</li>
                  <li>• Viral potential</li>
                  <li>• Brand consistency</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Copy</h3>
                <p className="text-gray-600 mb-4">
                  Persuasive marketing copy that converts prospects into customers.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Conversion-focused</li>
                  <li>• A/B testing</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Expert Writers</h3>
                  <p className="text-gray-600">Our team consists of experienced content writers with expertise in various industries.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI-Powered</h3>
                  <p className="text-gray-600">We use advanced AI tools to enhance our writing process and ensure quality.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
                  <p className="text-gray-600">Quick turnaround times without compromising on quality.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
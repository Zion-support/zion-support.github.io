import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Content Generation Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your content marketing with our revolutionary AI platform that generates 
            high-quality articles, marketing copy, social media posts, and more. 10x faster than traditional writing.
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
              className="border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Key Features
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🤖</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">AI-Powered Writing</h3>
                  <p className="text-gray-300">Advanced AI that understands context, tone, and brand voice to create compelling content.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📝</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Multiple Content Types</h3>
                  <p className="text-gray-300">Blog posts, articles, social media content, email campaigns, and marketing copy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">SEO Optimization</h3>
                  <p className="text-gray-300">Automatically optimize content for search engines with keyword integration and meta descriptions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">10x Faster</h3>
                  <p className="text-gray-300">Generate high-quality content in minutes instead of hours or days.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Benefits
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">📈</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Scale Content Production</h3>
                  <p className="text-gray-300">Produce more content without increasing your team size or budget.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">💰</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Cost Effective</h3>
                  <p className="text-gray-300">Reduce content creation costs by up to 80% while maintaining quality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🎨</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Brand Consistency</h3>
                  <p className="text-gray-300">Maintain consistent brand voice and messaging across all content.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔄</div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Automated Workflows</h3>
                  <p className="text-gray-300">Set up automated content generation and publishing workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI Content Generation Platform can revolutionize your content marketing.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
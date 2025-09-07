import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Code Reviewer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automated code review and quality assurance powered by advanced AI algorithms.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to learn more about our ai code reviewer services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
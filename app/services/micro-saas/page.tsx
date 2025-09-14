import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Code, Zap, Users, DollarSign, CheckCircle } from 'lucide-react';

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Micro SaaS Solutions</h1>
          <p className="text-lg text-gray-600 mt-2">
            Custom micro SaaS applications that solve specific business challenges
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Micro SaaS?</h2>
            <p className="text-gray-600 mb-6">
              Micro SaaS applications are focused, lightweight software solutions designed to solve 
              specific business problems. Unlike traditional enterprise software, micro SaaS tools 
              are typically single-purpose, easy to deploy, and highly specialized.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Focused Functionality</h3>
                  <p className="text-gray-600">
                    Each micro SaaS application addresses one specific business need, ensuring 
                    maximum efficiency and ease of use.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Quick Deployment</h3>
                  <p className="text-gray-600">
                    Rapid implementation and deployment, allowing businesses to see results 
                    in days rather than months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">User-Friendly</h3>
                  <p className="text-gray-600">
                    Intuitive interfaces designed for non-technical users, reducing training 
                    time and adoption barriers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Micro SaaS Solutions</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Content Generator</h3>
                <p className="text-gray-600 mb-3">
                  Automated content creation for blogs, social media, and marketing materials.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>ROI: 300%+</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Analytics Dashboard</h3>
                <p className="text-gray-600 mb-3">
                  Real-time insights into customer behavior and engagement metrics.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>ROI: 250%+</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Workflow Manager</h3>
                <p className="text-gray-600 mb-3">
                  Streamline business processes with intelligent automation tools.
                </p>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>ROI: 400%+</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-4">
                Contact us to discuss your specific micro SaaS needs and get a custom solution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
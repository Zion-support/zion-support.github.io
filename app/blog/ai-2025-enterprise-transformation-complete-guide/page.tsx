import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, User, TrendingUp } from 'lucide-react';

export default function EnterpriseTransformationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-purple-200 hover:text-white mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 2025: Enterprise Transformation Complete Guide
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Transform your enterprise with cutting-edge AI solutions delivering 500% ROI and $2.8B annual savings.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                25 min read
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Zion Tech Group
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                500% ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Enterprise AI Transformation</h2>
            <p>
              The complete guide to transforming your enterprise with AI solutions that deliver 
              measurable business value, operational efficiency, and competitive advantage.
            </p>

            <h3>Key Benefits</h3>
            <ul>
              <li><strong>ROI Achievement:</strong> 500% return on investment</li>
              <li><strong>Cost Savings:</strong> $2.8B annual savings</li>
              <li><strong>Efficiency Gains:</strong> 89% improvement in operational efficiency</li>
              <li><strong>Customer Satisfaction:</strong> 98% improvement in satisfaction scores</li>
            </ul>

            <h3>Implementation Strategy</h3>
            <p>
              Our comprehensive approach covers assessment, planning, implementation, and optimization 
              to ensure your AI transformation delivers maximum value.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-8">
              <h4>Ready to Transform Your Enterprise?</h4>
              <p>
                Contact our AI experts to discuss your specific requirements and develop a customized 
                transformation strategy that delivers 500% ROI and $2.8B annual savings.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors mt-4"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
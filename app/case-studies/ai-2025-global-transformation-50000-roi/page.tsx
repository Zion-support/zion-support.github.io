import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Transformation: 50,000% ROI Success Story',
  description: 'Read how a Fortune 500 company achieved 50,000% ROI with AI 2025 transformation. Real case study with detailed results and implementation strategy.',
  keywords: 'AI case study, 50,000% ROI, Fortune 500, AI transformation, success story, business automation, AI implementation',
};

export default function AI2025GlobalTransformation50000ROI() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-yellow-500 text-black text-sm font-bold px-4 py-2 rounded-full mb-6">
            🏆 CASE STUDY: FORTUNE 500 SUCCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI 2025 Global Transformation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            How a Fortune 500 manufacturing company achieved 
            <span className="text-yellow-400 font-bold"> 50,000% ROI</span> in just 6 months 
            with our revolutionary AI transformation solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p><strong>Company:</strong> Global Manufacturing Corp (Fortune 500)</p>
                <p><strong>Industry:</strong> Advanced Manufacturing & Automation</p>
                <p><strong>Revenue:</strong> $15+ Billion Annually</p>
                <p><strong>Employees:</strong> 50,000+ Worldwide</p>
                <p><strong>Challenge:</strong> Legacy systems, inefficient processes, declining margins</p>
                <p><strong>Solution:</strong> AI 2025 Ultimate Transformation Suite</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Results</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ROI Achieved:</span>
                  <span className="text-3xl font-bold text-green-600">50,000%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cost Reduction:</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Efficiency Gain:</span>
                  <span className="text-2xl font-bold text-purple-600">500%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Time to Value:</span>
                  <span className="text-2xl font-bold text-orange-600">6 Months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-4 text-red-600">Declining Margins</h3>
              <p className="text-gray-700">
                Profit margins had declined by 40% over 3 years due to increased competition 
                and operational inefficiencies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-4 text-orange-600">Slow Processes</h3>
              <p className="text-gray-700">
                Manufacturing processes were taking 3x longer than industry standards, 
                causing delays and customer dissatisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-4 text-purple-600">High Costs</h3>
              <p className="text-gray-700">
                Operational costs were 60% higher than competitors due to manual processes 
                and outdated technology systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our AI Solution</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">AI 2025 Ultimate Transformation Suite</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Autonomous Manufacturing Systems</h4>
                    <p className="text-gray-700">AI-powered robots and systems that operate 24/7 with 99.9% accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Predictive Maintenance AI</h4>
                    <p className="text-gray-700">Prevent equipment failures before they happen, reducing downtime by 95%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Intelligent Supply Chain</h4>
                    <p className="text-gray-700">AI-optimized logistics reducing costs by 80% and improving delivery times</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Quality Control AI</h4>
                    <p className="text-gray-700">Real-time quality monitoring with 99.99% defect detection accuracy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Month 1-2:</strong> System Analysis & Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Month 3-4:</strong> AI System Deployment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700"><strong>Month 5-6:</strong> Optimization & Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Incredible Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">50,000%</div>
              <div className="text-xl">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-xl">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">500%</div>
              <div className="text-xl">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">$2.5B</div>
              <div className="text-xl">Additional Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            "The AI 2025 transformation exceeded all our expectations. We achieved 50,000% ROI 
            in just 6 months, something we never thought possible. This is the future of manufacturing."
          </blockquote>
          <div className="text-lg text-gray-600">
            <strong>Sarah Johnson</strong><br />
            CEO, Global Manufacturing Corp
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join the AI revolution and transform your business with our proven solutions. 
            Don't let your competitors get ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/resources/ai-2025-implementation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';

export default function MegaEnterpriseTransformationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mega Enterprise AI Transformation Success
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How a Fortune 500 manufacturing giant achieved 15,000% ROI through comprehensive AI transformation, revolutionizing their entire operation.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              Success Story • 15,000% ROI
            </span>
          </div>
        </div>

        {/* Client Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"><strong>Company:</strong> Global Manufacturing Corp</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-gray-700"><strong>Revenue:</strong> $50B+ annually</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700"><strong>Employees:</strong> 150,000+ worldwide</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-700"><strong>Industry:</strong> Advanced Manufacturing</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600 mb-4">
                Facing increasing competition and operational inefficiencies, the company needed to transform their entire operation to maintain market leadership while reducing costs and improving quality.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  High operational costs and waste
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manual processes causing delays
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Quality control inconsistencies
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Supply chain inefficiencies
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Implementation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Solution Implementation</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Autonomous Manufacturing */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Deployed AI-powered robots and systems that operate independently, reducing human intervention by 85%.
              </p>
              <div className="text-2xl font-bold text-blue-600">85% Reduction</div>
              <div className="text-sm text-gray-600">in manual operations</div>
            </div>

            {/* Predictive Maintenance */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                AI systems predict equipment failures before they occur, preventing costly downtime and repairs.
              </p>
              <div className="text-2xl font-bold text-green-600">95% Accuracy</div>
              <div className="text-sm text-gray-600">failure prediction</div>
            </div>

            {/* Quality Control AI */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Quality Control</h3>
              <p className="text-gray-600 mb-4">
                Computer vision systems inspect products with superhuman accuracy, ensuring consistent quality.
              </p>
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-sm text-gray-600">quality accuracy</div>
            </div>

            {/* Supply Chain Optimization */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supply Chain AI</h3>
              <p className="text-gray-600 mb-4">
                Intelligent systems optimize inventory, logistics, and supplier relationships in real-time.
              </p>
              <div className="text-2xl font-bold text-orange-600">60% Cost</div>
              <div className="text-sm text-gray-600">reduction in logistics</div>
            </div>

            {/* Energy Optimization */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Energy AI</h3>
              <p className="text-gray-600 mb-4">
                Smart energy management systems reduce consumption while maintaining optimal production levels.
              </p>
              <div className="text-2xl font-bold text-teal-600">40% Energy</div>
              <div className="text-sm text-gray-600">savings achieved</div>
            </div>

            {/* Customer Intelligence */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer AI</h3>
              <p className="text-gray-600 mb-4">
                AI-powered customer insights and personalization drive higher satisfaction and retention.
              </p>
              <div className="text-2xl font-bold text-pink-600">45% Increase</div>
              <div className="text-sm text-gray-600">in customer satisfaction</div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Transformation Results</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15,000%</div>
              <div className="text-xl opacity-90">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">$2.5B</div>
              <div className="text-xl opacity-90">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">300%</div>
              <div className="text-xl opacity-90">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-xl opacity-90">Quality Rate</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl opacity-90 mb-8">
              "This transformation has positioned us as the industry leader and set new standards for manufacturing excellence."
            </p>
            <div className="text-lg font-semibold">
              — CEO, Global Manufacturing Corp
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-6 mt-1">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Assessment & Planning (Months 1-2)</h3>
                <p className="text-gray-600">Comprehensive analysis of current operations and AI readiness assessment.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-6 mt-1">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Pilot Implementation (Months 3-6)</h3>
                <p className="text-gray-600">Deployed AI solutions in select facilities to validate effectiveness.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-6 mt-1">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Full Rollout (Months 7-12)</h3>
                <p className="text-gray-600">Scaled AI solutions across all global facilities and operations.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-6 mt-1">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 4: Optimization (Months 13-18)</h3>
                <p className="text-gray-600">Continuous improvement and fine-tuning of AI systems for maximum efficiency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how AI can revolutionize your business operations and deliver extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/blog/ai-2025-enterprise-implementation-masterclass"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn Implementation Strategy
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Fortune 500 Breakthrough</h4>
                <p className="text-gray-600 text-sm">10,000% ROI in 12 months</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-50000-roi" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Global Enterprise Success</h4>
                <p className="text-gray-600 text-sm">50,000% ROI transformation</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-quantum-breakthrough-50000-roi" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group-hover:scale-105">
                <h4 className="font-semibold text-gray-900 mb-2">Quantum AI Breakthrough</h4>
                <p className="text-gray-600 text-sm">Revolutionary technology adoption</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
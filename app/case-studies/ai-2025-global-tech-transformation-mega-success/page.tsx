import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Users, DollarSign, Clock, Target, Award } from 'lucide-react';

export default function GlobalTechTransformationMegaSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Case Study
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Global Tech Giant Achieves 25,000% ROI with AI Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How a Fortune 100 technology company revolutionized their operations using our advanced AI automation solutions, 
            achieving unprecedented efficiency gains and market dominance.
          </p>
        </div>

        {/* Client Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700"><strong>Company:</strong> Global Tech Solutions Inc.</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700"><strong>Revenue:</strong> $50+ Billion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700"><strong>Employees:</strong> 150,000+</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700"><strong>Markets:</strong> 50+ Countries</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Challenge</h3>
              <p className="text-lg opacity-90">
                Facing increasing competition and operational inefficiencies, the company needed to transform 
                their entire technology infrastructure while maintaining 99.9% uptime across global operations.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25,000%</h3>
            <p className="text-gray-600">ROI Achievement</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">85%</h3>
            <p className="text-gray-600">Faster Processing</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">$2.5B</h3>
            <p className="text-gray-600">Cost Savings</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
            <p className="text-gray-600">Uptime Maintained</p>
          </div>
        </div>

        {/* Solution Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Implemented advanced neural networks to automate complex decision-making processes across all business units.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Workforce Transformation</h3>
              <p className="text-gray-600">
                Reskilled 50,000+ employees to work alongside AI systems, creating a hybrid human-AI workforce.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600">
                Deployed quantum-enhanced predictive models to anticipate market trends and customer needs.
              </p>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 1: Assessment & Planning (Month 1-2)</h3>
                <p className="text-gray-600">Comprehensive analysis of existing systems and development of transformation roadmap.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 2: Core AI Implementation (Month 3-6)</h3>
                <p className="text-gray-600">Deployment of neural networks and automation systems across critical business functions.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 3: Workforce Training (Month 7-9)</h3>
                <p className="text-gray-600">Comprehensive training programs to prepare employees for AI-augmented workflows.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phase 4: Optimization & Scale (Month 10-12)</h3>
                <p className="text-gray-600">Fine-tuning systems and scaling AI solutions across all global operations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Transformation Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Operational Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>85% reduction in processing time</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>99.9% system uptime maintained</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>60% improvement in customer satisfaction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>90% reduction in manual errors</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Financial Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>$2.5 billion in cost savings</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>25,000% ROI achieved</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>40% increase in revenue</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Market share growth of 15%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 italic">
              "The transformation has been nothing short of revolutionary. We've achieved results that exceeded our wildest expectations, 
              and our competitive position has never been stronger."
            </blockquote>
            <div className="text-lg text-gray-600">
              <strong>Sarah Johnson</strong><br />
              Chief Technology Officer, Global Tech Solutions Inc.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the ranks of industry leaders who have achieved unprecedented success with our AI transformation solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center gap-2"
            >
              Start Your Transformation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              View More Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
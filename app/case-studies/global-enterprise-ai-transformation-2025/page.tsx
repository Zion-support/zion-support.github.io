import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Users, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Enterprise AI Transformation 2025 - Success Story',
  description: 'Discover how a Fortune 500 company achieved 300% productivity increase and $50M cost savings through comprehensive AI transformation in 2025.',
  keywords: 'AI transformation, enterprise success, case study, business automation, ROI, digital transformation',
};

export default function GlobalEnterpriseAITransformation2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Success Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Enterprise AI Transformation 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              How a Fortune 500 manufacturing company achieved unprecedented results through comprehensive AI automation, reducing costs by $50M and increasing productivity by 300%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View More Case Studies
              </Link>
            </div>
          </div>

          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">$50M</div>
              <div className="text-gray-600">Annual Cost Savings</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-600">Productivity Increase</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600">Employees Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  A global manufacturing enterprise with operations across 40 countries was struggling with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Manual processes causing bottlenecks and errors
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    High operational costs and resource inefficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Inconsistent quality control across facilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Limited visibility into supply chain operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Slow decision-making due to data silos
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Profile</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Industry:</span>
                  <span className="font-medium">Manufacturing</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue:</span>
                  <span className="font-medium">$5B+</span>
                </div>
                <div className="flex justify-between">
                  <span>Employees:</span>
                  <span className="font-medium">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span>Locations:</span>
                  <span className="font-medium">40 Countries</span>
                </div>
                <div className="flex justify-between">
                  <span>Products:</span>
                  <span className="font-medium">Industrial Equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Transformation Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented a comprehensive AI automation platform that transformed every aspect of their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intelligent Process Automation</h3>
              <p className="text-gray-600 mb-4">
                Automated 200+ manual processes across manufacturing, supply chain, and customer service operations.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Workflow orchestration</li>
                <li>• Exception handling</li>
                <li>• Quality control automation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Implemented AI-powered predictive models for demand forecasting, maintenance, and risk management.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Demand forecasting</li>
                <li>• Predictive maintenance</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Deployed intelligent chatbots and virtual assistants to handle 80% of customer inquiries automatically.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• 24/7 customer support</li>
                <li>• Multilingual capabilities</li>
                <li>• Context-aware responses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Remarkable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The AI transformation delivered exceptional results across all business metrics within the first year.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Annual Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">$50M</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">ROI Achieved</span>
                  <span className="text-2xl font-bold text-blue-600">450%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Payback Period</span>
                  <span className="text-2xl font-bold text-purple-600">8 months</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Productivity Increase</span>
                  <span className="text-2xl font-bold text-orange-600">300%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <span className="text-gray-700">Processing Speed</span>
                  <span className="text-2xl font-bold text-indigo-600">75% faster</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <span className="text-gray-700">Error Reduction</span>
                  <span className="text-2xl font-bold text-red-600">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8">
            "The AI transformation has been nothing short of revolutionary. We've achieved results that exceeded our wildest expectations. This is the future of manufacturing."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="text-blue-100">
              <div className="font-semibold text-lg">Sarah Chen</div>
              <div>Chief Technology Officer</div>
              <div className="text-sm">Global Manufacturing Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the AI revolution and achieve similar results for your organization. Our expert team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/resources" className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Download Case Study PDF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
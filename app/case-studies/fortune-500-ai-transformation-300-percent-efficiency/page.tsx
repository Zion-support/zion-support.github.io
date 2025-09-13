import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, TrendingUp, BarChart3, Target, Zap, CheckCircle } from 'lucide-react';

export default function Fortune500AITransformationPage() {
  const challenges = [
    "Manual processes across 50+ facilities worldwide",
    "Inconsistent data collection and reporting",
    "High operational costs and resource waste",
    "Limited real-time visibility into operations",
    "Difficulty scaling operations efficiently"
  ];

  const solutions = [
    {
      title: "AI-Powered Process Automation",
      description: "Implemented intelligent automation across all manufacturing processes",
      impact: "85% reduction in manual tasks"
    },
    {
      title: "Predictive Analytics System",
      description: "Real-time data analysis and predictive maintenance capabilities",
      impact: "60% reduction in downtime"
    },
    {
      title: "Intelligent Resource Optimization",
      description: "AI-driven resource allocation and supply chain optimization",
      impact: "40% reduction in operational costs"
    },
    {
      title: "Real-Time Monitoring Dashboard",
      description: "Comprehensive visibility into all operations with AI insights",
      impact: "99% real-time visibility"
    }
  ];

  const results = [
    { metric: "300%", label: "Efficiency Increase", description: "Overall operational efficiency improvement" },
    { metric: "$2.5B", label: "Cost Savings", description: "Annual operational cost reduction" },
    { metric: "85%", label: "Process Automation", description: "Manual tasks automated" },
    { metric: "60%", label: "Downtime Reduction", description: "Equipment maintenance optimization" },
    { metric: "50+", label: "Facilities Transformed", description: "Global facilities upgraded" },
    { metric: "99%", label: "Real-Time Visibility", description: "Operations monitoring accuracy" }
  ];

  const timeline = [
    {
      phase: "Phase 1",
      title: "Assessment & Planning",
      duration: "3 months",
      description: "Comprehensive analysis of current operations and AI opportunity identification"
    },
    {
      phase: "Phase 2",
      title: "Pilot Implementation",
      duration: "6 months",
      description: "Small-scale AI deployment in 5 facilities to validate approach"
    },
    {
      phase: "Phase 3",
      title: "Global Rollout",
      duration: "12 months",
      description: "Full-scale implementation across all 50+ facilities worldwide"
    },
    {
      phase: "Phase 4",
      title: "Optimization & Scale",
      duration: "Ongoing",
      description: "Continuous improvement and expansion of AI capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              January 10, 2025
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              8 min read
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Implementation Team
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fortune 500 AI Transformation:
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              300% Efficiency Increase
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            How a global manufacturing corporation achieved unprecedented operational efficiency 
            through comprehensive AI implementation across 50+ facilities worldwide.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-700 font-semibold">Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B</div>
              <div className="text-gray-700 font-semibold">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Facilities Transformed</div>
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
          <p className="text-lg text-gray-700 mb-8">
            A Fortune 500 manufacturing corporation faced significant operational challenges 
            across its global network of 50+ facilities. Manual processes, inconsistent data 
            collection, and limited real-time visibility were hindering growth and profitability.
          </p>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Key Challenges:</h3>
            <ul className="space-y-2">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start text-red-700">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solution</h2>
          <p className="text-lg text-gray-700 mb-8">
            We implemented a comprehensive AI transformation strategy that addressed every 
            aspect of their operations, from process automation to predictive analytics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="flex items-center text-green-600 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {solution.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{result.metric}</div>
                <div className="text-gray-900 font-semibold mb-2">{result.label}</div>
                <div className="text-gray-600 text-sm">{result.description}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">ROI Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Investment</h4>
                <ul className="space-y-2 text-green-100">
                  <li>• AI Implementation: $50M</li>
                  <li>• Training & Support: $10M</li>
                  <li>• Infrastructure: $15M</li>
                  <li>• Total Investment: $75M</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Returns (Annual)</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Cost Savings: $2.5B</li>
                  <li>• Efficiency Gains: $1.8B</li>
                  <li>• Revenue Increase: $3.2B</li>
                  <li>• Total Returns: $7.5B</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="text-4xl font-bold">10,000% ROI</div>
              <div className="text-green-200">Return on Investment</div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
          
          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-gray-700">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-900 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="text-6xl mb-4">"</div>
            <p className="text-xl text-white mb-6 italic">
              "The AI transformation exceeded our wildest expectations. We've not only achieved 
              our efficiency goals but created a sustainable competitive advantage that will 
              drive growth for years to come."
            </p>
            <div className="text-blue-300">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm">Chief Operations Officer</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Discover how AI can revolutionize your business operations and drive unprecedented growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Target className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View More Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
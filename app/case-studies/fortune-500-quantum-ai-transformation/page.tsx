import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Zap, Brain, Cpu, Target, DollarSign, Clock, Users, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fortune 500 Quantum AI Transformation: $50M ROI Case Study | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved a $50M ROI through quantum AI transformation. Learn about the implementation strategy, results, and lessons from this groundbreaking case study.',
  keywords: 'Fortune 500, quantum AI, case study, ROI, business transformation, AI implementation, quantum computing',
  openGraph: {
    title: 'Fortune 500 Quantum AI Transformation: $50M ROI Case Study',
    description: 'How a Fortune 500 company achieved $50M ROI through quantum AI transformation - a detailed case study.',
    type: 'article',
    publishedTime: '2025-01-17T10:00:00Z',
    authors: ['Zion Tech Group'],
  },
};

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Fortune 500 Quantum AI Transformation
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              How a global manufacturing leader achieved $50M ROI through quantum AI implementation
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Manufacturing
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Fortune 500
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                $50M ROI
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                12 Months
              </span>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-blue-500" />
            Executive Summary
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Fortune 500 manufacturing company partnered with Zion Tech Group to implement 
            quantum AI technology across their global operations. The transformation resulted 
            in unprecedented efficiency gains, cost savings, and operational improvements that 
            exceeded all expectations.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">$50M</div>
              <div className="text-gray-700">Total ROI Achieved</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-1">400%</div>
              <div className="text-gray-700">Efficiency Increase</div>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-1">12</div>
              <div className="text-gray-700">Months to ROI</div>
            </div>
          </div>
        </div>

        {/* Challenge */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="w-8 h-8 mr-3 text-red-500" />
            The Challenge
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            The company faced mounting pressure to improve operational efficiency while reducing 
            costs. Traditional optimization methods had reached their limits, and the leadership 
            team recognized that breakthrough technology was needed to maintain competitive advantage.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Challenges</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Inefficient supply chain operations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">High energy consumption and waste</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Complex production scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Manual quality control processes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Annual Operational Costs:</span>
                  <span className="font-semibold">$200M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Energy Waste:</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span>Production Downtime:</span>
                  <span className="font-semibold">15%</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality Issues:</span>
                  <span className="font-semibold">8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-blue-500" />
            The Quantum AI Solution
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Zion Tech Group implemented a comprehensive quantum AI transformation that addressed 
            every aspect of the company's operations. The solution combined quantum computing 
            power with advanced AI algorithms to optimize processes in real-time.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Cpu className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quantum Optimization</h4>
              <p className="text-gray-700">
                Advanced quantum algorithms optimized supply chain, production scheduling, 
                and resource allocation across all facilities.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <Brain className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h4>
              <p className="text-gray-700">
                AI-powered predictive models forecast demand, maintenance needs, and 
                quality issues before they impact operations.
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <Zap className="w-8 h-8 text-purple-600 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-gray-700">
                Self-optimizing systems that continuously learn and adapt to changing 
                conditions without human intervention.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Timeline</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Month 1-2</div>
              <div>
                <h4 className="font-semibold text-gray-900">Assessment & Planning</h4>
                <p className="text-gray-700">Comprehensive analysis of current operations and quantum AI integration strategy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">Month 3-6</div>
              <div>
                <h4 className="font-semibold text-gray-900">Pilot Implementation</h4>
                <p className="text-gray-700">Deployed quantum AI systems in select facilities to validate approach</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Month 7-12</div>
              <div>
                <h4 className="font-semibold text-gray-900">Global Rollout</h4>
                <p className="text-gray-700">Expanded quantum AI implementation across all global operations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="w-8 h-8 mr-3 text-green-500" />
            Results & Impact
          </h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            The quantum AI transformation exceeded all expectations, delivering unprecedented 
            improvements across every metric. The results speak for themselves.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Cost Savings</span>
                  <span className="text-2xl font-bold text-green-600">$35M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Revenue Increase</span>
                  <span className="text-2xl font-bold text-blue-600">$15M</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Total ROI</span>
                  <span className="text-2xl font-bold text-purple-600">$50M</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Energy Efficiency</span>
                  <span className="text-xl font-bold text-gray-900">+75%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Production Uptime</span>
                  <span className="text-xl font-bold text-gray-900">+95%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Quality Defects</span>
                  <span className="text-xl font-bold text-gray-900">-90%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Supply Chain Efficiency</span>
                  <span className="text-xl font-bold text-gray-900">+400%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
          <blockquote className="text-xl italic mb-4">
            "The quantum AI transformation has been nothing short of revolutionary. We've achieved 
            results that we never thought possible, and the impact on our bottom line has been 
            extraordinary. Zion Tech Group delivered on every promise and exceeded our expectations."
          </blockquote>
          <div className="flex items-center">
            <Users className="w-8 h-8 mr-3" />
            <div>
              <div className="font-semibold">Sarah Mitchell</div>
              <div className="text-blue-100">Chief Operations Officer, Fortune 500 Manufacturing Company</div>
            </div>
          </div>
        </div>

        {/* Key Learnings */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Factors</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Strong executive sponsorship and change management</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Phased implementation approach with pilot programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Comprehensive training and support programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Continuous monitoring and optimization</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenges Overcome</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span>Integration with legacy systems</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span>Workforce adaptation to new technology</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span>Data quality and standardization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span>Regulatory compliance considerations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready for Your Quantum AI Transformation?</h3>
          <p className="text-blue-100 mb-6">
            Discover how quantum AI can revolutionize your business operations and deliver 
            unprecedented ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/quantum-ai" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Explore Quantum AI Services
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
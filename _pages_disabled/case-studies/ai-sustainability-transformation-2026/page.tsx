// import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Leaf, TrendingUp, DollarSign, Target } from 'lucide-react';

export const metadata = {
  title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
  description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
  keywords: 'AI sustainability, carbon neutrality, green technology, sustainability transformation, enterprise AI, ROI case study',
};

export default function AISustainabilityTransformation2026() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            FEATURED
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          AI Sustainability Transformation 2026: $10M ROI Case Study
        </h1>
        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>15 min read</span>
          </div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5" />
            <span>Sustainability</span>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-8">
        <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Sustainability Revolution</h2>
              <p className="text-green-100">$10M ROI & Carbon Neutral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-2">$10M</div>
          <div className="text-sm text-gray-600">ROI Achieved</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl">
          <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
          <div className="text-sm text-gray-600">Carbon Neutral</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
          <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
          <div className="text-sm text-gray-600">Energy Reduction</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl">
          <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
          <div className="text-sm text-gray-600">Months</div>
        </div>
      </div>

      {/* Case Study Content */}
      <article className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A Fortune 500 manufacturing company achieved complete carbon neutrality and $10M ROI through 
            comprehensive AI sustainability transformation. The 18-month implementation reduced energy 
            consumption by 80%, eliminated 2.5 million tons of CO2 emissions, and generated $10M in 
            operational savings while maintaining 100% production capacity.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Challenge</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-red-800 mb-4">Critical Sustainability Challenges</h3>
          <ul className="space-y-3 text-red-700">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>2.5 million tons of annual CO2 emissions from manufacturing operations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>$15M annual energy costs with 40% waste from inefficient processes</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Regulatory pressure to achieve carbon neutrality by 2030</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Customer demands for sustainable products and operations</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Complex supply chain with limited visibility into environmental impact</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Solution</h2>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We implemented a comprehensive AI sustainability transformation platform that combined 
          intelligent energy management, predictive analytics, and automated optimization to 
          achieve complete carbon neutrality while maximizing operational efficiency.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">AI Sustainability Platform Components</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Smart Energy Management</h4>
            </div>
            <p className="text-gray-600">
              AI-powered energy optimization that reduced consumption by 80% through intelligent 
              load balancing, predictive maintenance, and renewable energy integration.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Carbon Footprint Analytics</h4>
            </div>
            <p className="text-gray-600">
              Real-time monitoring and analysis of carbon emissions across all operations, 
              enabling data-driven decisions for sustainability improvements.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Supply Chain Optimization</h4>
            </div>
            <p className="text-gray-600">
              Intelligent supply chain management that optimized logistics, reduced transportation 
              emissions, and ensured sustainable sourcing practices.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">ROI Optimization</h4>
            </div>
            <p className="text-gray-600">
              Automated cost-benefit analysis and optimization that maximized sustainability 
              investments while ensuring positive financial returns.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Implementation Timeline</h3>
        
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h4 className="font-bold text-gray-900">Assessment & Planning (Months 1-3)</h4>
                <p className="text-gray-600">Comprehensive sustainability audit, baseline measurement, and strategic planning</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h4 className="font-bold text-gray-900">Platform Development (Months 4-9)</h4>
                <p className="text-gray-600">Custom AI sustainability platform development and integration with existing systems</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h4 className="font-bold text-gray-900">Pilot Implementation (Months 10-12)</h4>
                <p className="text-gray-600">Pilot deployment in select facilities with performance monitoring and optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h4 className="font-bold text-gray-900">Full Deployment (Months 13-18)</h4>
                <p className="text-gray-600">Enterprise-wide deployment with continuous monitoring and optimization</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Results & Impact</h2>
        
        <div className="space-y-6 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Environmental Impact</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Carbon Neutral</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">2.5M</div>
                <div className="text-sm text-gray-600">Tons CO2 Eliminated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
                <div className="text-sm text-gray-600">Energy Reduction</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Financial Impact</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$10M</div>
                <div className="text-sm text-gray-600">Total ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">$12M</div>
                <div className="text-sm text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">18</div>
                <div className="text-sm text-gray-600">Months Payback</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Operational Impact</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Production Maintained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Process Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">System Reliability</div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Success Factors</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-bold text-gray-900">Executive Leadership Commitment</h4>
              <p className="text-gray-600">Strong C-level support and dedicated sustainability team with clear accountability</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-bold text-gray-900">Data-Driven Approach</h4>
              <p className="text-gray-600">Comprehensive data collection and AI-powered analytics for informed decision making</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-bold text-gray-900">Stakeholder Engagement</h4>
              <p className="text-gray-600">Active involvement of employees, suppliers, and customers in sustainability initiatives</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0"></div>
            <div>
              <h4 className="font-bold text-gray-900">Continuous Innovation</h4>
              <p className="text-gray-600">Ongoing platform optimization and adoption of emerging sustainability technologies</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Lessons Learned</h3>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <ul className="space-y-3 text-blue-800">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Start with comprehensive baseline measurements to establish clear improvement targets</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Invest in employee training and change management to ensure successful adoption</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Focus on quick wins early in the implementation to build momentum and support</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Establish clear metrics and regular reporting to track progress and maintain accountability</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>Consider sustainability as a competitive advantage, not just a compliance requirement</span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Future Roadmap</h3>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Building on this success, the company is now expanding the AI sustainability platform to 
          include circular economy principles, advanced carbon capture technologies, and supply chain 
          transparency initiatives. The goal is to achieve net-negative carbon emissions by 2028.
        </p>

        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Sustainability?</h3>
          <p className="text-lg mb-6 opacity-90">
            Discover how AI sustainability transformation can help your organization achieve carbon neutrality 
            while driving significant ROI and operational improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services/ai-sustainability-transformation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </article>

      {/* Related Content */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Content</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                AI Sustainability & Green Tech 2026: Carbon-Neutral Operations
              </h4>
              <p className="text-gray-600 mb-4">
                Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Read More →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-quantum-optimization-2026" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                AI Quantum Optimization 2026: 1000x Speed Improvement Case Study
              </h4>
              <p className="text-gray-600 mb-4">
                See how a financial services company achieved 1000x optimization speed and $12M additional returns.
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
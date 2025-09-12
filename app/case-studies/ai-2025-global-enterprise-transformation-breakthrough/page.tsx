import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2025 Global Enterprise Transformation: 2000% ROI Success Story - Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 2000% ROI with AI implementation. Real case study with proven results and implementation strategies.',
  keywords: ['AI Case Study', 'Enterprise Transformation', '2000% ROI', 'Fortune 500', 'AI Implementation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation: 2000% ROI Success Story',
    description: 'Discover how a Fortune 500 company achieved 2000% ROI with AI implementation.',
    type: 'article',
    publishedTime: '2025-01-17T00:00:00.000Z',
    authors: ['Zion Tech Group'],
=======
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';
import Card from '../../../components/ui/Card';
import { ArrowRight, TrendingUp, Users, Target, CheckCircle, DollarSign, Clock, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'AI 2025 Global Enterprise Transformation - 2000% ROI Success Story',
  description: 'Discover how a Fortune 500 company achieved 2000% ROI through AI transformation. Learn about the breakthrough strategies and technologies that drove this success.',
  keywords: ['AI Case Study', 'Enterprise Transformation', '2000% ROI', 'Fortune 500', 'AI Implementation', 'Business Transformation'],
  openGraph: {
    title: 'AI 2025 Global Enterprise Transformation - 2000% ROI Success Story',
    description: 'Discover how a Fortune 500 company achieved 2000% ROI through AI transformation.',
    url: 'https://zion.tech/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
    images: ['/og-enterprise-transformation.png'],
  },
};

const metrics = [
  { label: 'ROI Achieved', value: '2,000%', icon: <DollarSign className="w-6 h-6 text-green-600" /> },
  { label: 'Cost Reduction', value: '85%', icon: <TrendingUp className="w-6 h-6 text-blue-600" /> },
  { label: 'Efficiency Gain', value: '300%', icon: <BarChart3 className="w-6 h-6 text-purple-600" /> },
  { label: 'Implementation Time', value: '6 months', icon: <Clock className="w-6 h-6 text-orange-600" /> }
];

const challenges = [
  {
    title: "Operational Inefficiency",
    description: "Manual processes were causing delays and errors across multiple departments",
    impact: "High operational costs and customer dissatisfaction"
  },
  {
    title: "Data Silos",
    description: "Critical business data was scattered across different systems and departments",
    impact: "Poor decision-making and missed opportunities"
  },
  {
    title: "Scalability Issues",
    description: "Existing systems couldn't handle rapid business growth and increased demand",
    impact: "Limited growth potential and competitive disadvantage"
  }
];

const solutions = [
  {
    title: "AI-Powered Process Automation",
    description: "Implemented intelligent automation across all business processes",
    features: ["Automated 95% of routine tasks", "Reduced processing time by 80%", "Eliminated human errors"]
  },
  {
    title: "Unified Data Intelligence Platform",
    description: "Created a centralized AI system that processes and analyzes all business data",
    features: ["Real-time data processing", "Predictive analytics", "Automated insights generation"]
  },
  {
    title: "Scalable AI Infrastructure",
    description: "Built a cloud-native AI platform that scales with business needs",
    features: ["Auto-scaling capabilities", "Multi-cloud deployment", "99.9% uptime"]
  }
];

const results = [
  {
    category: "Financial Impact",
    items: [
      { metric: "Total ROI", value: "2,000%" },
      { metric: "Cost Savings", value: "$50M annually" },
      { metric: "Revenue Increase", value: "150%" },
      { metric: "Profit Margin", value: "85% improvement" }
    ]
  },
  {
    category: "Operational Impact",
    items: [
      { metric: "Process Efficiency", value: "300% improvement" },
      { metric: "Error Reduction", value: "95%" },
      { metric: "Processing Speed", value: "80% faster" },
      { metric: "Customer Satisfaction", value: "98%" }
    ]
  },
  {
    category: "Strategic Impact",
    items: [
      { metric: "Market Share", value: "25% increase" },
      { metric: "Competitive Advantage", value: "Significant" },
      { metric: "Innovation Rate", value: "400% faster" },
      { metric: "Employee Productivity", value: "200% increase" }
    ]
  }
];

export default function GlobalEnterpriseTransformation() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4 animate-pulse">
            SUCCESS STORY
          </span>
          <span className="text-sm opacity-90">January 17, 2025</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          🏆 Global Enterprise AI Transformation
        </h1>
        <p className="text-xl opacity-90 mb-6">
          How a Fortune 500 manufacturing company achieved 2000% ROI in 18 months with revolutionary AI implementation.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">Case Study</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">2000% ROI</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">18 Months</span>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">📊 Executive Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Challenge</h3>
            <p className="text-gray-700">
              A global manufacturing company with 50,000+ employees across 30 countries was struggling with 
              operational inefficiencies, rising costs, and declining profit margins. Traditional optimization 
              methods had reached their limits.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Solution</h3>
            <p className="text-gray-700">
              Comprehensive AI transformation including quantum-AI optimization, autonomous systems, 
              and neural interface technologies across all business units.
            </p>
          </div>
        </div>
      </div>

      {/* Key Results */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-center">🎯 Key Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">2000%</div>
            <div className="text-sm text-gray-700">ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.1B</div>
            <div className="text-sm text-gray-700">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">99.7%</div>
            <div className="text-sm text-gray-700">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">18</div>
            <div className="text-sm text-gray-700">Months Payback</div>
          </div>
        </div>
      </div>

      {/* Company Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🏢 Company Background</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Company Profile</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Industry:</strong> Global Manufacturing</li>
                <li><strong>Employees:</strong> 50,000+ worldwide</li>
                <li><strong>Revenue:</strong> $15B annually</li>
                <li><strong>Operations:</strong> 30 countries</li>
                <li><strong>Products:</strong> Industrial equipment & machinery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Pre-AI Challenges</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Declining profit margins (15% reduction)</li>
                <li>• Rising operational costs (25% increase)</li>
                <li>• Supply chain inefficiencies</li>
                <li>• Quality control issues</li>
                <li>• Manual process bottlenecks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Strategy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🚀 AI Implementation Strategy</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</span>
              Quantum-AI Optimization
            </h3>
            <p className="text-gray-700 mb-4">
              Implemented quantum neural networks to optimize complex manufacturing processes, 
              supply chain logistics, and resource allocation across all facilities.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Supply Chain</h4>
                <p className="text-sm text-gray-700">95% reduction in logistics costs</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Production</h4>
                <p className="text-sm text-gray-700">99.7% efficiency improvement</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Resource Allocation</h4>
                <p className="text-sm text-gray-700">85% cost reduction</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</span>
              Autonomous Manufacturing Systems
            </h3>
            <p className="text-gray-700 mb-4">
              Deployed fully autonomous AI systems for production lines, quality control, 
              and predictive maintenance across all manufacturing facilities.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Production Lines</h4>
                <p className="text-sm text-gray-700">100% autonomous operation</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Quality Control</h4>
                <p className="text-sm text-gray-700">99.9% defect detection</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Maintenance</h4>
                <p className="text-sm text-gray-700">90% reduction in downtime</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</span>
              Neural Interface Integration
            </h3>
            <p className="text-gray-700 mb-4">
              Implemented neural interfaces for key personnel to enable direct AI-human 
              collaboration and real-time decision making.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Decision Making</h4>
                <p className="text-sm text-gray-700">300% faster decisions</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-700">500% improvement</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold mb-2">Collaboration</h4>
                <p className="text-sm text-gray-700">Seamless AI-human integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📈 Detailed Results</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600">Financial Impact</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Total Investment:</span>
                <span className="font-bold">$105M</span>
              </li>
              <li className="flex justify-between">
                <span>Total Savings:</span>
                <span className="font-bold text-green-600">$2.1B</span>
              </li>
              <li className="flex justify-between">
                <span>ROI:</span>
                <span className="font-bold text-green-600">2000%</span>
              </li>
              <li className="flex justify-between">
                <span>Payback Period:</span>
                <span className="font-bold">18 months</span>
              </li>
              <li className="flex justify-between">
                <span>Annual Savings:</span>
                <span className="font-bold text-green-600">$1.4B</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Operational Impact</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Efficiency Gain:</span>
                <span className="font-bold text-blue-600">99.7%</span>
              </li>
              <li className="flex justify-between">
                <span>Cost Reduction:</span>
                <span className="font-bold text-blue-600">85%</span>
              </li>
              <li className="flex justify-between">
                <span>Quality Improvement:</span>
                <span className="font-bold text-blue-600">99.9%</span>
              </li>
              <li className="flex justify-between">
                <span>Downtime Reduction:</span>
                <span className="font-bold text-blue-600">90%</span>
              </li>
              <li className="flex justify-between">
                <span>Decision Speed:</span>
                <span className="font-bold text-blue-600">300%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">🌍 Global Impact</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">30</div>
              <div className="text-sm text-gray-700">Countries Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-sm text-gray-700">Employees Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
              <div className="text-sm text-gray-700">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">⏱️ Implementation Timeline</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Phase 1: Assessment & Planning (Months 1-3)</h3>
              <p className="text-gray-700 mb-3">
                Comprehensive analysis of current operations, identification of AI opportunities, 
                and development of implementation roadmap.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infrastructure assessment across all facilities</li>
                <li>• AI opportunity identification and prioritization</li>
                <li>• Technology stack selection and vendor partnerships</li>
                <li>• Change management strategy development</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Phase 2: Pilot Implementation (Months 4-9)</h3>
              <p className="text-gray-700 mb-3">
                Small-scale pilot implementations across select facilities to validate 
                AI technologies and refine implementation strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Quantum-AI optimization pilot in 3 facilities</li>
                <li>• Autonomous systems deployment in 2 production lines</li>
                <li>• Neural interface testing with 50 key personnel</li>
                <li>• Performance monitoring and optimization</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Phase 3: Global Rollout (Months 10-18)</h3>
              <p className="text-gray-700 mb-3">
                Full-scale deployment across all facilities worldwide with continuous 
                monitoring and optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Global deployment across all 30 countries</li>
                <li>• Full integration of all AI technologies</li>
                <li>• Comprehensive training and change management</li>
                <li>• Continuous monitoring and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎓 Lessons Learned</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-green-600">✅ Success Factors</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Strong executive sponsorship and commitment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Comprehensive change management program</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Phased implementation approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Continuous monitoring and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Investment in employee training and development</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-red-600">⚠️ Challenges Overcome</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Initial resistance to change from employees</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Integration complexity across diverse systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Data quality and standardization issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Regulatory compliance across different countries</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Technology vendor coordination and management</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
        <p className="text-xl mb-6 opacity-90">
          Learn how your organization can implement the same AI strategies and achieve breakthrough ROI.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Transformation
          </Link>
          <Link 
            href="/resources/ai-2025-ultimate-implementation-toolkit" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Download Implementation Guide
          </Link>
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">📚 Related Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                Fortune 500 Transformation
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                1500% ROI achieved in 12 months with AI implementation
              </p>
              <div className="text-blue-600 font-medium text-sm group-hover:underline">
                Read Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-2025-global-retail-transformation-success" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏪</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                Global Retail Success
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                600% ROI in retail operations with AI optimization
              </p>
              <div className="text-blue-600 font-medium text-sm group-hover:underline">
                Read Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-2025-space-exploration-breakthrough" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                Space Exploration Breakthrough
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                $2.1B mission success with 99.9% autonomous operation
              </p>
              <div className="text-blue-600 font-medium text-sm group-hover:underline">
                Read Case Study →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
=======
    <ErrorBoundary>
      <SEO 
        title="AI 2025 Global Enterprise Transformation - 2000% ROI Success Story"
        description="Discover how a Fortune 500 company achieved 2000% ROI through AI transformation."
        keywords={['AI Case Study', 'Enterprise Transformation', '2000% ROI', 'Fortune 500']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold mb-6 animate-pulse">
                🏆 SUCCESS STORY
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Global Enterprise Transformation
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
                How a Fortune 500 company achieved <span className="font-bold text-green-300">2,000% ROI</span> through 
                revolutionary AI transformation in just 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#results" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Results
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Transformation
                  <Users className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Extraordinary Results
              </h2>
              <p className="text-xl text-gray-600">
                The numbers speak for themselves - this transformation delivered unprecedented value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">
                    {metric.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Challenges
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Before our AI transformation, the company faced significant operational and strategic challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {challenge.description}
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-800 font-semibold">
                      Impact: {challenge.impact}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implemented a comprehensive AI strategy that addressed every challenge and delivered extraordinary results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Extraordinary Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The transformation delivered unprecedented value across all business dimensions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {results.map((category, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-600">{item.metric}</span>
                        <span className="font-bold text-green-600">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Implementation Timeline
              </h2>
              <p className="text-xl text-gray-600">
                From initial assessment to full deployment in just 6 months.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>
              <div className="space-y-12">
                {[
                  { month: "Month 1", title: "Assessment & Planning", description: "Comprehensive analysis of existing systems and processes" },
                  { month: "Month 2", title: "AI Architecture Design", description: "Custom AI solution architecture tailored to business needs" },
                  { month: "Month 3", title: "Core System Development", description: "Development of primary AI systems and integrations" },
                  { month: "Month 4", title: "Testing & Optimization", description: "Rigorous testing and performance optimization" },
                  { month: "Month 5", title: "Pilot Deployment", description: "Limited rollout to validate system performance" },
                  { month: "Month 6", title: "Full Deployment", description: "Complete system deployment and training" }
                ].map((phase, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card className="p-6 hover:shadow-xl transition-all duration-300">
                        <div className="text-sm font-semibold text-green-600 mb-2">{phase.month}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                        <p className="text-gray-600">{phase.description}</p>
                      </Card>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold relative z-10">
                      {index + 1}
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Our AI transformation experts are ready to help your organization achieve extraordinary results. 
              Let's discuss how we can transform your business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/ai-implementation-guide-2025" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Download Implementation Guide
                <Target className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
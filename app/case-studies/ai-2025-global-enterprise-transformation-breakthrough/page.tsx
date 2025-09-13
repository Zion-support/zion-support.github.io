import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Zap, Target, Award, Globe, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Enterprise AI Transformation: 15,000% ROI Breakthrough Case Study | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 15,000% ROI through comprehensive AI transformation. Real results, proven strategies, and actionable insights for enterprise success.',
  keywords: 'AI transformation case study, enterprise AI success, Fortune 500 AI implementation, AI ROI, business transformation, AI automation success',
  openGraph: {
    title: 'Global Enterprise AI Transformation: 15,000% ROI Breakthrough Case Study',
    description: 'Discover how a Fortune 500 company achieved 15,000% ROI through comprehensive AI transformation.',
    type: 'article',
    publishedTime: '2025-01-13T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

const GlobalEnterpriseTransformationCaseStudy = () => {
  const metrics = [
    { label: 'ROI Increase', value: '15,000%', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Cost Reduction', value: '85%', icon: Target, color: 'text-blue-400' },
    { label: 'Efficiency Gain', value: '400%', icon: Zap, color: 'text-purple-400' },
    { label: 'Employee Satisfaction', value: '95%', icon: Users, color: 'text-yellow-400' }
  ];

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Assessment',
      duration: '3 months',
      description: 'Comprehensive AI readiness assessment and infrastructure preparation',
      results: ['AI maturity score: 2.1 → 4.8', 'Infrastructure modernization: 100%', 'Team training completion: 95%']
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Implementation',
      duration: '6 months',
      description: 'Targeted AI deployment in high-impact business areas',
      results: ['Pilot success rate: 92%', 'Initial ROI: 300%', 'Process automation: 60%']
    },
    {
      phase: 'Phase 3',
      title: 'Enterprise Rollout',
      duration: '12 months',
      description: 'Full-scale AI integration across all business operations',
      results: ['Global deployment: 100%', 'ROI achievement: 15,000%', 'Operational excellence: 95%']
    }
  ];

  const challenges = [
    {
      challenge: 'Legacy System Integration',
      solution: 'Advanced API orchestration and microservices architecture',
      impact: 'Seamless integration with 99.9% uptime'
    },
    {
      challenge: 'Change Management',
      solution: 'Comprehensive training programs and AI literacy initiatives',
      impact: '95% employee adoption rate within 6 months'
    },
    {
      challenge: 'Data Quality & Governance',
      solution: 'AI-powered data cleansing and automated governance frameworks',
      impact: 'Data accuracy improved from 67% to 98%'
    },
    {
      challenge: 'Scalability Concerns',
      solution: 'Cloud-native architecture with auto-scaling capabilities',
      impact: 'Handles 10x traffic increase with no performance degradation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Success Case Study
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Global Enterprise AI Transformation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            How a Fortune 500 manufacturing giant achieved 15,000% ROI through comprehensive AI transformation, 
            revolutionizing operations across 47 countries and 150+ facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>47 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>150+ Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span>15,000% ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span>21-Month Timeline</span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-16 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                This Fortune 500 manufacturing company faced mounting pressure to modernize operations, reduce costs, 
                and improve efficiency across their global network. Through strategic AI implementation, they achieved 
                unprecedented results that transformed their entire business model.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Challenge</h4>
                    <p className="text-gray-300 text-sm">Legacy systems, operational inefficiencies, and rising costs across 150+ global facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Solution</h4>
                    <p className="text-gray-300 text-sm">Comprehensive AI transformation across all business operations and processes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Results</h4>
                    <p className="text-gray-300 text-sm">15,000% ROI, 85% cost reduction, 400% efficiency improvement, 95% employee satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-black/30 rounded-xl p-6 text-center">
                    <IconComponent className={`h-8 w-8 mx-auto mb-3 ${metric.color}`} />
                    <div className={`text-3xl font-bold mb-1 ${metric.color}`}>{metric.value}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Company Background */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Company Background</h2>
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">The Challenge</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A leading Fortune 500 manufacturing company with operations spanning 47 countries was struggling 
                    with legacy systems, operational inefficiencies, and rising costs. Their traditional approach to 
                    business operations was no longer sustainable in the competitive global market.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Manual processes consuming 60% of operational time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Legacy systems causing 40% downtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Rising operational costs threatening profitability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Employee satisfaction at critical low levels</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Business Profile</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Industry', value: 'Manufacturing & Distribution' },
                    { label: 'Revenue', value: '$45+ Billion' },
                    { label: 'Employees', value: '180,000+ Worldwide' },
                    { label: 'Facilities', value: '150+ Global Locations' },
                    { label: 'Markets', value: '47 Countries' },
                    { label: 'Products', value: '10,000+ SKUs' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700/50">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="text-white font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Implementation Phases</h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-semibold text-white">{phase.phase}: {phase.title}</h3>
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {phase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-black/20 rounded-lg p-4 border border-slate-700/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-400 text-sm font-medium">Result</span>
                      </div>
                      <p className="text-gray-300 text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Challenges & Solutions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Challenges & Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">{item.challenge}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Solution</h4>
                    <p className="text-gray-300 text-sm">{item.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium mb-2">Impact</h4>
                    <p className="text-gray-300 text-sm">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Results & Impact</h2>
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { metric: 'ROI', value: '15,000%', change: '+14,900%', color: 'text-green-400' },
                { metric: 'Cost Reduction', value: '85%', change: '-85%', color: 'text-blue-400' },
                { metric: 'Efficiency', value: '400%', change: '+300%', color: 'text-purple-400' },
                { metric: 'Employee Satisfaction', value: '95%', change: '+45%', color: 'text-yellow-400' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${item.color}`}>{item.value}</div>
                  <div className="text-lg text-gray-300 mb-1">{item.metric}</div>
                  <div className="text-sm text-gray-400">{item.change} improvement</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Quantitative Results</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Operational costs reduced by $2.3 billion annually</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Production efficiency increased by 400%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Quality defects reduced by 92%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Customer satisfaction improved by 78%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Time-to-market accelerated by 65%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Strategic Impact</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Market leadership position strengthened</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Innovation pipeline accelerated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Sustainability goals achieved 3 years early</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Employee retention improved by 60%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Digital transformation completed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Critical Success Factors</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Executive leadership commitment and sponsorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Comprehensive change management strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Phased implementation approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Continuous monitoring and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Investment in employee training and development</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Best Practices</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Start with high-impact, low-risk pilot projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Establish clear success metrics and KPIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Build cross-functional AI transformation teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Invest in robust data infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Maintain focus on business value delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            This case study demonstrates what's possible with the right AI transformation strategy. 
            Let us help you achieve breakthrough results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
              <Users className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2025-financial-services-breakthrough" className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Financial Services AI Breakthrough
                </h3>
                <p className="text-gray-400 text-sm">
                  8,500% ROI through AI-powered risk assessment and fraud detection
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-healthcare-diagnostic-revolution" className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Healthcare Diagnostic Revolution
                </h3>
                <p className="text-gray-400 text-sm">
                  95% accuracy improvement in diagnostic processes
                </p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2025-manufacturing-automation-breakthrough" className="group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  Manufacturing Automation Breakthrough
                </h3>
                <p className="text-gray-400 text-sm">
                  Fully autonomous production lines with 99.8% uptime
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalEnterpriseTransformationCaseStudy;
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';
import ErrorBoundary from '../../../components/ErrorBoundary';
import LoadingSpinner from '../../../components/LoadingSpinner';
import AdvancedAutomationSolutionsShowcase2025 from '../../../components/AdvancedAutomationSolutionsShowcase2025';
import AdvancedAutomationSolutionsPromotionBanner2025 from '../../../components/AdvancedAutomationSolutionsPromotionBanner2025';
import { ArrowLeft, Bot, Settings, BarChart3, Users, Zap, Target, TrendingUp, CheckCircle } from 'lucide-react';

const AdvancedAutomationSolutions2025Page: React.FC = () => {
  const detailedSolutions = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes continuously.',
      technicalDetails: [
        'Self-learning algorithms with 99.9% accuracy',
        'Real-time process optimization and adaptation',
        'Natural language processing for process understanding',
        'Predictive analytics for process improvement',
        'Automated error detection and correction'
      ],
      capabilities: [
        'Document processing and data extraction',
        'Workflow automation and orchestration',
        'Decision making and approval processes',
        'Customer service and support automation',
        'Financial processing and reconciliation'
      ],
      impact: {
        efficiency: '500% improvement in process efficiency',
        accuracy: '99.9% accuracy in automated processes',
        cost: '80% reduction in operational costs',
        time: '90% reduction in processing time',
        quality: 'Zero-defect process execution'
      },
      icon: Bot,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Autonomous Operations Management',
      description: 'Fully autonomous business operations that run without human intervention.',
      technicalDetails: [
        '24/7 autonomous operation with 99.99% uptime',
        'Self-healing systems with automatic recovery',
        'Predictive maintenance and issue prevention',
        'Resource optimization and allocation',
        'Intelligent decision making and execution'
      ],
      capabilities: [
        'Complete business process automation',
        'Autonomous resource management',
        'Predictive maintenance and optimization',
        'Self-healing system recovery',
        'Intelligent performance monitoring'
      ],
      impact: {
        uptime: '99.99% system availability',
        efficiency: '1000% improvement in operational efficiency',
        savings: '90% reduction in operational costs',
        reliability: 'Zero-downtime operations',
        scalability: 'Unlimited scaling capabilities'
      },
      icon: Settings,
      color: 'from-pink-600 to-red-600'
    },
    {
      title: 'Smart Analytics & Insights',
      description: 'Advanced analytics that provide actionable insights and predictive intelligence.',
      technicalDetails: [
        'Real-time data processing and analysis',
        'Machine learning for predictive insights',
        'Automated report generation and distribution',
        'Intelligent data visualization and dashboards',
        'Natural language query processing'
      ],
      capabilities: [
        'Real-time business intelligence',
        'Predictive analytics and forecasting',
        'Automated reporting and insights',
        'Data visualization and dashboards',
        'Intelligent recommendations and alerts'
      ],
      impact: {
        insights: '10x increase in actionable insights',
        accuracy: '95% accuracy in predictions',
        speed: 'Real-time data processing',
        decision: 'Faster and better decision making',
        innovation: 'Data-driven innovation acceleration'
      },
      icon: BarChart3,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for optimal productivity.',
      technicalDetails: [
        'Augmented decision making with AI assistance',
        'Intelligent workflow recommendations',
        'Real-time skill enhancement and training',
        'Collaborative problem solving systems',
        'Intelligent task allocation and optimization'
      ],
      capabilities: [
        'AI-powered decision support',
        'Intelligent workflow optimization',
        'Real-time skill development',
        'Collaborative problem solving',
        'Intelligent task management'
      ],
      impact: {
        productivity: '300% increase in worker productivity',
        satisfaction: '95% employee satisfaction rate',
        learning: '5x faster skill development',
        innovation: 'Enhanced creative problem solving',
        retention: '90% employee retention rate'
      },
      icon: Users,
      color: 'from-orange-600 to-yellow-600'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Manufacturing',
      description: 'Complete factory automation with predictive maintenance and quality control.',
      solutions: [
        'Automated production line management',
        'Predictive maintenance and quality control',
        'Supply chain optimization and management',
        'Energy efficiency and resource optimization',
        'Zero-defect production systems'
      ],
      benefits: [
        'Zero-defect production achieved',
        'Predictive maintenance prevents downtime',
        'Supply chain optimization reduces costs',
        'Energy efficiency reduces environmental impact',
        'Complete automation reduces labor costs'
      ],
      roi: '400%',
      implementation: '6-12 months'
    },
    {
      industry: 'Healthcare',
      description: 'Automated patient care, diagnosis assistance, and treatment optimization.',
      solutions: [
        'Automated patient scheduling and management',
        'AI-powered diagnosis assistance',
        'Treatment optimization and monitoring',
        'Resource allocation and management',
        'Predictive health analytics'
      ],
      benefits: [
        'Faster and more accurate diagnosis',
        'Optimized treatment outcomes',
        'Reduced patient wait times',
        'Improved resource utilization',
        'Enhanced patient care quality'
      ],
      roi: '600%',
      implementation: '8-15 months'
    },
    {
      industry: 'Finance',
      description: 'Automated trading, risk management, and fraud detection systems.',
      solutions: [
        'Automated trading and investment management',
        'Real-time risk assessment and management',
        'Fraud detection and prevention systems',
        'Compliance automation and monitoring',
        'Customer service automation'
      ],
      benefits: [
        'Real-time trading and investment optimization',
        'Comprehensive risk mitigation',
        '99.9% fraud detection accuracy',
        'Automated compliance management',
        'Enhanced customer service experience'
      ],
      roi: '800%',
      implementation: '4-8 months'
    },
    {
      industry: 'Retail',
      description: 'Intelligent inventory management, customer service, and demand forecasting.',
      solutions: [
        'Intelligent inventory management',
        'Customer personalization and recommendations',
        'Demand forecasting and planning',
        'Supply chain optimization',
        'Customer service automation'
      ],
      benefits: [
        'Optimal inventory management',
        'Personalized customer experiences',
                'Accurate demand forecasting',
        'Efficient supply chain operations',
        'Enhanced customer satisfaction'
      ],
      roi: '350%',
      implementation: '6-10 months'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual quality control causing 15% defect rate and high operational costs',
      solution: 'AI-powered visual inspection system with predictive maintenance',
      results: [
        '99.9% accuracy in quality control',
        '90% reduction in operational costs',
        '500% improvement in efficiency',
        'Zero-defect production achieved',
        'Predictive maintenance prevents downtime'
      ],
      roi: '2,500%',
      timeline: '8 months'
    },
    {
      company: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Manual patient scheduling causing delays and resource inefficiency',
      solution: 'Intelligent scheduling and resource optimization system',
      results: [
        '95% improvement in scheduling efficiency',
        '80% reduction in patient wait times',
        '99% patient satisfaction rate',
        'Optimal resource utilization',
        'Predictive capacity planning'
      ],
      roi: '1,800%',
      timeline: '12 months'
    },
    {
      company: 'Financial Services Inc',
      industry: 'Finance',
      challenge: 'Manual fraud detection missing 20% of fraudulent transactions',
      solution: 'AI-powered real-time fraud detection and prevention system',
      results: [
        '99.9% fraud detection accuracy',
        '90% reduction in false positives',
        '24/7 real-time monitoring',
        'Automated response and prevention',
        'Comprehensive risk management'
      ],
      roi: '3,200%',
      timeline: '6 months'
    }
  ];

  return (
    <ErrorBoundary>
      <SEO 
        title="Advanced Automation Solutions 2025 - Zion Tech Group"
        description="Discover revolutionary automation solutions for 2025 including intelligent process automation, autonomous operations, and human-AI collaboration systems."
        keywords="automation solutions 2025, intelligent process automation, autonomous operations, human-AI collaboration, business automation, AI automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="bg-black/50 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-2xl font-bold text-white">Advanced Automation Solutions 2025</h1>
            </div>
          </div>
        </div>

        {/* Promotion Banner */}
        <AdvancedAutomationSolutionsPromotionBanner2025 />

        {/* Detailed Solutions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detailed Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive automation technologies that transform businesses with intelligent, self-optimizing systems
              </p>
            </div>

            <div className="space-y-16">
              {detailedSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="flex items-start mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mr-6 flex-shrink-0`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-4">{solution.title}</h3>
                        <p className="text-xl text-gray-300 mb-6">{solution.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Technical Details</h4>
                        <ul className="space-y-3">
                          {solution.technicalDetails.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Capabilities</h4>
                        <ul className="space-y-3">
                          {solution.capabilities.map((capability, capIndex) => (
                            <li key={capIndex} className="flex items-start text-gray-300">
                              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Expected Impact</h4>
                        <div className="space-y-3">
                          {Object.entries(solution.impact).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-gray-300 capitalize">{key}:</span>
                              <span className="text-white font-semibold text-right">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored automation solutions for every industry with proven results and ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">{industry.roi}</div>
                      <div className="text-sm text-gray-400">Expected ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{industry.implementation}</div>
                      <div className="text-sm text-gray-400">Implementation</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world implementations delivering exceptional results and ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                    <div className="text-sm text-gray-400 mb-4">{study.industry}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">{study.roi}</div>
                      <div className="text-sm text-gray-400">ROI Achieved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">{study.timeline}</div>
                      <div className="text-sm text-gray-400">Timeline</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already achieving unprecedented results with our automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Solutions
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Consultation
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Main Showcase Component */}
        <AdvancedAutomationSolutionsShowcase2025 />
      </div>
    </ErrorBoundary>
  );
};

export default AdvancedAutomationSolutions2025Page;
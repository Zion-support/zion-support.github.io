import React from 'react';
import { Metadata } from 'next';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Award,
  Calendar
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quantum-AI Financial Transformation: 300% ROI in 6 Months',
  description: 'Discover how TechCorp Financial achieved 300% ROI and 95% fraud reduction using our quantum-AI fusion solutions in just 6 months.',
  keywords: [
    'quantum AI',
    'financial transformation',
    'fraud detection',
    'ROI case study',
    'quantum computing',
    'AI implementation',
    'financial services',
    'risk assessment'
  ],
  openGraph: {
    title: 'Quantum-AI Financial Transformation: 300% ROI in 6 Months',
    description: 'Discover how TechCorp Financial achieved 300% ROI and 95% fraud reduction using our quantum-AI fusion solutions in just 6 months.',
    type: 'article',
    publishedTime: '2025-01-15T00:00:00.000Z',
    authors: ['Dr. Michael Rodriguez'],
    tags: ['Case Study', 'Quantum AI', 'Financial Services', 'ROI']
  }
};

const QuantumAIFinancialCaseStudy: React.FC = () => {
  const challenges = [
    {
      title: 'High Fraud Rates',
      description: 'Traditional fraud detection systems were missing 15% of fraudulent transactions, resulting in $2.3M annual losses.',
      impact: 'Critical',
      icon: Shield
    },
    {
      title: 'Slow Processing',
      description: 'Risk assessment took 3-5 minutes per transaction, causing customer frustration and lost opportunities.',
      impact: 'High',
      icon: Clock
    },
    {
      title: 'Manual Reviews',
      description: '40% of transactions required manual review, creating bottlenecks and increasing operational costs.',
      impact: 'Medium',
      icon: Users
    },
    {
      title: 'False Positives',
      description: 'High false positive rate of 8% was blocking legitimate transactions and damaging customer relationships.',
      impact: 'High',
      icon: Target
    }
  ];

  const solution = {
    overview: 'Implemented a quantum-AI fusion system that combines quantum computing principles with advanced machine learning algorithms to create a revolutionary fraud detection and risk assessment platform.',
    components: [
      {
        name: 'Quantum Neural Networks',
        description: 'Advanced neural networks leveraging quantum computing principles for pattern recognition and anomaly detection.',
        impact: '40% improvement in accuracy'
      },
      {
        name: 'Real-time Risk Scoring',
        description: 'Instant risk assessment using quantum-optimized algorithms that process multiple data streams simultaneously.',
        impact: '300% faster processing'
      },
      {
        name: 'Multimodal Data Analysis',
        description: 'Analysis of transaction data, customer behavior, external market data, and social signals in real-time.',
        impact: '95% fraud detection rate'
      },
      {
        name: 'Adaptive Learning System',
        description: 'Self-improving AI that continuously learns from new fraud patterns and adapts its detection algorithms.',
        impact: '60% reduction in false positives'
      }
    ]
  };

  const results = {
    financial: {
      roi: '300%',
      costSavings: '$2.3M',
      revenueIncrease: '$5.7M',
      paybackPeriod: '4 months'
    },
    operational: {
      fraudReduction: '95%',
      processingSpeed: '300% faster',
      falsePositives: '60% reduction',
      manualReviews: '80% reduction'
    },
    customer: {
      satisfaction: '+40%',
      transactionApproval: '+25%',
      complaintReduction: '70%',
      retentionRate: '+15%'
    }
  };

  const timeline = [
    {
      phase: 'Discovery & Planning',
      duration: '4 weeks',
      description: 'Comprehensive analysis of existing systems, fraud patterns, and business requirements.',
      deliverables: [
        'Current state assessment',
        'Fraud pattern analysis',
        'Solution architecture design',
        'Implementation roadmap'
      ]
    },
    {
      phase: 'Quantum-AI Development',
      duration: '8 weeks',
      description: 'Development and training of quantum-AI models using historical transaction data.',
      deliverables: [
        'Quantum neural network models',
        'Real-time scoring algorithms',
        'Integration APIs',
        'Testing and validation'
      ]
    },
    {
      phase: 'Integration & Testing',
      duration: '6 weeks',
      description: 'Integration with existing systems and comprehensive testing in production-like environment.',
      deliverables: [
        'System integration',
        'Performance testing',
        'Security validation',
        'User training'
      ]
    },
    {
      phase: 'Deployment & Optimization',
      duration: '4 weeks',
      description: 'Production deployment and continuous optimization based on real-world performance.',
      deliverables: [
        'Production deployment',
        'Performance monitoring',
        'Model optimization',
        'Success metrics tracking'
      ]
    }
  ];

  const metrics = [
    {
      category: 'Financial Impact',
      icon: DollarSign,
      color: 'text-green-400',
      items: [
        { label: 'ROI', value: '300%', description: 'Return on investment within 6 months' },
        { label: 'Cost Savings', value: '$2.3M', description: 'Annual operational cost reduction' },
        { label: 'Revenue Increase', value: '$5.7M', description: 'Additional revenue from improved efficiency' },
        { label: 'Payback Period', value: '4 months', description: 'Time to recover initial investment' }
      ]
    },
    {
      category: 'Operational Excellence',
      icon: BarChart3,
      color: 'text-blue-400',
      items: [
        { label: 'Fraud Reduction', value: '95%', description: 'Decrease in fraudulent transactions' },
        { label: 'Processing Speed', value: '300%', description: 'Faster risk assessment' },
        { label: 'False Positives', value: '60%', description: 'Reduction in false positive rate' },
        { label: 'Manual Reviews', value: '80%', description: 'Decrease in manual review requirements' }
      ]
    },
    {
      category: 'Customer Experience',
      icon: Users,
      color: 'text-purple-400',
      items: [
        { label: 'Satisfaction', value: '+40%', description: 'Increase in customer satisfaction scores' },
        { label: 'Transaction Approval', value: '+25%', description: 'Increase in legitimate transaction approval' },
        { label: 'Complaint Reduction', value: '70%', description: 'Decrease in fraud-related complaints' },
        { label: 'Retention Rate', value: '+15%', description: 'Improvement in customer retention' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Success Story
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quantum-AI Financial Transformation
          </h1>
          
          <p className="text-2xl text-blue-300 mb-4">
            300% ROI in 6 Months
          </p>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            How TechCorp Financial revolutionized their fraud detection and risk assessment 
            using quantum-AI fusion technology, achieving unprecedented results in record time.
          </p>
        </div>

        {/* Executive Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Executive Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 mb-4">
                TechCorp Financial was facing critical challenges with their traditional fraud detection 
                systems. With 15% of fraudulent transactions going undetected and processing times of 
                3-5 minutes per transaction, they were losing millions annually and damaging customer 
                relationships.
              </p>
              <p className="text-gray-300">
                The company needed a revolutionary solution that could provide real-time, accurate 
                fraud detection while improving customer experience and reducing operational costs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
              <p className="text-gray-300 mb-4">
                We implemented a cutting-edge quantum-AI fusion system that combines quantum computing 
                principles with advanced machine learning algorithms. This revolutionary approach 
                enabled real-time fraud detection with unprecedented accuracy and speed.
              </p>
              <p className="text-gray-300">
                The system processes multiple data streams simultaneously, learning and adapting to 
                new fraud patterns in real-time, providing a level of protection never before possible.
              </p>
            </div>
          </div>
        </div>

        {/* Key Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(results).map(([category, data]) => (
              <div key={category} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="space-y-4">
                  {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-gray-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-2xl font-bold text-green-400">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Challenges Faced</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    challenge.impact === 'Critical' ? 'bg-red-500/20' :
                    challenge.impact === 'High' ? 'bg-orange-500/20' :
                    'bg-yellow-500/20'
                  }`}>
                    <challenge.icon className={`w-6 h-6 ${
                      challenge.impact === 'Critical' ? 'text-red-400' :
                      challenge.impact === 'High' ? 'text-orange-400' :
                      'text-yellow-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                    <p className="text-gray-300 text-sm">{challenge.description}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                      challenge.impact === 'Critical' ? 'bg-red-500/20 text-red-300' :
                      challenge.impact === 'High' ? 'bg-orange-500/20 text-orange-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {challenge.impact} Impact
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Quantum-AI Solution</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <p className="text-gray-300 text-lg mb-6">{solution.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.components.map((component, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{component.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{component.description}</p>
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {component.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Implementation Timeline</h2>
          <div className="space-y-6">
            {timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{phase.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Detailed Performance Metrics</h2>
          <div className="space-y-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 rounded-xl mr-4">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{metric.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metric.items.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                        {item.value}
                      </div>
                      <div className="text-white font-medium mb-1">{item.label}</div>
                      <div className="text-gray-400 text-sm">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Financial Operations?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join TechCorp Financial and hundreds of other companies who have achieved 
            remarkable results with our quantum-AI solutions. Let us help you achieve 
            similar success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg transition-all hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Your Transformation
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all hover:bg-white/20"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIFinancialCaseStudy;
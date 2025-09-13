import React from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Brain, 
  Globe, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Star,
  MessageSquare,
  Database,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'AI-Powered Business Solutions 2025 - Transform Your Enterprise',
  description: 'Revolutionary AI solutions for enterprise transformation. Autonomous operations, intelligent automation, and AI-driven business processes delivering unprecedented ROI and efficiency.',
  keywords: ['AI Business Solutions', 'Enterprise AI', 'Business Automation', 'AI ROI', 'Intelligent Operations', 'AI Transformation', 'Business Intelligence', 'AI Consulting']
};

export default function AIPoweredBusinessSolutions2025() {
  const solutions = [
    {
      title: 'Autonomous Business Operations',
      description: 'AI systems that run your business 24/7 with minimal human intervention',
      icon: Globe,
      roi: '2500%',
      features: ['24/7 Operations', 'Self-Healing Systems', 'Predictive Maintenance', 'Cost Optimization'],
      industries: ['Manufacturing', 'Retail', 'Healthcare', 'Finance']
    },
    {
      title: 'Intelligent Process Automation',
      description: 'Advanced automation that learns and adapts to your business processes',
      icon: Zap,
      roi: '1800%',
      features: ['Adaptive Workflows', 'Smart Decision Making', 'Real-time Optimization', 'Error Reduction'],
      industries: ['Insurance', 'Banking', 'Real Estate', 'Legal']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Deep insights and predictions that drive strategic business decisions',
      icon: BarChart3,
      roi: '3200%',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Anomaly Detection', 'Trend Analysis'],
      industries: ['Marketing', 'Sales', 'Supply Chain', 'Customer Service']
    },
    {
      title: 'Conversational AI Systems',
      description: 'Advanced chatbots and virtual assistants that understand context and emotion',
      icon: MessageSquare,
      roi: '1500%',
      features: ['Natural Language Processing', 'Emotional Intelligence', 'Multi-language Support', 'Context Awareness'],
      industries: ['Customer Support', 'Sales', 'Education', 'Healthcare']
    },
    {
      title: 'AI Security & Compliance',
      description: 'Intelligent security systems that protect against emerging threats',
      icon: Shield,
      roi: '2800%',
      features: ['Threat Detection', 'Compliance Monitoring', 'Risk Assessment', 'Automated Response'],
      industries: ['Financial Services', 'Healthcare', 'Government', 'Technology']
    },
    {
      title: 'Quantum-Enhanced Computing',
      description: 'Quantum computing power for solving complex business optimization problems',
      icon: Cpu,
      roi: '5000%',
      features: ['Complex Optimization', 'Cryptographic Security', 'Simulation', 'Machine Learning'],
      industries: ['Logistics', 'Finance', 'Research', 'Energy']
    }
  ];

  const businessMetrics = [
    {
      metric: 'Average ROI',
      value: '2,500%',
      description: 'Return on investment across all AI implementations',
      icon: TrendingUp
    },
    {
      metric: 'Cost Reduction',
      value: '85%',
      description: 'Average reduction in operational costs',
      icon: DollarSign
    },
    {
      metric: 'Process Speed',
      value: '1000x',
      description: 'Faster processing compared to traditional methods',
      icon: Clock
    },
    {
      metric: 'Accuracy Rate',
      value: '99.9%',
      description: 'AI system accuracy across all implementations',
      icon: Target
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your business processes and AI readiness',
      duration: '2-4 weeks',
      icon: Brain
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom AI architecture designed for your specific business needs',
      duration: '3-6 weeks',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deployment of AI systems with minimal business disruption',
      duration: '4-8 weeks',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization & Scale',
      description: 'Continuous optimization and scaling of AI capabilities',
      duration: 'Ongoing',
      icon: TrendingUp
    }
  ];

  const successStories = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient production planning and maintenance',
      solution: 'Autonomous Operations + Predictive Analytics',
      results: '300% increase in efficiency, 90% reduction in downtime',
      roi: '4,200%'
    },
    {
      company: 'FinTech Innovations',
      industry: 'Financial Services',
      challenge: 'Manual fraud detection and compliance monitoring',
      solution: 'AI Security + Conversational AI',
      results: '99.8% fraud detection accuracy, 75% faster compliance',
      roi: '2,800%'
    },
    {
      company: 'Healthcare Solutions Inc',
      industry: 'Healthcare',
      challenge: 'Patient data analysis and treatment optimization',
      solution: 'AI Analytics + Quantum Computing',
      results: '60% faster diagnosis, 40% better treatment outcomes',
      roi: '3,500%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              AI-Powered Business Solutions 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transform your enterprise with revolutionary AI solutions. Achieve unprecedented ROI, 
              efficiency, and competitive advantage with our cutting-edge business automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#implementation"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Implementation Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proven Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our AI-powered business transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mx-auto mb-6">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Revolutionary AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{solution.roi}</div>
                    <div className="text-sm text-gray-600">Average ROI</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI transformation with minimal business disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="text-sm font-semibold text-purple-600">Duration: {step.duration}</div>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our AI transformation projects
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{story.company}</h3>
                        <p className="text-gray-600">{story.industry}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{story.solution}</p>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <p className="text-gray-600">{story.results}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{story.roi}</div>
                      <div className="text-sm text-gray-600">ROI Achieved</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Star className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already achieving unprecedented results with our AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/cutting-edge-ai-technologies-2025"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
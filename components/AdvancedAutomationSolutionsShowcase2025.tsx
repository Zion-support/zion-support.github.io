import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Zap, Target, TrendingUp, Users, Shield, Database, Globe, Brain, Settings, BarChart3 } from 'lucide-react';

const AdvancedAutomationSolutionsShowcase2025: React.FC = () => {
  const solutions = [
    {
      title: 'Autonomous Business Operations',
      description: 'Complete end-to-end business process automation with self-healing capabilities',
      icon: Bot,
      category: 'Core Automation',
      features: [
        'Self-healing business processes',
        'Autonomous decision making',
        'Real-time process optimization',
        'Zero-touch operations'
      ],
      benefits: [
        '99.9% uptime guarantee',
        '90% cost reduction',
        '10x faster execution',
        'Zero human intervention'
      ],
      roi: '2,500-5,000%',
      timeline: 'Q1 2025'
    },
    {
      title: 'Intelligent Process Mining',
      description: 'AI-powered analysis and optimization of existing business processes',
      icon: BarChart3,
      category: 'Process Intelligence',
      features: [
        'Automated process discovery',
        'Bottleneck identification',
        'Optimization recommendations',
        'Performance monitoring'
      ],
      benefits: [
        '50% efficiency improvement',
        '30% cost reduction',
        'Real-time insights',
        'Predictive maintenance'
      ],
      roi: '1,000-3,000%',
      timeline: 'Q2 2025'
    },
    {
      title: 'Cognitive Automation Platform',
      description: 'Advanced AI platform that mimics human cognitive processes for complex tasks',
      icon: Brain,
      category: 'Cognitive AI',
      features: [
        'Natural language processing',
        'Computer vision capabilities',
        'Decision tree automation',
        'Learning and adaptation'
      ],
      benefits: [
        'Human-level accuracy',
        'Continuous learning',
        'Multi-language support',
        'Contextual understanding'
      ],
      roi: '3,000-7,500%',
      timeline: 'Q3 2025'
    },
    {
      title: 'Hyperautomation Ecosystem',
      description: 'Comprehensive automation platform integrating all business functions',
      icon: Settings,
      category: 'Enterprise Solution',
      features: [
        'End-to-end automation',
        'Multi-system integration',
        'Scalable architecture',
        'Cloud-native deployment'
      ],
      benefits: [
        'Complete digital transformation',
        'Unified automation platform',
        'Infinite scalability',
        'Global deployment'
      ],
      roi: '5,000-15,000%',
      timeline: 'Q4 2025'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Cpu,
      automation: '85%',
      savings: '$2.5M annually',
      processes: ['Production planning', 'Quality control', 'Supply chain', 'Maintenance']
    },
    {
      name: 'Healthcare',
      icon: Shield,
      automation: '75%',
      savings: '$1.8M annually',
      processes: ['Patient scheduling', 'Medical records', 'Billing', 'Diagnostics']
    },
    {
      name: 'Finance',
      icon: TrendingUp,
      automation: '90%',
      savings: '$3.2M annually',
      processes: ['Risk assessment', 'Fraud detection', 'Compliance', 'Trading']
    },
    {
      name: 'Retail',
      icon: Users,
      automation: '80%',
      savings: '$1.5M annually',
      processes: ['Inventory management', 'Customer service', 'Order processing', 'Analytics']
    },
    {
      name: 'Logistics',
      icon: Globe,
      automation: '88%',
      savings: '$2.1M annually',
      processes: ['Route optimization', 'Warehouse management', 'Delivery tracking', 'Fleet management']
    },
    {
      name: 'Energy',
      icon: Zap,
      automation: '82%',
      savings: '$2.8M annually',
      processes: ['Grid management', 'Predictive maintenance', 'Energy trading', 'Monitoring']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Precision Automation',
      description: '99.9% accuracy in all automated processes',
      stat: '99.9%'
    },
    {
      icon: TrendingUp,
      title: 'Massive ROI',
      description: 'Average ROI of 2,500-15,000%',
      stat: '2,500%+'
    },
    {
      icon: Users,
      title: 'Global Impact',
      description: 'Transform operations for millions of users',
      stat: '10M+ Users'
    },
    {
      icon: Database,
      title: 'Infinite Scale',
      description: 'Process unlimited data and transactions',
      stat: '∞ Scale'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Automation Solutions 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary automation technologies that transform every aspect of business operations with unprecedented efficiency and ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/automation-solutions-2025" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Automation Solutions
            </Link>
            <Link 
              to="/automation-roi-calculator" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Calculate Automation ROI
            </Link>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-xl mr-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {solution.category}
                      </span>
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {solution.timeline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg text-center font-bold">
                  Expected ROI: {solution.roi}
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Impact */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{industry.name}</h4>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Automation Level:</span>
                      <span className="text-blue-400 font-bold">{industry.automation}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Annual Savings:</span>
                      <span className="text-green-400 font-bold">{industry.savings}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Automated Processes:</h5>
                    <div className="flex flex-wrap gap-1">
                      {industry.processes.map((process, processIndex) => (
                        <span key={processIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Revolutionary Automation Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-2xl font-bold text-blue-400">{benefit.stat}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already transforming their operations with our revolutionary automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/automation-solutions-2025" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Automation Solutions
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30"
            >
              Get Automation Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsShowcase2025;
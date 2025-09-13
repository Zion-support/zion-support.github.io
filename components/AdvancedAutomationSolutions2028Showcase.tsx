import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Bot, Zap, Settings, Brain, Shield, Globe, Database, Network, Cpu, Target, Users } from 'lucide-react';

const AdvancedAutomationSolutions2028Showcase: React.FC = () => {
  const solutions = [
    {
      title: 'Autonomous Business Process Orchestration',
      description: 'Self-managing business processes that adapt and optimize in real-time without human intervention.',
      icon: Bot,
      metrics: {
        efficiency: '95% process automation',
        accuracy: '99.8% error reduction',
        cost: '70% operational savings',
        speed: '10x faster execution'
      },
      features: ['Self-healing workflows', 'Dynamic resource allocation', 'Predictive optimization', 'Cross-system integration'],
      status: 'Production Ready',
      category: 'Business Process'
    },
    {
      title: 'Intelligent Infrastructure Management',
      description: 'AI-powered infrastructure that self-monitors, self-repairs, and self-optimizes across all environments.',
      icon: Settings,
      metrics: {
        uptime: '99.99% availability',
        maintenance: '90% reduction in manual tasks',
        performance: '3x faster response times',
        security: 'Zero-trust automation'
      },
      features: ['Predictive maintenance', 'Auto-scaling', 'Security automation', 'Performance optimization'],
      status: 'Beta Testing',
      category: 'Infrastructure'
    },
    {
      title: 'Cognitive Decision Engine',
      description: 'Advanced AI system that makes complex business decisions autonomously using multi-dimensional analysis.',
      icon: Brain,
      metrics: {
        decisions: '10,000+ decisions/hour',
        accuracy: '98.5% correct outcomes',
        speed: 'Real-time processing',
        learning: 'Continuous improvement'
      },
      features: ['Multi-criteria analysis', 'Risk assessment', 'Scenario modeling', 'Learning adaptation'],
      status: 'In Development',
      category: 'Decision Making'
    },
    {
      title: 'Autonomous Customer Experience',
      description: 'End-to-end customer journey automation with personalized interactions and proactive problem resolution.',
      icon: Users,
      metrics: {
        satisfaction: '95% customer satisfaction',
        resolution: '80% self-service resolution',
        personalization: '100% personalized experiences',
        response: 'Instant response times'
      },
      features: ['Predictive support', 'Personalized recommendations', 'Proactive issue resolution', 'Omnichannel automation'],
      status: 'Pilot Phase',
      category: 'Customer Experience'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Settings,
      automations: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Production scheduling'
      ],
      impact: '40% cost reduction, 60% efficiency gain'
    },
    {
      name: 'Healthcare',
      icon: Shield,
      automations: [
        'Patient care automation',
        'Diagnostic assistance',
        'Treatment optimization',
        'Administrative workflows'
      ],
      impact: '50% faster diagnosis, 30% better outcomes'
    },
    {
      name: 'Finance',
      icon: Database,
      automations: [
        'Risk assessment automation',
        'Fraud detection systems',
        'Compliance monitoring',
        'Investment optimization'
      ],
      impact: '99.9% fraud detection, 25% risk reduction'
    },
    {
      name: 'Retail',
      icon: Globe,
      automations: [
        'Inventory management',
        'Customer service automation',
        'Pricing optimization',
        'Supply chain coordination'
      ],
      impact: '35% inventory reduction, 45% sales increase'
    }
  ];

  const capabilities = [
    {
      title: 'Self-Learning Systems',
      description: 'AI that continuously learns and improves from every interaction',
      icon: Brain,
      benefits: ['Adaptive behavior', 'Continuous optimization', 'Pattern recognition', 'Predictive insights']
    },
    {
      title: 'Cross-Platform Integration',
      description: 'Seamless automation across all business systems and platforms',
      icon: Network,
      benefits: ['Unified workflows', 'Data synchronization', 'System orchestration', 'API automation']
    },
    {
      title: 'Intelligent Monitoring',
      description: 'Advanced monitoring with predictive analytics and automated responses',
      icon: Target,
      benefits: ['Real-time insights', 'Predictive alerts', 'Automated remediation', 'Performance optimization']
    },
    {
      title: 'Security Automation',
      description: 'Comprehensive security automation with threat detection and response',
      icon: Shield,
      benefits: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Risk mitigation']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Automation Solutions 2028
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary automation technologies that transform businesses through intelligent, self-managing systems and processes
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="bg-gradient-to-br from-blue-800/20 to-indigo-800/20 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {solution.title}
                        </h3>
                        <span className="text-blue-300 text-sm font-medium">{solution.category}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      solution.status === 'Production Ready' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : solution.status === 'Beta Testing'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {solution.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(solution.metrics).map(([key, value]) => (
                      <div key={key} className="bg-slate-700/30 rounded-lg p-3">
                        <div className="text-gray-400 text-sm capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-white font-semibold">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-600/20 text-blue-200 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/automation-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-300 hover:text-white transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Industry Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group">
                  <IconComponent className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold text-white mb-3">{industry.name}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {industry.automations.map((automation, autoIndex) => (
                      <li key={autoIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {automation}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                    <p className="text-blue-200 text-sm font-medium">{industry.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 rounded-2xl p-8 border border-blue-500/30 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Core Capabilities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                    <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold text-white mb-3">{capability.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{capability.description}</p>
                    
                    <ul className="space-y-1">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-blue-200 text-xs flex items-center justify-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/advanced-automation-solutions-2028"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Explore Automation Solutions
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2028Showcase;
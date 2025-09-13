import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { ArrowRight, Bot, Zap, Target, TrendingUp, Shield, Cpu, Globe, Brain } from 'lucide-react';

const AdvancedAutomationSolutionsShowcase2025: React.FC = () => {
  const solutions = [
    {
      title: 'Autonomous Business Operations',
      description: 'Complete end-to-end business process automation with 99.9% accuracy and 10,000x efficiency gains',
      features: [
        'End-to-End Process Automation',
        'Intelligent Decision Making',
        'Real-time Process Optimization',
        'Autonomous Error Correction'
      ],
      metrics: {
        efficiency: '10,000x',
        accuracy: '99.9%',
        cost: '90%',
        time: '95%'
      },
      icon: Bot,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI-Powered Workflow Automation',
      description: 'Intelligent workflow management with predictive analytics and autonomous optimization',
      features: [
        'Predictive Workflow Analytics',
        'Autonomous Task Assignment',
        'Dynamic Process Optimization',
        'Intelligent Resource Allocation'
      ],
      metrics: {
        productivity: '500%',
        accuracy: '99.7%',
        speed: '1,000x',
        quality: '98%'
      },
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Integration Platform',
      description: 'Seamless integration of all enterprise systems with autonomous data synchronization',
      features: [
        'Universal System Integration',
        'Autonomous Data Synchronization',
        'Real-time API Management',
        'Intelligent Error Handling'
      ],
      metrics: {
        integration: '100%',
        sync: 'Real-time',
        errors: '0.01%',
        uptime: '99.99%'
      },
      icon: Globe,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Advanced predictive analytics with machine learning for business intelligence and forecasting',
      features: [
        'Advanced Machine Learning',
        'Predictive Business Intelligence',
        'Real-time Forecasting',
        'Autonomous Insights Generation'
      ],
      metrics: {
        predictions: '95%',
        insights: 'Real-time',
        accuracy: '99.5%',
        roi: '2,500%'
      },
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Complete production line automation and quality control',
      benefits: ['Production Optimization', 'Quality Control', 'Predictive Maintenance', 'Supply Chain Management'],
      roi: '3,000%',
      icon: Cpu
    },
    {
      name: 'Financial Services',
      description: 'Automated trading, risk management, and compliance monitoring',
      benefits: ['Algorithmic Trading', 'Risk Assessment', 'Compliance Monitoring', 'Fraud Detection'],
      roi: '5,000%',
      icon: Shield
    },
    {
      name: 'Healthcare',
      description: 'Patient care automation and medical process optimization',
      benefits: ['Patient Management', 'Medical Records', 'Treatment Planning', 'Resource Optimization'],
      roi: '4,000%',
      icon: Target
    },
    {
      name: 'Retail',
      description: 'Inventory management and customer experience automation',
      benefits: ['Inventory Optimization', 'Customer Service', 'Demand Forecasting', 'Personalization'],
      roi: '2,500%',
      icon: TrendingUp
    }
  ];

  const capabilities = [
    {
      title: 'Autonomous Decision Making',
      description: 'AI systems that make complex business decisions without human intervention',
      features: ['Real-time Analysis', 'Risk Assessment', 'Strategic Planning', 'Resource Allocation']
    },
    {
      title: 'Intelligent Process Optimization',
      description: 'Continuous optimization of business processes using machine learning',
      features: ['Process Analysis', 'Efficiency Optimization', 'Cost Reduction', 'Quality Improvement']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Proactive maintenance scheduling to prevent equipment failures',
      features: ['Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Uptime Maximization']
    },
    {
      title: 'Dynamic Resource Allocation',
      description: 'Intelligent allocation of resources based on real-time demand and capacity',
      features: ['Demand Analysis', 'Capacity Planning', 'Resource Optimization', 'Cost Management']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Automation Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with revolutionary automation solutions that deliver 
            unprecedented efficiency, accuracy, and ROI through intelligent process automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-2 rounded-full font-semibold">
              🤖 10,000x Efficiency
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold">
              🎯 99.9% Accuracy
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-2 rounded-full font-semibold">
              💰 5,000% ROI
            </span>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mr-4`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(solution.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <industry.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h4 className="text-xl font-bold text-white">{industry.name}</h4>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-blue-300 mb-2">Key Benefits:</h5>
                    <ul className="space-y-1">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <Target className="w-3 h-3 text-blue-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{industry.roi}</div>
                    <div className="text-xs text-gray-400">Average ROI</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Capabilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{capability.title}</h4>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-purple-300 mb-2">Features:</h5>
                    <ul className="space-y-1">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <ArrowRight className="w-3 h-3 text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Automation Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">AI Automation</h4>
              <p className="text-xs text-gray-400">Intelligent process automation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Workflow Engine</h4>
              <p className="text-xs text-gray-400">Advanced workflow management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Machine Learning</h4>
              <p className="text-xs text-gray-400">Predictive analytics engine</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Integration Hub</h4>
              <p className="text-xs text-gray-400">Universal system integration</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with advanced automation solutions that deliver 
            unprecedented efficiency, accuracy, and ROI through intelligent process automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/automation-solutions-2025"
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-green-600 hover:to-teal-600 flex items-center justify-center group"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center group"
            >
              View Success Stories
              <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsShowcase2025;
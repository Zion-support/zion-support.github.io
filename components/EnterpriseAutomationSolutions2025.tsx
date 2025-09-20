"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2
  Zap
  BarChart3
  Users
  Clock
  Shield
  TrendingUp
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Target,
  DollarSign,
  Globe,
  Settings,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Workflow,
  Brain,
  Bot,
  FileText,
  MessageSquare,
  Calendar,
  Mail,
  CreditCard,
  PieChart,
  Activity,
  AlertTriangle,
  RefreshCw,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  Maximize,
  Minimize
} from 'lucide-react';

interface AutomationSolution {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  roi: string;
  implementation: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const EnterpriseAutomationSolutions2025: React.FC = () => {
  const [selectedSolutionsetSelectedSolution] = useState<string | null>(null);
  const [activeCategorysetActiveCategory] = useState<string>('all');
  const [isDemoRunningsetIsDemoRunning] = useState(false);
  const [demoStepsetDemoStep] = useState(0);

  const categories = [
    { id: ''all', 'name: 'All 'Solutions', 'count: 12 },
    { id: ''workflow', 'name: 'Workflow 'Automation', 'count: 4 },
    { id: ''data', 'name: 'Data 'Processing', 'count: 3 },
    { id: ''communication', 'name: ''Communication', 'count: 2 },
    { id: ''analytics', 'name: 'Analytics & 'Reporting', 'count: 3 }
  ];

  const solutions: AutomationSolution[] = [
    {
      id: 'workflow-orchestrator',
      name: 'Workflow Orchestrator Pro',
      description: 'End-to-end business process automation with AI-powered decision making',
      category: 'workflow',
      icon: <Workflow className="w-8 h-8" />,
      features: [
        'Visual workflow designer',
        'AI-powered decision trees',
        'Multi-system integration',
        'Real-time monitoring',
        'Exception handling',
        'Scalable architecture'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve process accuracy by 95%',
        'Cut operational costs by 60%',
        'Accelerate time-to-market by 70%'
      ],
      pricing: {
        starter: '$500/month',
        professional: '$1,500/month',
        enterprise: 'Custom'
      },
      roi: '300% ROI in 6 months',
      implementation: '4-6 weeks',
      isPopular: true
    },
    {
      id: 'data-pipeline',
      name: 'Data Pipeline Automation',
      description: 'Automated data collectionprocessingand analysis across all systems',
      category: 'data',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Real-time data ingestion',
        'Automated data cleaning',
        'Machine learning integration',
        'Data quality monitoring',
        'Compliance reporting',
        'Cloud-native architecture'
      ],
      benefits: [
        'Process 10x more data',
        'Reduce data errors by 90%',
        'Enable real-time insights',
        'Ensure compliance automatically'
      ],
      pricing: {
        starter: '$800/month',
        professional: '$2,000/month',
        enterprise: 'Custom'
      },
      roi: '250% ROI in 4 months',
      implementation: '6-8 weeks'
    },
    {
      id: 'customer-service',
      name: 'Customer Service Automation',
      description: 'AI-powered customer support with intelligent routing and response',
      category: 'communication',
      icon: <MessageSquare className="w-8 h-8" />,
      features: [
        'Intelligent ticket routing',
        'AI-powered responses',
        'Multi-channel support',
        'Sentiment analysis',
        'Escalation management',
        'Performance analytics'
      ],
      benefits: [
        'Resolve 70% of tickets automatically',
        'Improve response time by 85%',
        'Increase customer satisfaction by 40%',
        'Reduce support costs by 50%'
      ],
      pricing: {
        starter: '$300/month',
        professional: '$800/month',
        enterprise: 'Custom'
      },
      roi: '400% ROI in 3 months',
      implementation: '2-4 weeks',
      isNew: true
    },
    {
      id: 'financial-automation',
      name: 'Financial Process Automation',
      description: 'Automated accountinginvoicingand financial reporting',
      category: 'workflow',
      icon: <CreditCard className="w-8 h-8" />,
      features: [
        'Automated invoicing',
        'Expense management',
        'Financial reporting',
        'Compliance tracking',
        'Audit trails',
        'Integration with ERP'
      ],
      benefits: [
        'Reduce accounting errors by 95%',
        'Speed up month-end close by 80%',
        'Improve cash flow visibility',
        'Ensure regulatory compliance'
      ],
      pricing: {
        starter: '$400/month',
        professional: '$1,200/month',
        enterprise: 'Custom'
      },
      roi: '350% ROI in 5 months',
      implementation: '4-6 weeks'
    },
    {
      id: 'hr-automation',
      name: 'HR Process Automation',
      description: 'Streamlined human resources with automated workflows and AI insights',
      category: 'workflow',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Automated recruitment',
        'Employee onboarding',
        'Performance tracking',
        'Leave management',
        'Payroll integration',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve employee experience',
        'Ensure policy compliance',
        'Reduce HR administrative costs'
      ],
      pricing: {
        starter: '$600/month',
        professional: '$1,800/month',
        enterprise: 'Custom'
      },
      roi: '280% ROI in 6 months',
      implementation: '6-8 weeks'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Intelligence Automation',
      description: 'Automated reporting and analytics with real-time insights',
      category: 'analytics',
      icon: <PieChart className="w-8 h-8" />,
      features: [
        'Automated report generation',
        'Real-time dashboards',
        'Predictive analytics',
        'Custom KPI tracking',
        'Alert systems',
        'Data visualization'
      ],
      benefits: [
        'Generate reports 10x faster',
        'Enable data-driven decisions',
        'Identify trends automatically',
        'Reduce reporting errors by 90%'
      ],
      pricing: {
        starter: '$500/month',
        professional: '$1,500/month',
        enterprise: 'Custom'
      },
      roi: '320% ROI in 4 months',
      implementation: '3-5 weeks'
    }
  ];

  const filteredSolutions = solutions.filter(solution => 
    activeCategory === 'all' || solution.category === activeCategory
  );

  const selectedSolutionData = solutions.find(s => s.id === selectedSolution);

  const runDemo = () => {
    setIsDemoRunning(true);
    setDemoStep(0);
    
    const steps = [
      'Initializing automation engine...',
      'Connecting to enterprise systems...',
      'Configuring workflow rules...',
      'Deploying AI models...',
      'Testing automation processes...',
      'Monitoring performance metrics...',
      'Demo completed successfully!'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setDemoStep(currentStep);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDemoRunning(false);
          setDemoStep(0);
        }2000);
      }
    }1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise Automation
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with AI-powered automation solutions. 
            Streamline processesreduce costsand accelerate growth.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Solutions Grid */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6delay: 0.4 }}
              className="grid gap-6"
            >
              {filteredSolutions.map((solutionindex) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6delay: index * 0.1 }}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group ${
                    selectedSolution === solution.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedSolution(solution.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                        {solution.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {solution.name}
                          </h3>
                          {solution.isNew && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              New
                            </span>
                          )}
                          {solution.isPopular && (
                            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">{solution.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{solution.roi}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{solution.implementation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {solution.features.slice(03).map((featureidx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {solution.features.length > 3 && (
                          <div className="text-gray-400 text-sm">
                            +{solution.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Benefits</h4>
                      <div className="space-y-2">
                        {solution.benefits.slice(02).map((benefitidx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        {Object.entries(solution.pricing).map(([tierprice]) => (
                          <div key={tier} className="text-center">
                            <div className="text-xs text-gray-400 capitalize">{tier}</div>
                            <div className="text-white font-medium">{price}</div>
                          </div>
                        ))}
                      </div>
                      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span>Demo</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Demo Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0x: 20 }}
              animate={{ opacity: 1x: 0 }}
              transition={{ duration: 0.6delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Live Demo</h3>
              
              <AnimatePresence mode="wait">
                {selectedSolutionData ? (
                  <motion.div
                    key={selectedSolutionData.id}
                    initial={{ opacity: 0scale: 0.95 }}
                    animate={{ opacity: 1scale: 1 }}
                    exit={{ opacity: 0scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center mb-6">
                      <div className="p-4 bg-blue-500/20 rounded-lg text-blue-400 mb-4 inline-block">
                        {selectedSolutionData.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {selectedSolutionData.name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {selectedSolutionData.description}
                      </p>
                    </div>

                    {isDemoRunning ? (
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 relative">
                            <div className="w-full h-full border-4 border-blue-500/20 rounded-full"></div>
                            <div 
                              className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
                              style={{ animationDuration: '1s' }}
                            ></div>
                          </div>
                          <p className="text-white font-medium">Running Demo...</p>
                          <p className="text-gray-400 text-sm">
                            {demoStep < 7 ? `Step ${demoStep + 1} of 7` : 'Complete'}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {[
                            'Initializing automation engine...',
                            'Connecting to enterprise systems...',
                            'Configuring workflow rules...',
                            'Deploying AI models...',
                            'Testing automation processes...',
                            'Monitoring performance metrics...',
                            'Demo completed successfully!'
                          ].map((stepindex) => (
                            <div key={index} className={`flex items-center space-x-2 text-sm ${
                              index <= demoStep ? 'text-green-400' : 'text-gray-500'
                            }`}>
                              <CheckCircle className={`w-4 h-4 ${
                                index <= demoStep ? 'text-green-400' : 'text-gray-500'
                              }`} />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="text-center">
                          <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                          <p className="text-white font-medium">Ready to Demo</p>
                          <p className="text-gray-400 text-sm">
                            Experience {selectedSolutionData.name} in action
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="text-white font-medium">Key Benefits:</h5>
                          {selectedSolutionData.benefits.map((benefitindex) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-white/10">
                          <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                            <span>ROI</span>
                            <span className="text-green-400 font-medium">{selectedSolutionData.roi}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span>Implementation</span>
                            <span>{selectedSolutionData.implementation}</span>
                          </div>
                        </div>

                        <button 
                          onClick={runDemo}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Play className="w-4 h-4" />
                          <span>Start Demo</span>
                        </button>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white mb-2">
                      Select a Solution
                    </h4>
                    <p className="text-gray-400">
                      Choose an automation solution to see it in action
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Enterprise Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: <Building2 className="w-8 h-8" />label: 'Enterprise 'Clients', 'value: '500+' },
            { icon: <TrendingUp className="w-8 h-8" />label: 'Average 'ROI', 'value: '300%' },
            { icon: <Clock className="w-8 h-8" />label: 'Time 'Saved', 'value: '80%' },
            { icon: <Shield className="w-8 h-8" />label: ''Uptime', 'value: '99.9%' }
          ].map((statindex) => (
            <div key={index} className="text-center">
              <div className="p-4 bg-blue-500/20 rounded-lg text-blue-400 mb-4 inline-block">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseAutomationSolutions2025;

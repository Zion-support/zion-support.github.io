import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Play,
  Download,
  Share2,
  Star,
  CheckCircle,
  ArrowRight,
  Calculator,
  DollarSign,
  Clock,
  BarChart3
} from 'lucide-react';

interface AutomationSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  complexity: 'Basic' | 'Advanced' | 'Enterprise';
  implementation: string;
  applications: string[];
  benefits: string[];
  metrics: {
    efficiency: string;
    costReduction: string;
    timeSaved: string;
  };
  roi: {
    investment: string;
    savings: string;
    paybackPeriod: string;
    totalROI: string;
  };
  image: string;
  videoUrl?: string;
  caseStudyUrl?: string;
  status: 'available' | 'beta' | 'custom';
}

const automationSolutions: AutomationSolution[] = [
  {
    id: 'intelligent-process-automation',
    title: 'Intelligent Process Automation Suite',
    description: 'Comprehensive automation platform that combines RPA, AI, and machine learning to automate complex business processes end-to-end, delivering unprecedented efficiency and accuracy.',
    category: 'Process Automation',
    complexity: 'Enterprise',
    implementation: '6-12 weeks',
    applications: [
      'Document processing',
      'Customer service automation',
      'Financial reporting',
      'HR operations',
      'Supply chain management'
    ],
    benefits: [
      '90% reduction in manual work',
      '99.5% accuracy rate',
      '24/7 operation capability',
      'Scalable across departments',
      'Real-time monitoring and analytics'
    ],
    metrics: {
      efficiency: '90% improvement',
      costReduction: '75% reduction',
      timeSaved: '40 hours/week'
    },
    roi: {
      investment: '$50,000 - $200,000',
      savings: '$500,000 - $2M annually',
      paybackPeriod: '3-6 months',
      totalROI: '2,500% - 4,000%'
    },
    image: '/images/intelligent-process-automation.jpg',
    videoUrl: '/videos/process-automation-demo.mp4',
    caseStudyUrl: '/case-studies/process-automation-success.pdf',
    status: 'available'
  },
  {
    id: 'ai-powered-customer-service',
    title: 'AI-Powered Customer Service Platform',
    description: 'Advanced customer service automation using natural language processing and machine learning to provide instant, accurate responses and seamless human handoff when needed.',
    category: 'Customer Service',
    complexity: 'Advanced',
    implementation: '4-8 weeks',
    applications: [
      'Chatbot automation',
      'Email response automation',
      'Ticket routing and prioritization',
      'Sentiment analysis',
      'Knowledge base management'
    ],
    benefits: [
      '80% reduction in response time',
      '95% customer satisfaction rate',
      '24/7 availability',
      'Multilingual support',
      'Continuous learning and improvement'
    ],
    metrics: {
      efficiency: '80% faster responses',
      costReduction: '60% cost savings',
      timeSaved: '30 hours/week'
    },
    roi: {
      investment: '$25,000 - $100,000',
      savings: '$200,000 - $800,000 annually',
      paybackPeriod: '2-4 months',
      totalROI: '1,800% - 3,200%'
    },
    image: '/images/ai-customer-service.jpg',
    videoUrl: '/videos/customer-service-demo.mp4',
    caseStudyUrl: '/case-studies/customer-service-success.pdf',
    status: 'available'
  },
  {
    id: 'autonomous-data-analytics',
    title: 'Autonomous Data Analytics Engine',
    description: 'Self-managing data analytics platform that automatically collects, processes, and analyzes data to generate actionable insights and reports without human intervention.',
    category: 'Data Analytics',
    complexity: 'Enterprise',
    implementation: '8-16 weeks',
    applications: [
      'Real-time data processing',
      'Predictive analytics',
      'Automated reporting',
      'Anomaly detection',
      'Business intelligence'
    ],
    benefits: [
      'Real-time insights generation',
      '95% reduction in manual analysis',
      'Predictive capabilities',
      'Automated report generation',
      'Self-healing data pipelines'
    ],
    metrics: {
      efficiency: '95% automation',
      costReduction: '70% reduction',
      timeSaved: '50 hours/week'
    },
    roi: {
      investment: '$75,000 - $300,000',
      savings: '$600,000 - $2.4M annually',
      paybackPeriod: '4-8 months',
      totalROI: '2,200% - 3,800%'
    },
    image: '/images/autonomous-analytics.jpg',
    videoUrl: '/videos/analytics-demo.mp4',
    status: 'beta'
  },
  {
    id: 'smart-workflow-orchestration',
    title: 'Smart Workflow Orchestration Platform',
    description: 'Intelligent workflow management system that automatically designs, optimizes, and executes complex business workflows across multiple systems and departments.',
    category: 'Workflow Management',
    complexity: 'Advanced',
    implementation: '6-10 weeks',
    applications: [
      'Cross-departmental workflows',
      'Approval process automation',
      'Task assignment and tracking',
      'Resource optimization',
      'Compliance monitoring'
    ],
    benefits: [
      '85% workflow efficiency improvement',
      'Zero manual intervention required',
      'Dynamic optimization',
      'Compliance automation',
      'Real-time visibility'
    ],
    metrics: {
      efficiency: '85% improvement',
      costReduction: '65% reduction',
      timeSaved: '35 hours/week'
    },
    roi: {
      investment: '$40,000 - $150,000',
      savings: '$350,000 - $1.2M annually',
      paybackPeriod: '3-5 months',
      totalROI: '2,000% - 3,500%'
    },
    image: '/images/workflow-orchestration.jpg',
    videoUrl: '/videos/workflow-demo.mp4',
    caseStudyUrl: '/case-studies/workflow-success.pdf',
    status: 'available'
  }
];

const ROICalculator: React.FC<{ solution: AutomationSolution }> = ({ solution }) => {
  const [inputs, setInputs] = useState({
    currentCosts: 100000,
    currentTime: 40,
    employees: 5,
    errorRate: 10
  });

  const calculateROI = () => {
    const monthlySavings = inputs.currentCosts * 0.75; // 75% cost reduction
    const timeSavings = inputs.currentTime * 0.9; // 90% time savings
    const errorReduction = inputs.errorRate * 0.95; // 95% error reduction
    
    const annualSavings = monthlySavings * 12;
    const investment = solution.complexity === 'Enterprise' ? 200000 : 
                     solution.complexity === 'Advanced' ? 100000 : 50000;
    
    const roi = ((annualSavings - investment) / investment) * 100;
    const paybackMonths = (investment / monthlySavings) * 12;
    
    return {
      annualSavings,
      investment,
      roi,
      paybackMonths,
      timeSavings,
      errorReduction
    };
  };

  const results = calculateROI();

  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
        <Calculator className="w-5 h-5 mr-2" />
        ROI Calculator
      </h4>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-300 mb-2">Current Monthly Costs ($)</label>
          <input
            type="number"
            value={inputs.currentCosts}
            onChange={(e) => setInputs({...inputs, currentCosts: Number(e.target.value)})}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Current Time (hours/week)</label>
          <input
            type="number"
            value={inputs.currentTime}
            onChange={(e) => setInputs({...inputs, currentTime: Number(e.target.value)})}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Number of Employees</label>
          <input
            type="number"
            value={inputs.employees}
            onChange={(e) => setInputs({...inputs, employees: Number(e.target.value)})}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-2">Current Error Rate (%)</label>
          <input
            type="number"
            value={inputs.errorRate}
            onChange={(e) => setInputs({...inputs, errorRate: Number(e.target.value)})}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-green-500/20 rounded-lg">
          <div className="text-2xl font-bold text-green-400">${results.annualSavings.toLocaleString()}</div>
          <div className="text-sm text-gray-300">Annual Savings</div>
        </div>
        <div className="text-center p-4 bg-blue-500/20 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{results.roi.toFixed(0)}%</div>
          <div className="text-sm text-gray-300">ROI</div>
        </div>
        <div className="text-center p-4 bg-purple-500/20 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">{results.paybackMonths.toFixed(1)}</div>
          <div className="text-sm text-gray-300">Payback (months)</div>
        </div>
        <div className="text-center p-4 bg-yellow-500/20 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">{results.timeSavings.toFixed(0)}h</div>
          <div className="text-sm text-gray-300">Time Saved/week</div>
        </div>
      </div>
    </div>
  );
};

const AdvancedAutomationSolutions2025Showcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<AutomationSolution | null>(null);
  const [showCalculator, setShowCalculator] = useState(false);

  const categories = ['all', ...Array.from(new Set(automationSolutions.map(solution => solution.category)))];

  const filteredSolutions = selectedCategory === 'all' 
    ? automationSolutions 
    : automationSolutions.filter(solution => solution.category === selectedCategory);

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handleShare = (solution: AutomationSolution) => {
    if (navigator.share) {
      navigator.share({
        title: solution.title,
        text: solution.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-semibold mb-4">
            <Bot className="w-4 h-4 mr-2" />
            Advanced Automation Solutions 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Intelligent Automation Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge automation solutions that deliver unprecedented efficiency, accuracy, and ROI across all operations.
          </p>
        </motion.div>

        {/* ROI Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-2">2,500%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
            <div className="text-gray-300">Efficiency Gain</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">75%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
            <div className="text-gray-300">Months Payback</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Solutions' : category}
            </button>
          ))}
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onClick={() => setSelectedSolution(solution)}
              >
                {/* Automation Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      solution.status === 'available' ? 'bg-green-500/20 text-green-400' :
                      solution.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {solution.status === 'available' ? 'Available' : solution.status === 'beta' ? 'Beta' : 'Custom'}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      solution.complexity === 'Enterprise' ? 'bg-purple-500/20 text-purple-400' :
                      solution.complexity === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {solution.complexity}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {solution.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSolution(solution);
                        }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(solution);
                      }}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-lg">{solution.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 relative z-10">
                  {solution.description}
                </p>

                {/* Implementation Info */}
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className="text-sm text-gray-400">
                    Implementation: <span className="text-white font-semibold">{solution.implementation}</span>
                  </div>
                  <div className="text-sm text-emerald-400 font-semibold">
                    {solution.roi.totalROI} ROI
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
                  <div className="text-center">
                    <div className="text-sm font-bold text-emerald-400">{solution.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-400">{solution.metrics.costReduction}</div>
                    <div className="text-xs text-gray-400">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-400">{solution.metrics.timeSaved}</div>
                    <div className="text-xs text-gray-400">Time Saved</div>
                  </div>
                </div>

                {/* Applications Preview */}
                <div className="space-y-2 mb-4 relative z-10">
                  <div className="text-sm font-semibold text-white">Applications:</div>
                  <div className="flex flex-wrap gap-1">
                    {solution.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded">
                        {app}
                      </span>
                    ))}
                    {solution.applications.length > 3 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded">
                        +{solution.applications.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group relative z-10">
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies achieving 2,500% ROI with our advanced automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowCalculator(true)}
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300"
            >
              Calculate Your ROI
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* ROI Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">ROI Calculator</h2>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              <ROICalculator solution={automationSolutions[0]} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Detailed View */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedSolution.title}</h2>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedSolution.image}
                    alt={selectedSolution.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  {selectedSolution.videoUrl && (
                    <div className="mb-6">
                      <video
                        controls
                        className="w-full rounded-xl"
                        poster={selectedSolution.image}
                      >
                        <source src={selectedSolution.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-gray-300 mb-6">{selectedSolution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-emerald-400">{selectedSolution.complexity}</div>
                      <div className="text-sm text-gray-400">Complexity</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{selectedSolution.implementation}</div>
                      <div className="text-sm text-gray-400">Implementation</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                    <div className="space-y-2">
                      {selectedSolution.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <div className="space-y-2">
                      {selectedSolution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedSolution.caseStudyUrl && (
                      <button
                        onClick={() => handleDownload(selectedSolution.caseStudyUrl!)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Case Study
                      </button>
                    )}
                    <button className="flex items-center px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedAutomationSolutions2025Showcase;
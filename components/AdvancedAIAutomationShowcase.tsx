import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Brain,
  Settings,
  Workflow,
  Target,
  BarChart3,
  Clock,
  DollarSign
} from 'lucide-react';

interface AutomationSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  efficiency: number;
  costSavings: number;
  features: string[];
  benefits: string[];
  image: string;
  link: string;
  isNew: boolean;
  isFeatured: boolean;
  implementationTime: string;
  roi: number;
  publishedDate: string;
}

const automationSolutions: AutomationSolution[] = [
  {
    id: 'intelligent-process-automation',
    title: 'Intelligent Process Automation Platform',
    description: 'AI-powered automation that learns and adapts to optimize business processes with 95% efficiency improvement.',
    category: 'Process Automation',
    efficiency: 95,
    costSavings: 60,
    features: [
      'Self-learning algorithms',
      'Process optimization',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    benefits: [
      '95% efficiency increase',
      '60% cost reduction',
      'Zero human error',
      '24/7 operation'
    ],
    image: '/images/intelligent-automation.jpg',
    link: '/intelligent-process-automation',
    isNew: true,
    isFeatured: true,
    implementationTime: '2-4 weeks',
    roi: 300,
    publishedDate: '2026-01-22'
  },
  {
    id: 'autonomous-customer-service',
    title: 'Autonomous Customer Service AI',
    description: 'Revolutionary AI that handles customer inquiries with human-like understanding and 99% satisfaction rate.',
    category: 'Customer Service',
    efficiency: 99,
    costSavings: 80,
    features: [
      'Natural language processing',
      'Emotion recognition',
      'Multi-language support',
      'Seamless handoff to humans'
    ],
    benefits: [
      '99% customer satisfaction',
      '80% cost reduction',
      'Instant response time',
      '24/7 availability'
    ],
    image: '/images/autonomous-customer-service.jpg',
    link: '/autonomous-customer-service',
    isNew: true,
    isFeatured: true,
    implementationTime: '1-2 weeks',
    roi: 400,
    publishedDate: '2026-01-20'
  },
  {
    id: 'predictive-maintenance-ai',
    title: 'Predictive Maintenance AI System',
    description: 'Advanced AI that predicts equipment failures before they happen, reducing downtime by 90%.',
    category: 'Maintenance',
    efficiency: 90,
    costSavings: 70,
    features: [
      'IoT sensor integration',
      'Machine learning models',
      'Failure prediction',
      'Automated scheduling'
    ],
    benefits: [
      '90% downtime reduction',
      '70% maintenance cost savings',
      'Proactive maintenance',
      'Extended equipment life'
    ],
    image: '/images/predictive-maintenance.jpg',
    link: '/predictive-maintenance-ai',
    isNew: false,
    isFeatured: true,
    implementationTime: '3-6 weeks',
    roi: 250,
    publishedDate: '2026-01-18'
  },
  {
    id: 'autonomous-supply-chain',
    title: 'Autonomous Supply Chain Management',
    description: 'Self-optimizing supply chain that automatically adjusts to demand fluctuations and market changes.',
    category: 'Supply Chain',
    efficiency: 85,
    costSavings: 50,
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Supplier management',
      'Risk assessment'
    ],
    benefits: [
      '85% efficiency improvement',
      '50% cost reduction',
      'Reduced stockouts',
      'Optimized inventory'
    ],
    image: '/images/autonomous-supply-chain.jpg',
    link: '/autonomous-supply-chain',
    isNew: false,
    isFeatured: false,
    implementationTime: '4-8 weeks',
    roi: 200,
    publishedDate: '2026-01-15'
  },
  {
    id: 'ai-powered-hr-automation',
    title: 'AI-Powered HR Automation Suite',
    description: 'Comprehensive HR automation that handles recruitment, onboarding, and employee management with AI intelligence.',
    category: 'Human Resources',
    efficiency: 88,
    costSavings: 45,
    features: [
      'Resume screening',
      'Interview scheduling',
      'Employee onboarding',
      'Performance tracking'
    ],
    benefits: [
      '88% process efficiency',
      '45% HR cost reduction',
      'Faster hiring process',
      'Improved candidate experience'
    ],
    image: '/images/ai-hr-automation.jpg',
    link: '/ai-hr-automation',
    isNew: false,
    isFeatured: false,
    implementationTime: '2-3 weeks',
    roi: 180,
    publishedDate: '2026-01-12'
  },
  {
    id: 'autonomous-financial-analysis',
    title: 'Autonomous Financial Analysis AI',
    description: 'Advanced AI that performs real-time financial analysis, risk assessment, and investment recommendations.',
    category: 'Finance',
    efficiency: 92,
    costSavings: 65,
    features: [
      'Real-time analysis',
      'Risk assessment',
      'Investment recommendations',
      'Compliance monitoring'
    ],
    benefits: [
      '92% accuracy in analysis',
      '65% cost reduction',
      'Real-time insights',
      'Automated compliance'
    ],
    image: '/images/autonomous-finance.jpg',
    link: '/autonomous-financial-analysis',
    isNew: false,
    isFeatured: false,
    implementationTime: '3-5 weeks',
    roi: 350,
    publishedDate: '2026-01-08'
  }
];

const AdvancedAIAutomationShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredSolutions, setFilteredSolutions] = useState<AutomationSolution[]>(automationSolutions);

  const categories = ['All', 'Process Automation', 'Customer Service', 'Maintenance', 'Supply Chain', 'Human Resources', 'Finance'];

  useEffect(() => {
    let filtered = automationSolutions;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(solution => solution.category === selectedCategory);
    }

    switch (sortBy) {
      case 'featured':
        filtered = filtered.filter(solution => solution.isFeatured).concat(filtered.filter(solution => !solution.isFeatured));
        break;
      case 'newest':
        filtered = filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
        break;
      case 'efficiency':
        filtered = filtered.sort((a, b) => b.efficiency - a.efficiency);
        break;
      case 'roi':
        filtered = filtered.sort((a, b) => b.roi - a.roi);
        break;
    }

    setFilteredSolutions(filtered);
  }, [selectedCategory, sortBy]);

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 95) return 'text-green-400';
    if (efficiency >= 90) return 'text-yellow-400';
    if (efficiency >= 85) return 'text-orange-400';
    return 'text-red-400';
  };

  const getEfficiencyBg = (efficiency: number) => {
    if (efficiency >= 95) return 'bg-green-500';
    if (efficiency >= 90) return 'bg-yellow-500';
    if (efficiency >= 85) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Bot className="w-4 h-4" />
            Advanced AI Automation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Intelligent Automation Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with AI-powered automation that learns, adapts, and delivers unprecedented efficiency and cost savings.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Efficiency Increase</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-blue-400 mb-2">80%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Operation</div>
          </div>
        </motion.div>

        {/* Filters and Sorting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-green-500 focus:outline-none"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="efficiency">Highest Efficiency</option>
            <option value="roi">Best ROI</option>
          </select>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {solution.isNew && (
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW
                  </span>
                )}
                {solution.isFeatured && (
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                )}
              </div>

              {/* ROI Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-green-600/20 backdrop-blur-sm text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  {solution.roi}% ROI
                </div>
              </div>

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-green-600/20 to-blue-600/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 text-sm font-medium">{solution.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{solution.implementationTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {solution.description}
                </p>

                {/* Efficiency and Cost Savings */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Efficiency</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getEfficiencyBg(solution.efficiency)}`}
                          style={{ width: `${solution.efficiency}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getEfficiencyColor(solution.efficiency)}`}>
                        {solution.efficiency}%
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">Cost Savings</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getEfficiencyBg(solution.costSavings)}`}
                          style={{ width: `${solution.costSavings}%` }}
                        />
                      </div>
                      <span className={`text-xs font-semibold ${getEfficiencyColor(solution.costSavings)}`}>
                        {solution.costSavings}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {solution.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {solution.features.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{solution.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <div className="text-gray-400 text-xs mb-1">Key Benefits:</div>
                  <div className="flex flex-wrap gap-1">
                    {solution.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-green-600/20 text-green-400 px-2 py-1 rounded text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                    {solution.benefits.length > 2 && (
                      <span className="text-gray-400 text-xs">
                        +{solution.benefits.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={solution.link}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
                >
                  <span>Explore Automation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our AI automation solutions to achieve unprecedented efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                <Bot className="w-5 h-5" />
                Explore Automation Solutions
              </Link>
              <Link
                to="/automation-demo"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAIAutomationShowcase;
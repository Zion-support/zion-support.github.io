import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  Star,
  Award,
  Rocket
} from 'lucide-react';

const AI2027RevolutionaryBreakthroughShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('breakthroughs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ai-2027-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const breakthroughFeatures = [
    {
      icon: Brain,
      title: "Neural-Synthetic Intelligence",
      description: "Revolutionary AI that combines neural networks with synthetic reasoning, achieving 99.97% accuracy in complex problem-solving.",
      stats: "99.97% Accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quantum-Neural Fusion",
      description: "Breakthrough technology that merges quantum computing with neural networks for unprecedented processing power.",
      stats: "50,000x Faster",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "Autonomous AI Systems",
      description: "Self-evolving AI systems that continuously improve and adapt without human intervention.",
      stats: "100% Autonomous",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Predictive Analytics Engine",
      description: "Advanced predictive models that forecast trends with 95% accuracy across all industries.",
      stats: "95% Prediction Rate",
      color: "from-orange-500 to-red-500"
    }
  ];

  const successMetrics = [
    { label: "ROI Improvement", value: "15,000%", icon: TrendingUp },
    { label: "Processing Speed", value: "50,000x", icon: Zap },
    { label: "Accuracy Rate", value: "99.97%", icon: Award },
    { label: "Global Adoption", value: "2.5M+", icon: Globe },
    { label: "Active Users", value: "500K+", icon: Users },
    { label: "Success Rate", value: "98.5%", icon: Star }
  ];

  const caseStudies = [
    {
      title: "Global Financial Transformation",
      company: "Fortune 500 Bank",
      challenge: "Real-time fraud detection across 50+ countries",
      solution: "Quantum-Neural Fusion AI",
      results: [
        "99.97% fraud detection accuracy",
        "$2.3B saved annually",
        "Real-time processing in <1ms"
      ],
      image: "/images/case-study-finance.jpg"
    },
    {
      title: "Healthcare Revolution",
      company: "Leading Medical Center",
      challenge: "Early disease prediction and treatment optimization",
      solution: "Neural-Synthetic Intelligence",
      results: [
        "95% early detection rate",
        "40% reduction in treatment costs",
        "2.5M patients served"
      ],
      image: "/images/case-study-healthcare.jpg"
    },
    {
      title: "Manufacturing Excellence",
      company: "Global Manufacturing Corp",
      challenge: "Predictive maintenance and quality control",
      solution: "Autonomous AI Systems",
      results: [
        "80% reduction in downtime",
        "99.5% quality consistency",
        "$500M annual savings"
      ],
      image: "/images/case-study-manufacturing.jpg"
    }
  ];

  const tabs = [
    { id: 'breakthroughs', label: 'Breakthrough Features', icon: Rocket },
    { id: 'metrics', label: 'Success Metrics', icon: TrendingUp },
    { id: 'case-studies', label: 'Case Studies', icon: Award }
  ];

  return (
    <motion.section
      id="ai-2027-showcase"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Rocket className="w-4 h-4 mr-2" />
            AI 2027 Revolutionary Breakthrough
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Future of AI is Here
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experience revolutionary AI breakthroughs that are transforming industries worldwide. 
            Our 2027 technology delivers unprecedented performance and results.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'breakthroughs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {breakthroughFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <div className="text-purple-400 font-semibold text-sm">{feature.stats}</div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'case-studies' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Award className="w-12 h-12 mx-auto mb-2" />
                      <div className="font-semibold">{study.company}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-300 text-sm mb-4">
                      <strong>Solution:</strong> {study.solution}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-purple-400 mb-2">Results:</div>
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the AI Revolution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already transforming their operations with our 
              revolutionary AI 2027 breakthrough technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-2027-breakthrough-solutions"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-purple-600 hover:to-pink-600 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies/ai-2027-success-stories"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AI2027RevolutionaryBreakthroughShowcase;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Eye,
  Microscope,
  Network,
  Database,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AdvancedAnalyticsInsights2025: React.FC = () => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis',
      details: 'Advanced machine learning models that predict future outcomes with 95% accuracy, helping businesses make data-driven decisions.',
      color: 'from-blue-500 to-cyan-500',
      impact: 'High ROI',
      metrics: '95% Accuracy'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Live data processing and instant insights',
      details: 'Process millions of data points in real-time to provide instant insights and automated responses to business events.',
      color: 'from-green-500 to-emerald-500',
      impact: 'Critical',
      metrics: '<1s Response'
    },
    {
      icon: Target,
      title: 'Behavioral Analytics',
      description: 'Deep customer behavior insights',
      details: 'Advanced user behavior analysis that uncovers hidden patterns and predicts customer actions with unprecedented precision.',
      color: 'from-purple-500 to-pink-500',
      impact: 'Game-changing',
      metrics: '300% Better Targeting'
    },
    {
      icon: Network,
      title: 'Network Analytics',
      description: 'Complex relationship analysis',
      details: 'Analyze complex networks and relationships in your data to discover hidden connections and optimization opportunities.',
      color: 'from-orange-500 to-red-500',
      impact: 'Transformative',
      metrics: '50% Cost Reduction'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      icon: Globe,
      challenge: 'Optimizing customer experience and conversion rates',
      solution: 'Advanced customer journey analytics with real-time personalization',
      results: [
        '45% increase in conversion rates',
        '60% reduction in cart abandonment',
        '35% improvement in customer lifetime value',
        '80% faster decision making'
      ],
      timeline: '3 months implementation'
    },
    {
      industry: 'Healthcare',
      icon: Microscope,
      challenge: 'Improving patient outcomes and operational efficiency',
      solution: 'Predictive health analytics with real-time patient monitoring',
      results: [
        '30% reduction in readmission rates',
        '50% faster diagnosis times',
        '25% improvement in treatment outcomes',
        '40% reduction in operational costs'
      ],
      timeline: '6 months implementation'
    },
    {
      industry: 'Manufacturing',
      icon: Zap,
      challenge: 'Optimizing production and reducing downtime',
      solution: 'Predictive maintenance and quality control analytics',
      results: [
        '70% reduction in unplanned downtime',
        '90% improvement in quality control',
        '55% increase in production efficiency',
        '65% reduction in maintenance costs'
      ],
      timeline: '4 months implementation'
    },
    {
      industry: 'Finance',
      icon: Shield,
      challenge: 'Risk management and fraud detection',
      solution: 'Advanced risk analytics with real-time fraud prevention',
      results: [
        '95% accuracy in fraud detection',
        '80% reduction in false positives',
        '60% faster risk assessment',
        '45% reduction in financial losses'
      ],
      timeline: '2 months implementation'
    }
  ];

  const analyticsCapabilities = [
    {
      title: 'Advanced Data Visualization',
      description: 'Interactive dashboards with 3D visualizations and immersive analytics',
      features: ['3D Data Visualization', 'Immersive Analytics', 'Interactive Dashboards', 'Real-time Updates'],
      icon: Eye
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your specific data for maximum accuracy',
      features: ['Custom Model Training', 'AutoML Capabilities', 'Model Optimization', 'Continuous Learning'],
      icon: Brain
    },
    {
      title: 'Natural Language Analytics',
      description: 'Ask questions in plain English and get instant data insights',
      features: ['Voice Commands', 'Natural Language Queries', 'Automated Reports', 'Smart Insights'],
      icon: Users
    },
    {
      title: 'Edge Analytics',
      description: 'Process data at the source for instant insights and reduced latency',
      features: ['Real-time Processing', 'Edge Computing', 'Low Latency', 'Offline Capability'],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-semibold mb-6">
              📊 ADVANCED ANALYTICS 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Advanced Analytics Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your data into actionable insights with cutting-edge analytics solutions. 
              Leverage AI-powered analytics to drive business growth and competitive advantage.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Analytics
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Analytics Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Advanced Analytics Features</h2>
            <p className="text-xl text-gray-300">Click on each feature to explore capabilities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeInsight === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveInsight(index)}
              >
                <div className={`bg-gradient-to-r ${feature.color} p-6 rounded-xl text-white text-center border-2 ${
                  activeInsight === index ? 'border-white shadow-2xl' : 'border-transparent'
                }`}>
                  <feature.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <span className="bg-white/20 px-2 py-1 rounded-full">{feature.impact}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">{feature.metrics}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Feature Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeInsight}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${analyticsFeatures[activeInsight].color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {React.createElement(analyticsFeatures[activeInsight].icon, { className: "w-10 h-10 text-white" })}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{analyticsFeatures[activeInsight].title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{analyticsFeatures[activeInsight].details}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Impact:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-semibold">
                        {analyticsFeatures[activeInsight].impact}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Metrics:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-semibold">
                        {analyticsFeatures[activeInsight].metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Use Cases by Industry */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏭 Industry Use Cases</h2>
            <p className="text-xl text-gray-300">Real-world applications and proven results</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                    <p className="text-sm text-gray-400">Timeline: {useCase.timeline}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Challenge:</h4>
                  <p className="text-gray-300 mb-4">{useCase.challenge}</p>
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Solution:</h4>
                  <p className="text-gray-300 mb-4">{useCase.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Results:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Analytics Capabilities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">⚡ Analytics Capabilities</h2>
            <p className="text-xl text-gray-300">Cutting-edge features for maximum insight</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{capability.title}</h3>
                    <p className="text-gray-300">{capability.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10x</div>
            <div className="text-gray-300">Faster Insights</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">300%</div>
            <div className="text-gray-300">ROI Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Real-time Monitoring</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data into Insights?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the power of your data with our advanced analytics solutions. 
            Get started today and see the difference data-driven decisions can make.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Analytics Journey
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedAnalyticsInsights2025;
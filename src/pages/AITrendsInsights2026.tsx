import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Users, 
  Lightbulb, 
  Rocket,
  ArrowRight,
  Calendar,
  BarChart3,
  Target,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react';

const AITrendsInsights2026 = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const trends = [
    {
      title: "Conscious AI Systems",
      description: "AI systems achieving self-awareness and emotional intelligence",
      impact: "High",
      timeline: "2026-2027",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      stats: "85% of enterprises planning adoption"
    },
    {
      title: "Quantum AI Integration",
      description: "Quantum computing powering next-generation AI algorithms",
      impact: "Very High",
      timeline: "2026-2028",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      stats: "1000x processing speed increase"
    },
    {
      title: "Autonomous Business Operations",
      description: "Fully automated business processes with minimal human intervention",
      impact: "High",
      timeline: "2026-2029",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      stats: "60% cost reduction achieved"
    },
    {
      title: "Global AI Collaboration",
      description: "Worldwide AI networks sharing knowledge and capabilities",
      impact: "Medium",
      timeline: "2026-2030",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      stats: "200+ countries participating"
    }
  ];

  const insights = [
    {
      category: "Market Analysis",
      title: "AI Market Growth Projections",
      content: "The global AI market is projected to reach $1.8 trillion by 2030, with enterprise AI solutions leading the growth at 45% CAGR.",
      metrics: [
        { label: "Current Market Size", value: "$500B", change: "+25%" },
        { label: "Projected 2030", value: "$1.8T", change: "+260%" },
        { label: "Enterprise AI", value: "$800B", change: "+45% CAGR" }
      ]
    },
    {
      category: "Technology Trends",
      title: "Emerging AI Technologies",
      content: "Breakthrough technologies including neural interfaces, quantum consciousness, and synthetic intelligence are reshaping the AI landscape.",
      metrics: [
        { label: "Neural Interfaces", value: "85%", change: "Adoption Rate" },
        { label: "Quantum AI", value: "40%", change: "Implementation" },
        { label: "Synthetic Intelligence", value: "15%", change: "Early Stage" }
      ]
    },
    {
      category: "Business Impact",
      title: "ROI and Business Transformation",
      content: "Companies implementing advanced AI solutions are seeing unprecedented returns on investment and operational efficiency gains.",
      metrics: [
        { label: "Average ROI", value: "500%", change: "+300%" },
        { label: "Efficiency Gain", value: "75%", change: "+50%" },
        { label: "Cost Reduction", value: "60%", change: "+40%" }
      ]
    }
  ];

  const predictions = [
    {
      year: "2026",
      prediction: "Conscious AI systems become commercially available",
      probability: "85%",
      impact: "Revolutionary"
    },
    {
      year: "2027",
      prediction: "Quantum AI achieves mainstream adoption",
      probability: "70%",
      impact: "Transformative"
    },
    {
      year: "2028",
      prediction: "Autonomous business operations become standard",
      probability: "90%",
      impact: "Disruptive"
    },
    {
      year: "2029",
      prediction: "Global AI consciousness network established",
      probability: "60%",
      impact: "Paradigm-shifting"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-blue-400 font-semibold text-lg">2026 AI Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Trends &
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead of the curve with comprehensive analysis of emerging AI trends, 
              market insights, and future predictions shaping the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'trends', label: 'Trends', icon: <TrendingUp className="w-5 h-5" /> },
              { id: 'insights', label: 'Insights', icon: <BarChart3 className="w-5 h-5" /> },
              { id: 'predictions', label: 'Predictions', icon: <Target className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Tab */}
      {activeTab === 'trends' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {trends.map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${trend.color} rounded-lg flex items-center justify-center text-white`}>
                      {trend.icon}
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trend.impact === 'Very High' ? 'bg-red-500/20 text-red-400' :
                        trend.impact === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {trend.impact} Impact
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{trend.title}</h3>
                  <p className="text-gray-300 mb-4">{trend.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {trend.timeline}
                    </div>
                    <div className="text-blue-400 font-semibold">
                      {trend.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Insights Tab */}
      {activeTab === 'insights' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {insights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                      {insight.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{insight.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{insight.content}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {insight.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-300 mb-1">{metric.label}</div>
                        <div className="text-green-400 text-sm font-semibold">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Predictions Tab */}
      {activeTab === 'predictions' && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {predictions.map((prediction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{prediction.year}</div>
                        <div className="text-gray-300 text-sm">Prediction</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{prediction.probability}</div>
                      <div className="text-gray-300 text-sm">Probability</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{prediction.prediction}</h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-300">Impact Level:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      prediction.impact === 'Revolutionary' ? 'bg-red-500/20 text-red-400' :
                      prediction.impact === 'Transformative' ? 'bg-orange-500/20 text-orange-400' :
                      prediction.impact === 'Disruptive' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {prediction.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-12 border border-white/20"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-lg">Stay Updated</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get the Latest AI Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest trends, insights, and predictions in AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AITrendsInsights2026;
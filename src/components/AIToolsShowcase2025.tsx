import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3,
  ArrowRight,
  Play,
  Download,
  Share2,
  Star,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';

const AIToolsShowcase2025: React.FC = () => {
  const [activeTool, setActiveTool] = useState(0);

  const tools = [
    {
      id: 'autonomy-calculator',
      title: 'AI 2025 Autonomy Calculator',
      description: 'Calculate your business\'s AI autonomy potential and expected ROI with our comprehensive assessment tool.',
      features: [
        'Autonomy level assessment',
        'ROI calculation framework',
        'Implementation timeline',
        'Industry benchmarks'
      ],
      metrics: ['85% accuracy', '15 min assessment', 'Detailed report'],
      icon: Calculator,
      color: 'from-blue-500 to-purple-600',
      link: '/tools/ai-2025-autonomy-calculator',
      category: 'Assessment Tool',
      popularity: 'Most Popular'
    },
    {
      id: 'roi-predictor',
      title: 'AI ROI Predictor',
      description: 'Predict your return on investment for AI implementations across different business processes.',
      features: [
        'Cost-benefit analysis',
        'Risk assessment',
        'Timeline estimation',
        'Success probability'
      ],
      metrics: ['90% accuracy', 'Real-time data', 'Custom scenarios'],
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      link: '/tools/ai-roi-predictor',
      category: 'Financial Tool',
      popularity: 'New'
    },
    {
      id: 'readiness-assessment',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI transformation across all key dimensions.',
      features: [
        'Multi-dimensional analysis',
        'Gap identification',
        'Improvement roadmap',
        'Benchmarking'
      ],
      metrics: ['12 dimensions', 'Actionable insights', 'Peer comparison'],
      icon: Target,
      color: 'from-orange-500 to-red-600',
      link: '/tools/ai-readiness-assessment',
      category: 'Strategic Tool',
      popularity: 'Recommended'
    },
    {
      id: 'automation-analyzer',
      title: 'Process Automation Analyzer',
      description: 'Identify and prioritize business processes for AI automation with detailed feasibility analysis.',
      features: [
        'Process mapping',
        'Automation potential',
        'Complexity assessment',
        'Priority ranking'
      ],
      metrics: ['100+ processes', 'Smart ranking', 'Impact analysis'],
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      link: '/tools/process-automation-analyzer',
      category: 'Process Tool',
      popularity: 'Trending'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            AI TOOLS & CALCULATORS
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI 2025 Assessment Tools
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful calculators and assessment tools to evaluate your AI transformation potential, 
            calculate ROI, and plan your implementation strategy.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            const isActive = index === activeTool;
            
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                onClick={() => setActiveTool(index)}
              >
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  {/* Popularity badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {tool.popularity}
                  </div>

                  {/* Category badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-6">
                    <Icon className="w-3 h-3" />
                    {tool.category}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-sm text-green-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={tool.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Try Now
                    </Link>
                    
                    <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center">
                      <Share2 className="w-4 h-4" />
                    </button>
                    
                    <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Tool Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                FEATURED TOOL
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {tools[activeTool].title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {tools[activeTool].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-green-300 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">Usage</span>
                  </div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-xs text-gray-400">assessments completed</div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-blue-300 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">Time</span>
                  </div>
                  <div className="text-2xl font-bold text-white">15 min</div>
                  <div className="text-xs text-gray-400">average completion</div>
                </div>
              </div>

              <Link
                href={tools[activeTool].link}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="w-5 h-5" />
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">
                    Instant Results
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-6">
                    Get detailed analysis and recommendations in minutes
                  </p>

                  <div className="space-y-3">
                    {tools[activeTool].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-green-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with our assessment tools to understand your AI potential, 
            then work with our experts to implement a comprehensive transformation strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calculator className="w-5 h-5" />
              Explore All Tools
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              <Users className="w-5 h-5" />
              Talk to Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIToolsShowcase2025;
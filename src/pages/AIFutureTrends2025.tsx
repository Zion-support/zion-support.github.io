import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
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
  Network
} from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const AIFutureTrends2025: React.FC = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const trends = [
    {
      icon: Brain,
      title: 'Autonomous AI Agents',
      description: 'Self-managing AI systems that operate independently',
      details: 'AI agents that can make decisions, execute tasks, and adapt without human intervention.',
      color: 'from-purple-500 to-pink-500',
      impact: 'Revolutionary',
      timeline: '2025-2026'
    },
    {
      icon: Zap,
      title: 'Edge AI Computing',
      description: 'Real-time AI processing at the network edge',
      details: 'Bringing AI capabilities to edge devices for instant decision making and reduced latency.',
      color: 'from-blue-500 to-cyan-500',
      impact: 'Transformative',
      timeline: '2025'
    },
    {
      icon: Shield,
      title: 'Quantum-Enhanced Security',
      description: 'Next-generation security using quantum principles',
      details: 'Quantum cryptography and post-quantum security protocols for unbreakable protection.',
      color: 'from-green-500 to-emerald-500',
      impact: 'Critical',
      timeline: '2025-2027'
    },
    {
      icon: Globe,
      title: 'Global AI Networks',
      description: 'Worldwide connected AI systems',
      details: 'Interconnected AI networks that share knowledge and capabilities across the globe.',
      color: 'from-orange-500 to-red-500',
      impact: 'Game-changing',
      timeline: '2026-2028'
    }
  ];

  const futurePredictions = [
    {
      year: '2025',
      predictions: [
        'AI agents become standard in enterprise operations',
        'Edge AI adoption reaches 70% of organizations',
        'Quantum-resistant cryptography becomes mandatory',
        'AI-generated content accounts for 30% of digital media'
      ]
    },
    {
      year: '2026',
      predictions: [
        'First fully autonomous business operations',
        'AI-human collaboration becomes seamless',
        'Quantum computing solves previously impossible problems',
        'Neural interfaces enter mainstream applications'
      ]
    },
    {
      year: '2027',
      predictions: [
        'AI surpasses human performance in most cognitive tasks',
        'Global AI governance frameworks established',
        'Digital twins become standard for all major systems',
        'AI-powered scientific discoveries accelerate exponentially'
      ]
    }
  ];

  const industryImpacts = [
    {
      industry: 'Healthcare',
      icon: Microscope,
      changes: [
        'AI-powered personalized medicine',
        'Real-time disease prediction',
        'Automated drug discovery',
        'Surgical AI assistants'
      ],
      timeline: '2025-2027'
    },
    {
      industry: 'Finance',
      icon: TrendingUp,
      changes: [
        'Autonomous trading systems',
        'Real-time fraud detection',
        'AI-powered risk assessment',
        'Quantum-secured transactions'
      ],
      timeline: '2025-2026'
    },
    {
      industry: 'Manufacturing',
      icon: Cpu,
      changes: [
        'Self-optimizing production lines',
        'Predictive maintenance at scale',
        'AI-driven quality control',
        'Autonomous supply chain management'
      ],
      timeline: '2025-2028'
    },
    {
      industry: 'Transportation',
      icon: Rocket,
      changes: [
        'Fully autonomous vehicles',
        'AI-optimized traffic systems',
        'Quantum-enhanced logistics',
        'Real-time route optimization'
      ],
      timeline: '2025-2029'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
              🔮 FUTURE TRENDS 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              AI Future Trends: 2025 & Beyond
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Explore the revolutionary AI trends that will reshape industries, transform businesses, 
              and redefine human-machine collaboration in the coming years.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Trends
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-colors">
                Download Report
              </button>
            </div>
          </motion.div>
        </div>

        {/* Interactive Trends Carousel */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Key AI Trends</h2>
            <p className="text-xl text-gray-300">Click on each trend to explore in detail</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {trends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer transition-all duration-300 ${
                  activeTrend === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveTrend(index)}
              >
                <div className={`bg-gradient-to-r ${trend.color} p-6 rounded-xl text-white text-center border-2 ${
                  activeTrend === index ? 'border-white shadow-2xl' : 'border-transparent'
                }`}>
                  <trend.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
                  <p className="text-sm opacity-90">{trend.description}</p>
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <span className="bg-white/20 px-2 py-1 rounded-full">{trend.impact}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full">{trend.timeline}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Trend Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrend}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${trends[activeTrend].color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <trends[activeTrend].icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">{trends[activeTrend].title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{trends[activeTrend].details}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Impact:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                        {trends[activeTrend].impact}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Timeline:</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-semibold">
                        {trends[activeTrend].timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Future Predictions Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">📅 Future Predictions Timeline</h2>
            <p className="text-xl text-gray-300">What to expect in the coming years</p>
          </div>
          
          <div className="space-y-8">
            {futurePredictions.map((year, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{year.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Major AI Milestones</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {year.predictions.map((prediction, predIndex) => (
                    <div key={predIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{prediction}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🏭 Industry Transformation</h2>
            <p className="text-xl text-gray-300">How AI will reshape major industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industryImpacts.map((industry, index) => (
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
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                    <p className="text-sm text-gray-400">Timeline: {industry.timeline}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {industry.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start space-x-3">
                      <ArrowRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{change}</span>
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
            <div className="text-4xl font-bold text-white mb-2">$4.2T</div>
            <div className="text-gray-300">Projected AI Market Value by 2027</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300">Companies Will Use AI by 2026</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500%</div>
            <div className="text-gray-300">Expected Productivity Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100M</div>
            <div className="text-gray-300">AI-Powered Jobs Created</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace the AI Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't get left behind. Partner with Zion Tech Group to implement cutting-edge AI solutions 
            that will prepare your business for the future of artificial intelligence.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start AI Transformation
            </button>
            <button className="border border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-colors text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIFutureTrends2025;
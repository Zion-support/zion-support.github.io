import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
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
  ArrowRight
} from 'lucide-react';

interface BreakthroughItem {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
  roi: string;
  status: 'live' | 'beta' | 'coming-soon';
  features: string[];
  metrics: {
    accuracy: string;
    speed: string;
    efficiency: string;
  };
  image: string;
  videoUrl?: string;
  downloadUrl?: string;
}

const breakthroughData: BreakthroughItem[] = [
  {
    id: 'neural-synthesis-2025',
    title: 'Neural Synthesis Engine 2025',
    description: 'Revolutionary AI that synthesizes human-like intelligence with quantum-enhanced processing capabilities, delivering unprecedented accuracy and speed.',
    category: 'AI Intelligence',
    impact: '10,000x faster processing',
    roi: '2,500% ROI',
    status: 'live',
    features: [
      'Quantum-enhanced neural networks',
      'Real-time learning adaptation',
      'Multi-modal intelligence synthesis',
      'Autonomous decision making',
      'Cross-domain knowledge transfer'
    ],
    metrics: {
      accuracy: '99.97%',
      speed: '10,000x faster',
      efficiency: '95% reduction in processing time'
    },
    image: '/images/neural-synthesis-2025.jpg',
    videoUrl: '/videos/neural-synthesis-demo.mp4',
    downloadUrl: '/downloads/neural-synthesis-whitepaper.pdf'
  },
  {
    id: 'quantum-ai-fusion',
    title: 'Quantum-AI Fusion Platform',
    description: 'Breakthrough integration of quantum computing with artificial intelligence, enabling solutions previously impossible with classical computing.',
    category: 'Quantum Computing',
    impact: 'Exponential problem-solving capability',
    roi: '5,000% ROI',
    status: 'beta',
    features: [
      'Quantum machine learning algorithms',
      'Quantum neural networks',
      'Quantum optimization engines',
      'Quantum cryptography integration',
      'Hybrid classical-quantum processing'
    ],
    metrics: {
      accuracy: '99.99%',
      speed: 'Exponential speedup',
      efficiency: '99% quantum advantage'
    },
    image: '/images/quantum-ai-fusion.jpg',
    videoUrl: '/videos/quantum-ai-demo.mp4'
  },
  {
    id: 'autonomous-operations',
    title: 'Autonomous Operations Suite 2025',
    description: 'Complete autonomous business operations platform that runs entire workflows without human intervention, delivering unprecedented efficiency.',
    category: 'Automation',
    impact: '100% autonomous operations',
    roi: '3,000% ROI',
    status: 'live',
    features: [
      'End-to-end process automation',
      'Intelligent decision making',
      'Self-healing systems',
      'Predictive maintenance',
      'Dynamic resource allocation'
    ],
    metrics: {
      accuracy: '99.8%',
      speed: '24/7 operation',
      efficiency: '90% cost reduction'
    },
    image: '/images/autonomous-operations.jpg',
    videoUrl: '/videos/autonomous-ops-demo.mp4',
    downloadUrl: '/downloads/autonomous-ops-guide.pdf'
  },
  {
    id: 'neural-interface-pro',
    title: 'Neural Interface Pro 2025',
    description: 'Advanced brain-computer interface technology that enables direct neural control of digital systems and AI assistants.',
    category: 'Neural Interface',
    impact: 'Direct neural control',
    roi: '4,000% ROI',
    status: 'coming-soon',
    features: [
      'Non-invasive neural reading',
      'Thought-to-text conversion',
      'Neural pattern recognition',
      'Cognitive enhancement tools',
      'Brain-computer integration'
    ],
    metrics: {
      accuracy: '98.5%',
      speed: 'Real-time processing',
      efficiency: '95% thought accuracy'
    },
    image: '/images/neural-interface-pro.jpg'
  }
];

const AI2025UltimateBreakthroughShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<BreakthroughItem | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const categories = ['all', ...Array.from(new Set(breakthroughData.map(item => item.category)))];

  const filteredData = selectedCategory === 'all' 
    ? breakthroughData 
    : breakthroughData.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: BreakthroughItem) => {
    setSelectedItem(item);
    if (item.videoUrl) {
      setIsVideoPlaying(true);
    }
  };

  const handleDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const handleShare = (item: BreakthroughItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            AI 2025 Ultimate Breakthroughs
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI breakthroughs of 2025, delivering unprecedented performance and revolutionary capabilities.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category === 'all' ? 'All Breakthroughs' : category}
            </button>
          ))}
        </motion.div>

        {/* Breakthrough Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                onClick={() => handleItemClick(item)}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'live' ? 'bg-green-500/20 text-green-400' :
                    item.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.status === 'live' ? 'Live' : item.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>
                  <div className="flex space-x-2">
                    {item.videoUrl && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item);
                        }}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(item);
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{item.metrics.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{item.metrics.speed}</div>
                    <div className="text-xs text-gray-400">Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{item.metrics.efficiency}</div>
                    <div className="text-xs text-gray-400">Efficiency</div>
                  </div>
                </div>

                {/* ROI and Impact */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-green-400 font-semibold">{item.roi}</div>
                  <div className="text-blue-400 font-semibold text-sm">{item.impact}</div>
                </div>

                {/* Features Preview */}
                <div className="space-y-2">
                  {item.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                  {item.features.length > 3 && (
                    <div className="text-sm text-gray-400">
                      +{item.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                  Explore Breakthrough
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
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our AI breakthroughs to achieve unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal for Detailed View */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedItem.title}</h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  {selectedItem.videoUrl && (
                    <div className="mb-6">
                      <video
                        controls
                        className="w-full rounded-xl"
                        poster={selectedItem.image}
                      >
                        <source src={selectedItem.videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{selectedItem.metrics.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{selectedItem.metrics.speed}</div>
                      <div className="text-sm text-gray-400">Speed</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{selectedItem.metrics.efficiency}</div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {selectedItem.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedItem.downloadUrl && (
                      <button
                        onClick={() => handleDownload(selectedItem.downloadUrl!)}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
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

export default AI2025UltimateBreakthroughShowcase;
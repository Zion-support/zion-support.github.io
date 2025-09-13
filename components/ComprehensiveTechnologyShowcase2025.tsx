import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Download, 
  ExternalLink,
  Brain,
  Cpu,
  Zap,
  Sparkles,
  Rocket,
  Shield,
  Globe,
  Database,
  BarChart3,
  TrendingUp,
  Star,
  Clock,
  Users,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  status: 'available' | 'beta' | 'coming-soon';
  launchDate: string;
  rating: number;
  users: number;
  documentation: string;
  demo: string;
  pricing: string;
}

const technologies: Technology[] = [
  {
    id: '1',
    name: 'Neural Synthesis AI',
    category: 'Artificial Intelligence',
    description: 'Advanced neural network systems with 99.9% accuracy and 10,000x processing speed improvements.',
    features: [
      '99.9% accuracy rate',
      '10,000x faster processing',
      'Real-time learning capabilities',
      'Multi-modal data processing',
      'Autonomous decision making'
    ],
    benefits: [
      '2,500% average ROI',
      'Reduced operational costs by 80%',
      'Improved decision accuracy',
      'Faster time-to-market',
      'Enhanced customer satisfaction'
    ],
    icon: <Brain className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    status: 'available',
    launchDate: '2025-01-15',
    rating: 4.9,
    users: 12500,
    documentation: '/docs/neural-synthesis',
    demo: '/demo/neural-synthesis',
    pricing: 'Contact Sales'
  },
  {
    id: '2',
    name: 'Quantum Computing Suite',
    category: 'Quantum Computing',
    description: 'Error-corrected quantum computing solutions for cryptography, optimization, and machine learning.',
    features: [
      'Error-corrected quantum gates',
      'Quantum cryptography protocols',
      'Optimization algorithms',
      'Quantum machine learning',
      'Hybrid classical-quantum systems'
    ],
    benefits: [
      'Exponential speed improvements',
      'Unbreakable encryption',
      'Complex optimization solutions',
      'Revolutionary ML capabilities',
      'Future-proof technology'
    ],
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    status: 'beta',
    launchDate: '2025-03-01',
    rating: 4.8,
    users: 3200,
    documentation: '/docs/quantum-computing',
    demo: '/demo/quantum-computing',
    pricing: 'Enterprise Only'
  },
  {
    id: '3',
    name: 'Autonomous Business Systems',
    category: 'Automation',
    description: 'Self-managing AI agents that automate complex business processes with minimal human intervention.',
    features: [
      'Autonomous process management',
      'Self-healing systems',
      'Intelligent resource allocation',
      'Predictive maintenance',
      'Dynamic workflow optimization'
    ],
    benefits: [
      '95% reduction in manual tasks',
      '24/7 operational efficiency',
      'Proactive issue resolution',
      'Scalable automation',
      'Cost savings up to 70%'
    ],
    icon: <Zap className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    status: 'available',
    launchDate: '2025-01-01',
    rating: 4.9,
    users: 8900,
    documentation: '/docs/autonomous-systems',
    demo: '/demo/autonomous-systems',
    pricing: 'Subscription Based'
  },
  {
    id: '4',
    name: 'Neural Interface Platform',
    category: 'Human-AI Interaction',
    description: 'Cutting-edge neural interface technologies enabling seamless communication between humans and AI.',
    features: [
      'Brain-computer interfaces',
      'Thought-to-text conversion',
      'Emotional AI recognition',
      'Neural pattern analysis',
      'Real-time feedback systems'
    ],
    benefits: [
      'Enhanced accessibility',
      'Faster communication',
      'Improved user experience',
      'Revolutionary interaction methods',
      'Medical applications'
    ],
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    status: 'coming-soon',
    launchDate: '2025-06-01',
    rating: 4.7,
    users: 1500,
    documentation: '/docs/neural-interfaces',
    demo: '/demo/neural-interfaces',
    pricing: 'TBA'
  },
  {
    id: '5',
    name: 'Space Technology Solutions',
    category: 'Space Technology',
    description: 'AI-powered space exploration and satellite management systems for autonomous space operations.',
    features: [
      'Autonomous spacecraft control',
      'Intelligent mission planning',
      'Satellite constellation management',
      'Space debris tracking',
      'Planetary exploration AI'
    ],
    benefits: [
      'Reduced mission costs',
      'Enhanced safety protocols',
      'Improved mission success rates',
      'Real-time space monitoring',
      'Revolutionary exploration capabilities'
    ],
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    status: 'beta',
    launchDate: '2025-04-15',
    rating: 4.6,
    users: 2100,
    documentation: '/docs/space-technology',
    demo: '/demo/space-technology',
    pricing: 'Government Contracts'
  },
  {
    id: '6',
    name: 'Quantum Security Suite',
    category: 'Cybersecurity',
    description: 'Next-generation quantum-resistant security solutions protecting against future cyber threats.',
    features: [
      'Quantum-resistant encryption',
      'Post-quantum cryptography',
      'Advanced threat detection',
      'Zero-trust architecture',
      'AI-powered security analytics'
    ],
    benefits: [
      'Future-proof security',
      'Advanced threat protection',
      'Compliance assurance',
      'Reduced security risks',
      'Peace of mind'
    ],
    icon: <Shield className="w-8 h-8" />,
    color: 'from-red-500 to-pink-500',
    status: 'available',
    launchDate: '2025-02-01',
    rating: 4.8,
    users: 5600,
    documentation: '/docs/quantum-security',
    demo: '/demo/quantum-security',
    pricing: 'Per User/Month'
  }
];

const categories = [
  { id: 'all', name: 'All Technologies', icon: <Globe className="w-5 h-5" /> },
  { id: 'Artificial Intelligence', name: 'AI', icon: <Brain className="w-5 h-5" /> },
  { id: 'Quantum Computing', name: 'Quantum', icon: <Cpu className="w-5 h-5" /> },
  { id: 'Automation', name: 'Automation', icon: <Zap className="w-5 h-5" /> },
  { id: 'Human-AI Interaction', name: 'Neural Interfaces', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'Space Technology', name: 'Space Tech', icon: <Rocket className="w-5 h-5" /> },
  { id: 'Cybersecurity', name: 'Security', icon: <Shield className="w-5 h-5" /> }
];

const ComprehensiveTechnologyShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  const filteredTechnologies = selectedCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'beta':
        return 'bg-yellow-100 text-yellow-800';
      case 'coming-soon':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'beta':
        return 'Beta Access';
      case 'coming-soon':
        return 'Coming Soon';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology
            <span className="block text-blue-600">Showcase 2025</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our revolutionary suite of AI, quantum computing, and advanced technology solutions 
            that are transforming industries and reshaping the future.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedTech(tech)}
            >
              {/* Header */}
              <div className={`h-32 bg-gradient-to-r ${tech.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white">
                  {tech.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(tech.status)}`}>
                    {getStatusText(tech.status)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tech.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tech.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>{tech.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tech.users.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{new Date(tech.launchDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={tech.documentation}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    to={tech.demo}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Detail Modal */}
        {selectedTech && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-r ${selectedTech.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="text-6xl mb-4">{selectedTech.icon}</div>
                  <h3 className="text-3xl font-bold">{selectedTech.name}</h3>
                  <p className="text-xl opacity-90">{selectedTech.category}</p>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Description</h4>
                    <p className="text-gray-600 mb-6">{selectedTech.description}</p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedTech.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Business Benefits</h4>
                    <ul className="space-y-2">
                      {selectedTech.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <TrendingUp className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Stats */}
                    <div className="mt-8 bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Technology Stats</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{selectedTech.rating}</div>
                          <div className="text-sm text-gray-600">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{selectedTech.users.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{getStatusText(selectedTech.status)}</div>
                          <div className="text-sm text-gray-600">Status</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{selectedTech.pricing}</div>
                          <div className="text-sm text-gray-600">Pricing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to={selectedTech.documentation}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                  >
                    <Database className="w-5 h-5 mr-2" />
                    View Documentation
                  </Link>
                  <Link
                    to={selectedTech.demo}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Try Demo
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Discover how our revolutionary technologies can accelerate your digital transformation 
            and deliver unprecedented results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveTechnologyShowcase2025;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Shield, Zap, Brain, Globe, Cpu, Rocket, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  category: string;
  icon: React.ReactNode;
  color: string;
  marketData: string;
  competitors: string;
  savings: string;
  link: string;
  status: 'active' | 'coming-soon' | 'beta';
}

const services: Service[] = [
  {
    id: 'quantum-neural-interface',
    title: '🧠 Revolutionary Neural Quantum Brain Interface',
    description: 'World\'s first direct neural interface with quantum AI for cognitive enhancement. Achieve breakthrough discoveries with 1000% ROI within 6 months.',
    price: 'Starting at $25,999/month',
    features: ['Direct neural signal processing', 'Quantum AI cognitive enhancement', 'Real-time memory augmentation', 'Neural pattern recognition', 'Secure quantum encryption'],
    category: 'AI & Neuroscience',
    icon: <Brain className="w-8 h-8" />,
    color: 'from-purple-600 to-indigo-700',
    marketData: '$2B BCI market, 500% annual growth',
    competitors: 'Neuralink ($10,000+/month), Kernel ($50,000+/month)',
    savings: 'Save 60% vs. competitors with quantum AI integration',
    link: '/services/quantum-neural-interface',
    status: 'beta'
  },
  {
    id: 'quantum-internet-security',
    title: '🌐 Quantum Internet Security Platform',
    description: 'Unhackable quantum-secured internet infrastructure with quantum key distribution and post-quantum cryptography.',
    price: 'Starting at $12,999/month',
    features: ['Quantum key distribution (QKD)', 'Post-quantum cryptography', 'Quantum entanglement security', 'Real-time threat detection', 'Multi-node quantum network'],
    category: 'Cybersecurity',
    icon: <Shield className="w-8 h-8" />,
    color: 'from-indigo-600 to-purple-700',
    marketData: '$150B cybersecurity market, quantum segment growing 400% annually',
    competitors: 'Traditional cybersecurity (Palo Alto, CrowdStrike)',
    savings: 'First-to-market quantum internet security with no direct competitors',
    link: '/services/quantum-internet-security',
    status: 'active'
  },
  {
    id: 'enterprise-it-infrastructure',
    title: '🏢 Enterprise IT Infrastructure Management',
    description: 'Complete enterprise IT infrastructure with 99.99% uptime guarantee. Modern technology stack with AI operations.',
    price: 'Starting at $25,999/month',
    features: ['Network infrastructure management', 'Server and storage management', 'Security monitoring', '24/7 infrastructure monitoring', 'Performance optimization'],
    category: 'IT Infrastructure',
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-gray-600 to-blue-700',
    marketData: '$1.2T IT services market, 8% annual growth',
    competitors: 'IBM Global Services ($100K+), Accenture ($150K+), Deloitte ($200K+)',
    savings: 'Save 75% vs. traditional consulting with modern technology stack',
    link: '/services/enterprise-it-infrastructure',
    status: 'active'
  },
  {
    id: 'cloud-migration',
    title: '☁️ Cloud Migration & Optimization',
    description: 'Seamless cloud migration with 50% cost reduction guarantee. Fixed pricing vs. hourly consulting rates.',
    price: 'Starting at $15,999/month',
    features: ['Cloud migration planning', 'Workload assessment', 'Cost optimization', 'Performance optimization', 'Security migration'],
    category: 'Cloud Services',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-blue-600 to-cyan-700',
    marketData: '$400B cloud services market, 20% annual growth',
    competitors: 'AWS Professional Services ($200/hour), Microsoft Consulting ($250/hour)',
    savings: 'Fixed pricing vs. hourly rates, guaranteed 50% cost reduction',
    link: '/services/cloud-migration',
    status: 'active'
  },
  {
    id: 'autonomous-vehicles',
    title: '🚗 AI-Powered Autonomous Vehicles Platform',
    description: 'Complete autonomous vehicle AI platform with advanced computer vision, sensor fusion, and safety systems.',
    price: 'Starting at $55,999/month',
    features: ['Advanced computer vision', 'Sensor fusion algorithms', 'Safety systems integration', 'Real-time decision making', 'Path planning optimization'],
    category: 'Autonomous Systems',
    icon: <Rocket className="w-8 h-8" />,
    color: 'from-blue-600 to-indigo-700',
    marketData: '$100B autonomous vehicle market, 30% annual growth',
    competitors: 'Waymo ($100M+ setup), Tesla ($50M+ setup), Cruise ($75M+ setup)',
    savings: 'Save 90%+ vs. building from scratch with complete AI platform',
    link: '/services/autonomous-vehicles',
    status: 'coming-soon'
  },
  {
    id: 'biotech-drug-discovery',
    title: '🧬 AI-Powered Biotech Drug Discovery',
    description: 'AI-powered biotech drug discovery platform with molecular modeling, protein folding, and clinical trial optimization.',
    price: 'Starting at $85,999/month',
    features: ['AI molecular modeling', 'Protein folding prediction', 'Drug target identification', 'Clinical trial optimization', 'Toxicity prediction'],
    category: 'Biotechnology',
    icon: <Target className="w-8 h-8" />,
    color: 'from-green-600 to-emerald-700',
    marketData: '$50B AI drug discovery market, 40% annual growth',
    competitors: 'Insilico Medicine ($500K+ setup), Atomwise ($300K+ setup)',
    savings: 'Save 80% vs. competitors with subscription model and advanced AI',
    link: '/services/biotech-drug-discovery',
    status: 'beta'
  }
];

const categories = ['All', 'AI & Neuroscience', 'Cybersecurity', 'IT Infrastructure', 'Cloud Services', 'Autonomous Systems', 'Biotechnology'];

export const ServiceShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'active': { color: 'bg-green-100 text-green-800', text: 'Active' },
      'beta': { color: 'bg-blue-100 text-blue-800', text: 'Beta' },
      'coming-soon': { color: 'bg-yellow-100 text-yellow-800', text: 'Coming Soon' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${config.color}`}>
        {config.text}
      </span>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revolutionary Services & Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous systems solutions.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>{service.marketData}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Competitive Analysis */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Competitive Advantage</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Competitors:</strong> {service.competitors}</p>
                      <p><strong>Savings:</strong> {service.savings}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredService === service.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
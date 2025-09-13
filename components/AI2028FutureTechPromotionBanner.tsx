import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Cpu, 
  Star, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  Zap,
  Globe,
  Users
} from 'lucide-react';

interface FutureTech {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  capabilities: string[];
  impact: string;
  timeline: string;
  featured: boolean;
}

const futureTechnologies: FutureTech[] = [
  {
    id: 'quantum-ai-superintelligence',
    title: 'Quantum AI Superintelligence',
    description: 'Next-generation AI that combines quantum computing with superintelligent algorithms for unprecedented problem-solving capabilities',
    icon: Brain,
    capabilities: ['Quantum Processing', 'Superintelligent Reasoning', 'Universal Problem Solving'],
    impact: 'Transformative',
    timeline: '2028-2030',
    featured: true
  },
  {
    id: 'neural-reality-interface',
    title: 'Neural Reality Interface',
    description: 'Direct neural interface technology that allows seamless interaction between human consciousness and AI systems',
    icon: Users,
    capabilities: ['Neural Integration', 'Consciousness Interface', 'Thought Communication'],
    impact: 'Revolutionary',
    timeline: '2028-2029',
    featured: true
  },
  {
    id: 'quantum-security-network',
    title: 'Quantum Security Network',
    description: 'Impenetrable security infrastructure powered by quantum encryption and AI threat detection',
    icon: Shield,
    capabilities: ['Quantum Encryption', 'AI Threat Detection', 'Zero-Trust Architecture'],
    impact: 'Critical',
    timeline: '2028',
    featured: true
  },
  {
    id: 'autonomous-ecosystem-manager',
    title: 'Autonomous Ecosystem Manager',
    description: 'AI system that autonomously manages entire business ecosystems with predictive optimization',
    icon: Globe,
    capabilities: ['Ecosystem Management', 'Predictive Optimization', 'Autonomous Operations'],
    impact: 'Game-Changing',
    timeline: '2028-2029',
    featured: false
  },
  {
    id: 'quantum-data-synthesis',
    title: 'Quantum Data Synthesis',
    description: 'Revolutionary data processing that synthesizes information across quantum dimensions',
    icon: Cpu,
    capabilities: ['Quantum Data Processing', 'Multi-Dimensional Analysis', 'Instant Synthesis'],
    impact: 'Breakthrough',
    timeline: '2028',
    featured: false
  },
  {
    id: 'neural-predictive-engine',
    title: 'Neural Predictive Engine',
    description: 'Advanced prediction system that forecasts future scenarios with 99.99% accuracy',
    icon: Target,
    capabilities: ['Future Prediction', 'Scenario Analysis', 'Risk Assessment'],
    impact: 'Strategic',
    timeline: '2028-2029',
    featured: false
  }
];

const AI2028FutureTechPromotionBanner: React.FC = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredTech = futureTechnologies.filter(tech => tech.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('ai-2028-banner');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % featuredTech.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, featuredTech.length]);

  return (
    <section 
      id="ai-2028-banner"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
            <Rocket className="w-6 h-6 mr-3" />
            Future Technology Preview
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI 2028 Future Technologies
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Get an exclusive preview of revolutionary AI technologies coming in 2028. Be among the first to experience the future of artificial intelligence.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">2028</div>
              <div className="text-white font-semibold">Launch Year</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-1">100,000x</div>
              <div className="text-white font-semibold">Performance Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-1">99.99%</div>
              <div className="text-white font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-white font-semibold">New Technologies</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Technology Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Technology Display */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/30 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  {/* Future Badge */}
                  <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 w-fit">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Future Technology 2028
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <featuredTech[currentTech].icon className="w-20 h-20 text-purple-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {featuredTech[currentTech].title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg flex-grow">
                    {featuredTech[currentTech].description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-semibold">Key Capabilities:</h4>
                    {featuredTech[currentTech].capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timeline and Impact */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-gray-400 text-sm mb-1">Timeline</div>
                      <div className="text-yellow-400 font-bold">{featuredTech[currentTech].timeline}</div>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="text-gray-400 text-sm mb-1">Impact</div>
                      <div className="text-green-400 font-bold">{featuredTech[currentTech].impact}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/ai-2028-preview/${featuredTech[currentTech].id}`}
                    className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-purple-600 hover:to-pink-600"
                  >
                    Preview Technology
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Technology List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-8">All Future Technologies</h3>
            {futureTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`p-6 rounded-xl border transition-all cursor-pointer ${
                  currentTech === index
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/50'
                    : 'bg-white/5 border-white/20 hover:border-white/40'
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className="flex items-start space-x-4">
                  <tech.icon className="w-10 h-10 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-bold">{tech.title}</h4>
                      {tech.featured && (
                        <Star className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{tech.description}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-yellow-400 font-semibold">{tech.timeline}</span>
                      <span className="text-green-400">{tech.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Early Access Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Get Early Access to AI 2028 Technologies
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Be among the first to experience revolutionary AI technologies. Join our exclusive early access program.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Early Access</h4>
                <p className="text-gray-300">Get exclusive access to AI 2028 technologies before public release</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Expert Support</h4>
                <p className="text-gray-300">Direct access to our AI experts and implementation specialists</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Priority Implementation</h4>
                <p className="text-gray-300">Priority access to implementation resources and support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-12 border border-white/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't miss out on the AI 2028 revolution. Join our early access program and be part of the future of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/ai-2028-early-access"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:from-purple-600 hover:to-pink-600"
              >
                Join Early Access
              </Link>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:from-blue-600 hover:to-purple-600"
              >
                Schedule Preview
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AI2028FutureTechPromotionBanner;
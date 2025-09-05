import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import {_Rocket, _Brain, _Shield, _Zap, _Target, _Atom, _Cpu, _Lock, _Cloud, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Search, _Grid, _List, _TrendingUp, _User, _ShoppingCart, _Bell, _HelpCircle, _FileText, _Video, _Headphones, _Code, _Database, _Network, _Server, _Monitor, _Smartphone, _Camera, _Gamepad2, _Palette, _Music, _Film, _BookOpenCheck, _Building, _MessageCircle, _Sparkles, _ArrowRight, _CheckCircle, _Star, _Globe, _Satellite} from 'lucide-react';

const SpaceTechnologyPage: React.FC = () => {_const _spaceServices = [
    {
      id: 'space-resource-mining', _name: 'Space Resource Mining', _description: 'Advanced mining operations for extraterrestrial resources', _features: ['Asteroid Mining', _'Resource Extraction', _'Processing Automation', _'Transport Logistics'], _price: '$4, _999', _period: 'month', _popular: true, _icon: <Rocket className="w-8 h-8" />},
    {_id: 'ai-powered-space-tech', _name: 'AI-Powered Space Technology', _description: 'Intelligent space systems with autonomous capabilities', _features: ['Autonomous Navigation', _'AI Mission Control', _'Predictive Analytics', _'Real-time Optimization'], _price: '$3, _999', _period: 'month', _popular: false, _icon: <Brain className="w-8 h-8" />},
    {_id: 'brain-computer-interface', _name: 'Brain-Computer Interface', _description: 'Neural interface technology for space applications', _features: ['Neural Control', _'Cognitive Enhancement', _'Remote Operation', _'Safety Protocols'], _price: '$3, _499', _period: 'month', _popular: false, _icon: <Cpu className="w-8 h-8" />},
    {_id: 'autonomous-vehicle-ai', _name: 'Autonomous Vehicle AI', _description: 'AI-powered autonomous systems for space vehicles', _features: ['Path Planning', _'Obstacle Avoidance', _'Mission Execution', _'Adaptive Learning'], _price: '$2, _999', _period: 'month', _popular: false, _icon: <Settings className="w-8 h-8" />},
    {_id: 'quantum-space-communications', _name: 'Quantum Space Communications', _description: 'Secure quantum communication for space missions', _features: ['Quantum Encryption', _'Interplanetary Links', _'Secure Data Transfer', _'Quantum Networks'], _price: '$3, _799', _period: 'month', _popular: false, _icon: <Globe className="w-8 h-8" />},
    {_id: 'space-infrastructure', _name: 'Space Infrastructure', _description: 'Comprehensive space infrastructure solutions', _features: ['Orbital Stations', _'Lunar Bases', _'Mars Colonies', _'Sustainable Systems'], _price: '$5, _999', _period: 'month', _popular: false, _icon: <Building className="w-8 h-8" />}
  ];

  const _spaceCapabilities = [
    {_title: 'Space Exploration', _description: 'Advanced exploration technologies and systems', _icon: <Rocket className="w-6 h-6" />},
    {_title: 'Resource Extraction', _description: 'Mining and processing of space resources', _icon: <Target className="w-6 h-6" />},
    {_title: 'AI Integration', _description: 'Intelligent systems for space operations', _icon: <Brain className="w-6 h-6" />},
    {_title: 'Quantum Technology', _description: 'Quantum computing for space applications', _icon: <Atom className="w-6 h-6" />},
    {_title: 'Autonomous Systems', _description: 'Self-operating space technologies', _icon: <Settings className="w-6 h-6" />},
    {_title: 'Sustainable Development', _description: 'Eco-friendly space infrastructure', _icon: <Heart className="w-6 h-6" />}
  ];

  return (_<Layout>
      <SEO 
        title="Space Technology Solutions - Zion Tech Group"
        description="Revolutionary space technology solutions for the future. From resource mining to autonomous systems, _explore the final frontier."
        keywords="space technology, _space mining, _AI space systems, _brain-computer interface, _autonomous vehicles, _quantum space communications"
      />
      
      <main className="relative z-10">
        {_/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                Space Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of space exploration with cutting-edge technology and intelligent systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {_/* Space Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Space Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive space technology solutions for the next generation of exploration
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_spaceCapabilities.map((capability, _index) => (
                <motion.div
                  key={capability.title}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                      {_capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{_capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{_capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* Space Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Space Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of space technology solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_spaceServices.map(_(service, _index) => (
                <motion.div
                  key={service.id}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                  className={_`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700 hover:border-purple-500'}`}
                >
                  {_service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
                      {_service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{_service.name}</h3>
                    <p className="text-gray-300 mb-4">{_service.description}</p>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      {_service.price}
                      <span className="text-lg text-gray-400">/{_service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {_service.features.map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {_feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {_/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Ready to Explore Space?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the space revolution and be part of humanity's next great adventure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Space Journey
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SpaceTechnologyPage;


import React from 'react',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Rocket, Brain, Shield, Zap, Target, Atom, Cpu,
  Lock, Cloud, Settings, Eye, Award, Clock, Heart,
  Lightbulb, Search, Grid, List, TrendingUp,
  User, ShoppingCart, Bell, HelpCircle, FileText,
  Video, Headphones, Code, Database, Network, Server,
  Monitor, Smartphone, Camera, Gamepad2, Palette,
  Music, Film, BookOpenCheck, Building, MessageCircle,
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Satellite
} from 'lucide-react',
const SpaceTechnologyPage: React.FC = () => {_const _spaceServices = [
    {
      id: 'space-resource-mining',
      name: 'Space Resource Mining',
      description: 'Advanced mining operations for extraterrestrial resources',
      features: ['Asteroid MiningResource ExtractionProcessing AutomationTransport Logistics'],
      price: '$4,999',
      period: 'month',
      popular: true,
      icon: <Rocket className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'ai-powered-space-tech',
      name: 'AI-Powered Space Technology',
      description: 'Intelligent space systems with autonomous capabilities',
      features: ['Autonomous NavigationAI Mission ControlPredictive AnalyticsReal-time Optimization'],
      price: '$3,999',
      period: 'month',
      popular: false,
      icon: <Brain className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'brain-computer-interface',
      name: 'Brain-Computer Interface',
      description: 'Neural interface technology for space applications',
      features: ['Neural ControlCognitive EnhancementRemote OperationSafety Protocols'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Cpu className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'autonomous-vehicle-ai',
      name: 'Autonomous Vehicle AI',
      description: 'AI-powered autonomous systems for space vehicles',
      features: ['Path PlanningObstacle AvoidanceMission ExecutionAdaptive Learning'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <Settings className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-space-communications',
      name: 'Quantum Space Communications',
      description: 'Secure quantum communication for space missions',
      features: ['Quantum EncryptionInterplanetary LinksSecure Data TransferQuantum Networks'],
      price: '$3,799',
      period: 'month',
      popular: false,
      icon: <Globe className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'space-infrastructure',
      name: 'Space Infrastructure',
      description: 'Comprehensive space infrastructure solutions',
      features: ['Orbital StationsLunar BasesMars ColoniesSustainable Systems'],
      price: '$5,999',
      period: 'month',
      popular: false,
      icon: <Building className=&quot;w-8 h-8&quot; />
    }
  ],

  const spaceCapabilities = [
    {
      title: 'Space Exploration',
      description: 'Advanced exploration technologies and systems',
      icon: <Rocket className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Resource Extraction',
      description: 'Mining and processing of space resources',
      icon: <Target className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'AI Integration',
      description: 'Intelligent systems for space operations',
      icon: <Brain className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Technology',
      description: 'Quantum computing for space applications',
      icon: <Atom className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-operating space technologies',
      icon: <Settings className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Sustainable Development',
      description: 'Eco-friendly space infrastructure',
      icon: <Heart className=&quot;w-6 h-6&quot; />
    }
  ],
  return (_<Layout>
      <SEO 
        title=&quot;Space Technology Solutions - Zion Tech Group&quot;
        description=&quot;Revolutionary space technology solutions for the future. From resource mining to autonomous systems, explore the final frontier.&quot;
        keywords=&quot;space technology, space mining, AI space systems, brain-computer interface, autonomous vehicles, quantum space communications&quot;
      />
      
      <main className=&quot;relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;min-h-[60vh] flex items-center justify-center px-4 py-20&quot;>
          <div className=&quot;text-center max-w-4xl mx-auto&quot;>            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-600 bg-clip-text text-transparent&quot;>
                Space Technology
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Pioneering the future of space exploration with cutting-edge technology and intelligent systems
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Get Started
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Space Capabilities */}
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                Space Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive space technology solutions for the next generation of exploration
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {spaceCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-4&quot;>
                    <div className=&quot;p-2 bg-purple-500/20 rounded-lg mr-3&quot;>
                      {capability.icon}
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-white&quot;>{capability.title}</h3>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{capability.description}</p>                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Space Services */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent&quot;>
                Space Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose from our comprehensive suite of space technology solutions
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {spaceServices.map((service, index) => (                <motion.div
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
                  {service.popular && (
                    <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold&quot;>                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=&quot;text-center mb-6&quot;>
                    <div className=&quot;inline-flex p-3 bg-purple-500/20 rounded-full mb-4&quot;>
                      {service.icon}
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                    <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>
                      {service.price}
                      <span className=&quot;text-lg text-gray-400&quot;>/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className=&quot;space-y-3 mb-6&quot;>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-purple-400 mr-3 flex-shrink-0&quot; />
                        {feature}                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href=&quot;/contact&quot; 
                    className=&quot;w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-gray-900 to-black&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">                Ready to Explore Space?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join the space revolution and be part of humanity's next great adventure
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Start Your Space Journey
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
},

export default SpaceTechnologyPage,


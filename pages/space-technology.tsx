


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
const SpaceTechnologyPage: React.FC = () => {
  const spaceServices = [
    {
      id: 'space-resource-mining',
      name: 'Space Resource Mining',
      description: 'Advanced mining operations for extraterrestrial resources',
      features: ['Asteroid MiningResource ExtractionProcessing AutomationTransport Logistics'],
      price: '$4,999',
      period: 'month',
      popular: true,
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: 'ai-powered-space-tech',
      name: 'AI-Powered Space Technology',
      description: 'Intelligent space systems with autonomous capabilities',
      features: ['Autonomous NavigationAI Mission ControlPredictive AnalyticsReal-time Optimization'],
      price: '$3,999',
      period: 'month',
      popular: false,
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 'brain-computer-interface',
      name: 'Brain-Computer Interface',
      description: 'Neural interface technology for space applications',
      features: ['Neural ControlCognitive EnhancementRemote OperationSafety Protocols'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 'autonomous-vehicle-ai',
      name: 'Autonomous Vehicle AI',
      description: 'AI-powered autonomous systems for space vehicles',
      features: ['Path PlanningObstacle AvoidanceMission ExecutionAdaptive Learning'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'quantum-space-communications',
      name: 'Quantum Space Communications',
      description: 'Secure quantum communication for space missions',
      features: ['Quantum EncryptionInterplanetary LinksSecure Data TransferQuantum Networks'],
      price: '$3,799',
      period: 'month',
      popular: false,
      icon: <Globe className="w-8 h-8" />
    },
    {
      id: 'space-infrastructure',
      name: 'Space Infrastructure',
      description: 'Comprehensive space infrastructure solutions',
      features: ['Orbital StationsLunar BasesMars ColoniesSustainable Systems'],
      price: '$5,999',
      period: 'month',
      popular: false,
      icon: <Building className="w-8 h-8" />


  ],
  const spaceCapabilities = [
    {
      title: 'Space Exploration',
      description: 'Advanced exploration technologies and systems',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Resource Extraction',
      description: 'Mining and processing of space resources',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'AI Integration',
      description: 'Intelligent systems for space operations',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Quantum Technology',
      description: 'Quantum computing for space applications',
      icon: <Atom className="w-6 h-6" />
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-operating space technologies',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Sustainable Development',
      description: 'Eco-friendly space infrastructure',
      icon: <Heart className="w-6 h-6" />


  ],

  return (
    <Layout>


        title="Space Technology Solutions - Zion Tech Group"
        description="Revolutionary space technology solutions for the future. From resource mining to autonomous systems, explore the final frontier."
        keywords="space technology, space mining, AI space systems, brain-computer interface, autonomous vehicles, quantum space communications"
      />
      <main className="relative z-10">

const SpaceTechnologyPage: React.FC = () => {
  const spaceServices = [
    {
      id: 'space-resource-mining'
      name: 'Space Resource Mining'
      description: 'Advanced mining operations for extraterrestrial resources'
      features: ['Asteroid MiningResource ExtractionProcessing AutomationTransport Logistics']
      price: '$4,999'
      period: 'month'
      popular: true
      icon: <Rocket className="w-8 h-8" />
    }
    {
      id: 'ai-powered-space-tech'
      name: 'AI-Powered Space Technology'
      description: 'Intelligent space systems with autonomous capabilities'
      features: ['Autonomous NavigationAI Mission ControlPredictive AnalyticsReal-time Optimization']
      price: '$3,999'
      period: 'month'
      popular: false
      icon: <Brain className="w-8 h-8" />
    }
    {
      id: 'brain-computer-interface'
      name: 'Brain-Computer Interface'
      description: 'Neural interface technology for space applications'
      features: ['Neural ControlCognitive EnhancementRemote OperationSafety Protocols']
      price: '$3,499'
      period: 'month'
      popular: false
      icon: <Cpu className="w-8 h-8" />
    }
    {
      id: 'autonomous-vehicle-ai'
      name: 'Autonomous Vehicle AI'
      description: 'AI-powered autonomous systems for space vehicles'
      features: ['Path PlanningObstacle AvoidanceMission ExecutionAdaptive Learning']
      price: '$2,999'
      period: 'month'
      popular: false
      icon: <Settings className="w-8 h-8" />
    }
    {
      id: 'quantum-space-communications'
      name: 'Quantum Space Communications'
      description: 'Secure quantum communication for space missions'
      features: ['Quantum EncryptionInterplanetary LinksSecure Data TransferQuantum Networks']
      price: '$3,799'
      period: 'month'
      popular: false
      icon: <Globe className="w-8 h-8" />
    }
    {
      id: 'space-infrastructure'
      name: 'Space Infrastructure'
      description: 'Comprehensive space infrastructure solutions'
      features: ['Orbital StationsLunar BasesMars ColoniesSustainable Systems']
      price: '$5,999'
      period: 'month'
      popular: false
      icon: <Building className="w-8 h-8" />
    }
  ]
  const spaceCapabilities = [
    {
      title: 'Space Exploration'
      description: 'Advanced exploration technologies and systems'
      icon: <Rocket className="w-6 h-6" />
    }
    {
      title: 'Resource Extraction'
      description: 'Mining and processing of space resources'
      icon: <Target className="w-6 h-6" />
    }
    {
      title: 'AI Integration'
      description: 'Intelligent systems for space operations'
      icon: <Brain className="w-6 h-6" />
    }
    {
      title: 'Quantum Technology'
      description: 'Quantum computing for space applications'
      icon: <Atom className="w-6 h-6" />
    }
    {
      title: 'Autonomous Systems'
      description: 'Self-operating space technologies'
      icon: <Settings className="w-6 h-6" />
    }
    {
      title: 'Sustainable Development'
      description: 'Eco-friendly space infrastructure'
      icon: <Heart className="w-6 h-6" />
    }
  ]
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
  Rocket, Brain, Shield, Zap, Target, Atom, Cpu
  Lock, Cloud, Settings, Eye, Award, Clock, Heart
  Lightbulb, Search, Grid, List, TrendingUp
  User, ShoppingCart, Bell, HelpCircle, FileText
  Video, Headphones, Code, Database, Network, Server
  Monitor, Smartphone, Camera, Gamepad2, Palette
  Music, Film, BookOpenCheck, Building, MessageCircle
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Satellite
} from 'lucide-react'

        {/* Hero Section */}
        <section className="min - h-[60vh] flex items - center justify - center px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}

        {/* Hero Section */}        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                Space Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of space exploration with cutting-edge technology and intelligent systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">


                <a
                  href="/contact"



    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

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
              {spaceCapabilities.map((capability, index) => (
                <motion.div
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                    </div>;
                    <h3 className="text - xl font - semibold text - white">{capability.title}</h3>;
                  </div>;
                  <p className="text - gray - 300">{capability.description}</p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  key={capability.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
                      {capability.icon}
                      {capability.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Space Services */}
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
              {spaceServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border transition - all duration - 300 hover:scale - 105 ${
                    service.popular;
                      ? 'border - purple - 500 shadow - lg shadow - purple - 500 / 25';
                      : 'border - gray - 700 hover:border - purple - 500';
                  }`}
                  }`}                  key={service.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${;
                    service.popular;
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25';
                      : 'border-gray-700 hover:border-purple-500';
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <div className="absolute -top - 3 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - gradient - to - r from - purple - 500 to - pink - 600 text - white px - 4 py - 1 rounded - full text - sm font - semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className="text - center mb - 6">;
                    <div className="inline - flex p - 3 bg - purple - 500 / 20 rounded - full mb - 4">;
                >                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
                      {service.icon}                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-purple-500/20 rounded-full mb-4">
                      {service.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-purple-400 mb-2">

                  </ul>
                  <a 
                    href="/contact" 

                  <a
                    href="/contact"


                      <span className="text - lg text - gray - 400">/{service.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space - y-3 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - gray - 300">;
                        <CheckCircle className="w - 5 h - 5 text - purple - 400 mr - 3 flex - shrink - 0" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <a;
                    href="/contact";
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - purple - 500 to - pink - 600 text - white font - semibold rounded - lg hover:from - purple - 600 hover:to - pink - 700 transition - all duration - 300";
                  >;
                    Get Started;
                  </a>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;

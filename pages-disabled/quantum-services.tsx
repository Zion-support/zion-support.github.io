<<<<<<< HEAD
import React from 'react',
import Layout from '../components/layout/Layout',
import SEO from '../components/SEO',
import { motion } from 'framer-motion',
import { 
  Atom, Brain, Rocket, Shield, Zap, Target, Cpu, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe
} from 'lucide-react',

const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      id: 'quantum-neural-networks',
      name: 'Quantum Neural Networks',
      description: 'Next-generation neural networks powered by quantum computing',
      features: ['Quantum SuperpositionEntanglement ProcessingQuantum MemoryHybrid Classical-Quantum'],
      price: '$3,999',
      period: 'month',
      popular: true,
      icon: <Brain className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-financial-trading',
      name: 'Quantum Financial Trading',
      description: 'Quantum-powered algorithmic trading and risk management',
      features: ['Quantum Risk AssessmentPortfolio OptimizationMarket PredictionReal-time Analysis'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <TrendingUp className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-materials-discovery',
      name: 'Quantum Materials Discovery',
      description: 'Accelerated materials research using quantum simulation',
      features: ['Quantum SimulationMolecular ModelingProperty PredictionDiscovery Automation'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Atom className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-bio-computing',
      name: 'Quantum Bio-Computing',
      description: 'Quantum computing for biological and pharmaceutical research',
      features: ['Protein FoldingDrug DiscoveryGenetic AnalysisBioinformatics'],
      price: '$2,799',
      period: 'month',
      popular: false,
      icon: <Heart className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-internet-security',
      name: 'Quantum Internet Security',
      description: 'Unbreakable quantum encryption and secure communications',
      features: ['Quantum Key DistributionPost-Quantum CryptographySecure NetworksQuantum Authentication'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Shield className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'quantum-cloud-infrastructure',
      name: 'Quantum Cloud Infrastructure',
      description: 'Quantum-ready cloud computing infrastructure',
      features: ['Quantum Processing UnitsHybrid ComputingScalable ArchitecturePerformance Optimization'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Cloud className=&quot;w-8 h-8&quot; />
    }
  ],

  const quantumCapabilities = [
    {
      title: 'Quantum Computing',
      description: 'Advanced quantum processing for complex calculations',
      icon: <Atom className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems',
      icon: <Network className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
      icon: <Lock className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Machine Learning',
      description: 'AI enhanced by quantum computing power',
      icon: <Brain className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Sensing',
      description: 'Ultra-sensitive quantum measurement systems',
      icon: <Eye className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Quantum Communication',
      description: 'Secure quantum information transfer',
      icon: <Globe className=&quot;w-6 h-6&quot; />
    }
  ],

export default function QuantumServices() {
  return (
    <Layout>
      <SEO 
        title=&quot;Quantum Computing Services - Zion Tech Group&quot;
        description=&quot;Revolutionary quantum computing solutions for the future. From neural networks to financial trading, unlock quantum advantage.&quot;
        keywords=&quot;quantum computing, quantum services, quantum neural networks, quantum financial trading, quantum materials discovery&quot;
      />
      
      <main className=&quot;relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;min-h-[60vh] flex items-center justify-center px-4 py-20&quot;>
          <div className=&quot;text-center max-w-4xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent&quot;>
                Quantum Computing
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Pioneering the quantum revolution with cutting-edge computing solutions that solve previously impossible problems
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Get Started
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quantum Capabilities */}
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
=======
import React from 'react',;
import Layout from '../components/layout/Layout',;
import SEO from '../components/SEO',;
import { motion } from 'framer-motion',;
import {;
  Atom, Brain, Rocket, Shield, Zap, Target, Cpu,;
  Lock, Cloud, Settings, Eye, Award, Clock, Heart,;
  Lightbulb, Search, Grid, List, TrendingUp,;
  User, ShoppingCart, Bell, HelpCircle, FileText,;
  Video, Headphones, Code, Database, Network, Server,;
  Monitor, Smartphone, Camera, Gamepad2, Palette,;
  Music, Film, BookOpenCheck, Building, MessageCircle,;
  Sparkles, ArrowRight, CheckCircle, Star, Globe;
} from 'lucide-react',;
const QuantumServicesPage: React.FC = () => {;
  const quantumServices = [;
    {;
      id: 'quantum-neural-networks',;
      name: 'Quantum Neural Networks',;
      description: 'Next-generation neural networks powered by quantum computing',;
      features: ['Quantum SuperpositionEntanglement ProcessingQuantum MemoryHybrid Classical-Quantum'],;
      price: '$3,999',;
      period: 'month',;
      popular: true,;
      icon: <Brain className="w-8 h-8" />;
    },;
    {;
      id: 'quantum-financial-trading',;
      name: 'Quantum Financial Trading',;
      description: 'Quantum-powered algorithmic trading and risk management',;
      features: ['Quantum Risk AssessmentPortfolio OptimizationMarket PredictionReal-time Analysis'],;
      price: '$2,999',;
      period: 'month',;
      popular: false,;
      icon: <TrendingUp className="w-8 h-8" />;
    },;
    {;
      id: 'quantum-materials-discovery',;
      name: 'Quantum Materials Discovery',;
      description: 'Accelerated materials research using quantum simulation',;
      features: ['Quantum SimulationMolecular ModelingProperty PredictionDiscovery Automation'],;
      price: '$2,499',;
      period: 'month',;
      popular: false,;
      icon: <Atom className="w-8 h-8" />;
    },;
    {;
      id: 'quantum-bio-computing',;
      name: 'Quantum Bio-Computing',;
      description: 'Quantum computing for biological and pharmaceutical research',;
      features: ['Protein FoldingDrug DiscoveryGenetic AnalysisBioinformatics'],;
      price: '$2,799',;
      period: 'month',;
      popular: false,;
      icon: <Heart className="w-8 h-8" />;
    },;
    {;
      id: 'quantum-internet-security',;
      name: 'Quantum Internet Security',;
      description: 'Unbreakable quantum encryption and secure communications',;
      features: ['Quantum Key DistributionPost-Quantum CryptographySecure NetworksQuantum Authentication'],;
      price: '$1,999',;
      period: 'month',;
      popular: false,;
      icon: <Shield className="w-8 h-8" />;
    },;
    {;
      id: 'quantum-cloud-infrastructure',;
      name: 'Quantum Cloud Infrastructure',;
      description: 'Quantum-ready cloud computing infrastructure',;
      features: ['Quantum Processing UnitsHybrid ComputingScalable ArchitecturePerformance Optimization'],;
      price: '$3,499',;
      period: 'month',;
      popular: false,;
      icon: <Cloud className="w-8 h-8" />;
    }
  ],;
  const quantumCapabilities = [;
    {;
      title: 'Quantum Computing',;
      description: 'Advanced quantum processing for complex calculations',;
      icon: <Atom className="w-6 h-6" />;
    },;
    {;
      title: 'Quantum Simulation',;
      description: 'Accurate simulation of quantum systems',;
      icon: <Network className="w-6 h-6" />;
    },;
    {;
      title: 'Quantum Cryptography',;
      description: 'Unbreakable encryption using quantum principles',;
      icon: <Lock className="w-6 h-6" />;
    },;
    {;
      title: 'Quantum Machine Learning',;
      description: 'AI enhanced by quantum computing power',;
      icon: <Brain className="w-6 h-6" />;
    },;
    {;
      title: 'Quantum Sensing',;
      description: 'Ultra-sensitive quantum measurement systems',;
      icon: <Eye className="w-6 h-6" />;
    },;
    {;
      title: 'Quantum Communication',;
      description: 'Secure quantum information transfer',;
      icon: <Globe className="w-6 h-6" />;
    }
  ],;
export default function QuantumServices() {;
  return (;
    <Layout>;
      <SEO;
        title="Quantum Computing Services - Zion Tech Group";
        description="Revolutionary quantum computing solutions for the future. From neural networks to financial trading, unlock quantum advantage.";
        keywords="quantum computing, quantum services, quantum neural networks, quantum financial trading, quantum materials discovery";
      />;
      <main className="relative z-10">;
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">;
          <div className="text-center max-w-4xl mx-auto">;
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">;
                Quantum Computing;
              </h1>;
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">;
                Pioneering the quantum revolution with cutting-edge computing solutions that solve previously impossible problems;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105";
                >;
                  Get Started;
                </a>;
                <a;
                  href="/contact";
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105";
                >;
                  Schedule Demo;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Quantum Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">;
          <div className="max-w-6xl mx-auto">;
            <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Quantum Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Harness the power of quantum mechanics for revolutionary computing solutions
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {quantumCapabilities.map((capability, index) => (
                <motion.div
=======
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Quantum Capabilities;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Harness the power of quantum mechanics for revolutionary computing solutions;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {quantumCapabilities.map((capability, index) => (;
                <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className=&quot;bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-4&quot;>
                    <div className=&quot;p-2 bg-blue-500/20 rounded-lg mr-3&quot;>
                      {capability.icon}
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-white&quot;>{capability.title}</h3>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{capability.description}</p>
                </motion.div>
=======
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300";
                >;
                  <div className="flex items-center mb-4">;
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">;
                      {capability.icon}
                    </div>;
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>;
                  </div>;
                  <p className="text-gray-300">{capability.description}</p>;
                </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              ))}
            </div>;
          </div>;
        </section>;
        {/* Quantum Services */}
<<<<<<< HEAD
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
=======
        <section className="py-20 px-4">;
          <div className="max-w-6xl mx-auto">;
            <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
                Quantum Services
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose from our comprehensive suite of quantum-powered solutions
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {quantumServices.map((service, index) => (
                <motion.div
=======
              className="text-center mb-16";
            >;
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Quantum Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Choose from our comprehensive suite of quantum-powered solutions;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {quantumServices.map((service, index) => (;
                <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${;
                    service.popular;
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25';
                      : 'border-gray-700 hover:border-blue-500';
                  }`}
<<<<<<< HEAD
                >
                  {service.popular && (
                    <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold&quot;>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=&quot;text-center mb-6&quot;>
                    <div className=&quot;inline-flex p-3 bg-blue-500/20 rounded-full mb-4&quot;>
                      {service.icon}
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                    <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>
                      {service.price}
                      <span className=&quot;text-lg text-gray-400&quot;>/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className=&quot;space-y-3 mb-6&quot;>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-blue-400 mr-3 flex-shrink-0&quot; />
=======
                >;
                  {service.popular && (;
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">;
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>;
                  )}
;
                  <div className="text-center mb-6">;
                    <div className="inline-flex p-3 bg-blue-500/20 rounded-full mb-4">;
                      {service.icon}
                    </div>;
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>;
                    <p className="text-gray-300 mb-4">{service.description}</p>;
                    <div className="text-3xl font-bold text-blue-400 mb-2">;
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space-y-3 mb-6">;
                    {service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-gray-300">;
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                        {feature}
                      </li>;
                    ))}
<<<<<<< HEAD
                  </ul>
                  
                  <a 
                    href=&quot;/contact&quot; 
                    className=&quot;w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                </motion.div>
=======
                  </ul>;
                  <a;
                    href="/contact";
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300";
                  >;
                    Get Started;
                  </a>;
                </motion.div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              ))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
<<<<<<< HEAD
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-gray-900 to-black&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
=======
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
            >
<<<<<<< HEAD
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
=======
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Ready for the Quantum Future?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Join the quantum revolution and solve problems that were previously impossible with classical computing
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Start Your Quantum Journey
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
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

export default QuantumServicesPage,
=======
            >;
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Ready for the Quantum Future?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Join the quantum revolution and solve problems that were previously impossible with classical computing;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a;
                  href="/contact";
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105";
                >;
                  Start Your Quantum Journey;
                </a>;
                <a;
                  href="/contact";
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105";
                >;
                  Schedule Consultation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>;
  );
};
export default QuantumServicesPage;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094

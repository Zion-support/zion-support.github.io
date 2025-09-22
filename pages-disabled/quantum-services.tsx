<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import SEO from '../components/SEO';

import {motion} from 'framer-motion';
import {Atom, Brain, Rocket, Shield, Zap, Target, Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb, Search, Grid, List, TrendingUp, User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2, Palette, Music, Film, BookOpenCheck, Building, MessageCircle, Sparkles, ArrowRight, CheckCircle, Star, Globe} from 'lucide-react';
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
            </div>;
          </div>;
        </section>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const QuantumServicesPage: React.FC = () => {
  const quantumServices = [
    {
      <SEO
        title="Quantum Computing Services - Zion Tech Group"
        description="Revolutionary quantum computing solutions for the future. From neural networks to financial trading, unlock quantum advantage."
        keywords="quantum computing, quantum services, quantum neural networks, quantum financial trading, quantum materials discovery"
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
        {/* Quantum Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* Quantum Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
<<<<<<< HEAD
<<<<<<< HEAD

=======
                    service.popular
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25'
                    service.popular 
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                      : 'border-gray-700 hover:border-blue-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

      id: 'quantum - neural - networks',
      name: 'Quantum Neural Networks',
      description: 'Next - generation neural networks powered by quantum computing',
      features: ['Quantum SuperpositionEntanglement ProcessingQuantum MemoryHybrid Classical - Quantum'],
      price: '$3, 999';
      period: 'month',
      popular: true,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Brain className="w - 8 h - 8" />;
=======
      icon: <Brain className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Brain className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      id: 'quantum - financial - trading',
      name: 'Quantum Financial Trading',
      description: 'Quantum - powered algorithmic trading and risk management',
      features: ['Quantum Risk AssessmentPortfolio OptimizationMarket PredictionReal - time Analysis'],
      price: '$2, 999';
      period: 'month',
      popular: false,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <TrendingUp className="w - 8 h - 8" />;
=======
      icon: <TrendingUp className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <TrendingUp className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      id: 'quantum - materials - discovery',
      name: 'Quantum Materials Discovery',
      description: 'Accelerated materials research using quantum simulation',
      features: ['Quantum SimulationMolecular ModelingProperty PredictionDiscovery Automation'],
      price: '$2, 499';
      period: 'month',
      popular: false,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Atom className="w - 8 h - 8" />;
=======
      icon: <Atom className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Atom className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      id: 'quantum - bio - computing',
      name: 'Quantum Bio - Computing',
      description: 'Quantum computing for biological and pharmaceutical research',
      features: ['Protein FoldingDrug DiscoveryGenetic AnalysisBioinformatics'],
      price: '$2, 799';
      period: 'month',
      popular: false,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Heart className="w - 8 h - 8" />;
=======
      icon: <Heart className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Heart className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      id: 'quantum - internet - security',
      name: 'Quantum Internet Security',
      description: 'Unbreakable quantum encryption and secure communications',
      features: ['Quantum Key DistributionPost - Quantum CryptographySecure NetworksQuantum Authentication'],
      price: '$1, 999';
      period: 'month',
      popular: false,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Shield className="w - 8 h - 8" />;
=======
      icon: <Shield className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Shield className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      id: 'quantum - cloud - infrastructure',
      name: 'Quantum Cloud Infrastructure',
      description: 'Quantum - ready cloud computing infrastructure',
      features: ['Quantum Processing UnitsHybrid ComputingScalable ArchitecturePerformance Optimization'],
      price: '$3, 499';
      period: 'month',
      popular: false,
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Cloud className="w - 8 h - 8" />;
=======
      icon: <Cloud className="w - 8 h-8" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Cloud className="w - 8 h-8" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  ];
;
  const quantum_capabilities = [;
    {
      title: 'Quantum Computing',
      description: 'Advanced quantum processing for complex calculations',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Atom className="w - 6 h - 6" />;
=======
      icon: <Atom className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Atom className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Network className="w - 6 h - 6" />;
=======
      icon: <Network className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Network className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum principles',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Lock className="w - 6 h - 6" />;
=======
      icon: <Lock className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Lock className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      title: 'Quantum Machine Learning',
      description: 'AI enhanced by quantum computing power',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Brain className="w - 6 h - 6" />;
=======
      icon: <Brain className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Brain className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      title: 'Quantum Sensing',
      description: 'Ultra - sensitive quantum measurement systems',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Eye className="w - 6 h - 6" />;
=======
      icon: <Eye className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Eye className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
    {
      title: 'Quantum Communication',
      description: 'Secure quantum information transfer',
<<<<<<< HEAD
<<<<<<< HEAD
      icon: <Globe className="w - 6 h - 6" />;
=======
      icon: <Globe className="w - 6 h-6" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      icon: <Globe className="w - 6 h-6" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  ];
;
export default /**
 * QuantumServices - Function description
 */
function QuantumServices() {
  return (
    <Layout>;
      <SEO;
        title="Quantum Computing Services - Zion Tech Group";
        description="Revolutionary quantum computing solutions for the future. From neural networks to financial trading, unlock quantum advantage.";
        keywords="quantum computing, quantum services, quantum neural networks, quantum financial trading, quantum materials discovery";
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <main className="relative z - 10">;
        {/* Hero Section */}
        <section className="min - h-[60vh] flex items - center justify - center px - 4 py - 20">;
          <div className="text - center max - w-4xl mx - auto">;
=======
      <main className="relative z-10">;
        {/* Hero Section */}
        <section className="min - h-[60vh] flex items - center justify - center px - 4 py-20">;
          <div className="text - center max - w-4xl mx-auto">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <main className="relative z-10">;
        {/* Hero Section */}
        <section className="min - h-[60vh] flex items - center justify - center px - 4 py-20">;
          <div className="text - center max - w-4xl mx-auto">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
<<<<<<< HEAD
<<<<<<< HEAD
              <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 500 to - cyan - 600 bg - clip - text text - transparent">;
=======
              <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 500 to - cyan - 600 bg - clip - text text-transparent">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Quantum Computing;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx-auto">;
                Pioneering the quantum revolution with cutting - edge computing solutions that solve previously impossible problems;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify-center">;
                <a;
                  href="/contact";
<<<<<<< HEAD
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
=======
              <h1 className="text - 5xl md:text - 7xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 via - purple - 500 to - cyan - 600 bg - clip - text text-transparent">;
                Quantum Computing;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx-auto">;
                Pioneering the quantum revolution with cutting - edge computing solutions that solve previously impossible problems;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify-center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  Get Started;
                </a>;
                <a;
                  href="/contact";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
=======
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  Schedule Demo;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Quantum Capabilities */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py - 20 px - 4 bg - gradient - to - b from - black to - gray - 900">;
          <div className="max - w-6xl mx - auto">;
=======
        <section className="py - 20 px - 4 bg - gradient - to - b from - black to - gray-900">;
          <div className="max - w-6xl mx-auto">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <section className="py - 20 px - 4 bg - gradient - to - b from - black to - gray-900">;
          <div className="max - w-6xl mx-auto">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - center mb - 16";
=======
              className="text - center mb-16";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
                Quantum Capabilities;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx-auto">;
                Harness the power of quantum mechanics for revolutionary computing solutions;
              </p>;
            </motion.div>;
<<<<<<< HEAD
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
=======
              className="text - center mb-16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
                Quantum Capabilities;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx-auto">;
                Harness the power of quantum mechanics for revolutionary computing solutions;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {quantum_capabilities.map ((capability, index) => (
                <motion.div;
                  key={capability.title}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className="bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border border - gray - 700 hover:border - blue - 500 transition - all duration - 300";
=======
                  className="bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border border - gray - 700 hover:border - blue - 500 transition - all duration-300";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  <div className="flex items - center mb-4">;
                    <div className="p - 2 bg - blue - 500 / 20 rounded - lg mr-3">;
                      {capability.icon}
                    </div>;
                    <h3 className="text - xl font - semibold text-white">{capability.title}</h3>;
                  </div>;
<<<<<<< HEAD
                  <p className="text - gray - 300">{capability.description}</p>;
=======
                  className="bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border border - gray - 700 hover:border - blue - 500 transition - all duration-300";
                >;
                  <div className="flex items - center mb-4">;
                    <div className="p - 2 bg - blue - 500 / 20 rounded - lg mr-3">;
                      {capability.icon}
                    </div>;
                    <h3 className="text - xl font - semibold text-white">{capability.title}</h3>;
                  </div>;
                  <p className="text - gray-300">{capability.description}</p>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  <p className="text - gray-300">{capability.description}</p>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Quantum Services */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py - 20 px - 4">;
          <div className="max - w-6xl mx - auto">;
=======
        <section className="py - 20 px-4">;
          <div className="max - w-6xl mx-auto">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <section className="py - 20 px-4">;
          <div className="max - w-6xl mx-auto">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
              className="text - center mb - 16";
=======
              className="text - center mb-16";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
                Quantum Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx-auto">;
                Choose from our comprehensive suite of quantum - powered solutions;
              </p>;
            </motion.div>;
<<<<<<< HEAD
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
=======
              className="text - center mb-16";
            >;
              <h2 className="text - 4xl md:text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
                Quantum Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx-auto">;
                Choose from our comprehensive suite of quantum - powered solutions;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              {quantum_services.map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg - gradient - to - br from - gray - 800 to - gray - 900 p - 6 rounded - xl border transition - all duration - 300 hover:scale - 105 ${
                    service.popular;
                      ? 'border - blue - 500 shadow - lg shadow - blue - 500 / 25';
                      : 'border - gray - 700 hover:border - blue - 500';
                  }`}
                >;
                  {service.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="absolute -top - 3 left - 1/2 transform -translate - x-1 / 2">;
                      <span className="bg - gradient - to - r from - blue - 500 to - purple - 600 text - white px - 4 py - 1 rounded - full text - sm font - semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className="text - center mb - 6">;
                    <div className="inline - flex p - 3 bg - blue - 500 / 20 rounded - full mb - 4">;
=======
                    <div className="absolute -top - 3 left - 1/2 transform -translate-x-1 / 2">;
                      <span className="bg - gradient - to - r from - blue - 500 to - purple - 600 text - white px - 4 py - 1 rounded - full text - sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className="text - center mb-6">;
                    <div className="inline - flex p - 3 bg - blue - 500 / 20 rounded - full mb-4">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    <div className="absolute -top - 3 left - 1/2 transform -translate-x-1 / 2">;
                      <span className="bg - gradient - to - r from - blue - 500 to - purple - 600 text - white px - 4 py - 1 rounded - full text - sm font-semibold">;
                        Most Popular;
                      </span>;
                    </div>)}
                  <div className="text - center mb-6">;
                    <div className="inline - flex p - 3 bg - blue - 500 / 20 rounded - full mb-4">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

                      {service.icon}
                        {feature}
                      </li>
                    ))}

<<<<<<< HEAD
<<<<<<< HEAD
                  </ul>
                  <a
                    href="/contact"
                  <a 
                    href="/contact" 
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                  <a 
                    href="/contact" 

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
                  <a 
                    href="/contact" 

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

<<<<<<< HEAD
<<<<<<< HEAD
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className="text-4xl md: text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">;
                Ready for the Quantum Future?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
                Join the quantum revolution and solve problems that were previously impossible with classical computing;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">;
                  Start Your Quantum Journey;
                </a>;
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
=======
  );
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
import React from 'react';
                      <span className="text - lg text - gray-400">/{service.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space - y-3 mb-6">;
                    {service.features.map ((feature, feature_index) => (
<<<<<<< HEAD
                      <li key={feature_index} className="flex items - center text - gray - 300">;
                        <CheckCircle className="w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink - 0" />;
=======
}
import React from 'react';
                      <span className="text - lg text - gray-400">/{service.period}</span>;
                    </div>;
                  </div>;
                  <ul className="space - y-3 mb-6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - gray-300">;
                        <CheckCircle className="w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink-0" />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      <li key={feature_index} className="flex items - center text - gray-300">;
                        <CheckCircle className="w - 5 h - 5 text - blue - 400 mr - 3 flex - shrink-0" />;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                        {feature}
                      </li>))}
                  </ul>;
                  <a;
                    href="/contact";
<<<<<<< HEAD
<<<<<<< HEAD
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300";
=======
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration-300";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                    className="w - full block text - center px - 6 py - 3 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration-300";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >;
                    Get Started;
                  </a>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py - 20 px - 4 bg - gradient - to - b from - gray - 900 to - black">;
          <div className="max - w-4xl mx - auto text - center">;
=======
        <section className="py - 20 px - 4 bg - gradient - to - b from - gray - 900 to-black">;
          <div className="max - w-4xl mx - auto text-center">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <section className="py - 20 px - 4 bg - gradient - to - b from - gray - 900 to-black">;
          <div className="max - w-4xl mx - auto text-center">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text - transparent">;
=======
              <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                Ready for the Quantum Future?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx-auto">;
                Join the quantum revolution and solve problems that were previously impossible with classical computing;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify-center">;
                <a;
                  href="/contact";
<<<<<<< HEAD
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105";
=======
              <h2 className="text - 4xl md: text - 5xl font - bold mb - 6 bg - gradient - to - r from - blue - 400 to - purple - 500 bg - clip - text text-transparent">;
                Ready for the Quantum Future?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx-auto">;
                Join the quantum revolution and solve problems that were previously impossible with classical computing;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify-center">;
                <a;
                  href="/contact";
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="px - 8 py - 4 bg - gradient - to - r from - blue - 500 to - purple - 600 text - white font - semibold rounded - lg hover:from - blue - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  Start Your Quantum Journey;
                </a>;
                <a;
                  href="/contact";
<<<<<<< HEAD
<<<<<<< HEAD
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale - 105";
=======
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                  className="px - 8 py - 4 border - 2 border - blue - 400 text - blue - 400 font - semibold rounded - lg hover:bg - blue - 400 hover:text - black transition - all duration - 300 transform hover:scale-105";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                >;
                  Schedule Consultation;
                </a>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
    </Layout>);
}
;
export default QuantumServicesPage;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  )
}
export default QuantumServicesPage;

export default QuantumServicesPage;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

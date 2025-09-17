import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Zap, Globe, Target, Users, TrendingUp, Brain, Atom, Database, Cloud } from 'lucide-react';

const AdvancedTechSolutions2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Cpu className="w-5 h-5" />
            Advanced Tech Solutions 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next-Generation Technology Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the cutting-edge technologies that will define the next decade of business innovation
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg">
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Revolutionary Technologies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Revolutionary Technologies</h2>
            <p className="text-xl text-gray-300">Breakthrough innovations that are reshaping industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Automation</h3>
              <p className="text-gray-300 mb-6">
                Intelligent automation systems that learn, adapt, and optimize business processes in real-time.
              </p>
              <div className="flex items-center text-green-400 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cybersecurity Fortress</h3>
              <p className="text-gray-300 mb-6">
                Advanced security solutions with AI-driven threat detection and quantum-resistant encryption.
              </p>
              <div className="flex items-center text-blue-400 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions with edge computing and distributed processing capabilities.
              </p>
              <div className="flex items-center text-purple-400 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-green-500/20">
          <h2 className="text-4xl font-bold text-center mb-12">Comprehensive Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">Advanced neural networks and deep learning algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">Quantum algorithms and quantum machine learning</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Big Data Analytics</h3>
              <p className="text-gray-300 text-sm">Real-time data processing and predictive analytics</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
              <p className="text-gray-300 text-sm">Distributed processing at the network edge</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl p-12 border border-green-500/20">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies that have already transformed their operations with our advanced technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/ai-revolutionary-breakthrough-2026" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdvancedTechSolutions2026;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

const AIInnovationHub2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            AI Innovation Hub 2027
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the future of artificial intelligence with cutting-edge innovations, 
            breakthrough technologies, and revolutionary solutions that are transforming industries worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/ai-innovation-lab" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              Explore Lab <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/ai-solutions" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              View Solutions <Brain className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Neural Networks 2.0</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Next-generation neural architectures that process information 1000x faster than traditional models.
            </p>
            <Link to="/neural-networks-2" className="text-blue-400 hover:text-blue-300 flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Quantum AI Processing</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionary quantum computing integration for unprecedented AI capabilities and speed.
            </p>
            <Link to="/quantum-ai" className="text-blue-400 hover:text-blue-300 flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Predictive Analytics</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced predictive models that forecast trends with 99.7% accuracy across multiple industries.
            </p>
            <Link to="/predictive-analytics" className="text-blue-400 hover:text-blue-300 flex items-center">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-white font-semibold">500% ROI Increase</span>
              </div>
              <p className="text-gray-300">
                Fortune 500 companies report average 500% ROI within 6 months of implementing our AI solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <span className="text-white font-semibold">10M+ Users Impacted</span>
              </div>
              <p className="text-gray-300">
                Our AI innovations have directly improved the lives of over 10 million users worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-white font-semibold">99.9% Uptime</span>
              </div>
              <p className="text-gray-300">
                Enterprise-grade reliability with 99.9% uptime across all our AI services and platforms.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Globe className="w-6 h-6 text-orange-400 mr-3" />
                <span className="text-white font-semibold">50+ Countries</span>
              </div>
              <p className="text-gray-300">
                Our AI solutions are deployed across 50+ countries, powering global digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI innovations to drive growth, 
            efficiency, and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2027;
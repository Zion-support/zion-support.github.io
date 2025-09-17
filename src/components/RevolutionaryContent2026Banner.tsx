import { ArrowRight, BookOpen, Brain, DollarSign, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const RevolutionaryContent2026Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Star className="h-10 w-10 text-yellow-400 mr-4 animate-spin" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Content 2026
            </h2>
            <Star className="h-10 w-10 text-yellow-400 ml-4 animate-spin" />
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto leading-relaxed">
            Experience the future of technology through our groundbreaking content covering 
            the most advanced AI innovations, sustainable solutions, and transformative breakthroughs
          </p>
        </div>

        {/* Content categories showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <Brain className="h-12 w-12 text-purple-400 mr-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold">AI Innovation Hub</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Discover cutting-edge AI technologies that are reshaping industries and transforming the way we work, live, and interact.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Consciousness AI</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Quantum Computing</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Neural Interfaces</span>
              </div>
              <Link 
                to="/ai-innovation-hub-2026" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Explore AI Innovations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <Heart className="h-12 w-12 text-red-400 mr-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold">Healthcare Revolution</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Revolutionary AI healthcare solutions that detect diseases years in advance and provide personalized treatment recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Early Detection</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">AI Diagnosis</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Personalized Care</span>
              </div>
              <Link 
                to="/blog/ai-driven-healthcare-breakthrough-early-disease-detection" 
                className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Learn About Healthcare AI <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <DollarSign className="h-12 w-12 text-green-400 mr-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold">Financial AI</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                Advanced AI investment platforms delivering 300% better returns through intelligent market analysis and automated optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Smart Investing</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Risk Management</span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Portfolio AI</span>
              </div>
              <Link 
                to="/blog/financial-ai-revolution-smart-investment-strategies" 
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Discover Financial AI <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group">
              <div className="flex items-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-400 mr-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold">Education Revolution</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">
                AI-powered personalized learning platforms that adapt to each student's needs, improving performance by 400%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Personalized Learning</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">AI Tutoring</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Adaptive Education</span>
              </div>
              <Link 
                to="/blog/ai-powered-education-personalized-learning-revolution" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-2 transition-transform"
              >
                Explore Education AI <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Ready to Transform Your Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking organizations already leveraging our revolutionary AI solutions 
            to achieve unprecedented success and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="group bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Explore All Content
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/contact"
              className="group border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContent2026Banner;
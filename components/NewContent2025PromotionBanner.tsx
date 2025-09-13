import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Users, ArrowRight, Calendar, Clock } from 'lucide-react';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%253Csvg%20width%3D'60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 mb-8">
            <Calendar className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">New Content January 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Revolutionary Content
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              For the AI Future
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our latest collection of cutting-edge content covering AI automation, 
            quantum computing, neural networks, and real-world success stories that are 
            shaping the future of business technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/blog"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <BookOpen className="w-6 h-6 mr-3" />
              Explore All Content
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/case-studies"
              className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-300 hover:text-white font-bold rounded-xl transition-all duration-300"
            >
              <TrendingUp className="w-6 h-6 mr-3" />
              View Success Stories
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Content categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Next-generation business automation solutions transforming operations.
            </p>
            <div className="flex items-center text-blue-400 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Business applications of quantum computing revolutionizing industries.
            </p>
            <div className="flex items-center text-purple-400 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              <span>10 min read</span>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Neural Computing</h3>
            <p className="text-gray-300 mb-6">
              The 2026 neural computing revolution transforming business operations.
            </p>
            <div className="flex items-center text-indigo-400 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Real-world case studies of AI transformation achieving 300% ROI.
            </p>
            <div className="flex items-center text-green-400 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>
        </div>

        {/* Featured articles */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-blue-400 text-sm font-medium mb-1">Featured Article</div>
                <h3 className="text-xl font-bold text-white">AI 2025: Next-Generation Business Automation</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover how next-generation AI automation is revolutionizing business operations in 2025, 
              delivering unprecedented efficiency and competitive advantages.
            </p>
            <Link 
              to="/blog/ai-2025-next-generation-business-automation"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-green-400 text-sm font-medium mb-1">Success Story</div>
                <h3 className="text-xl font-bold text-white">Enterprise AI Transformation: 300% ROI</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Discover how a Fortune 500 company achieved remarkable success through comprehensive 
              AI transformation, resulting in 300% ROI and industry-leading efficiency.
            </p>
            <Link 
              to="/case-studies/enterprise-ai-transformation-2025-success"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking companies already leveraging our AI solutions 
            to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-purple-400 hover:bg-purple-400/10 text-purple-300 hover:text-white font-bold rounded-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;
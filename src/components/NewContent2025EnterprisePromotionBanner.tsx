import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap, Award, BookOpen, FileText, Target } from 'lucide-react';

const NewContent2025EnterprisePromotionBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-indigo-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            New Content Release - January 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Enterprise
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI implementation strategies, quantum computing applications, and proven enterprise transformation methodologies that are reshaping industries in 2025.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Enterprise Automation Blog */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-blue-300 font-medium">Blog Post</span>
                <span className="block text-xs text-gray-400">12 min read</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              AI 2025: Enterprise Automation Revolution
            </h3>
            
            <p className="text-gray-300 mb-6">
              Learn how AI automation is revolutionizing enterprise operations with 45% downtime reduction, 30% efficiency gains, and $2.3M annual savings.
            </p>
            
            <Link 
              to="/blog/ai-2025-enterprise-automation-revolution"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum Computing Applications Blog */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-purple-300 font-medium">Blog Post</span>
                <span className="block text-xs text-gray-400">15 min read</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              Quantum Computing Business Applications
            </h3>
            
            <p className="text-gray-300 mb-6">
              Explore how quantum computing is transforming industries with exponential speed increases, enhanced security, and revolutionary problem-solving capabilities.
            </p>
            
            <Link 
              to="/blog/quantum-computing-business-applications-2025"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Enterprise Transformation Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-green-300 font-medium">Case Study</span>
                <span className="block text-xs text-gray-400">18 min read</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
              $50M Enterprise AI Success Story
            </h3>
            
            <p className="text-gray-300 mb-6">
              Discover how a Fortune 500 company achieved $50M annual savings and 300% productivity improvements through comprehensive AI transformation.
            </p>
            
            <Link 
              to="/case-studies/enterprise-ai-transformation-success-story"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all"
            >
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Master Guide Highlight */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-sm text-yellow-300 font-medium">Implementation Guide</span>
                  <span className="block text-xs text-gray-400">25 min read</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                AI Implementation Master Guide 2025
              </h3>
              
              <p className="text-xl text-gray-300 mb-6">
                The definitive roadmap to successful AI implementation. Learn proven strategies, best practices, and step-by-step methodologies that deliver measurable results.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-blue-400" />
                  Complete Roadmap
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FileText className="w-4 h-4 mr-2 text-green-400" />
                  Best Practices
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <Target className="w-4 h-4 mr-2 text-purple-400" />
                  ROI Strategies
                </div>
              </div>
              
              <Link 
                to="/resources/ai-implementation-master-guide-2025"
                className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105"
              >
                Download Master Guide <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
                  <div className="text-white font-bold text-lg">Master Guide</div>
                  <div className="text-yellow-300 text-sm">2025 Edition</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your enterprise with cutting-edge AI solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Explore AI Services
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025EnterprisePromotionBanner;
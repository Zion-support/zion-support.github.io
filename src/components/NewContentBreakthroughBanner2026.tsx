import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

const NewContentBreakthroughBanner2026 = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233B82F6" fill-opacity="0.1"%3E%3Cpath d="M40 40c0-22.091-17.909-40-40-40v80c22.091 0 40-17.909 40-40z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-lg font-bold rounded-full mb-8 animate-pulse">
            <Star className="h-5 w-5 mr-2" />
            BREAKTHROUGH CONTENT 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AI Breakthroughs
            </span>
            Now Available
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto">
            Experience the most advanced AI technologies ever created. From quantum computing 
            to conscious AI systems - discover innovations that will revolutionize your business.
          </p>
        </div>

        {/* Breakthrough Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "Conscious AI",
              description: "AI with genuine consciousness and emotional intelligence",
              metric: "True Consciousness",
              color: "from-blue-500 to-cyan-500"
            },
            {
              icon: Zap,
              title: "Quantum Speed",
              description: "10,000x faster processing with quantum computing",
              metric: "10,000x Faster",
              color: "from-indigo-500 to-purple-500"
            },
            {
              icon: Target,
              title: "Perfect Accuracy",
              description: "99.9% accuracy in all predictions and decisions",
              metric: "99.9% Accuracy",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Shield,
              title: "Unbreakable Security",
              description: "Quantum encryption that cannot be hacked",
              metric: "Unbreakable",
              color: "from-yellow-500 to-orange-500"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {feature.metric}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "AI 2026 Ultimate Innovation Hub",
              description: "Comprehensive showcase of the most advanced AI technologies and breakthrough innovations that will transform your business",
              features: [
                "Conscious AI Systems with genuine self-awareness",
                "Quantum Neural Networks for instant processing",
                "Autonomous Operations with zero human intervention",
                "Predictive Analytics with 99.9% accuracy"
              ],
              link: "/ai-2026-ultimate-innovation-hub",
              image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
              gradient: "from-blue-500 to-indigo-500",
              badge: "Ultimate Innovation"
            },
            {
              title: "Quantum AI Revolution 2026",
              description: "Experience the power of quantum computing combined with artificial intelligence for unprecedented capabilities",
              features: [
                "Quantum Processing 10,000x faster than classical",
                "Instant Learning from massive datasets",
                "Perfect Optimization for complex problems",
                "Quantum Security with unbreakable encryption"
              ],
              link: "/quantum-ai-revolution-2026",
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
              gradient: "from-indigo-500 to-purple-500",
              badge: "Quantum Revolution"
            }
          ].map((content, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 bg-gradient-to-r ${content.gradient} text-white text-sm font-bold rounded-full`}>
                    {content.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {content.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {content.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={content.link}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group-hover:scale-105"
                >
                  Explore Breakthrough
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Advanced AI Consciousness 2026",
              description: "AI systems with genuine consciousness and emotional intelligence",
              link: "/advanced-ai-consciousness-2026",
              icon: Brain,
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Autonomous Business Operations",
              description: "Complete business automation with self-managing AI systems",
              link: "/autonomous-business-operations-2026",
              icon: Target,
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Quantum Computing Guide 2026",
              description: "Master quantum computing and its revolutionary applications",
              link: "/quantum-computing-guide-2026",
              icon: Zap,
              color: "from-purple-500 to-pink-500"
            }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-center text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                Discover More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl p-12">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for the AI Revolution?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Join the future of artificial intelligence. Experience breakthrough technologies 
            that will transform your business and give you unprecedented competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2026-ultimate-innovation-hub"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentBreakthroughBanner2026;
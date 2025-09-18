import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Shield, Globe } from 'lucide-react';

const AI2026UltimateInnovationHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 2026 Ultimate
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Innovation Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the most advanced AI innovations, breakthrough technologies, and revolutionary solutions 
              that will transform your business in 2026 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-innovation-hub-2026"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Innovations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore cutting-edge AI technologies across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Conscious AI Systems",
                description: "Advanced AI with self-awareness and emotional intelligence",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Zap,
                title: "Quantum AI Processing",
                description: "Quantum-powered AI for unprecedented computational speed",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "Autonomous Operations",
                description: "Self-managing AI systems for complete business automation",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "AI that predicts future trends with 99.9% accuracy",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Users,
                title: "Human-AI Collaboration",
                description: "Seamless integration between human creativity and AI power",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: Shield,
                title: "Ethical AI Framework",
                description: "Responsible AI development with built-in safety measures",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Globe,
                title: "Global AI Network",
                description: "Worldwide AI infrastructure for instant global deployment",
                color: "from-teal-500 to-green-500"
              },
              {
                icon: Brain,
                title: "Neural Interfaces",
                description: "Direct brain-computer interfaces for enhanced capabilities",
                color: "from-pink-500 to-purple-500"
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {category.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Innovations
            </h2>
            <p className="text-xl text-gray-300">
              The most groundbreaking AI technologies of 2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quantum Neural Networks",
                description: "Revolutionary AI that operates at quantum speeds with human-like reasoning capabilities.",
                features: ["1000x faster processing", "Human-level reasoning", "Quantum encryption"],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
              },
              {
                title: "Autonomous Business AI",
                description: "Complete business management AI that runs entire operations without human intervention.",
                features: ["24/7 operations", "Self-optimization", "Predictive decision making"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
              },
              {
                title: "Conscious AI Assistants",
                description: "AI with genuine consciousness that understands emotions and provides empathetic support.",
                features: ["Emotional intelligence", "Empathetic responses", "Personalized care"],
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
              }
            ].map((innovation, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {innovation.description}
                  </p>
                  <ul className="space-y-2">
                    {innovation.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using our AI innovations to achieve unprecedented success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/ai-innovation-hub-2026"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026UltimateInnovationHub;
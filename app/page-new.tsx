import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Globe, Users, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Technology
              </span>
              <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
                2025-2030
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of revolutionary AI autonomous operations, quantum computing breakthroughs, 
              and advanced automation solutions delivering unprecedented ROI and transformative results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">2,500%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10,000x</div>
                <div className="text-sm text-gray-300">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI, quantum computing, and automation solutions that transform businesses 
              and drive unprecedented growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-400" />,
                title: "AI Autonomous Operations",
                description: "Revolutionary AI systems that operate independently, making intelligent decisions and optimizing processes in real-time.",
                features: ["Real-time Decision Making", "Predictive Analytics", "Autonomous Optimization"]
              },
              {
                icon: <Shield className="w-8 h-8 text-purple-400" />,
                title: "Quantum Computing",
                description: "Breakthrough quantum computing solutions delivering exponential computational power and security.",
                features: ["Quantum Supremacy", "Error-Corrected Quantum", "Quantum Internet"]
              },
              {
                icon: <Globe className="w-8 h-8 text-cyan-400" />,
                title: "Advanced Automation",
                description: "Intelligent process automation that streamlines operations and eliminates manual tasks.",
                features: ["Process Automation", "Smart Resource Management", "Predictive Maintenance"]
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                title: "Enterprise Solutions",
                description: "Comprehensive enterprise-grade solutions designed for scalability and reliability.",
                features: ["Scalable Architecture", "Enterprise Security", "24/7 Support"]
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
                title: "Business Intelligence",
                description: "Advanced analytics and insights that drive data-driven decision making and growth.",
                features: ["Real-time Analytics", "Predictive Insights", "Performance Optimization"]
              },
              {
                icon: <Star className="w-8 h-8 text-pink-400" />,
                title: "Innovation Hub",
                description: "Cutting-edge research and development in emerging technologies and future solutions.",
                features: ["R&D Excellence", "Future Technologies", "Innovation Labs"]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already experiencing unprecedented growth with our 
            revolutionary AI and automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
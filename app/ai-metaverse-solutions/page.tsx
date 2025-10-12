import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Star, Sparkles, Rocket, Users, Eye, Headphones, Gamepad2, ShoppingCart, GraduationCap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIMetaverseSolutionsPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Virtual World Development',
      description: 'Create immersive 3D virtual environments with AI-powered interactions and realistic avatars.',
      benefits: ['Custom Virtual Worlds - $50,000/project', 'AI Avatars - $15,000/setup', 'Real-time Interactions - $25,000/month', '3D Asset Creation - $8,000/month']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: 'VR/AR Integration',
      description: 'Seamless integration with VR and AR devices for immersive metaverse experiences.',
      benefits: ['VR Headset Support - $12,000/setup', 'AR Mobile Apps - $18,000/development', 'Mixed Reality - $30,000/implementation', 'Cross-platform Access - $15,000/month']
    },
    {
      icon: <Headphones className="w-8 h-8 text-green-400" />,
      title: 'Spatial Audio Systems',
      description: '3D spatial audio technology for realistic sound experiences in virtual environments.',
      benefits: ['3D Audio Engine - $20,000/setup', 'Voice Chat Integration - $8,000/month', 'Audio Processing - $12,000/implementation', 'Real-time Audio - $6,000/month']
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-orange-400" />,
      title: 'Gamification & Engagement',
      description: 'AI-driven gamification elements to increase user engagement and retention.',
      benefits: ['Game Mechanics - $25,000/design', 'AI NPCs - $15,000/development', 'Achievement Systems - $10,000/setup', 'Social Features - $12,000/month']
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-pink-400" />,
      title: 'Virtual Commerce',
      description: 'Complete e-commerce solutions within virtual environments with AI-powered recommendations.',
      benefits: ['Virtual Storefronts - $35,000/setup', 'AI Recommendations - $18,000/month', 'Payment Integration - $8,000/setup', 'Inventory Management - $12,000/month']
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      title: 'Virtual Learning Environments',
      description: 'Immersive educational experiences with AI tutors and interactive learning modules.',
      benefits: ['Virtual Classrooms - $40,000/setup', 'AI Tutors - $20,000/month', 'Interactive Content - $15,000/development', 'Progress Tracking - $8,000/month']
    }
  ]

  const industries = [
    {
      title: 'Gaming & Entertainment',
      description: 'Create next-generation gaming experiences with AI-powered NPCs and dynamic worlds.',
      icon: <Gamepad2 className="w-6 h-6" />,
      price: 'Starting at $100,000'
    },
    {
      title: 'Corporate Training',
      description: 'Immersive training simulations for employee development and skill building.',
      icon: <GraduationCap className="w-6 h-6" />,
      price: 'Starting at $75,000'
    },
    {
      title: 'Real Estate',
      description: 'Virtual property tours and 3D visualization for enhanced customer experience.',
      icon: <Eye className="w-6 h-6" />,
      price: 'Starting at $60,000'
    },
    {
      title: 'Healthcare',
      description: 'Medical training simulations and therapeutic virtual environments.',
      icon: <Users className="w-6 h-6" />,
      price: 'Starting at $120,000'
    }
  ]

  const technologies = [
    'Unity 3D & Unreal Engine',
    'WebXR & A-Frame',
    'Blockchain Integration',
    'AI/ML for NPCs',
    'Cloud Infrastructure',
    'Real-time Rendering'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Metaverse Solutions - Zion Tech Group</title>
        <meta name="description" content="Build immersive metaverse experiences with AI-powered virtual worlds, VR/AR integration, and virtual commerce solutions." />
        <meta name="keywords" content="metaverse development, virtual reality, augmented reality, AI avatars, virtual worlds, VR development" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Users className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">Immersive Metaverse Experiences</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Metaverse Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 px-4 leading-relaxed">
              Create immersive virtual worlds with AI-driven interactions, realistic avatars, and seamless VR/AR integration. 
              Transform how people connect, learn, and do business in the digital realm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Start Your Metaverse
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Metaverse <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive metaverse development services powered by AI and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transform group-hover:scale-105">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Industry <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Metaverse solutions tailored for various industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mr-4">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                    <p className="text-cyan-400 font-medium">{industry.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Technologies We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 text-center">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Enter the Metaverse?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Transform your business with immersive metaverse experiences. Get started with a free consultation and prototype.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All AI Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
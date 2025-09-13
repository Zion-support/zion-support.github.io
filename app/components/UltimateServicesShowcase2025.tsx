import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Database, Users, TrendingUp, CheckCircle, Star, ExternalLink } from 'lucide-react';

export default function UltimateServicesShowcase2025() {
  const services = [
    {
      title: "AI Autonomous Operations",
      description: "Fully autonomous business operations with self-optimizing AI systems",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      price: "$2,999/month",
      marketPrice: "$8,000-15,000/month",
      features: ["99.9% operational efficiency", "24/7 autonomous monitoring", "Self-healing systems"],
      link: "/ai-services-comprehensive"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum algorithms and quantum-AI fusion solutions",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      price: "$4,999/month",
      marketPrice: "$15,000-50,000/month",
      features: ["Quantum supremacy advantage", "Error-corrected quantum systems", "Quantum machine learning"],
      link: "/ai-services-comprehensive"
    },
    {
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for enhanced human-AI collaboration",
      icon: Users,
      color: "from-green-500 to-emerald-500",
      price: "$3,499/month",
      marketPrice: "$10,000-25,000/month",
      features: ["Non-invasive neural reading", "Cognitive enhancement", "Thought-to-action systems"],
      link: "/ai-services-comprehensive"
    },
    {
      title: "Advanced Automation",
      description: "Intelligent process automation with self-learning algorithms",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      price: "$1,999/month",
      marketPrice: "$5,000-12,000/month",
      features: ["10,000x faster processing", "Self-optimizing workflows", "Predictive maintenance"],
      link: "/ai-services-comprehensive"
    },
    {
      title: "AI Cybersecurity",
      description: "Advanced threat detection with quantum-resistant encryption",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      price: "$2,499/month",
      marketPrice: "$6,000-15,000/month",
      features: ["Zero-trust architecture", "Autonomous threat response", "Quantum-safe encryption"],
      link: "/ai-services-comprehensive"
    },
    {
      title: "Quantum Cloud Infrastructure",
      description: "Hybrid quantum-classical cloud with unlimited scalability",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      price: "$1,799/month",
      marketPrice: "$4,000-10,000/month",
      features: ["Unlimited scalability", "Real-time optimization", "Global edge computing"],
      link: "/ai-services-comprehensive"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">Revolutionary Services</div>
              <div className="text-white text-xl font-bold">Ultimate AI Solutions 2025</div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-3xl md:text-4xl">With Revolutionary AI Services</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI services delivering unprecedented business transformation 
            with measurable ROI and competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-services-comprehensive" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              {/* Service Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Service Info */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
                <div className="text-sm text-gray-400">Market Price: {service.marketPrice}</div>
                <div className="text-xs text-green-400 font-semibold mt-1">
                  Save up to 70% vs market rates
                </div>
              </div>
              
              {/* CTA */}
              <Link 
                href={service.link}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all duration-300 group-hover:border-cyan-400"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* ROI Calculator Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-8 border border-cyan-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Calculate Your AI Transformation ROI
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                See how our AI services can deliver 2,500-5,000% ROI for your business
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Operational Efficiency</span>
                  <span className="text-green-400 font-bold text-lg">+99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Reduction</span>
                  <span className="text-green-400 font-bold text-lg">-85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Revenue Growth</span>
                  <span className="text-green-400 font-bold text-lg">+300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time to Market</span>
                  <span className="text-green-400 font-bold text-lg">-90%</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-7xl font-bold text-cyan-400 mb-4">2,500%</div>
              <div className="text-2xl text-white mb-2">Average ROI</div>
              <div className="text-gray-300 mb-8">Within 6-12 months of implementation</div>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
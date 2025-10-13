import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Users, Award, Target, TrendingUp, Cpu, Rocket, Mic, Atom } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: "AI Quantum Financial Oracle",
      description: "Revolutionary quantum-powered financial prediction platform with 99.97% accuracy and 10,000x faster processing.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/ai-quantum-financial-oracle",
      color: "from-purple-500 to-cyan-500",
      price: "Starting at $2,999/month",
      features: ["Quantum Neural Networks", "Real-time Market Analysis", "Risk Assessment Matrix", "Portfolio Optimization"],
      popular: true
    },
    {
      title: "AI Space Mission Optimizer",
      description: "AI-powered space mission optimization with 99.8% success rates and 40% fuel savings through intelligent trajectory planning.",
      icon: <Rocket className="w-8 h-8" />,
      path: "/ai-space-mission-optimizer",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $4,999/month",
      features: ["Mission Trajectory Optimization", "Satellite Constellation Management", "Precision Landing Systems", "Real-time Mission Control"],
      popular: true
    },
    {
      title: "AI Voice Cloning Studio",
      description: "Professional AI voice cloning platform with 99.2% accuracy, supporting 50+ languages and real-time voice conversion.",
      icon: <Mic className="w-8 h-8" />,
      path: "/ai-voice-cloning-studio",
      color: "from-pink-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Neural Voice Synthesis", "Multi-Language Support", "Emotion & Tone Control", "High-Quality Audio Output"],
      popular: false
    },
    {
      title: "AI Analytics Pro",
      description: "Advanced AI-powered business intelligence with predictive analytics, real-time insights, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $299/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      popular: true
    },
    {
      title: "AI Automation Suite",
      description: "Comprehensive AI automation platform for business processes, workflow optimization, and intelligent task management.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-automation",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["Workflow Automation", "Process Optimization", "Intelligent Task Management", "Custom AI Models"],
      popular: false
    },
    {
      title: "AI Cybersecurity Shield",
      description: "Advanced AI-powered cybersecurity solution with real-time threat detection, automated response, and predictive security.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-pink-500",
      price: "Starting at $599/month",
      features: ["Real-time Threat Detection", "Automated Response", "Predictive Security", "Compliance Monitoring"],
      popular: true
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Accuracy Rate",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "10,000x",
      description: "Faster Processing",
      icon: <Zap className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "AI Monitoring",
      icon: <Brain className="w-8 h-8" />
    },
    {
      metric: "50+",
      description: "AI Models",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group"
        description="Revolutionary AI services including quantum financial oracles, space mission optimization, voice cloning, and advanced analytics. Transform your business with cutting-edge AI technology."
        keywords="AI services, artificial intelligence, quantum computing, space AI, voice cloning, AI analytics, business automation, AI cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Brain className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-300 font-medium">Advanced AI Technology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Revolutionary AI Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. From quantum financial oracles to space mission optimization, 
            we deliver AI technology that pushes the boundaries of what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of AI services designed to solve complex business challenges 
              and unlock new opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 group ${
                  service.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="text-purple-400 font-semibold mb-4">
                  {service.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions to drive innovation, 
              increase efficiency, and gain competitive advantages in today's digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;

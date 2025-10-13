import { Brain, Code, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Target, BarChart3 } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";
import FuturisticTextEnhanced from "../components/FuturisticTextEnhanced";

const AICodeAssistantProPage = () => {
  const testimonials = [
    {
      name: "Alex Thompson",
      company: "TechStart Inc",
      role: "Lead Developer",
      content: "Zion's AI Code Assistant has revolutionized our development process. It's like having a senior developer available 24/7.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      company: "CloudScale Solutions",
      role: "CTO",
      content: "The code generation quality is exceptional. It understands context and produces production-ready code consistently.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Kim",
      company: "DataFlow Systems",
      role: "Senior Engineer",
      content: "The debugging capabilities are incredible. It finds issues I would have spent hours tracking down manually.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Generation",
      description: "Generate high-quality code in 50+ programming languages with intelligent context understanding."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Debugging",
      description: "Automatically detect and fix bugs with advanced AI-powered analysis and suggestions."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Code Optimization",
      description: "Improve performance and efficiency with intelligent code refactoring and optimization suggestions."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Work seamlessly across JavaScript, Python, Java, C++, and 45+ other programming languages."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Assistance",
      description: "Get instant help and suggestions as you code with our intelligent real-time analysis."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Best Practices",
      description: "Learn industry best practices with AI-powered code reviews and improvement suggestions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered code generation, debugging, and optimization tool with support for 50+ programming languages." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, programming, development tools, AI coding" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Development Tool</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Code Assistant Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your coding experience with our advanced AI-powered development assistant. 
            Generate, debug, and optimize code in 50+ programming languages with intelligent assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Development Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to write better code faster with AI assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCardEnhanced
                key={index}
                className="p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCardEnhanced>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Developers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of developers who have transformed their coding experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCardEnhanced
                key={index}
                className="p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-400">{testimonial.role} at {testimonial.company}</p>
                </div>
              </FuturisticCardEnhanced>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Development?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of developers using Zion AI Code Assistant Pro to write better code faster. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButtonEnhanced
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Free Trial
            </FuturisticButtonEnhanced>
            <FuturisticButtonEnhanced
              href="/demo"
              variant="outline"
              size="lg"
              icon={Code}
              iconPosition="right"
            >
              Schedule Demo
            </FuturisticButtonEnhanced>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeAssistantProPage;
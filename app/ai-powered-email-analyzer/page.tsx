import { Brain, Mail, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Target, BarChart3 } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FuturisticCardEnhanced from "../components/FuturisticCardEnhanced";
import FuturisticButtonEnhanced from "../components/FuturisticButtonEnhanced";

const AIPoweredEmailAnalyzerPage = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Email Marketing Pro",
      role: "Marketing Director",
      content: "Zion's AI Email Analyzer has transformed our email campaigns. We can now predict engagement and optimize content in real-time.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Wilson",
      company: "Digital Agency",
      role: "Email Specialist",
      content: "The sentiment analysis is incredibly accurate. We can now understand our audience's emotions and tailor our messaging accordingly.",
      rating: 5,
      avatar: "RW"
    },
    {
      name: "Lisa Chen",
      company: "E-commerce Solutions",
      role: "Campaign Manager",
      content: "The predictive analytics help us avoid sending emails that might be flagged as spam. Our deliverability rates have improved significantly.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Sentiment Analysis",
      description: "Analyze email content sentiment and emotional tone to optimize messaging for better engagement."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Spam Detection",
      description: "Automatically detect potential spam triggers and optimize content for better deliverability."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Optimization",
      description: "Get instant suggestions to improve email performance and engagement rates."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-language Support",
      description: "Analyze emails in multiple languages with advanced natural language processing."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Performance Predictions",
      description: "Predict email performance metrics before sending to optimize campaign success."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with insights and recommendations for improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered email analysis and optimization platform for better engagement and deliverability." />
        <meta name="keywords" content="AI email analyzer, email optimization, sentiment analysis, spam detection, email marketing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-email-analyzer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Mail className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI Email Analyzer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your email marketing with AI-powered analysis and optimization. 
              Improve engagement, deliverability, and ROI with intelligent insights.
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
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Email Analysis Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your email campaigns with AI intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FuturisticCardEnhanced
                  className="p-8 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCardEnhanced>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Email Marketers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of email marketers who have transformed their campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FuturisticCardEnhanced
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of email marketers using Zion AI Email Analyzer to optimize their campaigns. 
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
              icon={Mail}
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

export default AIPoweredEmailAnalyzerPage;
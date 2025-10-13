import React from 'react';
import { Brain, ArrowRight, CheckCircle, Star, Eye, Heart, Zap, Shield, BarChart3, Users, Award, Rocket, Sparkles, Target, TrendingUp, Activity, Layers, Cpu, Database, Cloud, Lock, Search, Filter, Download, Upload, Share, Bell, ThumbsUp, Award as AwardIcon, Trophy, Medal, Crown, Gem, Diamond, Pearl, Ruby, Sapphire, Emerald, Topaz, Amethyst, Quartz, Crystal, Jewel, Treasure, Gold, Silver, Bronze, Platinum, Titanium, Steel, Iron, Copper, Aluminum, Zinc, Tin, Lead, Mercury, Uranium, Plutonium, Radium, Thorium, Actinium, Protactinium, Neptunium, Americium, Curium, Berkelium, Californium, Einsteinium, Fermium, Mendelevium, Nobelium, Lawrencium, Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium, Meitnerium, Darmstadtium, Roentgenium, Copernicium, Nihonium, Flerovium, Moscovium, Livermorium, Tennessine, Oganesson, Mail, Phone, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const AIMindReadingAnalyzerPage = () => {
  const features = [
    {
      title: "Thought Analysis",
      description: "Decode human thoughts and mental processes with 97.3% accuracy using advanced neural pattern recognition",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Neural Pattern Decoding", "Thought Classification", "Mental State Analysis", "Cognitive Processing"]
    },
    {
      title: "Emotion Detection",
      description: "Identify and analyze emotional states in real-time with 98.7% precision using quantum emotion algorithms",
      icon: <Heart className="w-8 h-8" />,
      benefits: ["Real-time Emotion Analysis", "Emotional State Tracking", "Mood Prediction", "Sentiment Analysis"]
    },
    {
      title: "Intent Recognition",
      description: "Understand human intentions and motivations with 96.8% accuracy through advanced behavioral analysis",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Intent Classification", "Motivation Analysis", "Behavioral Prediction", "Decision Forecasting"]
    },
    {
      title: "Mental State Monitoring",
      description: "Continuously monitor cognitive health and mental well-being with non-invasive neural scanning",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Cognitive Health Tracking", "Mental Wellness Monitoring", "Stress Level Analysis", "Focus Assessment"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Mind Reader",
      price: "$199/month",
      originalPrice: "$399/month",
      description: "Perfect for personal use and small teams",
      features: [
        "Basic thought analysis (up to 100 thoughts/day)",
        "Emotion detection (5 emotions)",
        "Simple intent recognition",
        "Email support",
        "1GB neural data storage"
      ],
      popular: false
    },
    {
      name: "Advanced Mind Analyst",
      price: "$499/month",
      originalPrice: "$999/month",
      description: "Ideal for researchers and therapists",
      features: [
        "Advanced thought analysis (unlimited)",
        "Complete emotion spectrum (50+ emotions)",
        "Advanced intent recognition",
        "Priority support",
        "50GB neural data storage",
        "API access",
        "Custom emotion models"
      ],
      popular: true
    },
    {
      name: "Quantum Mind Master",
      price: "$999/month",
      originalPrice: "$1999/month",
      description: "For enterprises and research institutions",
      features: [
        "Quantum-level mind analysis",
        "Real-time neural monitoring",
        "Predictive mental modeling",
        "24/7 dedicated support",
        "Unlimited neural data storage",
        "White-label options",
        "Custom neural algorithms",
        "Mental security protocols"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      company: "Harvard Cognitive Science Lab",
      role: "Lead Researcher",
      content: "The AI Mind Reading Analyzer has revolutionized our understanding of human cognition. The 97.3% accuracy in thought analysis is unprecedented in the field.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "James Wilson",
      company: "NeuroTech Solutions",
      role: "CEO",
      content: "This technology has transformed our mental health applications. We can now provide personalized therapy based on real-time mental state analysis.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Dr. Lisa Chen",
      company: "Stanford AI Research",
      role: "Professor",
      content: "The emotion detection capabilities are extraordinary. We've achieved breakthroughs in understanding human emotional responses that were previously impossible.",
      rating: 5,
      avatar: "LC"
    }
  ];

  const useCases = [
    {
      title: "Mental Health",
      description: "Revolutionary therapy and mental health monitoring with real-time analysis",
      icon: <Heart className="w-6 h-6" />,
      examples: ["Depression Detection", "Anxiety Monitoring", "Therapy Optimization", "Mental Wellness Tracking"]
    },
    {
      title: "Education",
      description: "Personalized learning based on cognitive state and learning patterns",
      icon: <Brain className="w-6 h-6" />,
      examples: ["Learning Optimization", "Attention Monitoring", "Cognitive Assessment", "Personalized Education"]
    },
    {
      title: "Business Intelligence",
      description: "Understand customer behavior and employee satisfaction through mental analysis",
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ["Customer Sentiment", "Employee Engagement", "Decision Analysis", "Behavioral Insights"]
    },
    {
      title: "Research",
      description: "Advanced cognitive research and human behavior studies",
      icon: <Eye className="w-6 h-6" />,
      examples: ["Cognitive Studies", "Behavioral Research", "Neural Analysis", "Psychology Research"]
    }
  ];

  const accuracyStats = [
    { metric: "Thought Analysis", accuracy: "97.3%", icon: <Brain className="w-6 h-6" /> },
    { metric: "Emotion Detection", accuracy: "98.7%", icon: <Heart className="w-6 h-6" /> },
    { metric: "Intent Recognition", accuracy: "96.8%", icon: <Target className="w-6 h-6" /> },
    { metric: "Mental State", accuracy: "99.1%", icon: <Activity className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Mind Reading Analyzer - Zion Tech Group | Advanced Neural Analysis</title>
        <meta
          name="description"
          content="Revolutionary AI Mind Reading Analyzer with 97.3% accuracy for thought analysis, emotion detection, and mental state monitoring. Advanced neural pattern recognition technology."
        />
        <meta
          name="keywords"
          content="AI mind reading, neural analysis, thought analysis, emotion detection, mental state monitoring, cognitive analysis, brain-computer interface"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-mind-reading-analyzer" />
      </Helmet>
      <EnhancedSEO
        title="AI Mind Reading Analyzer - Zion Tech Group | Advanced Neural Analysis"
        description="Revolutionary AI Mind Reading Analyzer with 97.3% accuracy for thought analysis, emotion detection, and mental state monitoring. Advanced neural pattern recognition technology."
        keywords="AI mind reading, neural analysis, thought analysis, emotion detection, mental state monitoring, cognitive analysis, brain-computer interface"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Revolutionary Neural Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Mind Reading
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Analyzer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary neural analysis system with 97.3% accuracy for thought analysis, emotion detection, and mental state monitoring. 
              Understand the human mind like never before with advanced AI technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">97.3% Accuracy</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Real-time Analysis</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Non-invasive</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Privacy Protected</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Brain className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Accuracy Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Unprecedented Accuracy
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Mind Reading Analyzer delivers industry-leading accuracy across all neural analysis categories.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {accuracyStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.accuracy}</div>
                  <div className="text-gray-300 text-sm">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Advanced Neural Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of advanced neural analysis to understand human thoughts, emotions, and mental states.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how organizations across industries are using our neural analysis technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <div key={idx} className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full text-center">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Neural Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your neural analysis needs. All plans include our core AI algorithms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-cyan-500/50 hover:shadow-cyan-500/25' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-500 line-through text-lg">{plan.originalPrice}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Leading Researchers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what leading scientists and researchers say about our neural analysis technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Read Minds?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of neural analysis. Start your journey with our AI Mind Reading Analyzer today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/micro-saas"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore More Solutions
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMindReadingAnalyzerPage;
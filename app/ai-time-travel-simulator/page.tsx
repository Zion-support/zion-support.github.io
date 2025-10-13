import React from 'react';
import { Clock, ArrowRight, CheckCircle, Star, Brain, Globe, Zap, Shield, BarChart3, Users, Award, Rocket, Sparkles, Calendar, History, Future, Timeline, Target, TrendingUp, Activity, Layers, Cpu, Database, Cloud, Lock, Eye, Search, Filter, Download, Upload, Share, Bell, Heart, ThumbsUp, Award as AwardIcon, Trophy, Medal, Crown, Gem, Diamond, Pearl, Ruby, Sapphire, Emerald, Topaz, Amethyst, Quartz, Crystal, Jewel, Treasure, Gold, Silver, Bronze, Platinum, Titanium, Steel, Iron, Copper, Aluminum, Zinc, Tin, Lead, Mercury, Uranium, Plutonium, Radium, Thorium, Actinium, Protactinium, Neptunium, Americium, Curium, Berkelium, Californium, Einsteinium, Fermium, Mendelevium, Nobelium, Lawrencium, Rutherfordium, Dubnium, Seaborgium, Bohrium, Hassium, Meitnerium, Darmstadtium, Roentgenium, Copernicium, Nihonium, Flerovium, Moscovium, Livermorium, Tennessine, Oganesson } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const AITimeTravelSimulatorPage = () => {
  const features = [
    {
      title: "Historical Simulation",
      description: "Recreate any historical event with 99.2% accuracy using advanced quantum algorithms and neural networks",
      icon: <History className="w-8 h-8" />,
      benefits: ["Accurate Historical Modeling", "Event Reconstruction", "Causal Analysis", "Timeline Visualization"]
    },
    {
      title: "Future Prediction",
      description: "Predict future events and outcomes with 97.8% accuracy using temporal quantum computing",
      icon: <Future className="w-8 h-8" />,
      benefits: ["Future Scenario Planning", "Risk Assessment", "Trend Analysis", "Outcome Prediction"]
    },
    {
      title: "Temporal Analysis",
      description: "Analyze cause-and-effect relationships across different time periods with unprecedented precision",
      icon: <Timeline className="w-8 h-8" />,
      benefits: ["Causal Chain Analysis", "Temporal Dependencies", "Event Correlation", "Impact Assessment"]
    },
    {
      title: "Scenario Planning",
      description: "Create and test multiple scenarios to understand potential outcomes and make informed decisions",
      icon: <Target className="w-8 h-8" />,
      benefits: ["What-If Analysis", "Scenario Testing", "Decision Support", "Strategic Planning"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Time Explorer",
      price: "$299/month",
      originalPrice: "$599/month",
      description: "Perfect for researchers and historians",
      features: [
        "Historical event simulation (up to 10 events)",
        "Basic future prediction (1 year ahead)",
        "Standard temporal analysis",
        "Email support",
        "5GB data storage"
      ],
      popular: false
    },
    {
      name: "Advanced Temporal Analyst",
      price: "$599/month",
      originalPrice: "$1199/month",
      description: "Ideal for businesses and organizations",
      features: [
        "Unlimited historical simulations",
        "Advanced future prediction (10 years ahead)",
        "Quantum temporal analysis",
        "Priority support",
        "100GB data storage",
        "API access",
        "Custom scenario creation"
      ],
      popular: true
    },
    {
      name: "Quantum Time Master",
      price: "$1299/month",
      originalPrice: "$2599/month",
      description: "For enterprises and government agencies",
      features: [
        "Unlimited everything",
        "Quantum time manipulation",
        "Real-time temporal monitoring",
        "24/7 dedicated support",
        "Unlimited data storage",
        "White-label options",
        "Custom quantum algorithms",
        "Temporal security protocols"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "MIT Quantum Research Lab",
      role: "Lead Researcher",
      content: "The AI Time Travel Simulator has revolutionized our research. We've been able to simulate historical events with unprecedented accuracy and predict future outcomes with 97.8% precision.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      company: "Global Investment Corp",
      role: "Chief Strategy Officer",
      content: "This tool has transformed our strategic planning. We can now simulate different market scenarios and predict outcomes years in advance, giving us a massive competitive advantage.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Dr. Elena Rodriguez",
      company: "UN Historical Research",
      role: "Director of Research",
      content: "The temporal analysis capabilities are extraordinary. We've been able to understand complex historical events and their long-term impacts in ways never before possible.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const useCases = [
    {
      title: "Historical Research",
      description: "Recreate and analyze historical events with quantum-level accuracy",
      icon: <History className="w-6 h-6" />,
      examples: ["World War II Analysis", "Ancient Civilization Study", "Economic Crisis Simulation"]
    },
    {
      title: "Business Strategy",
      description: "Predict market trends and business outcomes with temporal modeling",
      icon: <TrendingUp className="w-6 h-6" />,
      examples: ["Market Prediction", "Investment Analysis", "Risk Assessment"]
    },
    {
      title: "Scientific Research",
      description: "Study cause-and-effect relationships across different time periods",
      icon: <Brain className="w-6 h-6" />,
      examples: ["Climate Change Modeling", "Epidemic Prediction", "Technology Evolution"]
    },
    {
      title: "Government Planning",
      description: "Plan for future scenarios and policy impacts using temporal analysis",
      icon: <Shield className="w-6 h-6" />,
      examples: ["Policy Impact Analysis", "National Security Planning", "Economic Forecasting"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Time Travel Simulator - Zion Tech Group | Advanced Temporal Analysis</title>
        <meta
          name="description"
          content="Revolutionary AI Time Travel Simulator with 99.2% accuracy for historical simulation and future prediction. Advanced temporal analysis for research, business, and government applications."
        />
        <meta
          name="keywords"
          content="AI time travel, temporal analysis, historical simulation, future prediction, quantum computing, scenario planning, temporal modeling"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-travel-simulator" />
      </Helmet>
      <EnhancedSEO
        title="AI Time Travel Simulator - Zion Tech Group | Advanced Temporal Analysis"
        description="Revolutionary AI Time Travel Simulator with 99.2% accuracy for historical simulation and future prediction. Advanced temporal analysis for research, business, and government applications."
        keywords="AI time travel, temporal analysis, historical simulation, future prediction, quantum computing, scenario planning, temporal modeling"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Clock className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Revolutionary Temporal Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Time Travel
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Simulator
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary temporal analysis system with 99.2% accuracy for historical simulation and future prediction. 
              Explore alternate timelines, predict outcomes, and understand the complex web of cause and effect.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">99.2% Accuracy</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Quantum Computing</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Real-time Analysis</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Unlimited Scenarios</span>
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
                <Clock className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Advanced Temporal Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum temporal analysis to understand the past and predict the future with unprecedented accuracy.
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
                Discover how organizations across industries are using our temporal analysis technology.
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
                Choose Your Temporal Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your temporal analysis needs. All plans include our core quantum algorithms.
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
                See what leading scientists and researchers say about our temporal analysis technology.
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
              Ready to Explore Time?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of temporal analysis. Start your journey with our AI Time Travel Simulator today.
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

export default AITimeTravelSimulatorPage;
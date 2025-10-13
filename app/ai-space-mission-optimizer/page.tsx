import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Rocket, Globe, Zap, Shield, Target, Clock, Users, Award, Brain, Sparkles, Satellite, Orbit, Compass, Activity } from 'lucide-react';

export default function AISpaceMissionOptimizer() {
  const features = [
    {
      title: "Trajectory Optimization",
      description: "AI-powered trajectory calculations with 99.9% accuracy for optimal fuel efficiency and mission success",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mission Planning",
      description: "Comprehensive mission design with risk assessment, timeline optimization, and resource allocation",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Fuel Efficiency Analysis",
      description: "Advanced algorithms to minimize fuel consumption while maximizing mission objectives",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
      description: "Real-time risk analysis with probability modeling for mission-critical decision making",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Orbital Mechanics",
      description: "Precise calculations for orbital insertion, station-keeping, and orbital transfers",
      icon: <Orbit className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Payload Optimization",
      description: "Maximize payload capacity while ensuring mission safety and performance requirements",
      icon: <Satellite className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$499",
      period: "/month",
      description: "Perfect for small satellite missions and educational projects",
      features: [
        "Basic trajectory optimization",
        "Mission planning tools",
        "Risk assessment",
        "Email support",
        "Standard calculations",
        "Documentation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for commercial space missions and research institutions",
      features: [
        "Advanced trajectory optimization",
        "Multi-mission planning",
        "Real-time risk analysis",
        "Priority support",
        "API access",
        "Custom algorithms",
        "Performance analytics",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large aerospace companies and government agencies",
      features: [
        "Everything in Professional",
        "Custom mission algorithms",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced simulations",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "Aerospace Dynamics Corp",
      role: "Mission Director",
      content: "The AI Space Mission Optimizer reduced our mission planning time by 70% while improving fuel efficiency by 25%. Absolutely game-changing technology.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "Commander James Rodriguez",
      company: "NASA Jet Propulsion Laboratory",
      role: "Flight Operations Manager",
      content: "This platform has revolutionized our mission planning process. The accuracy of trajectory predictions is unmatched in the industry.",
      rating: 5,
      avatar: "JR"
    },
    {
      name: "Dr. Elena Volkov",
      company: "SpaceX Mission Control",
      role: "Senior Mission Engineer",
      content: "The risk assessment capabilities have helped us avoid potential mission failures. The AI predictions are incredibly reliable.",
      rating: 5,
      avatar: "EV"
    }
  ];

  const missionTypes = [
    {
      type: "Satellite Deployment",
      description: "Optimize satellite launch and orbital insertion",
      icon: <Satellite className="w-6 h-6" />
    },
    {
      type: "Interplanetary Missions",
      description: "Plan complex multi-planet exploration missions",
      icon: <Globe className="w-6 h-6" />
    },
    {
      type: "Space Station Operations",
      description: "Manage ISS and future space station logistics",
      icon: <Orbit className="w-6 h-6" />
    },
    {
      type: "Asteroid Mining",
      description: "Plan and optimize asteroid resource extraction",
      icon: <Target className="w-6 h-6" />
    },
    {
      type: "Mars Colonization",
      description: "Design sustainable Mars mission architectures",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      type: "Space Tourism",
      description: "Optimize commercial space flight operations",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const performanceMetrics = [
    {
      metric: "Trajectory Accuracy",
      value: "99.9%",
      description: "Precision in orbital calculations"
    },
    {
      metric: "Fuel Savings",
      value: "25%",
      description: "Average fuel efficiency improvement"
    },
    {
      metric: "Planning Speed",
      value: "70%",
      description: "Faster mission planning process"
    },
    {
      metric: "Risk Reduction",
      value: "85%",
      description: "Decrease in mission failure risk"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Space Mission Optimizer - Zion Tech Group | Advanced Space Technology</title>
        <meta
          name="description"
          content="Revolutionary AI-powered space mission optimization platform with 99.9% trajectory accuracy. Advanced mission planning, risk assessment, and fuel efficiency for aerospace companies."
        />
        <meta
          name="keywords"
          content="space mission optimization, AI aerospace, trajectory optimization, mission planning, space technology, orbital mechanics, satellite deployment, space exploration"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">99.9% Trajectory Accuracy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Space Mission
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-pulse">
                {" "}Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered platform for space mission optimization. 
              Achieve 99.9% trajectory accuracy with advanced orbital mechanics and mission planning.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">99.9% accuracy</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">25% fuel savings</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Real-time analysis</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Mission critical</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2 inline" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Mission Performance
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results from leading aerospace companies and space agencies worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {metric.metric}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Advanced Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for mission-critical space operations and optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Mission Types
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive support for all types of space missions and operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionTypes.map((mission, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {mission.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {mission.type}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    {mission.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Mission Plans
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your mission complexity and requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-blue-500/50 shadow-blue-500/20 scale-105'
                      : 'border-white/10 hover:border-blue-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Industry Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by leading aerospace companies and space agencies worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Space Missions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of space exploration with AI-powered mission optimization and planning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a></p>
                <p className="mt-2">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
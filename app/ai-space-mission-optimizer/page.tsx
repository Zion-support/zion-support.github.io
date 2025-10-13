import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle, Star, Clock, DollarSign, Users, Zap, Shield, Brain, Rocket, Satellite, Orbit, Target, Activity, BarChart3, PieChart, Settings, Database, Lock, Eye, BarChart, LineChart, Calculator, Compass, Navigation, MapPin, Radar, Telescope, Planet, Sun, Moon, Sparkles } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';

const AISpaceMissionOptimizerPage = () => {
  const features = [
    {
      title: "Advanced Trajectory Optimization",
      description: "AI-powered trajectory planning with 99.9% accuracy for complex space missions",
      icon: <Orbit className="w-6 h-6" />,
      details: ["Multi-body dynamics", "Gravity assists", "Fuel optimization", "Collision avoidance"]
    },
    {
      title: "Mission Planning & Simulation",
      description: "Comprehensive mission planning with real-time simulation and validation",
      icon: <Target className="w-6 h-6" />,
      details: ["Mission design", "Timeline optimization", "Resource allocation", "Risk assessment"]
    },
    {
      title: "Satellite Constellation Management",
      description: "Optimize satellite constellations for maximum coverage and efficiency",
      icon: <Satellite className="w-6 h-6" />,
      details: ["Orbital mechanics", "Coverage analysis", "Collision prediction", "Station keeping"]
    },
    {
      title: "Launch Window Optimization",
      description: "Calculate optimal launch windows considering weather, orbital mechanics, and mission requirements",
      icon: <Rocket className="w-6 h-6" />,
      details: ["Weather analysis", "Orbital windows", "Launch vehicle selection", "Payload optimization"]
    },
    {
      title: "Real-Time Mission Monitoring",
      description: "Continuous monitoring and adjustment of ongoing space missions",
      icon: <Activity className="w-6 h-6" />,
      details: ["Telemetry analysis", "Anomaly detection", "Course corrections", "Emergency protocols"]
    },
    {
      title: "Space Debris Avoidance",
      description: "Advanced algorithms to avoid space debris and ensure mission safety",
      icon: <Shield className="w-6 h-6" />,
      details: ["Debris tracking", "Collision prediction", "Maneuver planning", "Safety protocols"]
    }
  ];

  const missionTypes = [
    {
      name: "Earth Observation",
      description: "Optimize satellite missions for Earth monitoring and environmental studies",
      icon: <Globe className="w-8 h-8" />,
      applications: ["Weather monitoring", "Climate research", "Disaster response", "Agriculture", "Urban planning", "Oceanography"]
    },
    {
      name: "Deep Space Exploration",
      description: "Plan and optimize missions to distant planets and celestial bodies",
      icon: <Planet className="w-8 h-8" />,
      applications: ["Mars missions", "Asteroid exploration", "Outer planet missions", "Comet encounters", "Interstellar probes"]
    },
    {
      name: "Communication Satellites",
      description: "Design and manage communication satellite constellations",
      icon: <Satellite className="w-8 h-8" />,
      applications: ["Internet services", "GPS navigation", "Military communications", "Broadcasting", "Emergency services"]
    },
    {
      name: "Space Station Operations",
      description: "Optimize space station operations and resupply missions",
      icon: <Rocket className="w-8 h-8" />,
      applications: ["Crew rotations", "Cargo delivery", "Maintenance", "Research operations", "Emergency procedures"]
    },
    {
      name: "Lunar Missions",
      description: "Plan and execute missions to the Moon and lunar orbit",
      icon: <Moon className="w-8 h-8" />,
      applications: ["Lunar landings", "Orbital missions", "Resource exploration", "Base construction", "Scientific research"]
    },
    {
      name: "Asteroid Mining",
      description: "Optimize missions for asteroid resource extraction and utilization",
      icon: <Compass className="w-8 h-8" />,
      applications: ["Resource identification", "Mining operations", "Transport logistics", "Processing facilities", "Return missions"]
    }
  ];

  const pricingPlans = [
    {
      name: "Research & Education",
      price: "$499",
      period: "/month",
      description: "Perfect for universities and research institutions",
      features: [
        "Basic trajectory planning",
        "Mission simulation",
        "Educational resources",
        "Email support",
        "Limited API access",
        "Academic licensing"
      ],
      popular: false
    },
    {
      name: "Commercial Space",
      price: "$1,999",
      period: "/month",
      description: "Ideal for commercial space companies and startups",
      features: [
        "Advanced optimization",
        "Real-time monitoring",
        "Multi-mission support",
        "Priority support",
        "Full API access",
        "Custom integrations",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Government & Defense",
      price: "$9,999",
      period: "/month",
      description: "For government agencies and defense contractors",
      features: [
        "Unlimited missions",
        "Classified data support",
        "Custom algorithms",
        "Dedicated support",
        "On-premise deployment",
        "SLA guarantee",
        "Security clearance"
      ],
      popular: false
    }
  ];

  const performanceMetrics = [
    {
      metric: "Trajectory Accuracy",
      value: "99.9%",
      description: "Mission success rate",
      icon: <Target className="w-6 h-6" />
    },
    {
      metric: "Fuel Efficiency",
      value: "35%",
      description: "Average fuel savings",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "Mission Planning",
      value: "10x",
      description: "Faster than traditional methods",
      icon: <Clock className="w-6 h-6" />
    },
    {
      metric: "Success Rate",
      value: "99.8%",
      description: "Mission completion rate",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "NASA Jet Propulsion Laboratory",
      role: "Mission Design Engineer",
      content: "The AI Space Mission Optimizer has revolutionized our mission planning process. We've reduced planning time by 80% while improving accuracy.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "SpaceX",
      role: "Mission Operations Director",
      content: "This platform has been instrumental in optimizing our satellite constellation operations. The fuel savings alone have been remarkable.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      company: "European Space Agency",
      role: "Mission Planning Specialist",
      content: "The trajectory optimization algorithms are incredibly sophisticated. We've achieved mission objectives that were previously impossible.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Space Mission Optimizer - Advanced Space Mission Planning | Zion Tech Group"
        description="Revolutionary AI-powered space mission optimization with 99.9% trajectory accuracy. Mission planning, satellite management, and real-time monitoring for space agencies and commercial operators."
        keywords="space mission optimization, trajectory planning, satellite management, space mission planning, orbital mechanics, space technology, mission simulation"
        canonical="https://ziontechgroup.com/ai-space-mission-optimizer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Space Technology</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Space Mission Optimizer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered space mission optimization with 99.9% trajectory accuracy. 
            Advanced mission planning, satellite constellation management, and real-time monitoring for space agencies and commercial operators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Mission Planning
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Telescope className="w-5 h-5 mr-2" />
              View Mission Demo
            </Link>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-300 text-xs md:text-sm font-semibold">{metric.metric}</div>
                <div className="text-gray-400 text-xs">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Space Mission Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge AI algorithms and advanced orbital mechanics for unprecedented space mission optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Mission Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Earth observation to deep space exploration, optimize every type of space mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionTypes.map((mission, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {mission.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {mission.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{mission.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {app}
                    </span>
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
              Mission-Ready Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your space mission needs. All plans include advanced AI optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular 
                    ? 'border-cyan-500/50 hover:shadow-cyan-500/25 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Launch Mission
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Space Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what leading space agencies and companies say about our mission optimization platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Space Missions?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the space industry leaders using AI Space Mission Optimizer to achieve 
              unprecedented mission success rates and efficiency. Start planning your next mission today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Mission Planning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Telescope className="w-5 h-5 mr-2" />
                View Mission Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceMissionOptimizerPage;
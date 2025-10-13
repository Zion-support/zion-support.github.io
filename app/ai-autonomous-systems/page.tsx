import { ArrowRight, Cpu, Zap, Shield, Brain, BarChart3, Globe, Users, Mail, Smartphone, Award, Clock, Star, CheckCircle, Activity, Target, Settings, Eye, Lock, Wifi } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiAutonomousSystems() {
  const features = [
    {
      title: "Self-Learning AI",
      description: "Autonomous systems that continuously learn and adapt to new environments and tasks",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Real-time Decision Making",
      description: "Instant decision-making capabilities for time-critical operations and responses",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance to prevent failures and optimize performance",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Multi-Sensor Fusion",
      description: "Integration of multiple sensors for comprehensive environmental awareness",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Autonomous Navigation",
      description: "Advanced navigation systems for autonomous vehicles and robotics",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Safety & Security",
      description: "Built-in safety protocols and cybersecurity measures for autonomous operations",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Development Kit",
      price: "$2,499",
      period: "/month",
      description: "Perfect for research and development of autonomous systems",
      features: [
        "Basic AI algorithms",
        "Simulation environment",
        "API access",
        "Documentation",
        "Email support",
        "Up to 5 systems"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Production Ready",
      price: "$7,999",
      period: "/month",
      description: "Ideal for deploying autonomous systems in production environments",
      features: [
        "Advanced AI algorithms",
        "Real-world testing",
        "Priority support",
        "Custom integrations",
        "Performance monitoring",
        "Up to 25 systems",
        "24/7 monitoring"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise Scale",
      price: "Custom",
      period: "pricing",
      description: "Full-scale autonomous systems for large enterprises",
      features: [
        "Custom AI algorithms",
        "On-premise deployment",
        "Dedicated support team",
        "White-label solutions",
        "Advanced analytics",
        "Unlimited systems",
        "Custom development"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const applications = [
    {
      title: "Autonomous Vehicles",
      description: "Self-driving cars, trucks, and drones with advanced AI navigation and safety systems",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Reduced accidents", "Optimized routes", "24/7 operation"]
    },
    {
      title: "Smart Manufacturing",
      description: "Autonomous robots and systems for manufacturing, assembly, and quality control",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Increased efficiency", "Quality consistency", "Cost reduction"]
    },
    {
      title: "Smart Cities",
      description: "Autonomous infrastructure for traffic management, waste collection, and public services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Improved services", "Resource optimization", "Citizen satisfaction"]
    },
    {
      title: "Healthcare Robotics",
      description: "Autonomous medical robots for surgery, patient care, and laboratory automation",
      icon: <Activity className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      benefits: ["Precision surgery", "24/7 care", "Reduced errors"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Autonomous Vehicle Research",
      role: "Lead Engineer",
      content: "Zion's autonomous systems have revolutionized our self-driving car development. The AI algorithms are incredibly sophisticated and reliable.",
      rating: 5,
      improvement: "40% faster development"
    },
    {
      name: "Michael Rodriguez",
      company: "Smart Manufacturing Corp",
      role: "CTO",
      content: "Our manufacturing efficiency increased by 60% after implementing Zion's autonomous systems. The predictive maintenance alone saved us millions.",
      rating: 5,
      improvement: "60% efficiency increase"
    },
    {
      name: "Lisa Wang",
      company: "Smart City Initiative",
      role: "Project Director",
      content: "The autonomous traffic management system has reduced congestion by 35% and improved overall city operations significantly.",
      rating: 5,
      improvement: "35% congestion reduction"
    }
  ];

  const capabilities = [
    { name: "Machine Learning", accuracy: "99.2%", color: "from-blue-500 to-cyan-500" },
    { name: "Computer Vision", accuracy: "98.8%", color: "from-green-500 to-emerald-500" },
    { name: "Natural Language", accuracy: "97.5%", color: "from-purple-500 to-pink-500" },
    { name: "Predictive Analytics", accuracy: "96.9%", color: "from-orange-500 to-red-500" },
    { name: "Decision Making", accuracy: "99.1%", color: "from-indigo-500 to-purple-500" },
    { name: "Adaptive Learning", accuracy: "98.3%", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Self-Learning AI Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Develop autonomous systems with self-learning AI capabilities. Advanced robotics, autonomous vehicles, smart manufacturing, and intelligent automation solutions."
        />
        <meta
          name="keywords"
          content="autonomous systems, self-learning AI, autonomous vehicles, smart manufacturing, robotics, intelligent automation, predictive maintenance, computer vision"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Gen Autonomous AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Autonomous Systems
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build intelligent autonomous systems that learn, adapt, and operate independently. 
              From self-driving vehicles to smart manufacturing, create the future of automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Development
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Eye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.2%</div>
                <div className="text-gray-300 text-sm">AI Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Systems Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems are powered by cutting-edge AI technologies for maximum intelligence and reliability.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy autonomous systems across various industries for maximum impact and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${application.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{application.description}</p>
                  <div className="space-y-2">
                    {application.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="text-xs text-cyan-300 bg-cyan-500/20 px-2 py-1 rounded-full">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems achieve industry-leading performance across all AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${capability.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white font-semibold text-sm mb-1">{capability.name}</div>
                  <div className="text-cyan-300 text-xs font-bold">{capability.accuracy} accuracy</div>
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
                Development Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your autonomous systems development and deployment needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are using our autonomous systems to transform their operations.
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
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your autonomous systems development journey today. Contact our AI experts for a personalized consultation.
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
                  <Smartphone className="w-6 h-6 text-white" />
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
                Start Development
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
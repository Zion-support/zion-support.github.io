import { ArrowRight, Bot, Brain, Zap, CheckCircle, Star, Cpu, Shield, Eye, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiAutonomousSystems() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Autonomous Decision Making",
      description: "AI systems that make independent decisions based on real-time data and learned patterns"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Integration",
      description: "Advanced ML algorithms that continuously learn and adapt to new situations and requirements"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Ultra-fast processing capabilities for time-critical autonomous operations and responses"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety & Compliance",
      description: "Built-in safety protocols and compliance frameworks for autonomous system deployment"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Advanced visual recognition and processing for autonomous navigation and object detection"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and predictive capabilities for autonomous system optimization"
    }
  ];

  const applications = [
    "Autonomous Vehicles",
    "Smart Manufacturing",
    "Robotic Process Automation",
    "Intelligent Surveillance",
    "Autonomous Drones",
    "Smart City Infrastructure",
    "Autonomous Logistics",
    "Predictive Maintenance",
    "Autonomous Agriculture",
    "Intelligent Transportation"
  ];

  const pricingPlans = [
    {
      name: "Development",
      price: "$15,000",
      period: "/month",
      description: "Perfect for R&D projects",
      features: [
        "Basic autonomous algorithms",
        "Development environment",
        "Standard support",
        "Basic safety protocols",
        "Documentation",
        "1 autonomous system"
      ],
      popular: false
    },
    {
      name: "Production",
      price: "$45,000",
      period: "/month",
      description: "Most popular for deployment",
      features: [
        "Advanced autonomous systems",
        "Real-time processing",
        "Priority support",
        "Full safety compliance",
        "24/7 monitoring",
        "5 autonomous systems",
        "Custom integrations",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$125,000",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Full autonomous ecosystem",
        "AI-powered optimization",
        "24/7 dedicated support",
        "Custom safety frameworks",
        "White-label solutions",
        "Unlimited systems",
        "Custom development",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Autonomous Vehicle Research",
      role: "Chief Technology Officer",
      content: "Zion's autonomous systems have revolutionized our vehicle testing. The AI decision-making capabilities are incredibly sophisticated and reliable.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Smart Manufacturing Corp",
      role: "Head of Automation",
      content: "The autonomous manufacturing systems have increased our efficiency by 300%. The predictive maintenance features alone have saved us millions.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      company: "Urban Planning Institute",
      role: "Smart City Director",
      content: "Implementing autonomous systems for our smart city infrastructure has been seamless. The safety protocols and compliance features are outstanding.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Next-Gen Autonomous Technology | Zion Tech Group</title>
        <meta
          name="description"
          content="Deploy cutting-edge AI autonomous systems with Zion Tech Group. Advanced decision-making, machine learning, and real-time processing for autonomous operations."
        />
        <meta
          name="keywords"
          content="AI autonomous systems, autonomous vehicles, machine learning, computer vision, autonomous robotics, smart manufacturing, autonomous drones"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
              <Bot className="w-4 h-4 text-indigo-400 mr-2" />
              <span className="text-indigo-400 text-sm font-medium">Next-Generation Autonomy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                AI Autonomous Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deploy cutting-edge AI autonomous systems that think, learn, and act independently. 
              From autonomous vehicles to smart manufacturing, revolutionize your operations with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Autonomous Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">99.9%</div>
                <div className="text-gray-300">Decision Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Autonomous Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Deployed Systems</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for sophisticated autonomous system deployment and operation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous System Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with our advanced autonomous system solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous System Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the autonomous system capabilities that match your operational requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-indigo-400 bg-gradient-to-br from-indigo-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-indigo-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Innovation Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our autonomous system solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Autonomous Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous revolution with Zion Tech Group's cutting-edge AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Autonomous Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
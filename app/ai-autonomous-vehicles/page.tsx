import { ArrowRight, Car, Brain, Shield, Zap, BarChart3, CheckCircle, Star, Target, MapPin, Navigation, Camera } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiAutonomousVehicles() {
  const features = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "AI-Powered Navigation",
      description: "Advanced autonomous driving systems with real-time decision making and path planning capabilities"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Multi-sensor fusion with cameras, LiDAR, and radar for 360-degree environmental awareness"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Systems",
      description: "Redundant safety mechanisms with fail-safe protocols and emergency response capabilities"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Fleet Management",
      description: "Comprehensive fleet analytics with performance monitoring, route optimization, and maintenance scheduling"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Smart Routing",
      description: "AI-optimized route planning with real-time traffic analysis and dynamic rerouting capabilities"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Edge Computing",
      description: "On-board AI processing with low-latency decision making for real-time autonomous operations"
    }
  ];

  const pricingPlans = [
    {
      name: "Development",
      price: "$2,999",
      period: "/month",
      description: "Perfect for R&D teams",
      features: [
        "Up to 5 vehicles",
        "Basic AI models",
        "Development tools",
        "Standard support",
        "Email support",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Pilot Program",
      price: "$7,999",
      period: "/month",
      description: "Most popular for testing",
      features: [
        "Up to 25 vehicles",
        "Advanced AI models",
        "Real-time monitoring",
        "Fleet management",
        "Priority support",
        "90-day data retention",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Production",
      price: "$19,999",
      period: "/month",
      description: "For commercial deployment",
      features: [
        "Unlimited vehicles",
        "Production AI models",
        "Real-time monitoring",
        "Advanced analytics",
        "White-label solutions",
        "24/7 dedicated support",
        "Unlimited data retention",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kim",
      company: "Autonomous Solutions Inc.",
      role: "CTO",
      content: "Zion AI Autonomous Vehicles platform accelerated our development by 2 years. The computer vision accuracy is exceptional.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "Fleet Management Corp",
      role: "Operations Director",
      content: "The fleet management capabilities transformed our logistics operations. Route optimization alone saved us 30% in fuel costs.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Smart City Solutions",
      role: "Project Manager",
      content: "The safety systems and edge computing capabilities give us confidence in autonomous deployment. Outstanding platform.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Vehicles - Advanced Self-Driving Technology Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Develop autonomous vehicles with Zion AI platform. Advanced computer vision, navigation systems, and fleet management for self-driving technology."
        />
        <meta
          name="keywords"
          content="autonomous vehicles, self-driving cars, AI navigation, computer vision, fleet management, autonomous technology"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Car className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 Autonomous Vehicle AI Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                AI Autonomous Vehicles
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of transportation with our advanced AI platform for autonomous vehicles. 
              Computer vision, navigation systems, and fleet management for next-generation self-driving technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Development
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Safety Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Fuel Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2x</div>
                <div className="text-gray-300">Faster Development</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Autonomous Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to develop and deploy autonomous vehicles with cutting-edge AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development stage. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Start Development
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
                Trusted by Autonomous Vehicle Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Autonomous Vehicles platform
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
              Ready to Build the Future of Transportation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join autonomous vehicle pioneers using our AI platform to develop next-generation self-driving technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Development
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
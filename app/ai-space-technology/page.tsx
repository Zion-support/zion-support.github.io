import { ArrowRight, Rocket, Satellite, Globe, Zap, Shield, CheckCircle, Star, Brain, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AISpaceTechnology() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "AI-Powered Mission Planning",
      description: "Autonomous mission planning and trajectory optimization using advanced AI algorithms for space exploration"
    },
    {
      icon: <Satellite className="w-6 h-6" />,
      title: "Satellite Constellation Management",
      description: "Intelligent satellite network coordination and communication optimization for maximum coverage and efficiency"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Earth Observation AI",
      description: "Real-time analysis of satellite imagery for climate monitoring, disaster response, and environmental tracking"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Space Weather Prediction",
      description: "AI-driven space weather forecasting to protect satellites and space infrastructure from solar storms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Space Debris Tracking",
      description: "Advanced AI systems for tracking and predicting space debris to prevent collisions and ensure mission safety"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Autonomous Space Systems",
      description: "Self-managing spacecraft and rovers with AI decision-making capabilities for deep space missions"
    }
  ];

  const pricingPlans = [
    {
      name: "Space Explorer",
      price: "$4,999",
      period: "/month",
      description: "Perfect for space startups and research",
      features: [
        "Basic mission planning tools",
        "Satellite tracking (up to 10 satellites)",
        "Earth observation data (1TB/month)",
        "Email support",
        "Basic space weather alerts",
        "API access for 3rd party integration"
      ],
      popular: false
    },
    {
      name: "Space Professional",
      price: "$12,999",
      period: "/month",
      description: "Most popular for space companies",
      features: [
        "Advanced mission planning with AI",
        "Satellite constellation management (up to 100 satellites)",
        "Real-time Earth observation (10TB/month)",
        "Priority support",
        "Advanced space weather prediction",
        "Space debris tracking",
        "Custom AI model training",
        "24/7 monitoring dashboard"
      ],
      popular: true
    },
    {
      name: "Space Enterprise",
      price: "$29,999",
      period: "/month",
      description: "For large space organizations",
      features: [
        "Unlimited mission planning",
        "Unlimited satellite management",
        "Unlimited Earth observation data",
        "Dedicated space operations center",
        "Custom space AI solutions",
        "On-premise deployment",
        "White-label solutions",
        "Direct access to space data feeds"
      ],
      popular: false
    }
  ];

  const applications = [
    {
      title: "Climate Monitoring",
      description: "Real-time climate data analysis and environmental change detection using satellite imagery",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Disaster Response",
      description: "AI-powered disaster assessment and emergency response coordination using space data",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Agriculture Intelligence",
      description: "Crop monitoring, yield prediction, and precision agriculture using satellite data",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Space Mining",
      description: "Asteroid and planetary resource identification and mining mission planning",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. Alex Chen",
      company: "SpaceX Advanced Technologies",
      role: "Mission Director",
      content: "Zion's AI space technology reduced our mission planning time by 80% while improving accuracy by 95%. Revolutionary technology.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "NASA Jet Propulsion Laboratory",
      role: "AI Research Lead",
      content: "The autonomous space systems capabilities are game-changing. We can now plan missions that were previously impossible.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      company: "European Space Agency",
      role: "Operations Director",
      content: "Space debris tracking and collision avoidance has never been more accurate. This technology is saving millions in satellite costs.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Space Technology Solutions - Space AI | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI space technology solutions for satellite management, mission planning, and space exploration. Advanced space AI for the next frontier."
        />
        <meta
          name="keywords"
          content="space AI, satellite management, space mission planning, earth observation, space weather, space debris tracking, space technology"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
              <Rocket className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">The Final Frontier</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI Space Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of space exploration with artificial intelligence. From satellite management 
              to autonomous space missions, we're pushing the boundaries of what's possible in space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Launch Your Mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Space Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Satellites Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Mission Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Space Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Space Missions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Space AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology designed specifically for space applications and exploration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Space Technology Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our space AI technology is transforming industries and advancing humanity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {application.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {application.title}
                  </h3>
                  <p className="text-gray-300">
                    {application.description}
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
                Space Technology Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the space technology solution that matches your mission requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Launch Mission
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
                Trusted by Space Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what space industry leaders say about our AI technology
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
              Ready to Reach for the Stars?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the space technology revolution and explore the universe with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Launch Your Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Space Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
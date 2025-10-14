import { Link } from "react-router-dom";

export default function ZionAiEnergyManager() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Energy Monitoring",
      description: "Track energy consumption across all devices and systems with AI-powered analytics"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Predictive Energy Optimization",
      description: "AI algorithms predict energy usage patterns and optimize consumption automatically"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Carbon Footprint Tracking",
      description: "Monitor and reduce your carbon footprint with detailed environmental impact reports"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analytics Dashboard",
      description: "Comprehensive energy insights with customizable reports and trend analysis"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Recommendations",
      description: "Get personalized recommendations to reduce energy costs and improve efficiency"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automated Energy Management",
      description: "Smart automation controls devices based on usage patterns and energy prices"
    }
  ];

  const pricingPlans = [
    {
      name: "Home",
      price: "$19",
      period: "/month",
      description: "Perfect for residential use",
      features: [
        "Up to 10 devices",
        "Basic energy monitoring",
        "Monthly reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$79",
      period: "/month",
      description: "Most popular for small businesses",
      features: [
        "Up to 100 devices",
        "Advanced AI analytics",
        "Real-time optimization",
        "Carbon tracking",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited devices",
        "Custom AI models",
        "White-label solution",
        "24/7 monitoring",
        "Dedicated support",
        "Advanced integrations",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "GreenTech Solutions",
      role: "Facilities Manager",
      content: "Zion AI Energy Manager reduced our energy costs by 35% in just 6 months. The AI recommendations are incredibly accurate.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      company: "Sustainable Living Co.",
      role: "CEO",
      content: "This tool has helped us achieve our carbon neutrality goals. The real-time monitoring and automated controls are game-changing.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Manufacturing Corp",
      role: "Operations Director",
      content: "Outstanding energy management solution. We've saved over $50,000 annually while reducing our environmental impact.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Energy Manager - Smart Energy Management | Zion Tech Group</title>
        <meta
          name="description"
          content="Optimize energy consumption with Zion AI Energy Manager. AI-powered energy monitoring, predictive optimization, carbon tracking, and automated energy management for sustainable operations."
        />
        <meta
          name="keywords"
          content="AI energy management, energy monitoring, carbon footprint, energy optimization, smart energy, sustainability, energy analytics, green technology"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-energy-manager" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
              <Leaf className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Sustainable Energy Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Zion AI Energy Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize energy consumption with AI-powered monitoring, predictive analytics, and automated management. 
              Reduce costs, minimize environmental impact, and achieve sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">35%</div>
                <div className="text-gray-300">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50%</div>
                <div className="text-gray-300">Carbon Footprint Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Energy Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize energy consumption and achieve sustainability goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Flexible Energy Management Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your energy management needs. All plans include 30-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-500/10'
                      : 'border-white/20 hover:border-green-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
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
                Trusted by Energy-Conscious Organizations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what organizations say about Zion AI Energy Manager
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
              Ready to Optimize Your Energy Usage?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations using Zion AI Energy Manager to reduce costs and environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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
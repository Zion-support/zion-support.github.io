import { Link } from "react-router-dom";

export default function AiClimatePredictionEngine() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Advanced Weather Modeling",
      description: "AI-powered weather prediction with 95% accuracy up to 30 days in advance"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Climate Trend Analysis",
      description: "Long-term climate pattern analysis and temperature trend predictions"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Extreme Weather Alerts",
      description: "Early warning system for hurricanes, tornadoes, and severe weather events"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Precipitation Forecasting",
      description: "Accurate rainfall, snowfall, and drought prediction models"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Models",
      description: "Self-improving AI models that learn from historical weather data"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Comprehensive weather data for every location worldwide with high resolution"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "7-day weather forecasts",
        "Basic climate data",
        "Email alerts",
        "API access (1,000 calls/day)",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Most popular for enterprises",
      features: [
        "30-day weather forecasts",
        "Advanced climate modeling",
        "Real-time alerts",
        "API access (10,000 calls/day)",
        "Priority support",
        "Custom integrations",
        "Historical data access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "90-day weather forecasts",
        "Custom climate models",
        "24/7 monitoring",
        "Unlimited API access",
        "Dedicated support",
        "White-label solution",
        "Advanced analytics",
        "Custom data sources"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      company: "Climate Research Institute",
      role: "Lead Meteorologist",
      content: "Zion's AI Climate Prediction Engine has revolutionized our research. The accuracy is unprecedented and has helped us make breakthrough discoveries.",
      rating: 5
    },
    {
      name: "Michael Torres",
      company: "Agricultural Solutions Inc.",
      role: "Operations Director",
      content: "This tool has transformed our farming operations. We can now plan planting and harvesting with incredible precision, increasing yields by 25%.",
      rating: 5
    },
    {
      name: "Jennifer Lee",
      company: "Renewable Energy Corp",
      role: "CEO",
      content: "The climate predictions help us optimize our renewable energy production. We've increased efficiency by 30% and reduced costs significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - Advanced Weather Intelligence | Zion Tech Group</title>
        <meta
          name="description"
          content="Revolutionary AI-powered climate prediction engine with 95% accuracy. Advanced weather modeling, extreme weather alerts, and long-term climate analysis for businesses and researchers."
        />
        <meta
          name="keywords"
          content="AI climate prediction, weather forecasting, climate modeling, extreme weather alerts, meteorological data, climate research, weather intelligence"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-climate-prediction-engine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">95% Prediction Accuracy</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                AI Climate Prediction Engine
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered climate prediction with unprecedented accuracy. 
              Advanced weather modeling, extreme weather alerts, and long-term climate analysis for informed decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30</div>
                <div className="text-gray-300">Days Forecast Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
                <div className="text-gray-300">Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Climate Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for the most accurate climate predictions available.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
                Flexible Climate Intelligence Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your climate prediction needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-blue-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
                Trusted by Climate Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what climate researchers and meteorologists say about our AI prediction engine
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
              Ready to Predict the Future of Climate?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading researchers and organizations using AI Climate Prediction Engine for accurate weather forecasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
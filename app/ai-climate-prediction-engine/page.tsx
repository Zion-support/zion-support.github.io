import { ArrowRight, Cloud, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Leaf } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIClimatePredictionEngine() {
  const features = [
    {
      title: "AI-Powered Climate Modeling",
      description: "Advanced AI algorithms that model climate patterns, weather systems, and environmental changes with unprecedented accuracy",
      icon: <Cloud className="w-6 h-6" />,
      included: true
    },
    {
      title: "Predictive Weather Analytics",
      description: "Long-term weather predictions with climate change impact analysis and extreme weather event forecasting",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Environmental Data Integration",
      description: "Integrate data from satellites, weather stations, and environmental sensors for comprehensive climate analysis",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Climate Risk Assessment",
      description: "Assess climate risks for businesses, agriculture, and infrastructure with detailed impact analysis",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Sustainability Analytics",
      description: "Track and analyze sustainability metrics, carbon footprint, and environmental impact over time",
      icon: <Leaf className="w-6 h-6" />,
      included: true
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor climate conditions in real-time with alerts and notifications for significant changes",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Researcher",
      price: 199,
      period: "month",
      description: "Perfect for climate researchers",
      features: [
        "Up to 5 climate models",
        "Basic predictions",
        "Email support",
        "1 user account",
        "Standard data sources",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 499,
      period: "month",
      description: "Ideal for organizations",
      features: [
        "Up to 25 climate models",
        "Advanced predictions",
        "Priority support",
        "Up to 10 user accounts",
        "All data sources",
        "Advanced analytics",
        "Risk assessment",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 999,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited climate models",
        "Custom predictions",
        "Dedicated support",
        "Unlimited users",
        "Custom data sources",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const climateStats = [
    { number: "95%", label: "Prediction Accuracy", icon: <Cloud className="w-6 h-6" /> },
    { number: "50+", label: "Climate Data Sources", icon: <Globe className="w-6 h-6" /> },
    { number: "30%", label: "Risk Reduction", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Climate Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Climate Research Institute",
      role: "Senior Climate Scientist",
      content: "AI Climate Prediction Engine has revolutionized our research. We've achieved 95% prediction accuracy and can now model complex climate scenarios that were previously impossible.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Agricultural Corporation",
      role: "Risk Manager",
      content: "The climate risk assessment and predictive analytics have helped us reduce our climate-related risks by 30%. We can now make informed decisions about crop planning and resource allocation.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Johnson",
      company: "Environmental NGO",
      role: "Program Director",
      content: "The sustainability analytics and environmental data integration features have given us complete visibility into climate impact. We can now track and report on environmental progress effectively.",
      rating: 5,
      avatar: "LJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Prediction Engine - AI-Powered Climate Modeling Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Predict climate with AI Climate Prediction Engine - the ultimate AI-powered climate modeling platform. Weather predictions, climate risk assessment, and sustainability analytics. Starting at $199/month."
        />
        <meta
          name="keywords"
          content="climate prediction, AI climate modeling, weather prediction, climate risk assessment, sustainability analytics, environmental monitoring, AI climate prediction engine"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 mb-6">
              <Cloud className="w-4 h-4 text-teal-400 mr-2" />
              <span className="text-teal-400 text-sm font-medium">#1 Climate Prediction Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 animate-pulse">
                AI Climate Prediction Engine
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered climate prediction platform that models climate patterns and environmental changes. 
              Achieve 95% prediction accuracy with advanced climate modeling and risk assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Climate Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {climateStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-teal-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Advanced Climate Prediction Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to predict and analyze climate patterns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-teal-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Climate Prediction Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your climate prediction needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-teal-500/50 bg-gradient-to-br from-teal-500/10 to-cyan-500/10' 
                      : 'border-white/20 hover:border-teal-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-teal-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <RouterLink
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg hover:shadow-teal-500/25'
                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </RouterLink>
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
                Trusted by Climate Scientists
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Climate Prediction Engine
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Cloud key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-teal-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Predicting Climate Patterns
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of climate scientists who use AI Climate Prediction Engine to understand and predict climate change. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-teal-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-teal-400 text-teal-400 px-8 py-4 rounded-lg font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
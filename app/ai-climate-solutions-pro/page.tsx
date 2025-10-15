import { ArrowRight, Cloud, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, Shield, Leaf } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";

export default function AIClimateSolutionsPro() {
  const features = [
    {
      title: "AI-Powered Climate Solutions",
      description: "Comprehensive AI solutions for climate change mitigation, adaptation, and environmental sustainability",
      icon: <Leaf className="w-6 h-6" />,
      included: true
    },
    {
      title: "Carbon Footprint Analysis",
      description: "Advanced AI algorithms that analyze and optimize carbon footprints across organizations and supply chains",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Sustainability Planning",
      description: "Intelligent sustainability planning with AI-powered recommendations for environmental impact reduction",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time environmental monitoring with AI-powered alerts and automated compliance reporting",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Climate Risk Management",
      description: "Comprehensive climate risk assessment and management with predictive analytics and mitigation strategies",
      icon: <Shield className="w-6 h-6" />,
      included: true
    },
    {
      title: "Green Technology Integration",
      description: "Integrate renewable energy, smart grids, and green technologies with AI-powered optimization",
      icon: <Zap className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small organizations",
      features: [
        "Up to 3 climate solutions",
        "Basic carbon analysis",
        "Email support",
        "1 user account",
        "Standard monitoring",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 699,
      period: "month",
      description: "Ideal for growing organizations",
      features: [
        "Up to 15 climate solutions",
        "Advanced carbon analysis",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced monitoring",
        "Advanced reporting",
        "Risk management",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1499,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited climate solutions",
        "Custom carbon analysis",
        "Dedicated support",
        "Unlimited users",
        "Custom monitoring",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const climateStats = [
    { number: "40%", label: "Carbon Reduction", icon: <Leaf className="w-6 h-6" /> },
    { number: "95%", label: "Compliance Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "100+", label: "Climate Solutions", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Environmental Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      company: "Global Manufacturing",
      role: "Sustainability Director",
      content: "AI Climate Solutions Pro has helped us reduce our carbon footprint by 40% and achieve 95% compliance with environmental regulations. The AI-powered recommendations are incredibly effective.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Energy Corporation",
      role: "Environmental Manager",
      content: "The sustainability planning and green technology integration features have transformed our approach to environmental management. We can now optimize our operations for maximum sustainability.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Lisa Johnson",
      company: "Urban Development",
      role: "Climate Risk Manager",
      content: "The climate risk management and environmental monitoring features have given us complete visibility into our environmental impact. We can now make data-driven decisions for climate resilience.",
      rating: 5,
      avatar: "LJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - AI-Powered Climate Solutions Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Solve climate challenges with AI Climate Solutions Pro - the ultimate AI-powered climate solutions platform. Carbon analysis, sustainability planning, and environmental monitoring. Starting at $299/month."
        />
        <meta
          name="keywords"
          content="climate solutions, AI climate solutions, carbon footprint analysis, sustainability planning, environmental monitoring, climate risk management, AI climate solutions pro"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
              <Leaf className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">#1 Climate Solutions Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 animate-pulse">
                AI Climate Solutions Pro
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered climate solutions platform that helps organizations tackle climate change. 
              Achieve 40% carbon reduction with intelligent sustainability planning and environmental monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </RouterLink>
            </div>

            {/* Climate Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {climateStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  Advanced Climate Solutions Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to tackle climate change effectively
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-emerald-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                  Climate Solutions Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your climate solutions needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-green-500/10' 
                      : 'border-white/20 hover:border-emerald-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">${plan.price}</span>
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
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
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
                Trusted by Sustainability Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Climate Solutions Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Leaf key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center text-white font-semibold mr-3">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-emerald-900/30 to-green-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Solving Climate Challenges
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations who use AI Climate Solutions Pro to tackle climate change. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RouterLink
                to="/contact"
                className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </RouterLink>
              <RouterLink
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Brain, BarChart3, Shield, Star, ArrowRight, CheckCircle, Users, Clock, Award, Globe, Zap, Cloud } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
import NeonText from '../components/NeonText';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';

const AIClimateSolutionsProPage = () => {
  const features = [
    {
      title: "Climate Prediction Models",
      description: "Advanced AI models for accurate climate forecasting and environmental impact assessment",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Weather prediction", "Climate modeling", "Risk assessment", "Trend analysis"]
    },
    {
      title: "Carbon Footprint Optimization",
      description: "AI-powered systems to reduce carbon emissions and optimize energy consumption",
      icon: <Leaf className="w-6 h-6" />,
      benefits: ["Emission tracking", "Energy optimization", "Carbon offsetting", "Sustainability metrics"]
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time monitoring of environmental conditions using IoT and AI sensors",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["Air quality monitoring", "Water quality tracking", "Biodiversity assessment", "Pollution detection"]
    },
    {
      title: "Green Energy Management",
      description: "Intelligent management of renewable energy sources and smart grid optimization",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["Smart grid optimization", "Renewable integration", "Energy storage", "Load balancing"]
    }
  ];

  const pricingPlans = [
    {
      name: "Climate Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small organizations",
      features: [
        "Basic climate models",
        "Carbon tracking",
        "Environmental monitoring",
        "Standard reports",
        "Email support",
        "5 monitoring points"
      ],
      popular: false
    },
    {
      name: "Climate Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced AI models",
        "Real-time monitoring",
        "Custom integrations",
        "Priority support",
        "API access",
        "50 monitoring points",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Climate Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large-scale climate initiatives",
      features: [
        "Unlimited monitoring",
        "Custom AI development",
        "24/7 dedicated support",
        "On-premise deployment",
        "White-label solution",
        "Global coverage",
        "Compliance assistance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Maria Santos",
      role: "Chief Sustainability Officer",
      company: "EcoTech Global",
      content: "Zion's climate solutions have helped us reduce our carbon footprint by 60% while improving our environmental monitoring capabilities. The AI predictions are incredibly accurate.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Head of Environmental Science",
      company: "GreenFuture Corp",
      content: "The environmental monitoring system has given us unprecedented insights into our impact on local ecosystems. We can now make data-driven decisions for sustainability.",
      rating: 5
    },
    {
      name: "Dr. Lisa Chen",
      role: "Climate Research Director",
      company: "University Research Center",
      content: "The climate prediction models are state-of-the-art. They've significantly improved our research capabilities and helped us publish groundbreaking papers.",
      rating: 5
    }
  ];

  const stats = [
    { number: "60%", label: "Carbon Reduction", icon: <Leaf className="w-6 h-6" /> },
    { number: "95%", label: "Prediction Accuracy", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "100+", label: "Environmental Projects", icon: <Globe className="w-6 h-6" /> },
    { number: "1M+", label: "Data Points Analyzed", icon: <Cloud className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer
        title="AI Climate Solutions Pro - Advanced Environmental AI | Zion Tech Group"
        description="Revolutionary AI-powered climate solutions for environmental monitoring, carbon optimization, and climate prediction. Build a sustainable future with intelligent technology."
        keywords="AI climate solutions, environmental AI, climate prediction, carbon optimization, environmental monitoring, sustainability, green technology"
        canonical="https://ziontechgroup.com/ai-climate-solutions-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI Climate Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AI Climate
            <NeonText variant="green" size="6xl" animate={true}>
              {" "}Solutions Pro
            </NeonText>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered climate solutions that help organizations monitor, predict, 
            and optimize their environmental impact. Build a sustainable future with intelligent technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Climate Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Leaf className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
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
              Climate Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI technologies designed to help organizations understand, monitor, 
              and optimize their environmental impact for a sustainable future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCardEnhanced
                key={index}
                variant="glass"
                hover={true}
                glow={true}
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCardEnhanced>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Climate-First Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the climate intelligence level that matches your environmental goals and impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCardEnhanced
                key={index}
                variant={plan.popular ? "neon" : "glass"}
                hover={true}
                glow={true}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </FuturisticCardEnhanced>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Climate Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what environmental leaders are saying about our AI climate solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCardEnhanced
                key={index}
                variant="holographic"
                hover={true}
                glow={true}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCardEnhanced>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Save the Planet?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join the climate revolution. Use AI to monitor, predict, and optimize your environmental impact. 
            Build a sustainable future with intelligent technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Climate Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Clock className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIClimateSolutionsProPage;
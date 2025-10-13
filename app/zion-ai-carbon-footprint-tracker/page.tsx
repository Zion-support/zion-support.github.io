import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BarChart3, Zap, Globe, ArrowRight, CheckCircle, Star, Users, Award, Clock, Target, Sparkles, Cpu, Database, Lock, TrendingUp, Shield } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const ZionAICarbonFootprintTracker = () => {
  const features = [
    {
      title: "Real-Time Carbon Monitoring",
      description: "AI-powered tracking of carbon emissions across all business operations with real-time analytics",
      icon: <Leaf className="w-8 h-8" />,
      benefits: ["Real-time tracking", "Automated data collection", "Multi-source integration", "Instant alerts"]
    },
    {
      title: "Predictive Carbon Analytics",
      description: "Machine learning algorithms predict future emissions and suggest optimization strategies",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Emission forecasting", "Trend analysis", "Optimization recommendations", "Risk assessment"]
    },
    {
      title: "Sustainability Reporting",
      description: "Automated generation of comprehensive sustainability reports for compliance and transparency",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Automated reporting", "Compliance tracking", "Stakeholder dashboards", "Audit trails"]
    },
    {
      title: "Carbon Offset Marketplace",
      description: "Integrated marketplace for purchasing verified carbon credits and offsetting emissions",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Verified offsets", "Marketplace integration", "Portfolio management", "Impact tracking"]
    }
  ];

  const capabilities = [
    {
      category: "Data Integration",
      items: [
        "ERP system integration",
        "IoT sensor data collection",
        "Energy consumption tracking",
        "Transportation monitoring",
        "Supply chain analysis"
      ]
    },
    {
      category: "AI Analytics",
      items: [
        "Machine learning models",
        "Pattern recognition",
        "Anomaly detection",
        "Predictive modeling",
        "Optimization algorithms"
      ]
    },
    {
      category: "Reporting & Compliance",
      items: [
        "GHG Protocol compliance",
        "ISO 14064 standards",
        "CDP reporting",
        "GRI guidelines",
        "Custom reporting"
      ]
    },
    {
      category: "Sustainability Management",
      items: [
        "Goal setting & tracking",
        "Action plan generation",
        "Progress monitoring",
        "Stakeholder engagement",
        "Performance benchmarking"
      ]
    }
  ];

  const pricing = [
    {
      name: "Carbon Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Basic carbon tracking",
        "Up to 5 data sources",
        "Standard reporting",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Carbon Professional",
      price: "$999",
      period: "per month",
      description: "Comprehensive solution for growing businesses with complex operations",
      features: [
        "Advanced AI analytics",
        "Unlimited data sources",
        "Custom reporting",
        "Priority support",
        "API access",
        "Carbon offset marketplace"
      ],
      popular: true
    },
    {
      name: "Carbon Enterprise",
      price: "$2,999",
      period: "per month",
      description: "Complete sustainability platform for large organizations",
      features: [
        "Enterprise AI platform",
        "Custom integrations",
        "24/7 dedicated support",
        "White-label solutions",
        "On-site consultation",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "50%", label: "Average Emission Reduction", icon: <Leaf className="w-6 h-6" /> },
    { number: "99.9%", label: "Data Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "1000+", label: "Companies Served", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Carbon Footprint Tracker | Zion Tech Group - Sustainable Business Solutions"
        description="AI-powered carbon footprint tracking and sustainability management platform. Reduce emissions, achieve compliance, and drive sustainable business growth with advanced analytics."
        keywords="carbon footprint tracker, sustainability management, carbon emissions, ESG reporting, climate tech, green business, carbon offset, sustainability analytics"
        canonical="https://ziontechgroup.com/zion-ai-carbon-footprint-tracker"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Leaf className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">Sustainable Business Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              Zion AI Carbon Footprint Tracker
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business sustainability with AI-powered carbon footprint tracking, 
            predictive analytics, and automated reporting. Achieve net-zero goals and drive 
            sustainable growth with intelligent insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Tracking Now
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Powered Sustainability Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive carbon tracking and sustainability management capabilities
            </p>
          </div>
          
          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive sustainability management tools and integrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">{capability.category}</h3>
                <div className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Carbon Tracking Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect sustainability solution for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
                  : 'border-white/20 hover:border-green-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-600 text-white hover:from-green-600 hover:to-cyan-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                  }`}
                >
                  Start Tracking
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            Join thousands of businesses already reducing their carbon footprint with our AI-powered 
            sustainability platform. Start your journey to net-zero today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Start Tracking Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Leaf className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAICarbonFootprintTracker;
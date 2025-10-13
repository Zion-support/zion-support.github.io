import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Zap, 
  BarChart3, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Database,
  Cpu,
  Smartphone,
  TrendingUp,
  Home,
  Car,
  Factory,
  Heart
} from 'lucide-react';

export default function AIIoTSolutionsPro() {
  const features = [
    {
      title: "AI-Powered Edge Computing",
      description: "Intelligent edge devices that process data locally using AI algorithms for real-time decision making.",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Real-time processing", "Reduced latency", "Privacy protection", "Cost efficiency"]
    },
    {
      title: "Predictive Maintenance AI",
      description: "Machine learning algorithms that predict equipment failures before they occur, reducing downtime and costs.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Preventive maintenance", "Cost reduction", "Increased uptime", "Asset optimization"]
    },
    {
      title: "Smart City Integration",
      description: "Comprehensive IoT solutions for smart cities including traffic management, energy optimization, and public safety.",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Traffic optimization", "Energy efficiency", "Public safety", "Citizen services"]
    },
    {
      title: "Industrial IoT Analytics",
      description: "Advanced analytics platform for industrial IoT data with real-time monitoring and optimization capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Real-time monitoring", "Performance optimization", "Quality control", "Process automation"]
    }
  ];

  const industries = [
    {
      name: "Smart Manufacturing",
      icon: <Factory className="w-8 h-8" />,
      applications: [
        "Predictive maintenance",
        "Quality control automation",
        "Supply chain optimization",
        "Energy management"
      ],
      benefits: "30-50% efficiency gains",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Smart Healthcare",
      icon: <Heart className="w-8 h-8" />,
      applications: [
        "Patient monitoring",
        "Medical device integration",
        "Health data analytics",
        "Remote diagnostics"
      ],
      benefits: "40-60% cost reduction",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Smart Transportation",
      icon: <Car className="w-8 h-8" />,
      applications: [
        "Fleet management",
        "Traffic optimization",
        "Predictive maintenance",
        "Route optimization"
      ],
      benefits: "25-40% fuel savings",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Smart Buildings",
      icon: <Home className="w-8 h-8" />,
      applications: [
        "Energy management",
        "Occupancy optimization",
        "Security systems",
        "Climate control"
      ],
      benefits: "20-35% energy savings",
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingTiers = [
    {
      name: "IoT Starter",
      price: "$1,999",
      period: "month",
      description: "Perfect for small businesses starting their IoT journey",
      features: [
        "Up to 100 connected devices",
        "Basic AI analytics",
        "Cloud dashboard",
        "Email support",
        "Standard security"
      ],
      popular: false
    },
    {
      name: "IoT Professional",
      price: "$4,999",
      period: "month",
      description: "Ideal for growing businesses with complex IoT needs",
      features: [
        "Up to 1,000 connected devices",
        "Advanced AI analytics",
        "Edge computing capabilities",
        "Custom integrations",
        "Priority support",
        "Real-time monitoring"
      ],
      popular: true
    },
    {
      name: "IoT Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large-scale IoT implementations",
      features: [
        "Unlimited connected devices",
        "Custom AI algorithms",
        "On-premise deployment",
        "White-label solutions",
        "Dedicated support team",
        "Training & certification"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "10,000+", label: "Connected Devices", icon: <Wifi className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "50+", label: "Industry Solutions", icon: <Factory className="w-6 h-6" /> },
    { number: "24/7", label: "AI Monitoring", icon: <Cpu className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI IoT Solutions Pro - Zion Tech Group | Smart IoT with AI</title>
        <meta
          name="description"
          content="Revolutionary AI-powered IoT solutions for smart manufacturing, healthcare, transportation, and buildings. Transform your business with intelligent connected devices."
        />
        <meta
          name="keywords"
          content="AI IoT, smart IoT, industrial IoT, edge computing, predictive maintenance, smart cities, IoT analytics, connected devices, IoT solutions"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI IoT Solutions Pro",
            "description": "Revolutionary AI-powered IoT solutions for smart manufacturing, healthcare, transportation, and buildings",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "1999",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "1999",
                "priceCurrency": "USD",
                "billingIncrement": "P1M"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Intelligent IoT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              AI IoT Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Pro
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with AI-powered IoT solutions. From smart manufacturing to intelligent cities, 
              we provide comprehensive IoT platforms enhanced with artificial intelligence for maximum efficiency and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Live Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AI IoT Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the revolutionary capabilities of AI-enhanced IoT technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 text-center mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-cyan-300">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered IoT solutions for every industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {industry.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    {industry.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <Zap className="w-3 h-3 mr-2 text-cyan-400" />
                        {app}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold text-lg">{industry.benefits}</div>
                    <div className="text-gray-400 text-sm">Average Benefits</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                IoT AI Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect IoT AI solution for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    tier.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {tier.price}
                      <span className="text-lg text-gray-400">/{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform with AI IoT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the IoT revolution and transform your business with AI-powered connected devices. 
              Contact our IoT experts today for a personalized consultation.
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start IoT Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
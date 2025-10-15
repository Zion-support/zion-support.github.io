import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, Globe, CheckCircle, ArrowRight, Star, Phone, Mail, Play, Settings, Smartphone, Cloud, Cpu, BarChart3, Activity } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Fast 5G Networks",
      description: "Deploy cutting-edge 5G infrastructure with speeds up to 10 Gbps and ultra-low latency under 1ms.",
      benefits: ["10 Gbps speeds", "Sub-1ms latency", "Massive connectivity", "Network slicing"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Edge Computing Integration",
      description: "Implement edge computing solutions to process data closer to the source for maximum performance.",
      benefits: ["Edge servers", "Local processing", "Reduced latency", "Real-time analytics"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "IoT Device Management",
      description: "Connect and manage millions of IoT devices with our advanced device management platform.",
      benefits: ["Device provisioning", "Remote management", "Firmware updates", "Security monitoring"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Protect your 5G network with enterprise-grade security including encryption and threat detection.",
      benefits: ["End-to-end encryption", "Threat detection", "Access control", "Compliance"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Network Analytics",
      description: "Monitor and optimize your 5G network performance with real-time analytics and insights.",
      benefits: ["Real-time monitoring", "Performance optimization", "Predictive analytics", "Custom dashboards"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored 5G implementations designed specifically for your business requirements and use cases.",
      benefits: ["Custom architecture", "Scalable design", "Integration support", "Future-proofing"]
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Enable Industry 4.0 with 5G-powered smart factories and automated production lines",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Automated production", "Real-time monitoring", "Predictive maintenance", "Quality control"]
    },
    {
      title: "Smart Cities",
      description: "Build connected cities with 5G infrastructure for traffic management and public services",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Traffic optimization", "Public safety", "Environmental monitoring", "Citizen services"]
    },
    {
      title: "Healthcare",
      description: "Revolutionize healthcare with 5G-enabled telemedicine and remote patient monitoring",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Remote surgery", "Patient monitoring", "Medical imaging", "Emergency response"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Enable autonomous driving with ultra-reliable 5G connectivity and edge computing",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Vehicle-to-everything", "Real-time navigation", "Safety systems", "Fleet management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$999",
      period: "month",
      description: "Perfect for small businesses starting their 5G journey",
      features: [
        "Basic 5G setup",
        "Up to 100 devices",
        "Standard support",
        "Basic analytics",
        "Email support",
        "1 year warranty"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "month",
      description: "Comprehensive 5G solution for medium to large enterprises",
      features: [
        "Advanced 5G infrastructure",
        "Up to 1,000 devices",
        "Edge computing",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "3 years warranty",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      description: "Tailored 5G solutions for large-scale deployments",
      features: [
        "Custom 5G architecture",
        "Unlimited devices",
        "Full edge computing",
        "AI-powered analytics",
        "Dedicated support team",
        "Custom development",
        "Lifetime warranty",
        "On-site support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "Manufacturing Corp",
      role: "CTO",
      content: "The 5G implementation has transformed our manufacturing operations. We've seen a 60% increase in efficiency and reduced downtime by 80%.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "Smart City Initiative",
      role: "Project Director",
      content: "Zion Tech Group's 5G solution has enabled us to build a truly connected city. The performance and reliability exceed our expectations.",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      company: "Regional Hospital",
      role: "IT Director",
      content: "The 5G network has revolutionized our telemedicine capabilities. We can now provide remote care with unprecedented quality and speed.",
      rating: 5
    }
  ];

  const technologies = [
    { name: "5G NR", description: "New Radio technology" },
    { name: "Network Slicing", description: "Virtual network segments" },
    { name: "Edge Computing", description: "Distributed processing" },
    { name: "IoT Platforms", description: "Device management" },
    { name: "AI/ML", description: "Intelligent optimization" },
    { name: "Security", description: "Advanced protection" }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation Services - Next-Gen Wireless Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G implementation services. Ultra-fast speeds, ultra-low latency, and massive IoT connectivity for the future." />
        <meta name="keywords" content="5G implementation, 5G deployment, wireless technology, IoT connectivity, edge computing, smart cities, Industry 4.0" />
        <meta property="og:title" content="5G Implementation Services - Zion Tech Group" />
        <meta property="og:description" content="Next-generation 5G wireless solutions with ultra-fast speeds and ultra-low latency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/5g-implementation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 5G Implementation Partner
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    5G Implementation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Future-proof your business with next-generation 5G wireless technology. 
                  Ultra-fast speeds, ultra-low latency, and massive IoT connectivity for the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced 5G Capabilities
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Harness the power of 5G technology with our comprehensive implementation services.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Industry Applications
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how 5G technology is transforming industries across the globe.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-6">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Cutting-Edge Technologies
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We leverage the latest 5G technologies and standards to deliver superior performance.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-cyan-400 font-bold text-lg mb-2">{tech.name}</div>
                    <div className="text-gray-300 text-sm">{tech.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the 5G implementation plan that best fits your business needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Client Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how organizations are transforming their operations with our 5G solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for the 5G Revolution?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Don't get left behind. Start your 5G transformation today and unlock the full potential of next-generation wireless technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FiveGImplementationPage;



import { ArrowRight, CheckCircle, Mail, Phone, Play, Star } from 'lucide-react';

const AIIoTManagementProPage = () => {
  const isVisible = true;
  
  const deviceTypes = [
    {
      name: "Smart Sensors",
      description: "Environmental monitoring, motion detection, and data collection sensors.",
      icon: "🌡️",
      color: "cyan"
    },
    {
      name: "Industrial Equipment",
      description: "Manufacturing machinery, production lines, and industrial automation systems.",
      icon: "🏭",
      color: "blue"
    },
    {
      name: "Smart Buildings",
      description: "HVAC systems, lighting controls, security systems, and building automation.",
      icon: "🏢",
      color: "green"
    },
    {
      name: "Connected Vehicles",
      description: "Fleet management, telematics, and autonomous vehicle systems.",
      icon: "🚗",
      color: "purple"
    },
    {
      name: "Wearable Devices",
      description: "Health monitors, fitness trackers, and personal IoT devices.",
      icon: "⌚",
      color: "pink"
    },
    {
      name: "Agricultural IoT",
      description: "Soil sensors, weather stations, irrigation systems, and crop monitoring.",
      icon: "🌾",
      color: "yellow"
    }
  ];

  const features = [
    {
      title: "Device Intelligence",
      description: "AI-powered device monitoring, predictive maintenance, and automated optimization.",
      icon: "🧠",
      benefits: ["Predictive maintenance", "Automated optimization", "Device monitoring", "Performance analytics"]
    },
    {
      title: "Edge Computing",
      description: "Real-time data processing at the device level for faster response times.",
      icon: "⚡",
      benefits: ["Real-time processing", "Low latency", "Edge analytics", "Offline capability"]
    },
    {
      title: "Protocol Support",
      description: "Support for all major IoT protocols including MQTT, CoAP, and HTTP/2.",
      icon: "🔗",
      benefits: ["Multi-protocol support", "Seamless integration", "Protocol optimization", "Universal compatibility"]
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and machine learning for IoT data insights.",
      icon: "📊",
      benefits: ["Data insights", "Machine learning", "Predictive analytics", "Real-time dashboards"]
    },
    {
      title: "Security Management",
      description: "End-to-end encryption and comprehensive security monitoring.",
      icon: "🔒",
      benefits: ["End-to-end encryption", "Security monitoring", "Access control", "Threat detection"]
    },
    {
      title: "Scalability",
      description: "Handle millions of devices with horizontal scaling and load balancing.",
      icon: "📈",
      benefits: ["Horizontal scaling", "Load balancing", "High availability", "Global deployment"]
    }
  ];


  const metrics = [
    {
      name: "Device Uptime",
      value: "99.9%",
      description: "Average device connectivity and availability",
      icon: "📊"
    },
    {
      name: "Data Processing",
      value: "1M+",
      description: "Messages processed per second",
      icon: "⚡"
    },
    {
      name: "Response Time",
      value: "< 50ms",
      description: "Average response time for device commands",
      icon: "🚀"
    },
    {
      name: "Energy Savings",
      value: "30%",
      description: "Reduction in energy consumption",
      icon: "💡"
    }
  ];

  const protocols = [
    {
      name: "MQTT",
      description: "Lightweight messaging protocol for IoT devices",
      features: ["Low bandwidth", "Reliable delivery", "QoS support"]
    },
    {
      name: "CoAP",
      description: "Constrained Application Protocol for resource-constrained devices",
      features: ["HTTP-like", "UDP-based", "RESTful"]
    },
    {
      name: "HTTP/2",
      description: "Modern web protocol with multiplexing and server push",
      features: ["Binary framing", "Stream multiplexing", "Header compression"]
    },
    {
      name: "WebSocket",
      description: "Full-duplex communication for real-time applications",
      features: ["Real-time", "Low latency", "Bidirectional"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "month",
      description: "Perfect for small IoT deployments",
      features: [
        "Up to 1,000 devices",
        "Basic monitoring",
        "Standard protocols",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for medium-sized IoT projects",
      features: [
        "Up to 10,000 devices",
        "Advanced analytics",
        "All protocols",
        "Priority support",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact",
      description: "Complete solution for large-scale IoT deployments",
      features: [
        "Unlimited devices",
        "Full AI suite",
        "White-label options",
        "Dedicated support",
        "Custom development",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "IoT Director",
      company: "Smart City Solutions",
      content: "AI IoT Management Pro has transformed our smart city infrastructure. We can now monitor and manage thousands of devices in real-time.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Manufacturing Engineer",
      company: "TechCorp",
      content: "The predictive maintenance features have reduced our equipment downtime by 50% and saved us millions in costs.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "CTO",
      company: "AgriTech Solutions",
      content: "The agricultural IoT management has revolutionized our farming operations. We can now optimize irrigation and crop yields automatically.",
      rating: 5
    }
  ];
  return (
    <>
      { /* Animated Background */ }
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        { /* Grid Pattern */ }
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={ {
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px' }}></div>
        </div>
        <main className="relative z-10">
          { /* Hero Section */ }
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI IoT Management Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI IoT Management Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your IoT ecosystem with AI-powered device intelligence, edge computing, 
                  and comprehensive management for connected devices across all industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Get IoT Assessment
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Device Types Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    All Device Types Supported
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Manage any type of connected device across all industries and use cases.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                { deviceTypes.map((device, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className={ `${device.color } mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                      { device.icon }
                    </div>
                    <div className="text-white font-semibold text-sm">{ device.name }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered IoT Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to manage your IoT ecosystem with intelligent automation and insights.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div 
                    key={index } 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      { feature.title }
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      { feature.description }
                    </p>
                    <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Metrics Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Proven IoT Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of organizations achieving remarkable IoT success with our AI platform.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                { metrics.map((metric, index) => (
                  <div key={index } className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{ metric.icon }</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{ metric.value }</div>
                    <div className="text-gray-400 text-sm">{ metric.description }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Protocols Section */ }
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Universal Protocol Support
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect devices using any major IoT protocol with seamless integration and management.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                { protocols.map((protocol, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="text-cyan-400 font-bold text-lg mb-2">{ protocol.name }</div>
                    <div className="text-gray-300 text-sm">{ protocol.description }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Scalable IoT Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your IoT deployment size and complexity.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    ) }
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      <p className="text-gray-300 mb-4">{ plan.description }</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{ plan.price }</span>
                        <span className="text-gray-400 ml-2">/month</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={ `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    IoT Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how organizations are transforming their operations with our AI IoT platform.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{ testimonial.name }</div>
                      <div className="text-cyan-400">{ testimonial.role }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your IoT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your IoT assessment today and discover how our AI-powered management 
                  platform can optimize your connected device ecosystem.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get IoT Assessment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
};
export default AIIoTManagementProPage;
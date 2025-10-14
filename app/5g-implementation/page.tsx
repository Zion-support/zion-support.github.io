import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Download,
  Play,
  Settings,
  Target,
  Globe,
  Cpu,
  Database,
  Activity,
  TrendingUp,
  Smartphone,
  Cloud,
  Server
} from 'lucide-react';

const FiveGImplementation: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Ultra-Fast Connectivity",
      description: "Deploy 5G networks with speeds up to 10 Gbps and ultra-low latency of 1ms for real-time applications.",
      benefits: ["10 Gbps speeds", "1ms latency", "Massive capacity", "Real-time processing"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IoT Integration",
      description: "Connect millions of IoT devices with 5G's massive machine-type communication capabilities.",
      benefits: ["1M devices/km²", "Low power consumption", "Long battery life", "Secure connectivity"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Deploy edge computing infrastructure to process data closer to the source for faster response times.",
      benefits: ["Edge processing", "Reduced latency", "Bandwidth optimization", "Local data processing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Implement enterprise-grade security with network slicing and end-to-end encryption.",
      benefits: ["Network slicing", "End-to-end encryption", "Zero-trust architecture", "Compliance standards"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Network Optimization",
      description: "Continuously optimize network performance with AI-powered monitoring and automated adjustments.",
      benefits: ["AI monitoring", "Auto-optimization", "Performance analytics", "Predictive maintenance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate 5G networks with cloud services for scalable and flexible deployments.",
      benefits: ["Cloud-native architecture", "Scalable deployment", "Flexible resources", "Hybrid cloud support"]
    }
  ];

  const pricingTiers = [
    {
      name: "Small Business",
      price: "$999",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 devices",
        "Basic 5G coverage",
        "Standard security",
        "Email support",
        "Basic monitoring",
        "Cloud integration"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      description: "Ideal for medium to large enterprises",
      features: [
        "Up to 1,000 devices",
        "Advanced 5G features",
        "Enhanced security",
        "Priority support",
        "Advanced monitoring",
        "Edge computing",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: true
    },
    {
      name: "Custom Solution",
      price: "Contact Us",
      period: "for pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited devices",
        "Full 5G capabilities",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom monitoring",
        "Private 5G networks",
        "On-premise deployment",
        "Custom development"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CTO, SmartCity Corp",
      content: "The 5G implementation has transformed our smart city infrastructure. We've achieved 90% faster data processing and improved citizen services significantly.",
      rating: 5,
      company: "SmartCity Corp"
    },
    {
      name: "Robert Chen",
      role: "IT Director, Manufacturing Inc",
      content: "Outstanding 5G solution! Our IoT devices now communicate seamlessly, and we've reduced operational costs by 40% through improved efficiency.",
      rating: 5,
      company: "Manufacturing Inc"
    },
    {
      name: "Sarah Williams",
      role: "CEO, TechStart",
      content: "The edge computing capabilities and ultra-low latency have enabled us to build next-generation applications that weren't possible before.",
      rating: 5,
      company: "TechStart"
    }
  ];

  const useCases = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Cities",
      description: "Enable smart traffic management, environmental monitoring, and public safety systems.",
      benefits: ["Traffic optimization", "Environmental monitoring", "Public safety", "Resource management"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Industrial IoT",
      description: "Connect manufacturing equipment and sensors for predictive maintenance and automation.",
      benefits: ["Predictive maintenance", "Process automation", "Quality control", "Supply chain optimization"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Healthcare",
      description: "Enable telemedicine, remote monitoring, and real-time patient data analysis.",
      benefits: ["Telemedicine", "Remote monitoring", "Real-time diagnostics", "Patient care"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Autonomous Vehicles",
      description: "Support connected and autonomous vehicles with ultra-reliable low-latency communication.",
      benefits: ["Vehicle-to-vehicle communication", "Traffic management", "Safety systems", "Navigation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group | Next-Generation Connectivity</title>
        <meta name="description" content="Deploy cutting-edge 5G networks with ultra-fast speeds, low latency, and massive IoT connectivity. Transform your business with next-generation wireless technology." />
        <meta name="keywords" content="5G implementation, 5G networks, IoT connectivity, edge computing, smart cities, industrial IoT, wireless technology" />
        <meta property="og:title" content="5G Implementation - Zion Tech Group" />
        <meta property="og:description" content="Next-generation 5G connectivity solutions for modern businesses." />
        <meta property="og:type" content="website" />
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
          <section className="py-20 pt-32">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Wifi className="w-4 h-4 mr-2" />
                  Next-Generation Connectivity
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    5G Implementation
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Deploy cutting-edge 5G networks with ultra-fast speeds, ultra-low latency, 
                  and massive IoT connectivity. Transform your business with next-generation wireless technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                    Get Consultation
                  </a>
                </div>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">10 Gbps</div>
                    <div className="text-gray-400 text-sm">Peak Speed</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">1ms</div>
                    <div className="text-gray-400 text-sm">Latency</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">1M+</div>
                    <div className="text-gray-400 text-sm">Devices/km²</div>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-gray-400 text-sm">Reliability</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Use Cases
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Transform your industry with 5G-powered solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
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

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Everything you need for a successful 5G deployment
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the 5G solution that fits your business needs and scale as you grow.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      tier.popular 
                        ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="tel:+13024640950"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how organizations are transforming with our 5G solutions.
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
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-cyan-500/20 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for 5G?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join the 5G revolution and transform your business with next-generation connectivity.
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
                    Schedule Consultation
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

export default FiveGImplementation;
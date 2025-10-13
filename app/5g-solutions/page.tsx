'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Cpu, Globe, Smartphone, ArrowRight, CheckCircle, Star, Network, Shield } from 'lucide-react';

export default function FiveGSolutionsPage() {
  const fiveGFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra-Fast Speeds",
      description: "Experience blazing-fast 5G speeds up to 10 Gbps for lightning-quick data transfer and streaming.",
      features: ["10 Gbps Peak Speed", "Low Latency", "High Bandwidth", "Real-time Applications"]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Massive IoT Connectivity",
      description: "Connect millions of devices with 5G's massive IoT capabilities for smart cities and industries.",
      features: ["1M+ Devices/km²", "Low Power Consumption", "Long Range", "Reliable Connectivity"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Deploy edge computing solutions that bring processing power closer to your data sources.",
      features: ["Ultra-Low Latency", "Real-time Processing", "Distributed Computing", "AI at the Edge"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Advanced 5G security features with network slicing and end-to-end encryption.",
      features: ["Network Slicing", "End-to-End Encryption", "Zero Trust Architecture", "Threat Detection"]
    }
  ];

  const useCases = [
    {
      industry: "Smart Cities",
      title: "Intelligent Traffic Management",
      description: "Real-time traffic optimization using 5G-connected sensors and AI analytics.",
      benefits: ["30% traffic reduction", "40% fuel savings", "Improved air quality"]
    },
    {
      industry: "Healthcare",
      title: "Remote Surgery",
      description: "Enable remote surgical procedures with ultra-low latency 5G connectivity.",
      benefits: ["< 1ms latency", "HD video streaming", "Real-time haptic feedback"]
    },
    {
      industry: "Manufacturing",
      title: "Smart Factory",
      description: "Connect thousands of sensors and robots for autonomous manufacturing processes.",
      benefits: ["50% efficiency increase", "Predictive maintenance", "Zero downtime"]
    },
    {
      industry: "Entertainment",
      title: "Immersive AR/VR",
      description: "Deliver high-quality AR/VR experiences with 5G's high bandwidth and low latency.",
      benefits: ["4K/8K streaming", "Real-time interaction", "Cloud-based rendering"]
    }
  ];

  const performanceStats = [
    {
      metric: "10 Gbps",
      description: "Peak download speed",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "< 1ms",
      description: "Ultra-low latency",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      metric: "1M+",
      description: "Devices per km²",
      icon: <Network className="w-6 h-6" />
    },
    {
      metric: "99.999%",
      description: "Reliability",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Basic 5G connectivity for small businesses",
      features: [
        "Up to 1 Gbps speed",
        "Basic IoT connectivity",
        "Standard support",
        "Up to 100 devices",
        "1 year data retention",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced 5G solutions for growing businesses",
      features: [
        "Up to 5 Gbps speed",
        "Advanced IoT platform",
        "Priority support",
        "Up to 1,000 devices",
        "3 years data retention",
        "Advanced security",
        "Edge computing",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "Complete 5G ecosystem for large organizations",
      features: [
        "Up to 10 Gbps speed",
        "Full IoT ecosystem",
        "Dedicated support team",
        "Unlimited devices",
        "Unlimited data retention",
        "Enterprise security",
        "Custom edge solutions",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      role: "CTO, SmartCity Corp",
      content: "5G has transformed our smart city infrastructure. We've achieved 30% reduction in traffic congestion and significant energy savings.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "Director, MedTech Solutions",
      content: "The ultra-low latency of 5G enables us to perform remote surgeries with precision. It's revolutionizing healthcare delivery.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "VP Operations, AutoManufacturing",
      content: "Our smart factory with 5G connectivity has increased efficiency by 50%. The real-time monitoring and control capabilities are game-changing.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Connectivity | Zion Tech Group</title>
        <meta name="description" content="Transform your business with 5G technology. Ultra-fast speeds, low latency, massive IoT connectivity, and edge computing solutions." />
        <meta name="keywords" content="5G solutions, 5G connectivity, edge computing, IoT, smart cities, ultra-low latency, high-speed internet" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Wifi className="w-4 h-4 mr-2" />
                Next-Generation 5G Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                5G Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with 5G technology. Experience ultra-fast speeds, ultra-low latency, 
                and massive IoT connectivity that enables next-generation applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  Start Free Trial
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
                <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Unmatched <span className="text-blue-400">Performance</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of 5G with industry-leading performance metrics and capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{stat.metric}</div>
                      <div className="text-gray-300">{stat.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5G Features Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced <span className="text-cyan-400">5G Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions provide comprehensive connectivity and computing capabilities for modern businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {fiveGFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Real-World <span className="text-blue-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is transforming industries and enabling new possibilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {useCase.industry}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-cyan-300 text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Flexible <span className="text-blue-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the 5G plan that matches your connectivity and computing needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative ${plan.popular ? 'scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 h-full ${
                    plan.popular ? 'border-blue-500/50' : 'border-slate-700/50'
                  }`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700' 
                        : 'border border-slate-600 text-white hover:bg-slate-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-blue-400">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about our 5G solutions and their impact on their businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Embrace <span className="text-blue-400">5G Technology</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the 5G revolution and transform your business with next-generation connectivity and computing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Start Free Trial
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-blue-400">+1 302 464 0950</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
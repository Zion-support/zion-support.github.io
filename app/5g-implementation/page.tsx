import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Phone, 
  Mail, 
  Play, 
  Settings, 
  Smartphone, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Activity } from 'lucide-react';
const FiveGImplementationPage: React.FC = () => { useEffect(() => {
    setIsVisible(true); }, []);
  const features = [
    { icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Fast 5G Networks",
      description: "Deploy cutting-edge 5G infrastructure with speeds up to 10 Gbps and ultra-low latency under 1ms.",
      benefits: ["10 Gbps speeds", "Sub-1ms latency", "Massive connectivity", "Network slicing"] },
    { icon: <Cloud className="w-6 h-6" />,
      title: "Edge Computing Integration",
      description: "Implement edge computing solutions to process data closer to the source for maximum performance.",
      benefits: ["Edge servers", "Local processing", "Reduced latency", "Real-time analytics"] },
    { icon: <Smartphone className="w-6 h-6" />,
      title: "IoT Device Management",
      description: "Connect and manage millions of IoT devices with our advanced device management platform.",
      benefits: ["Device provisioning", "Remote management", "Firmware updates", "Security monitoring"] },
    { icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Protect your 5G network with enterprise-grade security including encryption and threat detection.",
      benefits: ["End-to-end encryption", "Threat detection", "Access control", "Compliance"] },
    { icon: <BarChart3 className="w-6 h-6" />,
      title: "Network Analytics",
      description: "Monitor and optimize your 5G network performance with real-time analytics and insights.",
      benefits: ["Real-time monitoring", "Performance optimization", "Predictive analytics", "Custom dashboards"] },
    { icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored 5G implementations designed specifically for your business requirements and use cases.",
      benefits: ["Custom architecture", "Scalable design", "Integration support", "Future-proofing"] }
  ];
  const useCases = [
    { title: "Smart Manufacturing",
      description: "Enable Industry 4.0 with 5G-powered smart factories and automated production lines",
      icon: <Cpu className="w-8 h-8" />,
      benefits: ["Automated production", "Real-time monitoring", "Predictive maintenance", "Quality control"] },
    { title: "Smart Cities",
      description: "Build connected cities with 5G infrastructure for traffic management and public services",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Traffic optimization", "Public safety", "Environmental monitoring", "Citizen services"] },
    { title: "Healthcare",
      description: "Revolutionize healthcare with 5G-enabled telemedicine and remote patient monitoring",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Remote surgery", "Patient monitoring", "Medical imaging", "Emergency response"] },
    { title: "Autonomous Vehicles",
      description: "Enable autonomous driving with ultra-reliable 5G connectivity and edge computing",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Vehicle-to-everything", "Real-time navigation", "Safety systems", "Fleet management"] }
  ];
  const pricingPlans = [
    { name: "Small Business",
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
      popular: false },
    { name: "Enterprise",
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
      popular: true },
    { name: "Custom",
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
      popular: false }
  ];
  const testimonials = [
    { name: "Robert Chen",
      company: "Manufacturing Corp",
      role: "CTO",
      content: "The 5G implementation has transformed our manufacturing operations. We've seen a 60% increase in efficiency and reduced downtime by 80%.",
      rating: 5 },
    { name: "Maria Garcia",
      company: "Smart City Initiative",
      role: "Project Director",
      content: "Zion Tech Group's 5G solution has enabled us to build a truly connected city. The performance and reliability exceed our expectations.",
      rating: 5 },
    { name: "Dr. James Wilson",
      company: "Regional Hospital",
      role: "IT Director",
      content: "The 5G network has revolutionized our telemedicine capabilities. We can now provide remote care with unprecedented quality and speed.",
      rating: 5 }
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
        { /* Hero Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Implementation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge 5G technology. Ultra-fast speeds, 
                ultra-low latency, and massive IoT connectivity for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        { /* Features Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Implementation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { features.map((feature, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    { feature.icon }
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{ feature.title }</h3>
                  <p className="text-gray-300 mb-4">{ feature.description }</p>
                  <ul className="space-y-2">
                    { feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex } className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        { benefit }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Use Cases Section */ }
        <section className="relative py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G can transform your industry
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              { useCases.map((useCase, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-cyan-400 mb-4">
                    { useCase.icon }
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{ useCase.title }</h3>
                  <p className="text-gray-300 mb-6">{ useCase.description }</p>
                  <ul className="space-y-2">
                    { useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex } className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        { benefit }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Pricing Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">5G Implementation Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect 5G solution for your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { pricingPlans.map((plan, index) => (
                <div key={index } className={ `bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/20' } relative`}>
                  { plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  ) }
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      { plan.price }<span className="text-lg text-gray-400">/{ plan.period }</span>
                    </div>
                    <p className="text-gray-300">{ plan.description }</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    { plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex } className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        { feature }
                      </li>
                    ))}
                  </ul>
                  <button className={ `w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' 
                      : 'bg-white/20 text-white hover:bg-white/30' }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Testimonials Section */ }
        <section className="relative py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Client Success Stories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how 5G has transformed our clients' businesses
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              { testimonials.map((testimonial, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    { [...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{ testimonial.content }"</p>
                  <div>
                    <div className="font-semibold text-white">{ testimonial.name }</div>
                    <div className="text-cyan-400">{ testimonial.role }</div>
                    <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for 5G?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your business with next-generation 5G technology. Get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Implementation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default FiveGImplementationPage;
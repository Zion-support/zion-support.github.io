import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Wifi, Bot, TrendingUp, Users, Award } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analytics",
      description: "Transform data into actionable insights with advanced AI analytics and real-time dashboards.",
      href: "/ai-analytics",
      color: "from-cyan-500 to-blue-600",
      features: ["Predictive Analytics", "Real-time Dashboards", "Automated Reporting"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      description: "Automate business processes with intelligent bots that learn and adapt to your workflows.",
      href: "/ai-automation",
      color: "from-purple-500 to-pink-600",
      features: ["Process Automation", "Workflow Optimization", "Cost Reduction"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection and 24/7 security monitoring.",
      href: "/ai-cybersecurity",
      color: "from-red-500 to-orange-600",
      features: ["Threat Detection", "Data Protection", "24/7 Monitoring"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Experience ultra-fast speeds and ultra-low latency with next-generation 5G connectivity.",
      href: "/5g-solutions",
      color: "from-blue-500 to-cyan-600",
      features: ["Ultra-Fast Speeds", "Edge Computing", "Massive IoT"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive business intelligence and analytics.",
      href: "/business-intelligence",
      color: "from-green-500 to-emerald-600",
      features: ["Data Visualization", "Performance Metrics", "Strategic Insights"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Blockchain & Web3",
      description: "Build decentralized applications and leverage blockchain technology for secure transactions.",
      href: "/blockchain-web3",
      color: "from-yellow-500 to-amber-600",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms"]
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "AI Services" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      company: "TechStart Inc."
    },
    {
      name: "Michael Chen",
      role: "CTO, GlobalCorp",
      content: "The 5G solutions and AI automation have given us a massive competitive advantage. Highly recommended!",
      rating: 5,
      company: "GlobalCorp"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Operations, GrowthCo",
      content: "Their cybersecurity platform is incredible. We've had zero security incidents since implementation.",
      rating: 5,
      company: "GrowthCo"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, 5G technology, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, 5G technology, business intelligence, blockchain, digital transformation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-lg font-medium mb-8">
                <Award className="w-5 h-5 mr-2" />
                Leading AI & IT Solutions Provider
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions, advanced cybersecurity, 
                5G technology, and intelligent automation that drives real results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                  <ArrowRight className="inline w-6 h-6 ml-3" />
                </Link>
                <Link to="/demo" className="border-2 border-cyan-500 text-cyan-400 px-10 py-5 rounded-xl text-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Watch Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI and IT solutions designed to accelerate your digital transformation 
                and drive measurable business growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} to={service.href} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105">
                    <div className={`text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-cyan-400 font-semibold group-hover:text-white transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <Brain className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">AI-First Approach</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We leverage the latest AI technologies to create intelligent solutions that adapt and learn from your business needs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <Shield className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Bank-level security with end-to-end encryption, compliance standards, and 24/7 monitoring to protect your data.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <Users className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our team of AI engineers, cybersecurity experts, and technology consultants bring decades of combined experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Don't just take our word for it. See what industry leaders say about our solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of businesses already using our AI and IT solutions to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Start Your Journey
                <ArrowRight className="inline w-6 h-6 ml-3" />
              </Link>
              <Link to="/pricing" className="border-2 border-cyan-500 text-cyan-400 px-10 py-5 rounded-xl text-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Pricing
              </Link>
            </div>
            <div className="text-lg text-gray-400">
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a> | 
              📞 <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">+1 302 464 0950</a></p>
              <p className="mt-2">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
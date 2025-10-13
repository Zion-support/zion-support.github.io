import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Mic, Camera, Clock, Eye } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure", 
        "description": "Cloud computing and infrastructure services"
      }
    ]
  };
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, and productivity tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ solutions",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "10x faster speeds",
      link: "/5g-solutions"
    },
  ];

  const microSaasHighlights = [
    {
      name: "AI Holographic Presenter",
      description: "Revolutionary 3D holographic presentations with gesture control and real-time collaboration",
      price: "From $99/month",
      icon: <Camera className="w-6 h-6" />,
      link: "/ai-holographic-presenter",
      featured: true
    },
    {
      name: "AI Quantum Encryption",
      description: "Unbreakable quantum encryption with military-grade security and zero-knowledge architecture",
      price: "From $49/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/ai-quantum-encryption",
      featured: true
    },
    {
      name: "AI Neural Interface Pro",
      description: "Direct brain-computer interface with 99.7% accuracy for thought-to-text conversion",
      price: "From $299/month",
      icon: <Brain className="w-6 h-6" />,
      link: "/ai-neural-interface-pro",
      featured: true
    },
    {
      name: "AI Time Travel Simulator",
      description: "Experience historical periods and future scenarios with 99.9% accuracy using quantum computing",
      price: "From $199/month",
      icon: <Clock className="w-6 h-6" />,
      link: "/ai-time-travel-simulator",
      featured: true
    },
    {
      name: "AI Mind Reading Analyzer",
      description: "Real-time thought analysis and emotion detection with 98.7% accuracy using neural patterns",
      price: "From $149/month",
      icon: <Eye className="w-6 h-6" />,
      link: "/ai-mind-reading-analyzer",
      featured: true
    },
    {
      name: "AI Teleportation Simulator",
      description: "Instant global travel with quantum entanglement technology and 99.9% accuracy",
      price: "From $299/month",
      icon: <Zap className="w-6 h-6" />,
      link: "/ai-teleportation-simulator",
      featured: true
    },
    {
      name: "AI Climate Control Master",
      description: "Control global weather patterns with precision climate management and disaster prevention",
      price: "From $999/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/ai-climate-control-master",
      featured: true
    },
    {
      name: "AI Voice Cloning Studio",
      description: "Professional voice synthesis with 95% accuracy and multi-language support",
      price: "From $29/month",
      icon: <Mic className="w-6 h-6" />,
      link: "/ai-voice-cloning-studio",
      featured: false
    },
    {
      name: "AI Quantum Financial Oracle",
      description: "Quantum-powered financial predictions with 99.7% accuracy for market analysis",
      price: "From $199/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-quantum-financial-oracle",
      featured: false
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "60+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our entire technology stack. The AI solutions increased our productivity by 60% in just 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The micro SAAS solutions are incredibly powerful and easy to implement. We've saved thousands of hours with their automation tools.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ultra-cyber-grid">
        {/* Ultra Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 ultra-animated-gradient rounded-full blur-3xl ultra-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 ultra-animated-gradient rounded-full blur-3xl ultra-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 ultra-holographic rounded-full blur-3xl ultra-pulse-glow"></div>
        </div>
        
        {/* Ultra Particle System */}
        <div className="ultra-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="ultra-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ultra-text-gradient ultra-text-cyber ultra-glitch">
            Welcome to Zion Tech Group
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="ultra-btn-futuristic ultra-neon-glow ultra-hover-glow">
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started Today
            </button>
            <button className="ultra-btn-futuristic ultra-neon-glow ultra-hover-glow" style={{background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.8), transparent)', border: '2px solid rgba(34, 211, 238, 0.6)'}}>
              <Monitor className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group ultra-glass-card rounded-2xl p-6 ultra-hover-lift">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full ultra-animated-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ultra-pulse-glow">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 ultra-text-gradient ultra-neon-glow">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm ultra-text-cyber">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ultra-matrix-rain">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 ultra-text-gradient ultra-text-cyber">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group ultra-glass-card rounded-2xl p-6 ultra-hover-lift ultra-scan-lines cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg ultra-animated-gradient flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 ultra-pulse-glow`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors ultra-text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium ultra-neon-glow ultra-text-cyber">
                      {feature.stats}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ultra-text-gradient ultra-text-cyber ultra-glitch">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className="group ultra-glass-card rounded-2xl p-6 ultra-hover-lift relative overflow-hidden ultra-scan-lines"
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="ultra-neon-glow bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold ultra-text-cyber">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 rounded-xl ultra-animated-gradient flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform ultra-pulse-glow">
                    {saas.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors ultra-text-gradient">
                      {saas.name}
                    </h3>
                    <p className="text-cyan-400 font-medium ultra-neon-cyan">{saas.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {saas.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors ultra-neon-cyan">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="ultra-btn-futuristic ultra-neon-glow ultra-hover-glow">
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ultra-neural-network-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ultra-text-gradient ultra-text-cyber">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group ultra-glass-card rounded-2xl p-6 ultra-hover-lift ultra-scan-lines relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current ultra-neon-glow" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed ultra-text-cyber">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white ultra-text-gradient">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ultra-holographic">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 ultra-text-gradient ultra-text-cyber ultra-glitch">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center ultra-glass-card rounded-2xl p-6 ultra-hover-lift">
              <div className="w-12 h-12 ultra-animated-gradient rounded-lg flex items-center justify-center mx-auto mb-3 ultra-pulse-glow">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 ultra-text-gradient">Email</h3>
              <p className="text-cyan-400 ultra-neon-cyan">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center ultra-glass-card rounded-2xl p-6 ultra-hover-lift">
              <div className="w-12 h-12 ultra-animated-gradient rounded-lg flex items-center justify-center mx-auto mb-3 ultra-pulse-glow">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 ultra-text-gradient">Phone</h3>
              <p className="text-cyan-400 ultra-neon-cyan">+1 302 464 0950</p>
            </div>
            <div className="text-center ultra-glass-card rounded-2xl p-6 ultra-hover-lift">
              <div className="w-12 h-12 ultra-animated-gradient rounded-lg flex items-center justify-center mx-auto mb-3 ultra-pulse-glow">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 ultra-text-gradient">Address</h3>
              <p className="text-cyan-400 text-sm ultra-neon-cyan">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="ultra-btn-futuristic ultra-neon-glow ultra-hover-glow">
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="ultra-btn-futuristic ultra-neon-glow ultra-hover-glow" style={{background: 'linear-gradient(45deg, transparent, rgba(34, 211, 238, 0.8), transparent)', border: '2px solid rgba(34, 211, 238, 0.6)'}}>
              View Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

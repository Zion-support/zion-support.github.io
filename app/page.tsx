import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, Share2 } from "lucide-react";
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
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence platform with real-time dashboards and predictive analytics",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-analytics-pro",
      featured: true
    },
    {
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI-powered threat detection and automated response",
      price: "From $499/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-security-shield",
      featured: true
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption and unlimited scalability",
      price: "From $99/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/zion-cloud-vault",
      featured: true
    },
    {
      name: "Zion AI CRM Pro",
      description: "AI-powered customer relationship management with intelligent lead scoring and automation",
      price: "From $199/month",
      icon: <Users className="w-6 h-6" />,
      link: "/zion-ai-crm-pro",
      featured: true
    },
    {
      name: "Zion AI Marketing Automation Pro",
      description: "AI-powered marketing automation with predictive content generation and multi-channel orchestration",
      price: "From $149/month",
      icon: <Target className="w-6 h-6" />,
      link: "/zion-ai-marketing-automation-pro",
      featured: true
    },
    {
      name: "Zion AI Project Manager Pro",
      description: "AI-powered project management with intelligent task prioritization and resource allocation",
      price: "From $49/month",
      icon: <Calendar className="w-6 h-6" />,
      link: "/zion-ai-project-manager-pro",
      featured: true
    },
    {
      name: "Zion AI Business Intelligence Pro",
      description: "Advanced AI-powered business intelligence with real-time analytics and predictive insights",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-ai-business-intelligence-pro",
      featured: true
    },
    {
      name: "Zion AI Social Media Pro",
      description: "AI-powered social media management with content generation and multi-platform automation",
      price: "From $79/month",
      icon: <Share2 className="w-6 h-6" />,
      link: "/zion-ai-social-media-pro",
      featured: true
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
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Welcome to Zion Tech Group
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Featured Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Featured Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SAAS Solutions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              Get started in minutes with our powerful, AI-driven tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {saas.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {saas.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{saas.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {saas.description}
                </p>
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-sm font-medium">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Industry Leaders</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See what our clients say about working with Zion Tech Group. 
              Join thousands of satisfied customers who trust us with their technology needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Business?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today with our expert team.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">Email</h3>
              <p className="text-cyan-400 text-lg font-medium">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">Phone</h3>
              <p className="text-cyan-400 text-lg font-medium">+1 302 464 0950</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors">Address</h3>
              <p className="text-cyan-400 text-lg font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105 relative overflow-hidden backdrop-blur-sm bg-white/5"
            >
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore Services</span>
              <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform relative z-10" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

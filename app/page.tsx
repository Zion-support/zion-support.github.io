import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from "lucide-react";
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
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered business intelligence with real-time dashboards, predictive analytics, and automated insights generation",
      price: "From $299/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-analytics-dashboard-pro",
      featured: true,
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
      marketPrice: "$500-800/month",
      savings: "40% savings"
    },
    {
      name: "Zion AI Security Suite",
      description: "Comprehensive cybersecurity platform with AI threat detection, automated incident response, and compliance monitoring",
      price: "From $499/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/advanced-security-suite",
      featured: true,
      features: ["AI Threat Detection", "Automated Response", "Compliance Monitoring", "24/7 SOC"],
      marketPrice: "$800-1200/month",
      savings: "38% savings"
    },
    {
      name: "Zion Cloud Infrastructure Pro",
      description: "Enterprise-grade cloud infrastructure with auto-scaling, disaster recovery, and 99.99% uptime guarantee",
      price: "From $199/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/ai-cloud-infrastructure",
      featured: true,
      features: ["Auto-scaling", "Disaster Recovery", "99.99% Uptime", "Global CDN"],
      marketPrice: "$400-600/month",
      savings: "50% savings"
    },
    {
      name: "Zion AI CRM Enterprise",
      description: "Next-generation CRM with AI-powered lead scoring, automated follow-ups, and advanced analytics",
      price: "From $199/month",
      icon: <Users className="w-6 h-6" />,
      link: "/ai-crm",
      featured: true,
      features: ["AI Lead Scoring", "Automated Workflows", "Advanced Analytics", "Multi-channel"],
      marketPrice: "$300-500/month",
      savings: "33% savings"
    },
    {
      name: "Zion AI Marketing Automation",
      description: "Complete marketing automation platform with AI content generation, multi-channel campaigns, and ROI optimization",
      price: "From $149/month",
      icon: <Target className="w-6 h-6" />,
      link: "/ai-marketing-automation",
      featured: true,
      features: ["AI Content Generation", "Multi-channel Campaigns", "ROI Optimization", "A/B Testing"],
      marketPrice: "$250-400/month",
      savings: "40% savings"
    },
    {
      name: "Zion AI Project Management Pro",
      description: "Intelligent project management with AI task prioritization, resource optimization, and predictive scheduling",
      price: "From $99/month",
      icon: <Calendar className="w-6 h-6" />,
      link: "/project-management-pro",
      featured: true,
      features: ["AI Task Prioritization", "Resource Optimization", "Predictive Scheduling", "Team Collaboration"],
      marketPrice: "$150-300/month",
      savings: "34% savings"
    },
    {
      name: "Zion AI Content Studio",
      description: "AI-powered content creation platform for blogs, social media, videos, and marketing materials",
      price: "From $79/month",
      icon: <Package className="w-6 h-6" />,
      link: "/zion-content-studio",
      featured: false,
      features: ["AI Writing Assistant", "Video Generation", "Social Media Automation", "SEO Optimization"],
      marketPrice: "$120-200/month",
      savings: "35% savings"
    },
    {
      name: "Zion AI Financial Analytics",
      description: "Advanced financial analytics with AI forecasting, expense tracking, and automated reporting",
      price: "From $129/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-financial-analytics-pro",
      featured: false,
      features: ["AI Forecasting", "Expense Tracking", "Automated Reports", "Tax Preparation"],
      marketPrice: "$200-350/month",
      savings: "36% savings"
    },
    {
      name: "Zion AI Inventory Smart",
      description: "Smart inventory management with AI demand forecasting, automated reordering, and multi-location tracking",
      price: "From $89/month",
      icon: <Package className="w-6 h-6" />,
      link: "/zion-inventory-smart",
      featured: false,
      features: ["AI Demand Forecasting", "Automated Reordering", "Multi-location", "Real-time Tracking"],
      marketPrice: "$150-250/month",
      savings: "41% savings"
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
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-advanced">
        {/* Advanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid-advanced opacity-30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 floating-particles"></div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text">
              Welcome to Zion Tech Group
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="neon-button px-8 py-4 text-lg font-semibold flex items-center justify-center space-x-2 group"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Get Started Today</span>
            </Link>
            <Link
              to="/demo"
              className="cyber-border px-8 py-4 text-lg font-semibold text-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Monitor className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 cyber-text">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="holographic-text">Our Core Services</span>
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
                className="group cyber-card p-6 hover:scale-105 transition-all duration-300 cursor-pointer floating-particles"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 neon-glow`}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 data-flow">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="holographic-text">Featured Micro SAAS Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately. 
              <span className="text-cyan-400 font-semibold"> Save up to 50% compared to enterprise alternatives.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className="group cyber-card p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden floating-particles"
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform neon-glow">
                    {saas.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {saas.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="text-cyan-400 font-medium">{saas.price}</p>
                      <span className="text-green-400 text-xs bg-green-400/20 px-2 py-1 rounded">
                        {saas.savings}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {saas.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Key Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {saas.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {saas.features.length > 3 && (
                      <span className="text-xs text-gray-400">+{saas.features.length - 3} more</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-gray-400">
                    Market Price: <span className="line-through">{saas.marketPrice}</span>
                  </div>
                  <div className="text-xs text-green-400 font-semibold">
                    You Save: {saas.savings}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Start Free Trial
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 cyber-scan">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="holographic-text">Ready to Transform Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            <span className="text-cyan-400 font-semibold"> Start your digital transformation journey today.</span>
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
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="neon-button px-8 py-4 text-lg font-semibold flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="cyber-border px-8 py-4 text-lg font-semibold text-cyan-400 hover:text-white transition-all duration-300 group hover:scale-105"
            >
              <Monitor className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Explore Services
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

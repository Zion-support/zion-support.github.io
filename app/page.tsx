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
      price: "From $99/month",
      icon: <Calendar className="w-6 h-6" />,
      link: "/zion-ai-project-manager-pro",
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
      <section className="responsive-section relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="responsive-container text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="responsive-icon text-cyan-400 mr-2" />
            <span className="text-cyan-400 responsive-text font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <h1 className="responsive-hero-title mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Welcome to Zion Tech Group
            </span>
          </h1>
          
          <p className="responsive-hero-subtitle mb-8 max-w-4xl mx-auto text-center">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="responsive-flex gap-4 justify-center responsive-margin-bottom">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="responsive-icon" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="responsive-icon" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="responsive-stats-grid max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="responsive-icon-hero mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="responsive-heading font-bold text-white mb-2">{stat.number}</div>
                <div className="responsive-text text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="responsive-section">
        <div className="responsive-container">
          <div className="text-center responsive-margin-bottom">
            <h2 className="responsive-section-title">
              Our Core Services
            </h2>
            <p className="responsive-section-subtitle max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className="responsive-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="responsive-card group cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`responsive-icon-large rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="responsive-subheading font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="responsive-text text-gray-300 text-center mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full responsive-text font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="responsive-section bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="responsive-container">
          <div className="text-center responsive-margin-bottom">
            <h2 className="responsive-section-title">
              Featured Micro SAAS Solutions
            </h2>
            <p className="responsive-section-subtitle max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="responsive-pricing-grid">
            {microSaasHighlights.map((saas, index) => (
              <Link
                key={index}
                to={saas.link}
                className="responsive-card group relative overflow-hidden"
              >
                {saas.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full responsive-text font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <div className="responsive-flex items-center mb-4">
                  <div className="responsive-icon-large rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {saas.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="responsive-subheading font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {saas.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{saas.price}</p>
                  </div>
                </div>
                <p className="responsive-text text-gray-300 leading-relaxed">
                  {saas.description}
                </p>
                <div className="mt-4 responsive-flex items-center text-cyan-400 responsive-text font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="responsive-icon ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="responsive-button responsive-button-primary group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="responsive-icon ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="responsive-section">
        <div className="responsive-container">
          <div className="text-center responsive-margin-bottom">
            <h2 className="responsive-section-title">
              Trusted by Industry Leaders
            </h2>
            <p className="responsive-section-subtitle max-w-3xl mx-auto">
              See what our clients say about working with Zion Tech Group
            </p>
          </div>
          <div className="responsive-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="responsive-card group relative overflow-hidden"
              >
                <div className="responsive-flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="responsive-icon text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="responsive-text text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="responsive-text text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="responsive-section bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="responsive-container text-center">
          <h2 className="responsive-hero-title mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="responsive-hero-subtitle mb-8">
            Join thousands of businesses already using our solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          {/* Contact Information */}
          <div className="responsive-stats-grid mb-8">
            <div className="text-center">
              <div className="responsive-icon-large bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="responsive-icon text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="responsive-icon-large bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="responsive-icon text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="responsive-icon-large bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Globe className="responsive-icon text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-cyan-400 responsive-text">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          <div className="responsive-flex gap-4 justify-center">
            <Link
              to="/contact"
              className="responsive-button responsive-button-primary group"
            >
              Start Your Journey
              <ArrowRight className="responsive-icon ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="responsive-button responsive-button-secondary group"
            >
              Explore Services
              <Sparkles className="responsive-icon ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

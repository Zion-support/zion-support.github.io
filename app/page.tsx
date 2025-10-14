import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, Phone, MapPin } from "lucide-react";
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
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup
    ]
  };

  const coreServices = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services including machine learning, natural language processing, and computer vision.",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      pricing: "From $2,500/month",
      link: "/ai-services
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"],
      pricing: "From $1,800/month",
      link: "/cybersecurity-solutions
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and migration services to optimize your infrastructure and reduce costs.",
      features: ["Cloud Migration", "Infrastructure Setup", "Monitoring", "Cost Optimization"],
      pricing: "From $3,000/month",
      link: "/cloud-infrastructure
    },
    {
      icon: Zap,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions that can be deployed quickly to solve specific business problems.",
      features: ["Quick Deployment", "Customizable", "Scalable", "Cost-Effective"],
      pricing: "From $99/month",
      link: "/micro-saas
    }
  ];

  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform",
      price: "$299/month",
      discount: "20% off first year",
      features: ["Real-time Analytics", "Custom Dashboards", "AI Insights", "API Integration"],
      rating: 4.9,
      reviews: 127,
      link: "/zion-analytics-pro
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and protection",
      price: "$199/month",
      discount: "15% off first year",
      features: ["24/7 Monitoring", "Threat Detection", "Compliance Reports", "Incident Response"],
      rating: 4.8,
      reviews: 89,
      link: "/zion-security-shield
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      price: "$149/month",
      discount: "25% off first year",
      features: ["AI Writing", "Content Planning", "SEO Optimization", "Multi-platform Publishing"],
      rating: 4.7,
      reviews: 156,
      link: "/zion-content-studio
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group transformed our operations with their AI solutions. We've seen a 40% increase in efficiency.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face
    },
    {
      name: "Michael Chen",
      company: "DataFlow Inc",
      role: "CEO",
      content: "Their micro SAAS solutions helped us scale quickly without the overhead of building everything from scratch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Ltd",
      role: "Security Director",
      content: "The cybersecurity solutions provided by Zion Tech Group are top-notch. We feel completely protected.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face
    }
  ];

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology
        canonical="https://ziontechgroup.com
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page Description - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <ResponsiveContainer>
          <div className="text-center relative z-10">
            <FuturisticText
              as="h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent
            >
              Transform Your Business with
              <span className="block text-3xl sm:text-4xl lg:text-6xl mt-2">
                AI-Powered Solutions
              </span>
            </FuturisticText>
            
            <ResponsiveText className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of cutting-edge AI services, IT solutions, and micro SAAS platforms. 
              Accelerate your digital transformation with our innovative technology stack.
            </ResponsiveText>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <FuturisticButton
                as={Link}
                to="/contact
                className="px-8 py-4 text-lg font-semibold
                variant="primary
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </FuturisticButton>
              
              <FuturisticButton
                as={Link}
                to="/demo
                className="px-8 py-4 text-lg font-semibold
                variant="secondary
              >
                View Demo
                <Sparkles className="ml-2 h-5 w-5" />
              </FuturisticButton>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <FuturisticText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Core Services
            </FuturisticText>
            <ResponsiveText className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </ResponsiveText>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, index) => (
              <FuturisticCard key={index} className="p-6 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  
                  <FuturisticButton
                    as={Link}
                    to={service.link}
                    className="w-full
                    variant="outline
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <FuturisticText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured Micro SAAS Solutions
            </FuturisticText>
            <ResponsiveText className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy software solutions that solve specific business challenges
            </ResponsiveText>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <FuturisticCard key={index} className="p-6 h-full">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-400">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-green-400">{service.discount}</div>
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(service.rating)
                              ? "text-yellow-400
                              : "text-gray-400
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                  
                  <FuturisticButton
                    as={Link}
                    to={service.link}
                    className="w-full
                    variant="primary
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <FuturisticText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </FuturisticText>
            <ResponsiveText className="text-lg text-gray-300 max-w-3xl mx-auto">
              Trusted by businesses worldwide for our innovative solutions
            </ResponsiveText>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-400
                      }`}
                    />
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <FuturisticText as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </FuturisticText>
            <ResponsiveText className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our solutions
            </ResponsiveText>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton
                as={Link}
                to="/contact
                className="px-8 py-4 text-lg font-semibold
                variant="primary
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </FuturisticButton>
              
              <FuturisticButton
                as={Link}
                to="/pricing
                className="px-8 py-4 text-lg font-semibold
                variant="secondary
              >
                View Pricing
                <Target className="ml-2 h-5 w-5" />
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default HomePage

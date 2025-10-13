import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  BarChart3, 
  Cloud, 
  Sparkles, 
  Mail, 
  Smartphone, 
  Monitor,
  Phone,
  MapPin,
  CheckCircle,
  DollarSign,
  TrendingUp,
  Leaf,
  Heart,
  Truck,
  Mic,
  Package,
  Settings,
  Target,
  Lock,
  Code,
  Database
} from "lucide-react";
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
        "name": "AI Services",
        "description": "AI-powered solutions for business automation and intelligence",
        "price": "From $299/month"
      },
      {
        "@type": "Offer",
        "name": "IT Services",
        "description": "Comprehensive IT solutions and support",
        "price": "From $199/month"
      },
      {
        "@type": "Offer",
        "name": "Micro SAAS",
        "description": "Specialized software-as-a-service solutions",
        "price": "From $29/month"
      }
    ]
  };

  const heroFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Advanced cybersecurity solutions to protect your digital assets and ensure compliance."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed to grow with your business needs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "5G Technology",
      description: "Next-generation 5G solutions for ultra-fast connectivity and IoT applications."
    }
  ];

  const services = [
    {
      title: "AI Services",
      description: "Comprehensive AI solutions including analytics, automation, content generation, and customer service.",
      icon: <Brain className="w-12 h-12" />,
      price: "From $299/month",
      features: [
        "AI Analytics Dashboard",
        "Automated Content Generation",
        "Intelligent Customer Service",
        "Predictive Analytics",
        "Natural Language Processing"
      ],
      link: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "IT Services",
      description: "Full-stack IT solutions including web development, mobile apps, database management, and cybersecurity.",
      icon: <Code className="w-12 h-12" />,
      price: "From $199/month",
      features: [
        "Custom Web Development",
        "Mobile App Development",
        "Database Management",
        "Cybersecurity Solutions",
        "Cloud Migration"
      ],
      link: "/it-services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Micro SAAS",
      description: "Specialized software-as-a-service solutions designed for specific business needs and workflows.",
      icon: <Package className="w-12 h-12" />,
      price: "From $29/month",
      features: [
        "Zion Analytics Pro",
        "Zion Security Shield",
        "Zion AI Climate Optimizer",
        "Zion AI Mental Health Assistant",
        "Zion AI Supply Chain Predictor"
      ],
      link: "/micro-saas",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for ultra-fast connectivity and IoT applications.",
      icon: <Zap className="w-12 h-12" />,
      price: "From $499/month",
      features: [
        "5G Network Implementation",
        "Edge Computing Solutions",
        "IoT Connectivity",
        "Smart City Solutions",
        "Private 5G Networks"
      ],
      link: "/5g-solutions",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechStart Inc",
      content: "Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 40% and reduced costs by 30%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      title: "CEO",
      company: "InnovateCorp",
      content: "The best technology partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched. Highly recommended!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Director of IT",
      company: "Global Solutions",
      content: "Zion Tech Group's cybersecurity solutions protected us from multiple threats. Their 24/7 support and proactive monitoring are exceptional.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic AI Analytics",
        "Email Support",
        "Standard Security",
        "5GB Storage",
        "Monthly Reports"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Advanced features for growing companies",
      features: [
        "Advanced AI Solutions",
        "Priority Support",
        "Enhanced Security",
        "100GB Storage",
        "Real-time Analytics",
        "Custom Integrations",
        "API Access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited AI Services",
        "24/7 Dedicated Support",
        "Enterprise Security",
        "Unlimited Storage",
        "Custom Development",
        "White-label Options",
        "SLA Guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Transform your business with Zion Tech Group's AI-powered solutions, IT services, and innovative micro SAAS platforms. Expert technology consulting and implementation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, cybersecurity, 5G technology, micro SAAS, business automation, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Leading AI & IT Solutions Provider" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions, IT services, and innovative technology platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI & IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI solutions and IT services." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <EnhancedSEO />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Leading Technology Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Zion Tech Group delivers cutting-edge AI solutions, IT services, and innovative micro SAAS platforms 
                to help businesses achieve digital transformation and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  to="/demo"
                  className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Watch Demo
                </FuturisticButton>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {heroFeatures.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions power businesses worldwide with proven results and exceptional reliability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered automation to cloud infrastructure, we provide end-to-end technology solutions 
                tailored to your business needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                  <div className={`text-${service.color.split('-')[1]}-400 mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-blue-400 mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    to={service.link}
                    className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core features and 24/7 support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    to="/contact"
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                        : 'border border-gray-600 hover:border-gray-500 text-white'
                    } px-6 py-3 rounded-lg font-semibold transition-colors`}
                  >
                    {plan.cta}
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See what industry leaders say about working with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI-powered solutions. 
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                to="/demo"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
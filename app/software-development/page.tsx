import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Smartphone, Globe, CheckCircle, ArrowRight, Shield, BarChart3, Settings, Clock, Award, Star, Activity, Lock, Database } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SoftwareDevelopment = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications using the latest technologies and best practices",
      icon: <Globe className="w-8 h-8" />,
      features: ["React/Next.js development", "Responsive design", "API integration", "Performance optimization"],
      price: "From $2,999/month"
    },
    {
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store deployment"],
      price: "From $3,999/month"
    },
    {
      title: "API Development",
      description: "Design and build robust RESTful APIs and GraphQL endpoints for your applications",
      icon: <Settings className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL", "Authentication", "Rate limiting"],
      price: "From $1,999/month"
    },
    {
      title: "Legacy System Modernization",
      description: "Transform your legacy systems into modern, scalable applications",
      icon: <Code className="w-8 h-8" />,
      features: ["Code refactoring", "Database migration", "Cloud migration", "Performance optimization"],
      price: "From $4,999/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small projects and MVPs",
      features: [
        "Basic web application",
        "Responsive design",
        "Standard features",
        "Email support",
        "Monthly updates"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing businesses with complex requirements",
      features: [
        "Custom web application",
        "Mobile app development",
        "API integration",
        "Priority support",
        "Weekly updates",
        "Performance optimization",
        "Security features"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Full-stack development",
        "Multiple platforms",
        "Advanced integrations",
        "24/7 dedicated support",
        "Daily updates",
        "Custom architecture",
        "Scalability planning",
        "Dedicated development team"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Modern Technologies",
      description: "We use the latest technologies and frameworks to build cutting-edge applications",
      icon: <Code className="w-6 h-6" />,
      stats: "Latest tech stack"
    },
    {
      title: "Scalable Architecture",
      description: "Design applications that can grow with your business needs",
      icon: <Database className="w-6 h-6" />,
      stats: "Unlimited scalability"
    },
    {
      title: "Security First",
      description: "Implement enterprise-grade security measures in all our applications",
      icon: <Shield className="w-6 h-6" />,
      stats: "Zero security breaches"
    },
    {
      title: "Performance Optimized",
      description: "Build fast, efficient applications that provide excellent user experience",
      icon: <Activity className="w-6 h-6" />,
      stats: "Sub-second load times"
    }
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "500+", label: "Applications Built" },
    { icon: <Globe className="w-6 h-6" />, number: "99.9%", label: "Uptime Achieved" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "Security Compliance" },
    { icon: <Activity className="w-6 h-6" />, number: "24/7", label: "Support Available" }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group delivered an amazing web application that exceeded our expectations. The team was professional and delivered on time.",
      name: "David Martinez",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "DM",
      rating: 5
    },
    {
      content: "Their mobile app development expertise helped us launch our product successfully on both iOS and Android platforms.",
      name: "Lisa Wang",
      role: "Product Manager",
      company: "MobileFirst",
      avatar: "LW",
      rating: 5
    },
    {
      content: "The API they built for us is robust, well-documented, and handles millions of requests without any issues.",
      name: "James Thompson",
      role: "CTO",
      company: "APICorp",
      avatar: "JT",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Software Development Services - Custom Web & Mobile Apps | Zion Tech Group</title>
        <meta name="description" content="Transform your ideas into reality with our custom software development services. Web applications, mobile apps, APIs, and legacy system modernization." />
        <meta name="keywords" content="software development, custom web applications, mobile app development, API development, legacy modernization, react, node.js" />
        <link rel="canonical" href="https://ziontechgroup.com/software-development" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Code className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Custom Software Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400">
              Software Development Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
            we build custom software that drives business growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Code className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Software Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our expert developers deliver high-quality software solutions that meet your business requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400">
                    {capability.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Software Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions designed to meet your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-purple-400 font-semibold text-lg">{service.price}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your development needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#contact"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using our software development services to drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your Next Software Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses using our software development services to create innovative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Code className="w-5 h-5" />}
              >
                Get Started Today
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Free consultation • Custom solutions • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
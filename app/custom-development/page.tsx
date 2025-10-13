
import React from 'react';
import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function page() {
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements. From concept to deployment, we create applications that drive your business forward.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      features: ["Custom Applications", "API Development", "Database Design", "Quality Assurance"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies. From simple websites to complex web platforms, we deliver exceptional user experiences.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance across all devices.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $8,000",
      features: ["iOS & Android", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with payment integration, inventory management, and customer relationship management features.",
      icon: <Zap className="w-8 h-8" />,
      path: "/e-commerce-development",
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Portal"]
    },
    {
      title: "Database Development",
      description: "Custom database solutions with optimized performance, data integrity, and scalability. From design to implementation and maintenance.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,000",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration between systems. Scalable, secure, and well-documented API solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/api-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"]
    }
  ];

export default function customDevelopment() {
export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Custom Development</h1>
          <p className="text-xl text-gray-300 mb-8">
export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Advanced custom development solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Custom Development
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

export default function CustomdevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Custom Development</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Code, ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const CustomDevelopmentPage = () => {
  const developmentServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Build tailored software solutions that meet your specific business requirements",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Web Application Development",
      description: "Create modern, responsive web applications with cutting-edge technologies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Develop native and cross-platform mobile applications for iOS and Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "API Development",
      description: "Build robust APIs and microservices for seamless system integration",
      color: "from-orange-500 to-red-500"
    }
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "Thorough analysis of your business needs and technical requirements"
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Create detailed system design and architecture for optimal performance"
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance"
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance and support"
    }
  ];

  const developmentBenefits = [
    "Tailored solutions for your specific needs",
    "Scalable and maintainable code",
    "Modern technologies and best practices",
    "Agile development methodology",
    "Comprehensive testing and quality assurance",
    "Ongoing support and maintenance"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small projects",
      features: [
        "Basic custom development",
        "Standard technologies",
        "Email support",
        "Basic testing"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced custom development",
        "Modern technologies",
        "Priority support",
        "Comprehensive testing",
        "Code review",
        "Documentation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Enterprise-grade solutions",
        "Dedicated development team",
        "White-label solution",
        "SLA guarantee",
        "Advanced security",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      content: "The custom development team delivered exactly what we needed. The solution is robust and scalable.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "DataFlow Inc",
      content: "Excellent development process. The team was professional and delivered on time and within budget.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Startup Founder",
      company: "StartupHub",
      content: "The custom solution has transformed our business operations. Highly recommended!",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Custom Development Services - Zion Tech Group | Tailored Software Solutions"
            description="Get custom software development services from Zion Tech Group. We build tailored solutions for web, mobile, and enterprise applications."
            keywords="custom software development, web application development, mobile app development, API development, software solutions"
            canonical="https://ziontechgroup.com/custom-development"
          />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Code className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Custom Development</span>
                </div>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Custom Development Services
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Build tailored software solutions that meet your specific business requirements.
                  From web applications to mobile apps, we deliver excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#contact"
                    variant="primary"
                    size="lg"
                    icon={Code}
                    iconPosition="left">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#services"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Learn More
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Development Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Our Development Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Comprehensive development services to bring your ideas to life
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {developmentServices.map((service, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {service.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Development Process Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Development Process
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    A proven 4-step process to ensure successful project delivery
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {developmentProcess.map((step, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Why Choose Our Development?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Get the most out of your software investment with our expert development team
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {developmentBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your development needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
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
                    Hear from our satisfied clients about their development experience
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
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

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Let's discuss your custom development needs and create a solution
                  that drives your business forward.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Start Project
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="mailto:development@ziontechgroup.com"
                    variant="outline"
                    size="lg"
                    icon={Mail}
                    iconPosition="right">
                    Email Us
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default CustomDevelopmentPage;

}
}
import React from "react";
import { Helmet } from 'react-helmet-async';

const CustomDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>CustomDevelopment - Zion Tech Group</title>
        <meta name="description" content="Advanced customdevelopment service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">CustomDevelopment</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default CustomDevelopment;
}

}}

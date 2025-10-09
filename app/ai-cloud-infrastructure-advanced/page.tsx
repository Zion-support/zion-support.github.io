'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Server, Database, Zap, CheckCircle, Star, ArrowRight, Clock, Target, Shield, DollarSign, Users, Globe, Lock } from 'lucide-react';

const AICloudInfrastructureAdvancedPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "AI-Powered Scaling",
      description: "Intelligent auto-scaling based on real-time demand patterns and predictive analytics.",
      benefit: "Reduce costs by 40%"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "High Availability",
      description: "99.99% uptime guarantee with multi-region deployment and intelligent failover.",
      benefit: "99.99% uptime SLA"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Smart Database Management",
      description: "AI-optimized database performance with automatic tuning and query optimization.",
      benefit: "3x faster queries"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated DevOps",
      description: "CI/CD pipelines with AI-powered testing, deployment, and monitoring.",
      benefit: "Deploy 10x faster"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with AI threat detection and automated compliance.",
      benefit: "Bank-level security"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Worldwide content delivery network with AI-optimized routing and caching.",
      benefit: "50% faster loading"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Savings",
      value: "40%",
      description: "Reduction in cloud costs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      value: "3x",
      description: "Faster application performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Uptime",
      value: "99.99%",
      description: "Guaranteed uptime SLA"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Deployment",
      value: "10x",
      description: "Faster deployment cycles"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10 servers",
        "Basic AI scaling",
        "99.9% uptime SLA",
        "Email support",
        "Standard monitoring",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 100 servers",
        "Advanced AI automation",
        "99.99% uptime SLA",
        "Priority support",
        "Advanced monitoring",
        "Enhanced security",
        "Global CDN",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited servers",
        "Advanced AI automation",
        "99.99% uptime SLA",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Advanced compliance",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Williams",
      company: "E-commerce Platform",
      role: "CTO",
      content: "AI Cloud Infrastructure Advanced reduced our costs by 40% and improved performance by 3x. The AI scaling is incredibly intelligent!",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "SaaS Company",
      role: "DevOps Director",
      content: "The automated DevOps and 99.99% uptime guarantee gave us the reliability we needed. Deployments are now 10x faster.",
      rating: 5
    },
    {
      name: "Lisa Garcia",
      company: "Financial Services",
      role: "Infrastructure Manager",
      content: "The AI-powered security and compliance features helped us meet all regulatory requirements while reducing costs significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Cloud Infrastructure Advanced
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Next-Generation AI-Powered Cloud
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your cloud infrastructure with our AI-powered platform. 
              Reduce costs by 40%, improve performance by 3x, and achieve 99.99% uptime 
              with intelligent scaling, automated DevOps, and advanced security.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Cloud Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Advanced AI Cloud Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Scalable Cloud Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Cloud Infrastructure Advanced to optimize their cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructureAdvancedPage;
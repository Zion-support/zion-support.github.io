'use client';
import React, { useState, useEffect } from 'react';
import { Server, Cloud, Database, Shield, Users, Zap, CheckCircle, Star, ArrowRight, Clock, Target, DollarSign, Globe, Settings } from 'lucide-react';

const ITServicesComprehensivePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Management",
      description: "Complete IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.",
      features: ["Server Management", "Network Setup", "Hardware Procurement", "Performance Monitoring"],
      price: "Starting at $999/month"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Migration & Management",
      description: "Seamless migration to cloud platforms with ongoing management and optimization services.",
      features: ["AWS/Azure/GCP Migration", "Cloud Architecture", "Cost Optimization", "Security Implementation"],
      price: "Starting at $1,499/month"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Services",
      description: "Database design, implementation, optimization, and maintenance for optimal performance.",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration"],
      price: "Starting at $799/month"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from cyber threats and ensure compliance.",
      features: ["Security Audits", "Firewall Management", "Vulnerability Assessment", "Compliance Support"],
      price: "Starting at $1,299/month"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services to keep your business running smoothly.",
      features: ["24/7 Support", "Remote Assistance", "Issue Resolution", "User Training"],
      price: "Starting at $599/month"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DevOps & Automation",
      description: "Streamline development and deployment processes with DevOps practices and automation tools.",
      features: ["CI/CD Pipelines", "Containerization", "Monitoring & Logging", "Infrastructure as Code"],
      price: "Starting at $1,199/month"
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      value: "35%",
      description: "Average reduction in IT costs"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Uptime",
      value: "99.9%",
      description: "Guaranteed system uptime"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Response Time",
      value: "< 1hr",
      description: "Average response time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      value: "100%",
      description: "Compliance achievement"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic infrastructure management",
        "Email support",
        "Monthly reporting",
        "Standard security",
        "5 user accounts",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced infrastructure management",
        "Priority support",
        "Real-time monitoring",
        "Enhanced security",
        "25 user accounts",
        "Cloud migration",
        "DevOps services",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Complete IT transformation",
        "Dedicated account manager",
        "Custom solutions",
        "Advanced security",
        "Unlimited users",
        "Full cloud management",
        "Advanced automation",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Manufacturing Co.",
      role: "IT Director",
      content: "IT Services Comprehensive reduced our IT costs by 35% and improved our uptime to 99.9%. The team is incredibly professional and responsive.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Retail Chain",
      role: "CTO",
      content: "The cloud migration and DevOps services transformed our development process. We can now deploy 10x faster with zero downtime.",
      rating: 5
    },
    {
      name: "Michael Brown",
      company: "Financial Services",
      role: "CISO",
      content: "The cybersecurity solutions helped us achieve 100% compliance and prevented several potential security breaches. Highly recommended!",
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
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Comprehensive IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Complete IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your IT infrastructure with our comprehensive services. 
              Reduce costs by 35%, achieve 99.9% uptime, and get 24/7 support 
              with our expert team and cutting-edge technology solutions.
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
                Get IT Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold text-sm">
                  {service.price}
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
            Flexible IT Service Plans
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our comprehensive IT services to optimize their technology.
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

export default ITServicesComprehensivePage;
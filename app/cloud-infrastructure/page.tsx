import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Server, Shield, Zap, Database, Globe, CheckCircle, Mail, Smartphone, Award, Clock, Users, BarChart3, Settings, Cpu } from 'lucide-react';

export default function CloudInfrastructure() {
  const services = [
    {
      name: "Cloud Migration",
      description: "Seamless migration of your existing infrastructure to the cloud with zero downtime",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,999",
      features: ["Assessment & Planning", "Data Migration", "Application Migration", "Testing & Validation", "24/7 Support"]
    },
    {
      name: "Infrastructure Setup",
      description: "Complete cloud infrastructure design, implementation, and configuration",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,499/month",
      features: ["Server Configuration", "Load Balancing", "Auto-scaling", "Monitoring Setup", "Backup Systems"]
    },
    {
      name: "Security Hardening",
      description: "Comprehensive security implementation and compliance management",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      price: "Starting at $999/month",
      features: ["Security Assessment", "Firewall Configuration", "Access Controls", "Compliance Setup", "Threat Monitoring"]
    },
    {
      name: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance and cost efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "Starting at $799/month",
      features: ["Performance Analysis", "Resource Optimization", "Cost Optimization", "Caching Setup", "CDN Configuration"]
    },
    {
      name: "Database Management",
      description: "Expert database setup, optimization, and management in the cloud",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $599/month",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Security Hardening", "Monitoring"]
    },
    {
      name: "Global Deployment",
      description: "Multi-region deployment and global content delivery optimization",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,299/month",
      features: ["Multi-region Setup", "CDN Configuration", "Load Balancing", "Latency Optimization", "Compliance"]
    }
  ];

  const cloudProviders = [
    {
      name: "Amazon Web Services (AWS)",
      description: "Comprehensive cloud services with global reach and enterprise features",
      icon: "☁️",
      features: ["EC2, S3, RDS", "Lambda Functions", "CloudFront CDN", "Elastic Beanstalk", "Auto Scaling"]
    },
    {
      name: "Microsoft Azure",
      description: "Hybrid cloud solutions with enterprise integration and AI capabilities",
      icon: "🔷",
      features: ["Virtual Machines", "Azure SQL", "App Service", "Functions", "Cognitive Services"]
    },
    {
      name: "Google Cloud Platform",
      description: "Advanced analytics and machine learning with global infrastructure",
      icon: "🔍",
      features: ["Compute Engine", "Cloud Storage", "BigQuery", "AI Platform", "Kubernetes Engine"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$249",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud infrastructure",
      features: [
        "Basic cloud setup",
        "Email support",
        "Monthly monitoring",
        "Backup & recovery",
        "Security basics",
        "Up to 5 servers"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with advanced infrastructure needs",
      features: [
        "Advanced cloud setup",
        "Priority support",
        "24/7 monitoring",
        "Advanced backup",
        "Security hardening",
        "Up to 20 servers",
        "Performance optimization"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with complex infrastructure requirements",
      features: [
        "Custom cloud architecture",
        "Dedicated support team",
        "Real-time monitoring",
        "Disaster recovery",
        "Advanced security",
        "Unlimited servers",
        "Global deployment",
        "Compliance management"
      ],
      popular: false,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group's cloud infrastructure setup was flawless. Our application performance improved by 300% and costs reduced by 40%.",
      rating: 5,
      improvement: "300% performance boost"
    },
    {
      name: "Sarah Johnson",
      company: "E-commerce Solutions",
      role: "IT Director",
      content: "The migration to AWS was seamless. Zero downtime and our team was up and running in no time. Excellent support throughout.",
      rating: 5,
      improvement: "Zero downtime migration"
    },
    {
      name: "Michael Chen",
      company: "Financial Services",
      role: "Infrastructure Manager",
      content: "Their security hardening saved us from potential breaches. The compliance setup was comprehensive and we passed all audits.",
      rating: 5,
      improvement: "100% compliance achievement"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group | AWS, Azure, GCP Solutions</title>
        <meta
          name="description"
          content="Expert cloud infrastructure services including migration, setup, security, and optimization. AWS, Azure, and Google Cloud Platform solutions for businesses of all sizes."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, cloud setup, cloud security, cloud optimization, cloud management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Cloud Infrastructure Experts</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Cloud
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Infrastructure
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build, migrate, and optimize your cloud infrastructure with our expert team. 
              We provide comprehensive solutions for AWS, Azure, and Google Cloud Platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Assessment
                <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300 text-sm">Cloud Migrations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to optimize performance, security, and cost efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-bold text-lg text-center mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-6xl mb-4">{provider.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{provider.name}</h3>
                  <p className="text-gray-300 mb-6">{provider.description}</p>
                  <div className="space-y-2">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Infrastructure Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your cloud infrastructure needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-cyan-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how we've helped businesses transform their infrastructure with cloud solutions.
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
                      <div key={i} className="w-5 h-5 text-yellow-400 fill-current">⭐</div>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    <div className="text-xs text-cyan-400 mt-1">{testimonial.improvement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our cloud infrastructure experts today for a free assessment and discover 
              how we can optimize your cloud environment.
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Pricing
                <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
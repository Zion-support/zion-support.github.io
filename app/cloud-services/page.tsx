import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
<<<<<<< HEAD
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with global content delivery"
=======
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "High-performance cloud infrastructure for optimal speed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Deploy your applications across multiple regions worldwide"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Comprehensive data storage and management solutions"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    }
  ];

  const cloudSolutions = [
    {
      name: "Cloud Migration",
      description: "Seamlessly migrate your existing infrastructure to the cloud with minimal downtime and maximum efficiency.",
      features: ["Zero-downtime migration", "Data integrity assurance", "Performance optimization", "Cost analysis"],
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cloud Infrastructure",
      description: "Build and manage robust cloud infrastructure tailored to your business needs and growth objectives.",
      features: ["Auto-scaling capabilities", "Load balancing", "Disaster recovery", "Monitoring & alerting"],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment from threats and ensure compliance.",
      features: ["Identity & access management", "Data encryption", "Security monitoring", "Compliance auditing"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cloud Optimization",
      description: "Optimize your cloud resources for better performance, cost efficiency, and operational excellence.",
      features: ["Cost optimization", "Performance tuning", "Resource right-sizing", "Automated scaling"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud services",
      features: [
        "Basic cloud infrastructure",
        "24/7 email support",
        "Monthly health checks",
        "Basic security features",
        "Up to 5 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced cloud needs",
      features: [
        "Advanced cloud infrastructure",
        "Priority phone support",
        "Weekly health checks",
        "Advanced security suite",
        "Up to 25 users",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large enterprises with complex requirements",
      features: [
        "Custom cloud architecture",
        "Dedicated account manager",
        "Daily monitoring",
        "Enterprise security",
        "Unlimited users",
        "Custom development",
        "SLA guarantees"
      ],
      popular: false
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, storage, and infrastructure management. Transform your business with our enterprise cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud infrastructure, AWS, Azure, Google Cloud" />
=======
        <title>Cloud Services - Zion Tech Group | Scalable Cloud Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, security, and optimization solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud infrastructure, cloud security, cloud optimization, AWS, Azure, GCP" />
        <meta property="og:title" content="Cloud Services - Zion Tech Group | Scalable Cloud Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive cloud services including migration, infrastructure, security, and optimization solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-services" />
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
=======
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Cloud Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Cloud Services</span>
              <br />That Scale With You
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud solutions. From migration to optimization, 
              we provide end-to-end cloud services that drive growth, enhance security, and reduce costs.
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
              >
                Free Consultation
=======
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Key Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver cloud solutions that provide real business value through innovation, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>

              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you migrate, optimize, and secure your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
=======
        </section>

        {/* Cloud Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud services designed to meet your specific business requirements and growth objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudSolutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs. All plans include our core cloud services with room to grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our cloud experts help you migrate, optimize, and scale your infrastructure. 
              Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

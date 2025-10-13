import { ArrowRight, CheckCircle, Cloud, Shield, Zap, Users, Clock, DollarSign, Star, Target, Globe, Database, Server, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudInfrastructure() {
  const features = [
    "Complete cloud migration and optimization",
    "Multi-cloud strategy and management",
    "24/7 monitoring and maintenance",
    "Automated scaling and load balancing",
    "Disaster recovery and backup solutions",
    "Security hardening and compliance",
    "Cost optimization and resource management",
    "Performance monitoring and optimization",
    "Container orchestration (Kubernetes, Docker)",
    "Serverless architecture implementation",
    "Database migration and optimization",
    "API gateway and microservices architecture"
  ];

  const pricingPlans = [
    {
      name: "Basic Cloud",
      price: "$2,500",
      period: "month",
      description: "Essential cloud services for small businesses",
      features: [
        "Up to 10 servers",
        "Basic monitoring",
        "Email support",
        "Standard security",
        "Monthly reports",
        "8x5 support"
      ],
      popular: false
    },
    {
      name: "Professional Cloud",
      price: "$5,000",
      period: "month",
      description: "Comprehensive cloud solutions for growing companies",
      features: [
        "Up to 50 servers",
        "Advanced monitoring",
        "Priority support",
        "Enhanced security",
        "Weekly reports",
        "24/7 support",
        "Auto-scaling"
      ],
      popular: true
    },
    {
      name: "Enterprise Cloud",
      price: "$10,000",
      period: "month",
      description: "Full enterprise cloud management",
      features: [
        "Unlimited servers",
        "Complete cloud management",
        "Dedicated team",
        "Enterprise security",
        "Real-time reports",
        "24/7 support",
        "Custom solutions",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Scale your infrastructure up or down based on demand with automated cloud solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and compliance monitoring."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized cloud architecture ensures maximum performance and minimal downtime."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Effective",
      description: "Reduce infrastructure costs by up to 40% with our optimization strategies."
    }
  ];

  const cloudServices = [
    {
      title: "AWS Migration",
      description: "Complete migration to Amazon Web Services with zero downtime",
      icon: <Server className="w-6 h-6" />
    },
    {
      title: "Azure Solutions",
      description: "Microsoft Azure cloud services and hybrid cloud solutions",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Google Cloud",
      description: "Google Cloud Platform implementation and optimization",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Multi-Cloud",
      description: "Hybrid and multi-cloud strategies for maximum flexibility",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "Uptime", value: "99.9%", icon: <Zap className="w-6 h-6" /> },
    { label: "Cost Savings", value: "40%", icon: <DollarSign className="w-6 h-6" /> },
    { label: "Migration Success", value: "100%", icon: <Target className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Complete cloud infrastructure solutions including migration, optimization, and management. AWS, Azure, Google Cloud with 24/7 support."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud management, cloud optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Cloud className="w-12 h-12 text-blue-400 mr-4" />
                  <span className="text-blue-400 font-semibold">Cloud Infrastructure Solutions</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Complete
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {" "}Cloud Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your business with our comprehensive cloud infrastructure services. 
                  Migration, optimization, and 24/7 management for AWS, Azure, and Google Cloud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Uptime</div>
                      <div className="text-white text-2xl font-bold">99.9%</div>
                      <div className="text-green-300 text-sm">SLA</div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Cost Savings</div>
                      <div className="text-white text-2xl font-bold">40%</div>
                      <div className="text-green-300 text-sm">Average</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Cloud className="w-16 h-16 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cloud Platform Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage your cloud infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine deep cloud expertise with business acumen to deliver solutions that work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Cloud Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the cloud management level that matches your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-blue-400 ring-2 ring-blue-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you migrate to the cloud and optimize your infrastructure for maximum performance and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Cloud Expert
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
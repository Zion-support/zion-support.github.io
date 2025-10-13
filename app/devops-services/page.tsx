import FuturisticButton from '../../components/FuturisticButton';
import FuturisticCard from '../../components/FuturisticCard';
import React from 'react';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Settings, Sparkles, ArrowRight, CheckCircle, Star, Globe, Shield, Server, Monitor, Cloud, Code, Users, Clock, Zap, Mail, User } from 'lucide-react';

const DevOpsServicesPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const features = [
    {
      title: "CI/CD Pipeline",
      description: "Automated continuous integration and deployment pipelines for faster, more reliable releases",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and scalability",
      icon: <Settings className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Monitoring & Alerting",
      description: "Comprehensive monitoring and alerting systems to ensure optimal performance",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime and data loss",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "DevOps Consulting",
      description: "Strategic DevOps consulting to transform your development and operations processes",
      icon: <Settings className="w-8 h-8" />,
      features: ["Process assessment", "Tool selection", "Team training", "Implementation planning"],
      price: "From $2,999/month"
    },
    {
      title: "CI/CD Implementation",
      description: "Set up automated continuous integration and deployment pipelines for your applications",
      icon: <Code className="w-8 h-8" />,
      features: ["Pipeline design", "Automated testing", "Deployment automation", "Quality gates"],
      price: "From $1,999/month"
    },
    {
      title: "Infrastructure Management",
      description: "Manage and optimize your infrastructure with modern DevOps practices and tools",
      icon: <Server className="w-8 h-8" />,
      features: ["Infrastructure as Code", "Configuration management", "Resource optimization", "Cost management"],
      price: "From $2,499/month"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and observability solutions for your applications and infrastructure",
      icon: <Monitor className="w-8 h-8" />,
      features: ["Performance monitoring", "Log aggregation", "Alerting systems", "Dashboards"],
      price: "From $1,799/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Essential DevOps services for small to medium teams",
      features: [
        "Basic CI/CD setup",
        "Infrastructure monitoring",
        "Monthly reviews",
        "Email support",
        "Standard documentation"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Comprehensive DevOps solutions for growing organizations",
      features: [
        "Advanced CI/CD pipelines",
        "Infrastructure as Code",
        "Comprehensive monitoring",
        "Weekly reviews",
        "Priority support",
        "Custom dashboards",
        "Team training",
        "24/7 monitoring"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "Full-scale DevOps transformation for large organizations",
      features: [
        "Complete DevOps transformation",
        "Custom tool development",
        "Advanced security integration",
        "Daily reviews",
        "Dedicated support team",
        "Custom integrations",
        "Executive reporting",
        "Compliance management",
        "Disaster recovery"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD implementation, infrastructure management, monitoring, and cloud migration for optimal development workflows." />
        <meta name="keywords" content="devops services, ci/cd, infrastructure as code, monitoring, cloud migration, automation, deployment" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Settings className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">DevOps Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">
              DevOps Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Accelerate your development with our comprehensive DevOps services. 
            From CI/CD pipelines to infrastructure management, we help you deliver faster and more reliably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our DevOps services provide the tools, processes, and expertise 
              you need to accelerate development and improve reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.value}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions designed to accelerate your development and improve reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
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
                  <span className="text-blue-400 font-semibold text-lg">{service.price}</span>
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
              DevOps Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the DevOps plan that provides the right level of support for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional DevOps implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of teams using our DevOps services to deliver faster, more reliable software. 
              Get started with your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Settings className="w-5 h-5" />}
              >
                Start Your Transformation
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

export default DevOpsServicesPage;
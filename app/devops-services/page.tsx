import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Shield, CheckCircle, ArrowRight, Globe, BarChart3, Settings, Clock, Award, Star, Activity, Lock, Network } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const DevOpsServices = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your development workflow with modern CI/CD pipelines for faster, more reliable deployments",
      icon: <Code className="w-8 h-8" />,
      features: ["Automated testing", "Deployment automation", "Version control integration", "Rollback capabilities"],
      price: "From $1,999/month"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with Terraform, Ansible, and other modern IaC tools",
      icon: <Settings className="w-8 h-8" />,
      features: ["Terraform automation", "Version control", "Environment consistency", "Disaster recovery"],
      price: "From $1,499/month"
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes and Docker",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Kubernetes setup", "Docker optimization", "Service mesh", "Auto-scaling"],
      price: "From $2,499/month"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions to ensure your applications run smoothly",
      icon: <Activity className="w-8 h-8" />,
      features: ["Real-time monitoring", "Alerting systems", "Log aggregation", "Performance metrics"],
      price: "From $999/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small teams starting their DevOps journey",
      features: [
        "Basic CI/CD setup",
        "Code repository management",
        "Standard monitoring",
        "Email support",
        "Monthly reviews"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing teams with complex deployment needs",
      features: [
        "Advanced CI/CD pipelines",
        "Infrastructure as Code",
        "Container orchestration",
        "Priority support",
        "Weekly reviews",
        "Security scanning",
        "Performance optimization"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "/month",
      description: "Comprehensive DevOps solution for large organizations",
      features: [
        "Custom CI/CD workflows",
        "Multi-cloud deployment",
        "Advanced monitoring",
        "24/7 dedicated support",
        "Daily reviews",
        "Security compliance",
        "Custom integrations",
        "Dedicated DevOps engineer"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Automated Deployments",
      description: "Reduce deployment time by 90% with automated CI/CD pipelines",
      icon: <Code className="w-6 h-6" />,
      stats: "90% faster deployments"
    },
    {
      title: "Zero Downtime",
      description: "Achieve 99.99% uptime with blue-green deployments and rollback strategies",
      icon: <Activity className="w-6 h-6" />,
      stats: "99.99% uptime"
    },
    {
      title: "Security First",
      description: "Integrate security scanning and compliance checks into your development workflow",
      icon: <Shield className="w-6 h-6" />,
      stats: "Zero security incidents"
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 50% through intelligent resource management",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "50% cost reduction"
    }
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "500+", label: "Deployments Automated" },
    { icon: <Cloud className="w-6 h-6" />, number: "99.9%", label: "Uptime Achieved" },
    { icon: <Shield className="w-6 h-6" />, number: "100%", label: "Security Compliance" },
    { icon: <Activity className="w-6 h-6" />, number: "24/7", label: "Monitoring" }
  ];

  const testimonials = [
    {
      content: "Zion Tech Group transformed our development process. We went from weekly deployments to multiple daily deployments with zero downtime.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      avatar: "SJ",
      rating: 5
    },
    {
      content: "Their DevOps expertise helped us scale from 10 to 1000+ deployments per month while maintaining security and reliability.",
      name: "Michael Chen",
      role: "Engineering Director",
      company: "ScaleUp Inc",
      avatar: "MC",
      rating: 5
    },
    {
      content: "The monitoring and alerting systems they set up saved us from multiple potential outages. Highly recommended!",
      name: "Emily Rodriguez",
      role: "DevOps Manager",
      company: "CloudFirst",
      avatar: "ER",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>DevOps Services - CI/CD, Infrastructure as Code, Monitoring | Zion Tech Group</title>
        <meta name="description" content="Transform your development process with our comprehensive DevOps services. CI/CD pipelines, Infrastructure as Code, container orchestration, and monitoring solutions." />
        <meta name="keywords" content="devops services, ci/cd pipelines, infrastructure as code, kubernetes, docker, monitoring, automation, deployment" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Code className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">DevOps Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400">
              DevOps Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Accelerate your development process with our comprehensive DevOps services. From CI/CD pipelines 
            to infrastructure automation, we help you achieve faster, more reliable deployments.
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              Why Choose Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our expert team delivers DevOps solutions that accelerate development, ensure reliability, and optimize costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {capability.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions designed to accelerate your development process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
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
                  <span className="text-green-400 font-semibold text-lg">{service.price}</span>
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
              Choose the plan that best fits your DevOps needs and team size
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Development Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how teams are using our DevOps services to accelerate development
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
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of teams using our DevOps services to achieve faster, more reliable deployments.
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

export default DevOpsServices;
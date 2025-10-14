import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Cloud,
  Shield,
  TrendingUp,
  Server,
  ArrowRight,
} from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Cloud Management",
      description:
        "Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with automated compliance monitoring and reporting",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "Performance Optimization",
      description:
        "Continuous monitoring and optimization for maximum performance and cost efficiency",
    },
    {
      icon: <Server className="w-6 h-6 text-orange-400" />,
      title: "Automated Scaling",
      description:
        "Intelligent auto-scaling based on demand patterns and performance metrics",
    },
  ];

  const services = [
    {
      category: "Infrastructure Management",
      items: [
        "Cloud Architecture Design",
        "Resource Optimization",
        "Cost Management",
        "Performance Monitoring",
        "Disaster Recovery",
        "Backup Solutions"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "Security Audits",
        "Compliance Monitoring",
        "Access Management",
        "Threat Detection",
        "Data Encryption",
        "Security Training"
      ]
    },
    {
      category: "Monitoring & Analytics",
      items: [
        "Real-time Monitoring",
        "Performance Analytics",
        "Cost Analytics",
        "Usage Reports",
        "Alert Management",
        "Custom Dashboards"
      ]
    },
    {
      category: "Support & Maintenance",
      items: [
        "24/7 Support",
        "Proactive Maintenance",
        "Incident Response",
        "System Updates",
        "Documentation",
        "Training & Consulting"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$999",
      period: "/month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 10 cloud resources",
        "Basic monitoring",
        "Email support",
        "Monthly reports"
      ]
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 50 cloud resources",
        "Advanced monitoring",
        "Priority support",
        "Real-time alerts",
        "Custom dashboards"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited resources",
        "Full monitoring suite",
        "Dedicated support",
        "Custom integrations",
        "White-label options"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure management services. Multi-cloud support, security, monitoring, and optimization for AWS, Azure, and Google Cloud." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cloud Infrastructure Management
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Optimize, secure, and manage your cloud infrastructure across multiple platforms 
                with our comprehensive management services.
              </p>
              <FuturisticButton href="#features" className="bg-blue-600 hover:bg-blue-700">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Management Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud infrastructure management and optimization
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What We Manage</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete cloud infrastructure management across all major platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <FuturisticCard key={index}>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.category}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for cloud infrastructure management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard key={index} className={`${index === 1 ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'border border-gray-600 hover:bg-gray-800'}`}
                    >
                      Get Started
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-blue-600 to-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Optimize Your Cloud Infrastructure?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Let our experts manage your cloud infrastructure for maximum efficiency and security.
                </p>
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}
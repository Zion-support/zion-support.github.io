import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Star, Cloud, Shield, Zap, BarChart3, Users, Clock, DollarSign, Globe, Lock, Settings, Monitor, Database, Cpu, Network, HardDrive, Smartphone, Laptop, Headphones, TrendingUp } from "lucide-react";

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure setup, monitoring, and optimization for AWS, Azure, and Google Cloud.",
      price: "Starting at $2,500/month",
      features: ["Multi-cloud deployment", "Auto-scaling", "Cost optimization", "24/7 monitoring", "Disaster recovery", "Security compliance"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security Solutions",
      description: "Advanced security measures to protect your cloud infrastructure from threats and ensure compliance.",
      price: "Starting at $1,800/month",
      features: ["Threat detection", "Access control", "Data encryption", "Compliance auditing", "Incident response", "Security training"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Migration Services",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
      price: "Starting at $5,000/project",
      features: ["Assessment & planning", "Data migration", "Application modernization", "Testing & validation", "Go-live support", "Post-migration optimization"]
    }
  ];

  const benefits = [
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
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Reduce IT costs with optimized cloud resource utilization"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Deploy applications worldwide with low latency"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Automation",
      description: "Automate routine tasks and improve operational efficiency"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Monitoring",
      description: "Real-time monitoring and alerting for optimal performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including infrastructure management, security solutions, and migration services for modern businesses." />
        <meta name="keywords" content="cloud services, cloud infrastructure, cloud migration, cloud security, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive cloud solutions. From infrastructure management to security and migration, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/30 rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Cloud Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 mx-auto w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 text-center border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our experts help you design, implement, and manage a cloud solution that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Start Your Cloud Journey
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

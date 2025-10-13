import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, TrendingUp, Zap, Database, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export default function CloudServices() {
  const features = [
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
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with global CDN and edge computing"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Reliability",
      description: "99.99% uptime with automated backup and disaster recovery"
    }
  ];

  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Testing & Validation"],
      price: "Starting at $5,000"
    },
    {
      title: "Cloud Infrastructure",
      description: "Design and deploy scalable cloud infrastructure solutions",
      features: ["Infrastructure Design", "Auto-scaling", "Load Balancing", "Monitoring & Alerting"],
      price: "Starting at $3,000/month"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions for your cloud environment",
      features: ["Security Assessment", "Identity & Access Management", "Threat Detection", "Compliance"],
      price: "Starting at $2,000/month"
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud costs and performance",
      features: ["Cost Analysis", "Performance Tuning", "Resource Optimization", "Cost Monitoring"],
      price: "Starting at $1,500/month"
    }
  ];

  const cloudProviders = [
    { name: "Amazon Web Services", logo: "AWS", description: "Comprehensive cloud platform with 200+ services" },
    { name: "Microsoft Azure", logo: "Azure", description: "Hybrid cloud platform with enterprise integration" },
    { name: "Google Cloud Platform", logo: "GCP", description: "AI and machine learning focused cloud services" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration, infrastructure, and optimization services. AWS, Azure, and GCP certified solutions." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud infrastructure, cloud security" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. From migration to optimization, we help you leverage the full power of the cloud.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Cloud Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Cloud Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Providers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Cloud Providers We Work With</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 rounded-2xl p-8 border border-gray-700 text-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-800">{provider.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{provider.name}</h3>
                <p className="text-gray-300">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Cloud Migration Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300">Analyze your current infrastructure and identify migration opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
              <p className="text-gray-300">Create a detailed migration plan with timelines and milestones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Migration</h3>
              <p className="text-gray-300">Execute the migration with minimal downtime and disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
              <p className="text-gray-300">Monitor and optimize your cloud environment for peak performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Move to the Cloud?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you migrate, optimize, and secure your infrastructure in the cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center">
                <Cloud className="w-5 h-5 mr-2" />
                Get Free Cloud Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

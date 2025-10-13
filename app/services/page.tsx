'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Shield, Cloud, Zap, Globe, BarChart3 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning technologies.",
      link: "/ai-services",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with our comprehensive cybersecurity solutions and threat monitoring.",
      link: "/cybersecurity",
      features: ["Threat Detection", "Security Audits", "Incident Response", "Compliance"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scale your operations with our robust cloud infrastructure and migration services.",
      link: "/cloud-infrastructure",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Leverage next-generation 5G technology for ultra-fast connectivity and IoT applications.",
      link: "/5g-solutions",
      features: ["5G Networks", "Edge Computing", "IoT Integration", "Smart Cities"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications that drive business growth.",
      link: "/web-development",
      features: ["Responsive Design", "E-commerce", "CMS Development", "API Integration"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      link: "/data-analytics",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Dashboards"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with a comprehensive consultation to understand your business needs and challenges."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Our experts develop a customized strategy tailored to your specific requirements and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We implement the solution with minimal disruption to your existing operations."
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and maintenance to ensure optimal performance and continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, 5G technology, and web development." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation. From AI to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/about"
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
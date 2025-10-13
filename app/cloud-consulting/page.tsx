import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Shield, Zap, Users, BarChart3, Settings, TrendingUp, Globe, Database } from 'lucide-react';

const CloudConsultingPage = () => {
  const services = [
    {
      title: "Cloud Strategy & Planning",
      description: "Develop comprehensive cloud strategies aligned with your business objectives",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Cloud readiness assessment", "Migration planning", "Cost optimization", "Security strategy"]
    },
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud",
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["Application migration", "Data migration", "Zero-downtime migration", "Post-migration support"]
    },
    {
      title: "Cloud Architecture Design",
      description: "Design scalable, secure, and cost-effective cloud architectures",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Scalable architecture", "Security best practices", "Performance optimization", "Disaster recovery"]
    },
    {
      title: "Cloud Security",
      description: "Implement robust security measures to protect your cloud infrastructure",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Security assessment", "Compliance management", "Threat monitoring", "Incident response"]
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for performance and cost efficiency",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Cost optimization", "Performance tuning", "Resource scaling", "Monitoring setup"]
    },
    {
      title: "Cloud Training & Support",
      description: "Train your team and provide ongoing support for cloud operations",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Team training", "Documentation", "24/7 support", "Best practices"]
    }
  ];

  const platforms = [
    { name: "AWS", description: "Amazon Web Services" },
    { name: "Azure", description: "Microsoft Azure" },
    { name: "GCP", description: "Google Cloud Platform" },
    { name: "Multi-Cloud", description: "Hybrid cloud solutions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Consulting Services - Zion Tech Group | Cloud Migration & Architecture</title>
        <meta name="description" content="Expert cloud consulting services including cloud strategy, migration, architecture design, and optimization. Transform your business with cloud technology." />
        <meta name="keywords" content="cloud consulting, cloud migration, cloud architecture, AWS, Azure, GCP, cloud strategy, cloud optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Cloud Consulting Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with expert cloud consulting services. From strategy and migration to 
            optimization and support, we help you leverage the full power of cloud technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud platforms to provide the best solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-cyan-400">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud experts help you design, migrate, and optimize your cloud infrastructure for maximum performance and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your Cloud Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudConsultingPage;
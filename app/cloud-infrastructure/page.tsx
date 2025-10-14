import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe, CheckCircle } from "lucide-react";
import FuturisticBackground from "../components/FuturisticBackground";

const CloudInfrastructurePage = () => {
  const features = [
    {
      icon: <Cloud className="w-12 h-12 text-cyan-400" />,
      title: "Scalable Cloud Solutions",
      description: "Build and deploy applications that scale automatically with our robust cloud infrastructure platform."
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Enterprise Security",
      description: "Advanced security measures including encryption, access controls, and compliance with industry standards."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "High Performance",
      description: "Optimized infrastructure delivering high-speed performance and low-latency connectivity worldwide."
    },
    {
      icon: <Server className="w-12 h-12 text-cyan-400" />,
      title: "Managed Services",
      description: "24/7 monitoring, maintenance, and support to ensure your infrastructure runs smoothly."
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: "Data Management",
      description: "Comprehensive data storage, backup, and recovery solutions to protect your critical information."
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      title: "Global Reach",
      description: "Worldwide data centers and CDN to ensure fast access and optimal performance for global users."
    }
  ];

  const services = [
    "Cloud Migration",
    "Infrastructure as Code",
    "Container Orchestration",
    "Microservices Architecture",
    "Load Balancing",
    "Auto-scaling",
    "Disaster Recovery",
    "Performance Monitoring"
  ];

  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "50+", label: "Global Locations" },
    { value: "24/7", label: "Support" },
    { value: "100%", label: "Compliance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, management, and optimization. Scalable, secure, and high-performance cloud services for modern businesses." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud management, AWS, Azure, Google Cloud, enterprise cloud, cloud optimization" />
        <meta property="og:title" content="Cloud Infrastructure - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cloud infrastructure solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>

      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, deploy, and scale your applications with our comprehensive cloud infrastructure solutions. 
            From migration to optimization, we provide everything you need for cloud success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Infrastructure Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to meet the needs of modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud solutions to help you modernize and optimize your infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <p className="text-white font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud experts help you build a scalable, secure, and cost-effective cloud infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Cloud Journey
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;
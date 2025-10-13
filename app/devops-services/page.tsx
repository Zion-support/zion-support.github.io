import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Cloud, Shield, Zap, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const DevOpsServicesPage = () => {
  const features = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automated continuous integration and deployment pipelines for faster, more reliable releases",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Automated testing", "Zero-downtime deployments", "Rollback capabilities"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure using code for consistency and scalability",
      icon: <Code className="w-8 h-8" />,
      benefits: ["Version control", "Reproducible environments", "Cost optimization"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management for scalable applications",
      icon: <Cloud className="w-8 h-8" />,
      benefits: ["Auto-scaling", "Load balancing", "Service discovery"]
    },
    {
      title: "Security Integration",
      description: "Built-in security practices and compliance monitoring in your DevOps workflow",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Vulnerability scanning", "Compliance checks", "Security automation"]
    }
  ];

  const services = [
    "DevOps Assessment & Strategy",
    "CI/CD Pipeline Implementation",
    "Infrastructure Automation",
    "Container & Kubernetes Setup",
    "Monitoring & Logging Solutions",
    "Security & Compliance Integration",
    "Cloud Migration & Optimization",
    "Team Training & Support"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="DevOps Services - Zion Tech Group"
        description="Professional DevOps services including CI/CD, infrastructure automation, container orchestration, and cloud migration solutions."
        keywords="DevOps services, CI/CD, infrastructure automation, Kubernetes, Docker, cloud migration, continuous integration"
        canonical="https://ziontechgroup.com/devops-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              DevOps Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Accelerate your software delivery with our comprehensive DevOps solutions. 
            From CI/CD pipelines to infrastructure automation, we help you achieve faster, 
            more reliable deployments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive DevOps services designed to streamline your development workflow 
              and accelerate time-to-market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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

      {/* Services List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps services cover every aspect of modern software delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <span className="text-white">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our DevOps experts help you build faster, more reliable software delivery pipelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your DevOps Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;
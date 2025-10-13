import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Shield, Zap, Users, BarChart3, Cloud, Settings, Code, Database, Server } from 'lucide-react';

const DevOpsServicesPage = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automated build, test, and deployment pipelines for faster, more reliable software delivery",
      icon: <Code className="w-8 h-8" />,
      features: ["Automated testing", "Deployment automation", "Rollback capabilities", "Multi-environment support"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and scalability",
      icon: <Database className="w-8 h-8" />,
      features: ["Terraform/CloudFormation", "Version control", "Environment parity", "Cost optimization"]
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management for scalable, resilient applications",
      icon: <Server className="w-8 h-8" />,
      features: ["Kubernetes clusters", "Docker containerization", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring, logging, and alerting for proactive issue detection",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Log aggregation", "Performance metrics", "Alert management"]
    },
    {
      title: "Security Integration",
      description: "DevSecOps practices with security scanning and compliance automation",
      icon: <Shield className="w-8 h-8" />,
      features: ["Security scanning", "Compliance checks", "Vulnerability management", "Policy enforcement"]
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with optimization and cost management",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Migration planning", "Cost optimization", "Performance tuning"]
    }
  ];

  const benefits = [
    {
      title: "Faster Deployment",
      description: "Reduce deployment time from days to minutes",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Higher Reliability",
      description: "99.9% uptime with automated failover",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Team Productivity",
      description: "Focus on development, not infrastructure",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cost Efficiency",
      description: "Optimize resource usage and reduce costs",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DevOps Services - Zion Tech Group | CI/CD, Infrastructure, Cloud Solutions</title>
        <meta name="description" content="Professional DevOps services including CI/CD pipelines, infrastructure as code, container orchestration, and cloud migration. Accelerate your development lifecycle." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure as code, Kubernetes, Docker, cloud migration, monitoring, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              DevOps Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Accelerate your development lifecycle with our comprehensive DevOps solutions. 
            From CI/CD pipelines to cloud migration, we help you build, deploy, and scale faster.
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
              Our DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps services designed to streamline your development process and improve operational efficiency.
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
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern DevOps practices with our expert team and proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            Let our DevOps experts help you build a more efficient, reliable, and scalable development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Your DevOps Journey
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

export default DevOpsServicesPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Clock, Award, Network, Shield, Zap, Users, BarChart3, CheckCircle, ArrowRight, Cloud, Database, Settings, Code, Cpu, Globe, Smartphone, Monitor, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const DevOpsServicesPage = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automated deployment pipelines with continuous integration and delivery for faster, more reliable releases",
      icon: <Code className="w-8 h-8" />,
      features: ["Automated testing", "Zero-downtime deployments", "Rollback capabilities", "Multi-environment support"],
      price: "From $2,999/month"
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with Terraform, Ansible, and other IaC tools",
      icon: <Server className="w-8 h-8" />,
      features: ["Terraform automation", "Ansible playbooks", "Version control", "Environment consistency"],
      price: "From $1,999/month"
    },
    {
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management for scalable, resilient applications",
      icon: <Cpu className="w-8 h-8" />,
      features: ["Kubernetes clusters", "Docker optimization", "Auto-scaling", "Service mesh"],
      price: "From $3,999/month"
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions with real-time alerts and performance insights",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time monitoring", "Custom dashboards", "Alert management", "Performance analytics"],
      price: "From $1,499/month"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or GCP with minimal downtime and maximum efficiency",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Multi-cloud strategy", "Cost optimization", "Security compliance", "Performance tuning"],
      price: "From $4,999/month"
    },
    {
      title: "Database Management",
      description: "Database optimization, backup strategies, and performance tuning for optimal data management",
      icon: <Database className="w-8 h-8" />,
      features: ["Performance tuning", "Backup automation", "Security hardening", "Scalability planning"],
      price: "From $2,499/month"
    }
  ];

  const benefits = [
    {
      title: "99.9% Uptime",
      description: "Guaranteed system availability with redundant infrastructure",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "50% Faster Deployments",
      description: "Automated CI/CD pipelines reduce deployment time significantly",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and support",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 40% through optimization",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "500+", label: "Deployments Managed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Active Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="DevOps Services - Zion Tech Group | CI/CD, Infrastructure & Cloud Solutions"
        description="Professional DevOps services including CI/CD pipelines, infrastructure as code, container orchestration, and cloud migration. Expert DevOps consulting for modern businesses."
        keywords="DevOps services, CI/CD pipelines, infrastructure as code, Kubernetes, Docker, cloud migration, monitoring, automation, deployment"
        canonical="https://ziontechgroup.com/devops-services"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Server className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional DevOps Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              DevOps Excellence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Accelerate your development lifecycle with our comprehensive DevOps services. 
            From CI/CD pipelines to cloud infrastructure, we help you deploy faster and more reliably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Consultation
              <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive DevOps solutions designed to streamline your development process and improve deployment reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold text-lg">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional DevOps implementation with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our DevOps experts help you build a robust, scalable, and efficient development pipeline. 
            Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your DevOps Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Services
              <Server className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;
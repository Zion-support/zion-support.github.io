import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Shield, Zap, CheckCircle, ArrowRight, Clock, Target, Users, Settings, BarChart3, Globe, Database, Server, Wifi, Lock, RefreshCw, AlertTriangle, TrendingUp, Building, Home, Car, Heart, Briefcase, Calendar, Bell, Eye, Search, Filter, Download, Upload, Share2, Edit, Trash2, Plus, Minus, X, Check } from 'lucide-react';

const DevOpsSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "CI/CD Pipeline Setup",
      description: "Automated continuous integration and deployment pipelines for faster, reliable releases",
      features: ["Automated testing", "Code quality checks", "Automated deployments", "Rollback capabilities", "Environment management", "Release automation"],
      price: "Starting at $3,000"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with Terraform, CloudFormation, or Pulumi",
      features: ["Terraform modules", "CloudFormation templates", "Pulumi programs", "Infrastructure versioning", "State management", "Multi-cloud support"],
      price: "Starting at $2,500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Integration",
      description: "Integrate security practices into your DevOps workflow with DevSecOps",
      features: ["Security scanning", "Vulnerability management", "Compliance automation", "Secret management", "Security monitoring", "Policy enforcement"],
      price: "Starting at $4,000"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging solutions for better system visibility",
      features: ["Application monitoring", "Infrastructure monitoring", "Log aggregation", "Alerting systems", "Performance metrics", "Distributed tracing"],
      price: "Starting at $2,000"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Container Orchestration",
      description: "Kubernetes and Docker container management and orchestration",
      features: ["Kubernetes setup", "Docker optimization", "Service mesh", "Auto-scaling", "Load balancing", "Container security"],
      price: "Starting at $5,000"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps Consulting",
      description: "Strategic DevOps consulting to transform your development and operations",
      features: ["Process assessment", "Tool selection", "Team training", "Best practices", "Migration planning", "Ongoing support"],
      price: "Starting at $1,500/day"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluate your current development and operations processes to identify improvement opportunities"
    },
    {
      step: "02",
      title: "Tool Selection & Setup",
      description: "Choose and implement the right DevOps tools and technologies for your needs"
    },
    {
      step: "03",
      title: "Pipeline Implementation",
      description: "Build and configure CI/CD pipelines and automation workflows"
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Train your team and provide ongoing support for successful DevOps adoption"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Deployments",
      description: "Reduce deployment time from days to minutes with automated pipelines"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Higher Quality",
      description: "Improve code quality and reduce bugs with automated testing and code reviews"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Integrate security practices throughout the development lifecycle"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Better Collaboration",
      description: "Break down silos between development and operations teams"
    }
  ];

  const technologies = [
    "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", "Terraform", 
    "Ansible", "Prometheus", "Grafana", "ELK Stack", "AWS", "Azure", "GCP"
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Solutions - Zion Tech Group | CI/CD, Infrastructure as Code, Monitoring</title>
        <meta name="description" content="Comprehensive DevOps solutions including CI/CD pipelines, infrastructure as code, monitoring, and container orchestration. Transform your development workflow." />
        <meta name="keywords" content="devops solutions, ci/cd pipeline, infrastructure as code, kubernetes, docker, monitoring, automation" />
        <meta property="og:title" content="DevOps Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your development and operations with expert DevOps solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your development and operations with comprehensive DevOps solutions. 
                Accelerate delivery, improve quality, and enhance collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our DevOps Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions to accelerate your software delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our DevOps Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful DevOps transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest DevOps tools and technologies to deliver best-in-class solutions
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our DevOps Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development workflow with proven DevOps practices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your DevOps?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how DevOps can accelerate your software delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsSolutionsPage;
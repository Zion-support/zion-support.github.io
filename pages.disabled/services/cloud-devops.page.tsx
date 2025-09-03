import React from 'react';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import SEOHead from '../../src/components/SEOHead';
import { Cloud, Server, Zap, CheckCircle, ArrowRight, Phone, Mail, Users, Globe, Database, Network, Target, Award, Clock, Brain, Shield, BarChart3, Code, Settings, Monitor, GitBranch } from 'lucide-react';

const CloudDevOps = () => {
  const structuredData = {
    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Cloud & DevOps Services - Zion Tech Group"
    "url": "https://ziontechgroup.com/services/cloud-devops"
    "description": "Comprehensive cloud migration, DevOps automation, and infrastructure management services"
    "publisher": {
      "@type": "Organization"
      "name": "Zion Tech Group"
      "url": "https://ziontechgroup.com"
    }
  }

  const services = [
    {
      title: 'Cloud Migration'
      description: 'Seamless migration to cloud platforms with zero downtime'
      icon: Cloud;
      features: [
        'AWS, Azure, GCP Migration'
        'Zero Downtime Migration'
        'Data Migration Services'
        'Application Modernization'
        'Cost Optimization'
      ]
      pricing: 'Starting at $15,000/project'
    }
    {
      title: 'DevOps Automation'
      description: 'Automate your development and deployment processes'
      icon: Zap;
      features: [
        'CI/CD Pipeline Setup'
        'Infrastructure as Code'
        'Automated Testing'
        'Deployment Automation'
        'Monitoring & Alerting'
      ]
      pricing: 'Starting at $8,000/month'
    }
    {
      title: 'Container Orchestration'
      description: 'Kubernetes and Docker container management'
      icon: Server;
      features: [
        'Kubernetes Setup & Management'
        'Docker Containerization'
        'Microservices Architecture'
        'Service Mesh Implementation'
        'Auto-scaling Configuration'
      ]
      pricing: 'Starting at $12,000/project'
    }
    {
      title: 'Infrastructure Management'
      description: 'Complete infrastructure monitoring and management'
      icon: Monitor;
      features: [
        '24/7 Infrastructure Monitoring'
        'Performance Optimization'
        'Capacity Planning'
        'Disaster Recovery'
        'Backup & Restore'
      ]
      pricing: 'Starting at $5,000/month'
    }
    {
      title: 'Security & Compliance'
      description: 'Secure cloud infrastructure and compliance management'
      icon: Shield;
      features: [
        'Cloud Security Assessment'
        'Identity & Access Management'
        'Compliance Automation'
        'Security Monitoring'
        'Vulnerability Management'
      ]
      pricing: 'Starting at $7,500/month'
    }
    {
      title: 'Monitoring & Analytics'
      description: 'Advanced monitoring and analytics solutions'
      icon: BarChart3;
      features: [
        'Application Performance Monitoring'
        'Log Management & Analysis'
        'Real-time Dashboards'
        'Predictive Analytics'
        'Cost Monitoring'
      ]
      pricing: 'Starting at $3,000/month'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: Cloud }
    { name: 'Azure', icon: Cloud }
    { name: 'Google Cloud', icon: Cloud }
    { name: 'Kubernetes', icon: Server }
    { name: 'Docker', icon: Server }
    { name: 'Terraform', icon: Code }
    { name: 'Ansible', icon: Settings }
    { name: 'Jenkins', icon: GitBranch }
    { name: 'GitLab CI', icon: GitBranch }
    { name: 'Prometheus', icon: Monitor }
    { name: 'Grafana', icon: BarChart3 }
    { name: 'ELK Stack', icon: Database }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' }
    { number: '50%', label: 'Cost Reduction' }
    { number: '10x', label: 'Faster Deployments' }
    { number: '24/7', label: 'Monitoring' }
  ];

  const process = [
    {
      step: 'Assessment'
      title: 'Infrastructure Assessment'
      description: 'Analyze current infrastructure and identify optimization opportunities'
    }
    {
      step: 'Strategy'
      title: 'Migration Strategy'
      description: 'Develop comprehensive migration and automation strategy'
    }
    {
      step: 'Implementation'
      title: 'Implementation'
      description: 'Execute migration and set up DevOps pipelines'
    }
    {
      step: 'Optimization'
      title: 'Optimization'
      description: 'Continuous optimization and performance tuning'
    }
  ];

  return (
    <>
      <SEOHead;
        title="Cloud & DevOps Services - Zion Tech Group"
        description="Comprehensive cloud migration, DevOps automation, and infrastructure management services. Scale your infrastructure with expert guidance."
        keywords="cloud migration, DevOps, infrastructure management, Kubernetes, Docker, AWS, Azure, GCP, CI/CD, automation"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> DevOps</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Scale your infrastructure with our comprehensive cloud migration and DevOps automation services. 
                From cloud migration to continuous deployment, we&apos;ve got you covered.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
                  Multi-Cloud Solutions;
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                  DevOps Automation;
                </div>
                <div className="flex items-center">
                  <Server className="w-4 h-4 text-cyan-400 mr-2" />
                  Container Orchestration;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Cloud & DevOps Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions to modernize your infrastructure and accelerate development;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-cyan-400 font-semibold mb-4">{service.pricing}</div>
                  
                  <Link;
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
                  >
                    Get Started;
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies We Work With</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We work with the latest cloud and DevOps technologies to deliver cutting-edge solutions;
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-sm">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A systematic approach to cloud migration and DevOps implementation;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Cloud & DevOps Services?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Time to Market</h3>
                <p className="text-gray-300">
                  Accelerate your development cycles with automated CI/CD pipelines and cloud-native solutions;
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Optimization</h3>
                <p className="text-gray-300">
                  Reduce infrastructure costs by up to 50% with optimized cloud resources and automation;
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Security</h3>
                <p className="text-gray-300">
                  Implement security best practices and compliance standards from day one;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Let us help you modernize your infrastructure and accelerate your development process;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link;
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Assessment;
              </Link>
              <Link;
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Contact DevOps Expert;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default CloudDevOps;
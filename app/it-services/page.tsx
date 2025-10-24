<<<<<<< HEAD
"use client";


import React from "react";
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Server, Database, Shield } from "lucide-react";
=======
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database } from "lucide-react";
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
const ITServicesPage: React.FC = () => {
  const services = [
  {
      icon: Cloud,
    title: "Cloud Solutions",
      description: "Scalable cloud infrastructure for modern businesses",
    features: [
        "AWS/Azure/GCP Migration",
        "Cloud Architecture Design",
        "Cost Optimization",
    "24/7 Monitoring"
      ],
      price: "Starting at $2,000"
},
  {
    icon: Shield,
    title: "Cybersecurity",
      description: "Protect your business from evolving threats",
    features: [
        "Security Audits",
        "Threat Detection",
        "Compliance Management",
    "Incident Response"
      ],
      price: "Starting at $3,500"
},
  {
    icon: Server,
    title: "DevOps Services",
      description: "Streamline development and deployment processes",
    features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
    "Performance Monitoring"
      ],
      price: "Starting at $4,000"
},
  {
    icon: Database,
    title: "Data Analytics",
      description: "Turn your data into actionable insights",
    features: [
        "Data Warehousing",
        "Business Intelligence",
        "Real-time Dashboards",
    "Predictive Analytics"
      ],
      price: "Starting at $5,000"
    }
  ]
  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
    "Jenkins", "GitLab CI", "Prometheus", "Grafana", "Elasticsearch",
    "PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "React", "Node.js",
    "Python", "Go", "Rust", "TypeScript"
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions to modernize your infrastructure and accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end technology services to power your business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
<<<<<<< HEAD
                  {(() => {
        const IconComponent = service.icon;
        return <IconComponent className="h-6 w-6 text-white" />;
      })()}
=======
                  <IconComponent className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build robust solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our certified professionals have years of experience with cutting-edge technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Our solutions grow with your business, adapting to your changing needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                    <p className="text-gray-600">Optimize your IT spending with our efficient and cost-effective solutions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">
                Let&apos;s discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <a
                href="/contact"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors duration-200 inline-flex items-center"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
            Transform Your IT Infrastructure Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Partner with us to build a robust, scalable, and secure technology foundation for your business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover: bg-gray-100 transition-colors duration-200 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/ai-services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover: bg-white/10 transition-colors duration-200"
            >
              Explore AI Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ITServicesPage
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, Shield, Code, Database, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions to optimize your business performance and reduce costs',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from threats',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      icon: Code,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      icon: Monitor,
      features: ['24/7 Support', 'Remote Monitoring', 'Proactive Maintenance', 'Help Desk']
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with business goals',
      icon: Users,
      features: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud, security, DevOps, and infrastructure solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, infrastructure, technology consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  IT Services
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Comprehensive IT solutions to support your business infrastructure and drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section>
          <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mb-6">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Modernize Your IT?
                  </h2>
                  <p className="text-xl text-purple-100 mb-8">
                    Let's discuss how our IT services can help optimize your infrastructure.
                  </p>
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;
>>>>>>> cursor/delete-records-30ea

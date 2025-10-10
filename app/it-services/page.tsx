'use client';

import React from 'react';
import { 
  Cloud, 
  Shield, 
  Server, 
  Users, 
  Code, 
  Database, 
  Network, 
  Settings,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Rocket
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      name: "Cloud Migration & Setup",
      description: "Seamless cloud migration with zero downtime and comprehensive security",
      price: "$2,500/mo",
      features: ["Zero Downtime Migration", "Security Audit", "Performance Optimization", "24/7 Support", "Cost Optimization", "Disaster Recovery"],
      icon: Cloud,
      popular: true,
      category: "Cloud Services"
    },
    {
      name: "Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and data",
      price: "$1,800/mo",
      features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance", "Security Training", "Penetration Testing"],
      icon: Shield,
      popular: true,
      category: "Security"
    },
    {
      name: "IT Infrastructure Design",
      description: "Scalable infrastructure architecture designed for your business needs",
      price: "$3,000/mo",
      features: ["Architecture Design", "Scalability Planning", "Performance Tuning", "Monitoring", "Load Balancing", "High Availability"],
      icon: Server,
      popular: false,
      category: "Infrastructure"
    },
    {
      name: "24/7 IT Support",
      description: "Round-the-clock technical support and monitoring for your systems",
      price: "$1,200/mo",
      features: ["24/7 Monitoring", "Remote Support", "System Maintenance", "Emergency Response", "Proactive Maintenance", "SLA Guarantee"],
      icon: Users,
      popular: true,
      category: "Support"
    },
    {
      name: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements",
      price: "$4,000/mo",
      features: ["Custom Software", "API Development", "Integration", "Maintenance", "Testing", "Documentation"],
      icon: Code,
      popular: false,
      category: "Development"
    },
    {
      name: "Database Management",
      description: "Expert database administration and optimization for peak performance",
      price: "$1,500/mo",
      features: ["Database Optimization", "Backup & Recovery", "Performance Tuning", "Security", "Replication", "Monitoring"],
      icon: Database,
      popular: false,
      category: "Database"
    },
    {
      name: "Network Security",
      description: "Advanced network protection with firewall management and intrusion detection",
      price: "$1,600/mo",
      features: ["Firewall Management", "Intrusion Detection", "VPN Setup", "Network Monitoring", "Traffic Analysis", "Access Control"],
      icon: Network,
      popular: true,
      category: "Security"
    },
    {
      name: "DevOps Implementation",
      description: "Complete DevOps pipeline setup with CI/CD and automated deployment",
      price: "$2,200/mo",
      features: ["CI/CD Pipeline", "Automated Deployment", "Container Orchestration", "Monitoring", "Log Management", "Infrastructure as Code"],
      icon: Settings,
      popular: true,
      category: "DevOps"
    },
    {
      name: "Data Backup & Recovery",
      description: "Comprehensive backup solutions with disaster recovery planning",
      price: "$800/mo",
      features: ["Automated Backups", "Disaster Recovery", "Data Encryption", "Offsite Storage", "Recovery Testing", "Compliance"],
      icon: Database,
      popular: false,
      category: "Data Management"
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting to optimize your technology investments",
      price: "$1,000/mo",
      features: ["Technology Assessment", "Strategic Planning", "Vendor Management", "Cost Analysis", "ROI Optimization", "Best Practices"],
      icon: Users,
      popular: false,
      category: "Consulting"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      price: "$3,500/mo",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "API Integration", "Testing", "App Store Deployment"],
      icon: Code,
      popular: false,
      category: "Development"
    },
    {
      name: "Web Development",
      description: "Modern web applications with responsive design and optimal performance",
      price: "$2,800/mo",
      features: ["Responsive Design", "Performance Optimization", "SEO Optimization", "Security", "CMS Integration", "E-commerce"],
      icon: Code,
      popular: true,
      category: "Development"
    },
    {
      name: "API Development & Integration",
      description: "RESTful APIs and third-party integrations for seamless data flow",
      price: "$1,400/mo",
      features: ["RESTful APIs", "GraphQL", "Third-party Integration", "API Documentation", "Rate Limiting", "Authentication"],
      icon: Code,
      popular: false,
      category: "Development"
    },
    {
      name: "IT Asset Management",
      description: "Complete IT asset lifecycle management and optimization",
      price: "$600/mo",
      features: ["Asset Tracking", "License Management", "Lifecycle Planning", "Cost Optimization", "Compliance", "Reporting"],
      icon: Server,
      popular: false,
      category: "Management"
    },
    {
      name: "Cloud Cost Optimization",
      description: "Optimize your cloud spending with intelligent resource management",
      price: "$900/mo",
      features: ["Cost Analysis", "Resource Optimization", "Auto-scaling", "Reserved Instances", "Monitoring", "Reporting"],
      icon: Cloud,
      popular: false,
      category: "Cloud Services"
    },
    {
      name: "IT Training & Certification",
      description: "Comprehensive IT training programs for your team",
      price: "$1,100/mo",
      features: ["Technical Training", "Certification Prep", "Hands-on Labs", "Custom Curriculum", "Progress Tracking", "Certification"],
      icon: Users,
      popular: false,
      category: "Training"
    },
    {
      name: "Compliance & Governance",
      description: "Ensure regulatory compliance with comprehensive governance frameworks",
      price: "$2,000/mo",
      features: ["Compliance Auditing", "Policy Development", "Risk Assessment", "Documentation", "Training", "Monitoring"],
      icon: Shield,
      popular: false,
      category: "Compliance"
    },
    {
      name: "IT Project Management",
      description: "Expert project management for complex IT implementations",
      price: "$1,700/mo",
      features: ["Project Planning", "Resource Management", "Timeline Management", "Risk Management", "Quality Assurance", "Reporting"],
      icon: Settings,
      popular: false,
      category: "Project Management"
    },
    {
      name: "Hybrid Cloud Solutions",
      description: "Seamless integration between on-premises and cloud environments",
      price: "$2,800/mo",
      features: ["Hybrid Architecture", "Data Synchronization", "Security Integration", "Performance Optimization", "Monitoring", "Migration"],
      icon: Cloud,
      popular: true,
      category: "Cloud Services"
    },
    {
      name: "IT Disaster Recovery",
      description: "Comprehensive disaster recovery planning and implementation",
      price: "$1,900/mo",
      features: ["Disaster Planning", "Recovery Testing", "Backup Strategies", "Failover Systems", "Documentation", "Training"],
      icon: Shield,
      popular: false,
      category: "Disaster Recovery"
    },
    {
      name: "IT Performance Monitoring",
      description: "Advanced monitoring and alerting for optimal system performance",
      price: "$1,300/mo",
      features: ["Real-time Monitoring", "Performance Analytics", "Alerting", "Capacity Planning", "Trend Analysis", "Reporting"],
      icon: Network,
      popular: false,
      category: "Monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to build, secure, and scale your technology infrastructure. From cloud migration to cybersecurity, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              View Portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to modernize your infrastructure and optimize your operations.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              All Services
            </button>
            {Array.from(new Set(itServices.map(service => service.category))).map((category, index) => (
              <button key={index} className="px-6 py-3 bg-slate-800 text-gray-300 font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300">
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2">
                    <span className="bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-cyan-400 text-sm text-center">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm mb-4">per month</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our IT experts today for a free consultation and discover how our services can transform your technology infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Download IT Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
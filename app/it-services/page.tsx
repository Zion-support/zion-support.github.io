import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, TrendingUp, Server, Cloud, Database, Lock, Smartphone, Globe, Settings, ArrowRight, Cpu, HardDrive, Wifi, Monitor, Headphones, Code, Wrench } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure setup, migration, and management with 99.9% uptime guarantee and 24/7 monitoring.",
      price: "$1,200",
      period: "/month",
      features: [
        "AWS/Azure/GCP Setup & Migration",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & Load Balancing",
        "Disaster Recovery Planning",
        "24/7 Monitoring & Support",
        "Security Hardening",
        "Cost Optimization",
        "Performance Tuning"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      popular: true,
      category: "Cloud Services",
      useCases: ["Enterprise Migration", "Scalable Applications", "Disaster Recovery", "Cost Optimization"]
    },
    {
      id: 2,
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services including threat assessment, penetration testing, and security monitoring.",
      price: "$2,500",
      period: "/month",
      features: [
        "Security Assessment & Auditing",
        "Penetration Testing",
        "Vulnerability Management",
        "SIEM Implementation",
        "Incident Response Planning",
        "Security Training",
        "Compliance Management",
        "24/7 Security Monitoring"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      popular: true,
      category: "Cybersecurity",
      useCases: ["Threat Protection", "Compliance", "Risk Assessment", "Incident Response"]
    },
    {
      id: 3,
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management with high availability and performance optimization.",
      price: "$1,800",
      period: "/month",
      features: [
        "Network Design & Architecture",
        "Router & Switch Configuration",
        "Wireless Network Setup",
        "VPN Implementation",
        "Network Monitoring",
        "Bandwidth Management",
        "Security Implementation",
        "Troubleshooting & Support"
      ],
      icon: <Wifi className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      popular: false,
      category: "Networking",
      useCases: ["Office Networks", "Remote Work", "Data Centers", "Branch Connectivity"]
    },
    {
      id: 4,
      name: "Database Management",
      description: "Expert database administration, optimization, and management for SQL and NoSQL databases.",
      price: "$1,500",
      period: "/month",
      features: [
        "Database Design & Optimization",
        "Performance Tuning",
        "Backup & Recovery",
        "Data Migration",
        "Security Hardening",
        "Monitoring & Alerting",
        "Capacity Planning",
        "24/7 Support"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      popular: false,
      category: "Database",
      useCases: ["Data Management", "Performance Optimization", "Migration", "Backup Solutions"]
    },
    {
      id: 5,
      name: "DevOps & CI/CD",
      description: "Complete DevOps implementation with automated deployment pipelines, monitoring, and infrastructure management.",
      price: "$2,200",
      period: "/month",
      features: [
        "CI/CD Pipeline Setup",
        "Docker & Kubernetes",
        "Infrastructure Automation",
        "Monitoring & Logging",
        "Deployment Automation",
        "Environment Management",
        "Security Integration",
        "Team Training"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      popular: true,
      category: "DevOps",
      useCases: ["Automated Deployment", "Infrastructure as Code", "Monitoring", "Team Collaboration"]
    },
    {
      id: 6,
      name: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive maintenance.",
      price: "$800",
      period: "/month",
      features: [
        "24/7 Helpdesk Support",
        "Remote Desktop Support",
        "Hardware & Software Support",
        "User Training",
        "Proactive Maintenance",
        "Ticket Management",
        "Knowledge Base",
        "SLA Guarantee"
      ],
      icon: <Headphones className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-600",
      popular: false,
      category: "Support",
      useCases: ["User Support", "Technical Issues", "Training", "Maintenance"]
    },
    {
      id: 7,
      name: "Software Development",
      description: "Custom software development services including web applications, mobile apps, and enterprise solutions.",
      price: "$3,500",
      period: "/month",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "API Development",
        "Legacy System Modernization",
        "Quality Assurance",
        "Code Review & Optimization",
        "Documentation",
        "Maintenance & Support"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
      popular: true,
      category: "Development",
      useCases: ["Custom Applications", "Mobile Apps", "API Development", "System Integration"]
    },
    {
      id: 8,
      name: "Data Center Services",
      description: "Complete data center solutions including colocation, managed hosting, and disaster recovery services.",
      price: "$4,000",
      period: "/month",
      features: [
        "Colocation Services",
        "Managed Hosting",
        "Disaster Recovery",
        "Power & Cooling Management",
        "Physical Security",
        "Network Connectivity",
        "Monitoring & Maintenance",
        "Compliance Support"
      ],
      icon: <Server className="w-8 h-8" />,
      color: "from-gray-500 to-slate-600",
      popular: false,
      category: "Data Center",
      useCases: ["Hosting Solutions", "Disaster Recovery", "Compliance", "Infrastructure"]
    },
    {
      id: 9,
      name: "IT Consulting",
      description: "Strategic IT consulting services for technology planning, digital transformation, and IT strategy development.",
      price: "$1,000",
      period: "/month",
      features: [
        "IT Strategy Development",
        "Technology Assessment",
        "Digital Transformation",
        "Vendor Management",
        "Project Management",
        "Risk Assessment",
        "Compliance Consulting",
        "Change Management"
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      popular: false,
      category: "Consulting",
      useCases: ["Strategic Planning", "Digital Transformation", "Technology Assessment", "Project Management"]
    },
    {
      id: 10,
      name: "Managed IT Services",
      description: "Complete managed IT services including infrastructure management, security, and proactive monitoring.",
      price: "$2,800",
      period: "/month",
      features: [
        "Infrastructure Management",
        "Security Management",
        "Proactive Monitoring",
        "Patch Management",
        "Backup & Recovery",
        "User Management",
        "Compliance Management",
        "24/7 Support"
      ],
      icon: <Wrench className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      popular: true,
      category: "Managed Services",
      useCases: ["Complete IT Management", "Proactive Support", "Security", "Compliance"]
    }
  ];

  const categories = ["All", "Cloud Services", "Cybersecurity", "Networking", "Database", "DevOps", "Support", "Development", "Data Center", "Consulting", "Managed Services"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services designed to keep your business running smoothly and securely. 
              From cloud infrastructure to cybersecurity, we provide enterprise-grade IT solutions.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-400" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-green-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 ${
                  service.popular ? 'ring-2 ring-green-400/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  {service.icon}
                </div>

                <div className="mb-4">
                  <span className="text-green-400 text-sm font-medium">{service.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Use Cases */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Common Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-sm text-gray-400">Enterprise pricing • Custom solutions available</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* IT Capabilities Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cloud Services</h3>
                <p className="text-gray-300 text-sm">Complete cloud infrastructure management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Comprehensive security solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">DevOps</h3>
                <p className="text-gray-300 text-sm">Automated deployment and monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm">Custom software solutions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our IT experts are ready to help you build, secure, and maintain a robust technology infrastructure 
              that will support your business growth and ensure maximum uptime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Schedule IT Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
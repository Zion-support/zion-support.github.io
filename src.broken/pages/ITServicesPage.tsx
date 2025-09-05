<<<<<<< HEAD
import React from 'react',
import { 
  Server,
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Cpu, 
  Zap, 
  CheckCircle, 
  Star,
  ExternalLink,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Monitor,
  Lock,
  Users,
  BarChart3
} from 'lucide-react',
=======
import React from 'react';
import {_Server, _Cloud, _Shield, _Code, _Database, _Network, _Cpu, _Zap, _CheckCircle, _Star, _ExternalLink, _ArrowRight, _Phone, _Mail, _MapPin, _Linkedin, _Twitter, _Github, _Monitor, _Lock, _Users, _BarChart3} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function ITServicesPage() {_const _itServices = [
    {
<<<<<<< HEAD
      name: &quot;Cloud Migration & Optimization&quot;,
      description: &quot;End-to-end cloud migration services with strategic planning, cost optimization, and performance tuning for maximum ROI.&quot;,
      icon: <Cloud className=&quot;w-12 h-12 text-blue-500&quot; />,
      features: [
        &quot;Multi-cloud strategy development&quot;,
        &quot;Cost optimization and monitoring&quot;,
        &quot;Security compliance implementation&quot;,
        &quot;Performance tuning and optimization&quot;,
        &quot;24/7 monitoring and alerting&quot;,
        &quot;Disaster recovery planning&quot;,
        &quot;Data migration and validation&quot;,
        &quot;Team training and documentation&quot;
      ],
      pricing: {
        small: &quot;From $2,500&quot;,
        medium: &quot;From $5,000&quot;,
        enterprise: &quot;From $15,000&quot;
      },
      marketPrice: &quot;$5,000-15,000&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Mid-size companies&quot;, &quot;Startups&quot;, &quot;Healthcare&quot;, &quot;Financial services&quot;],
=======
      name: "Cloud Migration & Optimization", _description: "End-to-end cloud migration services with strategic planning, _cost optimization, _and performance tuning for maximum ROI.", _icon: <Cloud className="w-12 h-12 text-blue-500" />, _features: [
        "Multi-cloud strategy development", _"Cost optimization and monitoring", _"Security compliance implementation", _"Performance tuning and optimization", _"24/7 monitoring and alerting", _"Disaster recovery planning", _"Data migration and validation", _"Team training and documentation"
      ], _pricing: {
        small: "From $2, _500", _medium: "From $5, _000", _enterprise: "From $15, _000"},
      marketPrice: "$5,000-15,000",
      useCases: ["Enterprises", "Mid-size companies", "Startups", "Healthcare", "Financial services"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Reduced infrastructure costs&quot;,
        &quot;Improved scalability&quot;,
        &quot;Enhanced security posture&quot;,
        &quot;Better performance&quot;,
        &quot;Operational efficiency&quot;
      ],
      website: &quot;https://ziontechgroup.com/cloud-migration&quot;
    },
<<<<<<< HEAD
    {
      name: &quot;DevOps Automation Platform&quot;,
      description: &quot;Complete CI/CD pipeline automation with infrastructure as code, monitoring solutions, and security integration.&quot;,
      icon: <Code className=&quot;w-12 h-12 text-green-500&quot; />,
      features: [
        &quot;CI/CD pipeline automation&quot;,
        &quot;Infrastructure as Code (IaC)&quot;,
        &quot;Container orchestration&quot;,
        &quot;Monitoring and alerting&quot;,
        &quot;Security scanning integration&quot;,
        &quot;Auto-scaling capabilities&quot;,
        &quot;Configuration management&quot;,
        &quot;Performance optimization&quot;
      ],
      pricing: {
        starter: &quot;$599/month&quot;,
        professional: &quot;$1,199/month&quot;,
        enterprise: &quot;$2,499/month&quot;
      },
      marketPrice: &quot;$800-1500/month&quot;,
      useCases: [&quot;Development teams&quot;, &quot;Tech companies&quot;, &quot;Enterprises&quot;, &quot;Startups&quot;, &quot;DevOps teams&quot;],
=======
    {_name: "DevOps Automation Platform", _description: "Complete CI/CD pipeline automation with infrastructure as code, _monitoring solutions, _and security integration.", _icon: <Code className="w-12 h-12 text-green-500" />, _features: [
        "CI/CD pipeline automation", _"Infrastructure as Code (IaC)", _"Container orchestration", _"Monitoring and alerting", _"Security scanning integration", _"Auto-scaling capabilities", _"Configuration management", _"Performance optimization"
      ], _pricing: {
        starter: "$599/month", _professional: "$1, _199/month", _enterprise: "$2, _499/month"},
      marketPrice: "$800-1500/month",
      useCases: ["Development teams", "Tech companies", "Enterprises", "Startups", "DevOps teams"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Faster deployment cycles&quot;,
        &quot;Reduced manual errors&quot;,
        &quot;Improved collaboration&quot;,
        &quot;Better resource utilization&quot;,
        &quot;Enhanced security&quot;
      ],
      website: &quot;https://ziontechgroup.com/devops-automation&quot;
    },
<<<<<<< HEAD
    {
      name: &quot;Cybersecurity Assessment & Implementation&quot;,
      description: &quot;Comprehensive security audits, penetration testing, and security infrastructure deployment with compliance frameworks.&quot;,
      icon: <Shield className=&quot;w-12 h-12 text-red-500&quot; />,
      features: [
        &quot;Security audits and assessments&quot;,
        &quot;Penetration testing&quot;,
        &quot;Compliance framework implementation&quot;,
        &quot;Incident response planning&quot;,
        &quot;Security awareness training&quot;,
        &quot;Vulnerability management&quot;,
        &quot;Security monitoring setup&quot;,
        &quot;Compliance reporting&quot;
      ],
      pricing: {
        basic: &quot;From $3,500&quot;,
        comprehensive: &quot;From $7,500&quot;,
        enterprise: &quot;From $20,000&quot;
      },
      marketPrice: &quot;$7,000-20,000&quot;,
      useCases: [&quot;Financial services&quot;, &quot;Healthcare&quot;, &quot;Government&quot;, &quot;Enterprises&quot;, &quot;E-commerce&quot;],
=======
    {_name: "Cybersecurity Assessment & Implementation", _description: "Comprehensive security audits, _penetration testing, _and security infrastructure deployment with compliance frameworks.", _icon: <Shield className="w-12 h-12 text-red-500" />, _features: [
        "Security audits and assessments", _"Penetration testing", _"Compliance framework implementation", _"Incident response planning", _"Security awareness training", _"Vulnerability management", _"Security monitoring setup", _"Compliance reporting"
      ], _pricing: {
        basic: "From $3, _500", _comprehensive: "From $7, _500", _enterprise: "From $20, _000"},
      marketPrice: "$7,000-20,000",
      useCases: ["Financial services", "Healthcare", "Government", "Enterprises", "E-commerce"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Reduced security risks&quot;,
        &quot;Compliance assurance&quot;,
        &quot;Improved incident response&quot;,
        &quot;Enhanced customer trust&quot;,
        &quot;Cost-effective security&quot;
      ],
      website: &quot;https://ziontechgroup.com/cybersecurity&quot;
    },
<<<<<<< HEAD
    {
      name: &quot;Network Infrastructure Design&quot;,
      description: &quot;Scalable network architecture design with high availability, security, and performance optimization.&quot;,
      icon: <Network className=&quot;w-12 h-12 text-purple-500&quot; />,
      features: [
        &quot;Network architecture design&quot;,
        &quot;High availability setup&quot;,
        &quot;Security implementation&quot;,
        &quot;Performance optimization&quot;,
        &quot;Load balancing configuration&quot;,
        &quot;Network monitoring&quot;,
        &quot;Documentation and training&quot;,
        &quot;Ongoing support&quot;
      ],
      pricing: {
        small: &quot;From $4,000&quot;,
        medium: &quot;From $8,000&quot;,
        enterprise: &quot;From $25,000&quot;
      },
      marketPrice: &quot;$8,000-30,000&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Data centers&quot;, &quot;Cloud providers&quot;, &quot;Educational institutions&quot;, &quot;Healthcare&quot;],
=======
    {_name: "Network Infrastructure Design", _description: "Scalable network architecture design with high availability, _security, _and performance optimization.", _icon: <Network className="w-12 h-12 text-purple-500" />, _features: [
        "Network architecture design", _"High availability setup", _"Security implementation", _"Performance optimization", _"Load balancing configuration", _"Network monitoring", _"Documentation and training", _"Ongoing support"
      ], _pricing: {
        small: "From $4, _000", _medium: "From $8, _000", _enterprise: "From $25, _000"},
      marketPrice: "$8,000-30,000",
      useCases: ["Enterprises", "Data centers", "Cloud providers", "Educational institutions", "Healthcare"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Improved network performance&quot;,
        &quot;Enhanced security&quot;,
        &quot;Better scalability&quot;,
        &quot;Reduced downtime&quot;,
        &quot;Operational efficiency&quot;
      ],
      website: &quot;https://ziontechgroup.com/network-infrastructure&quot;
    },
<<<<<<< HEAD
    {
      name: &quot;Database Design & Optimization&quot;,
      description: &quot;Database architecture design, performance tuning, and migration services for optimal data management.&quot;,
      icon: <Database className=&quot;w-12 h-12 text-orange-500&quot; />,
      features: [
        &quot;Database architecture design&quot;,
        &quot;Performance tuning and optimization&quot;,
        &quot;Data migration services&quot;,
        &quot;Backup and recovery setup&quot;,
        &quot;Security implementation&quot;,
        &quot;Monitoring and alerting&quot;,
        &quot;Scalability planning&quot;,
        &quot;Maintenance procedures&quot;
      ],
      pricing: {
        consultation: &quot;From $1,500&quot;,
        implementation: &quot;From $5,000&quot;,
        enterprise: &quot;From $15,000&quot;
      },
      marketPrice: &quot;$3,000-20,000&quot;,
      useCases: [&quot;E-commerce platforms&quot;, &quot;SaaS companies&quot;, &quot;Enterprises&quot;, &quot;Financial services&quot;, &quot;Healthcare&quot;],
=======
    {_name: "Database Design & Optimization", _description: "Database architecture design, _performance tuning, _and migration services for optimal data management.", _icon: <Database className="w-12 h-12 text-orange-500" />, _features: [
        "Database architecture design", _"Performance tuning and optimization", _"Data migration services", _"Backup and recovery setup", _"Security implementation", _"Monitoring and alerting", _"Scalability planning", _"Maintenance procedures"
      ], _pricing: {
        consultation: "From $1, _500", _implementation: "From $5, _000", _enterprise: "From $15, _000"},
      marketPrice: "$3,000-20,000",
      useCases: ["E-commerce platforms", "SaaS companies", "Enterprises", "Financial services", "Healthcare"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Improved data performance&quot;,
        &quot;Enhanced data security&quot;,
        &quot;Better scalability&quot;,
        &quot;Reduced maintenance costs&quot;,
        &quot;Improved reliability&quot;
      ],
      website: &quot;https://ziontechgroup.com/database-services&quot;
    },
<<<<<<< HEAD
    {
      name: &quot;IT Infrastructure Management&quot;,
      description: &quot;Comprehensive IT infrastructure management with proactive monitoring, maintenance, and optimization services.&quot;,
      icon: <Server className=&quot;w-12 h-12 text-indigo-500&quot; />,
      features: [
        &quot;24/7 infrastructure monitoring&quot;,
        &quot;Proactive maintenance&quot;,
        &quot;Performance optimization&quot;,
        &quot;Security updates&quot;,
        &quot;Backup management&quot;,
        &quot;Disaster recovery&quot;,
        &quot;Capacity planning&quot;,
        &quot;Vendor management&quot;
      ],
      pricing: {
        basic: &quot;$799/month&quot;,
        professional: &quot;$1,599/month&quot;,
        enterprise: &quot;$3,199/month&quot;
      },
      marketPrice: &quot;$1,200-3,500/month&quot;,
      useCases: [&quot;Enterprises&quot;, &quot;Mid-size companies&quot;, &quot;Healthcare&quot;, &quot;Financial services&quot;, &quot;Educational institutions&quot;],
=======
    {_name: "IT Infrastructure Management", _description: "Comprehensive IT infrastructure management with proactive monitoring, _maintenance, _and optimization services.", _icon: <Server className="w-12 h-12 text-indigo-500" />, _features: [
        "24/7 infrastructure monitoring", _"Proactive maintenance", _"Performance optimization", _"Security updates", _"Backup management", _"Disaster recovery", _"Capacity planning", _"Vendor management"
      ], _pricing: {
        basic: "$799/month", _professional: "$1, _599/month", _enterprise: "$3, _199/month"},
      marketPrice: "$1,200-3,500/month",
      useCases: ["Enterprises", "Mid-size companies", "Healthcare", "Financial services", "Educational institutions"],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      benefits: [
        &quot;Reduced downtime&quot;,
        &quot;Lower operational costs&quot;,
        &quot;Improved performance&quot;,
        &quot;Enhanced security&quot;,
        &quot;Peace of mind&quot;
      ],
      website: &quot;https://ziontechgroup.com/infrastructure-management&quot;
    }
  ],

<<<<<<< HEAD
  const additionalServices = [
    {
      name: &quot;API Development & Integration&quot;,
      description: &quot;Custom API development and third-party system integration services.&quot;,
      pricing: &quot;From $2,500&quot;,
      icon: <Code className=&quot;w-8 h-8 text-blue-400&quot; />
    },
    {
      name: &quot;Data Backup & Recovery&quot;,
      description: &quot;Comprehensive backup solutions and disaster recovery planning.&quot;,
      pricing: &quot;From $299/month&quot;,
      icon: <Database className=&quot;w-8 h-8 text-green-400&quot; />
    },
    {
      name: &quot;Performance Monitoring&quot;,
      description: &quot;Real-time performance monitoring and optimization services.&quot;,
      pricing: &quot;From $199/month&quot;,
      icon: <Monitor className=&quot;w-8 h-8 text-purple-400&quot; />
    },
    {
      name: &quot;IT Consulting&quot;,
      description: &quot;Strategic IT consulting and technology roadmap planning.&quot;,
      pricing: &quot;From $150/hour&quot;,
      icon: <Users className=&quot;w-8 h-8 text-orange-400&quot; />
    }
  ],

  const stats = [
<<<<<<< HEAD
    { label: "Infrastructure Deployed", value: "200+" },
    { label: "Security Audits", value: "150+" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Client Satisfaction", value: "97%" }
  ],
=======
    { label: &quot;Infrastructure Deployed&quot;, value: &quot;200+&quot; },
    { label: &quot;Security Audits&quot;, value: &quot;150+&quot; },
    { label: &quot;Uptime Guarantee&quot;, value: &quot;99.9%&quot; },
    { label: &quot;Client Satisfaction&quot;, value: &quot;97%&quot; }
=======
  const _additionalServices = [
    {_name: "API Development & Integration", _description: "Custom API development and third-party system integration services.", _pricing: "From $2, _500", _icon: <Code className="w-8 h-8 text-blue-400" />},
    {_name: "Data Backup & Recovery", _description: "Comprehensive backup solutions and disaster recovery planning.", _pricing: "From $299/month", _icon: <Database className="w-8 h-8 text-green-400" />},
    {_name: "Performance Monitoring", _description: "Real-time performance monitoring and optimization services.", _pricing: "From $199/month", _icon: <Monitor className="w-8 h-8 text-purple-400" />},
    {_name: "IT Consulting", _description: "Strategic IT consulting and technology roadmap planning.", _pricing: "From $150/hour", _icon: <Users className="w-8 h-8 text-orange-400" />}
  ];

  const _stats = [
    {_label: "Infrastructure Deployed", _value: "200+"},
    {_label: "Security Audits", _value: "150+"},
    {_label: "Uptime Guarantee", _value: "99.9%"},
    {_label: "Client Satisfaction", _value: "97%"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white&quot;>
      {/* Hero Section */}
      <div className=&quot;relative overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24&quot;>
          <div className=&quot;text-center&quot;>
            <div className=&quot;flex justify-center mb-6&quot;>
              <Server className=&quot;w-20 h-20 text-blue-400&quot; />
=======
  return (_<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {_/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Server className="w-20 h-20 text-blue-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent&quot;>
              IT Infrastructure & DevOps Services
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Enterprise-grade IT solutions that drive operational excellence, security, and scalability. From cloud migration to cybersecurity, we build robust technology foundations.
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Enterprise-grade IT solutions that drive operational excellence, _security, _and scalability. From cloud migration to cybersecurity, _we build robust technology foundations.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;>
              <a 
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors&quot;
              >
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                <span>Call Now: +1 302 464 0950</span>
              </Link>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Inquiry&quot;
                className=&quot;inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors&quot;
              >
                <Mail className=&quot;w-5 h-5 mr-2&quot; />
                <span>Get IT Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Stats Section */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
          {stats.map((stat, index) => (
            <div key={index} className=&quot;text-center&quot;>
              <div className=&quot;text-3xl md:text-4xl font-bold text-blue-400 mb-2&quot;>{stat.value}</div>
              <div className=&quot;text-gray-300 text-sm&quot;>{stat.label}</div>
=======
      {_/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {_stats.map((stat, _index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{_stat.value}</div>
              <div className="text-gray-300 text-sm">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* IT Services Grid */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-16&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
=======
      {_/* IT Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Our IT Service Portfolio
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Comprehensive IT solutions designed to modernize infrastructure, enhance security, and drive operational efficiency.
          </p>
        </div>

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
          {itServices.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105&quot;>
              <div className=&quot;space-y-6&quot;>
                <div className=&quot;flex items-center gap-4&quot;>
                  {service.icon}
                  <h3 className=&quot;text-2xl font-bold text-white&quot;>{service.name}</h3>
                </div>
                
                <p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
=======
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {_itServices.map(_(service, _index) => (_<div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {_service.icon}
                  <h3 className="text-2xl font-bold text-white">{_service.name}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{_service.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                
                <div className=&quot;space-y-4&quot;>
                  <div>
<<<<<<< HEAD
                    <h4 className=&quot;text-lg font-semibold text-blue-400 mb-3&quot;>Key Features:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-2&quot;>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center gap-2 text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; />
                          {feature}
=======
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {_service.features.map((feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
                    <div>
<<<<<<< HEAD
                      <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Pricing:</h4>
                      <div className=&quot;space-y-1&quot;>
                        {Object.entries(service.pricing).map(([plan, price]) => (
                          <div key={plan} className=&quot;flex justify-between text-sm&quot;>
                            <span className=&quot;text-gray-400 capitalize&quot;>{plan}:</span>
                            <span className=&quot;text-green-400 font-semibold&quot;>{price}</span>
                          </div>
                        ))}
                      </div>
                      <div className=&quot;mt-2 text-xs text-gray-400&quot;>
                        Market price: <span className=&quot;line-through&quot;>{service.marketPrice}</span>
=======
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Pricing:</h4>
                      <div className="space-y-1">
                        {_Object.entries(service.pricing).map(_([plan, _price]) => (
                          <div key={plan} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{_plan}:</span>
                            <span className="text-green-400 font-semibold">{_price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 text-xs text-gray-400">
                        Market price: <span className="line-through">{_service.marketPrice}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>

                    <div>
<<<<<<< HEAD
                      <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Best For:</h4>
                      <ul className=&quot;space-y-1&quot;>
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className=&quot;text-xs text-gray-300&quot;>• {useCase}</li>
=======
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                      <ul className="space-y-1">
                        {_service.useCases.map(_(useCase, _useCaseIndex) => (
                          <li key={useCaseIndex} className="text-xs text-gray-300">• {_useCase}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
<<<<<<< HEAD
                    <h4 className=&quot;text-sm font-semibold text-blue-400 mb-2&quot;>Key Benefits:</h4>
                    <ul className=&quot;grid grid-cols-1 md:grid-cols-2 gap-1&quot;>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=&quot;text-xs text-gray-300&quot;>• {benefit}</li>
=======
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {_service.benefits.map(_(benefit, _benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">• {_benefit}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </ul>
                  </div>

                  <div className=&quot;pt-4 border-t border-white/20&quot;>
                    <div className=&quot;flex gap-3&quot;>
                      <a 
<<<<<<< HEAD
                        href={service.website}
                        className=&quot;flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors&quot;
=======
                        href={_service.website}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <span>Learn More</span>
                        <ExternalLink className=&quot;w-4 h-4&quot; />
                      </Link>
                      <a 
<<<<<<< HEAD
                        href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className=&quot;inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-medium transition-colors&quot;
=======
                        href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        <span>Get Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Additional Services */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-4&quot;>
=======
      {_/* Additional Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Additional IT Services
          </h2>
          <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
            Specialized IT services to complement your technology infrastructure and support your business growth.
          </p>
        </div>

<<<<<<< HEAD
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
          {additionalServices.map((service, index) => (
            <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300&quot;>
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;flex justify-center&quot;>
                  {service.icon}
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>{service.name}</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>{service.description}</p>
                <div className=&quot;text-blue-400 font-semibold&quot;>{service.pricing}</div>
                <a 
                  href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className=&quot;inline-block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors text-center&quot;
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {_additionalServices.map(_(service, _index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  {_service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{_service.name}</h3>
                <p className="text-gray-300 text-sm">{_service.description}</p>
                <div className="text-blue-400 font-semibold">{_service.pricing}</div>
                <a 
                  href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                  className="inline-block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      {/* Why Choose Zion Tech Group */}
      <div className=&quot;bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-12&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
=======
      {_/* Why Choose Zion Tech Group */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Why Choose Zion Tech Group for IT Solutions?
            </h2>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Zap className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>Proven Expertise</h3>
                <p className=&quot;text-gray-300&quot;>
                  Years of experience in enterprise IT infrastructure, cloud technologies, and cybersecurity.
                </p>
              </div>
              
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Shield className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>Security First</h3>
                <p className=&quot;text-gray-300&quot;>
                  Security-first approach with industry best practices and compliance frameworks.
                </p>
              </div>
              
              <div className=&quot;text-center space-y-4&quot;>
                <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Star className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white&quot;>24/7 Support</h3>
                <p className=&quot;text-gray-300&quot;>
                  Round-the-clock monitoring, support, and maintenance for your critical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact & CTA Section */}
      <div className=&quot;bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;text-center space-y-8&quot;>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white&quot;>
=======
      {_/* Contact & CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Let's discuss how our IT solutions can enhance your operational efficiency, security posture, and business scalability.
            </p>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto&quot;>
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Phone className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Call Us</h3>
                <p className=&quot;text-gray-300&quot;>+1 302 464 0950</p>
                <p className=&quot;text-sm text-gray-400&quot;>Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <Mail className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Email Us</h3>
                <p className=&quot;text-gray-300&quot;>kleber@ziontechgroup.com</p>
                <p className=&quot;text-sm text-gray-400&quot;>Response within 2 hours</p>
              </div>
              
              <div className=&quot;text-center space-y-3&quot;>
                <div className=&quot;w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto&quot;>
                  <MapPin className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-white&quot;>Visit Us</h3>
                <p className=&quot;text-gray-300&quot;>364 E Main St STE 1008</p>
                <p className=&quot;text-sm text-gray-400&quot;>Middletown, DE 19709</p>
              </div>
            </div>

            <div className=&quot;pt-8&quot;>
              <a 
                href=&quot;mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Consultation%20-%20Zion%20Tech%20Group&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                <span>Start Your IT Transformation</span>
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Footer */}
<<<<<<< HEAD
=======
      {_/* Footer */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <footer className="bg-gray-900 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
=======
      <footer className=&quot;bg-gray-900 border-t border-white/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8&quot;>
            <div className=&quot;space-y-4&quot;>
              <h3 className=&quot;text-lg font-semibold text-white&quot;>Zion Tech Group</h3>
              <p className=&quot;text-gray-400 text-sm&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Enterprise-grade IT solutions that drive operational excellence and business growth.
              </p>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>IT Services</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/cloud-migration&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Cloud Migration</Link></li>
                <li><a href=&quot;/devops-automation&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>DevOps Automation</Link></li>
                <li><a href=&quot;/cybersecurity&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Cybersecurity</Link></li>
                <li><a href=&quot;/network-infrastructure&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Network Design</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Company</h4>
              <ul className=&quot;space-y-2 text-sm text-gray-400&quot;>
                <li><a href=&quot;/about&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>About Us</Link></li>
                <li><a href=&quot;/contact&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Contact</Link></li>
                <li><a href=&quot;/careers&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Careers</Link></li>
                <li><a href=&quot;/blog&quot; className=&quot;hover:text-blue-400 transition-colors&quot;>Blog</Link></li>
              </ul>
            </div>
            
            <div className=&quot;space-y-4&quot;>
              <h4 className=&quot;text-md font-semibold text-white&quot;>Connect</h4>
              <div className=&quot;flex space-x-4&quot;>
                <a href=&quot;https://linkedin.com/company/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Linkedin className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://twitter.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Twitter className=&quot;w-5 h-5&quot; />
                </Link>
                <a href=&quot;https://github.com/ziontechgroup&quot; className=&quot;text-gray-400 hover:text-blue-400 transition-colors&quot;>
                  <Github className=&quot;w-5 h-5&quot; />
                </Link>
              </div>
            </div>
          </div>
          
          <div className=&quot;border-t border-white/20 mt-8 pt-8 text-center&quot;>
            <p className=&quot;text-gray-400 text-sm&quot;>
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href=&quot;/privacy&quot; className=&quot;hover:text-blue-400 transition-colors ml-2&quot;>Privacy Policy</Link> | 
              <a href=&quot;/terms&quot; className=&quot;hover:text-blue-400 transition-colors ml-2&quot;>Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
import React from 'react';
import {_Server, _Cloud, _Shield, _Code, _Database, _Network, _Cpu, _Zap, _CheckCircle, _Star, _ExternalLink, _ArrowRight, _Phone, _Mail, _MapPin, _Linkedin, _Twitter, _Github, _Monitor, _Lock, _Users, _BarChart3} from 'lucide-react';

export default function ITServicesPage() {_const _itServices = [
    {
      name: "Cloud Migration & Optimization", _description: "End-to-end cloud migration services with strategic planning, _cost optimization, _and performance tuning for maximum ROI.", _icon: <Cloud className="w-12 h-12 text-blue-500" />, _features: [
        "Multi-cloud strategy development", _"Cost optimization and monitoring", _"Security compliance implementation", _"Performance tuning and optimization", _"24/7 monitoring and alerting", _"Disaster recovery planning", _"Data migration and validation", _"Team training and documentation"
      ], _pricing: {
        small: "From $2, _500", _medium: "From $5, _000", _enterprise: "From $15, _000"},
      marketPrice: "$5,000-15,000",
      useCases: ["Enterprises", "Mid-size companies", "Startups", "Healthcare", "Financial services"],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability",
        "Enhanced security posture",
        "Better performance",
        "Operational efficiency"
      ],
      website: "https://ziontechgroup.com/cloud-migration"
    },
    {_name: "DevOps Automation Platform", _description: "Complete CI/CD pipeline automation with infrastructure as code, _monitoring solutions, _and security integration.", _icon: <Code className="w-12 h-12 text-green-500" />, _features: [
        "CI/CD pipeline automation", _"Infrastructure as Code (IaC)", _"Container orchestration", _"Monitoring and alerting", _"Security scanning integration", _"Auto-scaling capabilities", _"Configuration management", _"Performance optimization"
      ], _pricing: {
        starter: "$599/month", _professional: "$1, _199/month", _enterprise: "$2, _499/month"},
      marketPrice: "$800-1500/month",
      useCases: ["Development teams", "Tech companies", "Enterprises", "Startups", "DevOps teams"],
      benefits: [
        "Faster deployment cycles",
        "Reduced manual errors",
        "Improved collaboration",
        "Better resource utilization",
        "Enhanced security"
      ],
      website: "https://ziontechgroup.com/devops-automation"
    },
    {_name: "Cybersecurity Assessment & Implementation", _description: "Comprehensive security audits, _penetration testing, _and security infrastructure deployment with compliance frameworks.", _icon: <Shield className="w-12 h-12 text-red-500" />, _features: [
        "Security audits and assessments", _"Penetration testing", _"Compliance framework implementation", _"Incident response planning", _"Security awareness training", _"Vulnerability management", _"Security monitoring setup", _"Compliance reporting"
      ], _pricing: {
        basic: "From $3, _500", _comprehensive: "From $7, _500", _enterprise: "From $20, _000"},
      marketPrice: "$7,000-20,000",
      useCases: ["Financial services", "Healthcare", "Government", "Enterprises", "E-commerce"],
      benefits: [
        "Reduced security risks",
        "Compliance assurance",
        "Improved incident response",
        "Enhanced customer trust",
        "Cost-effective security"
      ],
      website: "https://ziontechgroup.com/cybersecurity"
    },
    {_name: "Network Infrastructure Design", _description: "Scalable network architecture design with high availability, _security, _and performance optimization.", _icon: <Network className="w-12 h-12 text-purple-500" />, _features: [
        "Network architecture design", _"High availability setup", _"Security implementation", _"Performance optimization", _"Load balancing configuration", _"Network monitoring", _"Documentation and training", _"Ongoing support"
      ], _pricing: {
        small: "From $4, _000", _medium: "From $8, _000", _enterprise: "From $25, _000"},
      marketPrice: "$8,000-30,000",
      useCases: ["Enterprises", "Data centers", "Cloud providers", "Educational institutions", "Healthcare"],
      benefits: [
        "Improved network performance",
        "Enhanced security",
        "Better scalability",
        "Reduced downtime",
        "Operational efficiency"
      ],
      website: "https://ziontechgroup.com/network-infrastructure"
    },
    {_name: "Database Design & Optimization", _description: "Database architecture design, _performance tuning, _and migration services for optimal data management.", _icon: <Database className="w-12 h-12 text-orange-500" />, _features: [
        "Database architecture design", _"Performance tuning and optimization", _"Data migration services", _"Backup and recovery setup", _"Security implementation", _"Monitoring and alerting", _"Scalability planning", _"Maintenance procedures"
      ], _pricing: {
        consultation: "From $1, _500", _implementation: "From $5, _000", _enterprise: "From $15, _000"},
      marketPrice: "$3,000-20,000",
      useCases: ["E-commerce platforms", "SaaS companies", "Enterprises", "Financial services", "Healthcare"],
      benefits: [
        "Improved data performance",
        "Enhanced data security",
        "Better scalability",
        "Reduced maintenance costs",
        "Improved reliability"
      ],
      website: "https://ziontechgroup.com/database-services"
    },
    {_name: "IT Infrastructure Management", _description: "Comprehensive IT infrastructure management with proactive monitoring, _maintenance, _and optimization services.", _icon: <Server className="w-12 h-12 text-indigo-500" />, _features: [
        "24/7 infrastructure monitoring", _"Proactive maintenance", _"Performance optimization", _"Security updates", _"Backup management", _"Disaster recovery", _"Capacity planning", _"Vendor management"
      ], _pricing: {
        basic: "$799/month", _professional: "$1, _599/month", _enterprise: "$3, _199/month"},
      marketPrice: "$1,200-3,500/month",
      useCases: ["Enterprises", "Mid-size companies", "Healthcare", "Financial services", "Educational institutions"],
      benefits: [
        "Reduced downtime",
        "Lower operational costs",
        "Improved performance",
        "Enhanced security",
        "Peace of mind"
      ],
      website: "https://ziontechgroup.com/infrastructure-management"
    }
  ];

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
  ];

  return (_<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {_/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Server className="w-20 h-20 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              IT Infrastructure & DevOps Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Enterprise-grade IT solutions that drive operational excellence, _security, _and scalability. From cloud migration to cybersecurity, _we build robust technology foundations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now: +1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Inquiry"
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get IT Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {_stats.map((stat, _index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{_stat.value}</div>
              <div className="text-gray-300 text-sm">{_stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {_/* IT Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our IT Service Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize infrastructure, enhance security, and drive operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {_itServices.map(_(service, _index) => (_<div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {_service.icon}
                  <h3 className="text-2xl font-bold text-white">{_service.name}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{_service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {_service.features.map((feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {_feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
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
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Best For:</h4>
                      <ul className="space-y-1">
                        {_service.useCases.map(_(useCase, _useCaseIndex) => (
                          <li key={useCaseIndex} className="text-xs text-gray-300">• {_useCase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {_service.benefits.map(_(benefit, _benefitIndex) => (
                        <li key={benefitIndex} className="text-xs text-gray-300">• {_benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex gap-3">
                      <a 
                        href={_service.website}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a 
                        href={_`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                        className="inline-flex items-center justify-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <span>Get Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {_/* Additional Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Additional IT Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized IT services to complement your technology infrastructure and support your business growth.
          </p>
        </div>

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
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {_/* Why Choose Zion Tech Group */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose Zion Tech Group for IT Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Proven Expertise</h3>
                <p className="text-gray-300">
                  Years of experience in enterprise IT infrastructure, cloud technologies, and cybersecurity.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Security First</h3>
                <p className="text-gray-300">
                  Security-first approach with industry best practices and compliance frameworks.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock monitoring, support, and maintenance for your critical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {_/* Contact & CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how our IT solutions can enhance your operational efficiency, security posture, and business scalability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
                <p className="text-sm text-gray-400">Available Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
                <p className="text-sm text-gray-400">Response within 2 hours</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                <p className="text-gray-300">364 E Main St STE 1008</p>
                <p className="text-sm text-gray-400">Middletown, DE 19709</p>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=IT%20Services%20Consultation%20-%20Zion%20Tech%20Group"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
              >
                <span>Start Your IT Transformation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Footer */}
      <footer className="bg-gray-900 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Enterprise-grade IT solutions that drive operational excellence and business growth.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">IT Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/cloud-migration" className="hover:text-blue-400 transition-colors">Cloud Migration</a></li>
                <li><a href="/devops-automation" className="hover:text-blue-400 transition-colors">DevOps Automation</a></li>
                <li><a href="/cybersecurity" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
                <li><a href="/network-infrastructure" className="hover:text-blue-400 transition-colors">Network Design</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="/careers" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-white">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-blue-400 transition-colors ml-2">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-blue-400 transition-colors ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
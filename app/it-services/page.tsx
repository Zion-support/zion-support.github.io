import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Database, Shield, Monitor, Wrench, ArrowRight, CheckCircle, Star, Server, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with multi-cloud management, auto-scaling, and cost optimization.",
      price: "$199/month",
      features: ["Multi-Cloud Support", "Auto-Scaling", "Cost Optimization", "Disaster Recovery"],
      link: "/ai-cloud-infrastructure"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Advanced database management with optimization, backup, and high availability solutions.",
      price: "$149/month",
      features: ["Database Optimization", "Backup & Recovery", "High Availability", "Performance Tuning"],
      link: "/database-solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security Suite",
      description: "Comprehensive cybersecurity solutions with threat detection, compliance, and incident response.",
      price: "$299/month",
      features: ["Threat Detection", "Compliance Management", "Incident Response", "Security Audits"],
      link: "/advanced-security-suite"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Performance Monitoring",
      description: "Real-time monitoring and analytics for applications, infrastructure, and user experience.",
      price: "$99/month",
      features: ["Real-time Monitoring", "Performance Analytics", "Alert Management", "Custom Dashboards"],
      link: "/performance-monitoring"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "DevOps Solutions",
      description: "Streamlined development and deployment with CI/CD pipelines, automation, and best practices.",
      price: "$199/month",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
      link: "/devops-solutions"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "API Management",
      description: "Comprehensive API lifecycle management with security, monitoring, and developer tools.",
      price: "$149/month",
      features: ["API Gateway", "Rate Limiting", "Authentication", "Analytics & Monitoring"],
      link: "/ai-api-management"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: <Server className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
    { number: "500+", label: "Infrastructure Projects", icon: <Cloud className="w-6 h-6" /> },
    { number: "50+", label: "Technologies Supported", icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud infrastructure, database solutions, cybersecurity, DevOps, and performance monitoring for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, database solutions, cybersecurity, DevOps, infrastructure, technology consulting" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions that power your business. From cloud infrastructure to cybersecurity, 
                we provide the technology foundation your organization needs to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT services designed to optimize your technology infrastructure and drive business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Modernize Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT solutions can optimize your technology stack and drive efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get IT Consultation
                </Link>
                <Link
                  to="/ai-cloud-infrastructure"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View IT Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;


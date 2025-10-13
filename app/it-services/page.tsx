import React from "react";
import { Link } from "react-router-dom";
import { Shield, Cloud, Code, Database, Network, BarChart3, CheckCircle, ArrowRight, Users, Award, Clock, Zap } from "lucide-react";

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets and infrastructure.",
      features: [
        "Security assessment and auditing",
        "Threat detection and response",
        "Identity and access management",
        "Compliance and governance",
        "Security training and awareness"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Design, implement, and manage scalable cloud solutions for your business needs.",
      features: [
        "Cloud migration and strategy",
        "Infrastructure as Code (IaC)",
        "Multi-cloud management",
        "Disaster recovery planning",
        "Cost optimization"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements.",
      features: [
        "Web application development",
        "Mobile app development",
        "API development and integration",
        "Legacy system modernization",
        "Quality assurance and testing"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Comprehensive data solutions to help you collect, store, and analyze information effectively.",
      features: [
        "Database design and optimization",
        "Data migration and integration",
        "Business intelligence solutions",
        "Data warehousing",
        "Data governance and security"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Solutions",
      description: "Robust network infrastructure to ensure reliable connectivity and performance.",
      features: [
        "Network design and implementation",
        "Wireless network solutions",
        "Network security and monitoring",
        "VPN and remote access",
        "Network optimization"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic IT guidance to help you make informed technology decisions.",
      features: [
        "IT strategy and planning",
        "Technology assessment",
        "Digital transformation",
        "Process optimization",
        "Change management"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Clock className="w-6 h-6" /> },
    { number: "40%", label: "Average Cost Savings", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Users className="w-6 h-6" /> }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions for healthcare providers",
      icon: "🏥"
    },
    {
      name: "Finance",
      description: "Secure financial technology solutions",
      icon: "🏦"
    },
    {
      name: "Manufacturing",
      description: "IoT and automation solutions for manufacturing",
      icon: "🏭"
    },
    {
      name: "Retail",
      description: "E-commerce and customer experience solutions",
      icon: "🛍️"
    },
    {
      name: "Education",
      description: "Learning management and student information systems",
      icon: "🎓"
    },
    {
      name: "Government",
      description: "Secure government technology solutions",
      icon: "🏛️"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your current IT environment and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive IT strategy aligned with your business objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the solution with minimal disruption to your operations."
    },
    {
      step: "04",
      title: "Support",
      description: "Provide ongoing support and optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to help your business thrive in the digital age. From infrastructure to security, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our IT Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a full range of IT services to support your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We have experience working with organizations across various industries, understanding their unique challenges and requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-500/20 transition-all duration-300">
                <span className="text-2xl">{industry.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-300">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our IT Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology to ensure successful IT implementation and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our IT experts help you modernize your infrastructure, enhance security, and drive business growth through technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/consultation"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Free IT Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItServicesPage;
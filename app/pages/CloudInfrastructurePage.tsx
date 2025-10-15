import React from "react";
import { Helmet } from "react-helmet-async";
import { Cloud, Server, Database, Shield, Zap, Globe } from "lucide-react";

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: [
        "Assessment & Planning",
        "Data Migration",
        "Application Modernization",
        "Testing & Validation"
      ]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management using modern DevOps practices.",
      features: [
        "Terraform Templates",
        "CI/CD Pipelines",
        "Version Control",
        "Automated Deployments"
      ]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimize your database performance and scalability in the cloud environment.",
      features: [
        "Database Migration",
        "Performance Tuning",
        "Backup & Recovery",
        "Monitoring & Alerting"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards.",
      features: [
        "Identity & Access Management",
        "Data Encryption",
        "Compliance Audits",
        "Security Monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Auto-scaling",
      description: "Automatically scale your resources based on demand to optimize costs and performance.",
      features: [
        "Load Balancing",
        "Resource Optimization",
        "Cost Management",
        "Performance Monitoring"
      ]
    },
    {
      icon: Globe,
      title: "Multi-cloud Strategy",
      description: "Leverage multiple cloud providers for better resilience and vendor independence.",
      features: [
        "Cloud Strategy",
        "Vendor Management",
        "Disaster Recovery",
        "Cost Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, automation, security, and optimization." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, deploy, and manage scalable cloud infrastructure solutions that power your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-indigo-600 text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-indigo-400 mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Scalable
              </h3>
              <p className="text-gray-300">
                Automatically scale your infrastructure based on demand to optimize costs and performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure
              </h3>
              <p className="text-gray-300">
                Enterprise-grade security measures to protect your data and applications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global
              </h3>
              <p className="text-gray-300">
                Deploy your applications globally with low latency and high availability.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud experts help you build a robust, scalable, and secure infrastructure.
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;
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
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, automation, and optimization services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud optimization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Infrastructure Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your infrastructure with modern cloud solutions designed for scalability, 
            security, and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you design and implement the perfect infrastructure solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 font-semibold">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;

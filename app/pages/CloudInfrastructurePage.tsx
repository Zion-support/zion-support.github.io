import React from "react";
import { Helmet } from "react-helmet-async";
import { Cloud, Server, Database, Shield, Zap, Globe } from "lucide-react";

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Testing & Validation"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automate infrastructure provisioning and management using modern DevOps practices.",
      features: ["Terraform Templates", "CI/CD Pipelines", "Version Control", "Automated Deployments"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Optimize your database performance and scalability in the cloud environment.",
      features: ["Database Migration", "Performance Tuning", "Backup & Recovery", "Monitoring & Alerting"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance with industry standards.",
      features: ["Identity & Access Management", "Data Encryption", "Compliance Audits", "Security Monitoring"]
    },
    {
      icon: Zap,
      title: "Auto-scaling",
      description: "Automatically scale your resources based on demand to optimize costs and performance.",
      features: ["Load Balancing", "Resource Optimization", "Cost Management", "Performance Monitoring"]
    },
    {
      icon: Globe,
      title: "Multi-cloud Strategy",
      description: "Leverage multiple cloud providers for better resilience and vendor independence.",
      features: ["Cloud Strategy", "Vendor Management", "Disaster Recovery", "Cost Optimization"]
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, deploy, and manage scalable cloud infrastructure solutions that power your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our cloud experts help you build a robust, scalable, and secure infrastructure.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;
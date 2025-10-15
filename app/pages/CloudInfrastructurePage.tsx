import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon } from 'lucide-react';

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
        
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Infrastructure</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, migrate, and optimize your cloud infrastructure with our comprehensive services.
            From migration to automation, we help you leverage the full power of the cloud.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
  
  );
}
}}
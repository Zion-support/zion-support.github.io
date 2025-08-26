import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  GitBranch,
  ArrowRight,
  CheckCircle,
  Monitor,
  Lock
} from 'lucide-react';
const CloudDevOpsServices: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration & Strategy",
      description: "Seamless migration to cloud platforms with strategic planning and execution.",
      icon: Cloud,
      features: [
        "Multi-cloud Strategy",
        "Legacy System Migration",
        "Cost Optimization",
        "Performance Optimization",
        "Security Assessment"
      ]
    },
    {
      title: "DevOps Implementation",
      description: "Streamline development and operations with modern DevOps practices and tools.",
      icon: GitBranch,
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Automated Testing",
        "Deployment Automation",
        "Monitoring & Alerting"
      ]
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications with Kubernetes and Docker.",
      icon: Server,
      features: [
        "Kubernetes Deployment",
        "Docker Containerization",
        "Service Mesh",
        "Auto-scaling",
        "Load Balancing"
      ]
    },
    {
      title: "Database Management",
      description: "Optimize and manage databases in cloud environments for performance and reliability.",
      icon: Database,
      features: [
        "Database Migration",
        "Performance Tuning",
        "Backup & Recovery",
        "High Availability",
        "Data Security"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Ensure cloud security and compliance with industry standards and best practices.",
      icon: Shield,
      features: [
        "Identity & Access Management",
        "Network Security",
        "Data Encryption",
        "Compliance Auditing",
        "Threat Detection"
      ]
    },
    {
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and observability solutions for cloud infrastructure.",
      icon: Monitor,
      features: [
        "Real-time Monitoring",
        "Log Management",
        "Performance Metrics",
        "Alert Management",
        "Troubleshooting Tools"
      ]
    }
  ];
  const benefits = [
    "Faster time to market with automated deployments",
    "Improved reliability and uptime",
    "Cost optimization through resource management",
    "Enhanced security and compliance",
    "Scalable infrastructure that grows with your business",
    "Better collaboration between development and operations teams"
  ];
  const technologies = [
    "AWS, Azure, GCP",
    "Kubernetes & Docker",
    "Terraform & Ansible",
    "Jenkins & GitLab CI",
    "Prometheus & Grafana",
    "ELK Stack"
  ];
  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      description: "Leading cloud platform with comprehensive services",
      features: ["EC2, S3, RDS", "Lambda Functions", "CloudFormation", "CloudWatch"]
    },
    {
      name: "Microsoft Azure",
      description: "Enterprise-grade cloud solutions for Windows environments",
      features: ["Virtual Machines", "Azure DevOps", "Azure Functions", "Application Insights"]
    },
    {
      name: "Google Cloud Platform",
      description: "Innovative cloud services with AI and ML capabilities",
      features: ["Compute Engine", "Cloud Run", "BigQuery", "Cloud Build"]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cloud & DevOps Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Accelerate your digital transformation with modern cloud infrastructure
            and DevOps practices that drive innovation and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Cloud & DevOps Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cloud migration to DevOps transformation, we provide end-to-end
              solutions that modernize your infrastructure and accelerate delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Cloud Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best solutions
              for your specific needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-slate-600 mb-6">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Benefits of Cloud & DevOps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your organization with modern cloud and DevOps practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to deliver robust solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <p className="text-slate-700 font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cloud and DevOps expertise can transform your
            organization's technology landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CloudDevOpsServices;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Shield, Zap, GitBranch, Container, Monitor, Database, Cpu, Globe } from 'lucide-react';

const DevOpsSolutionsPage = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "CI/CD Pipeline Automation",
      description: "Streamline your development workflow with automated continuous integration and deployment pipelines.",
      features: ["Automated testing", "Code quality checks", "Deployment automation", "Rollback capabilities"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform, Ansible, and CloudFormation.",
      features: ["Terraform automation", "Ansible playbooks", "CloudFormation templates", "Infrastructure monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Security Integration",
      description: "Integrate security practices into your DevOps workflow with automated security scanning and compliance checks.",
      features: ["SAST/DAST scanning", "Dependency scanning", "Compliance automation", "Security monitoring"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Performance Optimization",
      description: "Optimize application performance with automated monitoring, profiling, and scaling solutions.",
      features: ["Performance monitoring", "Auto-scaling", "Load testing", "Resource optimization"]
    },
    {
      icon: <GitBranch className="w-8 h-8 text-purple-400" />,
      title: "GitOps Workflow",
      description: "Implement GitOps practices for declarative infrastructure and application management.",
      features: ["Git-based workflows", "Declarative deployments", "Version control", "Audit trails"]
    },
    {
      icon: <Container className="w-8 h-8 text-cyan-400" />,
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes and Docker orchestration.",
      features: ["Kubernetes deployment", "Docker optimization", "Service mesh", "Container security"]
    }
  ];

  const tools = [
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "GitHub Actions", category: "CI/CD" },
    { name: "Terraform", category: "Infrastructure" },
    { name: "Ansible", category: "Configuration" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" },
    { name: "ELK Stack", category: "Logging" }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps solutions including CI/CD automation, infrastructure as code, container orchestration, and security integration." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure as code, Kubernetes, Docker, automation, deployment" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                DevOps Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your software delivery with our comprehensive DevOps solutions. 
                From CI/CD automation to infrastructure as code, we help you build, deploy, and scale faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our DevOps Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions tailored to your organization's needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">DevOps Tools & Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most effective DevOps tools in the industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our DevOps Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing DevOps best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Assessment</h3>
                <p className="text-gray-300">Analyze your current development and deployment processes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation</h3>
                <p className="text-gray-300">Set up CI/CD pipelines and automation tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                <p className="text-gray-300">Integrate security practices and compliance checks</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Optimization</h3>
                <p className="text-gray-300">Monitor and optimize performance continuously</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you implement DevOps best practices and accelerate your software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Your DevOps Journey
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsSolutionsPage;
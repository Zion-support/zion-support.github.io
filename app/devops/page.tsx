import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Settings, Zap, Shield, Cloud, CheckCircle, ArrowRight, GitBranch, Monitor } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "CI/CD Pipeline",
      description: "Automate your software delivery with continuous integration and deployment",
      features: ["Automated Testing", "Code Quality Checks", "Deployment Automation", "Rollback Capabilities"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code for consistency and reliability",
      features: ["Terraform", "CloudFormation", "Ansible", "Infrastructure Monitoring"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring and logging for better system visibility",
      features: ["Application Monitoring", "Log Aggregation", "Alerting", "Performance Metrics"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Integrate security practices into your development and deployment processes",
      features: ["Security Scanning", "Compliance Checks", "Secrets Management", "Vulnerability Assessment"],
      color: "from-red-500 to-red-600"
    }
  ];

  const tools = [
    {
      name: "Docker & Kubernetes",
      description: "Containerization and orchestration",
      category: "Containers"
    },
    {
      name: "Jenkins & GitLab CI",
      description: "Continuous integration and deployment",
      category: "CI/CD"
    },
    {
      name: "AWS & Azure",
      description: "Cloud platforms and services",
      category: "Cloud"
    },
    {
      name: "Terraform & Ansible",
      description: "Infrastructure automation",
      category: "IaC"
    },
    {
      name: "Prometheus & Grafana",
      description: "Monitoring and visualization",
      category: "Monitoring"
    },
    {
      name: "ELK Stack",
      description: "Logging and analytics",
      category: "Logging"
    }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time from days to minutes",
      stat: "90%"
    },
    {
      title: "Reduced Downtime",
      description: "Minimize system downtime with automated processes",
      stat: "75%"
    },
    {
      title: "Improved Quality",
      description: "Catch issues early with automated testing",
      stat: "60%"
    },
    {
      title: "Cost Savings",
      description: "Optimize resource usage and reduce operational costs",
      stat: "40%"
    }
  ];

  const practices = [
    {
      name: "Microservices Architecture",
      description: "Break down applications into smaller, manageable services",
      icon: "🔧"
    },
    {
      name: "Automated Testing",
      description: "Implement comprehensive testing at every stage",
      icon: "🧪"
    },
    {
      name: "Blue-Green Deployment",
      description: "Zero-downtime deployments with instant rollback",
      icon: "🔄"
    },
    {
      name: "Infrastructure Monitoring",
      description: "Real-time monitoring and alerting systems",
      icon: "📊"
    },
    {
      name: "Version Control",
      description: "Git-based workflows and branching strategies",
      icon: "📝"
    },
    {
      name: "Configuration Management",
      description: "Centralized configuration and environment management",
      icon: "⚙️"
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Accelerate your software delivery with our comprehensive DevOps services including CI/CD, infrastructure automation, and monitoring solutions." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure as code, monitoring, automation, cloud deployment, containerization" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                DevOps Excellence
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Accelerate your software delivery with our comprehensive DevOps solutions. 
                Streamline development, deployment, and operations for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start DevOps Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View DevOps Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our DevOps Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end DevOps solutions designed to modernize your development and deployment processes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {devopsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Tools & Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage industry-leading tools and technologies to deliver robust DevOps solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">DevOps Best Practices</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement proven DevOps practices to ensure reliable, scalable, and maintainable systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practices.map((practice, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-4xl mb-4">{practice.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{practice.name}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our DevOps Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in development speed, system reliability, and operational efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-blue-500 mb-4">{benefit.stat}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our DevOps Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to transforming your development and operations workflows.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment</h3>
                <p className="text-gray-600">Evaluate current development and deployment processes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy</h3>
                <p className="text-gray-600">Develop a comprehensive DevOps transformation strategy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
                <p className="text-gray-600">Deploy tools, processes, and best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization</h3>
                <p className="text-gray-600">Continuously improve and optimize processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let our DevOps experts help you build faster, more reliable software delivery pipelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Get DevOps Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View DevOps Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsPage;
import { ArrowRight, Users, Award, Globe, Settings, CheckCircle, Clock, Star, Database, Circle, Lock, Settings, BarChart3, Server, Cloud, Code } from 'lucide-react';
import React from 'react';

const DevOpsServicesPage: React.FC = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your development workflow with continuous integration and deployment pipelines for faster, more reliable releases.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Automated testing", "Code quality checks", "Deployment automation", "Rollback capabilities"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform, Ansible, and CloudFormation for consistency and scalability.",
      icon: <Server className="w-6 h-6" />,
      features: ["Terraform automation", "Configuration management", "Version control", "Environment consistency"]
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes, Docker Swarm, or other orchestration platforms.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Kubernetes deployment", "Container management", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring and logging solutions to ensure your applications run smoothly and issues are detected early.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Real-time monitoring", "Log aggregation", "Alerting systems", "Performance metrics"]
    },
    {
      title: "Security Automation",
      description: "Integrate security practices into your DevOps pipeline with automated security scanning and compliance checks.",
      icon: <Lock className="w-6 h-6" />,
      features: ["Security scanning", "Vulnerability assessment", "Compliance automation", "Secret management"]
    },
    {
      title: "Database DevOps",
      description: "Streamline database operations with automated migrations, backups, and performance optimization.",
      icon: <Database className="w-6 h-6" />,
      features: ["Database migrations", "Automated backups", "Performance tuning", "Schema management"]
    }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time from hours to minutes with automated pipelines",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Higher Quality",
      description: "Catch issues early with automated testing and quality gates",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Better Collaboration",
      description: "Improve team collaboration with shared tools and processes",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Optimize infrastructure costs with automated scaling and resource management",
      icon: <Settings className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your software delivery with our comprehensive DevOps solutions. 
            From CI/CD pipelines to infrastructure automation, we help you build, deploy, and scale faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end DevOps solutions that streamline your development process and improve software quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern DevOps practices with our expert guidance and proven methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our DevOps experts help you implement modern practices that accelerate delivery and improve quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your DevOps Journey
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;
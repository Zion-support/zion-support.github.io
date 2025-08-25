import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Code, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Play,
  BookOpen,
  Headphones
} from 'lucide-react';

export default function CloudDevOps() {
  const services = [
    {
      title: "Cloud Migration & Strategy",
      description: "Seamless migration to cloud platforms with minimal downtime",
      features: [
        "Multi-cloud strategy development",
        "Legacy system migration",
        "Cost optimization analysis",
        "Performance benchmarking"
      ],
      icon: Cloud
    },
    {
      title: "DevOps Automation",
      description: "Streamline development and operations with intelligent automation",
      features: [
        "CI/CD pipeline optimization",
        "Infrastructure as Code (IaC)",
        "Automated testing & deployment",
        "Monitoring & alerting systems"
      ],
      icon: Code
    },
    {
      title: "Container Orchestration",
      description: "Manage and scale containerized applications efficiently",
      features: [
        "Kubernetes implementation",
        "Docker containerization",
        "Service mesh architecture",
        "Auto-scaling solutions"
      ],
      icon: Database
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security for cloud environments",
      features: [
        "Identity & access management",
        "Data encryption & compliance",
        "Threat detection & response",
        "Security auditing & monitoring"
      ],
      icon: Shield
    }
  ];

  const benefits = [
    "Reduced infrastructure costs by 40-60%",
    "Faster deployment cycles (80% improvement)",
    "Improved system reliability (99.9% uptime)",
    "Enhanced security and compliance",
    "Scalable and flexible infrastructure"
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker",
    "Terraform", "Ansible", "Jenkins", "GitLab CI", "Prometheus"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Cloud className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Cloud DevOps Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your development and operations with cutting-edge cloud technologies, 
            intelligent automation, and scalable infrastructure solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Cloud DevOps Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From cloud migration to continuous deployment, we provide end-to-end 
              DevOps solutions that accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Cloud DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience measurable improvements in efficiency, cost savings, and 
              operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our expertise spans the entire cloud and DevOps ecosystem, ensuring 
              we can work with your existing stack or recommend the best solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-cyan-400 font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our cloud DevOps solutions can accelerate your 
            development cycles and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
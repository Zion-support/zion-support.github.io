import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const DevOpsServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>DevOps Services - Zion Tech Group | Streamline Your Development Pipeline</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, monitoring, and deployment optimization. Accelerate your development lifecycle with our expert team." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure automation, deployment, monitoring, cloud migration, containerization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              DevOps Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Streamline your development pipeline with our comprehensive DevOps solutions. 
            From CI/CD implementation to infrastructure automation, we help you deliver faster and more reliably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CI/CD Pipeline Setup",
                description: "Automate your build, test, and deployment processes with robust CI/CD pipelines.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Infrastructure as Code",
                description: "Manage your infrastructure with code using Terraform, CloudFormation, and other IaC tools.",
                icon: <Cloud className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Security Integration",
                description: "Integrate security practices into your DevOps workflow with automated security scanning.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Monitoring & Alerting",
                description: "Set up comprehensive monitoring and alerting systems for your applications and infrastructure.",
                icon: <BarChart3 className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              },
              {
                title: "Container Orchestration",
                description: "Deploy and manage containerized applications with Kubernetes and Docker.",
                icon: <Zap className="w-8 h-8" />,
                color: "from-orange-500 to-yellow-500"
              },
              {
                title: "Team Training",
                description: "Train your team on DevOps best practices and modern development workflows.",
                icon: <Users className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-500"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you implement DevOps best practices and accelerate your development lifecycle.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Start Your DevOps Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;
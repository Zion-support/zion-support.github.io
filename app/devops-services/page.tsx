<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


export default function DevopsServicesZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services for modern software development and deployment." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional DevOps services for modern software development and deployment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Zap, Shield, BarChart3, ArrowRight, CheckCircle, Clock, Award, Users, Database, Cloud, Code, Star } from 'lucide-react';

const DevOpsServicesPage: React.FC = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your development workflow with continuous integration and deployment pipelines.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform and CloudFormation.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes and Docker.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Monitoring & Logging",
      description: "Comprehensive monitoring solutions for applications and infrastructure performance.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Security Automation",
      description: "Automate security testing and compliance checks in your development pipeline.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Database Management",
      description: "Automated database migrations, backups, and performance optimization.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Faster Deployments",
      description: "Reduce deployment time from hours to minutes with automated pipelines.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Improved Reliability",
      description: "Automated testing and rollback capabilities ensure stable releases.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cost Optimization",
      description: "Optimize resource usage and reduce infrastructure costs through automation.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for your DevOps infrastructure.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DevOps Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your development lifecycle with our comprehensive DevOps solutions. 
            From CI/CD to infrastructure automation, we help you deliver faster and more reliably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
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
              We provide end-to-end DevOps solutions that streamline your development process and improve delivery speed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
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
              Experience the benefits of modern DevOps practices with our expert guidance and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our DevOps experts help you build, deploy, and scale your applications with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your DevOps Journey
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-ee7e
  );
};

export default DevOpsServicesPage;
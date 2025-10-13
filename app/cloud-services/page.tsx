import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Database, 
  Lock, 
  Users, 
  Settings, 
  Monitor,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with zero downtime and maximum security.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions including encryption, access control, and threat monitoring.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cloud Optimization",
      description: "Optimize your cloud infrastructure for performance, cost, and scalability.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Design and implement multi-cloud architectures for maximum flexibility and resilience.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Cloud Analytics",
      description: "Advanced analytics and monitoring solutions for your cloud infrastructure and applications.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Database Services",
      description: "Managed database services with automated backups, scaling, and performance optimization.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce IT costs by up to 40% with cloud optimization",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Security",
      description: "Enterprise-grade security with 24/7 monitoring",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Reliability",
      description: "99.99% uptime with automated failover and backup",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. 
            From migration to optimization, we help you leverage the power of the cloud.
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
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cloud solutions that provide real business value through innovation, security, and scalability.
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
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cloud computing with our expert guidance and support.
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
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud experts help you migrate, optimize, and secure your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Cloud Journey
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
  );
};

export default CloudServicesPage;
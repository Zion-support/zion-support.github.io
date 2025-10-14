import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, Globe, } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    {
      title: "Scalable Cloud Architecture",
      description: "Build and deploy applications on a robust, scalable cloud infrastructure that grows with your business needs.",
      icon: <Cloud className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "High Availability & Reliability",
      description: "Ensure your applications are always available with our 99.9% uptime guarantee and redundant systems.",
      icon: <Shield className="w-12 h-12 text-purple-400" />
    },
    {
      title: "Auto-Scaling Solutions",
      description: "Automatically scale your resources based on demand to optimize costs and performance.",
      icon: <Zap className="w-12 h-12 text-yellow-400" />
    },
    {
      title: "Database Management",
      description: "Comprehensive database solutions with backup, replication, and optimization services.",
      icon: <Database className="w-12 h-12 text-green-400" />
    }
  ];

  const services = [
    "Cloud migration and modernization",
    "Container orchestration with Kubernetes",
    "Serverless architecture implementation",
    "Multi-cloud strategy and management",
    "Disaster recovery and backup solutions",
    "Performance monitoring and optimization",
    "Security compliance and auditing",
    "24/7 technical support and maintenance"
  ];

  const stats = [
    { label: "Infrastructure Managed", value: "500+", icon: <Server className="w-8 h-8 text-cyan-400" /> },
    { label: "Uptime Guarantee", value: "99.9%", icon: <Shield className="w-8 h-8 text-purple-400" /> },
    { label: "Cost Savings", value: "40%", icon: <Zap className="w-8 h-8 text-yellow-400" /> },
    { label: "Global Reach", value: "50+", icon: <Globe className="w-8 h-8 text-green-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="Cloud Infrastructure - Zion Tech Group | Scalable Cloud Solutions"
        description="Transform your business with our comprehensive cloud infrastructure services. Scalable, secure, and reliable cloud solutions for modern enterprises."
        keywords="cloud infrastructure, cloud migration, cloud services, scalable architecture, cloud security, cloud management"
        canonical="https://ziontechgroup.com/cloud-infrastructure"
      />
      
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto text-center">
          <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Build and scale your applications on a robust, secure, and reliable cloud infrastructure. 
            Transform your business with enterprise-grade cloud solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get ted</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3 xl md:text-4 xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              End-to-end cloud infrastructure services designed to meet the unique needs of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative z-10">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Complete cloud infrastructure management and optimization services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-300">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4 xl mx-auto text-center">
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6">
            Ready to Scale Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our cloud experts help you build a robust, scalable infrastructure. 
            Get a free consultation and discover the power of cloud technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>t Cloud Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudInfrastructurePage;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Server, Database, Globe } from 'lucide-react';
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

const CloudInfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group." />
        <meta name="keywords" content="cloud infrastructure, cloud services, cloud migration, cloud solutions" />
      </Helmet>
      
      <FuturisticBackground />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scalable and secure cloud infrastructure solutions designed to power your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
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
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
            <p className="text-gray-300">
              Seamlessly migrate your applications and data to the cloud with minimal downtime.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Auto Scaling</h3>
            <p className="text-gray-300">
              Automatically scale your infrastructure based on demand to optimize costs and performance.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
            <p className="text-gray-300">
              Enterprise-grade security and compliance solutions to protect your cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
              <span>Start Cloud Journey</span>
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
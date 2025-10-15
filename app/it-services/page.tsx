import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Cloud, Database, Monitor, Server, Settings, Shield } from 'lucide-react';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    { 
      icon: <Cloud className="w-8 h-8" />, 
      title: "Cloud Infrastructure", 
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.", 
      href: "/ai-cloud-infrastructure", 
      features: ["Cloud Migration", "Multi-Cloud Management", "Serverless Architecture", "Cost Optimization"] 
    }, 
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Advanced Security Suite", 
      description: "Comprehensive cybersecurity solutions to protect your digital assets.", 
      href: "/advanced-security-suite", 
      features: ["Threat Detection", "Data Encryption", "Compliance Management", "Security Auditing"] 
    }, 
    { 
      icon: <Database className="w-8 h-8" />, 
      title: "Database Solutions", 
      description: "Robust database management and optimization services for data-driven businesses.", 
      href: "/database-solutions", 
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"] 
    }, 
    { 
      icon: <Monitor className="w-8 h-8" />, 
      title: "Performance Monitoring", 
      description: "Real-time monitoring and optimization of your IT infrastructure and applications.", 
      href: "/performance-monitoring", 
      features: ["Real-time Monitoring", "Performance Analytics", "Alert Management", "Capacity Planning"] 
    }, 
    { 
      icon: <Settings className="w-8 h-8" />, 
      title: "DevOps Solutions", 
      description: "Streamlined development and deployment processes with modern DevOps practices.", 
      href: "/devops-solutions", 
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Automated Testing"] 
    }, 
    { 
      icon: <Server className="w-8 h-8" />, 
      title: "API Management", 
      description: "Comprehensive API management and integration solutions for seamless connectivity.", 
      href: "/ai-api-management", 
      features: ["API Gateway", "Rate Limiting", "Authentication", "Analytics & Monitoring"] 
    } 
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, database solutions, performance monitoring, DevOps, and API management." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, database solutions, DevOps, API management, performance monitoring" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your IT infrastructure with our comprehensive technology solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your IT infrastructure with our comprehensive technology solutions. From cloud migration to cybersecurity, we provide enterprise-grade IT services that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our IT experts help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ItServicesPage;
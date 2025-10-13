import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      features: ["Identity & Access Management", "Data Encryption", "Security Monitoring", "Compliance Management"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Storage",
      description: "Scalable and secure cloud storage solutions for all your data needs.",
      features: ["Data Backup & Recovery", "File Synchronization", "Content Delivery", "Archive Solutions"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Build and manage robust cloud infrastructure tailored to your business requirements.",
      features: ["Virtual Machines", "Container Orchestration", "Load Balancing", "Auto Scaling"]
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Cost Optimization', description: 'Reduce IT costs by up to 40% with efficient cloud solutions' },
    { icon: <Zap className="w-6 h-6" />, title: 'Scalability', description: 'Scale resources instantly based on demand' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', description: 'Access your applications from anywhere in the world' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', description: 'Round-the-clock technical support and monitoring' }
  ];
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to management, 
              we provide end-to-end cloud services that drive growth and efficiency.
import { ArrowRight, Cloud, Shield, Database, Zap, Globe, BarChart3, Users, Mail, Smartphone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure setup, monitoring, and optimization. Multi-cloud and hybrid cloud solutions with automated scaling and disaster recovery.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"]
    },
    {
      title: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with zero downtime. Assessment, planning, and execution of cloud migration strategies.",
      icon: <Zap className="w-8 h-8" />,
      path: "/cloud-migration-advanced",
      color: "from-green-500 to-emerald-500",
      price: "Custom Pricing",
      features: ["Zero Downtime", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      title: "Cloud Security Solutions",
      description: "Comprehensive cloud security with advanced threat protection, compliance management, and automated security monitoring.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cloud-native-security",
      color: "from-red-500 to-orange-500",
      price: "Starting at $299/month",
      features: ["Threat Protection", "Compliance Management", "Security Monitoring", "Incident Response"]
    },
    {
      title: "Cloud Cost Optimization",
      description: "Intelligent cost management and optimization strategies. Automated resource scaling and cost monitoring to reduce cloud expenses.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/cloud-cost-optimization",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["Cost Analysis", "Resource Optimization", "Automated Scaling", "Budget Management"]
    },
    {
      title: "Cloud Database Services",
      description: "Managed database solutions with high availability, automated backups, and performance optimization for all major cloud providers.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      features: ["High Availability", "Automated Backups", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Cloud-Native Development",
      description: "Modern application development using cloud-native technologies. Microservices, containers, and serverless architectures.",
      icon: <Globe className="w-8 h-8" />,
      path: "/cloud-native-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $349/month",
      features: ["Microservices", "Containerization", "Serverless", "API Development"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Infrastructure</title>
        <meta
          name="description"
          content="Comprehensive cloud services including infrastructure management, migration, security, cost optimization, and cloud-native development. Transform your business with scalable cloud solutions."
        />
        <meta
          name="keywords"
          content="cloud services, cloud infrastructure, cloud migration, cloud security, cloud cost optimization, cloud-native development, AWS, Azure, Google Cloud, hybrid cloud"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Cloud
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cloud solutions designed to accelerate your digital transformation. 
              From infrastructure management to cloud-native development, we provide end-to-end cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

                </div>
              ))}
            </div>
          </div>
        </section>

          </div>
        </section>
      </div>
    </>
  );
}
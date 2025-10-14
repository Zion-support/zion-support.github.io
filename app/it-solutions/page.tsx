<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';



export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.",
      icon: CpuChipIcon,
      features: [
        "Server configuration and management",
        "Network setup and optimization",
        "Hardware maintenance and upgrades",
        "Performance monitoring and tuning",
        "Disaster recovery planning",
        "24/7 technical support"
      ],
      color: "from-blue-5 0 0 to-indigo-5 0 0",
      price: "Starting at $2,5 0 0/month",
      benefits: ["99.9% uptime", "Scalable infrastructure", "Expert support"],
      useCases: ["Enterprise infrastructure", "Cloud migration", "System optimization"],
      href: "/it-infrastructure"
    },
      title: "Cybersecurity Solutions",
      description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
        "Security audits and assessments",
        "Threat detection and prevention",
        "Incident response planning",
        "Compliance management",
        "Security training",
        "Penetration testing"
      color: "from-red-5 0 0 to-pink-5 0 0",
      price: "Starting at $3,2 0 0/month",
      benefits: ["Advanced protection", "Compliance ready", "24/7 monitoring"],
      useCases: ["Security audits", "Threat protection", "Compliance"],
      href: "/it-cybersecurity"
      title: "Cloud Solutions",
      description: "Migrate to the cloud with our expert cloud architecture and management services for optimal performance.",
      icon: CloudIcon,
        "Cloud migration planning",
        "Multi-cloud strategy",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Disaster recovery"
      color: "from-cyan-5 0 0 to-blue-5 0 0",
      price: "Starting at $2,8 0 0/month",
      benefits: ["Scalable solutions", "Cost effective", "High availability"],
      useCases: ["Cloud migration", "Multi-cloud setup", "Cost optimization"],
      href: "/it-cloud-solutions"
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      icon: ChartBarIcon,
        "Data warehouse design",
        "ETL process development",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Data visualization",
        "Real-time reporting"
      color: "from-green-5 0 0 to-emerald-5 0 0",
      price: "Starting at $2,2 0 0/month",
      benefits: ["Data-driven insights", "Real-time analytics", "Custom dashboards"],
      useCases: ["Business intelligence", "Data visualization", "Predictive analytics"],
      href: "/it-data-analytics"
      title: "System Integration",
      description: "Seamlessly integrate different systems and applications for improved efficiency and data flow.",
      icon: CogIcon,
        "API development and integration",
        "Data migration services",
        "System customization",
        "Workflow automation",
        "Third-party integrations",
        "Legacy system modernization"
      color: "from-purple-5 0 0 to-pink-5 0 0",
      price: "Starting at $2,6 0 0/month",
      benefits: ["Seamless integration", "Improved efficiency", "Custom solutions"],
      useCases: ["System integration", "API development", "Workflow automation"],
      href: "/it-system-integration"
      title: "Compliance & Governance",
      description: "Ensure your IT systems meet regulatory requirements and industry standards with our compliance solutions.",
        "Compliance assessment",
        "Policy development",
        "Audit preparation",
        "Risk management",
        "Documentation",
        "Training programs"
      color: "from-emerald-5 0 0 to-teal-5 0 0",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance"],
      href: "/it-compliance"
  ];

  return (
    <div className="min-h-screen bg-slate-9-0-0 text-white">
=======
import React, { Suspense } from 'react';
import { Server, Cloud } from 'lucide-react';

const ItSolutionsPage: React.FC = () => {
    <>
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d 0 5
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud solutions, and system integration services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud solutions, system integration, Zion Tech Group" />

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-br from-slate-9-0-0 via-blue-9-0-0 to-slate-9-0-0">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-4-0-0 to-cyan-4-0-0 bg-clip-text text-transparent">
            IT Solutions
          <p className="text-xl text-gray-3-0-0 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-80 0 rounded-xl p-8 border border-slate-7-0-0 hover:border-blue-5-0-0 transition-all duration-3-0-0 hover:transform hover:scale-1 0 5">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8h-8 text-white" />
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-30 0 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-30 0 text-sm flex items-center">
                        <CheckCircleIcon className="w-4h-4 text-blue-4-0-0 mr-3 flex-shrink-0" />
                        {feature}
                    ))}

                  <div className="text-2xlfont-bold text-blue-4-0-0 mb-2">{service.price}</div>
                  <div className="text-gray-40 0 text-sm mb-4">Benefits: {service.benefits.join(', ')}</div>

                <Link
                  to={service.href}
                  className="w-fullbg-gradient-to-r from-blue-6-0-0 to-cyan-6-0-0 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-7-0-0 hover:to-cyan-7 0 0 transition-all duration-3 0 0 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRightIcon className="w-4h-4" />

      {/* CTA Section */}
      <section className="py-2 0 bg-gradient-to-r from-blue-9-0-0/30 to-cyan-9-0-0/30">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
            Let&apos;s discuss how our IT solutions can improve your business operations and security.
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
              to="/contact"
              className="bg-gradient-to-rfrom-blue-6-0-0 to-cyan-6-0-0 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-7-0-0 hover:to-cyan-7 0 0 transition-all duration-3 0 0 transform hover:scale-1 0 5"
              Get Started
              to="/demo"
              className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-9-0-0 transition-all duration-3-0-0"
              Schedule Demo
  );
      
      <div className="min-h-screen bg-gradient-to-br from-slate-9-0-0 via-purple-9-0-0 to-slate-9-0-0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-bold text-white mb-6">
            <p className="text-xl text-gray-3-0-0 mb-8">
              Comprehensive IT services to power your digital transformation
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/1 0 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Server className="w-1 2 h-12 text-blue-4-0-0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-3-0-0">
                Robust IT infrastructure solutions for scalable growth.
              <Cloud className="w-1 2 h-12 text-blue-4-0-0 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
                Secure and scalable cloud computing solutions.
    
  </div></div></div></div></div></div></div></div></div></div></div></div></></div></p></p></p></h1></h1></h2></section></section></section></Link></Helmet>);
};

export default ItSolutionsPage;

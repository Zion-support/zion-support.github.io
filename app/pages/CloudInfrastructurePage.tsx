<<<<<<< HEAD
import React from 'react";
import { Helmet } from 'react-helmet-async";
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react";
const CloudInfrastructurePage: React.FC = () => {const services = [{
      icon: Cloud,
      title: 'Cloud Migration","
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.","
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']'"},"
    {icon: Server,
      title: 'Infrastructure as Code","
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.","
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']'"},"
    {icon: Database,
      title: 'Database Solutions","
      description: 'Optimize your database performance and scalability in the cloud environment.","
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']'"},"
    {icon: Shield,
      title: 'Security & Compliance","
      description: 'Implement robust security measures and ensure compliance with industry standards.","
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']'"},"
    {icon: Zap,
      title: 'Auto-scaling","
      description: 'Automatically scale your resources based on demand to optimize costs and performance.","
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']'"},"
    {icon: Globe,
      title: 'Multi-cloud Strategy","
      description: 'Leverage multiple cloud providers for better resilience and vendor independence.","
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization']'"}"
=======
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react;
const CloudInfrastructurePage: React.FC = () => {
  const services = [{
      icon: Cloud,
      title: "Cloud Migration",';
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",';
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']';
    },
    {
      icon: Server,
      title: "Infrastructure as Code",';
      description: "Automate infrastructure provisioning and management using modern DevOps practices.",';
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']';
    },
    {
      icon: Database,
      title: "Database Solutions",';
      description: "Optimize your database performance and scalability in the cloud environment.",';
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']';
    },
    {
      icon: Shield,
      title: "Security & Compliance",';
      description: "Implement robust security measures and ensure compliance with industry standards.",';
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']';
    },
    {
      icon: Zap,
      title: "Auto-scaling",';
      description: "Automatically scale your resources based on demand to optimize costs and performance.",';
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']';
    },
    { icon: Globe,
      title: "Multi-cloud Strategy",';
      description: "Leverage multiple cloud providers for better resilience and vendor independence.",';
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization']'; }
>>>>>>> origin/main
  ];
const CloudInfrastructurePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">"
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, automation, security, and optimization." />"
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security" />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        {/* Hero Section */}
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-white mb-6">"
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Infrastructure</span>"
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Build, migrate, and optimize your cloud infrastructure for maximum performance, 
            security, and cost-effectiveness.;
          </p>
        </div>
<<<<<<< HEAD
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">"
=======
        { /* Services Grid */ }
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> origin/main
          {services.map((service, _index) => {
            const Icon = service.icon;
            return (
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">"
                <div className="flex items-center mb-4">"
                  <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mr-4">"
                    <Icon className="w-6 h-6 text-white" />"
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>"
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>"
                <ul className="space-y-2">"
                  {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">"
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>"
                      {feature}
=======
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                      { feature }
>>>>>>> origin/main
                    </li>
                  ))
                </ul>
              </div>
            )
          }
        </div>
<<<<<<< HEAD
        {/* CTA Section */}
        <div className="text-center">"
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">"
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>"
            <p className="text-gray-300 mb-6">"
=======
        { /* CTA Section */ }
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
>>>>>>> origin/main
              Our cloud experts can help you design, implement, and optimize your cloud infrastructure for success.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">"
                Start Migration;
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">"
                Get Assessment;
const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services by Zion Tech Group." />"
      </Helmet>
      <div className="min-h-screen bg-white">"
        <div className="container mx-auto px-4 py-16">"
          <div className="text-center">"
            <h1 className="text-4xl font-bold text-gray-900 mb-8">"
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-600 mb-8">"
              Professional cloud infrastructure solutions tailored to your business needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                  Expert Solutions
                </h3>
                <p className="text-blue-700">"
                  Our team of experts delivers cutting-edge cloud infrastructure solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-green-900 mb-2">"
                  Custom Implementation
                </h3>
                <p className="text-green-700">"
                  Tailored cloud infrastructure implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
                <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                  24/7 Support
                </h3>
                <p className="text-purple-700">"
                  Round-the-clock support for all your cloud infrastructure needs.
                </p>
              </div>
            </div>
            <div className="mt-12">"
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
                Get Started Today
              </button>
            </div>
          </div>
const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CloudInfrastructurePage - Zion Tech Group</title>
        <meta name="description" content="CloudInfrastructurePage - Zion Tech Group" />"
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold mb-4">CloudInfrastructurePage</h1>"
          <p className="text-gray-300">This page is under construction.</p>"
        </div>
      </div>
    </div>;  )
export default CloudInfrastructurePage;
    </>
  )
export default CloudInfrastructurePage;
=======
"use client";

import React from "react";

export default function CloudInfrastructurePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">CloudInfrastructurePage</h1>
      <p className="text-gray-300 text-lg">This page is under development.</p>
    </div>
  );
}
>>>>>>> origin/main

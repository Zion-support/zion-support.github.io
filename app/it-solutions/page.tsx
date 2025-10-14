import React from 'react';
import React from 'react';

import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon
 } from "@heroicons/react/24/outline";

const ITSolutionsPage: React.FC = () => {
  const services = [
    {
      title: "Infrastructure Management",
      description: "Complete IT infrastructure setup, monitoring, and maintenance services.",
      icon: ServerIcon,
      features: ['24/7 Monitoring', 'Automated Backups', 'Performance Optimization', 'Security Updates']
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime.",
      icon: CloudIcon,
      features: ['AWS/Azure/GCP', 'Data Migration', 'Cost Optimization', 'Security Compliance']
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets.",
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training']
    },
    {
      title: "AI Integration",
      description: "Integrate artificial intelligence into your existing IT infrastructure.",
      icon: CpuChipIcon,
      features: ['Machine Learning', 'Process Automation', 'Data Analytics', 'Predictive Maintenance']
    }
  ];

ursor/fix-errors-and-merge-to-main-94 a7
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet >
        <title>IT Solutions - Zion Tech Group</>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, and AI integration services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, cybersecurity, AI integration" />
      </>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 >
                IT Solutions
              </>
              <p >
                Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation.
              </>
            </>
          </>
        </>
        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
                Our IT Services
              </>
              <p >
                From infrastructure management to AI integration, we provide end-to-end IT solutions
              </>
            </>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service .icon className="w-8 h-8 text-white" />
                    </>
                    <h3 className="text-2 xl font-bold text-white">{service.title}</>
                  </>
                  <p >
                    {service.description}
                  </>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </>
                    ))}
                  </>
                  <Link to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </>
                </>
              ))}
            </>
          </>
        </>
        {/* CTA Section */}
        <section className="py-20 bg-slate-800">
          <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4 xl font-bold mb-6">Ready to Modernize Your IT Infrastructure?</>
            <p >
              Let our experts help you build a robust, secure, and scalable IT environment
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started Today
              </>
              <Link to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </>
            </>
          </>
        </>
ursor/fix-errors-and-merge-to-main-94 a7
      </>
    </>
  );
};

export default ITSolutionsPage;
ursor/fix-errors-and-merge-to-main-94 a7

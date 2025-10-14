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

ursor/fix-errors-and-merge-to-main-94 a7
const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: ServerIcon,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.",
      features: [
        'Server Configuration',
        'Network Setup',
        'Hardware Maintenance',
        'Performance Monitoring'
      ]
    },
    {
      icon: CloudIcon,
      title: "Cloud Solutions",
      description: "Complete cloud migration and management services for scalable, secure, and cost-effective solutions.",
      features: [
        'Cloud Migration',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Security Compliance'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity Services",
      description: "Advanced security solutions to protect your IT infrastructure from threats and vulnerabilities.",
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response'
      ]
    },
    {
      icon: CpuChipIcon,
      title: "AI Integration",
      description: "Integrate artificial intelligence into your existing IT infrastructure for enhanced capabilities.",
      features: [
        'Machine Learning',
        'Process Automation',
        'Data Analytics',
        'Predictive Maintenance'
      ]
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proactive Monitoring',
    'Scalable Solutions',
    'Cost Optimization',
    'Security Compliance',
    'Performance Optimization'
  ];

  return (
    <>
      <Helmet >
        <title>IT Services - Zion Tech Group</>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and AI integration for modern businesses." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, AI integration, IT support" />
      </>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div></>
        </>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4 xl mx-auto">
            <h1 >
ursor/fix-errors-and-merge-to-main-94 a7
              IT Services
            </>
            <p >
              Comprehensive IT Solutions for Modern Businesses
            </>
            <p >
              From infrastructure management to AI integration, we provide end-to-end IT services 
              that keep your business running smoothly and securely.
            </>
            <Link to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </>
          </>
        </>
      </>
      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Our IT Services
            </>
            <p >
              Comprehensive IT solutions designed to meet your business needs
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
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </>
            <p >
              We provide comprehensive IT solutions that keep your business running smoothly
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-8 h-8 text-white" />
                </>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</>
                <p >
                  Professional IT services that ensure your systems are always running at peak performance.
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </>
          <p >
            Let our experts help you build a robust, secure, and scalable IT environment
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </>
            <Link to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </>
          </>
        </>
      </>
    </>
  );
};

export default ITServicesPage;

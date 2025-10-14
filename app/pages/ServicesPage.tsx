import React from 'react';
import React from 'react';
import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { CpuChipIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  CheckIcon
 } from "@heroicons/react/24/outline";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: CpuChipIcon,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Custom AI Development'
      ],
      href: "/ai-solutions",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      href: "/cybersecurity",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses with high availability, security, and performance.",
      icon: CloudIcon,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization',
        'Multi-cloud Strategy'
      ],
      href: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom micro SaaS applications tailored to your specific business needs and requirements.",
      icon: GlobeAltIcon,
      features: [
        'Custom Development',
        'API Integration',
        'Scalable Architecture',
        'User Management',
        'Payment Processing',
        'Analytics Dashboard'
      ],
      href: "/micro-saas-solutions",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "5 G Technology",
      description: "Next-generation 5 G technology implementation for ultra-fast connectivity and IoT solutions.",
      icon: SignalIcon,
      features: [
        '5 G Network Implementation',
        'IoT Device Management',
        'Edge Computing',
        'Real-time Data Processing',
        'Low Latency Applications',
        'Network Optimization'
      ],
      href: "/5 g-solutions",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "IT Services",
      description: "Complete IT infrastructure management and support services for your business operations.",
      icon: BriefcaseIcon,
      features: [
        'IT Infrastructure Management',
        'Help Desk Support',
        'System Administration',
        'Network Management',
        'Software Deployment',
        'Technical Consulting'
      ],
      href: "/it-solutions",
      color: "from-gray-500 to-slate-500",
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs and current technology stack to identify opportunities for improvement.",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy tailored to your specific requirements and business goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team implements the solution with minimal disruption to your daily operations.",
    },
    {
      step: "04",
      title: "Support",
      description: "We provide ongoing support and optimization to ensure your solution continues to deliver value.",
    }
  ];

  return (
    <>
      <Helmet >
        <title>Services - Zion Tech Group</>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5 G technology, and IT services." />
        <meta name="keywords" content="technology services, AI solutions, cybersecurity, cloud infrastructure, micro SaaS, 5 G technology, IT services" />
      </>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div></>
        </>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4 xl mx-auto">
            <h1 >
              Our Services
            </>
            <p >
              Comprehensive Technology Solutions
            </>
            <p >
              From AI and cybersecurity to cloud infrastructure and 5 G technology, 
              we provide end-to-end solutions that drive digital transformation and business growth.
            </>
            <Link to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </>
          </>
        </>
      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Our Technology Services
            </>
            <p >
              Comprehensive solutions designed to meet your business needs
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
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
                <Link to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </>
              </>
            ))}
          </>
        </>
      {/* Process Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Our Process
            </>
            <p >
              A structured approach to delivering exceptional results
            </>
          </>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2 xl font-bold text-white">{step.step}</>
                </>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</>
                <p>{step.description}</>
              </>
            ))}
          </>
        </>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </>
          <p >
            Let's discuss how our services can help you achieve your business goals
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

export default ServicesPage;

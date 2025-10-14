import React from 'react';
import React from 'react';


import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Link  } from "react-router-dom";
import { PlayIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckIcon,
  PhoneIcon,
  EnvelopeIcon
 } from "@heroicons/react/24/outline";

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: "AI Solutions Demo",
      description: "Experience our AI-powered solutions in action with interactive demonstrations.",
      icon: CpuChipIcon,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      duration: "15 minutes",
    },
    {
      title: "Cybersecurity Demo",
      description: "See how our security solutions protect your digital assets in real-time.",
      icon: ShieldCheckIcon,
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response'
      ],
      duration: "20 minutes",
    },
    {
      title: "Cloud Infrastructure Demo",
      description: "Explore our cloud solutions and infrastructure management capabilities.",
      icon: CloudIcon,
      features: [
        'Cloud Migration',
        'Auto-scaling',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      duration: "25 minutes",
    },
    {
      title: "Micro SaaS Demo",
      description: "Discover our custom micro SaaS applications and their capabilities.",
      icon: GlobeAltIcon,
      features: [
        'Custom Development',
        'API Integration',
        'User Management',
        'Analytics Dashboard'
      ],
      duration: "18 minutes",
    },
    {
      title: "5 G Technology Demo",
      description: "Experience the power of 5 G technology and IoT solutions.",
      icon: SignalIcon,
      features: [
        '5 G Network Implementation',
        'IoT Device Management',
        'Edge Computing',
        'Real-time Processing'
      ],
      duration: "22 minutes",
    }
  ];

  return (
    <React .Fragment>
      <Helmet >
        <title>Demo - Zion Tech Group</>
        <meta name="description" content="Experience our technology solutions with interactive demos. See AI, cybersecurity, cloud infrastructure, and more in action." />
        <meta name="keywords" content="demo, technology demo, AI demo, cybersecurity demo, cloud demo, micro SaaS demo" />
      </>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div></>
        </>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4 xl mx-auto">
            <h1 >
              Experience Our Solutions
            </>
            <p >
              Interactive Demos of Our Technology
            </>
            <p >
              See our AI, cybersecurity, cloud infrastructure, and other solutions in action. 
              Schedule a personalized demo to explore how our technology can transform your business.
            </>
            <Link to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5" />
            </>
          </>
        </>
      </>
      {/* Demo Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6">
              Available Demos
            </>
            <p >
              Choose from our comprehensive range of technology demonstrations
            </>
          </>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <demo .icon className="w-8 h-8 text-white" />
                  </>
                  <div >
                    <h3 className="text-2 xl font-bold text-white">{demo.title}</>
                    <p>{demo.duration}</>
                  </>
                </>
                <p >
                  {demo.description}
                </>
                <ul className="space-y-3 mb-6">
                  {demo.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </>
                  ))}
                </>
                <Link to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Schedule Demo
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4 xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4 xl font-bold mb-6">Ready to See Our Solutions in Action?</>
          <p >
            Schedule a personalized demo tailored to your business needs
          </>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-6">
              <PhoneIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</>
              <p>+1-302-464-0950</>
              <p>Available 24/7</>
            </>
            <div className="bg-slate-800 rounded-xl p-6">
              <EnvelopeIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</>
              <p>kleber@ziontechgroup.com</>
              <p>Quick response guaranteed</>
            </>
          </>
          <Link to="/contact"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            Schedule Your Demo
            <PlayIcon className="w-5 h-5" />
          </>
        </>
      </>
    </>
  );
};

export default DemoPage;

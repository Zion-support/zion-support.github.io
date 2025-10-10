'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe } from "lucide-react";
const ARVRPlatformPage: React.FC = () => {
  const features = [
      icon: Brain,
      title: 'AI-Powered AR/VR',
      description: 'Advanced AI technology to create immersive augmented and virtual reality experiences'
      icon: Zap,
      title: 'Real-Time Rendering',
      description: 'Lightning-fast 3D rendering and real-time interaction for optimal user experience'
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your AR/VR data'
      icon: Globe,
      title: 'Cross-Platform Support',
      description: 'Deploy across multiple devices and platforms for maximum reach and accessibility'
  ];
  const benefits = [
    'Advanced AR/VR technology integration',
    'Real-time 3D rendering and interaction',
    'Enterprise-grade security and compliance',
    'Cross-platform deployment capabilities',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>AR/VR Platform | Zion Tech Group</title>
        <meta name="description" content="Professional AR/VR Platform services by Zion Tech Group. Advanced AI and IT solutions for your business." />
meta name="keywords" content="AR VR platform, AI solutions, IT services, Zion Tech Group, augmented reality, virtual reality" />
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"/>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                AR/VR Platform;
              <br />
              <span className="text-white">Solutions</span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with our advanced AR/VR platform solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
                Learn More;
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our AR/VR Platform?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
Our AR/VR solutions deliver unmatched performance, security, and scalability.
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, text-center, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
            ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
Experience the power of our AR/VR platform solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            <p className="text-xl text-purple-100 mb-8"></p>
              Contact our experts to discuss your AR/VR platform needs and get a customized solution.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now;
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us;
  );
export default ARVRPlatformPage;
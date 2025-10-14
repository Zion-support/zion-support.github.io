import React from 'react';
import { Helmet  } from "react-helmet-async";
import { CheckCircle, Shield, Wifi, Zap, Globe, Smartphone, Right  } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Advanced Features",
      description: "Cutting-edge technology for maximum efficiency",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimization",
      description: "Optimized 5 G solutions for mobile devices and applications",
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Network Connectivity",
      description: "High-speed 5 G network solutions for seamless connectivity",
    }
  ];

  const solutions = [
    {
      title: "5 G Network Infrastructure",
      description: "Complete 5 G network setup and optimization",
      price: "Starting at $50,000",
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']
    },
    {
      title: "5 G Mobile Applications",
      description: "Custom mobile apps optimized for 5 G networks",
      price: "Starting at $25,000",
      features: ['App development', '5 G optimization', 'Testing & QA', 'Deployment support']
    },
    {
      title: "5 G IoT Solutions",
      description: "IoT device connectivity and management platform",
      price: "Starting at $35,000",
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']
    }
  ];

  return (
    <>
      <EnhancedSEO title="5 G Solutions - Zion Tech Group"
        description="Professional 5 G solutions by Zion Tech Group. Expert 5 G network infrastructure, mobile applications, and IoT solutions for your business needs."
        keywords="5 G solutions, 5 G network, 5 G mobile apps, 5 G IoT, network infrastructure, mobile optimization"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Helmet >
          <title>5 G Solutions - Advanced 5 G Technology | Zion Tech Group</>
          <meta name="description" content="Transform your business with our comprehensive 5 G solutions including network infrastructure, mobile applications, and IoT connectivity." />
          <meta name="keywords" content="5 G solutions, 5 G network, 5 G mobile apps, 5 G IoT, network infrastructure, mobile optimization" />
        </>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7 xl mx-auto text-center">
            <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">
              5 G
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </>
            </>
            <p >
              Experience the future of connectivity with our comprehensive 5 G solutions.
              From network infrastructure to mobile applications, we deliver cutting-edge 5 G technology.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="px-8 py-4">
                Get Started
                <Right className="w-5 h-5 ml-2 inline" />
              </>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Learn More
              </>
            </>
          </>
        </>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <h2 className="text-4 xl font-bold text-white text-center mb-16">
              Why Choose Our 5 G Solutions
            </>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="p-6 text-center">
                  <div >
                    {feature.icon}
                  </>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</>
                  <p>{feature.description}</>
                  {feature.benefits && (
                    <ul className="text-sm text-gray-400 space-y-1">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i}>• {benefit}</>
                      ))}
                    </>
                  )}
                </>
              ))}
            </>
          </>
        </>
        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7 xl mx-auto">
            <h2 className="text-4 xl font-bold text-white text-center mb-16">
              Our 5 G Solutions
            </>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <FuturisticCard key={index} className="p-8">
                  <h3 className="text-2 xl font-bold text-white mb-4">{solution.title}</>
                  <p>{solution.description}</>
                  <div>{solution.price}</>
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </>
                    ))}
                  </>
                  <FuturisticButton className="w-full">
                    Learn More
                    <Right className="w-5 h-5 ml-2 inline" />
                  </>
                </>
              ))}
            </>
          </>
        </>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4 xl mx-auto text-center">
            <h2 className="text-4 xl font-bold text-white mb-6">
              Ready to Embrace 5 G Technology?
            </>
            <p >
              Join the 5 G revolution with our comprehensive solutions designed to transform your business.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton className="px-8 py-4">
                Start Your 5 G Journey
                <Right className="w-5 h-5 ml-2 inline" />
              </>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                Schedule Consultation
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default Page;
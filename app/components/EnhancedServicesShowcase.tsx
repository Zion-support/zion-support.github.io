<<<<<<< HEAD
import React from 'react';
import {Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Users, Award, Clock, Globe}}from 'lucide-react';
const EnhancedServicesShowcase: React.FC = () => {,
      stats: '300% ROI'
=======
import React from "react";
import { ArrowRight, CheckCircle, Brain, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence solutions to automate and optimize your business processes.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    },
    {
      title: 'IT Infrastructure',
      stats: '99.9% Uptime'
    },
    {
      title: 'Cybersecurity',
      stats: 'Zero Breaches'
    },
    {
      title: 'Automation',
      stats: '95% Efficiency'
    }
  ];

  return (
    <section className="py-16">
        </section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Our Core Services
          </h2>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (</div>
            <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <service.icon className={`w-12 h-12 ${service.color} mr-4`} />
                <div></div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <div className="text-sm text-cyan-400 font-semibold">{service.stats}</div>
              </div>
              
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="/services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
      stats: '95% Efficiency',}}
  ]
return(<section className="py-20 px-4">)</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
                {service.features.map((feature, featureIndex) => (} <li>
                    <CheckCircle />

        <div className="text-center mt-12">
          <a
            href="/services"
            className="cyber-button inline-flex items-center"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
    </section>
  );
};

export default EnhancedServicesShowcase;

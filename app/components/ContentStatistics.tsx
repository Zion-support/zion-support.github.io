import React from 'react';
'use client';
import React from 'react';
'use client';
import React, { Helmet } from 'react-helmet-async';
import React, { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const ContentStatisticsPage: React.FC = () => {
import React, { useState, useEffect } from 'react';
import {CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, TrendingUp, Users, Award, Clock}}from 'lucide-react';
    years: 0;
    years: 0;,});
  const targetCounters = {clients: 500,
    projects: 1000,
    satisfaction: 99,
    years: 10;,};
import React from 'react';

const ContentStatistics: React.FC = React.memo((props) => {
    years: 10;
    years: 15,
    countries: 50,
    uptime: 99;
  };
      color: 'text-cyan-400'
      color: 'text-cyan-400',},
    {icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',},
    {icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',},
    {icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',}];

  const achievements = [
    {icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry with cutting-edge AI solutions',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries',},
    {icon: Zap,
      title: 'Performance',
      description: '99.9% uptime and lightning-fast response',}];

  useEffect(() => {const timers = Object.keys(targetCounters).map(key => {)
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds;
      const increment = target / (duration / 16); // 60fps;
      return setInterval(() => {
        setCounters(prev => {)
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {...prev,}
              [key]: Math.min(current + increment, target)};
  ];];];
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
      description: 'Leading AI solutions for modern businesses'
  useEffect(() => {
    const timers = Object.keys(targetCounters).map(key => {;
      const timer = setInterval(() => {
        setCounters(prev => {;
    });

    return () => {timers.forEach(timer => clearInterval(timer));};
  }, []);

  const Component = () => {
  
    return (<div className="py-16 px-4">)</div>"
      <div className="max-w-7xl mx-auto">{/* Header */</div>} <div className="text-center mb-16">
  );
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>"
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Numbers that speak for themselves - our track record of success and client satisfaction.</p>
          </p>
        </div>

        {/* Statistics Grid */} <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8 mb-16">,</div>
          {statistics.map((stat, index) => (
            <div key={index}className="text-center">"
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">"
                <div className="flex justify-center mb-4">"
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">"
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className={`text-4xl font-bold ${stat.color}mb-2`}>{Math.floor(stat.value)</div>}{stat.suffix}
                </div>
                <div className="text-gray-300 text-lg">{stat.label</div>}</div>
              </div>
  const Component = () => {
  
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ContentStatistics | Zion Tech Group</title>
        <meta name="description" content="Professional ContentStatistics services by Zion Tech Group. Advanced AI and IT solutions for your business." />"
        <meta name="keywords" content="ContentStatistics, AI solutions, IT services, Zion Tech Group, contentstatistics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ContentStatistics;
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced contentstatistics solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our ContentStatistics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our contentstatistics solutions deliver unmatched performance, security, and scalability.
export default ContentStatistics;
          ))
        </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers;
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the measurable impact of our AI and IT solutions across industries worldwide;
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 group">"
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>"
              <div className="text-gray-300 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">"
          <div className="text-center mb-12">"
            <h3 className="text-2xl font-bold text-white mb-4">Why We Lead the Industry</h3>"
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our cutting-edge technology and proven expertise deliver unmatched results;
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">"
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">"
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                <p className="text-gray-300">{feature.description}</p>
      </section>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-4xl mx-auto text-center">"
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your contentstatistics needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">"
                <Phone className="mr-2 h-5 w-5" />
                Call Now;
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">"
                <Mail className="mr-2 h-5 w-5" />
                Email Us;
              </button>

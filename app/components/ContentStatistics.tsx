'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle ArrowRight Zap Shield Brain Globe TrendingUp Users Award Clock Star BarChart3 Target Rocket } from "lucide-react";
const ContentStatistics: React.FC = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    satisfaction: 0,
    years: 0,
    countries: 0,
    uptime: 0;
  const targetCounters = {
    clients: 10000,
    projects: 5000,
    satisfaction: 99,
    years: 15,
    countries: 50,
    uptime: 99;
  const statistics = [
      icon: Users,
      value: counters.clients,
      label: 'Happy Clients',
      suffix: '+',
      color: 'text-blue-400',
      description: 'Businesses trust our solutions'
      icon: Award,
      value: counters.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'text-purple-400',
      description: 'Successful implementations'
      icon: TrendingUp,
      value: counters.satisfaction,
      label: 'Client Satisfaction',
      suffix: '%',
      color: 'text-green-400',
      description: 'Customer satisfaction rate'
      icon: Clock,
      value: counters.years,
      label: 'Years Experience',
      suffix: '+',
      color: 'text-yellow-400',
      description: 'Industry expertise'
      icon: Globe,
      value: counters.countries,
      label: 'Countries Served',
      suffix: '+',
      color: 'text-cyan-400',
      description: 'Global presence'
      icon: BarChart3,
      value: counters.uptime,
      label: 'Uptime Guarantee',
      suffix: '%',
      color: 'text-red-400',
      description: 'Service reliability'
  ];
  const achievements = [
      icon: Brain,
      title: 'AI Innovation',
      description: 'Leading the industry in AI-powered solutions'
      icon: Shield,
      title: 'Security Excellence',
      description: 'Bank-level security for all our solutions'

  const features = [
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      stats: ['95% Accuracy', '10x Faster', '24/7 Learning']
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      stats: ['< 100ms Response', '99.9% Uptime', '10M+ Requests']
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      stats: ['256-bit Encryption', 'SOC 2 Compliant', 'Zero Breaches']
      icon: Globe,
      title: 'Global Reach',
description: 'Worldwide deployment and support for international businesses',
      description: 'Worldwide deployment and support for international businesses',
      stats: ['50+ Countries', '15+ Languages', '24/7 Support']
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  const achievements = [
      icon: Star,
      title: 'Industry Recognition',
      description: 'Awarded Best AI Solutions Provider 2024',
      value: '25+'
      icon: Target,
      title: 'Success Rate',
      description: 'Projects delivered on time and within budget',
      value: '98%'
      icon: Rocket,
      title: 'Growth Rate',
      description: 'Year-over-year business growth',
      value: '300%'
  ];
  useEffect(() => {
    const duration = 3000; // 3 seconds;
    const steps = 60;
    const stepDuration = duration / steps;
    const timers = Object.keys(targetCounters).map((key) => {
      const target = targetCounters[key as keyof typeof targetCounters];
      const duration = 2000; // 2 seconds;
      const increment = target / (duration / 16); // 60fps;
      return setInterval(() => {
setCounters(prev => {
          const current = prev[key as keyof typeof prev];
          if (current < target) {
            return {
              ...prev,
              [key]: Math.min(current + increment, target)
          return prev;
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
    return () => {
      timers.forEach(timer => clearInterval(timer));
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 sm:px-6 lg:px-8"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Our Impact in Numbers;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            See how we've transformed businesses and delivered exceptional results.
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Impact</span> in Numbers;
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            See how we've helped businesses transform with our AI and IT solutions.
div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-lg, rounded-xl, p-6, border borde, r-whit, e/10, text-cente, r"></di, v>
              <div className="flex justify-center mb-4"></div>
                <div className="bg-gradient-to-r from-purple-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center"></div>
                  <stat.icon className="h-8 w-8 text-white" />
              <div, className={`tex, t-3xl, font-bol, d ${sta, t.colo, r} m, b-2`}></di, v>
              <div, className="tex, t-gra, y-30, 0">{sta, t.labe, l}</di, v>
          ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-lg, rounded-xl, p-6, border borde, r-whit, e/10, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4"></div>
                <achievement.icon className="h-6 w-6 text-white" />
              <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{achievemen, t.titl, e}</h, 3>
              <p, className="tex, t-gra, y-300, text-s, m">{achievemen, t.descriptio, n}</p>
          ))}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-8, text-center, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <stat.icon className="w-8 h-8 text-slate-900" />
              <div, className={`tex, t-4xl, font-bol, d ${sta, t.colo, r} m, b-2`}></di, v>
              <div, className="tex, t-lg, font-semibold, text-white, mb-2">{sta, t.labe, l}</di, v>
              <div, className="tex, t-gra, y-400, text-s, m">{sta, t.descriptio, n}</di, v>
          ))}
        <div className="mb-16"></div>
          <div className="text-center mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <p className="text-gray-300 max-w-2xl mx-auto"></p>
              Discover the powerful features that make our solutions stand out.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-6, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                <h4, className="tex, t-lg, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 4>
                <p, className="tex, t-gra, y-300, text-sm, mb-4">{featur, e.descriptio, n}</p>
                <div className="space-y-2"></div>
                    <div, key={statInde, x} classNam, e="flex, items-center, text-gra, y-300, text-s, m"></di, v>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <spa, n>{sta, t}</spa, n>
                  ))}
            ))}
        <div className="mb-16"></div>
          <div className="text-center mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Achievements</h3>
            <p className="text-gray-300 max-w-2xl mx-auto"></p>
              Recognition and milestones that showcase our commitment to excellence.
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
          <div className="grid md:grid-cols-3 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-8, text-center, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <achievement.icon className="w-8 h-8 text-white" />
                <div, className="tex, t-3xl, font-bold, text-white, mb-2">{achievemen, t.valu, e}</di, v>
                <h4, className="tex, t-lg, font-semibold, text-white, mb-2">{achievemen, t.titl, e}</h, 4>
                <p, className="tex, t-gra, y-300, text-s, m">{achievemen, t.descriptio, n}</p>
            ))}
        <div className="mb-16"></div>
          <div className="text-center mb-12"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto"></p>
              Discover the advantages that make our solutions the preferred choice.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
          <div className="grid md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, gap-3, bg-whit, e/5, backdrop-blu, r-sm, rounded-lg, p-4, hover:b, g-whit, e/10, transition-all, duration-30, 0"></di, v>
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
        <div className="text-center"></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12"></div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Join thousands of satisfied customers and transform your business today.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"></button>
                <Zap className="w-5 h-5" />
                Get Started Today;
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"></button>
                View Case Studies;
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"></button>
                <ArrowRight className="w-5 h-5" />
                Learn More;
  );
export default ContentStatistics;
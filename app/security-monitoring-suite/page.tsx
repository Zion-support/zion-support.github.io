'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import {;
  Shield,;
  Eye,;
  AlertTriangle,;
  CheckCircle,;
  BarChart,;
  Clock,;
  Users,;
  Zap,;
  Phone,;
  Mail,;
  MapPin,;
  ArrowRight,;
  Brain,;
  Globe,;
  Lock,;
  Activity,;
  TrendingUp,;
  Settings,;
  Database,;
  Target,;
  Monitor;}
const SecurityMonitoringSuitePage: React.FC = () => {
  const features = [
      icon: Monitor,
      title: 'Real-time Dashboard',
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.'
      icon: AlertTriangle,
      title: 'Advanced Alerts',
      description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.'
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Detailed security reports and analytics to help you understand and improve your security posture.'
      icon: Zap,
      title: 'Automated Response',
      description: 'Automated incident response and threat mitigation to protect your systems 24/7.'
  ];
  const benefits = [
    '24/7 security monitoring and protection',
    'Real-time threat detection and alerts',
    'Comprehensive security analytics',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Easy-to-use dashboard interface',
    'Scalable for any business size',
    'Expert security team support'
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
        <meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response." />
        <meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"/>
                Security Monitoring Suite;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection, 
                and automated response capabilities to protect your business 24/7.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                  <Shield className="mr-2 h-5 w-5" />
                  Start Free Trial;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Platform Features;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our security monitoring suite provides everything you need to protect your business from cyber threats.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, border borde, r-whit, e/20, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature.icon className="h-6 w-6 text-white" />
                  <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
                  <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Why Choose Our Suite?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience comprehensive security protection with our all-in-one monitoring platform.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p, className="tex, t-gra, y-300, text-l, g">{benefi, t}</p>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Ready to Secure Your Business?
              <p className="text-xl text-purple-100 mb-8"></p>
                Start your free trial today and experience the power of our security monitoring suite.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us;
  );
export default SecurityMonitoringSuitePage;
;
const SecurityMonitoringSuitePage: React.FC = () => {;
  const features = [;
      icon: Monitor,;
      title: 'Real-time Dashboard',;
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.';}
      icon: AlertTriangle,;
      title: 'Advanced Alerts',;
      description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.';}
      icon: BarChart,;
      title: 'Security Analytics',;
      description: 'Detailed security reports and analytics to help you understand and improve your security posture.';}
      icon: Zap,;
      title: 'Automated Response',;
      description: 'Automated incident response and threat mitigation to protect your systems 24/7.';}
  ];
;
  const benefits = [;
    '24/7 security monitoring and protection',;
    'Real-time threat detection and alerts',;
    'Comprehensive security analytics',;
    'Automated incident response',;
    'Compliance monitoring and reporting',;
    'Easy-to-use dashboard interface',;
    'Scalable for any business size',;
    'Expert security team support';
  ];
;
  return (;
      <Helmet>;</Helmet>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>;
        <meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response." />;
        <meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group" />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
        <section className="pt-20 pb-16 px-4"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;</h1>
                Security Monitoring Suite;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;</p>
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,;
                and automated response capabilities to protect your business 24/7.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;</button>
                  <Shield className="mr-2 h-5 w-5" />;
                  Start Free Trial;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Platform Features;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
                Our security monitoring suite provides everything you need to protect your business from cyber threats.;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>;
                <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, border borde, r-whit, e/20, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>;
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>;
                    <feature.icon className="h-6 w-6 text-white" />;
                  <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>;
                  <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>;
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Why Choose Our Suite?;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
                Experience comprehensive security protection with our all-in-one monitoring platform.;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>;
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />;
                  <p, className="tex, t-gra, y-300, text-l, g">{benefi, t}</p>;
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-4xl mx-auto text-center"></div>;
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Ready to Secure Your Business?;
              <p className="text-xl text-purple-100 mb-8">;</p>
                Start your free trial today and experience the power of our security monitoring suite.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;</button>
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Us;
  );
;
export default SecurityMonitoringSuitePage;

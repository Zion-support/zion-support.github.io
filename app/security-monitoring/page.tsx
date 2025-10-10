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
  Database;}
const SecurityMonitoringPage: React.FC = () => {
  const features = [
      icon: Eye,
      title: '24/7 Real-time Monitoring',
      description: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.'
      icon: AlertTriangle,
      title: 'Advanced Threat Detection',
      description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.'
      icon: BarChart,
      title: 'Comprehensive Analytics',
      description: 'Detailed security reports and insights to help you understand and improve your security posture.'
      icon: Zap,
      title: 'Instant Response',
      description: 'Automated incident response and immediate notification systems to minimize security breaches.'
  ];
  const benefits = [
    '24/7 continuous security monitoring',
    'AI-powered threat detection and analysis',
    'Real-time alerts and notifications',
    'Comprehensive security reporting',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Expert security team support',
    'Customizable monitoring rules'
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>
        <meta name="description" content="Professional 24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and comprehensive cybersecurity protection." />
        <meta name="keywords" content="security monitoring, cybersecurity, threat detection, 24/7 monitoring, security alerts, Zion Tech Group" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"/>
                Security Monitoring Services;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Protect your business with our advanced 24/7 security monitoring solutions. 
                Real-time threat detection, instant alerts, and expert response to keep your data safe.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                  <Shield className="mr-2 h-5 w-5" />
                  Get Protected Now;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Why Choose Our Security Monitoring?
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.
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
                Key Benefits;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience comprehensive security protection with our advanced monitoring services.
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
                Contact our security experts to discuss your monitoring needs and get a customized protection plan.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us;
  );
export default SecurityMonitoringPage;
;
const SecurityMonitoringPage: React.FC = () => {;
  const features = [;
      icon: Eye,;
      title: '24/7 Real-time Monitoring',;
      description: 'Continuous surveillance of your entire IT infrastructure with instant threat detection and response.';}
      icon: AlertTriangle,;
      title: 'Advanced Threat Detection',;
      description: 'AI-powered analysis to identify sophisticated cyber threats before they impact your business.';}
      icon: BarChart,;
      title: 'Comprehensive Analytics',;
      description: 'Detailed security reports and insights to help you understand and improve your security posture.';}
      icon: Zap,;
      title: 'Instant Response',;
      description: 'Automated incident response and immediate notification systems to minimize security breaches.';}
  ];
;
  const benefits = [;
    '24/7 continuous security monitoring',;
    'AI-powered threat detection and analysis',;
    'Real-time alerts and notifications',;
    'Comprehensive security reporting',;
    'Automated incident response',;
    'Compliance monitoring and reporting',;
    'Expert security team support',;
    'Customizable monitoring rules';
  ];
;
  return (;
      <Helmet>;</Helmet>
        <title>Security Monitoring Services - Zion Tech Group | 24/7 Cybersecurity</title>;
        <meta name="description" content="Professional 24/7 security monitoring services by Zion Tech Group. Advanced threat detection, real-time alerts, and comprehensive cybersecurity protection." />;
        <meta name="keywords" content="security monitoring, cybersecurity, threat detection, 24/7 monitoring, security alerts, Zion Tech Group" />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
        <section className="pt-20 pb-16 px-4"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;</h1>
                Security Monitoring Services;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;</p>
                Protect your business with our advanced 24/7 security monitoring solutions.;
                Real-time threat detection, instant alerts, and expert response to keep your data safe.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;</button>
                  <Shield className="mr-2 h-5 w-5" />;
                  Get Protected Now;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Why Choose Our Security Monitoring?;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
                Our security monitoring solutions deliver unmatched protection with cutting-edge technology and expert oversight.;
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
                Key Benefits;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
                Experience comprehensive security protection with our advanced monitoring services.;
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
                Contact our security experts to discuss your monitoring needs and get a customized protection plan.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;</button>
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Us;
  );
;
export default SecurityMonitoringPage;

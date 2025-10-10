'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import {;
  Shield,;
  Search,;
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
  Eye;}
const PenetrationTestingPage: React.FC = () => {
  const features = [
      icon: Search,
      title: 'Comprehensive Vulnerability Assessment',
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.'
      icon: Target,
      title: 'Simulated Attack Scenarios',
      description: 'Real-world attack simulations to test your defenses and response capabilities.'
      icon: BarChart,
      title: 'Detailed Security Reports',
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.'
      icon: Zap,
      title: 'Expert Security Analysis',
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.'
  ];
  const benefits = [
    'Identify security vulnerabilities before attackers do',
    'Comply with industry regulations and standards',
    'Improve your security posture and defenses',
    'Receive detailed remediation recommendations',
    'Test incident response procedures',
    'Validate security controls effectiveness',
    'Expert analysis and reporting',
    'Ongoing security improvement guidance'
  ];
  return (
    <React.Fragment></React.Fragment>
      <Helmet/>
        <title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>
        <meta name="description" content="Professional penetration testing services by Zion Tech Group. Comprehensive security assessments, vulnerability testing, and expert security analysis." />
        <meta name="keywords" content="penetration testing, security assessment, vulnerability testing, security audit, Zion Tech Group" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <section className="pt-20 pb-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"/>
                Penetration Testing Services;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Identify and fix security vulnerabilities before attackers exploit them. 
                Our expert penetration testing services help secure your systems and protect your business.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                  <Shield className="mr-2 h-5 w-5" />
                  Schedule Assessment;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Our Penetration Testing Approach;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.
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
                Strengthen your security defenses with our comprehensive penetration testing services.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p, className="tex, t-gra, y-300, text-l, g">{benefi, t}</p>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Ready to Test Your Security?
              <p className="text-xl text-purple-100 mb-8"></p>
                Contact our security experts to schedule a comprehensive penetration test for your systems.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us;
  );
export default PenetrationTestingPage;
;
const PenetrationTestingPage: React.FC = () => {;
  const features = [;
      icon: Search,;
      title: 'Comprehensive Vulnerability Assessment',;
      description: 'Thorough testing of your systems to identify security weaknesses and potential attack vectors.';}
      icon: Target,;
      title: 'Simulated Attack Scenarios',;
      description: 'Real-world attack simulations to test your defenses and response capabilities.';}
      icon: BarChart,;
      title: 'Detailed Security Reports',;
      description: 'Comprehensive reports with prioritized recommendations and remediation guidance.';}
      icon: Zap,;
      title: 'Expert Security Analysis',;
      description: 'Professional security experts conduct thorough testing using industry-standard methodologies.';}
  ];
;
  const benefits = [;
    'Identify security vulnerabilities before attackers do',;
    'Comply with industry regulations and standards',;
    'Improve your security posture and defenses',;
    'Receive detailed remediation recommendations',;
    'Test incident response procedures',;
    'Validate security controls effectiveness',;
    'Expert analysis and reporting',;
    'Ongoing security improvement guidance';
  ];
;
  return (;
      <Helmet>;</Helmet>
        <title>Penetration Testing Services - Zion Tech Group | Security Assessment</title>;
        <meta name="description" content="Professional penetration testing services by Zion Tech Group. Comprehensive security assessments, vulnerability testing, and expert security analysis." />;
        <meta name="keywords" content="penetration testing, security assessment, vulnerability testing, security audit, Zion Tech Group" />;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
        <section className="pt-20 pb-16 px-4"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;</h1>
                Penetration Testing Services;</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;</p>
                Identify and fix security vulnerabilities before attackers exploit them.;
                Our expert penetration testing services help secure your systems and protect your business.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">;</button>
                  <Shield className="mr-2 h-5 w-5" />;
                  Schedule Assessment;
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center mb-16"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Our Penetration Testing Approach;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;</p>
                We use industry-standard methodologies and cutting-edge tools to thoroughly assess your security posture.;
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
                Strengthen your security defenses with our comprehensive penetration testing services.;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>;
                <div, key={inde, x} classNam, e="flex, items-start, space-x-3"></di, v>;
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />;
                  <p, className="tex, t-gra, y-300, text-l, g">{benefi, t}</p>;
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>;
          <div className="max-w-4xl mx-auto text-center"></div>;
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>;
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;</h2>
                Ready to Test Your Security?;
              <p className="text-xl text-purple-100 mb-8">;</p>
                Contact our security experts to schedule a comprehensive penetration test for your systems.;
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>;
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;</button>
                  <Phone className="mr-2 h-5 w-5" />;
                  Call (302) 464-0950;
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;</button>
                  <Mail className="mr-2 h-5 w-5" />;
                  Email Us;
  );
;
export default PenetrationTestingPage;

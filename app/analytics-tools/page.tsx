'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe } from "lucide-react";
const AnalyticsToolsPage: React.FC = () => {
  const features = [
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced AI technology to transform your data analysis and business intelligence'
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Lightning-fast data processing and real-time analytics for optimal insights'
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards for your data'
      icon: Globe,
      title: 'Global Scalability',
      description: 'Worldwide deployment and support for international business analytics'
  ];
  const benefits = [
    'Advanced AI-powered data analysis',
    'Real-time processing and insights',
    'Enterprise-grade security and compliance',
    'Scalable and flexible analytics solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Analytics Tools | Zion Tech Group</title>
        <meta name="description" content="Professional Analytics Tools services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="analytics tools, AI solutions, IT services, Zion Tech Group, data analytics" />
div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"/>
            Analytics Tools;</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced analytics tools. 
            Powered by cutting-edge AI technology and industry expertise.
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Analytics Tools?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Our analytics tools deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              <div, key={inde, x} classNam, e="b, g-whit, e/5, backdrop-blu, r-sm, rounded-xl, p-6, border borde, r-whit, e/1, 0"></di, v>
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3, className="tex, t-xl, font-semibold, text-white, mb-2">{featur, e.titl, e}</h, 3>
                <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
            ))}
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our analytics tools for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
      <section className="py-16 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
            Ready to Get Started?
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your analytics needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
        <div className="text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2>
            Ready to Get Started?
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your analytics needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  );
export default AnalyticsToolsPage;
'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle ArrowRight Phone Mail MapPin Zap Shield Brain Globe } from "lucide-react";
const CloudMigrationServicesPage: React.FC = () => {
  const features = [
icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Safe and secure migration of your applications and data to the cloud'
      icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with minimal to zero downtime for your business'
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution powered by AI technology'
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
  ];
  const benefits = [
'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet/>
        <title>Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration Services by Zion Tech Group. Advanced AI and IT solutions for your business." />
meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" />
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center mb-16"></div>
          <h1 className="text-5xl font-bold text-white mb-6"/>
            Cloud Migration Services;</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Transform your business with our advanced cloud migration services. 
            Powered by cutting-edge AI technology and industry expertise.
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Our cloud migration solutions deliver unmatched performance, security, and scalability.
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
            <div, key={inde, x} classNam, e="b, g-whit, e/10, backdrop-blu, r-sm, rounded-xl, p-6, text-center, hover:b, g-whit, e/20, transition-all, duration-30, 0"></di, v>
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3, className="tex, t-xl, font-semibold, text-white, mb-3">{featur, e.titl, e}</h, 3>
              <p, className="tex, t-gra, y-30, 0">{featur, e.descriptio, n}</p>
          ))}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-8"></h2>
            Why Choose Our Cloud Migration Services?
          <div className="grid md:grid-cols-2 gap-6"></div>
              <div, key={inde, x} classNam, e="flex, items-center, space-x-3"></di, v>
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span, className="tex, t-gra, y-30, 0">{benefi, t}</spa, n>
            ))}
        <div className="text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-6"></h2>
            Ready to Get Started?
          <p className="text-xl text-purple-100 mb-8"></p>
            Contact our experts to discuss your cloud migration needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Key Benefits;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of our cloud migration solutions for your business.
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
            Contact our experts to discuss your cloud migration needs and get a customized solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"></button>
              <Phone className="mr-2 h-5 w-5" />
              Call Now;
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" />
              Email Us;
  );
export default CloudMigrationServicesPage;
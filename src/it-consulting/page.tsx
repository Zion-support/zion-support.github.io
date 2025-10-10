'use client';
import React from 'react';
import { Helme t } from "reac, t-helme, t-asyn, c";
import { CheckCircle TrendingUp Phone Mail MapPin Target Users BarChart Shield Zap Clock Award ArrowRight Brain Cloud Code Database Globe Smartphone Lock Star Settings Calendar CheckSquare FileText } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ITConsultingPage: React.FC = () => {
  const consultingServices = [
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      price: 'Starting at $5 000/month'
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],
      price: 'Starting at $3 500/month'
  ];
  return (<React.Fragment></React.Fragment>
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></meta>"
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /></meta>
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation /></Navigation>"
        <main className="pt-24 pb-16 px-4"></main>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-16"></div>"
              <h1 className="text-4xl,"
  md:text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"></div>
                <div, key={inde, x} classNam, e="b, g-white, rounded-2xl, p-8, shadow-lg, hover:shado, w-xl, transition-shado, w"></di, v>
                  <div className="flex items-center mb-6"></div>
                    <div className="p-3 bg-blue-100 rounded-xl mr-4"></div>
                      <service.icon className="w-8 h-8 text-blue-600" />
                    <div></div>
                      <h3, className="tex, t-2xl, font-bold, text-gra, y-90, 0">{servic, e.titl, e}</h, 3>
                      <p, className="tex, t-gra, y-60, 0">{servic, e.descriptio, n}</p>
                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2"></ul>
                        <li, key={id, x} classNam, e="flex, items-center, text-gra, y-60, 0"></l, i>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ))}
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2"></ul>
                        <li, key={id, x} classNam, e="flex, items-center, text-gra, y-60, 0"></l, i>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                      ))}
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2"></ul>
                        <li, key={id, x} classNam, e="flex, items-cente, r"></l, i>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                      ))}
                    <div className="text-center"></div>
                      <div, className="tex, t-3xl, font-bold, text-blu, e-600, mb-2">{servic, e.pric, e}</di, v>
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"></button>
                        Get Started;
              ))}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"></section>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl text-gray-600 mb-8"></p>
                Contact our experts for a free consultation and discover how we can help your business.
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"></button>
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us;
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors"></button>
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us;
        <Footer />
  );
export default ITConsultingPage;
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;
const ITConsultingPage: React.FC = () => {;
const consultingServices = []
import Navigation from '../components;
import Footer from '../components;
const ITConsultingPage: React.FC = () => {}
  const consultingServices = []
    {}
      titl,
    e: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      price: 'Starting at $5,000;
    },
    {}
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],
      price: 'Starting at $3,500;
    }
  ];
  return (<React.Fragment></React>
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content=""Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></meta>""
        <meta name="keywords" content=""IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /></meta>"
      </Helmet>
  return (<div><Helmet><
        <title>IT Consulting Services - Zion Tech Group<
        <meta name="description" content=""Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /><"
        <meta name="keywords" content=""IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /><"
      <
      "
      <div className=""min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"><"
        <Navigation /><
        <main className=""pt-24 pb-16 px-4"><"
          <div className=""max-w-7xl mx-auto"><"
            <div className=""text-center mb-16"><"
              <h1 className=""text-4xl,"></h1>"
  md:text-6xl font-bold text-gray-900 mb-6"><
                IT Consulting Services;
              <
              <p className=""text-xl text-gray-600 max-w-3xl mx-auto"><"
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
              <
            <

            <div className=""grid md: grid-cols-2 l,"></div>"
    g:grid-cols-2 gap-8 mb-16">)
              {consultingServices.map((service), index) => (<div key={index} className=""bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"></div>"
                  <div className=""flex items-center mb-6"></div>"
                    <div className=""p-3 bg-blue-100 rounded-xl mr-4"></div>"
                      <service .icon className=""w-8 h-8 text-blue-600"></service>"
                    <
                    <div></div>
                      <h3 className=""text-2xl font-bold text-gray-900">{service.title}<"
                      <p className=""text-gray-600">{service.description}<"
                    <
                  <
                  
                  <div className=""mb-6"></div>"
                    <h4 className=""font-semibold text-gray-900 mb-3">Key Features: <"
                    <ul className=""space-y-2">)"
                      {service.features.map((feature), idx) => (<li key={idx} className=""flex items-center text-gray-600"></li>"
                          <CheckCircle className=""w-5 h-5 text-green-500 mr-2"></CheckCircle>"
                          {feature}
                        <)
                      ))}
                    <

                    <h4 className=""font-semibold text-gray-900 mb-3">Benefits: <"
                    <ul className=""space-y-2"></ul>"
                      {service.benefits.map((benefit), idx) => (<li key={idx} className=""flex items-center text-gray-600"></li>"
                          <ArrowRight className=""w-5 h-5 text-blue-500 mr-2"></ArrowRight>"
                          {benefit}
                        <)
                      ))}
                    <

                    <h4 className=""font-semibold text-gray-900 mb-3">Benefits: <"
                    <ul className=""space-y-2"></ul>"
                      {service.benefits.map((benefit), idx) => (<li key={idx} className=""flex items-center"></li>"
                      <div className=""text-3xl font-bold text-blue-600 mb-2">{service.price}<"
                      <button className=""w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"></button>"
                        Get Started;
                      <
                    <

                  <
                <
              ))}
            <

          <

          {/* CTA Section *
          <section className=""py-16 px-4 sm: px-6 lg:px-8 bg-gray-50"></section>"
            <div className=""max-w-4xl mx-auto text-center"></div>"
              <h2 className=""text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?<"
              <p className=""text-xl text-gray-600 mb-8"></p>"
                Contact our experts for a free consultation and discover how we can help your business.
              <
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <button className=""bg-blue-600 text-white py-3 px-8 rounded-lg hove,"></button>"
    r:bg-blue-700 transition-colors">
                  <Mail className=""w-5 h-5 inline mr-2"></Mail>"
                  Email Us;
                <
              <
            <
          <

        <
        
        <Footer <></Footer>
    </React.Fragment>
  )};
    <
  );
};
export default ITConsultingPage;
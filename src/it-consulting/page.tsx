'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'Digital Transformation',
=======
;
const ITConsultingPage: React.FC = () => {
};
const consultingServices = [
[
        {
      titl,
    e: 'Digital Transformation',
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      description: 'Comprehensive digital transformation strategies to modernize your business operations.',
      icon: Brain,
      features: ['Technology Assessment', 'Digital Strategy Planning', 'Process Optimization', 'Change Management'],
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Better Customer Experience', 'Competitive Advantage'],
      price: 'Starting at $5,000/month'
    },
        {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and maximum security.',
      icon: Cloud,
      features: ['Cloud Architecture Design', 'Data Migration', 'Security Implementation', 'Performance Optimization'],
      benefits: ['Scalability', 'Cost Savings', 'Enhanced Security', 'Improved Performance'],
<<<<<<< HEAD
      price: 'Starting at $3,500/month'
    }
  ];
  return (<React.Fragment>
=======
      price: 'Starting at $3,500
    };
  ];
  return (<React .Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <Helmet></Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></meta>"
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /></meta>
      </Helmet>
      "
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation /></Navigation>"
        <main className="pt-24 pb-16 px-4"></main>"
          <div className="max-w-7xl mx-auto"></div>"
            <div className="text-center mb-16"></div>"
              <h1 className="text-4xl,"
  md: text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services,
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
<<<<<<< HEAD
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>)
                      ))}
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: bg-blue-700 transition-colors">
                        Get Started,
  </
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-16 px-4 sm: px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>
=======
              <
            <
            <div className="grid md: grid-cols-2 l,
    g:grid-cols-2 gap-8 mb-16">)
              {consultingServices.map((service), index) => (<div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <service .icon className="w-8 h-8 text-blue-600" 
                    <
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}<
                      <p className="text-gray-600">{service.description}<
                    <
                  <
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features: <
                    <ul className="space-y-2">)
                      {service.features.map((feature), idx) => (<li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" 
                          {feature};
                        <)
                      ))};
                    <
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits: <
                    <ul className="space-y-2">
                      {service.benefits.map((benefit), idx) => (<li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" 
                          {benefit};
                        <)
                      ))};
                    <
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits: <
                    <ul className="space-y-2">
                      {service.benefits.map((benefit), idx) => (<li key={idx} className="flex items-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}<
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                      <
                    <
                  <
                <
              ))};
            <
          <
          {/* CTA Section *
          <section className="py-16 px-4 sm: px-6 lg:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?<
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              <p className="text-xl text-gray-600 mb-8">
                Contact our experts for a free consultation and discover how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us
  </
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
  </
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  ),
}
export default ITConsultingPage;
  </button>
  </button>
  </button>
=======
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hove,
    r:bg-blue-700 transition-colors">
                  <Mail className="w-5 h-5 inline mr-2" 
                  Email Us
                <
              <
            <
          <
        <
        <Footer 
      <
    </React.Fragment>
  )};
export default ITConsultingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7

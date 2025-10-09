'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Users, Target, Zap, Shield, BarChart, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation roadmaps',
      features: ['Technology assessment', 'Digital transformation planning', 'IT governance', 'Risk analysis'],
      benefits: ['Aligned technology strategy', 'Reduced IT costs', 'Improved efficiency', 'Future-proof solutions'],
      price: '$2,500'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['Cloud architecture design', 'Data migration', 'Security implementation', 'Performance optimization'],
      benefits: ['Scalable infrastructure', 'Cost reduction', 'Enhanced security', 'Improved performance'],
      price: '$5,000'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Consulting Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." />
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT Consulting Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {consultingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      {service.benefits.map((benefit, idx) => (
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" />
                          {benefit}

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our experts for a free consultation and discover how we can help your business.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Us
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us
        </main>
        
        <Footer />
    </>
  );
};

export default ITConsultingPage;
  const services = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation roadmaps',
      features: ['Technology Assessment', 'Digital Roadmap', 'ROI Analysis', 'Risk Management']
    },
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Migration Planning', 'Cost Optimization', 'Security Design']
      icon: Shield,
      title: 'Cybersecurity Strategy',
      description: 'Comprehensive security assessments and implementation strategies',
      features: ['Security Audits', 'Compliance Planning', 'Incident Response', 'Training Programs']
      icon: Database,
      title: 'Data Management',
      description: 'Optimize data architecture and implement modern data solutions',
      features: ['Data Strategy', 'Database Design', 'Analytics Setup', 'Governance Planning']
      icon: Globe,
      title: 'Infrastructure Design',
      description: 'Design robust and scalable IT infrastructure solutions',
      features: ['Network Design', 'Server Architecture', 'Disaster Recovery', 'Performance Tuning']
      icon: Smartphone,
      title: 'Digital Transformation',
      description: 'Guide organizations through complete digital transformation',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training Programs']
    }
  ];

  const processSteps = [
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of current IT landscape, processes, and business requirements',
      icon: Target
      step: '02',
      title: 'Strategy Development',
      description: 'Create tailored IT strategy aligned with business goals and industry best practices',
      icon: BarChart
      step: '03',
      title: 'Implementation Planning',
      description: 'Detailed roadmap with timelines, resources, and milestones for successful execution',
      icon: Calendar
      step: '04',
      title: 'Execution & Support',
      description: 'Ongoing support and guidance throughout the implementation process',
      icon: CheckSquare

  const benefits = [
    { icon: TrendingUp, title: 'Cost Reduction', description: 'Optimize IT spending and reduce operational costs' },
    { icon: Zap, title: 'Efficiency Gains', description: 'Streamline processes and improve productivity' },
    { icon: Shield, title: 'Enhanced Security', description: 'Strengthen security posture and compliance' },
    { icon: BarChart, title: 'Better Performance', description: 'Improve system performance and reliability' },
    { icon: Users, title: 'Team Empowerment', description: 'Train and empower your IT team' },
    { icon: Award, title: 'Competitive Advantage', description: 'Gain strategic advantage through technology' }

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IT Consulting</span>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with expert IT consulting services. We provide strategic guidance, 
              technology roadmaps, and implementation support to drive digital transformation and growth.
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
                href="tel:+13024640950"
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
                <Phone className="mr-2 w-5 h-5" />
                (302) 464-0950
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT consulting solutions designed to address your unique business challenges 
              and drive sustainable growth through technology.

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
              Our Consulting Process
              A proven methodology that ensures successful IT transformation and sustainable results.

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

      {/* Benefits Section */}
              Why Choose Our IT Consulting?
              Partner with experienced IT consultants who understand both technology and business strategy.

            {benefits.map((benefit, index) => (
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Strategy?
          <p className="text-xl text-gray-300 mb-8">
            Get expert IT consulting services tailored to your business needs. 
            Schedule a free consultation to discuss your technology challenges and opportunities.
              Schedule Free Consultation
              href="mailto:kleber@ziontechgroup.com"
              <Mail className="mr-2 w-5 h-5" />



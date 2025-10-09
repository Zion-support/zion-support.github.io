import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Target, Users, BarChart, Shield, Zap } from 'lucide-react';
import { CheckCircle, Users, Target, Zap, Shield, BarChart, Clock, Award, ArrowRight, Brain, Cloud, Code, Database, Globe, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


  return (<>
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
  md:text-6xl font-bold text-gray-900 mb-6"></h1>
                IT Consulting Services;
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Transform your business with expert IT consulting. We provide strategic guidance, 
                digital transformation, and technology solutions that drive growth and efficiency.
              </p>
            </div>
"
            <div className="grid,
  md:grid-cols-2,"
  lg:grid-cols-2 gap-8 mb-16"></div>
              {/* TODO: Fix JSX expression */}"
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg,"
  hover:shadow-xl transition-shadow"></div>"
                  <div className="flex items-center mb-6"></div>"
                    <div className="p-3 bg-blue-100 rounded-xl mr-4"></div>"
                      <service.icon className="w-8 h-8 text-blue-600" /></service>
                    <div></div>"
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>"
                      <p className="text-gray-600">{service.description}</p>
                  "
                  <div className="mb-6"></div>"
                    <h4 className="font-semibold text-gray-900 mb-3">Key,
  Features:</h4>"
                    <ul className="space-y-2"></ul>
                      {/* TODO: Fix JSX expression */}"
                        <li key={idx} className="flex items-center text-gray-600"></li>"
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" /></CheckCircle>
                          {feature}
                        </li>)
                      ))}
                    </ul>
"
                    <h4 className="font-semibold text-gray-900 mb-3">Benefit,
  s:</h4>
                      {/* TODO: Fix JSX expression */}
                          {benefit}
"
                  <div className="text-center"></div>"
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>"
                    <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg,"
  hover:bg-blue-700 transition-colors"></button>
                      Get Started;
                    </button>
"
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT?</h2>"
              <p className="text-xl text-gray-600 mb-8"></p>
                Contact our experts for a free consultation and discover how we can help your business."
              <div className="flex flex-col,"
  sm:flex-row gap-4 justify-center"></div>"
                <button className="bg-blue-600 text-white py-3 px-8 rounded-lg,"
  hover:bg-blue-700 transition-colors"></button>"
                  <Phone className="w-5 h-5 inline mr-2" /></Phone>
                  Call Us;"
                <button className="bg-gray-600 text-white py-3 px-8 rounded-lg,"
  hover:bg-gray-700 transition-colors"></button>"
                  <Mail className="w-5 h-5 inline mr-2" /></Mail>
                  Email Us;
        </main>
        
        <Footer /></Footer>
    </>
  );
};

export default ITConsultingPage;
  const services = [
    {/* TODO: Fix JSX expression */}
    },
      ico,
  n: Cloud,
      titl,
  e: 'Cloud Architecture',
      descriptio,
  n: 'Design and implement scalable cloud solutions for modern businesses',
      feature,
  s: ['AWS/Azure/GCP', 'Migration Planning', 'Cost Optimization', 'Security Design']
      ico,
  n: Shield,
      titl,
  e: 'Cybersecurity Strategy',
      descriptio,
  n: 'Comprehensive security assessments and implementation strategies',
      feature,
  s: ['Security Audits', 'Compliance Planning', 'Incident Response', 'Training Programs']
      ico,
  n: Database,
      titl,
  e: 'Data Management',
      descriptio,
  n: 'Optimize data architecture and implement modern data solutions',
      feature,
  s: ['Data Strategy', 'Database Design', 'Analytics Setup', 'Governance Planning']
      ico,
  n: Globe,
      titl,
  e: 'Infrastructure Design',
      descriptio,
  n: 'Design robust and scalable IT infrastructure solutions',
      feature,
  s: ['Network Design', 'Server Architecture', 'Disaster Recovery', 'Performance Tuning']
      ico,
  n: Smartphone,
      titl,
  e: 'Digital Transformation',
      descriptio,
  n: 'Guide organizations through complete digital transformation',
      feature,
  s: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training Programs']
    }
  ];

  const processSteps = [
      ste,
  p: '01',
      titl,
  e: 'Discovery & Assessment',
      descriptio,
  n: 'Comprehensive analysis of current IT landscape, processes, and business requirements',
      ico,
  n: Target,
  step: '02',
      titl,
  e: 'Strategy Development',
      descriptio,
  n: 'Create tailored IT strategy aligned with business goals and industry best practices',
      ico,
  n: BarChart,
  step: '03',
      titl,
  e: 'Implementation Planning',
      descriptio,
  n: 'Detailed roadmap with timelines, resources, and milestones for successful execution',
      ico,
  n: Calendar,
  step: '04',
      titl,
  e: 'Execution & Support',
      descriptio,
  n: 'Ongoing support and guidance throughout the implementation process',
      ico,
  n: CheckSquare;
  const benefits = [
    {/* TODO: Fix JSX expression */}
  n: 'Optimize IT spending and reduce operational costs' },
    {/* TODO: Fix JSX expression */}
  n: 'Streamline processes and improve productivity' },
    {/* TODO: Fix JSX expression */}
  n: 'Strengthen security posture and compliance' },
    {/* TODO: Fix JSX expression */}
  n: 'Improve system performance and reliability' },
    {/* TODO: Fix JSX expression */}
  n: 'Train and empower your IT team' },
    {/* TODO: Fix JSX expression */}
  n: 'Gain strategic advantage through technology' }
"
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}"
      <section className="pt-24 pb-16 px-4,
  sm:px-6,"
  lg:px-8"></section>"
            <h1 className="text-4xl,"
  md:text-6xl font-bold text-white mb-6"></h1>"
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">IT Consulting</span>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Transform your business with expert IT consulting services. We provide strategic guidance, 
              technology roadmaps, and implementation support to drive digital transformation and growth.
              <a></a>"
                href="/contact""
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Get Free Consultation;"
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
              </a>"
                href="te,"
  l:+13024640950""
                className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold""
                <Phone className="mr-2 w-5 h-5" /></Phone>
                (302) 464-0950;
      </section>

      {/* Services Section */}"
      <section className="py-16 px-4,
  sm:px-6,"
  lg:px-8"></section>"
            <h2 className="text-3xl,"
  md:text-4xl font-bold text-white mb-4"></h2>
              Our IT Consulting Services;
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Comprehensive IT consulting solutions designed to address your unique business challenges;
              and drive sustainable growth through technology.
"
          <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-8"></div>
            {/* TODO: Fix JSX expression */}"
              <div key={index} className="cyber-card p-8,"
  hover:scale-105 transition-transform duration-300"></div>"
                <div className="flex items-center mb-4"></div>"
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4"></div>"
                    <service.icon className="w-6 h-6 text-white" /></service>"
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>"
                <p className="text-gray-300 mb-6">{service.description}</p>
                  {/* TODO: Fix JSX expression */}"
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400"></li>"
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" /></CheckCircle>
      {/* Process Section */}"
      <section className="py-16 px-4,
  sm:px-6,"
  lg:px-8 bg-slate-800/50"></section>
              Our Consulting Process;
              A proven methodology that ensures successful IT transformation and sustainable results.
"
          <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8"></div>
            {/* TODO: Fix JSX expression */}"
              <div key={index} className="text-center"></div>"
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                  <step.icon className="w-8 h-8 text-white" /></step>"
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>"
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>"
                <p className="text-gray-300">{step.description}</p>

      {/* Benefits Section */}
              Why Choose Our IT Consulting?
              Partner with experienced IT consultants who understand both technology and business strategy.

            {/* TODO: Fix JSX expression */}"
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>"
                <p className="text-gray-300">{benefit.description}</p>

      {/* CTA Section */}"
      <section className="py-16 px-4,
  sm:px-6,"
  lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50"></section>"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <h2 className="text-3xl,"
  md:text-4xl font-bold text-white mb-6"></h2>
            Ready to Transform Your IT Strategy?"
          <p className="text-xl text-gray-300 mb-8"></p>
            Get expert IT consulting services tailored to your business needs. 
            Schedule a free consultation to discuss your technology challenges and opportunities.
              Schedule Free Consultation;"
              href="mailt,"
  o:kleber@ziontechgroup.com""
              <Mail className="mr-2 w-5 h-5" /></Mail>"
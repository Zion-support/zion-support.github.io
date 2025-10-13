import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Globe } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

=======

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Web Development services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="web-development, AI solutions, IT services" />
      </Helmet>
      
=======
import { Code, Smartphone, Globe, Database, Shield, BarChart, Users, CheckCircle, ArrowRight, Cloud, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    {name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}]
const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart,},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code,},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe,},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield,}}
  ]
return (
    <>
  <SEOOptimizer;
        title="Web Development Services - Zion Tech Group";
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices.";

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400',},
    {title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400',},
    {title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400',},
    {title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400',},
    {title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400',}];
  const technologies = [
    {name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' ,},
    {name: 'Node.js', icon: Database, description: 'Server-side JavaScript' ,},
    {name: 'Python/Django', icon: Globe, description: 'Backend development' ,},
    {name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' ,},
    {name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' ,},
    {name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' ,}];
  const process = [
    {step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart;,},
    {step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code;,},
    {step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe;,},
    {step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield;,}]

  return (
    <>
  <SEOOptimizer;
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."

        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}canonicalUrl="https: //ziontechgroup.com/web-development",
      />
      <PerformanceOptimizer;
        enableImageOptimization={true}enableLazyLoading={true}enableCodeSplitting={true}enablePrefetching={true}/>
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}enableScreenReaderSupport={true}enableHighContrast={true}enableFocusManagement={true}/>
      <SecurityEnhancer>
      <Analytics>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
</div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>}</main>
          <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Web Development Services</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Build modern, scalable, and high-performance web applications with our expert development team.</p>
              From frontend to backend, we deliver solutions that drive business growth.</p>
        <main className="container mx-auto px-4 py-16 pt-24"></main>

          {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
            <h1>
              Web Development Services</h1>
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,</p>
              Build modern, scalable, and high-performance web applications with our expert development team.;
              From frontend to backend, we deliver solutions that drive business growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <a;

            <div className="flex flex-col sm: flex-row gap-4 justify-center"></section>,
              <a;
                href="/contact";
                className="cyber-button px-8 py-4 text-lg font-semibold hover: scale-105 transition-all duration-300";,
              >Start Your Project<a;
                href="tel: +13024640950";,
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300";,
              >Call +1 302 464 0950</a>
              >
                Start Your Project;
              </a>
              <a>

                Call +1 302 464 0950,
              </a>
            </div>,
          </section>,
,;
          {/* Services Grid */}/>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional web development services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive web development solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091

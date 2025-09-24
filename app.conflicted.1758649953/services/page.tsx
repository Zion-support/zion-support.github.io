import React from 'react';
import {
  ArrowRight;
  Cloud;
  Shield;
  Zap;
  Database;
  Brain;
  Globe;
} from 'lucide-react',
export const metadata = {
  title: 'Services - Zion Tech Group';
  description:,
    'Comprehensive AI, cloud infrastructure, and cybersecurity solutions for modern businesses.';
};
const services = [
  {
    icon: Brain;
    title: 'AI & Machine Learning';
    description:,
      'Custom AI solutions, machine learning models, and intelligent automation to transform your business processes.';
    features: [
      'Custom AI Development';
      'Machine Learning Models';
      'Natural Language Processing';
      'Computer Vision';
    ];
  };
  {
    icon: Cloud;
    title: 'Cloud Infrastructure';
    description:,
      'Scalable cloud solutions and infrastructure management to optimize performance and reduce costs.';
    features: [
      'AWS/Azure/GCP Setup';
      'Cloud Migration';
      'DevOps Automation';
      'Microservices Architecture';
    ];
  };
  {
    icon: Shield;
    title: 'Cybersecurity';
    description:,
      'Comprehensive security solutions to protect your digital assets and ensure compliance.';
    features: [
      'Security Audits';
      'Penetration Testing';
      'Compliance Management';
      'Incident Response';
    ];
  };
  {
    icon: Zap;
    title: 'Performance Optimization';
    description:,
      'Application and infrastructure optimization to maximize speed, efficiency, and user experience.';
    features: [
      'Code Optimization';
      'Database Tuning';
      'CDN Setup';
      'Monitoring Solutions';
    ];
  };
  {
    icon: Database;
    title: 'Data Solutions';
    description:,
      'Data engineering, analytics, and business intelligence solutions to unlock insights from your data.';
    features: [
      'Data Pipeline Design';
      'Analytics Dashboards';
      'Business Intelligence';
      'Data Warehousing';
    ];
  };
  {
    icon: Globe;
    title: 'Web Development';
    description:,
      'Modern, responsive web applications built with cutting-edge technologies and best practices.';
    features: [
      'React/Next.js Apps';
      'Full-Stack Development';
      'API Development';
      'Progressive Web Apps';
    ];
  };
],
export default function ServicesPage() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0'>,
      <div className='container mx-auto px-6 py-16'>,
        <div className='text-center mb-16'>,
          <h1 className='text-4xl md: text-5xl font-bold text-white mb-6'>,
            Our{' '}
            <span className='bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent'>,
              Services,
            </span>,
          </h1>,
          <p className='text-lg text-gray-30o0 max-w-3xl mx-auto'>,
            Comprehensive technology solutions designed to accelerate your,
            business growth and digital transformation.,
          </p>,
        </div>,
        <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>,
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-30o0'>,
              <div className='flex items-center mb-4'>,
                <div className='p-3 bg-gradient-to-r from-blue-50o0 to-purple-60o0 rounded-lg mr-4'>,
                  <service.icon className='w-6 h-6 text-white' />,
                </div>,
                <h3 className='text-xl font-semibold text-white'>,
                  {service.title}
                </h3>,
              </div>,
              <p className='text-gray-30o0 mb-4'>{service.description}</p>,
              <ul className='space-y-2'>,
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className='text-sm text-gray-40o0 flex items-center'>,
                    <ArrowRight className='w-4 h-4 mr-2 text-blue-40o0' />,
                    {feature}
                  </li>))}
              </ul>,
            </div>))}
        </div>,
        <div className='text-center'>,
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'>,
            <h2 className='text-2xl font-bold text-white mb-4'>,
              Ready to Get Started?,
            </h2>,
            <p className='text-gray-30o0 mb-6'>,
              Let's discuss how our solutions can transform your business.,
            </p>,
            <a
              href='/contact',
              className='bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center hover: from-blue-60o0 hover:to-purple-70o0 transition-all'>,
              Contact Us,
              <ArrowRight className='ml-2 w-5 h-5' />,
            </a>,
          </div>,
        </div>,
      </div>,
    </main>)}
,
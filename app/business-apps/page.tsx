'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';

import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Monitor, Cloud } from 'lucide-react;

';

const BusinessAppsPage: React.FC = () => {const features = [;';

    {
      ico,
    n: Brain,
      title: 'AI-Powered Solutions',
      description: Advanced AI technology to transform your business operations and improve efficiency
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: Lightning-fast processing and real-time analytics for optimal results
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: Bank-level security with encryption and compliance standards
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'    }

  ];

;

const benefits = [    'Custom mobile and web applications,;;

    'Cross-platform compatibility',
    'Modern UI/UX design',
    'Cloud-based deployment',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    Proven track record of success
  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
        <title>Page | Zion Tech Group<
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." 
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" 
      <

            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            <
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            <
          <

          <
        <
      <

            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            <
          <

          <
        <
      <

              Ready to Get Started?
            <
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            <
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                
                <Mail className="mr-2 h-5 w-5" 
                Email Us
              <
            <
          <
        <
      <
    <)  );

};

export default BusinessAppsPage;

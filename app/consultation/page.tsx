'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import { ArrowRight;, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
    {;,
icon: Brain,;,
title: 'AI-Powered Solutions',;,
description: 'Advanced artificial intelligence technology to transform your business operations.',;,

    },
    {;,
icon: BarChart,;,
title: 'Advanced Analytics',;,
description: 'Comprehensive analytics dashboard with real-time data visualization.',;,

    },
    {;,
icon: TrendingUp,;,
title: 'Performance Optimization',;,
description: 'AI-powered insights to optimize your business performance.',;,

    },
    {;,
icon: Target,;,
title: 'Precision Targeting',;,
description: 'Target specific goals and objectives with precision.',;,

  ];
;
const benefits = [;
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];
;
return (
    <div className="min-h-screen bg-gray-50">
      ;
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />

        {/* Hero Section */}
        <section></section>
          <div></div>
            <div></div>
              <h1>

              <div></div>
                <button>;
Get Started</button>
                  <ArrowRight className="ml-2 h-5 w-5" />

                <button>;
Learn More





        {/* Features Section */}</button>
        <section></section>
          <div></div>
            <div></div>
              <h2>Powerful Features</h2>
              <p>Everything you need to succeed with AI</p>
            <div>
              {features.map((feature), index) => (</div>
                <div></div>
                  <div></div>
                    <feature.icon className="h-8 w-8" />

                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p>{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit), benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}

                    ))}


              ))}



        {/* Benefits Section */}
        <section></section>
          <div></div>
            <div>

            <div>
              {benefits.map((benefit), index) => (</div>
                <div></div>
                  <div></div>
                    <Zap className="h-6 w-6 text-cyan-400" />

                  <p>{benefit}</p>
              ))}


        </section>;
Learn More





      <Footer />
    </>
  );
};


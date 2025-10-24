'use client';
:all-pages-backup/components/ServiceCard.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../../../../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';

const ServiceCardPage: React.FC = () => {
  const features = [
    {
:all-pages-backup/components/ServiceCard.tsx
      ico
  n: Brain
  title: title
  description: description
  benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
    icon: BarChart
  title: title
  description: description
  benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
    icon: Target
  title: title
  description: description
  benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
    icon: TrendingUp
  title: title
  description: description
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
      icon: Brain
      titl
  e: 'AI-Powered Intelligence'
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
    icon: BarChart
      titl
  e: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
    icon: Target
      titl
  e: 'Precision Targeting'
      description: 'Target specific goals and objectives with precision and accuracy.'
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
    icon: TrendingUp
      titl
  e: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
  ]

  return (
:all-pages-backup/components/ServiceCard.tsx
    <>
    ;
</>
      <Helmet>;
    <>
</>
      <Helmet>;
        <Head />
        <title>ServiceCard</title>
        <meta name=&quot;description&quot; content=&quot;Advanced ServiceCard solution for modern businesses.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ServiceCard, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;>
        {/* Hero Section */}
    
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;>
        <div className=&quot;relative max-w-7xl mx-auto text-center&quot;>
            <h1 className="text-4xl font-bold text-white mb-6">
              ServiceCard
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Advanced ServiceCard solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              
            
        
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features
              <p className="text-lg text-gray-300 mb-8">
                Powerful AI-driven features designed to transform your business operations
              
            </p>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-4 gap-8&quot;>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}
                  <p className="text-lg text-gray-300 mb-8">{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      
                    ))}
                  
                
              ))}
            
        
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution
              <p className="text-lg text-gray-300 mb-8">
                Experience the benefits of cutting-edge AI technology
              
            </p>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-3 gap-8&quot;>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className="text-lg text-gray-300 mb-8">{benefit}
                
              ))}
            
        
        {/* CTA Section */}</p>
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              
            
        
      
      <Footer />
</>
:all-pages-backup/components/ServiceCard.tsx
  )};

export default ServiceCardPage
  );
}
export default ServiceCardPage
price?: string
popular?: boolean
onSelect?: () =>void
class Nam e?: string}constServiceCard:React.FC<ServiceCardProp s>= ({title
description
features
price
:all-pages-backup/components/ServiceCard.tsx
popular= false
popular = false
onSelect
className = ''
}) => {</ServiceCardProp>
return (</ServiceCardProp>
}`}>{popular && (
<div className=&quot;flex items-center gap-2 mb-4&quot;>
<span className=&quot;text-purple-400 text-sm font-semibold&quot;>Most Popular</span>
)}
<h3 className=&quot;text-xl font-bold text-white mb-2 group-hover: text-purple-400 transition-colors&quot;>$3</h3>
<p className=&quot;text-gray-300 text-sm&quot;>{description}</p>
<CheckCircle className=&quot;w-4 h-4 text-green-400 flex-shrink-0&quot; /></CheckCircle>
<span className=&quot;text-gray-300 text-sm&quot;>{feature}</span>
))}
{price && (
<div className=&quot;mb-6&quot;>
)}
{onSelect && (
<button onClick = {onSelect};></button>
className=&quot;w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 group&quot;></button>
Get Started
<ArrowRight className=&quot;w-4 h-4 group-hove
)}
)
{}
export default ServiceCard
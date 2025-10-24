'use client';
:all-pages-backup/components/ResponsiveContainer.tsx
import Footer from '../../../../components/Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
interface ResponsiveContainerProps {;
  className?: string}
}
;
constResponsiveContainer= ({children
  class Nam e
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
    sm: sm
  md: md
  lg: lg
  xl: 'max-w-xl'
import Footer from './Footer';
import Navigation from './Navigation';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import React from 'react';
import { cn } from '../lib/utils';
interface ResponsiveContainerProps {;
  className?: string;}
}
;
constResponsiveContainer = ({children
  class Nam e
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses = {

    sm: 'max-w-sm'
    md: 'max-w-md'
    lg: 'max-w-lg'
    xl: 'max-w-xl'
    '2 xl': 'max-w-2 xl'
    '3 xl': 'max-w-3 xl'
    '4 xl': 'max-w-4 xl'
    '5 xl': 'max-w-5 xl'
    '6 xl': 'max-w-6 xl'
    '7 xl': 'max-w-7 xl'
    full: 'max-w-full'
  }

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ className = '' }) => {;</ResponsiveContainerProps>
  return (
    <>
</>
      <Helmet />
:all-pages-backup/components/ResponsiveContainer.tsx
        <Head />
        <title>ResponsiveContainer</title>
        <meta name=&quot;description&quot; content=&quot;Advanced ResponsiveContainer solution for modern businesses.&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, ResponsiveContainer, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;>
        {/* Hero Section */};
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;>
        <div className=&quot;relative max-w-7xl mx-auto text-center&quot;>
            <h1 className="text-4xl font-bold text-white mb-6">
              ResponsiveContainer
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Advanced ResponsiveContainer solution for modern businesses.
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
:all-pages-backup/components/ResponsiveContainer.tsx
  )};

export default ResponsiveContainerPage
  )};

export default ResponsiveContainer
  );
}
export default ResponsiveContainerPage
  );
}
export default ResponsiveContainer
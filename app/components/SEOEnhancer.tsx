'use client';
import Navigation from './Navigation';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' }) => {</SEOEnhancerProps>
  return (
    <>
      <Helmet />
        <title>SEOEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI, artificial intelligence, SEOEnhancer, AI solutions, intelligent automation" />
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
            {/* Hero Section */};
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
        <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              SEOEnhancer
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Professional SEOEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features
              <p className="text-lg text-gray-300 mb-8">
                Powerful AI-driven features designed to transform your business operations
              </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
                  <p className="text-lg text-gray-300 mb-8">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      
                    ))}
                  
              <br />
              <span className="text-white">Solutions
            
            <p className="text-lg text-gray-300 mb-8">
            Transform your business with our advanced seoenhancer solutions.
          
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove
  r:scale-105">
                Learn More
              
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl m
  d:text-4xl font-bold text-white mb-4">Why Choose Our SEOEnhancer?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our seoenhancer solutions deliver unmatched performance, security, and scalability.</p>p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 l
  g:grid-cols-4 gap-8">{features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
            <feature.icon className="h-6 w-6 text-white" />
              ))}
            
          
        
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution
              <p className="text-lg text-gray-300 mb-8">
                Experience the benefits of cutting-edge AI technology
              
            </p>
            <div className="grid md:grid-cols-2 l
  g:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300 mb-8">{benefit}
                </p>
        <div key=index className="flex items-start space-x-4"></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div><CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" /> </CheckCircle><p className="text-lg text-gray-300 mb-8">benefit
                
      
        
        {/* CTA Section */}</p>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-300 mb-8">{benefit}
              
      
      
      {/* CTA Section */}</p>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your seoenhancer needs and get a customized solution.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hove
  r:scale-105">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
            
        
      
      

  );
};

export default SEOEnhancer
}))))))

}
}
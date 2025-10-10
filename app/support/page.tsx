'use client';
import React from 'react';
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search } from 'lucide-react';
import Navigation from '../components
import Footer from '../components

const SupportPage: React.FC = () => {

  const faqs = [
    {
      questio,
    n: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24
      categor,
    y: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      hours: '24
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      contact: 'Available on website',
      availability: '24
    }
  ];

  return (<div>
        <title>Support - Zion Tech Group | Technical Support & Help<
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." 
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" 
      <

        {/* Hero Section *
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">

              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">

              <
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            <
          <
        <

        {/* Search Section *
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?<
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team<
            <
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value = { searchQuery };
                  onChange = { (e) => setSearchQuery(e.target.value) };
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                
              <
            <
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (<button
                  key = { category.id };)
                  onClick = { () => setSelectedCategory(category.id) };
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white
                  }`}
                >
                  {category.name}
                <
              ))}
            <
          <
        <

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">
                Get in Touch
              <
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              <
            <
            <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">
              {supportChannels.map((channel), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}<
                  <p className="text-gray-300 mb-4">{channel.description}<
                  <p className="text-cyan-400 font-medium">{channel.contact}<
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}<
                <)
              ))}
            <
          <
        <

        {/* FAQ Section *
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions<
              <p className="text-xl text-gray-300">Find answers to common questions<
            <
            <div className="space-y-6">
              {faqs.map((faq, index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}<
                  <p className="text-gray-300">{faq.answer}<
                <)
              ))}
            <
          <
        <

        {/* Support Hours *
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours<
                <p className="text-xl text-gray-300">We're here when you need us<
              <
              <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Emergency Support<
                  <p className="text-gray-300">24/7 for critical issues<
                  <p className="text-gray-300">Emergency support included<
                <
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries<
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM<
                  <p className="text-gray-300">Saturday: 10:00 AM - ,
    4:00 PM<
                <
              <
            <
          <
        <
      <
      
      <Footer 
    <
  );
};

export default SupportPage;

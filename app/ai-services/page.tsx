import React from 'react';
import React from 'react';
import React from 'react';
import { Helmet  } from "react-helmet-async";
import { Brain, BarChart3, Zap, FileText, MessageSquare, Star, Right  } from "lucide-react";
import FuturisticBackground from '../components/FuturisticBackground';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and develop AI roadmaps.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description: "Advanced analytics solutions powered by machine learning and AI algorithms.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Intelligent automation solutions to streamline your business processes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "AI Content Generation",
      description: "AI-powered content creation for marketing, documentation, and communication.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: MessageSquare,
      title: "AI Customer Service",
      description: "Intelligent chatbots and customer service solutions powered by AI.",
      color: "from-indigo-500 to-purple-500",
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet >
        <title>AI Services - Comprehensive AI Solutions | Zion Tech Group</>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare" />
        <meta name="canonical" content="https://ziontechgroup.com/ai-services" />
      </>
      <FuturisticBackground >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-7 xl mx-auto text-center">
              <h1 className="text-5 xl md:text-7 xl font-bold text-white mb-6">
                AI
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Services
                </>
              </>
              <p >
                Transform your business with our comprehensive AI services.
                From analytics to automation, we provide cutting-edge AI solutions.
              </>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started
                  <Right className="w-5 h-5 ml-2 inline" />
                </>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Learn More
                </>
              </>
            </>
          </>
          {/* Services Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7 xl mx-auto">
              <h2 className="text-4 xl font-bold text-white text-center mb-16">
                Our AI Services
              </>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2 xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service .icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{service.title}</>
                    <p>{service.description}</>
                  </>
                ))}
              </>
            </>
          </>
          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7 xl mx-auto">
              <h2 className="text-4 xl font-bold text-white text-center mb-16">
                What Our Clients Say
              </>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2 xl p-6 border border-slate-700/50">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </>
                    <p>&ldquo;{testimonial.content}&rdquo;</>
                    <div >
                      <p>{testimonial.name}</>
                      <p>{testimonial.role}, {testimonial.company}</>
                    </>
                  </>
                ))}
              </>
            </>
          </>
          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4 xl mx-auto text-center">
              <h2 className="text-4 xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </>
              <p >
                Join hundreds of companies already using our AI services to drive innovation and growth.
              </>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Start Your AI Journey
                  <Right className="w-5 h-5 ml-2 inline" />
                </>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Consultation
                </>
              </>
            </>
          </>
        </>
      </>
    </>
  );
};

export default AiServicesPage;
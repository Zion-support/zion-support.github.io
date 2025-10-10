'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const EnhancedPerformanceOptimizer: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Lightning Fast Loading',
      description: 'Optimized code and assets for maximum performance and speed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Advanced Security',
      description: 'Enterprise-grade security measures to protect your data.'
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Intelligent performance monitoring and automatic optimization.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global CDN',
      description: 'Worldwide content delivery for optimal user experience.'
    }
  ]
  const benefits = [
    '50% faster page load times',
    '99.9% uptime guarantee',
    'Real-time performance monitoring',
    'Automatic optimization',
    'Mobile-first responsive design',
    'SEO optimized structure'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced Performance Optimizer - Zion Tech Group</title>
        <meta name="description" content="Advanced performance optimization solutions for your business" />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced Performance Optimizer

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Maximize your application's performance with our advanced optimization solutions.

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Started

            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us




      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive performance optimization solutions tailored to your needs.


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}

                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

            ))}



      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhanced performance optimizer solutions for your business.


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>

            ))}



      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Performance?

            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your performance optimization needs and get a customized solution.

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now

              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us






  )
}
export default EnhancedPerformanceOptimizer
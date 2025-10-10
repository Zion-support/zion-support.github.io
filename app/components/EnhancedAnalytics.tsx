'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const EnhancedAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your business performance with our advanced analytics platform.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: 'Data Security',
      description: 'Enterprise-grade security measures to protect your valuable business data.'
    },
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and opportunities.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Analytics',
      description: 'Monitor and analyze data from multiple sources and locations worldwide.'
    }
  ]
  const benefits = [
    'Real-time data visualization',
    'Custom dashboard creation',
    'Predictive analytics',
    'Automated reporting',
    'Multi-source data integration',
    'Advanced data filtering'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Enhanced Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced analytics solutions for your business" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enhanced Analytics

              <br />
              <span className="text-white">Solutions</span>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced analytics solutions. 
              Powered by cutting-edge AI technology and industry expertise.

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />

              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More





      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics solutions tailored to your business needs.


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
              Experience the power of our enhanced analytics solutions for your business.


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>

            ))}



      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-600/10 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?

            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your analytics needs and get a customized solution.

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now

              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us






  )
}
// Analytics Service
class AnalyticsService {
  private initialized = false
  init() {
    if (this.initialized) return
    // Initialize analytics tracking
    if (typeof window !== 'undefined') {
      // Add analytics tracking code here
      console.log('Analytics service initialized')
    }
    
    this.initialized = true
  }

  trackEvent(eventName: string, properties?: Record<string, any>) {
    if (typeof window !== 'undefined') {
      // Track event implementation
      console.log('Event tracked:', eventName, properties)
    }
  }
}

const analyticsService = new AnalyticsService()
// Analytics Provider Component
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    analyticsService.init()
  }, [])
  return <>{children}</>
}
export const useAnalytics = () => {
  return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService)
  }
}
export default EnhancedAnalyticsPage
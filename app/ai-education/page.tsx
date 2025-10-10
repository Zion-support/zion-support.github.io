'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components
import Footer from '../components
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
;
const AiEducationPage: React.FC = () => {const features = [
    {
      ico,
    n: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];
;
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Ai Education - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai education solution for modern businesses. />"
        <meta name="keywords" content="AI ai education, artificial intelligence, ai education, AI solutions, intelligent automation />"
      </Helmet>
  return (<div>
        <title>Ai Education - Zion Tech Group<
        <meta name="description" content="Advanced AI-powered ai education solution for modern businesses." 
        <meta name="keywords" content="AI ai education, artificial intelligence, ai education, AI solutions, intelligent automation" 
      <>

        {/* Hero Section *</meta>        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} 
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              Ai Education
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai education solution for modern businesses.
            <
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              <
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              <
            <
          <
        <

        {/* Features Section *
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 l,">
    g:grid-cols-4 gap-8">
              {features.map((feature), index) => (</div>                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white"
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hove,"
    r:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}<
                  <p className="text-gray-300 mb-4">{feature.description}<
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 />"
                          {benefit}
                        </li>
                      ))
                    </ul>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4">
                      {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white />"
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))
            </div>
          </div>
        </section>
            <div className="grid grid-cols-1 md:grid-cols-2 l,"
    g:grid-cols-3 gap-8">
              {benefits.map((benefit), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white"
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hove,"
    r:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" 
                  <
                  <p className="text-lg text-white font-medium">{benefit}<
                <)
              ))}
            <
          <
        <

        {/* CTA Section *
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white"
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              <
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                <
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hove,">
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More</button>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>)

                <
              <
            <
          <
        <
      <
      <Footer 
    <
  );>
};
</Footer>export default AiEducationPage;
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const EnhancedSEOOptimizerPage: React.FC = () => {
  const features = [
    {
      ico,
  n: Brain,
  title: title,
  description: description,
  benefits: ['Keyword optimization', 'Content analysis', 'Ranking predictions', 'Competitor insights']
    },
  {
    icon: BarChart,
  title: title,
  description: description,
  benefits: ['Ranking tracking', 'Traffic analysis', 'Conversion metrics', 'ROI reporting']
    },
  {
    icon: Target,
  title: title,
  description: description,
  benefits: ['Keyword research', 'Audience targeting', 'Content optimization', 'Link building']
    },
  {
    icon: TrendingUp,
  title: title,
  description: description,
  benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Reduce SEO costs by 50% with automation',
    'Improve search rankings with AI insights',
    'Scale SEO efforts without proportional resource increases',
    'Gain competitive advantage with advanced SEO technology'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}</div>
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-4xl md: text-6xl font-bold text-gray-900 mb-6"></h1>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Enhanced SEO Optimizer</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Boost your search engine rankings with our AI-powered SEO optimization tools and strategies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started</button>
              <ArrowRight className="w-8 h-8" /></ArrowRight>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove,
  r: text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More</button>
          </div>
      </section>,
,
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our SEO Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive SEO optimization tools designed to boost your search engine rankings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 l,
  g: grid-cols-4 gap-8">
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4"></div>
                  <feature.icon className="h-6 w-6 text-white" /></feature>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600"></li>
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      {benefit}</CheckCircle>
                  ))};
                </ul>;
              </div>;
            ))};
          </div>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
          </div>
      </section>,
,
      {/* Benefits Section */}
      <section className = "py-20 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our SEO Optimizer?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven track record and innovative approach deliver measurable results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 l,
  g: grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" /></CheckCircle>
                <p className="text-gray-700 text-lg">{benefit}</p>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Boost Your SEO Rankings?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our SEO optimizer can help you achieve better search engine visibility.</p>
          <button className="bg-blue-600 hove,
  r: bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto">
            Start Your Journey</button>
            <ArrowRight className="w-8 h-8" /></ArrowRight>
        </div>
    </div>,
  ),
}

export default EnhancedSEOOptimizerPage;
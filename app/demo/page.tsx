<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
<<<<<<< HEAD
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react;

import Navigation from ../components
import Footer from ../components
;

const DemoPage: React.FC = () => {const demos = [;

const DemoPage: React.FC = () => {
  const demos = [    {;
      title: 'AI Analytics Dashboard,
      description: 'See how our AI analytics can transform your business intelligence,
      duration: '5 min,
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports]
    },
    {
      id: 'ai-chatbot,
      title: 'AI Customer Service Bot,
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.,
      features: [
        'Natural language understanding,
        'Multi-language support,
        24
        Seamless handoff to humans
      ],
      icon: Users,
      duration: '3 min demo,
      category: 'AI Solutions
    },    {
      title: 'AI Content Generation,
      description: 'Watch our AI create high-quality content in seconds,
      duration: '4 min,
      features: ['Blog posts', 'Social media content', 'Product descriptions]
=======
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;

const $1Page: React.FC = () => {}
  const demos = [

const DemoPage: React.FC = () => {}
  const demos = [
    {}
      title: 'AI Analytics Dashboard',
      description: 'See how our AI analytics can transform your business intelligence',
      duration: '5 min',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom reports']
    },
    {}
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot handles customer inquiries with natural language processing.',
      features: []
        'Natural language understanding',
        'Multi-language support',
        '24
        'Seamless handoff to humans'
      ],
      icon: Users,
      duration: '3 min demo',
      category: 'AI Solutions'
    },
    {}
      title: 'AI Content Generation',
      description: 'Watch our AI create high-quality content in seconds',
      duration: '4 min',
      features: ['Blog posts', 'Social media content', 'Product descriptions']
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

  ];
>>>>>>> origin/cursor/ad-creation-and-management-f267

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
=======
'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Star } from 'lucide-react';
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: ['Real-time data visualization', 'Predictive analytics', 'Custom dashboards', 'Automated reporting']
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Experience intelligent automation that streamlines your business processes.',
      features: ['Process automation', 'Smart workflows', 'AI chatbots', 'Predictive maintenance']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Explore our comprehensive cloud infrastructure and migration services.',
      features: ['Cloud migration', 'Infrastructure as Code', 'DevOps automation', 'Security monitoring']
    }
  ];

const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      content: 'The AI dashboard demo showed us exactly how we could transform our data analytics. Incredible insights!',

company: 'DataFlow Inc',
      role: 'CTO',
      content: 'The quantum computing demo was mind-blowing. We could see immediate applications for our optimization problems.',

return (

    <>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Interactive demos by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Demos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience our solutions through interactive demonstrations.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Chatbot Demo</h3>
              <p className="text-gray-600">
                Try our AI chatbot and see how it can help your business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Explore our analytics dashboard with sample data.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile App Preview</h3>
              <p className="text-gray-600">
                Preview our mobile applications and their features.
              </p>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/clean-main-20251013-145848
        </div>
      </div>
    </div>
  );
}
=======
      {/* Testimonials *}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say<
            <p className="text-xl text-gray-300">See how our demos led to successful implementations<
          <
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {testimonials.map((testimonial), index) => (<div key={index} className="bg-white/5 backdrop-blur-sm border border-white
                <div className="flex items-center mb-4">)
                  {[...Array(testimonial.rating)].map((_, i) => (}
                  "{testimonial.quote}"
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                <
                <div>
                  <div className="font-semibold text-white>{testimonial.name}<
                  <div className="text-sm text-gray-400>{testimonial.role}, {testimonial.company}<
                <
              <
            ))}

          <
        <
      <

<<<<<<< HEAD
      {/* CTA Section *
      <section className="py-20 px-4>
        <div className="max-w-4xl mx-auto text-center>
          <h2 className="text-4xl font-bold text-white mb-6>
=======
      {/* CTA Section *}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
            Ready to See More?
          <
          <p className="text-xl text-gray-300 mb-8>
            Schedule a personalized demo with our experts. Well show you exactly 
            how our solutions can address your specific business needs.
          <
          <div className="flex flex-col sm: flex-row gap-4 justify-center>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105>
              Schedule Live Demo
            <
            <button className=border border-purple-400 text-purple-400 hover:bg-purple-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300>
              Contact Sales
            <
          <
        <
      <

      <Footer 
    <
    </React.Fragment>)
  );};
=======

const DemoPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Demo services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Demo</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8

export default DemoPage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Demo List */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>
                {demos.map((demo) => (
                  <div
                    key={demo.id}
                    className={`cyber-card p-6 cursor-pointer transition-all ${
                      selectedDemo === demo.id ? 'ring-2 ring-cyan-500' : ''
                    }`}
                    onClick={() => setSelectedDemo(demo.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                        <p className="text-gray-300 mb-4">{demo.description}</p>
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ml-4">
                        <Play className="w-6 h-6 text-cyan-400" />
                      </div>
                ))}
              </div>

              {/* Demo Preview */}
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title} Demo
                </h3>
                <div className="bg-gray-800 rounded-lg p-8 mb-6 text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300 mb-4">
                    Interactive demo coming soon. Contact us to schedule a live demonstration.
                  </p>
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Schedule Live Demo
                  </button>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">What you'll see:</h4>
                  <ul className="space-y-2">
                    {demos.find(d => d.id === selectedDemo)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to See More?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>
    </>
);
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9

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

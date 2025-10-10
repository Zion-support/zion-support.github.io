'use client';
import React from 'react';
import { CheckCircle, Clock, Users, BarChart, Target, Calendar, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AITaskManagerPage: React.FC = () => {
  const features = [
    {
      title: 'Smart Task Prioritization',
      description: 'AI automatically prioritizes tasks based on deadlines, importance, and dependencies.',
      icon: Target
  },
    {
      title: 'Intelligent Scheduling',
      description: 'Automatically schedule tasks based on your availability and workload capacity.',
      icon: Calendar
  },
    {
      title: 'Progress Tracking',
      description: 'Real-time progress monitoring with predictive analytics and completion estimates.',
      icon: BarChart
  },
    {
      title: 'Team Collaboration',
      description: 'Seamless team coordination with automated task assignment and communication.',
      icon: Users
  },
    {
      title: 'Time Optimization',
      description: 'AI learns your work patterns to suggest optimal time blocks for different task types.',
      icon: Clock
  },
    {
      title: 'Performance Analytics',
      description: 'Detailed insights into productivity patterns and efficiency improvements.',
      icon: TrendingUp
  }
  ];

  const benefits = [
    '40% Increase in Productivity',
    '60% Reduction in Missed Deadlines',
    '85% Improvement in Task Completion Rate',
    'Real-time Collaboration',
    'Smart Notifications',
    'Mobile & Desktop Sync'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Task Manager</h1> <span className="text-cyan-400">Pro</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Revolutionize your productivity with AI-powered task management. Smart prioritization,</p>
              intelligent scheduling, and seamless team collaboration in one powerful platform.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial<a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">,
              AI Task Manager <span className="text-cyan-400">Pro</span>)
            </h1>)
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
              Revolutionize your productivity with AI-powered task management. Smart prioritization),
              intelligent scheduling, and seamless team collaboration in one powerful platform.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Start Free Trial;
              </a>
              <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Call +1 302 464 0950;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features<p className="text-xl text-gray-300">Everything you need to manage tasks efficiently<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300">{feature.description}</p>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage tasks efficiently</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover: border-cyan-400/40 transition-all duration-300">,
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2><p className="text-xl text-gray-300">Everything you need to manage tasks efficiently</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Task Manager Pro?<p className="text-xl text-gray-300">Proven results and cutting-edge technology<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Task Manager Pro?</h2>
            <p className="text-xl text-gray-300">Proven results and cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Task Manager Pro?</h2><p className="text-xl text-gray-300">Proven results and cutting-edge technology</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your needs</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 text-center"></div>
            <div className="mb-8"></div>
              <h3 className="text-3xl font-bold text-white mb-2">AI Task Manager Pro</h3>
              <div className="text-5xl font-bold text-cyan-400 mb-2">$49</div><span className="text-xl text-gray-300">/month</span><p className="text-gray-300">Per user, billed monthly</p>
            </div>

            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Unlimited tasks and projects</CheckCircle>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >AI-powered prioritization</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Team collaboration tools</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300"></l>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >Advanced analytics</CheckCircl>
              </CheckCircle>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" >24/7 support<a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Get Started Today</a>
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Unlimited tasks and projects;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                AI-powered prioritization;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Team collaboration tools;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                Advanced analytics;
              </li>
              <li className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                24/7 support;
              </li>
            </ul>

            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Get Started Today;
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Productivity?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of teams already using AI Task Manager Pro to boost their productivity and achieve more.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">Start Free Trial<a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">Call +1 302 464 0950</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Start Free Trial;
            </a>
            <a href="tel:+13024640950" className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
              Call +1 302 464 0950;
            </a>
          </div>
        </div>
      </section>

      <Footer />,
    </div>);
};

export default AITaskManagerPage;
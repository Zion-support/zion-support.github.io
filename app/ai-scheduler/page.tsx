'use client';
import React, { useState } from 'react';
import { Calendar, Clock, Users, Zap, CheckCircle, Star, ArrowRight, Brain, Smartphone, Mail, Bell, Shield } from 'lucide-react';
import Link from 'next/link';

const AIScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isScheduling, setIsScheduling] = useState(false);

  const handleSchedule = async () => {
    setIsScheduling(true);
    // Simulate AI scheduling
    setTimeout(() => {
      setIsScheduling(false);
      alert('Meeting scheduled successfully!');
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Scheduling",
      description: "Intelligent calendar management with smart conflict resolution"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Schedule meetings across teams with automatic availability detection"
    },
    {
      icon: Clock,
      title: "Time Zone Intelligence",
      description: "Automatic time zone conversion for global teams"
    },
    {
      icon: Mail,
      title: "Smart Notifications",
      description: "Automated reminders and follow-ups via email and SMS"
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Seamless sync with all your devices and calendar apps"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security with data encryption"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: 19,
      period: "month",
      description: "Perfect for individuals",
      features: [
        "1 calendar",
        "Basic scheduling",
        "Email reminders",
        "Mobile app",
        "5 meeting types",
        "Standard support"
      ],
      popular: false
    },
    {
      name: "Team",
      price: 49,
      period: "month",
      description: "Ideal for small teams",
      features: [
        "5 calendars",
        "Advanced AI scheduling",
        "Team coordination",
        "SMS notifications",
        "Unlimited meeting types",
        "Priority support",
        "Integration APIs",
        "Custom branding"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 149,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited calendars",
        "Full AI suite",
        "Advanced analytics",
        "Custom integrations",
        "24/7 phone support",
        "White-label solution",
        "Dedicated account manager",
        "Custom training"
      ],
      popular: false
    }
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: false },
    { time: '3:00 PM', available: true },
    { time: '4:00 PM', available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              AI-Powered Scheduling Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI Scheduler
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Never miss another meeting with our intelligent scheduling assistant. 
              AI-powered calendar management that works around your schedule and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demo" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Try Scheduler
              </Link>
              <Link href="#pricing" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Schedule a Meeting</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Meeting Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Meeting Title</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-green-400 focus:outline-none"
                      placeholder="Enter meeting title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-green-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-green-400 focus:outline-none">
                      <option>30 minutes</option>
                      <option>1 hour</option>
                      <option>1.5 hours</option>
                      <option>2 hours</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Available Times</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      disabled={!slot.available}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        slot.available
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={handleSchedule}
                  disabled={isScheduling}
                  className="w-full mt-4 cyber-button"
                >
                  {isScheduling ? 'Scheduling...' : 'Schedule Meeting'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Smart Scheduling Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage your time and schedule efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your scheduling needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
              plan.popular 
                ? 'border-green-400 shadow-2xl shadow-green-500/20' 
                : 'border-gray-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'cyber-button'
                  : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-12 text-center border border-green-500/20">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Master Your Schedule?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our AI scheduler to manage their time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScheduler;
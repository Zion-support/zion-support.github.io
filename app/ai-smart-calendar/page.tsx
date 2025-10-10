'use client';
import React from 'react';
import { Calendar, Clock, Zap, Users, BarChart3, CheckCircle, ArrowRight, Bell, Smartphone, Globe } from 'lucide-react';

const AISmartCalendarProPage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI-powered scheduling that automatically finds optimal meeting times for all participants.'
    },
    {
      icon: Clock,
      title: 'Time Zone Management',
      description: 'Automatic time zone detection and conversion for global teams and clients.'
    },
    {
      icon: Zap,
      title: 'Smart Reminders',
      description: 'Context-aware reminders that adapt to your work patterns and preferences.'
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Advanced team scheduling with conflict resolution and resource optimization.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on time usage, meeting patterns, and productivity trends.'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Intelligent notifications that reduce noise and focus on what matters most.'
    }
  ];

  const benefits = [
    'Save 2+ hours per week on scheduling',
    'Reduce meeting conflicts by 80%',
    'Improve team productivity by 35%',
    'Automate routine calendar tasks',
    'Enhance work-life balance',
    'Integrate with 100+ apps and tools'
  ];

  const useCases = [
    {
      title: 'Executive Assistants',
      description: 'Streamline complex scheduling for executives and busy professionals.',
      icon: '👔'
    },
    {
      title: 'Sales Teams',
      description: 'Optimize client meetings and follow-up scheduling for sales success.',
      icon: '💼'
    },
    {
      title: 'Project Managers',
      description: 'Coordinate team schedules and project milestones efficiently.',
      icon: '📋'
    },
    {
      title: 'Remote Teams',
      description: 'Manage distributed teams across different time zones and locations.',
      icon: '🌍'
    }
  ];

  const metrics = [
    { label: 'Time Saved', value: '2.5hrs', color: 'text-green-400' },
    { label: 'Conflict Reduction', value: '80%', color: 'text-blue-400' },
    { label: 'Productivity Gain', value: '+35%', color: 'text-purple-400' },
    { label: 'User Satisfaction', value: '97%', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart Calendar
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {' '}Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent calendar management that automates scheduling, optimizes your time, 
              and enhances productivity with AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border border-blue-400 text-blue-400 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Real improvements from our AI smart calendar platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-gray-300 text-lg">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive calendar management powered by advanced artificial intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-6 inline-block">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your calendar management with measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Implementation Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="text-white font-semibold">Week 1: Setup</div>
                    <div className="text-gray-300 text-sm">Configure calendar integrations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="text-white font-semibold">Week 2: Training</div>
                    <div className="text-gray-300 text-sm">Train AI models on your patterns</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <div className="text-white font-semibold">Week 3: Optimization</div>
                    <div className="text-gray-300 text-sm">Fine-tune settings and preferences</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <div className="text-white font-semibold">Week 4: Go Live</div>
                    <div className="text-gray-300 text-sm">Full AI calendar deployment</div>
                  </div>
                </div>


<!-- Merged from origin/main -->
import React from 'react';
import { Helmet } from 'react-helmet-async';

const aismartcalendarPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ai Smart Calendar | Zion Tech Group</title>
        <meta name="description" content="Professional ai smart calendar services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="ai smart calendar, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ai Smart Calendar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ai smart calendar services powered by advanced AI and cutting-edge technology.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team</h3>
                  <p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <a 
                href="/contact" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <div>
                <a 
                  href="/" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  ← Back to Home
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by professionals and teams worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Calendar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the calendar revolution with AI-powered intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/pricing"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISmartCalendarProPage;


<!-- Merged from origin/main -->
      </div>
    </>
  );
};

export default aismartcalendarPage;


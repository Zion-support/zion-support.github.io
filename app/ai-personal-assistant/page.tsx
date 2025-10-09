'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, User, Calendar, Mail as MailIcon, Clock, Shield, Brain, Zap, Target, BarChart, Users, Star, ArrowRight, Globe } from 'lucide-react';

const AIPersonalAssistantPage: React.FC = () => {
  const personalAssistantServices = [
    {
      title: 'AI Executive Assistant Pro',
      description: 'Advanced AI-powered personal assistant for executives with email management, scheduling, and task automation.',
      icon: '👔',
      price: '$199/month',
      features: [
        'Smart Email Management',
        'Intelligent Scheduling',
        'Task Automation',
        'Meeting Preparation',
        'Travel Planning',
        'Expense Tracking',
        'Document Organization',
        'Voice Commands'
      ],
      benefits: [
        'Save 20+ hours per week',
        'Improve productivity by 300%',
        'Never miss important tasks',
        'Streamline daily operations',
        'Reduce stress and overwhelm'
      ],
      marketPrice: '$300-800/month',
      category: 'Personal Productivity',
      technologies: ['OpenAI GPT-4', 'Natural Language Processing', 'Calendar APIs', 'Email APIs', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-executive-assistant',
      popular: true,
      stats: {
        users: '500+',
        timeSaved: '20+ hours/week',
        productivityGain: '300%',
        satisfaction: '98%'
      }
    },
    {
      title: 'AI Meeting Scheduler',
      description: 'Intelligent meeting scheduling with conflict resolution, time zone management, and automated follow-ups.',
      icon: '📅',
      price: '$99/month',
      features: [
        'Smart Scheduling',
        'Conflict Resolution',
        'Time Zone Management',
        'Meeting Reminders',
        'Follow-up Automation',
        'Calendar Integration',
        'Meeting Analytics',
        'Custom Preferences'
      ],
      benefits: [
        'Eliminate scheduling conflicts',
        'Save 10+ hours per week',
        'Improve meeting efficiency',
        'Reduce no-shows by 60%'
      ],
      marketPrice: '$150-400/month',
      category: 'Scheduling Tools',
      technologies: ['Calendar APIs', 'Machine Learning', 'React', 'Node.js', 'WebRTC'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-meeting-scheduler'
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with automated responses, priority sorting, and intelligent filtering.',
      icon: '📧',
      price: '$149/month',
      features: [
        'Automated Email Responses',
        'Priority Email Sorting',
        'Smart Filtering',
        'Email Templates',
        'Follow-up Reminders',
        'Spam Detection',
        'Email Analytics',
        'Multi-account Management'
      ],
      benefits: [
        'Reduce email overload by 70%',
        'Respond to emails 5x faster',
        'Never miss important emails',
        'Improve email organization'
      ],
      marketPrice: '$200-600/month',
      category: 'Email Management',
      technologies: ['Gmail API', 'Outlook API', 'Machine Learning', 'NLP', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-email-assistant'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline tracking, and productivity insights.',
      icon: '✅',
      price: '$79/month',
      features: [
        'AI Task Prioritization',
        'Deadline Tracking',
        'Progress Monitoring',
        'Team Collaboration',
        'Productivity Analytics',
        'Habit Tracking',
        'Goal Setting',
        'Time Tracking'
      ],
      benefits: [
        'Increase task completion by 80%',
        'Improve time management',
        'Achieve goals faster',
        'Boost team productivity'
      ],
      marketPrice: '$100-300/month',
      category: 'Task Management',
      technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-task-manager'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Personal Assistant Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered personal assistant solutions including executive assistants, meeting schedulers, email management, and task automation. Boost your productivity with intelligent automation." />
        <meta name="keywords" content="AI personal assistant, executive assistant, meeting scheduler, email management, task automation, productivity tools" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-personal-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Personal Assistant Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Boost Your Productivity with AI Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Advanced AI-powered personal assistant solutions that automate your daily tasks, 
              manage your schedule, and boost your productivity. Transform your workflow with intelligent automation.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400">500+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">20+</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">300%</div>
                <div className="text-gray-300">Productivity Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400">98%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our AI Personal Assistant Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalAssistantServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 text-center mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-center text-sm">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and see how AI can revolutionize your personal productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-2 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPersonalAssistantPage;
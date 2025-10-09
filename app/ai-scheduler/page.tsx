import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Calendar, Clock, Zap, Users, BarChart } from 'lucide-react';

const AISchedulerPage: React.FC = () => {
  const schedulerFeatures = [
    {
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that optimizes time slots based on preferences and availability.',
      icon: '🤖',
      benefits: [
        'Smart time optimization',
        'Conflict resolution',
        'Preference learning',
        'Automatic rescheduling'
      ]
    },
    {
      title: 'Multi-Calendar Sync',
      description: 'Sync with Google Calendar, Outlook, and other calendar platforms seamlessly.',
      icon: '📅',
      benefits: [
        'Google Calendar integration',
        'Outlook sync',
        'Apple Calendar support',
        'Real-time updates'
      ]
    },
    {
      title: 'Meeting Optimization',
      description: 'AI suggests optimal meeting times and durations based on participant patterns.',
      icon: '⏰',
      benefits: [
        'Optimal time suggestions',
        'Duration optimization',
        'Participant analysis',
        'Productivity insights'
      ]
    },
    {
      title: 'Automated Reminders',
      description: 'Smart reminder system that adapts to user preferences and meeting types.',
      icon: '🔔',
      benefits: [
        'Customizable reminders',
        'Multi-channel notifications',
        'Escalation rules',
        'Smart timing'
      ]
    },
    {
      title: 'Resource Management',
      description: 'Intelligent booking and management of meeting rooms, equipment, and resources.',
      icon: '🏢',
      benefits: [
        'Room booking automation',
        'Equipment scheduling',
        'Resource optimization',
        'Conflict prevention'
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on scheduling patterns and meeting effectiveness.',
      icon: '📊',
      benefits: [
        'Scheduling analytics',
        'Meeting effectiveness',
        'Time utilization',
        'Productivity metrics'
      ]
    }
  ];

  const schedulingTypes = [
    {
      type: 'Personal Scheduling',
      description: 'Individual calendar management and optimization',
      price: '$19/month',
      features: ['Personal calendar', 'Smart scheduling', 'Reminder system', 'Basic analytics']
    },
    {
      type: 'Team Scheduling',
      description: 'Team calendar coordination and meeting management',
      price: '$49/month',
      features: ['Team calendars', 'Meeting coordination', 'Resource booking', 'Team analytics']
    },
    {
      type: 'Enterprise Scheduling',
      description: 'Large-scale scheduling for organizations',
      price: '$99/month',
      features: ['Multi-department', 'Advanced analytics', 'Custom workflows', 'API integration']
    },
    {
      type: 'Event Scheduling',
      description: 'Event planning and management with AI optimization',
      price: '$79/month',
      features: ['Event planning', 'Venue booking', 'Attendee management', 'Event analytics']
    },
    {
      type: 'Appointment Scheduling',
      description: 'Client appointment booking and management',
      price: '$39/month',
      features: ['Client booking', 'Appointment reminders', 'Payment integration', 'Client management']
    },
    {
      type: 'Resource Scheduling',
      description: 'Equipment and resource booking optimization',
      price: '$59/month',
      features: ['Resource booking', 'Maintenance scheduling', 'Utilization tracking', 'Cost optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        '1 calendar',
        'Basic AI features',
        'Email reminders',
        'Mobile app',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49/month',
      description: 'Advanced features for small teams',
      features: [
        'Up to 5 calendars',
        'Advanced AI optimization',
        'Multi-channel reminders',
        'Team collaboration',
        'Priority support',
        'Basic analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99/month',
      description: 'Complete scheduling solution for large organizations',
      features: [
        'Unlimited calendars',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Scheduler - Zion Tech Group</title>
        <meta name="description" content="Intelligent scheduling with AI optimization, multi-calendar sync, and automated reminders. Optimize your time and productivity." />
        <meta name="keywords" content="ai scheduler, intelligent scheduling, calendar optimization, meeting scheduling, time management, productivity" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Scheduler
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent scheduling with AI optimization, multi-calendar sync, and automated reminders. Optimize your time and productivity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Scheduling Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">Multi-Platform</div>
              <div className="text-gray-300">Integration</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Scheduling Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedulerFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Scheduling Types & Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedulingTypes.map((scheduling, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{scheduling.type}</h3>
                  <p className="text-gray-600 text-sm mb-4">{scheduling.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-4">{scheduling.price}</div>
                </div>
                <ul className="space-y-2">
                  {scheduling.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Scheduler?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Optimization</h3>
              <p className="text-gray-300">AI learns your preferences and optimizes scheduling for maximum productivity and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Seamless Integration</h3>
              <p className="text-gray-300">Works with all major calendar platforms and scheduling tools for a unified experience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Time Management</h3>
              <p className="text-gray-300">Advanced time management features help you make the most of every minute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Scheduler Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Optimize Your Schedule?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let AI take the hassle out of scheduling. Optimize your time and boost productivity with intelligent scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISchedulerPage;
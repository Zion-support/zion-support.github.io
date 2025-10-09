'use client';
import React from 'react';
import { Users, Phone, Mail, Calendar, BarChart, Target, CheckCircle, ArrowRight, Phone as PhoneIcon, Mail as MailIcon, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const CRMLitePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage all your customer contacts in one place'
    },
    {
      icon: Phone,
      title: 'Communication Tracking',
      description: 'Track all interactions with customers across multiple channels'
    },
    {
      icon: Calendar,
      title: 'Task Management',
      description: 'Schedule and track follow-ups, meetings, and important tasks'
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Monitor sales performance with detailed reports and insights'
    },
    {
      icon: Target,
      title: 'Lead Management',
      description: 'Track leads from initial contact to conversion'
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Sync with your email for seamless communication tracking'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic reporting',
        'Email integration',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced analytics',
        'Custom fields',
        'API access',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Custom reporting',
        'Advanced automation',
        'White-label options',
        'Dedicated support',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Easy Setup',
      description: 'Get started in minutes with our intuitive setup wizard',
      metric: '5 min setup'
    },
    {
      title: 'Mobile Ready',
      description: 'Access your CRM anywhere with our mobile app',
      metric: '100% mobile'
    },
    {
      title: 'Affordable',
      description: 'Powerful CRM features at a fraction of the cost',
      metric: '80% savings'
    },
    {
      title: 'No Training Required',
      description: 'Intuitive interface that anyone can use immediately',
      metric: 'Zero learning curve'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            CRM <span className="text-cyan-400">Lite</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            The perfect CRM solution for small and medium businesses. Simple, powerful, and affordable customer relationship management 
            that helps you grow your business without the complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <BarChart className="w-5 h-5 mr-2" />
              Try Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Essential <span className="text-cyan-400">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple <span className="text-cyan-400">Pricing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-400/20 scale-105' 
                    : 'border-gray-600 hover:border-cyan-400/50'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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

                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose <span className="text-cyan-400">CRM Lite</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Clean & <span className="text-cyan-400">Intuitive</span> Interface
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Dashboard Overview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Total Contacts</span>
                    <span className="text-cyan-400">1,247</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Active Leads</span>
                    <span className="text-green-400">89</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">This Month Sales</span>
                    <span className="text-yellow-400">$45,230</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activities</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• New lead: John Smith</div>
                  <div>• Follow-up scheduled</div>
                  <div>• Email sent to client</div>
                  <div>• Meeting completed</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full bg-cyan-400 text-white py-2 px-4 rounded text-sm">
                    Add Contact
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">
                    Schedule Meeting
                  </button>
                  <button className="w-full bg-white/10 text-white py-2 px-4 rounded text-sm">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Seamless <span className="text-cyan-400">Integrations</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-gray-300 text-sm">Gmail, Outlook, Yahoo</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="text-gray-300 text-sm">VoIP integration</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4">
                <Calendar className="w-8 h-8 text-cyan-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white">Calendar</h3>
              <p className="text-gray-300 text-sm">Google Calendar, Outlook</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-white/10 rounded-lg mb-4">
                <BarChart className="w-8 h-8 text-cyan-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white">Analytics</h3>
              <p className="text-gray-300 text-sm">Google Analytics, Mixpanel</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Managing Your Customers Better Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using CRM Lite to streamline their customer relationships and grow their sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              View All Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMLitePage;
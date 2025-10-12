import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Users, Zap, CheckCircle, ArrowRight, Brain, Globe, Star, Sparkles } from 'lucide-react';

export default function AISmartScheduler() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Scheduling',
      description: 'Intelligent scheduling that learns from your patterns and preferences'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across multiple time zones and schedules'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Automation',
      description: 'Automatically schedule recurring meetings and optimize your calendar'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Integration',
      description: 'Connect with calendars from Google, Outlook, and other platforms'
    }
  ];

  const schedulingFeatures = [
    {
      category: 'Smart Scheduling',
      items: ['AI Meeting Optimization', 'Conflict Resolution', 'Time Zone Management', 'Resource Booking', 'Recurring Events', 'Buffer Time']
    },
    {
      category: 'Team Management',
      items: ['Team Availability', 'Meeting Templates', 'Collaboration Tools', 'Notification System', 'Calendar Sharing', 'Permission Management']
    },
    {
      category: 'Integration & Sync',
      items: ['Google Calendar', 'Outlook Integration', 'Slack Integration', 'Zoom Integration', 'Mobile Sync', 'API Access']
    },
    {
      category: 'Analytics & Insights',
      items: ['Usage Analytics', 'Meeting Reports', 'Productivity Metrics', 'Time Tracking', 'Performance Insights', 'Custom Dashboards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        '1 calendar',
        'Basic AI scheduling',
        'Standard integrations',
        'Email support',
        'Mobile app',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$29',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 calendars',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Advanced integrations',
        'Team analytics',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited calendars',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'Marketing Agency',
      content: 'AI Smart Scheduler has saved us hours every week. The AI automatically finds the best meeting times for our team.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Consulting Firm',
      content: 'The time zone management and team coordination features have been incredible for our global team.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Startup',
      content: 'The smart automation and integration features have streamlined our entire scheduling process.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Scheduler - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Smart <span className="text-cyan-400">Scheduler</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your scheduling with AI-powered tools that automatically find the best meeting times, 
              coordinate across time zones, and optimize your calendar for maximum productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for intelligent scheduling</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Scheduling</h2>
              <p className="text-xl text-gray-300">Everything you need for effective time management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {schedulingFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your scheduling needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Scheduling?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals using our AI-powered scheduler to optimize their time and productivity.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
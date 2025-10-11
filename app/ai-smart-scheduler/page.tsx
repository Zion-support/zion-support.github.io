import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Users, Zap, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISmartSchedulerPage: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      title: 'Intelligent Scheduling',
      description: 'AI-powered calendar management that learns your preferences and optimizes your schedule automatically.',
      benefits: ['Auto-scheduling', 'Conflict resolution', 'Time zone handling', 'Recurring events']
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Team Coordination',
      description: 'Seamlessly coordinate meetings across teams with smart availability detection and booking.',
      benefits: ['Team calendars', 'Meeting rooms', 'Resource booking', 'Group scheduling']
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Smart Automation',
      description: 'Automate routine scheduling tasks and reduce administrative overhead with AI assistance.',
      benefits: ['Auto-reminders', 'Follow-up scheduling', 'Deadline tracking', 'Workflow automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 calendars',
        'Basic AI scheduling',
        'Email integration',
        'Mobile app access',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19.99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 calendars',
        'Advanced AI features',
        'Team collaboration tools',
        'API access',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited calendars',
        'Full AI suite',
        'Advanced analytics',
        'Custom workflows',
        '24/7 support',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'AI Smart Scheduler has revolutionized how we manage our time. The AI learns our patterns and schedules meetings perfectly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Project Manager, Global Corp',
      content: 'The team coordination features are incredible. We\'ve reduced meeting scheduling time by 80%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Consultant',
      content: 'As a freelancer, this tool helps me manage multiple client schedules effortlessly. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Smart Scheduler - Zion Tech Group</title>
        <meta name="description" content="Intelligent calendar management with AI-powered scheduling, team coordination, and smart automation. Start free trial today!" />
        <meta name="keywords" content="AI scheduler, calendar management, team scheduling, smart automation, productivity tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Smart Scheduler
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your calendar management with AI-powered scheduling that learns your preferences, 
              coordinates teams, and automates routine tasks for maximum productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-300">Join thousands of satisfied customers who trust AI Smart Scheduler</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Scheduling?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have revolutionized their time management with AI Smart Scheduler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISmartSchedulerPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, BarChart, Target, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with predictive analytics and resource optimization',
      benefits: ['40% faster planning', '85% accuracy in timelines', 'Smart resource allocation']
    },
    {
      icon: Target,
      title: 'Smart Task Management',
      description: 'Automated task assignment and priority management based on AI insights',
      benefits: ['60% productivity increase', 'Real-time prioritization', 'Automated workflows']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict project outcomes and identify potential risks',
      benefits: ['90% risk reduction', 'Data-driven decisions', 'Proactive problem solving']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication and coordination',
      benefits: ['Seamless communication', 'Real-time updates', 'Collaborative planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        'Basic AI planning',
        'Team collaboration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 projects',
        'Advanced AI planning',
        'Full team collaboration',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Premium AI features',
        'Enterprise collaboration',
        '24/7 support',
        'Custom analytics',
        'White-label options',
        'API access'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Active Teams' },
    { icon: TrendingUp, value: '40%', label: 'Productivity Increase' },
    { icon: Clock, value: '70%', label: 'Time Saved' },
    { icon: Star, value: '4.9/5', label: 'User Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Project Manager | Zion Tech Group</title>
        <meta name="description" content="Advanced AI project management solutions with intelligent planning, task management, and predictive analytics." />
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">AI Project Manager</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your project management with AI-powered planning, intelligent task management, 
            and predictive analytics that drive success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6">
              <feature.icon className="h-10 w-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Project Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your project management needs and get a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIProjectManagerPage;
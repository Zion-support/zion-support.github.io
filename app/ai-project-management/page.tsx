import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, UserCheck, DollarSign, PieChart, GitBranch, Timer, AlertTriangle } from 'lucide-react';

const AIProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, team capacity, and business impact.',
      benefits: ['Reduce project delays by 50%', 'Optimize resource allocation', 'Improve team productivity']
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: 'Smart Time Tracking',
      description: 'Automatic time tracking with AI-powered insights on productivity patterns and bottlenecks.',
      benefits: ['Accurate time reporting', 'Identify productivity gaps', 'Better project estimation']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Risk Prediction',
      description: 'AI algorithms predict project risks and suggest mitigation strategies before issues occur.',
      benefits: ['Prevent 80% of project failures', 'Early warning system', 'Proactive problem solving']
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Optimization',
      description: 'AI-powered team matching and workload balancing for optimal project performance.',
      benefits: ['Better team collaboration', 'Reduced burnout', 'Higher quality deliverables']
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to forecast project completion, budget needs, and resource requirements.',
      benefits: ['Accurate project forecasting', 'Better budget planning', 'Improved decision making']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Smart Communication',
      description: 'AI-powered communication optimization with automated updates and stakeholder notifications.',
      benefits: ['Reduce meeting time by 40%', 'Improve transparency', 'Better stakeholder engagement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Team',
      price: '$199/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 team members',
        'Basic AI features',
        'Project templates',
        'Time tracking',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 50 team members',
        'Advanced AI features',
        'Custom workflows',
        'Risk prediction',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom development',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Training & onboarding'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'TechFlow Solutions',
      role: 'Project Manager',
      content: 'AI Project Management helped us complete projects 30% faster while maintaining higher quality standards.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'InnovateCorp',
      role: 'Director of Operations',
      content: 'The risk prediction feature saved us from multiple project disasters. It\'s like having a crystal ball!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'ScaleUp Ventures',
      role: 'CTO',
      content: 'Team optimization and smart communication features transformed how we work together. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Project Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management platform. Complete projects 30% faster, predict risks, and optimize team performance with intelligent automation." />
        <meta name="keywords" content="AI project management, project automation, team optimization, risk prediction, smart project tools, AI PM software" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-project-management" />
      </Head>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text">
              AI Project Management
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Intelligent Project Management with AI-Powered Insights
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your project management with AI-driven automation, risk prediction, and team optimization. 
              Complete projects 30% faster, reduce delays by 50%, and boost team productivity with our 
              cutting-edge project management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose AI Project Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">30% Faster Completion</h3>
              <p className="text-gray-300">AI optimization and automation accelerate project delivery significantly.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">50% Fewer Delays</h3>
              <p className="text-gray-300">Predictive risk management prevents issues before they impact timelines.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-3">Optimized Teams</h3>
              <p className="text-gray-300">AI-powered team matching and workload balancing maximize productivity.</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of teams already using AI Project Management to deliver projects faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIProjectManagementPage;
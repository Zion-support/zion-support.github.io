'use client';
import React from 'react';
import { Brain, BarChart, Users, Calendar, Target, CheckCircle, ArrowRight, Star, Zap, Shield, Clock, TrendingUp, Award, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with machine learning algorithms that analyze historical data and predict optimal timelines.',
      benefits: ['85% planning accuracy', '40% faster planning', 'Risk prediction', 'Resource optimization']
    },
    {
      icon: BarChart,
      title: 'Smart Task Management',
      description: 'Automated task prioritization and assignment based on team capacity, skills, and project requirements.',
      benefits: ['60% productivity increase', 'Smart prioritization', 'Auto-assignment', 'Progress tracking']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools with real-time communication, file sharing, and team performance analytics.',
      benefits: ['Real-time collaboration', 'Team analytics', 'File sharing', 'Communication hub']
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'AI-driven insights that predict project outcomes, identify bottlenecks, and suggest optimizations.',
      benefits: ['Predictive insights', 'Bottleneck detection', 'Optimization suggestions', 'Performance forecasting']
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Automated risk identification and mitigation strategies to keep projects on track and within budget.',
      benefits: ['Risk identification', 'Mitigation strategies', 'Early warning system', 'Budget protection']
    },
    {
      icon: Clock,
      title: 'Resource Optimization',
      description: 'Intelligent resource allocation that maximizes team efficiency and minimizes project costs.',
      benefits: ['Optimal resource use', 'Cost reduction', 'Efficiency maximization', 'Capacity planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 projects',
        'Up to 10 team members',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: 'month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Up to 25 projects',
        'Up to 50 team members',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited projects',
        'Unlimited team members',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager Pro has revolutionized how we plan and execute projects. The AI predictions are incredibly accurate, and we\'ve seen a 40% increase in on-time delivery.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The resource optimization feature alone has saved us thousands of dollars. The AI automatically assigns tasks based on team skills and availability.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The risk assessment tool has prevented multiple project failures. It\'s like having a senior project manager watching over every project 24/7.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <a href="/micro-saas" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Micro SAAS
            </a>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Project Manager Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment. 
            Achieve 40% productivity increase and 70% fewer delays with our advanced project management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Fewer Delays</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Planning Accuracy</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-orange-400 mb-2">30%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 ${plan.popular ? 'border-2 border-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-center py-1 rounded-t-lg -mt-6 -mx-6 mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">/{plan.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Project Management?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using AI Project Manager Pro to achieve better project outcomes, 
              reduce delays, and increase productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p className="flex items-center justify-center gap-4">
                <span className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  kleber@ziontechgroup.com
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  364 E Main St STE 1008, Middletown DE 19709
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIProjectManagerPage;
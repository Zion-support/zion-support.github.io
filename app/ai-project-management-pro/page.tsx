import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Brain, Star, Users, BarChart3, Clock } from 'lucide-react';

const AiProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5 ml-2" />,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with AI-driven resource allocation and timeline optimization.',
      benefits: ['Smart scheduling', 'Resource optimization', 'Risk prediction', 'Timeline forecasting']
    },
    {
      icon: <Zap className="w-5 h-5 ml-2" />,
      title: 'Automated Workflows',
      description: 'Streamline project processes with AI-powered automation and intelligent task routing.',
      benefits: ['Task automation', 'Smart routing', 'Process optimization', 'Workflow intelligence']
    },
    {
      icon: <BarChart3 className="w-5 h-5 ml-2" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive project analytics with predictive insights and performance tracking.',
      benefits: ['Performance metrics', 'Predictive insights', 'Custom reports', 'Real-time dashboards']
    },
    {
      icon: <Users className="w-5 h-5 ml-2" />,
      title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication and coordination tools.',
      benefits: ['Smart notifications', 'Team coordination', 'Communication insights', 'Collaboration optimization']
    },
    {
      icon: <Shield className="w-5 h-5 ml-2" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance monitoring and data protection.',
      benefits: ['Data encryption', 'Access controls', 'Compliance tracking', 'Audit trails']
    },
    {
      icon: <Clock className="w-5 h-5 ml-2" />,
      title: 'Time Tracking',
      description: 'Intelligent time tracking with AI-powered productivity analysis and optimization.',
      benefits: ['Automatic tracking', 'Productivity insights', 'Time optimization', 'Performance analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 10 projects',
        'Basic AI features',
        'Email support',
        'Basic analytics',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfect for growing teams',
      features: [
        'Up to 50 projects',
        'Advanced AI features',
        'Priority support',
        'Advanced analytics',
        'Up to 25 team members',
        'Custom workflows'
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
        'Custom AI models',
        '24/7 dedicated support',
        'Advanced integrations',
        'Unlimited team members',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      content: 'AI Project Management Pro increased our project delivery speed by 40%. The AI planning is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Software Agency',
      content: 'The automated workflows saved us countless hours. Our team productivity improved dramatically.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Consulting Firm',
      content: 'The analytics dashboard gives us insights we never had before. Decision-making has never been easier.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Project Management Pro - Intelligent Project Management | Zion Tech Group</title>
        <meta name="description" content="Transform your project management with AI-powered planning, automation, and analytics. Streamline workflows and boost team productivity. Get started today." />
        <meta name="keywords" content="AI project management, project planning, team collaboration, workflow automation, project analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-purple-400 mr-3" />
            <span className="text-purple-400 font-semibold">AI-Powered Project Management</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Project Management Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your project management with AI-powered planning, automation, and analytics. 
            Streamline workflows and boost team productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="#features" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Project Features</h2>
            <p className="text-xl text-gray-300">Everything you need to manage projects efficiently</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300">Flexible pricing for teams of all sizes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-400/40 scale-105 shadow-2xl shadow-purple-500/20' 
                  : 'border-purple-500/20 hover:border-purple-400/40'
              }`}>
                {plan.popular && (
                  <div className="flex items-center justify-center mb-4 text-purple-400">
                    <Star className="w-5 h-5 mr-2" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Project Managers</h2>
            <p className="text-xl text-gray-300">See how AI Project Management Pro transforms project workflows</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Project Management?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams who are already using AI Project Management Pro to deliver projects faster and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
              Get Free Demo
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiProjectManagementProPage;
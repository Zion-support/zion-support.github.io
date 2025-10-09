import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { CheckCircle, Star, Zap, Shield, Users, BarChart, Clock, Calendar, Target, TrendingUp, ArrowRight, Play, Download } from 'lucide-react';

const ProjectManagementPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI Task Prioritization',
      description: 'Our AI analyzes project requirements, deadlines, and dependencies to automatically prioritize tasks for maximum efficiency.',
      benefits: ['40% faster project completion', 'Reduced manual planning time', 'Optimized resource allocation']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Get insights into project risks, resource needs, and potential delays before they become problems.',
      benefits: ['90% accuracy in deadline prediction', 'Early risk identification', 'Data-driven decision making']
    },
    {
      icon: Users,
      title: 'Smart Team Collaboration',
      description: 'AI-powered team matching, workload balancing, and communication optimization for better collaboration.',
      benefits: ['Improved team productivity', 'Reduced communication overhead', 'Better task distribution']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Track project progress in real-time with automated updates, alerts, and performance metrics.',
      benefits: ['Instant visibility into progress', 'Proactive issue detection', 'Automated reporting']
    },
    {
      icon: Calendar,
      title: 'Intelligent Scheduling',
      description: 'AI automatically schedules tasks based on team availability, dependencies, and optimal work patterns.',
      benefits: ['Optimized team schedules', 'Reduced scheduling conflicts', 'Better deadline management']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard showing team performance, project health, and improvement opportunities.',
      benefits: ['Detailed performance insights', 'Continuous improvement', 'ROI tracking']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams and simple projects',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'White-label options',
        'On-premise deployment',
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
      content: 'This AI project management tool has revolutionized how we handle complex projects. The predictive analytics alone saved us 3 weeks on our last major project.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The AI task prioritization is incredible. It automatically identified bottlenecks we never would have seen and optimized our entire workflow.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'Our team productivity increased by 60% since implementing this platform. The real-time monitoring and automated reporting are game-changers.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Project Management Suite
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your project management with AI-powered task optimization, predictive analytics, 
                and intelligent team collaboration. Complete projects 40% faster with 90% accuracy in deadline prediction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="cyber-button w-full sm:w-auto text-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Start Free Trial
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">See It In Action</h3>
              <p className="text-gray-300 mb-4">
                Watch our 2-minute demo to see how AI can transform your project management workflow.
              </p>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Project Management Suite?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">40% Faster Completion</h3>
              <p className="text-gray-300 text-sm">
                AI-optimized task prioritization and resource allocation help teams complete projects 40% faster on average.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">90% Deadline Accuracy</h3>
              <p className="text-gray-300 text-sm">
                Predictive analytics provide 90% accuracy in deadline prediction, helping you avoid costly delays.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center ${
                tier.popular ? 'ring-2 ring-purple-500 relative' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">
                  {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams that have already transformed their project management with AI. 
              Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Start Free Trial
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ 30-day free trial • ✓ No credit card required • ✓ Setup in 5 minutes
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectManagementPage;
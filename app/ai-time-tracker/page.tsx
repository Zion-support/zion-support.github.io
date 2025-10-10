'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Clock, 
  Play, 
  Pause, 
  Square, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  AlertTriangle,
  ArrowRight,
  Download,
  Upload,
  Settings,
  Bell,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  Eye,
  EyeOff,
  Target,
  BarChart3,
  DollarSign,
  Timer,
  Calendar,
  TrendingUp,
  PieChart,
  FileText,
  Monitor,
  Coffee,
  Briefcase
} from 'lucide-react';

const AITimeTrackerPro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'AI-Powered Tracking',
      items: [
        'Automatic time detection and logging',
        'Smart project categorization',
        'Idle time detection and filtering',
        'Productivity pattern analysis',
        'Distraction detection and alerts',
        'Work-life balance monitoring'
      ]
    },
    {
      category: 'Advanced Analytics',
      items: [
        'Real-time productivity metrics',
        'Detailed time reports and insights',
        'Team performance analytics',
        'Project profitability analysis',
        'Billing and invoicing integration',
        'Custom dashboard creation'
      ]
    },
    {
      category: 'Team Management',
      items: [
        'Multi-user team tracking',
        'Project assignment and monitoring',
        'Team productivity comparisons',
        'Manager dashboard and reports',
        'Approval workflows',
        'Role-based access control'
      ]
    },
    {
      category: 'Integration & Automation',
      items: [
        'Calendar and scheduling integration',
        'Project management tool sync',
        'Billing system integration',
        'API access for developers',
        'Automated reporting',
        'Custom notification system'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$34',
      period: '/month',
      description: 'Perfect for freelancers and individuals',
      features: [
        'Unlimited time tracking',
        'Basic AI features',
        'Project management',
        'Basic reporting',
        'Mobile app access',
        'Email support',
        '7-day free trial'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Team',
      price: '$69',
      period: '/month',
      description: 'For small teams and growing businesses',
      features: [
        'Everything in Personal',
        'Up to 10 team members',
        'Advanced AI analytics',
        'Team collaboration tools',
        'Advanced reporting',
        'Priority support',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Team',
        'Unlimited team members',
        'Custom integrations',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom AI training',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '40% Productivity Boost',
      description: 'AI insights help optimize your work patterns'
    },
    {
      icon: DollarSign,
      title: 'Accurate Billing',
      description: 'Never miss billable hours with automatic tracking'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Understand your productivity with detailed analytics'
    },
    {
      icon: Users,
      title: 'Team Optimization',
      description: 'Improve team performance with collaborative tools'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Freelance Developer, CodeCraft',
      content: 'AI Time Tracker Pro has increased my billable hours by 25%. The automatic tracking is incredibly accurate and saves me hours of manual work.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Project Manager, DesignStudio',
      content: 'The team analytics help me understand where our time goes. We\'ve improved project delivery times by 30% since using this tool.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'CEO, TechStartup',
      content: 'The AI insights revealed productivity patterns I never knew existed. Our team is now 40% more efficient thanks to this platform.',
      rating: 5
    }
  ];

  const trackingFeatures = [
    { name: 'Automatic Tracking', accuracy: '99.5%', icon: Clock },
    { name: 'Project Management', projects: '10,000+', icon: Target },
    { name: 'Team Collaboration', users: '50,000+', icon: Users },
    { name: 'Billing Integration', systems: '25+', icon: DollarSign },
    { name: 'Mobile Access', platforms: 'iOS/Android', icon: Smartphone },
    { name: 'API Access', endpoints: '50+', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>AI Time Tracker Pro - Intelligent Time Management | Zion Tech Group</title>
        <meta name="description" content="Track time intelligently with AI Time Tracker Pro. Automatic tracking, productivity analytics, and team management. Boost productivity by 40%." />
        <meta name="keywords" content="time tracking, AI productivity, time management, team tracking, project management, billing automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-time-tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              AI-Powered Productivity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Time Tracker
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Track time intelligently with AI-powered automation. Boost productivity by 40% with 
              automatic tracking, smart analytics, and team collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Tracking Features */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {trackingFeatures.map((feature, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <feature.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-lg font-semibold text-white mb-1">{feature.name}</div>
                <div className="text-sm text-gray-400">
                  {feature.accuracy || feature.projects || feature.users || feature.systems || feature.platforms || feature.endpoints}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Time Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize your time and productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-orange-400 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Productivity-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your time tracking needs. All plans include 7-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-orange-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                    : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Time Tracker Pro?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of professionals who trust our AI for their time management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Productivity Professionals
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Time Tracker Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-orange-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Time?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ professionals who trust AI Time Tracker Pro for their productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions about our AI time tracking platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITimeTrackerPro;
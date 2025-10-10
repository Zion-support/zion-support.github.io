'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  Video, 
  Calendar, 
  Users, 
  CheckCircle, 
  Star, 
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
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  Eye,
  EyeOff,
  FileText,
  MessageSquare,
  Target,
  BarChart3,
  Play,
  Pause,
  Square,
  Volume2,
  Headphones,
  Camera,
  Monitor
} from 'lucide-react';

const AIMeetingAssistantPro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'AI-Powered Transcription',
      items: [
        'Real-time speech-to-text conversion',
        'Multi-language support (50+ languages)',
        'Speaker identification and labeling',
        'Accent and dialect recognition',
        'Noise cancellation and filtering',
        'Custom vocabulary training'
      ]
    },
    {
      category: 'Meeting Intelligence',
      items: [
        'Automatic action item extraction',
        'Key decision tracking',
        'Meeting summary generation',
        'Sentiment analysis',
        'Engagement level monitoring',
        'Follow-up reminder automation'
      ]
    },
    {
      category: 'Integration & Workflow',
      items: [
        'Calendar integration (Google, Outlook)',
        'CRM synchronization',
        'Project management tools',
        'Slack/Teams notifications',
        'Email automation',
        'API access for developers'
      ]
    },
    {
      category: 'Analytics & Insights',
      items: [
        'Meeting effectiveness scoring',
        'Speaking time analysis',
        'Topic trend tracking',
        'Productivity metrics',
        'ROI calculation',
        'Custom reporting'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams and individuals',
      features: [
        'Up to 10 hours of meetings per month',
        'Basic AI transcription',
        'Action item extraction',
        'Email summaries',
        'Calendar integration',
        'Mobile app access',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For growing teams and businesses',
      features: [
        'Everything in Starter',
        'Unlimited meeting hours',
        'Advanced AI features',
        'Multi-language support',
        'Team collaboration tools',
        'Advanced analytics',
        'Priority support',
        'API access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'White-label solution',
        'Advanced security features',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '90% Meeting Efficiency',
      description: 'AI automation saves hours of manual work'
    },
    {
      icon: Target,
      title: 'Zero Missed Action Items',
      description: 'AI ensures nothing falls through the cracks'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Understand meeting effectiveness with analytics'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless integration with your existing tools'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'VP of Operations, TechCorp',
      content: 'AI Meeting Assistant Pro has transformed our meeting culture. We now have 100% action item completion and 50% shorter meetings.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Project Manager, StartupXYZ',
      content: 'The real-time transcription is incredibly accurate. Our remote team meetings are now more productive than ever.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CEO, ConsultingFirm',
      content: 'The analytics dashboard shows us exactly how to improve our meetings. ROI increased by 200% in just 3 months.',
      rating: 5
    }
  ];

  const meetingTypes = [
    { name: 'Team Standups', efficiency: '95%', icon: Users },
    { name: 'Client Meetings', efficiency: '90%', icon: Target },
    { name: 'Board Meetings', efficiency: '88%', icon: BarChart3 },
    { name: 'Training Sessions', efficiency: '92%', icon: FileText },
    { name: 'Sales Calls', efficiency: '85%', icon: Phone },
    { name: 'Project Reviews', efficiency: '94%', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Meeting Assistant Pro - Intelligent Meeting Management | Zion Tech Group</title>
        <meta name="description" content="Transform your meetings with AI Meeting Assistant Pro. Real-time transcription, action item extraction, and meeting analytics. Boost productivity by 90%." />
        <meta name="keywords" content="meeting assistant, AI transcription, meeting management, productivity, team collaboration, meeting analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-meeting-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mic className="w-4 h-4 mr-2" />
              AI-Powered Meetings
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Meeting Assistant
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your meetings with AI-powered transcription, action item extraction, and intelligent analytics. 
              Make every meeting count with 90% efficiency improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Meeting Types */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {meetingTypes.map((type, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <type.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-lg font-semibold text-white mb-1">{type.name}</div>
                <div className="text-sm text-green-400 font-medium">{type.efficiency} efficiency</div>
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
              Advanced AI Meeting Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to make your meetings more productive and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-blue-400 mb-6">{category.category}</h3>
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
              Meeting-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your meeting needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-blue-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
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
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
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
              Why Choose AI Meeting Assistant Pro?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of teams who trust our AI to make their meetings more productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Trusted by Leading Teams
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Meeting Assistant Pro.
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
                  <div className="text-blue-400 text-sm">{testimonial.role}</div>
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
            Ready to Transform Your Meetings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 20,000+ teams who trust AI Meeting Assistant Pro for their meeting productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center">
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
              Have questions about our AI meeting platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
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

export default AIMeetingAssistantPro;
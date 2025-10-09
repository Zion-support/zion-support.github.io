'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Target, BarChart, UserCheck, Briefcase, FileText, MessageSquare, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIHRRecruiterPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Candidate Matching',
      description: 'Intelligent candidate screening and matching with 95% accuracy',
      benefits: ['Resume analysis', 'Skill matching', 'Cultural fit assessment', 'Predictive hiring success']
    },
    {
      icon: Users,
      title: 'Talent Pipeline',
      description: 'Automated talent sourcing and pipeline management',
      benefits: ['Passive candidate sourcing', 'Talent pool building', 'Engagement automation', 'Relationship tracking']
    },
    {
      icon: Target,
      title: 'Interview Scheduling',
      description: 'Smart interview coordination and candidate experience optimization',
      benefits: ['Automated scheduling', 'Calendar integration', 'Reminder systems', 'Feedback collection']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Advanced recruitment analytics and performance tracking',
      benefits: ['Hiring metrics', 'Time-to-fill analysis', 'Source effectiveness', 'ROI tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small companies and startups',
      features: [
        'Up to 50 job postings/month',
        'Basic AI matching',
        'Standard templates',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies and HR teams',
      features: [
        'Up to 200 job postings/month',
        'Advanced AI matching',
        'Custom workflows',
        'Priority support',
        'API access',
        'Team collaboration',
        'Advanced analytics',
        'Integration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations and staffing agencies',
      features: [
        'Unlimited job postings',
        'Full AI suite',
        'Custom AI models',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager',
        'Compliance reporting'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Candidate Sourcing',
      description: 'AI-powered talent discovery and passive candidate engagement',
      icon: UserCheck,
      price: 'Starting at $199/month',
      features: ['Passive sourcing', 'Social media mining', 'Database searches', 'Engagement automation']
    },
    {
      title: 'Resume Screening',
      description: 'Automated resume analysis and candidate ranking',
      icon: FileText,
      price: 'Starting at $149/month',
      features: ['Resume parsing', 'Skill extraction', 'Experience matching', 'Ranking algorithms']
    },
    {
      title: 'Interview Management',
      description: 'Streamlined interview process with AI-powered insights',
      icon: MessageSquare,
      price: 'Starting at $299/month',
      features: ['Interview scheduling', 'Question generation', 'Response analysis', 'Score tracking']
    },
    {
      title: 'Onboarding Automation',
      description: 'Automated new hire onboarding and experience management',
      icon: Briefcase,
      price: 'Starting at $249/month',
      features: ['Workflow automation', 'Document management', 'Task assignment', 'Progress tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'VP of Human Resources',
      company: 'TechStart Solutions',
      content: 'The AI matching has reduced our time-to-hire by 60% while improving candidate quality. We\'re finding better candidates faster than ever.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Thompson',
      role: 'Talent Acquisition Director',
      company: 'Global Enterprises Inc',
      content: 'The talent pipeline features have transformed our recruitment strategy. We now have a steady stream of qualified candidates.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Sarah Johnson',
      role: 'HR Manager',
      company: 'Innovation Labs',
      content: 'The analytics dashboard gives us insights we never had before. We can now make data-driven decisions about our recruitment process.',
      rating: 5,
      avatar: 'SJ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI HR Recruiter - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered HR recruitment platform with candidate matching, talent sourcing, and interview management. Starting at $299/month." />
        <meta name="keywords" content="ai hr recruiter, talent acquisition, candidate matching, recruitment automation, hr analytics, hiring platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-hr-recruiter" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            AI-Powered HR Recruitment
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Intelligent HR Recruitment
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your hiring process with AI-powered candidate matching, intelligent sourcing, 
            and automated recruitment workflows. Reduce time-to-hire by 60% with 95% accuracy.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Hiring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Matching Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI HR Recruiter Inquiry"
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-medium hover:bg-blue-400 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced HR AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Comprehensive HR Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <service.icon className="w-16 h-16 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-blue-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Trusted by HR Professionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of HR professionals using AI to find better candidates faster and build stronger teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHRRecruiterPage;
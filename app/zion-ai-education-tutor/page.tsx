'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  AcademicCapIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  AcademicCapIcon as AcademicCapIconSolid,
  BeakerIcon,
  EyeIcon,
  BookOpenIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const ZionAIEducationTutorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning that adjusts to each student\'s pace and learning style for optimal comprehension.',
      stats: '95% improvement in test scores'
    },
    {
      icon: BookOpenIcon,
      title: 'Curriculum Generation',
      description: 'Automatically generate customized curricula, lesson plans, and educational content for any subject.',
      stats: '10,000+ lessons created'
    },
    {
      icon: LightBulbIcon,
      title: 'Interactive Tutoring',
      description: 'Real-time AI tutoring with natural language processing and step-by-step problem solving.',
      stats: '500,000+ students helped'
    },
    {
      icon: UserGroupIcon,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics dashboard for teachers and parents to monitor student progress.',
      stats: 'Real-time insights'
    },
    {
      icon: ChartBarIcon,
      title: 'Assessment Tools',
      description: 'AI-powered quizzes, tests, and assessments with instant feedback and performance analysis.',
      stats: '98% accuracy in grading'
    },
    {
      icon: CogIcon,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with automatic translation and localization features.',
      stats: 'Global accessibility'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Student',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual students and homeschoolers',
      features: [
        'Personalized learning paths',
        'Interactive tutoring sessions',
        'Progress tracking',
        'Basic assessments',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Classroom Pro',
      price: '$199',
      period: '/month',
      description: 'Ideal for teachers and small classrooms',
      features: [
        'Up to 30 students',
        'Curriculum generation',
        'Advanced analytics',
        'Parent communication tools',
        'Priority support',
        'Custom content creation',
        'Assessment suite',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'School District',
      price: '$999',
      period: '/month',
      description: 'For schools and educational institutions',
      features: [
        'Unlimited students',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced reporting suite',
        'API access',
        'White-label options',
        'Custom integrations',
        'Multi-school management'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Mathematics Teacher',
      company: 'Lincoln High School',
      content: 'Zion AI Education Tutor has transformed how my students learn. The personalized approach has improved engagement and test scores significantly.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Principal',
      company: 'Riverside Elementary',
      content: 'The curriculum generation feature has saved us countless hours while ensuring high-quality, standards-aligned content for our students.',
      rating: 5
    },
    {
      name: 'Jennifer Martinez',
      title: 'Parent',
      company: 'Homeschool Parent',
      content: 'My daughter\'s confidence in math has grown tremendously since using this AI tutor. The step-by-step explanations are incredibly helpful.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Education Tutor - AI-Powered Learning Platform | Zion Tech Group"
        description="Transform education with AI-powered personalized learning, curriculum generation, and interactive tutoring. 95% improvement in test scores, 50+ languages supported."
        keywords="AI education tutor, personalized learning, curriculum generation, interactive tutoring, educational technology, adaptive learning, student progress tracking"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <AcademicCapIconSolid className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">AI Education Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Zion AI Education Tutor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize education with AI-powered personalized learning, curriculum generation, and interactive tutoring. 
                Achieve 95% improvement in test scores while supporting 50+ languages globally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Test Score Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500K+</div>
                  <div className="text-gray-300 text-sm">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                  <div className="text-gray-300 text-sm">Lessons Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI Education Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive educational technology solutions designed to enhance learning outcomes and teaching efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-purple-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your educational needs. All plans include our core AI tutoring features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-700 hover:border-purple-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Educators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what educators and students are saying about Zion AI Education Tutor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of educators and students who trust Zion AI Education Tutor for their learning needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIEducationTutorPage;
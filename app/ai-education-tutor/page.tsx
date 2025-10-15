'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CogIcon,
  GlobeAltIcon,
  LightBulbIcon,
  TrophyIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const AIEducationTutorPage: React.FC = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning that adjusts to each student\'s pace and learning style',
      benefits: ['Individual learning paths', 'Adaptive difficulty', 'Learning style optimization']
    },
    {
      icon: BookOpenIcon,
      title: 'Interactive Content',
      description: 'Engaging multimedia content with quizzes, simulations, and interactive exercises',
      benefits: ['Gamified learning', 'Interactive simulations', 'Real-time feedback']
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Analytics',
      description: 'Comprehensive tracking of student progress with detailed analytics and insights',
      benefits: ['Performance tracking', 'Learning analytics', 'Progress reports']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: '24/7 AI Tutoring',
      description: 'Round-the-clock AI tutoring support with instant answers and explanations',
      benefits: ['Instant help', 'Step-by-step solutions', 'Concept explanations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Student',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual students and self-learners',
      features: [
        'Up to 5 subjects',
        'Basic AI tutoring',
        'Progress tracking',
        'Email support',
        'Mobile app access',
        'Basic analytics',
        'Study reminders'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$79',
      period: '/month',
      description: 'Ideal for families with multiple students',
      features: [
        'Up to 4 students',
        'Unlimited subjects',
        'Advanced AI tutoring',
        'Priority support',
        'Family dashboard',
        'Advanced analytics',
        'Parent controls',
        'Progress reports',
        'Study groups'
      ],
      popular: true
    },
    {
      name: 'School',
      price: '$299',
      period: '/month',
      description: 'Comprehensive solution for schools and educational institutions',
      features: [
        'Up to 100 students',
        'Full AI tutoring suite',
        'Teacher dashboard',
        '24/7 support',
        'Custom curriculum',
        'Advanced analytics',
        'API integration',
        'White-label solution',
        'Dedicated support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Geography', 'Physics',
    'Chemistry', 'Biology', 'Computer Science', 'Economics', 'Art', 'Music'
  ];

  const gradeLevels = [
    'Elementary (K-5)', 'Middle School (6-8)', 'High School (9-12)', 
    'College', 'Graduate', 'Professional Development'
  ];

  const useCases = [
    {
      title: 'Homework Help',
      description: 'Instant help with homework assignments and problem-solving',
      icon: LightBulbIcon,
      impact: 'Improve grades by 25%'
    },
    {
      title: 'Test Preparation',
      description: 'Comprehensive test prep with practice exams and study plans',
      icon: TrophyIcon,
      impact: 'Increase test scores by 30%'
    },
    {
      title: 'Skill Development',
      description: 'Learn new skills and subjects at your own pace',
      icon: CogIcon,
      impact: 'Master concepts 40% faster'
    },
    {
      title: 'Language Learning',
      description: 'Interactive language learning with pronunciation and conversation practice',
      icon: GlobeAltIcon,
      impact: 'Achieve fluency 50% faster'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Education Tutor Pro - Personalized Learning AI | Zion Tech Group"
        description="Transform education with our AI-powered tutoring system. Personalized learning, interactive content, progress analytics, and 24/7 support. Starting at $29/month."
        keywords="AI education tutor, personalized learning, adaptive learning, online tutoring, educational technology, learning analytics, student success, educational AI"
        canonicalUrl="https://ziontechgroup.com/ai-education-tutor"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  Zion AI Education Tutor Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Revolutionize learning with AI-powered personalized tutoring that adapts to each student's needs and learning style. 
                <br className="hidden sm:block" />
                <span className="text-amber-400 font-semibold">Improve grades by 25% and master concepts 40% faster</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a 
                  href="#pricing"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-amber-400 text-amber-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-amber-400/25 neon-border-animated"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-1">25%</div>
                  <div className="text-gray-300 text-sm">Grade Improvement</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">40%</div>
                  <div className="text-gray-300 text-sm">Faster Learning</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">12+</div>
                  <div className="text-gray-300 text-sm">Subjects</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Learning Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI technology designed to personalize education and maximize learning outcomes for every student.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects & Grade Levels Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Comprehensive <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Coverage</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI tutor covers a wide range of subjects and grade levels to support learners of all ages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Subjects */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Subjects Covered</h3>
                <div className="grid grid-cols-2 gap-3">
                  {subjects.map((subject, index) => (
                    <div key={index} 
                      className="group bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 text-center"
                    >
                      <div className="text-sm font-medium text-gray-300 group-hover:text-orange-300 transition-colors">
                        {subject}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grade Levels */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Grade Levels</h3>
                <div className="space-y-3">
                  {gradeLevels.map((level, index) => (
                    <div key={index} 
                      className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
                    >
                      <div className="text-sm font-medium text-gray-300 group-hover:text-red-300 transition-colors text-center">
                        {level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Real-World <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how students and educators are using our AI tutor to achieve better learning outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Affordable <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your learning needs. All plans include core AI tutoring features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-amber-500 shadow-amber-500/20' 
                      : 'border-slate-700 hover:border-amber-500 hover:shadow-amber-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-3xl sm:text-4xl font-bold text-amber-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                        : 'border-2 border-amber-500 text-amber-300 hover:bg-amber-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'School' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Transform Learning?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of students and educators who are already using AI to achieve better learning outcomes.
              <br className="hidden sm:block" />
              <span className="text-amber-400 font-semibold">Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="relative group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-amber-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
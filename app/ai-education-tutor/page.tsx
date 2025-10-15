'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  ChartBarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const AIEducationTutorPage: React.FC = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: 'Personalized Learning',
      description: 'AI adapts to each student\'s learning style, pace, and preferences for optimal educational outcomes.',
      benefits: ['Adaptive curriculum', 'Learning style analysis', 'Personalized feedback']
    },
    {
      icon: LightBulbIcon,
      title: 'Interactive Lessons',
      description: 'Engaging, interactive lessons across all subjects with real-time explanations and examples.',
      benefits: ['Multi-subject coverage', 'Interactive exercises', 'Visual learning aids']
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and progress reports to monitor student performance and identify areas for improvement.',
      benefits: ['Performance analytics', 'Progress reports', 'Goal setting']
    },
    {
      icon: UserGroupIcon,
      title: '24/7 Availability',
      description: 'Round-the-clock access to AI tutoring support, ensuring students can learn whenever they need help.',
      benefits: ['Always available', 'Instant help', 'Flexible scheduling']
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: '🔢', description: 'Algebra, Calculus, Geometry, Statistics' },
    { name: 'Science', icon: '🔬', description: 'Physics, Chemistry, Biology, Earth Science' },
    { name: 'Language Arts', icon: '📚', description: 'Reading, Writing, Grammar, Literature' },
    { name: 'History', icon: '🏛️', description: 'World History, US History, Government' },
    { name: 'Computer Science', icon: '💻', description: 'Programming, Data Science, AI/ML' },
    { name: 'Languages', icon: '🌍', description: 'Spanish, French, German, Mandarin' }
  ];

  const pricingPlans = [
    {
      name: 'Student',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual students and homeschoolers',
      features: [
        'Unlimited AI tutoring sessions',
        'All subjects included',
        'Basic progress tracking',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$99',
      period: '/month',
      description: 'Ideal for families with multiple students',
      features: [
        'Up to 4 student accounts',
        'All subjects included',
        'Advanced progress tracking',
        'Priority support',
        'Parent dashboard',
        'Family learning goals',
        'Offline mode'
      ],
      popular: true
    },
    {
      name: 'School',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for schools and institutions',
      features: [
        'Unlimited student accounts',
        'All subjects included',
        'Comprehensive analytics',
        'Dedicated support team',
        'Custom curriculum integration',
        'Teacher training',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      company: 'Homeschool Family',
      content: 'My daughter\'s math grades improved from C to A+ in just 3 months with AI Education Tutor. The personalized approach really works!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'High School Student',
      company: 'Lincoln High School',
      content: 'I was struggling with chemistry, but the AI tutor explained everything in a way I could understand. Now I\'m getting straight A\'s!',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Principal',
      company: 'Riverside Elementary',
      content: 'We\'ve seen a 40% improvement in test scores since implementing AI Education Tutor. It\'s like having a personal tutor for every student.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Education Tutor - Zion Tech Group"
        description="AI-powered personalized tutoring for all subjects. Adaptive learning, progress tracking, and 24/7 availability for students of all ages."
        keywords="AI education tutor, personalized learning, adaptive education, online tutoring, AI tutoring, educational technology, student learning"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-8">
                <AcademicCapIcon className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-300 text-sm font-medium">AI Education Tutor</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  AI Education Tutor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Personalized AI tutoring for all subjects and grade levels. Adaptive learning that adjusts to each student\'s needs 
                for maximum educational success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 inline ml-2" />
                </button>
                <button className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                  <div className="text-gray-300">Student Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
                  <div className="text-gray-300">Faster Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subjects Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                All <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Subjects Covered</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI tutoring across all major subjects and grade levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{subject.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {subject.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Learning Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered educational tools designed to maximize learning outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Affordable <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your educational needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-yellow-500 shadow-lg shadow-yellow-500/25' 
                    : 'border-slate-700 hover:border-yellow-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-yellow-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700'
                      : 'border-2 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-white'
                  }`}>
                    {plan.name === 'School' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Success <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Stories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how students and educators are achieving better results with AI Education Tutor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Learning</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students achieving better grades with personalized AI tutoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
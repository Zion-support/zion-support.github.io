'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AIEducationTutorPage: React.FC = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning that adjusts to each student\'s pace and learning style for optimal comprehension.',
      benefit: 'Improve learning outcomes by 65%'
    },
    {
      icon: BookOpenIcon,
      title: 'Interactive Content',
      description: 'Engaging multimedia lessons with quizzes, simulations, and real-time feedback to keep students motivated.',
      benefit: 'Increase engagement by 80%'
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Language Support',
      description: 'Comprehensive language support for 50+ languages with cultural context and regional adaptations.',
      benefit: 'Reach global student base'
    },
    {
      icon: ChartBarIcon,
      title: 'Progress Tracking',
      description: 'Detailed analytics and progress reports for students, parents, and educators with actionable insights.',
      benefit: 'Track learning milestones'
    },
    {
      icon: LightBulbIcon,
      title: 'Smart Assessments',
      description: 'AI-generated assessments that adapt difficulty based on student performance and learning objectives.',
      benefit: 'Accurate skill evaluation'
    },
    {
      icon: CogIcon,
      title: 'Curriculum Integration',
      description: 'Seamless integration with existing curricula and educational standards across different grade levels.',
      benefit: 'Align with educational goals'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual Student',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual learners and homeschooling',
      features: [
        'Access to all subjects',
        'Personalized learning paths',
        'Interactive lessons & quizzes',
        'Progress tracking',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Classroom',
      price: '$199',
      period: '/month',
      description: 'Ideal for teachers and small classrooms',
      features: [
        'Up to 30 students',
        'Teacher dashboard',
        'Class management tools',
        'Advanced analytics',
        'Custom lesson creation',
        'Parent communication',
        'Priority support',
        'Multi-language support',
        'Assessment tools'
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
        'District-wide analytics',
        'Custom curriculum integration',
        '24/7 dedicated support',
        'API integration',
        'White-label options',
        'Advanced reporting',
        'Custom training & onboarding',
        'SLA guarantee',
        'Multi-school management'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Elementary School Teacher, Lincoln Elementary',
      content: 'My students love the interactive lessons! Their test scores have improved by 40% since we started using Zion AI Tutor.',
      rating: 5
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Principal, Westside High School',
      content: 'The personalized learning approach has been a game-changer. Students who were struggling are now thriving.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Homeschool Parent',
      content: 'As a homeschooling parent, this AI tutor has been invaluable. It adapts to my child\'s learning style perfectly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Education Tutor - Zion Tech Group"
        description="Revolutionary AI-powered education platform with personalized learning, interactive content, and multi-language support. Improve learning outcomes by 65%."
        keywords="AI education tutor, personalized learning, interactive education, online tutoring, educational technology, adaptive learning, student analytics"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-slate-900 to-orange-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-8">
                <AcademicCapIcon className="w-4 h-4 mr-2" />
                AI-Powered Education Solutions
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  AI Education Tutor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform education with AI-powered personalized learning, interactive content, and comprehensive progress tracking. 
                Improve learning outcomes by 65% while engaging students like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-amber-400 text-amber-300 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">65%</div>
                  <div className="text-gray-300">Improved Outcomes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">80%</div>
                  <div className="text-gray-300">Increased Engagement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Revolutionary <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Learning Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered educational tools designed to enhance learning and improve student outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-amber-400 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {feature.benefit}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Affordable <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your educational needs. All plans include our core AI tutoring features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-amber-500 shadow-lg shadow-amber-500/25' 
                    : 'border-slate-700 hover:border-amber-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-amber-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700'
                      : 'border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Educators Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what educators and students are saying about our AI Education Tutor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-amber-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-amber-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-900/40 via-slate-900 to-orange-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of educators and students who trust Zion AI Education Tutor for better learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEducationTutorPage;
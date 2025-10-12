import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, BookOpen, Users, Award, Clock, Zap, Globe } from 'lucide-react'

export default function TrainingPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: 'Comprehensive Curriculum',
      description: 'Structured learning paths covering all aspects of modern technology and business skills.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Expert Instructors',
      description: 'Learn from industry experts with years of real-world experience and proven track records.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Certification Programs',
      description: 'Earn industry-recognized certifications to validate your skills and advance your career.'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: 'Flexible Scheduling',
      description: 'Choose from online, in-person, or hybrid training options that fit your schedule.'
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: 'Hands-on Learning',
      description: 'Practical, hands-on training with real-world projects and case studies.'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Global Access',
      description: 'Access training programs from anywhere in the world with our online platform.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Individual Training',
      price: '$299',
      period: '/course',
      description: 'Perfect for individual learners',
      features: [
        'Single course access',
        'Self-paced learning',
        'Basic support',
        'Certificate of completion',
        '6-month access',
        'Downloadable materials',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional Training',
      price: '$799',
      period: '/course',
      description: 'Ideal for professionals',
      features: [
        'Multiple course access',
        'Live instructor sessions',
        'Priority support',
        'Industry certification',
        '1-year access',
        'Advanced materials',
        'Career guidance',
        'Networking opportunities'
      ],
      popular: true
    },
    {
      name: 'Enterprise Training',
      price: '$2,999',
      period: '/team',
      description: 'For organizations',
      features: [
        'Unlimited course access',
        'Custom training programs',
        'Dedicated support',
        'Team certifications',
        'Lifetime access',
        'Custom materials',
        'On-site training',
        'Progress tracking'
      ],
      popular: false
    }
  ]

  const trainingPrograms = [
    'AI & Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Data Science',
    'Software Development',
    'Project Management',
    'Digital Marketing',
    'Business Analytics'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training Programs - Zion Tech Group | Professional Technology Training</title>
        <meta name="description" content="Professional technology training programs and certification courses. Learn from industry experts and advance your career with our comprehensive training solutions." />
        <meta name="keywords" content="technology training, professional development, certification courses, online learning, IT training, business skills" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Training
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advance your career with our comprehensive technology training programs. 
              Learn from industry experts and earn industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Course Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning solutions designed for modern professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the training package that fits your learning goals and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Training Programs
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive training programs covering the latest technologies and skills
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trainingPrograms.map((program, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{program}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Advance Your Career?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your professional development journey with our comprehensive training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Enroll Now
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
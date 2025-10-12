'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, BookOpen, Users, Award, Clock, Globe, Brain, Zap, Shield, Target, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TrainingPage: React.FC = () => {
  const courses = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence and machine learning technologies.',
      duration: '40 hours',
      level: 'Intermediate',
      benefits: ['Hands-on projects', 'Industry case studies', 'Certification', 'Career guidance']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Cloud Computing',
      description: 'Master cloud platforms and services for scalable application deployment.',
      duration: '35 hours',
      level: 'Beginner',
      benefits: ['AWS/Azure training', 'Practical labs', 'Real-world scenarios', 'Expert instructors']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Learn advanced cybersecurity techniques and best practices.',
      duration: '45 hours',
      level: 'Advanced',
      benefits: ['Security tools', 'Penetration testing', 'Incident response', 'Compliance training']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Web Development',
      description: 'Full-stack web development with modern frameworks and technologies.',
      duration: '50 hours',
      level: 'Beginner',
      benefits: ['Frontend/Backend', 'Database design', 'API development', 'Deployment strategies']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Project Management',
      description: 'Agile and traditional project management methodologies and tools.',
      duration: '30 hours',
      level: 'Intermediate',
      benefits: ['Agile frameworks', 'Tool proficiency', 'Team leadership', 'Risk management']
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      title: 'Data Analytics',
      description: 'Data analysis, visualization, and business intelligence techniques.',
      duration: '40 hours',
      level: 'Intermediate',
      benefits: ['Data tools', 'Visualization', 'Statistical analysis', 'Business insights']
    }
  ]

  const trainingFormats = [
    'In-Person Training',
    'Online Live Sessions',
    'Self-Paced Learning',
    'Corporate Training',
    'Workshop Sessions',
    'Certification Programs',
    'Mentorship Programs',
    'Hands-on Labs'
  ]

  const pricingPlans = [
    {
      name: 'Individual',
      price: '$299/course',
      description: 'Perfect for individual learners',
      features: [
        'Access to course materials',
        'Online support',
        'Certificate of completion',
        '6 months access',
        'Community forum'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/course',
      description: 'Advanced features for professionals',
      features: [
        'All Individual features',
        '1-on-1 mentoring',
        'Career guidance',
        '12 months access',
        'Priority support',
        'Project portfolio review',
        'Job placement assistance'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored training for organizations',
      features: [
        'Custom curriculum',
        'On-site training',
        'Dedicated instructor',
        'Unlimited access',
        '24/7 support',
        'Custom assessments',
        'Team collaboration tools',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '1000+', label: 'Students Trained' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '24/7', label: 'Learning Support' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Training & Education - Zion Tech Group</title>
        <meta name="description" content="Professional training and education programs in AI, cloud computing, cybersecurity, and web development. Expert-led courses for career advancement." />
        <meta name="keywords" content="training, education, courses, AI training, cloud computing, cybersecurity, web development, professional development, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Training
            </span>
            <br />
            <span className="text-white">& Education</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advance your career with our comprehensive training programs. Expert-led courses in AI, 
            cloud computing, cybersecurity, and more to help you stay ahead in the tech industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Browse Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Training Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs designed to advance your skills and career in technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-300">{course.duration}</span>
                  <span className="text-sm text-blue-300">{course.level}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {course.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Training Formats
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible learning options to fit your schedule and learning preferences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trainingFormats.map((format, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your learning needs. All plans include our core training features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Advance Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of professionals who have advanced their careers with our training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse All Courses
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TrainingPage
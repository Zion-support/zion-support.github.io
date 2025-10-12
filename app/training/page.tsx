'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, GraduationCap, Users, BookOpen, Award, Clock, Star, Phone, Mail, Target, Zap, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrainingPage: React.FC = () => {
  const features = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'Technical Training',
      description: 'Comprehensive technical training programs for AI, cloud computing, and emerging technologies.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Workshops',
      description: 'Interactive workshops designed to enhance team collaboration and technical skills.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      title: 'Certification Programs',
      description: 'Industry-recognized certification programs to validate technical expertise.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Leadership Development',
      description: 'Executive and leadership training programs for technology leaders.'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: 'Flexible Scheduling',
      description: 'Online, in-person, and hybrid training options to fit your schedule.'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-500" />,
      title: 'Custom Curriculum',
      description: 'Tailored training programs designed for your specific business needs.'
    }
  ]

  const benefits = [
    'Improve team technical skills',
    'Increase productivity and efficiency',
    'Reduce training costs by 40%',
    'Enhance employee retention',
    'Stay current with technology trends',
    'Boost team confidence and morale'
  ]

  const programs = [
    {
      name: 'AI & Machine Learning',
      description: 'Comprehensive training in artificial intelligence and machine learning technologies',
      duration: '40 hours',
      price: 'Starting at $2,500'
    },
    {
      name: 'Cloud Computing',
      description: 'AWS, Azure, and Google Cloud platform training and certification',
      duration: '32 hours',
      price: 'Starting at $2,000'
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced cybersecurity training and ethical hacking certification',
      duration: '48 hours',
      price: 'Starting at $3,000'
    },
    {
      name: 'Data Analytics',
      description: 'Data science, analytics, and visualization training programs',
      duration: '36 hours',
      price: 'Starting at $2,200'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'The AI training program transformed our team\'s capabilities. Highly recommended.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Excellent instructors and practical curriculum. Our team is now certified in cloud technologies.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Training Services - Zion Tech Group | Professional Technology Education</title>
        <meta name="description" content="Professional training services including technical training, certification programs, team workshops, and leadership development. Enhance your team's skills with expert-led training programs." />
        <meta name="keywords" content="training services, technical training, certification programs, team workshops, leadership development, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Training Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Professional training services to enhance your team's technical skills and expertise. 
                Expert-led programs in AI, cloud computing, cybersecurity, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Training Program
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Course Catalog
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Training Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional training programs designed to enhance your team's technical capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Training Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of professional technology training and skill development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-gray-300">Technical Training</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-gray-300">Team Workshops</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
                    <span className="text-gray-300">Certification Programs</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-orange-400 mr-3" />
                    <span className="text-gray-300">Leadership Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Training Programs
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of professional training programs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{program.name}</h3>
                  <p className="text-gray-300 mb-4">{program.description}</p>
                  <div className="text-sm text-purple-300 mb-4">{program.duration}</div>
                  <div className="text-2xl font-bold text-purple-400 mb-6">{program.price}</div>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 block text-center"
                  >
                    Enroll Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from professionals who have benefited from our training.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Team's Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our training experts help you develop your team's technical capabilities and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TrainingPage
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Users, Award, MapPin, Clock, DollarSign, Heart, Zap, Shield, Globe } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of AI-powered solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of ML algorithms and deep learning'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with Docker, Kubernetes, Terraform',
        'Experience with cloud platforms and monitoring tools',
        'Knowledge of security best practices'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years technical sales experience',
        'Strong presentation and communication skills',
        'Experience with enterprise software sales'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Commission structure']
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours',
      icon: Globe
    },
    {
      title: 'Learning & Growth',
      description: 'Annual learning budget and conference attendance',
      icon: Brain
    },
    {
      title: 'Competitive Pay',
      description: 'Market-competitive salaries with equity options',
      icon: DollarSign
    },
    {
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and mental health support',
      icon: Clock
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation',
      icon: Zap
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and cutting-edge thinking.',
      icon: Brain
    },
    {
      title: 'Collaborative',
      description: 'We believe in the power of diverse teams working together.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do.',
      icon: Award
    },
    {
      title: 'Security',
      description: 'We prioritize security and data protection in all our work.',
      icon: Shield
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Help us build the future of technology. We're looking for passionate individuals 
                who want to make a real impact in the world of AI and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#positions"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-xl text-gray-600">
                What makes working at Zion Tech Group special
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-600">
                We take care of our team so they can do their best work
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Find your next opportunity with us
              </p>
            </div>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link 
                      href={`/contact?position=${encodeURIComponent(position.title)}`}
                      className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Apply Now
                    </Link>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-xl mb-12 opacity-90">
                Simple steps to join our team
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Apply</h3>
                  <p className="text-sm opacity-90">Submit your application and resume</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Interview</h3>
                  <p className="text-sm opacity-90">Initial phone/video interview</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Technical</h3>
                  <p className="text-sm opacity-90">Technical assessment and team interview</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Offer</h3>
                  <p className="text-sm opacity-90">Welcome to the team!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals. Send us your resume and let's talk about how you can contribute to our mission.
              </p>
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Send Us Your Resume
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
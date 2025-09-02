import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { MapPin, Clock, Users, Heart, ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ]
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build scalable web applications and micro SaaS platforms.',
      requirements: [
        '3+ years full-stack development',
        'React, Node.js, and database experience',
        'Cloud deployment knowledge',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Design and maintain cloud infrastructure and CI/CD pipelines.',
      requirements: [
        '4+ years DevOps experience',
        'AWS/Azure/GCP expertise',
        'Kubernetes and Docker knowledge',
        'Infrastructure as Code experience'
      ]
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Design',
      description: 'Create intuitive and engaging user experiences for our products.',
      requirements: [
        '3+ years UX/UI design experience',
        'Figma and Adobe Creative Suite',
        'User research and testing skills',
        'Portfolio demonstrating design thinking'
      ]
    },
    {
      title: 'Sales Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Sales',
      description: 'Help clients understand our technology solutions and drive sales growth.',
      requirements: [
        '2+ years technical sales experience',
        'Strong communication skills',
        'Technical background preferred',
        'Customer-focused mindset'
      ]
    },
    {
      title: 'Marketing Manager',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Marketing',
      description: 'Develop and execute marketing strategies to grow our brand presence.',
      requirements: [
        '3+ years marketing experience',
        'Digital marketing expertise',
        'Content creation skills',
        'Analytics and reporting knowledge'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance'
    },
    {
      icon: Star,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and career development programs'
    },
    {
      icon: MapPin,
      title: 'Modern Office',
      description: 'Beautiful office space in Middletown, DE with all the amenities'
    }
  ];

  const values = [
    'Innovation and continuous learning',
    'Collaboration and teamwork',
    'Customer-centric approach',
    'Transparency and integrity',
    'Work-life balance',
    'Diversity and inclusion'
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, IT services, and micro SaaS development. Remote and on-site positions available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of a team that's transforming businesses through innovative technology solutions. 
                We're looking for passionate individuals who want to make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The principles that guide our work and culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">
                Find your next career opportunity with us
              </p>
            </div>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-lg text-gray-600">
                Simple steps to join our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply</h3>
                <p className="text-gray-600 text-sm">Submit your application with resume and cover letter</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-600 text-sm">Our team reviews your application and qualifications</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Meet with our team for technical and cultural fit</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome</h3>
                <p className="text-gray-600 text-sm">Join our team and start your journey with us</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
              >
                <span>Send Resume</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/about" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
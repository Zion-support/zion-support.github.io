import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Heart
} from 'lucide-react';

const TalentIndex: NextPage = () => {
  const jobOpenings = [
    {
      title: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      department: 'Engineering',
      description: 'We are looking for an experienced full-stack developer to join our engineering team.',
      requirements: [
        '5+ years of experience in web development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong problem-solving skills'
      ]
    }, {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'AI Research',
      description: 'Join our AI team to develop cutting-edge machine learning solutions.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        'Experience with TensorFlow, PyTorch',
        'Strong background in machine learning algorithms',
        'Experience with data pipelines'
      ]
    }, {
      title: 'DevOps Engineer',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Infrastructure',
      description: 'Help us build and maintain our cloud infrastructure and CI/CD pipelines.',
      requirements: [
        '3+ years of DevOps experience',
        'Experience with Kubernetes and Docker',
        'Knowledge of AWS/Azure services',
        'Experience with monitoring tools'
      ]
    }, {
      title: 'UI/UX Designer',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      department: 'Design',
      description: 'Create beautiful and intuitive user experiences for our products.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio of design work',
        'Experience with user research'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs.'
    }, {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs.'
    }, {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    }, {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment, team events, and inclusive workplace culture.'
    }
  ];

  return (
    <MainLayout 
      title="Careers - Zion Tech Group"
      description="Join our team of talented professionals and help us build the future of technology. Explore career opportunities at Zion Tech Group."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Be part of a team that&apos;s building the future of technology. We&apos;re looking for passionate 
              individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career path with growth opportunities and a supportive environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zion Tech Group, we believe that great technology comes from great people. 
                We foster a culture of innovation, collaboration, and continuous learning.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team is diverse, inclusive, and passionate about solving complex problems 
                that make a real difference in the world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-600">Women in Tech</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                  <div className="text-gray-600">Employee Rating</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Team Photo Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </MainLayout>
  )};

export default TalentIndex;
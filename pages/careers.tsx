import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, Clock, Users, Award, Heart, Lightbulb, Target, ArrowRight, Mail, Phone, Building, Globe, Code, Brain, Shield, Cloud } from 'lucide-react';

export default function Careers() {
  const openPositions = [
  {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field,5+ years experience in AI/ML development,Proficiency in Python, TensorFlow, PyTorch,Experience with cloud platforms (AWS, Azure, GCP),Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      icon: Cloud,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,7+ years experience in cloud architecture,Certifications in AWS, Azure, or GCP,Experience with containerization (Docker, Kubernetes),Strong understanding of DevOps practices'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      icon: Shield,
      description: 'Protect our clients\' digital assets with advanced security solutions and threat analysis.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field,4+ years experience in cybersecurity,Certifications (CISSP, CISM, CEH preferred),Experience with security tools and frameworks,Knowledge of compliance standards (SOC 2, ISO 27001)'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: Code,
      description: 'Build innovative web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field,3+ years experience in full-stack development,Proficiency in React, Node.js, TypeScript,Experience with databases (PostgreSQL, MongoDB),Knowledge of modern development practices'
      ]
    }
  ];

  const benefits = [
  {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses',
      icon: Award
    },
    {
      title: 'Flexible Work Environment',
      description: 'Remote work options and flexible hours',
      icon: Globe
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: Heart
    },
    {
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities',
      icon: Lightbulb
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation',
      icon: Target
    },
    {
      title: 'Team Building',
      description: 'Regular team events and company retreats',
      icon: Users
    }
  ];

  const companyValues = [
  {
      title: 'Innovation First',
      description: 'We push the boundaries of technology to create solutions that matter.',
      icon: Lightbulb
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by our clients\' achievements and satisfaction.',
      icon: Target
    },
    {
      title: 'Collaborative Culture',
      description: 'We believe in the power of teamwork and diverse perspectives.',
      icon: Users
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development.',
      icon: Award
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technologists. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Build the future of technology with us. We're looking for passionate innovators to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#positions">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Open Positions
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career with purpose
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Find your next career opportunity with us
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <position.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-gray-600 mb-2">{position.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {position.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            {position.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Requirements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:careers@ziontechgroup.com" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                careers@ziontechgroup.com
              </a>
              <a href="tel:+13024640950" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Send Your Resume
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and professional development budget.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in an inclusive and innovative environment.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    }
  ];

  const positions = [
    {
      title: 'Senior Full-Stack Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead development of web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'AI Solutions',
      description: 'Design and implement machine learning models and AI-powered applications.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud solutions using AWS, Azure, and GCP.'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Security',
      description: 'Implement security measures and ensure compliance with industry standards.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Automate deployment processes and maintain CI/CD pipelines.'
    },
    {
      title: 'UX/UI Designer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Design',
      description: 'Create intuitive and engaging user experiences for our digital products.'
    }
  ];

  const values = [
    'Innovation',
    'Collaboration',
    'Excellence',
    'Integrity',
    'Growth',
    'Diversity'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, developer, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build the future of technology with us
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We're looking for passionate individuals who want to make a difference in the world of technology. 
              Join us in creating innovative solutions that transform businesses and improve lives.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and culture
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <h3 className="text-white font-semibold">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current job opportunities at Zion Tech Group
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">{position.type}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{position.location}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{position.department}</span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Middletown, DE</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Work Hours</h3>
                <p className="text-gray-300">Monday - Friday, 9 AM - 6 PM</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Team Size</h3>
                <p className="text-gray-300">25+ Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead AI model development and implementation projects',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions',
      requirements: [
        '7+ years cloud architecture experience',
        'AWS, Azure, GCP certifications',
        'Infrastructure as Code expertise',
        'Strong communication skills'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Drive AI product strategy and roadmap development',
      requirements: [
        '3+ years product management experience',
        'AI/ML domain knowledge',
        'Strong analytical skills',
        'Customer-focused mindset'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Automate deployment and infrastructure management',
      requirements: [
        '4+ years DevOps experience',
        'Docker, Kubernetes expertise',
        'CI/CD pipeline experience',
        'Monitoring and logging tools'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited PTO policy',
    'Latest technology equipment',
    'Team building events',
    'Career growth opportunities'
  ];

  const values = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives'
    },
    {
      icon: Heart,
      title: 'Innovation',
      description: 'We encourage creative thinking and bold ideas'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, tech jobs, remote work, Delaware" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of AI and IT experts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and IT solutions. Join a team of passionate innovators working on cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
              >
                Send Resume
              </a>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Benefits & Perks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{requirement}</span>
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
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
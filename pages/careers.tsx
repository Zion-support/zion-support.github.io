import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { MapPin, Clock, Users, Heart, ArrowRight, CheckCircle } from 'lucide-react';

export default function Careers() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const openPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'AI Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead development of AI solutions and machine learning models for enterprise clients.',
      requirements: ['5+ years ML experience', 'Python, TensorFlow, PyTorch', 'Cloud platforms (AWS/Azure)', 'PhD in CS or related field preferred']
    },
    {
      title: 'Cloud DevOps Engineer',
      department: 'Cloud Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions using modern DevOps practices.',
      requirements: ['3+ years DevOps experience', 'Kubernetes, Docker, Terraform', 'AWS/Azure/GCP expertise', 'CI/CD pipeline development']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Protect enterprise clients from cyber threats and ensure compliance with security standards.',
      requirements: ['4+ years security experience', 'CISSP/CISM certification', 'SIEM/SOAR platforms', 'Incident response expertise']
    },
    {
      title: 'Full-Stack Developer',
      department: 'Micro SaaS',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Build innovative micro SaaS products using modern web technologies.',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Database design', 'API development']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Cutting-edge technology stack',
    'Collaborative team environment',
    'Unlimited PTO policy',
    '401(k) with company matching'
  ];

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of technology to create groundbreaking solutions.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we deliver to our clients.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      title: 'Growth',
      description: 'We invest in our team\'s professional development and career advancement.'
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and software development." />
        <meta name="keywords" content="careers, jobs, AI engineer, DevOps, cybersecurity, software developer, remote work, technology careers" />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and software development." />
        <meta property="og:url" content={`${contact.site}/careers`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of technology. We&apos;re looking for passionate 
              individuals who want to make a difference in AI, cloud computing, 
              cybersecurity, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contact.email}?subject=Career Inquiry`}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Send Your Resume
              </a>
              <Link 
                href="/about" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-lg font-semibold transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`mailto:${contact.email}?subject=Application for ${position.title}`}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-slate-300 mb-4">{position.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't See Your Role? */}
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Don&apos;t See Your Perfect Role?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation. 
              Send us your resume and let us know how you&apos;d like to contribute to our mission.
            </p>
            <a 
              href={`mailto:${contact.email}?subject=General Career Inquiry`}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Send Your Resume <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
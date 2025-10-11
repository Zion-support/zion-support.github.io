'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap, Briefcase, Award, GraduationCap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: ['PhD in Computer Science', '5+ years ML experience', 'Python, TensorFlow, PyTorch'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
      posted: '2024-01-15',
      featured: true
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies.',
      requirements: ['React, Node.js, TypeScript', '3+ years experience', 'AWS/Cloud experience'],
      benefits: ['Flexible hours', 'Learning budget', 'Stock options'],
      posted: '2024-01-12',
      featured: false
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines.',
      requirements: ['AWS, Docker, Kubernetes', '4+ years experience', 'CI/CD expertise'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
      posted: '2024-01-10',
      featured: false
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and roadmap for AI solutions.',
      requirements: ['Product management experience', 'AI/ML knowledge', 'Strong communication'],
      benefits: ['Flexible hours', 'Learning budget', 'Stock options'],
      posted: '2024-01-08',
      featured: false
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create intuitive user experiences for our AI-powered applications.',
      requirements: ['Figma, Adobe Creative Suite', '2+ years experience', 'Portfolio required'],
      benefits: ['Flexible hours', 'Learning budget', 'Stock options'],
      posted: '2024-01-05',
      featured: false
    },
    {
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze data and build predictive models for business insights.',
      requirements: ['Python, R, SQL', '3+ years experience', 'Statistics background'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work'],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Learning budget, conference attendance, and career development programs'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Competitive compensation, stock options, and performance bonuses'
    }
  ];

  const culture = [
    'Innovation-driven environment',
    'Collaborative team culture',
    'Continuous learning opportunities',
    'Diverse and inclusive workplace',
    'Cutting-edge technology stack',
    'Impact on real-world problems'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of AI and technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, remote work, tech careers" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and technology. Join a team of passionate innovators making a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer more than just a job - we offer a career with purpose and growth opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                We believe in creating an environment where everyone can thrive and make a meaningful impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {culture.map((item, index) => (
                <div key={index} className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-cyan-200 mr-3" />
                  <span className="text-cyan-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${job.featured ? 'ring-2 ring-cyan-500' : ''}`}>
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-500 mr-2" />
                      <span className="text-sm text-cyan-600 font-medium">Featured Position</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600 mb-2">{job.department}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {benefit}
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Send Resume
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact HR
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CareersPage;
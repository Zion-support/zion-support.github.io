'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, MapPin, Clock, Users, Heart, Zap, Globe, Award } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML/AI experience', 'Python, TensorFlow, PyTorch'],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Flexible work']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our systems and data from cyber threats and ensure compliance.',
      requirements: ['CISSP or equivalent certification', '3+ years security experience', 'Knowledge of security frameworks'],
      benefits: ['Competitive salary', 'Remote work', 'Professional development', 'Health insurance']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: ['AWS/Azure/GCP certifications', '7+ years cloud experience', 'Kubernetes, Docker expertise'],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Flexible work']
    }
  ];

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: <Zap className="w-6 h-6" />, title: 'Learning & Growth', description: 'Professional development and conference attendance' },
    { icon: <Globe className="w-6 h-6" />, title: 'Flexible Work', description: 'Remote work options and flexible hours' },
    { icon: <Award className="w-6 h-6" />, title: 'Recognition', description: 'Performance bonuses and recognition programs' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity, cloud architect, technology careers" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mission</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of a team that's revolutionizing technology and building the future of AI, cybersecurity, and cloud solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">
                We're not just building software – we're creating the future. Join us and make a real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300">
                Find your perfect role and start your journey with us today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
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
        </div>

        {/* Culture Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-xl text-gray-300 mb-12">
                We believe in fostering an environment where innovation thrives and every team member can make a meaningful impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">I</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                  <p className="text-gray-300">We encourage creative thinking and bold ideas that push the boundaries of what's possible.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
                  <p className="text-gray-300">We work together as one team, supporting each other to achieve our shared goals.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">E</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                  <p className="text-gray-300">We strive for the highest standards in everything we do, from code quality to customer service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Join our team and help us build the future of technology. We're always looking for talented individuals who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  View All Positions
                </button>
                <button className="px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CareersPage;
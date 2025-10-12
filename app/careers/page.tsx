import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Users, Heart, Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function CareersPage() {
  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited vacation policy',
    'Stock options program'
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead AI model development and implementation projects'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for AI services'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and infrastructure'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Technical sales support for enterprise clients'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design intuitive user experiences for AI-powered applications'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and experimentation',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Growth',
      description: 'We invest in our team\'s professional development',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Impact',
      description: 'We build solutions that make a real difference',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, product manager, remote work" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and technology. Join a team of passionate 
                innovators working on cutting-edge solutions that transform businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Apply Now
                </Link>
                <Link 
                  to="/about" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide our work and culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join our team and help shape the future of technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {position.title}
                    </h3>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <span className="mr-4">{position.department}</span>
                    <span>{position.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Culture
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we believe in creating an inclusive and supportive 
                  environment where everyone can thrive. We value diversity, encourage 
                  innovation, and celebrate success together.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team is made up of passionate individuals who are committed to 
                  making a positive impact through technology. We work hard, have fun, 
                  and support each other's growth and development.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">What Our Team Says</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-300 italic mb-2">
                      "Working at Zion Tech Group has been an incredible experience. 
                      The team is supportive, the work is challenging, and the impact 
                      we're making is real."
                    </p>
                    <p className="text-purple-400 font-semibold">- Sarah, AI Engineer</p>
                  </div>
                  <div>
                    <p className="text-gray-300 italic mb-2">
                      "The culture here is amazing. Everyone is passionate about what 
                      they do and always willing to help each other grow."
                    </p>
                    <p className="text-purple-400 font-semibold">- Mike, Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see a position that fits? We're always looking for talented people. 
              Send us your resume and let's talk about how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Send Your Resume
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
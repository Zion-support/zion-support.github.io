import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers - Zion Tech Group",
    "description": "Join our team of innovative AI and IT professionals. Explore career opportunities at Zion Tech Group.",
    "url": "https://ziontechgroup.com/careers"
  };

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: LightBulbIcon,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation time.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Career Growth',
      description: 'Clear career progression paths and opportunities for advancement.'
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead 
        title="Careers - Zion Tech Group"
        description="Join our team of innovative AI and IT professionals. Explore career opportunities at Zion Tech Group."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate, innovative individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                View Open Positions
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment that fosters growth and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-4">{position.department}</span>
                  <span className="mr-4">•</span>
                  <span className="mr-4">{position.location}</span>
                  <span>•</span>
                  <span className="ml-4">{position.type}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't see a position that matches your skills? We're always looking for talented individuals. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Send Your Resume
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
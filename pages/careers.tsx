import React from 'react';
import Layout from '../components/Layout';
import { 
  Users, 
  MapPin, 
  Clock, 
  Briefcase, 
  Heart, 
  Zap, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Code,
  Brain,
  Shield
} from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and career development'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '7+ years',
      icon: Globe
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      icon: Shield
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '3+ years',
      icon: Code
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '5+ years',
      icon: Briefcase
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      experience: '4+ years',
      icon: Zap
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies'
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve common goals and support each other'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and help them reach their potential'
    }
  ];

  return (
    <Layout
      title="Careers - Zion Tech Group"
      description="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and more."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us build the future of technology. We're looking for passionate individuals who want to make a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#positions"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Open Positions
            </a>
            <a
              href="#culture"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Heart className="mr-2 h-5 w-5" />
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose, growth, and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <position.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-sm text-gray-600">{position.department}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {position.type}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    {position.experience}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Don't see a position that fits? We're always looking for talented individuals. Send us your resume and let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Contact Us
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Building className="mr-2 h-5 w-5" />
              Send Resume
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
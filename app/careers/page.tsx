import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Lead AI solution development and implementation for enterprise clients.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred'],
      salary: '$120,000 - $180,000'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
      requirements: ['3+ years DevOps experience', 'AWS, Azure, Kubernetes', 'Docker, Terraform'],
      salary: '$90,000 - $140,000'
    },
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create modern, responsive user interfaces for our AI applications.',
      requirements: ['3+ years React experience', 'TypeScript, Next.js', 'UI/UX design skills'],
      salary: '$80,000 - $130,000'
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze data and build predictive models for business intelligence.',
      requirements: ['4+ years data science experience', 'Python, R, SQL', 'Machine Learning expertise'],
      salary: '$100,000 - $150,000'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Protect our systems and client data with advanced security measures.',
      requirements: ['4+ years security experience', 'CISSP, CISM certifications', 'SIEM, EDR tools'],
      salary: '$110,000 - $160,000'
    },
    {
      title: 'Product Manager',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      description: 'Lead product strategy and development for AI-powered solutions.',
      requirements: ['5+ years product management', 'AI/ML product experience', 'Agile methodology'],
      salary: '$130,000 - $180,000'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work options with home office stipend'
    },
    {
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      title: 'Equity Options',
      description: 'Stock options in a fast-growing AI company'
    },
    {
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build the future of AI with us. We're looking for passionate individuals who want to make a real impact.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Remote Friendly</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">$120k</div>
              <div className="text-gray-600">Avg Salary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{position.type}</span>
                  </div>
                  <div className="text-green-600 font-semibold">{position.salary}</div>
                </div>

                <p className="text-gray-600 mb-4">{position.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-600 flex items-center">
                        <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all inline-block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Work With Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't see a position that fits? We're always looking for exceptional talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="mailto:careers@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
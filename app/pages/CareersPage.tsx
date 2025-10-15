import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Python, TensorFlow, PyTorch expertise',
        'Strong problem-solving skills',
        'PhD in Computer Science preferred'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'IT Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years cloud architecture experience',
        'AWS, Azure, GCP certifications',
        'Kubernetes and Docker expertise',
        'Strong communication skills'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Protect our clients from cyber threats with advanced security solutions.',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP, CISM certifications preferred',
        'Penetration testing skills',
        'Incident response experience'
      ]
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful and responsive user interfaces for our web applications.',
      requirements: [
        '3+ years React/Next.js experience',
        'TypeScript proficiency',
        'UI/UX design skills',
        'Modern CSS frameworks'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: [
        '4+ years DevOps experience',
        'CI/CD pipeline expertise',
        'Infrastructure as Code',
        'Monitoring and logging tools'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Extract insights from complex data sets to drive business decisions.',
      requirements: [
        '3+ years data science experience',
        'Python, R, SQL proficiency',
        'Statistical modeling skills',
        'Machine learning expertise'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and knowledge sharing'
    },
    {
      icon: Zap,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and continuous learning opportunities'
    },
    {
      icon: Target,
      title: 'Career Development',
      description: 'Clear career paths, mentorship programs, and advancement opportunities'
    }
  ];

  const values = [
    'Innovation and creativity',
    'Collaboration and teamwork',
    'Continuous learning',
    'Client success focus',
    'Work-life balance',
    'Diversity and inclusion'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-rose-100">
              Be part of the future of technology with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and join our growing team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <p className="text-rose-600 font-semibold mb-1">
                      {position.department}
                    </p>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {position.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Target className="w-5 h-5 text-rose-500 mr-3" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg mb-4">
                We're building the future of technology, one innovative solution at a time. 
                Join us in creating meaningful impact for businesses worldwide.
              </p>
              <p className="text-lg">
                At Zion Tech Group, we believe that great technology comes from great people. 
                We're looking for passionate individuals who share our vision and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Don't see a position that fits? We're always looking for talented individuals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Us Your Resume
            </a>
            <a
              href="/about"
              className="border border-white text-white hover:bg-white hover:text-slate-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science or related field']
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['7+ years cloud experience', 'AWS, Azure, GCP certifications', 'Strong architecture skills']
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat monitoring.',
      requirements: ['4+ years security experience', 'CISSP, CISM certifications', 'Incident response expertise']
    },
    {
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces for our AI and IT solutions.',
      requirements: ['3+ years React experience', 'TypeScript, Tailwind CSS', 'UI/UX design skills']
    },
    {
      title: 'DevOps Engineer',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: ['4+ years DevOps experience', 'Docker, Kubernetes, CI/CD', 'Infrastructure as Code']
    },
    {
      title: 'Technical Writer',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create comprehensive documentation and technical content for our solutions.',
      requirements: ['2+ years technical writing', 'API documentation experience', 'Strong communication skills']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented, passionate professionals in a supportive and inclusive environment.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of the future of technology with Zion Tech Group
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We're looking for passionate, innovative professionals who want to make a difference 
              in the world of AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore exciting career opportunities and find your perfect role
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {positions.map((position, index) => (
              <div 
                key={position.title}
                className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 border border-slate-700 hover:border-rose-500"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{position.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {position.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose and growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-rose-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Don't see the perfect role? We're always looking for talented individuals to join our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Resume
              </a>
              <a
                href="/about"
                className="border-2 border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
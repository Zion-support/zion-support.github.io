import React from 'react';
import { CheckCircle, ArrowRight, Users, MapPin, Clock, DollarSign, Heart, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML experience', 'Python, TensorFlow, PyTorch', 'Cloud platforms (AWS, Azure, GCP)'],
      link: '/careers/senior-ai-engineer'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS/Azure/GCP certifications', '7+ years cloud experience', 'Infrastructure as Code', 'DevOps methodologies'],
      link: '/careers/cloud-solutions-architect'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our web applications.',
      requirements: ['React, TypeScript, Next.js', '3+ years frontend experience', 'UI/UX design skills', 'Responsive design'],
      link: '/careers/frontend-developer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage CI/CD pipelines and infrastructure automation for our development teams.',
      requirements: ['Docker, Kubernetes, Jenkins', '4+ years DevOps experience', 'Linux administration', 'Monitoring tools'],
      link: '/careers/devops-engineer'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Boston',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI and cloud services.',
      requirements: ['5+ years product management', 'Technical background', 'Agile methodologies', 'Customer research'],
      link: '/careers/product-manager'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Chicago',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Support sales team with technical expertise and solution demonstrations.',
      requirements: ['Technical degree', '3+ years sales engineering', 'Presentation skills', 'Customer-facing experience'],
      link: '/careers/sales-engineer'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses and equity options.'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Learning & Growth',
      description: 'Professional development budget, conferences, and mentorship programs.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Great Team',
      description: 'Work with talented, passionate people who love what they do.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-indigo-500" />,
      title: 'Remote First',
      description: 'Work from anywhere with occasional team meetups and retreats.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of technology and encourage creative thinking.'
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team to achieve common goals and support each other.'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do and deliver.'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and provide opportunities for continuous learning.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals building the future of AI and cloud technology. Explore open positions and benefits at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, frontend developer, DevOps, remote work, tech jobs" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of AI and cloud technology with a team of passionate professionals. We're looking for talented individuals who share our vision of transforming businesses through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#open-positions" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a great work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join our team and help us build the future of technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {position.location}
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {position.department}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {position.experience}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.slice(0, 3).map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={position.link}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Your Resume
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;

import React from 'react';
import { CheckCircle, ArrowRight, Users, Briefcase, MapPin, Clock, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      salary: '$120,000 - $180,000',
      posted: '2 days ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Expertise in Docker, Kubernetes, CI/CD',
        'Experience with cloud platforms and monitoring tools',
        'Strong scripting skills (Bash, Python)'
      ],
      salary: '$90,000 - $140,000',
      posted: '1 week ago'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating strong design skills'
      ],
      salary: '$80,000 - $120,000',
      posted: '3 days ago'
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Chicago, IL',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Help clients understand and implement our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '4+ years of technical sales experience',
        'Strong technical background in AI/IT',
        'Excellent presentation and communication skills',
        'Experience with enterprise software sales'
      ],
      salary: '$100,000 - $150,000 + Commission',
      posted: '5 days ago'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with equity options',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      icon: <Star className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Learning & Growth',
      description: 'Professional development opportunities and conference attendance',
      icon: <Users className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior AI Engineer',
      content: 'Working at Zion Tech Group has been incredible. The team is brilliant, the projects are cutting-edge, and the culture is supportive and collaborative.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'DevOps Engineer',
      content: 'The remote work culture here is amazing. I have the flexibility I need while working on exciting infrastructure challenges.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      content: 'I love being able to work on AI-powered products that make a real difference. The design challenges are always interesting and rewarding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. We're looking for talented individuals to help us build the future of AI and IT solutions. Explore open positions and benefits." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, AI engineer, DevOps, UX designer, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of AI and IT solutions. We're building cutting-edge technology 
            and looking for talented individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              to="/careers#positions"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">{position.posted}</span>
                </div>

                <div className="flex items-center text-gray-300 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {position.location}
                  <span className="mx-2">•</span>
                  <Briefcase className="w-4 h-4 mr-2" />
                  {position.experience}
                </div>

                <p className="text-gray-300 mb-4">{position.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {position.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                    {position.requirements.length > 3 && (
                      <li className="text-gray-400 text-xs">
                        +{position.requirements.length - 3} more requirements
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{position.salary}</span>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center"
                  >
                    Apply
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a great work environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Team Says
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our current team members about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's talk about opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
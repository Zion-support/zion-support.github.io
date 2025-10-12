import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TeamPage() {
  const leadership = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: '20+ years in technology leadership, previously CTO at Fortune 500 companies. Passionate about AI and its potential to transform businesses.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      email: 'john@ziontechgroup.com'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'AI and Machine Learning expert with PhD from Stanford. Led AI initiatives at Google and Microsoft before joining Zion Tech Group.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Mike Chen',
      role: 'VP of Engineering',
      bio: 'Full-stack development specialist with expertise in cloud architecture and DevOps. Passionate about building scalable solutions.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      email: 'mike@ziontechgroup.com'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      bio: 'UX/UI design expert with 10+ years experience creating intuitive user experiences. Former design lead at Apple and Airbnb.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      email: 'emily@ziontechgroup.com'
    }
  ];

  const departments = [
    {
      name: 'AI & Machine Learning',
      description: 'Our AI team develops cutting-edge machine learning models and AI solutions that power our clients\' digital transformation.',
      teamSize: '12 engineers',
      specialties: ['Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Expert cloud architects and DevOps engineers who design and maintain scalable, secure cloud solutions.',
      teamSize: '8 engineers',
      specialties: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      name: 'Cybersecurity',
      description: 'Security specialists who protect our clients\' digital assets with advanced threat detection and prevention systems.',
      teamSize: '6 specialists',
      specialties: ['Threat Intelligence', 'Incident Response', 'Compliance', 'Penetration Testing']
    },
    {
      name: 'Product & Design',
      description: 'Product managers and designers who create intuitive, user-friendly interfaces for our AI-powered applications.',
      teamSize: '10 professionals',
      specialties: ['Product Strategy', 'UX/UI Design', 'User Research', 'Prototyping']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Remote-First' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented individuals behind Zion Tech Group. Our diverse team of experts is dedicated to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="team, leadership, AI experts, cloud engineers, cybersecurity specialists, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals who make Zion Tech Group a leader in technology solutions. 
              We're a diverse, global team united by our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced leaders guide our vision and drive innovation across all areas of our business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized teams working together to deliver comprehensive technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">{dept.name}</h3>
                <p className="text-gray-300 mb-4">{dept.description}</p>
                <p className="text-purple-400 font-medium mb-6">{dept.teamSize}</p>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe that great technology comes from great people. Our culture is built on collaboration, 
                innovation, and a shared passion for solving complex problems.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We're a remote-first company that values work-life balance, continuous learning, and diversity. 
                Every team member has a voice and the opportunity to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/careers"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center"
                >
                  Join Our Team
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Value</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Innovation and cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Collaboration and teamwork</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Work-life balance and flexibility</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Diversity and inclusion</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Continuous learning and growth</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Client success and satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
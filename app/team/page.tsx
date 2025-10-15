import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  UserGroupIcon, 
  EnvelopeIcon, 
  LinkedinIcon,
  TwitterIcon,
  GithubIcon
} from '@heroicons/react/24/outline';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology and business strategy. Former CTO at Fortune 500 companies.',
      image: '/api/placeholder/300/300',
      email: 'john@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
      github: 'https://github.com/johnsmith'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'Technical expert specializing in AI and cloud architecture. PhD in Computer Science from MIT.',
      image: '/api/placeholder/300/300',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      twitter: 'https://twitter.com/sarahjohnson',
      github: 'https://github.com/sarahjohnson'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Security',
      bio: 'Cybersecurity specialist with extensive experience in enterprise security and compliance.',
      image: '/api/placeholder/300/300',
      email: 'mike@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/mikechen',
      twitter: 'https://twitter.com/mikechen',
      github: 'https://github.com/mikechen'
    },
    {
      name: 'Emily Davis',
      role: 'Head of AI Research',
      bio: 'Leading AI researcher with expertise in machine learning and natural language processing.',
      image: '/api/placeholder/300/300',
      email: 'emily@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emilydavis',
      twitter: 'https://twitter.com/emilydavis',
      github: 'https://github.com/emilydavis'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Cloud Solutions Architect',
      bio: 'Cloud infrastructure expert with certifications in AWS, Azure, and Google Cloud Platform.',
      image: '/api/placeholder/300/300',
      email: 'alex@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/alexrodriguez',
      twitter: 'https://twitter.com/alexrodriguez',
      github: 'https://github.com/alexrodriguez'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      bio: 'Product strategy expert with a focus on user experience and market-driven solutions.',
      image: '/api/placeholder/300/300',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisawang',
      twitter: 'https://twitter.com/lisawang',
      github: 'https://github.com/lisawang'
    }
  ];

  const stats = [
    { value: '50+', label: 'Team Members' },
    { value: '15+', label: 'Years Experience' },
    { value: '25+', label: 'Countries Represented' },
    { value: '10+', label: 'Languages Spoken' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group's innovative AI and IT solutions. Expert professionals dedicated to your success." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind our innovative solutions and exceptional service. 
                Our diverse team brings together expertise from around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <UserGroupIcon className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400 font-medium">{member.role}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 text-center">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <EnvelopeIcon className="h-5 w-5 text-gray-300" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <LinkedinIcon className="h-5 w-5 text-gray-300" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <TwitterIcon className="h-5 w-5 text-gray-300" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      <GithubIcon className="h-5 w-5 text-gray-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We foster an environment of innovation, collaboration, and continuous learning.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We encourage creative thinking and embrace new technologies to solve complex problems.',
                  icon: '💡'
                },
                {
                  title: 'Collaborative Spirit',
                  description: 'We believe in the power of teamwork and cross-functional collaboration to achieve excellence.',
                  icon: '🤝'
                },
                {
                  title: 'Continuous Learning',
                  description: 'We invest in our team\'s growth through training, conferences, and professional development.',
                  icon: '📚'
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
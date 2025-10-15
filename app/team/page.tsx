import React from 'react';
import { Helmet } from 'react-helmet-async';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology. Kleber founded Zion Tech Group to democratize AI solutions for businesses of all sizes.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Business Development', 'Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'PhD in Machine Learning from MIT. Sarah leads our AI research and development, ensuring we stay at the forefront of AI innovation.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Deep Learning', 'Research']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with expertise in cloud infrastructure and scalable systems. Michael ensures our solutions are robust and scalable.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-cto',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and market needs. Emily ensures our solutions solve real business problems.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/emily-johnson-product',
      email: 'emily@ziontechgroup.com',
      expertise: ['Product Strategy', 'UX Design', 'Market Research']
    },
    {
      name: 'David Kim',
      role: 'Lead AI Engineer',
      bio: 'Full-stack AI engineer with expertise in natural language processing and computer vision. David builds the AI models that power our solutions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/david-kim-ai',
      email: 'david@ziontechgroup.com',
      expertise: ['NLP', 'Computer Vision', 'Model Deployment']
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Customer Success',
      bio: 'Customer advocate ensuring our clients achieve maximum value from our solutions. Lisa leads our support and success teams.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/lisa-wang-success',
      email: 'lisa@ziontechgroup.com',
      expertise: ['Customer Success', 'Support', 'Training']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      icon: '🚀'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and their business outcomes.',
      icon: '🎯'
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and transparent processes in everything we do.',
      icon: '🔍'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve by continuously learning and adapting to new technologies.',
      icon: '📚'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Experts</title>
        <meta name="description" content="Meet the talented team of AI and IT experts behind Zion Tech Group's innovative solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds behind our AI and IT solutions. We're passionate about technology and dedicated to your success.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-blue-300">{member.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Company Culture */}
          <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We work together to solve complex problems and deliver exceptional results.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creative thinking and embrace new technologies and approaches.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-gray-600">We invest in our team's development and provide opportunities for advancement.</p>
              </div>
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="bg-blue-600 rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals who share our passion for AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/careers" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:careers@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
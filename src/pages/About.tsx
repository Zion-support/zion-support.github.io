import React from 'react';
import { Users, Target, Award, Globe, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/team/john-smith.jpg',
      bio: 'Visionary leader with 15+ years in tech innovation.',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah-johnson.jpg',
      bio: 'Technical architect specializing in scalable solutions.',
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      image: '/team/mike-chen.jpg',
      bio: 'Full-stack developer passionate about clean code.',
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible in technology.',
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Security',
      description: 'Your data and privacy are our top priorities in everything we build.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs.',
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project we undertake.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to transforming businesses through innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, reliable, and 
                transformative for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to bridge the gap between complex technology and practical business 
                solutions, making advanced tools and systems accessible to everyone.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in technology solutions, creating a world where every 
                business can leverage technology to achieve their full potential and drive 
                meaningful change in their industries.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where technology seamlessly integrates with business 
                operations, creating unprecedented opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our success and your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help transform your business with our expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
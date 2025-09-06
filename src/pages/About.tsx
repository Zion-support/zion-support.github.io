import React from 'react';
import { Users, Award, Target, Globe, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Target className="h-8 w-8 text-blue-600" /> },
    { number: '50+', label: 'Expert Team Members', icon: <Users className="h-8 w-8 text-green-600" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Award className="h-8 w-8 text-purple-600" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="h-8 w-8 text-orange-600" /> }
  ];

  const values = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: 'Client-Centric Approach',
      description: 'Every project is tailored to meet our clients\' specific needs, ensuring maximum value and satisfaction.'
    },
    {
      icon: <Globe className="h-12 w-12 text-purple-600" />,
      title: 'Global Impact',
      description: 'We work with clients worldwide, bringing diverse perspectives and solutions to every challenge.'
    },
    {
      icon: <Award className="h-12 w-12 text-orange-600" />,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards of quality and reliability in every project we undertake.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of technology with AI-powered solutions, innovative development, and transformative digital experiences.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses worldwide with cutting-edge technology solutions that drive growth, 
                innovation, and digital transformation. We believe in making advanced technology accessible 
                and practical for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is to bridge the gap between complex technology and real-world business needs, 
                delivering solutions that not only meet current requirements but also anticipate future challenges.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in AI-powered technology solutions, recognized for our innovation, 
                reliability, and commitment to client success. We envision a world where technology seamlessly 
                enhances human potential and business capabilities.
              </p>
              <p className="text-lg text-gray-600">
                We strive to create a future where every organization can leverage the power of artificial 
                intelligence, cloud computing, and digital innovation to achieve unprecedented success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg">
              Start Your Project
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
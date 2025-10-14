import React from 'react';
import { 
  CheckIcon, 
  UsersIcon, 
  TrophyIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const stats = [
    { icon: UsersIcon, value: '500+', label: 'Happy Clients' },
    { icon: TrophyIcon, value: '50+', label: 'Awards Won' },
    { icon: LightBulbIcon, value: '1000+', label: 'Projects Completed' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex business challenges.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and services, ensuring every project exceeds expectations.'
    },
    {
      title: 'Partnership',
      description: 'We work closely with our clients as trusted partners, understanding their unique needs and goals.'
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We are a leading technology company specializing in AI and IT solutions. 
              Our mission is to empower businesses with innovative technology that drives 
              growth, efficiency, and success.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong className="text-gray-900">Expert Team:</strong> Our team consists of 
                  highly skilled professionals with deep expertise in AI, cloud computing, 
                  and enterprise software development.
                </p>
              </div>
              <div className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong className="text-gray-900">Proven Track Record:</strong> We have 
                  successfully delivered hundreds of projects for clients across various 
                  industries and company sizes.
                </p>
              </div>
              <div className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <strong className="text-gray-900">Cutting-Edge Technology:</strong> We 
                  leverage the latest technologies and best practices to deliver 
                  innovative solutions that give our clients a competitive advantage.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6 opacity-90">
                To democratize access to advanced technology and AI solutions, 
                enabling businesses of all sizes to compete and thrive in the 
                digital economy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Client-focused solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Sustainable growth strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
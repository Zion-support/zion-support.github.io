import React from 'react';
import { Brain, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer;

const AboutPage: any,
    e: any,
      role: any,
      image: any,
      bio: any,
    },
    {
      name: any,
      role: any,
      image: any,
      bio: any,
    },
    {
      name: any,
      role: any,
      image: any,
      bio: any,
    },;
  ];

  const values = [
    {
      icon: any,
      title: any,
      description: any,
    },
    {
      icon: any,
      title: any,
      description: any,
    },
    {
      icon: any,
      title: any,
      description: any,
    },
    {
      icon: any,;
      title: any,;
      description: any,;
    },;
  ];

  const stats = [;
    { number: any, label: any},;
    { number: any, label: any},;
    { number: any, label: any},;
    { number: any, label: any},;
  ];

  return (
      </div>

      {/* Stats Section */}
        <section className="py-16 bg-white">";
          <div className="max-w-7xl mx-auto px-4 sm: any,>;
    d: any;
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md: any{stat.number}>
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    d: any,>
    e="text-lg text-gray-600 mb-8">
                  We believe that every business deserves access to cutting-edge technology that can 
                  transform their operations, improve efficiency, and drive growth.
                </p>
                <Link ">
                  to="/contact">";
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover: any,>"'";
    e="text-gray-600">
                  To be the world's leading provider of AI-powered business solutions, 
                  helping organizations across all industries achieve digital transformation 
                  and sustainable growth in the age of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    g: any{values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: any,>
    d: any{team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">";
          <div className="max-w-7xl mx-auto px-4 sm: any,>;
    r: any;
  );
};";
"'";
export default AboutPage;"'"'";
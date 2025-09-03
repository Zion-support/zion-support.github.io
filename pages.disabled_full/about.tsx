import type { NextPage } from 'next';
import Head from 'next/head';
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react';

const About: NextPage = () => {};
    },
    {};
    },
    {};
    },
    {};
    }
  ];

  const values = [
    {};
    },
    {};
    },
    {};
    },
    {};
    },
    {};
    },
    {};
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="about us, team, mission, values, technology company, Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses 
              through innovative digital solutions and cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <p className="text-lg text-gray-600">
                  We believe that technology should be an enabler, not a barrier. Our team of 
                  experts works tirelessly to create solutions that are not only powerful but 
                  also intuitive and accessible.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To be the leading technology partner for businesses worldwide, known for 
                  delivering innovative solutions that transform industries and create lasting value.
                </p>
                <p className="text-lg text-gray-600">
                  We envision a future where every business can leverage cutting-edge technology 
                  to achieve their full potential and make a positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape the way we work with our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {};
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced team brings together diverse expertise to deliver exceptional 
                technology solutions for our clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {};
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div>Broken JSX</div>
              >
                Get Started Today
              </a>
              <div>Broken JSX</div>
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
;
export default About;
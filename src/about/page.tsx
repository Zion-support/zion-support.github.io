import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.'},
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical expert specializing in machine learning and cloud architecture.'},
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and developer with expertise in deep learning and NLP.'}

  ];

  const stats = [
    {/* TODO: Fix JSX expression */}
  l: 'Projects Completed' },
    {/* TODO: Fix JSX expression */}
  l: 'Happy Clients' },
    {/* TODO: Fix JSX expression */}
  l: 'Years Experience' },
    {/* TODO: Fix JSX expression */}
  l: 'Client Satisfaction' }
  ];

  const values = [

    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
    },
    {
      icon: Target,
      title: 'Results',
      description: 'We focus on delivering measurable business outcomes and ROI.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic technology partners.'
    }

  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}"
      <section className="relative py-20 px-4"></section>"
        <div className="max-w-7xl mx-auto text-center"></div>"
          <h1 className="text-5xl,"
  md:text-6xl font-bold text-white mb-6"></h1>"
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            We are pioneers in AI and IT solutions, transforming businesses through innovative technology and expert guidance.
          </p>
        </div>
      </section>


        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (}
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">

                    {stat.number}
                  </div>"
                  <div className="text-gray-600 font-medium"></div>
                    {stat.label}
                  </div>
                </div>)
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}"
        <section className="py-20 bg-gray-50"></section>"
          <div className="max-w-7xl mx-auto px-4,
  sm:px-6,"
  lg:px-8"></div>"
            <div className="grid grid-cols-1,"
  lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>"
                <h2 className="text-3xl,"
  md:text-4xl font-bold text-gray-900 mb-6"></h2>
                  Our Mission;
                </h2>"
                <p className="text-lg text-gray-600 mb-6"></p>
                  To democratize access to advanced AI technology and empower businesses of all sizes;
                  to achieve their full potential through innovative digital solutions.
                </p>"
                <p className="text-lg text-gray-600 mb-8"></p>
                  We believe that every business deserves access to cutting-edge technology that can;
                  transform their operations, improve efficiency, and drive growth.
                </p>

                <Link
                  to="/contact" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"

                >
                  Get in Touch;
                </Link>
              </div>"
              <div className="bg-white rounded-xl shadow-lg p-8"></div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>"
                <p className="text-gray-600"></p>
                  To be the world's leading provider of AI-powered business solutions,
                  helping organizations across all industries achieve digital transformation;
                  and sustainable growth in the age of artificial intelligence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

                Our Values;
              </h2>"
              <p className="text-xl text-gray-600"></p>
                The principles that guide everything we do;
              </p>
            </div>"
            <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-4 gap-8"></div>
              {values.map((value, index) => (}"
                <div key={index} className="text-center"></div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>"
                    <value.icon className="w-8 h-8 text-white" /></value>
                  </div>"
                  <h3 className="text-xl font-bold text-gray-900 mb-3"></h3>
                    {value.title}
                  </h3>"
                  <p className="text-gray-600"></p>
                    {value.description}
                  </p>

                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>

                <p className="text-gray-300">{member.bio}</p>
              </div>)
            ))}
          </div>
        </div>
      </section>


        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">

                Meet Our Team;
              </h2>"
              <p className="text-xl text-gray-600"></p>
                The experts behind our innovative solutions;
              </p>
            </div>"
            <div className="grid grid-cols-1,"
  md:grid-cols-3 gap-8"></div>
              {team.map((member, index) => (}"
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden"></div>"
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"></div>"
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center"></div>"
                      <Users className="w-16 h-16 text-gray-600" /></Users>
                    </div>
                  </div>"
                  <div className="p-6"></div>"
                    <h3 className="text-xl font-bold text-gray-900 mb-2"></h3>
                      {member.name}
                    </h3>"
                    <p className="text-blue-600 font-semibold mb-3"></p>
                      {member.role}
                    </p>"
                    <p className="text-gray-600"></p>
                      {member.bio}
                    </p>
                  </div>
                </div>)
              ))}
            </div>
          </div>
        </div>
      </section>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">

              Ready to Work With Us?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"></p>
              Let's discuss how we can help transform your business with our AI-powered solutions.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start a Project;
              </Link>
              <Link
                to="/careers" className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300"

              >
                Join Our Team;
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />

    </div>
  );
};


export default AboutPage;"




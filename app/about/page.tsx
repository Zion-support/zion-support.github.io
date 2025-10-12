import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, ArrowRight, Star} from 'lucide-react';
'use client';

const AboutPage: React.FC = () => {
  ArrowRight, Users, Shield, Globe, Brain, Cloud, CheckCircle, Award, Zap, Code, Star
} from 'lucide-react';
const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" / />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" / />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and measurable results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" / />,
      title: 'Security & Trust',
      description: 'We implement enterprise-grade security measures and maintain the highest standards of data protection and compliance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" / />,
      title: 'Agile Delivery',
      description: 'We deliver solutions quickly and efficiently, adapting to your changing needs with flexible development methodologies.'
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your business.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" / />,
      title: 'Client Success',
      description: 'We measure our success by your success. Our dedicated team ensures every project exceeds expectations.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" / />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across all time zones.'
    }
  ];
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Leadership',
      image: '/team/alex-johnson.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Technology Architecture',
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      image: '/team/michael.jpg',
      bio: 'AI researcher and machine learning expert with PhD in Computer Science.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Research']
    },
    {
      name: 'Emily Watson',
      role: 'Head of Engineering',
      expertise: 'Software Development',
      image: '/team/emily-watson.jpg',
  name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      image: '/team/emily.jpg',
      bio: 'Cybersecurity expert with extensive experience in enterprise security solutions.',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance']
    }
  ];
  return (
    <>
      <Helmet />
        <title  >About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta const name = "description" content="Learn about Zion Tech Group - a leading technology company providing AI solutions, cloud infrastructure, cybersecurity, and custom software development services." / / />
        <meta name="keywords" content="about us, company, team, AI solutions, technology company, IT services, cloud computing, cybersecurity" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto text-center" />
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"  >Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              We are a cutting-edge technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" />
              {stats.map((stat, index) => (
                <div key="{index}" className="text-center" />
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4" />
                    <stat.icon className="w-8 h-8 text-white" / />
                  </div>
                  <div className="text-3 xl font-bold text-white mb-2"  >{stat.number}</div>
                  <div className="text-gray-300"  >{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="grid lg:grid-cols-2 gap-12 items-center" />
              <div />
                <h2 className="text-4 xl font-bold text-white mb-6"  >Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and IT technologies, making them accessible to businesses of all sizes while maintaining the highest standards of security, performance, and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization, regardless of size or industry, should have access to cutting-edge technology solutions that can transform their operations and drive growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                 />
                  Get Started <ArrowRight className="ml-2 w-5 h-5" / />
                </Link>
              </div>
              <div className="relative" />
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2 xl p-8 backdrop-blur-sm border border-white/10" />
                  <div className="grid grid-cols-2 gap-6" />
                    <div className="text-center" />
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" />
                        <Brain className="w-8 h-8 text-white" / />
                      </div>
                      <h3 className="text-white font-semibold mb-2"  >AI Innovation</h3>
                      <p className="text-gray-300 text-sm">Advanced AI solutions</p>
                    </div>
                    <div className="text-center" />
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" />
                        <Cloud className="w-8 h-8 text-white" / />
                      </div>
                      <h3 className="text-white font-semibold mb-2"  >Cloud Solutions</h3>
                      <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
                    </div>
                    <div className="text-center" />
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" />
                        <Shield className="w-8 h-8 text-white" / />
                      </div>
                      <h3 className="text-white font-semibold mb-2"  >Security First</h3>
                      <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                    </div>
                    <div className="text-center" />
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4" />
                        <Code className="w-8 h-8 text-white" / />
                      </div>
                      <h3 className="text-white font-semibold mb-2"  >Custom Development</h3>
                      <p className="text-gray-300 text-sm">Tailored solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl font-bold text-white mb-6"  >Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                The principles that guide everything we do and shape our culture of excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {values.map((value, index) => (
                <div key="{index}" className="text-center group" />
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"  />{value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4"  >{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-4 xl font-bold text-white mb-6"  >Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {team.map((member, index) => (
                <div key="{index}" className="text-center group" />
                  <div className="relative mb-6" />
                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300" />
                      <span className="text-4 xl font-bold text-white"  />{member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2"  >{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-4 xl mx-auto text-center" />
            <h2 className="text-4 xl font-bold text-white mb-6"  >Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your success and accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" />
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                />Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                />Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
    </div>
  );
};

export default AboutPage;

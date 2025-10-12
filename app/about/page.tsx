'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Link as LinkIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  values = [
    {
      icon: <Brain className="w-8 h-8 tex t-cyan-400" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 tex t-purple-400" />,
      title: 'Security & Trust',
      description: 'Your data and business operations are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: <Users className="w-8 h-8 tex t-green-400" />,
      title: 'Client-Centric',
      description: 'We prioritize your success and work closely with you to understand your unique challenges and goals.'
    },
    {
      icon: <Zap className="w-8 h-8 tex t-yellow-400" />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do, from initial consultation to final delivery.'
    }
  ];

  team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI system design.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Machine learning specialist with expertise in NLP and computer vision.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring enterprise-grade protection.',
      image: '/team/emily.jpg'
    }
  ];

  timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes.'
    },
    {
      year: '2020',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business solutions, helping 50+ companies automate their processes.'
    },
    {
      year: '2021',
      title: 'Cloud Expansion',
      description: 'Expanded our cloud infrastructure services, becoming a certified AWS and Azure partner.'
    },
    {
      year: '2022',
      title: 'Micro SAAS Launch',
      description: 'Introduced our suite of micro SAAS products, making AI accessible to small and medium businesses.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded internationally, serving clients across North America, Europe, and Asia.'
    },
    {
      year: '2024',
      title: 'AI Revolution',
      description: 'Leading the next generation of AI solutions with advanced machine learning and automation.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, cybersecurity, and custom software development. Founded in 2019." />
        <meta name="keywords" content="about zion tech group, AI company, technology company, cloud solutions, cybersecurity, software development" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relativ e py-20 px-4 overflow-hidden">
          <div className="absolut e inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolut e inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relativ e max-w-7xl mx-auto text-center">
            <div className="inlin e-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Brain className="w-4 h-4" />
              <span>About Zion Tech Group</span>
            </div>
            
            <h1 className="tex t-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Pioneering the{' '}
              <span className="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of Technology
              </span>
            </h1>
            
            <p className="tex t-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Founded in 2019, Zion Tech Group is a leading technology company that specializes in 
              artificial intelligence, cloud infrastructure, cybersecurity, and custom software development. 
              We help businesses transform their operations with cutting-edge technology solutions.
            </p>
            
            <div className="fle x flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="grou p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5 grou p-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/team" 
                className="grou p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Meet Our Team</span>
                <ArrowRight className="w-5 h-5 grou p-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="p y-20 px-4 relative">
          <div className="absolut e inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relativ e max-w-7xl mx-auto">
            <div className="gri d grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="tex t-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="fle x justify-center mb-4">
                    <stat.icon className="w-6 h-6 tex t-cyan-400" />
                  </div>
                  <div className="tex t-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="tex t-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="p y-20 px-4 relative">
          <div className="relativ e max-w-7xl mx-auto">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>

            <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="grou p bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="fle x items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="tex t-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="tex t-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="p y-20 px-4 relative">
          <div className="relativ e max-w-7xl mx-auto">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                Talented professionals dedicated to delivering exceptional technology solutions
              </p>
            </div>

            <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="grou p bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center">
                  <div className="w-2 4 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-1 2 h-12 text-white" />
                  </div>
                  <h3 className="tex t-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="tex t-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="tex t-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="p y-20 px-4 relative">
          <div className="relativ e max-w-7xl mx-auto">
            <div className="tex t-center mb-16">
              <h2 className="tex t-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our company's growth and evolution
              </p>
            </div>

            <div className="relativ e">
              <div className="absolut e left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              <div className="spac e-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="b g-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="tex t-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="tex t-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="tex t-gray-300">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center relative z-10">
                      <div className="w-4 h-4 b g-white rounded-full"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="p y-20 px-4">
          <div className="ma x-w-7xl mx-auto">
            <div className="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolut e inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relativ e z-10">
                <h2 className="tex t-4xl font-bold text-white mb-6">
                  Ready to Work With Us?
                </h2>
                <p className="tex t-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
                  Let's build something amazing together.
                </p>
                <div className="fle x flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Project
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="borde r border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="m t-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
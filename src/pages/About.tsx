import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Target, Shield, TrendingUp, Globe } from 'lucide-react'

const About: React.FC = () => {/* content */}
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Countries Served', value: '25+' }
  ];

  const values = [
    {/* content */}
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.'
    },
    {/* content */}
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.'
    },
    {/* content */}
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.'
    },
    {/* content */}
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    }
  ];

  const team = [
    {/* content */}
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com'
    },
    {/* content */}
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com'
    },
    {/* content */}
import {/* content */}
  Target,
  Shield,
  TrendingUp,
  Globe,
  Users,
  MapPin,
  Phone,
  Award,
  Mail
} from 'lucide-react'

const About: React.FC = () => {/* content */}
  const stats = [
    {/* content */}
      icon: Users,
      value: '500+',
      label: 'Projects Completed'
    },
    {/* content */}
      icon: Globe,
      value: '50+',
      label: 'Countries Served'
    },
    {/* content */}
      icon: TrendingUp,
      value: '75%',
      label: 'Average Cost Reduction'
    },
    {/* content */}
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee'
    }
  ];

  const values = [
    {/* content */}
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.'
    },
    {/* content */}
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.'
    },
    {/* content */}
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.'
    },
    {/* content */}
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    }
  ];

  const team = [
    {/* content */}
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com'
    },
    {/* content */}
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com'
    },
    {/* content */}
      name: 'DevOps Specialists',
      role: 'Infrastructure Experts',
      description: 'Cloud and DevOps professionals ensuring scalable and secure infrastructure solutions.',
      email: 'devops@ziontechgroup.com'
    }
  ];

  return (
    <div>
      <div></div>
      <div></div>
    </div>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"></div>
        <div className="container mx-auto px-4 py-12"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"></p>
              We are a leading provider of cutting-edge AI and IT solutions that transform businesses. 
              Our mission is to empower organizations with innovative technology that drives growth and success.
            </p>
          </div>

          {/* Stats */}
          <section className="mb-16"></section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              {stats.map((stat, index) => (
                <div key={index} className="text-center"></div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
              {stats.map((stat, index) => {/* content */}
                const Icon = stat.icon;
                return (
  <div></div>
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center"></div>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16"></section>
            <div className="grid md:grid-cols-2 gap-8"></div>
              <div className="bg-white rounded-lg shadow-lg p-8"></div>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6"></div>
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600"></p>
                  To revolutionize business operations through innovative AI and technology solutions, 
                  empowering organizations to achieve unprecedented growth and efficiency.
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600"></p>
                  To democratize advanced AI and technology solutions, making them accessible and affordable 
                  for businesses of all sizes. We believe that cutting-edge technology should be a catalyst 
                  for growth, not a barrier to entry.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8"></div>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6"></div>
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600"></p>
                  To be the global leader in AI-driven business transformation, creating a world 
                  where technology seamlessly enhances human potential and business success.
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600"></p>
                  To be the global leader in AI-powered business transformation, creating a world where 
                  every organization can leverage advanced technology to achieve unprecedented levels of 
                  efficiency, innovation, and success.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center"></div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <value.icon className="w-8 h-8 text-blue-600" />
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
                These principles guide everything we do and shape our commitment to excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {values.map((value, index) => {/* content */}
                const Icon = value.icon;
                return (
  <div></div>
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center"></div>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16"></section>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8"></div>
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center"></div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <span className="text-white text-2xl font-bold"></span>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto"></p>
                Our diverse team of experts brings together decades of experience in AI, technology, and business transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8"></div>
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center"></div>
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  ></a>
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800 transition-colors"></a>
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center"></section>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"></div>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-6"></p>
                Let's discuss how our AI and technology solutions can drive your success.
              </p>
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              ></a>
                Get Started Today
              </a>
          {/* Company Info */}
          <section className="mb-16"></section>
            <div className="bg-white rounded-xl shadow-lg p-8"></div>
              <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Company Information</h2>
                <p className="text-lg text-gray-600"></p>
                  Zion Tech Group is headquartered in Delaware, USA, with a global presence serving clients worldwide.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8"></div>
                <div className="text-center"></div>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
                  <p className="text-gray-600"></p>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                </div>
                <div className="text-center"></div>
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600"></p>
                    Phone: +1 302 464 0950<br />
                    Email: kleber@ziontechgroup.com<br />
                    Available 24/7
                  </p>
                </div>
                <div className="text-center"></div>
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Certifications</h3>
                  <p className="text-gray-600"></p>
                    AWS Certified<br />
                    Microsoft Partner<br />
                    Google Cloud Partner<br />
                    HIPAA Compliant
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center"></section>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"></div>
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
              <p className="text-xl mb-8 opacity-90"></p>
                Let's discuss how our technology solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a href="tel:+13024640950" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                ></a>
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                ></a>
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Us Today
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;))))
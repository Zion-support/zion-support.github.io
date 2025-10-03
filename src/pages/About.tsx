import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Target, Shield, TrendingUp, Globe } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Countries Served', value: '25+' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We focus on delivering strategic AI solutions that align with your business objectives and drive measurable results.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Robust security measures and compliance standards ensure your data and systems are protected at all times.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Our solutions are designed to scale with your business, supporting growth from startup to enterprise level.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com'
    },
    {
      name: 'DevOps & Infrastructure Team',
      role: 'Cloud Architecture Experts',
      description: 'Specialists in scalable cloud infrastructure and deployment automation.',
      email: 'devops@ziontechgroup.com'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com'
    },
    {
      name: 'DevOps & Infrastructure Team',
      role: 'Cloud Architecture Experts',
      description: 'Specialists in scalable cloud infrastructure and deployment automation.',
      email: 'devops@ziontechgroup.com'
    }
  ];
      email: 'devops@ziontechgroup.com'
    }
  ]
>>>>>>> main

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group | Leading AI & Technology Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a leading provider of cutting-edge AI and IT solutions that transform businesses. 
              Our mission is to empower organizations with innovative technology that drives growth and success.
            </p>
=======
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our AI-powered enterprise solutions." />
        <meta name="keywords" content="about us, team, company, AI solutions, enterprise technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                We're revolutionizing enterprise technology through AI-powered solutions that drive real business results.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                    <div className="text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize business operations through innovative AI and technology solutions, 
                  empowering organizations to achieve unprecedented growth and efficiency.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in AI-driven business transformation, creating a world 
                  where technology seamlessly enhances human potential and business success.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-6">
                Let's discuss how our AI and technology solutions can drive your success.
              </p>
              <a 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Started Today
              </a>
=======
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To empower enterprises with cutting-edge AI solutions that transform operations, 
                enhance productivity, and drive sustainable growth in the digital age.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>AI-powered automation solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Enterprise digital transformation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Custom machine learning models</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Cloud infrastructure optimization</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Proven track record of success</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Expert team of AI specialists</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>24/7 dedicated support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" size={20} />
                      <span>Scalable and secure solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.description}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Contact <ArrowRight className="ml-1" size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how our AI solutions can drive your enterprise forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </a>
                <a 
                  href="/services" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Our Services
                </a>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
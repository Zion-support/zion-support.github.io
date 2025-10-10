'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AboutPage: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '25+' }
  ];

  const values = [
    {
      icon: CpuChipIcon,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Reliability',
      description: 'Our solutions are built with enterprise-grade security and reliability, ensuring your business runs smoothly 24/7.'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, understanding their unique needs and delivering tailored solutions.'
    },
    {
      icon: ChartBarIcon,
      title: 'Results',
      description: 'We measure success by the impact we create for our clients, focusing on measurable business outcomes.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in AI architecture and enterprise technology solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Leading researcher in machine learning and neural networks.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of IT Services',
      description: 'Specialist in cloud infrastructure and cybersecurity solutions.',
      image: '/api/placeholder/300/300'
    }
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and IT solutions for businesses of all sizes.'
    },
    {
      year: '2016',
      title: 'First AI Product Launch',
      description: 'Launched our first AI-powered micro SAAS solution, revolutionizing how businesses manage their operations.'
    },
    {
      year: '2018',
      title: 'Enterprise Expansion',
      description: 'Expanded our services to include comprehensive IT solutions for enterprise clients across multiple industries.'
    },
    {
      year: '2020',
      title: 'Cloud Migration Services',
      description: 'Introduced specialized cloud migration and infrastructure services, helping businesses modernize their IT infrastructure.'
    },
    {
      year: '2022',
      title: 'AI Innovation Lab',
      description: 'Established our AI Innovation Lab to research and develop next-generation AI solutions and technologies.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded our services globally, serving clients across North America, Europe, and Asia-Pacific regions.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered micro SAAS services and IT solutions. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about us, AI company, IT solutions, micro SAAS, team, mission, values, technology innovation" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI-powered micro SAAS services and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions, empowering businesses to achieve 
              unprecedented growth and efficiency through cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes 
                to harness the power of technology for growth, efficiency, and innovation. We believe 
                that every organization deserves access to cutting-edge tools that can transform their 
                operations and drive success.
              </p>
              <p className="text-lg text-gray-600">
                Through our comprehensive suite of micro SAAS services, AI solutions, and IT services, 
                we're building a future where technology empowers rather than complicates, where 
                innovation is accessible, and where every business can achieve its full potential.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in AI-powered business solutions, recognized for our innovation, 
                reliability, and commitment to client success. We envision a world where artificial 
                intelligence and advanced IT infrastructure work seamlessly together to create 
                unprecedented opportunities for growth and efficiency.
              </p>
              <p className="text-lg text-gray-600">
                Our vision extends beyond technology—we see ourselves as catalysts for transformation, 
                helping businesses not just adapt to the digital age, but thrive in it. We're building 
                the foundation for the next generation of intelligent, efficient, and successful organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experts behind our innovative solutions and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserGroupIcon className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform businesses through technology
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can transform your business. 
            Get in touch with our team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-200"
            >
              Get in Touch
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;
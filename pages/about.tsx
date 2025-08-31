import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Users, Target, Award, Globe, Shield, Zap } from 'lucide-react';

const About: NextPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: Zap
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'We build trust through honest communication and ethical business practices.',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their success is our success.',
      icon: Users
    },
    {
      title: 'Global Perspective',
      description: 'We bring international expertise and diverse perspectives to every project.',
      icon: Globe
    },
    {
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive business growth.',
      icon: Target
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology consulting and digital transformation.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and AI systems with deep technical expertise.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative director specializing in user experience and digital product design.',
      image: '/team/emily.jpg'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies and frameworks.',
      image: '/team/david.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <MainLayout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and the team behind our innovative technology solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Zion Tech Group</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are passionate technologists dedicated to transforming businesses through 
              innovative technology solutions and digital excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive 
                innovation, efficiency, and growth. We believe that technology should be 
                an enabler, not a barrier, to business success.
              </p>
              <p className="text-lg text-gray-600">
                Our team combines deep technical expertise with business acumen to deliver 
                solutions that not only meet current needs but also scale for future growth.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading technology partner for businesses seeking digital 
                transformation, known for our innovative solutions, exceptional service, 
                and unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where every business can leverage technology to 
                achieve its full potential and create lasting value for stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
      <section className="py-20 bg-gray-50" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals who make Zion Tech Group a leader in 
              technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <Users className="h-16 w-16 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Zion Tech Group began with a simple mission: to make 
                advanced technology accessible to businesses of all sizes. What started 
                as a small team of passionate developers has grown into a comprehensive 
                technology solutions provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've helped hundreds of companies transform their 
                digital presence, streamline operations, and achieve their business goals 
                through innovative technology solutions.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of what's possible with 
                technology, always keeping our clients' success at the heart of 
                everything we do.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Proven track record of successful projects</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Expert team with deep technical knowledge</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Personalized approach to every project</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
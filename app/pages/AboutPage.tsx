import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircleIcon,
      title: 'Mission-Driven',
      description: 'We are committed to delivering innovative solutions that drive real business value and transformation.'
    },
    {
      icon: UserGroupIcon,
      title: 'Client-Focused',
      description: 'Our success is measured by our clients\' success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and maintain complete transparency in all our dealings.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial consultation to final delivery and ongoing support.'
    },
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and improve lives.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '/api/placeholder/300/300',
      bio: 'Former Google AI researcher with expertise in machine learning and business strategy.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Infrastructure',
      experience: '12+ years',
      image: '/api/placeholder/300/300',
      bio: 'Ex-AWS architect specializing in scalable cloud solutions and DevOps practices.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      expertise: 'Cybersecurity',
      experience: '10+ years',
      image: '/api/placeholder/300/300',
      bio: 'Former NSA security analyst with deep expertise in threat detection and response.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      experience: '8+ years',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer with expertise in modern web technologies and mobile development.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  const milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and IT solutions.'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful AI transformation project.'
    },
    {
      year: '2020',
      title: 'Cloud Migration Expertise',
      description: 'Developed specialized cloud migration services and helped 50+ companies move to the cloud.'
    },
    {
      year: '2021',
      title: 'AI Platform Launch',
      description: 'Launched our proprietary AI platform, enabling rapid deployment of AI solutions.'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded operations to Europe and Asia, serving clients across multiple continents.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for innovation and excellence in AI and IT services.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're a leading provider of AI and IT solutions with 500+ successful projects." />
        <meta name="keywords" content="about us, company, team, mission, values, AI company, IT company, technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI and IT solutions. 
              Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize access to advanced AI and IT solutions, enabling businesses of all sizes to 
                  leverage cutting-edge technology for growth, efficiency, and innovation. We believe that 
                  technology should be accessible, understandable, and transformative.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted partner for AI and IT transformation, recognized for our 
                  innovation, integrity, and commitment to client success. We envision a future where every 
                  business can harness the power of technology to achieve its full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-3">{member.expertise} • {member.experience}</p>
                  <p className="text-gray-300 text-xs">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that trust us with their technology transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Get in Touch
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
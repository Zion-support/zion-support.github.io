import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  HeartIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
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
      icon: StarIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Growth',
      description: 'We foster continuous learning and development for both our team and our clients.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technical architect specializing in scalable AI solutions.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'AI researcher with expertise in machine learning and neural networks.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      description: 'Operations expert ensuring smooth project delivery and client satisfaction.',
      image: '/team/emily-rodriguez.jpg'
    }
  ];

  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, values, and expertise in AI and IT solutions. Discover our team and company culture."
        keywords="about us, company, team, mission, values, AI solutions, IT services"
        url="/about"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Founded in 2020, Zion Tech Group has been at the forefront of artificial intelligence 
              and technology innovation, helping businesses transform their operations and achieve 
              unprecedented growth through cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize artificial intelligence and advanced technology solutions, 
                  making them accessible to businesses of all sizes while maintaining the 
                  highest standards of quality, security, and innovation.
                </p>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To be the global leader in AI-powered business transformation, creating 
                  a world where technology seamlessly integrates with human potential to 
                  solve the most complex challenges of our time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300 text-lg">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-gray-300 text-lg">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">4+</div>
              <div className="text-gray-300 text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our AI and technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Services
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

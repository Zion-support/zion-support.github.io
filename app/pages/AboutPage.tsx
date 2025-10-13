import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
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
      icon: StarIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and continuously strive for excellence in everything we do.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Agility',
      description: 'We adapt quickly to changing market conditions and client needs to deliver optimal solutions.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      bio: 'Visionary leader with 4+ years of experience in AI and IT solutions, driving innovation and business transformation.'
    },
    {
      name: 'AI Development Team',
      role: 'AI Specialists',
      image: '/api/placeholder/300/300',
      bio: 'Expert team of AI engineers and data scientists specializing in machine learning, NLP, and computer vision.'
    },
    {
      name: 'IT Solutions Team',
      role: 'IT Architects',
      image: '/api/placeholder/300/300',
      bio: 'Skilled professionals in cloud infrastructure, cybersecurity, and digital transformation strategies.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  return (
    <>
      <EnhancedSEO
        title="About Us - Zion Tech Group | AI and IT Solutions"
        description="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that transform businesses."
        keywords="about us, team, mission, values, AI solutions, IT services, company"
        canonicalUrl="/about"
        ogImage="/api/placeholder/1200/630"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Pioneering the Future of AI and IT Solutions
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Founded in 2020, Zion Tech Group has been at the forefront of technological innovation, 
              helping businesses harness the power of artificial intelligence and cutting-edge IT solutions 
              to achieve unprecedented growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To democratize access to advanced AI and IT solutions, empowering businesses of all sizes 
                  to compete and thrive in the digital economy through innovative technology and expert guidance.
                </p>
                <div className="flex items-center text-purple-400">
                  <HeartIcon className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Driven by Purpose</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  To be the global leader in AI and IT transformation, creating a world where every business 
                  can leverage cutting-edge technology to solve complex challenges and achieve sustainable growth.
                </p>
                <div className="flex items-center text-cyan-400">
                  <RocketLaunchIcon className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Building the Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
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
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate professionals behind our success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-center mb-4 font-semibold">{member.role}</p>
                <p className="text-gray-300 text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
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
              Let's discuss how our expertise can help transform your business
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
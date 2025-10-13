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
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value."
    },
    {
      icon: UserGroupIcon,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new ways to solve complex business problems."
    },
    {
      icon: ShieldCheckIcon,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, ensuring transparency and trust in all our relationships."
    },
    {
      icon: RocketLaunchIcon,
      title: "Growth",
      description: "We are committed to helping our clients grow and succeed in an ever-evolving digital landscape."
    },
    {
      icon: HeartIcon,
      title: "Passion",
      description: "We are passionate about technology and its potential to transform businesses and improve lives."
    }
  ];

  const team = [
    {
      name: "Kleber Santos",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in AI and technology innovation.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      description: "Expert in cloud architecture and scalable system design.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "Head of AI",
      description: "Machine learning specialist with expertise in NLP and computer vision.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emily Rodriguez",
      role: "Security Director",
      description: "Cybersecurity expert ensuring our solutions are secure and compliant.",
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and expertise in AI and IT solutions. Discover our team and company culture." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animated-bg particles">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-purple">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through innovative technology solutions and cutting-edge AI applications
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2020, we've been at the forefront of digital transformation, 
              helping companies leverage the power of artificial intelligence, cybersecurity, 
              and cloud technologies to achieve unprecedented growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="holographic-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-cyan">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize advanced technology and make cutting-edge AI and IT solutions 
                accessible to businesses of all sizes. We believe that every company deserves 
                access to the tools and technologies that can transform their operations and 
                drive sustainable growth.
              </p>
            </div>
            
            <div className="holographic-card p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text-cyan">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading provider of AI and IT solutions that enable businesses to 
                thrive in the digital age. We envision a future where technology seamlessly 
                integrates with business processes, creating unprecedented opportunities for 
                innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 matrix-rain">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-purple">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="holographic-card p-8 rounded-xl hover-lift hover-glow transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 neon-glow-purple">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-cyan">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="holographic-card p-6 rounded-xl hover-lift hover-glow transition-all duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center neon-glow-purple">
                  <UserGroupIcon className="w-12 h-12 text-white" />
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 animated-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-purple">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl font-bold text-purple-400 mb-2 neon-text-purple group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-cyan-400 mb-2 neon-text-cyan group-hover:scale-110 transition-transform">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-green-400 mb-2 neon-text-green group-hover:scale-110 transition-transform">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-yellow-400 mb-2 neon-text-yellow group-hover:scale-110 transition-transform">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text-purple">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how we can help transform your business with our innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center justify-center gap-3"
              >
                Get In Touch
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-purple-400 text-purple-300 px-10 py-5 rounded-lg font-semibold text-xl hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift flex items-center justify-center gap-3"
              >
                View Our Services
                <ArrowRightIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  Clock
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
  const companyStats = [
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'Client Satisfaction', value: '99%', icon: Heart }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/images/team/sarah.jpg',
      bio: 'Visionary leader with 15+ years in tech innovation',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/images/team/michael.jpg',
      bio: 'AI and machine learning expert driving technical excellence',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/images/team/emily.jpg',
      bio: 'Creative director focused on user experience and innovation',
      social: { linkedin: '#', dribbble: '#' }
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients success is our success. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure exceptional outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more connected, and more accessible.'
    }
  ];

  return (
    <>
      <SEO 
        title="About Zion Tech Group - Leading Technology Solutions"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering innovative technology solutions that drive business success."
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses 
              through innovative AI solutions and cutting-edge digital services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To democratize access to advanced AI technologies and empower businesses of all sizes 
              to achieve unprecedented growth and efficiency through intelligent automation and data-driven insights.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in AI-powered business solutions, creating a world where 
                  technology seamlessly enhances human potential and drives sustainable growth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Values</h3>
                <p className="text-gray-600">
                  Innovation, integrity, and impact guide everything we do. We believe in building 
                  technology that serves humanity and creates positive change in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-3">
                      <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800">
                        LinkedIn
                      </a>
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-blue-600 hover:text-blue-800">
                          Twitter
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-blue-600 hover:text-blue-800">
                          GitHub
                        </a>
                      )}
                      {member.social.dribbble && (
                        <a href={member.social.dribbble} className="text-blue-600 hover:text-blue-800">
                          Dribbble
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

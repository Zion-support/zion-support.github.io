import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Award,
  CheckCircle,
  Users,
  Star,
  Target,
  Shield,
  TrendingUp,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver solutions that give you a competitive edge in the market.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures protect your data and ensure compliance with industry standards.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'We deliver quantifiable outcomes with average 75% cost reduction and 10x efficiency gains.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support and localized solutions for international markets.',
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years in AI and enterprise solutions.',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/klebersantos',
      image: '/team/kleber-santos.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and the team behind our innovative AI and technology solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a technology company dedicated to transforming businesses through innovative AI solutions, 
              enterprise automation, and cutting-edge digital transformation services.
            </p>
          </div>

          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
                To democratize advanced technology and make AI-powered solutions accessible to businesses of all sizes. 
                We believe that every organization, regardless of size or industry, should have access to cutting-edge 
                technology that can transform their operations and drive growth.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your business with our technology solutions? Let's discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
              <div className="mt-8 text-gray-600">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  364 E Main St STE 1008, Middletown, DE 19709
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
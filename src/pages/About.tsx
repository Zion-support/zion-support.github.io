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
  Heart,
  Lightbulb,
  Globe,
  Phone,
  Mail,
  MapPin
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
      title: 'Scalable Growth',
      description: 'Our solutions grow with your business, ensuring long-term value and adaptability.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service.',
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business development.',
      image: '/images/team/kleber.jpg'
    },
    {
      name: 'AI Development Team',
      role: 'AI Specialists',
      description: 'Expert engineers specializing in machine learning, automation, and AI solutions.',
      image: '/images/team/ai-team.jpg'
    },
    {
      name: 'DevOps Engineers',
      role: 'Infrastructure Specialists',
      description: 'Cloud architecture and deployment experts ensuring scalable, secure solutions.',
      image: '/images/team/devops-team.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering innovative AI and technology solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a forward-thinking technology company dedicated to transforming businesses through innovative AI solutions, 
              cloud infrastructure, and cutting-edge software development.
            </p>
          </div>

          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge AI and technology solutions that drive innovation, 
                  efficiency, and growth. We believe in the transformative power of technology to solve complex 
                  challenges and create opportunities.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading provider of AI-powered solutions that revolutionize how businesses operate, 
                  making advanced technology accessible and beneficial for organizations of all sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get to Know Us Better</h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to work with a team that's passionate about technology and committed to your success?
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Middletown, DE</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Call Us
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
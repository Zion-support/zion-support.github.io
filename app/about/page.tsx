import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Users, Award, Target, Zap, Shield, Globe, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Successful Projects' },
    { icon: Target, value: '300%', label: 'Average ROI' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We build long-term partnerships and tailor solutions to your specific business needs.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service and project delivery.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We help businesses worldwide transform with AI and IT solutions, creating positive impact across industries.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'AI and technology visionary with 15+ years of experience in enterprise solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in AI architecture and cloud infrastructure with a passion for innovation.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Leading AI researcher specializing in machine learning and neural networks.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of IT Services',
      description: 'Cybersecurity and infrastructure expert ensuring robust and secure solutions.',
      image: '/team/emily-rodriguez.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI and IT solutions. Meet our team of experts." />
        <meta name="keywords" content="about us, team, AI experts, IT professionals, company mission, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're a leading technology company dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to help organizations achieve unprecedented growth and efficiency.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize AI and advanced IT solutions, making them accessible to businesses of all sizes. 
                  We believe that every organization deserves access to cutting-edge technology that can transform 
                  their operations and drive unprecedented growth.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's leading provider of AI-powered enterprise solutions, helping businesses 
                  achieve 300% ROI, 70% cost reduction, and 90% efficiency gains through intelligent automation 
                  and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-6 backdrop-blur-sm border border-slate-700 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-12 text-center backdrop-blur-sm border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all duration-300 font-semibold border border-slate-700"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
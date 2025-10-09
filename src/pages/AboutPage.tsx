import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Target, Globe, Brain, Shield, Zap, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Bank-level security and compliance for all our solutions and client data.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver exceptional results through meticulous attention to detail.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand and exceed their expectations.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Executive Officer',
      image: '/team/sarah-chen.jpg',
      bio: 'AI researcher with 15+ years experience in machine learning and quantum computing.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      image: '/team/michael-rodriguez.jpg',
      bio: 'Technology visionary specializing in cloud infrastructure and digital transformation.'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of AI Research',
      image: '/team/priya-patel.jpg',
      bio: 'Leading expert in natural language processing and computer vision technologies.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Cybersecurity',
      image: '/team/james-wilson.jpg',
      bio: 'Cybersecurity expert with extensive experience in enterprise security solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for modern enterprises." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-cyan-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI solutions, quantum computing, 
                and digital transformation services for modern enterprises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize access to cutting-edge AI and technology solutions, enabling 
                  businesses of all sizes to harness the power of artificial intelligence for 
                  growth and innovation.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Target className="h-5 w-5" />
                  <span className="font-semibold">Empowering Innovation</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the global leader in AI and technology solutions, creating a future 
                  where artificial intelligence seamlessly integrates with human potential 
                  to solve the world's most complex challenges.
                </p>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Globe className="h-5 w-5" />
                  <span className="font-semibold">Global Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                We combine cutting-edge technology with exceptional service to deliver results that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Proven Expertise</h3>
                </div>
                <p className="text-gray-300">
                  Our team has decades of combined experience in AI, machine learning, and enterprise technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Rapid Deployment</h3>
                </div>
                <p className="text-gray-300">
                  We deliver solutions quickly without compromising on quality or security.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Industry Recognition</h3>
                </div>
                <p className="text-gray-300">
                  Award-winning solutions and recognition from leading industry organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and technology solutions can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
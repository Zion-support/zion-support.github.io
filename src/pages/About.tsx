import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Target,
  Shield,
  TrendingUp,
  Users,
  Award,
  Globe
} from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '24/7', label: 'Support Available' }
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
    },
    {
      name: 'AI Engineering Team',
      role: 'Machine Learning Specialists',
      description: 'Expert team of AI engineers specializing in cutting-edge machine learning technologies.',
      email: 'ai-team@ziontechgroup.com',
    },
    {
      name: 'DevOps Specialists',
      role: 'Infrastructure Experts',
      description: 'Cloud and DevOps professionals ensuring scalable and secure infrastructure solutions.',
      email: 'devops@ziontechgroup.com',
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - AI & Enterprise Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and enterprise solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of enterprise AI solutions with cutting-edge technology and innovative approaches.
            </p>
          </div>

          {/* Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              To revolutionize enterprise operations through AI-powered solutions that drive innovation, 
              efficiency, and growth for modern businesses.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.description}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;